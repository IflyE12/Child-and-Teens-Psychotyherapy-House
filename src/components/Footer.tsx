import React from 'react';
import { Heart, Phone, Mail, ShieldCheck, FileSpreadsheet } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_INTL } from '../data/copyData';

interface FooterProps {
  onOpenGoogleSheetModal: () => void;
  onScrollToForm: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGoogleSheetModal, onScrollToForm }) => {
  return (
    <footer className="bg-[#1A2A1A] text-[#F7F9F2] pt-12 pb-8 border-t border-[#4A5D23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid md:grid-cols-12 gap-6 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 rounded-lg bg-[#6B8E23] flex items-center justify-center text-white">
                <Heart className="w-4 h-4 fill-white text-white" />
              </div>
              <span className="text-lg font-bold font-serif text-white tracking-tight">
                Haven Child & Teen Counselling
              </span>
            </div>

            <p className="text-[#E5E1D8] text-xs leading-relaxed max-w-md font-sans">
              Providing compassionate, evidence-based counselling and psychological services to help children and teenagers build emotional strength, confidence, and lifelong resilience.
            </p>

            <div className="flex items-center space-x-2 text-[11px] text-[#E5E1D8] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#6B8E23] shrink-0" />
              <span>Strictly Confidential Care • Certified Specialists</span>
            </div>
          </div>

          {/* Contact Details & Quick Links */}
          <div className="md:col-span-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8BB879] font-serif">
              Direct Contact & Booking
            </h4>

            <div className="space-y-2.5 text-xs text-[#F7F9F2]">
              <a
                href={`https://wa.me/${WHATSAPP_INTL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2.5 hover:text-[#A7D495] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#223521] border border-[#3E5C3B] flex items-center justify-center text-[#8BB879] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold">Call / WhatsApp Direct</span>
                  <span className="text-[11px] text-[#C2D6BA] font-mono">{WHATSAPP_NUMBER}</span>
                </div>
              </a>

              {/* Discreet Administrator Integration Access */}
              <button
                onClick={onOpenGoogleSheetModal}
                className="flex items-center space-x-2.5 text-[#A3B89B] hover:text-white transition-colors text-left cursor-pointer pt-2 group"
                title="Google Sheets Automation & Webhook Configuration"
              >
                <div className="w-6 h-6 rounded bg-[#223521] border border-[#3E5C3B] flex items-center justify-center text-[#8BB879] shrink-0 group-hover:border-[#8BB879]">
                  <FileSpreadsheet className="w-3 h-3" />
                </div>
                <span className="text-[11px]">System: Google Sheets Webhook Setup</span>
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={onScrollToForm}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#3B6B34] to-[#4F8846] hover:from-[#325B2C] hover:to-[#43753C] text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
              >
                Schedule Consultation Now
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-[#2D452B] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#B8C8B3] gap-2">
          <p>© {new Date().getFullYear()} Haven Child & Teen Psychological Services. All rights reserved.</p>
          <p>Confidential & Professional Care for Children, Adolescents, and Parents.</p>
        </div>

      </div>
    </footer>
  );
};
