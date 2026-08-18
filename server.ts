import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

interface LeadData {
  id: string;
  timestamp: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  parentOccupation?: string;
  childName: string;
  childAge: string;
  childGender: string;
  concerns: string[];
  otherConcern?: string;
  situationDescription: string;
  desiredOutcome: string;
  preferredConsultation: string;
  preferredContactMethod: string;
  preferredTime: string;
  consentConfirmed: boolean;
}

// In-memory lead store
const leadsStore: LeadData[] = [];
let configuredWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbztFACMAxS8GsP82Hr8t_DvohiPexRhptYRlDSU9IRAmF1Q6Fplh4EL9bzJi3k0dGM0/exec";

const GOOGLE_APPS_SCRIPT_CODE = `/**
 * GOOGLE APPS SCRIPT FOR CHILD & TEEN COUNSELLING LEADS
 * Instructions:
 * 1. Open Google Sheets (https://sheets.new)
 * 2. Click Extensions > Apps Script
 * 3. Replace all code in Code.gs with this script
 * 4. Click 'Save' (floppy disk icon)
 * 5. Click 'Deploy' > 'New deployment'
 * 6. Select type: 'Web app'
 * 7. Set 'Execute as': 'Me'
 * 8. Set 'Who has access': 'Anyone' (Crucial for receiving submissions)
 * 9. Click 'Deploy', authorize permissions, and copy the Web App URL!
 * 10. Paste the Web App URL into your app's Google Sheet Integration settings panel.
 */

function setupSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var headers = [
    "Timestamp",
    "Parent Full Name",
    "Email Address",
    "Phone Number",
    "Occupation",
    "Child's Full Name",
    "Child's Age Group",
    "Gender",
    "Challenges / Concerns",
    "Other Challenge Details",
    "Situation Description",
    "Desired Outcomes",
    "Preferred Consultation Type",
    "Preferred Contact Method",
    "Preferred Contact Time",
    "Consent Given"
  ];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#4A154B").setFontColor("#FFFFFF");
  }
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    setupSheet();
    
    var data = JSON.parse(e.postData.contents);
    
    var row = [
      new Date().toLocaleString(),
      data.parentName || "",
      data.parentEmail || "",
      data.parentPhone || "",
      data.parentOccupation || "",
      data.childName || "",
      data.childAge || "",
      data.childGender || "",
      Array.isArray(data.concerns) ? data.concerns.join(", ") : (data.concerns || ""),
      data.otherConcern || "",
      data.situationDescription || "",
      data.desiredOutcome || "",
      data.preferredConsultation || "",
      data.preferredContactMethod || "",
      data.preferredTime || "",
      data.consentConfirmed ? "Yes" : "No"
    ];
    
    sheet.appendRow(row);
    
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "row": sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Child & Teen Counselling Lead Capture Webhook is Live!");
}`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Get Google Apps Script Code
  app.get("/api/google-sheet-script", (req, res) => {
    res.json({
      script: GOOGLE_APPS_SCRIPT_CODE,
      configuredWebhookUrl
    });
  });

  // API Route: Save/Update Webhook URL
  app.post("/api/settings/webhook", (req, res) => {
    const { webhookUrl } = req.body;
    configuredWebhookUrl = webhookUrl || "";
    res.json({ success: true, webhookUrl: configuredWebhookUrl });
  });

  // API Route: Submit Lead
  app.post("/api/submit-lead", async (req, res) => {
    try {
      const leadInput = req.body;
      const newLead: LeadData = {
        id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
        timestamp: new Date().toISOString(),
        ...leadInput,
      };

      leadsStore.unshift(newLead);

      // Target WhatsApp Number: 08073327207 -> International format: 2348073327207
      const whatsappNumber = "2348073327207";
      const concernsList = Array.isArray(newLead.concerns) ? newLead.concerns.join(", ") : newLead.concerns;
      const otherDetail = newLead.otherConcern ? ` (${newLead.otherConcern})` : "";

      const whatsappText = `*NEW CONSULTATION REQUEST* 🌟

*Parent Details:*
• *Name:* ${newLead.parentName}
• *Phone:* ${newLead.parentPhone}
• *Email:* ${newLead.parentEmail}
• *Occupation:* ${newLead.parentOccupation || "N/A"}

*Child Details:*
• *Name:* ${newLead.childName}
• *Age Group:* ${newLead.childAge}
• *Gender:* ${newLead.childGender}

*Concerns:*
${concernsList}${otherDetail}

*Situation Summary:*
"${newLead.situationDescription.trim()}"

*Desired Positive Changes:*
"${newLead.desiredOutcome.trim()}"

*Preferences:*
• *Consultation Type:* ${newLead.preferredConsultation}
• *Preferred Contact:* ${newLead.preferredContactMethod}
• *Preferred Time:* ${newLead.preferredTime}`;

      const encodedMessage = encodeURIComponent(whatsappText);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Forward to Google Sheet Webhook if configured
      let sheetForwarded = false;
      let sheetError = null;

      const activeWebhook = req.body.customWebhookUrl || configuredWebhookUrl;
      if (activeWebhook && activeWebhook.trim().length > 10) {
        try {
          const response = await fetch(activeWebhook.trim(), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newLead),
          });
          if (response.ok) {
            sheetForwarded = true;
          }
        } catch (err: any) {
          console.error("Error forwarding to Google Sheet:", err);
          sheetError = err.message || "Failed to reach Google Sheets Webhook";
        }
      }

      res.json({
        success: true,
        leadId: newLead.id,
        whatsappUrl,
        whatsappText,
        sheetForwarded,
        sheetError,
      });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message || "Failed to process lead" });
    }
  });

  // API Route: Get Leads List for Admin Drawer
  app.get("/api/leads", (req, res) => {
    res.json({
      leads: leadsStore,
      totalCount: leadsStore.length,
    });
  });

  // API Route: Export Leads CSV
  app.get("/api/leads/export", (req, res) => {
    const headers = [
      "ID",
      "Timestamp",
      "Parent Name",
      "Parent Email",
      "Parent Phone",
      "Parent Occupation",
      "Child Name",
      "Child Age",
      "Child Gender",
      "Concerns",
      "Other Concern",
      "Situation",
      "Desired Outcome",
      "Preferred Consultation",
      "Preferred Contact",
      "Preferred Time"
    ];

    const csvRows = [headers.join(",")];

    for (const lead of leadsStore) {
      const row = [
        lead.id,
        `"${lead.timestamp}"`,
        `"${(lead.parentName || "").replace(/"/g, '""')}"`,
        `"${(lead.parentEmail || "").replace(/"/g, '""')}"`,
        `"${(lead.parentPhone || "").replace(/"/g, '""')}"`,
        `"${(lead.parentOccupation || "").replace(/"/g, '""')}"`,
        `"${(lead.childName || "").replace(/"/g, '""')}"`,
        `"${(lead.childAge || "").replace(/"/g, '""')}"`,
        `"${(lead.childGender || "").replace(/"/g, '""')}"`,
        `"${(Array.isArray(lead.concerns) ? lead.concerns.join("; ") : "").replace(/"/g, '""')}"`,
        `"${(lead.otherConcern || "").replace(/"/g, '""')}"`,
        `"${(lead.situationDescription || "").replace(/"/g, '""')}"`,
        `"${(lead.desiredOutcome || "").replace(/"/g, '""')}"`,
        `"${(lead.preferredConsultation || "").replace(/"/g, '""')}"`,
        `"${(lead.preferredContactMethod || "").replace(/"/g, '""')}"`,
        `"${(lead.preferredTime || "").replace(/"/g, '""')}"`
      ];
      csvRows.push(row.join(","));
    }

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="counselling_leads.csv"');
    res.send(csvRows.join("\n"));
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
