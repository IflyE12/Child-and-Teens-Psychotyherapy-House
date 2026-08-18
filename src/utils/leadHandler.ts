import { LeadFormData } from '../types';

export const DEFAULT_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbztFACMAxS8GsP82Hr8t_DvohiPexRhptYRlDSU9IRAmF1Q6Fplh4EL9bzJi3k0dGM0/exec';
export const WHATSAPP_INTL = '2348073327207';

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
