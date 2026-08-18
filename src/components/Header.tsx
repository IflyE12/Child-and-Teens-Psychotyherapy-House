import React from 'react';
import { Heart, Phone, FileSpreadsheet, Users, Calendar } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/copyData';

interface HeaderProps {
  onOpenGoogleSheetModal: () => void;
  onOpenLeadsDrawer: () => void;
  onScrollToForm: () => void;
  leadsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenGoogleSheetModal,
  onOpenLeadsDrawer,
  onScrollToForm,
  leadsCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E1D8] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-9 h-9 rounded-full bg-[#6B8E23] flex items-center justify-center text-white shadow-xs">
            <Heart className="w-5 h-5 fill-white/20 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold font-serif text-[#1A2A1A] tracking-tight block">
              Haven <span className="text-[#6B8E23] font-serif text-lg font-bold">Counselling</span>
            </span>
            <span className="text-[11px] text-[#777777] font-medium hidden sm:block leading-none">
              Child & Teen Psychological Support
            </span>
          </div>
        </div>

        {/* Action Buttons & Contact info */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Quick WhatsApp Phone Link */}
          <a
            href={`https://wa.me/2348073327207?text=${encodeURIComponent("Hello! I would like to inquire about child & teen counselling consultations.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#F7F9F2] text-[#4A5D23] text-xs font-semibold hover:bg-[#E5E1D8]/50 transition-colors border border-[#E5E1D8]"
            title="Chat directly on WhatsApp"
          >
            <Phone className="w-3.5 h-3.5 text-[#6B8E23]" />
            <span>Call / WhatsApp: {WHATSAPP_NUMBER}</span>
          </a>

          {/* Google Sheets Setup Trigger */}
          <button
            onClick={onOpenGoogleSheetModal}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#2D2D2D] bg-[#F7F9F2] hover:bg-[#E5E1D8]/50 border border-[#E5E1D8] transition-all cursor-pointer"
            title="Google Sheets Script & Webhook Settings"
          >
            <FileSpreadsheet className="w-4 h-4 text-[#6B8E23]" />
            <span className="hidden sm:inline">Google Sheets</span>
          </button>

          {/* Admin Leads Drawer Trigger */}
          <button
            onClick={onOpenLeadsDrawer}
            className="relative flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#2D2D2D] bg-[#F7F9F2] hover:bg-[#E5E1D8]/50 border border-[#E5E1D8] transition-all cursor-pointer"
            title="View captured leads dashboard"
          >
            <Users className="w-4 h-4 text-[#4A5D23]" />
            <span className="hidden sm:inline">Leads</span>
            {leadsCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 rounded-full bg-[#6B8E23] text-white text-[10px] font-bold">
                {leadsCount}
              </span>
            )}
          </button>

          {/* Primary CTA Button */}
          <button
            onClick={onScrollToForm}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#6B8E23] hover:bg-[#5a781d] text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </button>
        </div>

      </div>
    </header>
  );
};
