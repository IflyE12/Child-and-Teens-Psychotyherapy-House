import React from 'react';
import { Heart, Phone, Mail, ShieldCheck, FileSpreadsheet } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/copyData';

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
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B8E23] font-serif">
              Direct Contact & Booking
            </h4>

            <div className="space-y-2 text-xs text-[#F7F9F2]">
              <a
                href={`https://wa.me/2348073327207`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2.5 hover:text-[#6B8E23] transition-colors"
              >
                <div className="w-7 h-7 rounded-md bg-[#2D2D2D] border border-[#4A5D23] flex items-center justify-center text-[#6B8E23] shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>WhatsApp: {WHATSAPP_NUMBER}</span>
              </a>

              <button
                onClick={onOpenGoogleSheetModal}
                className="flex items-center space-x-2.5 hover:text-[#6B8E23] transition-colors text-left cursor-pointer"
              >
                <div className="w-7 h-7 rounded-md bg-[#2D2D2D] border border-[#4A5D23] flex items-center justify-center text-[#6B8E23] shrink-0">
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                </div>
                <span>Google Sheets Script Setup & Integration</span>
              </button>
            </div>

            <div className="pt-1">
              <button
                onClick={onScrollToForm}
                className="px-5 py-2.5 rounded-xl bg-[#6B8E23] hover:bg-[#5a781d] text-white font-bold text-xs shadow-2xs transition-all cursor-pointer"
              >
                Schedule Consultation Now
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-[#4A5D23]/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#E5E1D8]/80 gap-2">
          <p>© {new Date().getFullYear()} Child & Teen Psychological Services. All rights reserved.</p>
          <p>Confidential & Professional Care for Children, Teens, and Parents.</p>
        </div>

      </div>
    </footer>
  );
};
