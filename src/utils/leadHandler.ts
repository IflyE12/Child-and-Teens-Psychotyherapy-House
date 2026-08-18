import { LeadFormData } from '../types';

export const DEFAULT_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbztFACMAxS8GsP82Hr8t_DvohiPexRhptYRlDSU9IRAmF1Q6Fplh4EL9bzJi3k0dGM0/exec';
export const WHATSAPP_INTL = '2348073327207';

export const GOOGLE_APPS_SCRIPT_CODE = `/**
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

export function getSavedWebhookUrl(): string {
  try {
    return localStorage.getItem('haven_webhook_url') || DEFAULT_WEBHOOK_URL;
  } catch {
    return DEFAULT_WEBHOOK_URL;
  }
}

export function saveWebhookUrlToStorage(url: string) {
  try {
    localStorage.setItem('haven_webhook_url', url.trim());
  } catch {
    // ignore
  }
}

export function formatWhatsAppMessage(lead: LeadFormData): { whatsappText: string; whatsappUrl: string } {
  const concernsList = Array.isArray(lead.concerns) ? lead.concerns.join(', ') : lead.concerns;
  const otherDetail = lead.otherConcern ? ` (${lead.otherConcern})` : '';

  const whatsappText = `*NEW CONSULTATION REQUEST* 🌟

*Parent Details:*
• *Name:* ${lead.parentName}
• *Phone:* ${lead.parentPhone}
• *Email:* ${lead.parentEmail}
• *Occupation:* ${lead.parentOccupation || 'N/A'}

*Child Details:*
• *Name:* ${lead.childName}
• *Age Group:* ${lead.childAge}
• *Gender:* ${lead.childGender}

*Concerns:*
${concernsList}${otherDetail}

*Situation Summary:*
"${lead.situationDescription.trim()}"

*Desired Positive Changes:*
"${lead.desiredOutcome.trim()}"

*Preferences:*
• *Consultation Type:* ${lead.preferredConsultation}
• *Preferred Contact:* ${lead.preferredContactMethod}
• *Preferred Time:* ${lead.preferredTime}`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(whatsappText)}`;
  return { whatsappText, whatsappUrl };
}

export function saveLeadToLocalStorage(lead: LeadFormData & { id?: string; timestamp?: string }) {
  try {
    const existing = JSON.parse(localStorage.getItem('haven_leads_store') || '[]');
    const newEntry = {
      id: lead.id || `lead_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      timestamp: lead.timestamp || new Date().toISOString(),
      ...lead,
    };
    existing.unshift(newEntry);
    localStorage.setItem('haven_leads_store', JSON.stringify(existing));
    return newEntry;
  } catch (err) {
    console.error('Error saving lead to local storage:', err);
    return null;
  }
}

export function getLocalLeads() {
  try {
    return JSON.parse(localStorage.getItem('haven_leads_store') || '[]');
  } catch {
    return [];
  }
}

export async function sendToGoogleSheetDirectly(webhookUrl: string, lead: LeadFormData): Promise<boolean> {
  if (!webhookUrl) return false;
  try {
    await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...lead,
        timestamp: new Date().toISOString(),
      }),
    });
    return true;
  } catch (err) {
    console.error('Error forwarding directly to Google Sheets webhook:', err);
    return false;
  }
}
