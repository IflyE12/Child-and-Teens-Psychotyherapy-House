import React from 'react';
import { LeadFormData } from '../types';
import { MessageSquare, CheckCircle2, FileSpreadsheet, X, Phone, Copy, ExternalLink } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/copyData';

interface WhatsAppSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadId: string;
  whatsappUrl: string;
  whatsappText: string;
  sheetForwarded: boolean;
  sheetError?: string | null;
  formData: LeadFormData | null;
}

export const WhatsAppSuccessModal: React.FC<WhatsAppSuccessModalProps> = ({
  isOpen,
  onClose,
  whatsappUrl,
  whatsappText,
  sheetForwarded,
  sheetError,
  formData,
}) => {
  const [copiedText, setCopiedText] = React.useState(false);

  if (!isOpen || !formData) return null;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(whatsappText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg border border-[#E5E1D8] overflow-hidden my-8">
        
        {/* Banner Header */}
        <div className="bg-[#1A2A1A] text-white p-5 relative border-b border-[#4A5D23]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center space-x-3 mb-1.5">
            <div className="w-10 h-10 rounded-lg bg-[#2D2D2D] border border-[#4A5D23] flex items-center justify-center text-[#6B8E23]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B8E23]">
                Request Submitted Successfully!
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-white">
                Thank You, {formData.parentName}!
              </h3>
            </div>
          </div>
          <p className="text-xs text-[#E5E1D8] leading-relaxed pt-0.5">
            We have received your consultation details for <strong>{formData.childName}</strong>.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-5 text-[#2D2D2D] max-h-[75vh] overflow-y-auto">
          
          {/* PRIMARY ACTION: WhatsApp Direct Button */}
          <div className="bg-[#F7F9F2] p-4 rounded-xl border border-[#6B8E23]/60 space-y-2.5 text-center">
            <div className="inline-flex items-center space-x-2 text-[#1A2A1A] font-bold text-sm">
              <Phone className="w-4 h-4 text-[#6B8E23]" />
              <span>Send Message to WhatsApp: {WHATSAPP_NUMBER}</span>
            </div>
            <p className="text-xs text-[#555] leading-relaxed">
              Click the button below to open WhatsApp with your prefilled consultation details ready to send directly to our clinical team:
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 w-full py-3 px-5 rounded-xl bg-[#6B8E23] hover:bg-[#5a781d] text-white font-bold text-xs uppercase tracking-wider shadow-2xs transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white text-white" />
              <span>Open WhatsApp & Send Booking</span>
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </a>
          </div>

          {/* Google Sheets Forwarding Status */}
          <div className="bg-white p-3.5 rounded-xl border border-[#E5E1D8] flex items-start space-x-2.5 text-xs">
            <FileSpreadsheet className="w-4 h-4 text-[#6B8E23] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#1A2A1A] block mb-0.5">Google Sheet Synchronization:</span>
              {sheetForwarded ? (
                <span className="text-[#6B8E23] font-semibold flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Lead automatically logged to Google Sheets!</span>
                </span>
              ) : sheetError ? (
                <span className="text-amber-800">
                  Note: Webhook not set or error ({sheetError}). Don't worry—lead is safely stored in your local application leads database!
                </span>
              ) : (
                <span className="text-[#555]">
                  Stored securely in application leads database. (You can configure Google Sheets Webhook in header settings).
                </span>
              )}
            </div>
          </div>

          {/* Form Summary Copyable Box */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase text-[#444]">
                Prefilled WhatsApp Message Text:
              </span>
              <button
                onClick={handleCopySummary}
                className="flex items-center space-x-1 px-2.5 py-1 rounded-md bg-[#F7F9F2] hover:bg-[#E5E1D8] text-[#1A2A1A] border border-[#E5E1D8] text-xs font-semibold transition-colors cursor-pointer"
              >
                <Copy className="w-3 h-3 text-[#6B8E23]" />
                <span>{copiedText ? "Copied!" : "Copy Text"}</span>
              </button>
            </div>

            <div className="bg-[#1A2A1A] text-[#F7F9F2] p-3.5 rounded-lg font-mono text-[11px] whitespace-pre-wrap max-h-40 overflow-y-auto border border-[#4A5D23] leading-relaxed">
              {whatsappText}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#F7F9F2] p-3.5 border-t border-[#E5E1D8] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-lg bg-white hover:bg-gray-100 text-[#1A2A1A] border border-[#E5E1D8] text-xs font-bold transition-colors cursor-pointer"
          >
            Done & Close
          </button>
        </div>

      </div>
    </div>
  );
};
