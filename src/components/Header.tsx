import React from 'react';
import { Heart, Phone, Users, Calendar, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_INTL } from '../data/copyData';

interface HeaderProps {
  onOpenLeadsDrawer: () => void;
  onScrollToForm: () => void;
  leadsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenLeadsDrawer,
  onScrollToForm,
  leadsCount,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDFCFB]/95 backdrop-blur-md border-b border-[#E8E2D9] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Editorial Title */}
        <div
          className="flex items-center space-x-3.5 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2D5A27] to-[#1E3E1A] flex items-center justify-center text-white shadow-sm ring-2 ring-[#4A7043]/20 group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 fill-white/30 text-white" />
          </div>
          <div>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-xl sm:text-2xl font-bold font-serif text-[#172815] tracking-tight">
                Haven
              </span>
              <span className="text-[#3E6B35] font-serif text-lg sm:text-xl font-medium italic">
                Counselling
              </span>
            </div>
            <p className="text-[11px] text-[#636C5F] font-medium tracking-wide">
              Child & Teen Psychological Support
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold text-[#4A5345]">
          <button
            onClick={() => scrollToSection('approach-section')}
            className="hover:text-[#2D5A27] transition-colors cursor-pointer py-1"
          >
            Our Approach
          </button>
          <button
            onClick={() => scrollToSection('services-section')}
            className="hover:text-[#2D5A27] transition-colors cursor-pointer py-1"
          >
            Specialized Care
          </button>
          <button
            onClick={() => scrollToSection('why-choose-us-section')}
            className="hover:text-[#2D5A27] transition-colors cursor-pointer py-1"
          >
            Why Families Trust Us
          </button>
          <button
            onClick={() => scrollToSection('testimonials-section')}
            className="hover:text-[#2D5A27] transition-colors cursor-pointer py-1"
          >
            Success Stories
          </button>
        </nav>

        {/* Action Controls & Contact info */}
        <div className="flex items-center space-x-2.5 sm:space-x-3">
          
          {/* Quick Direct WhatsApp Phone Link */}
          <a
            href={`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent("Hello! I would like to inquire about child & teen counselling consultations.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-[#F4F7EF] text-[#24461E] text-xs font-semibold hover:bg-[#EAEFDDA]/80 transition-all border border-[#DFE7D6] hover:border-[#3E6B35]/40"
            title="Chat directly on WhatsApp"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <Phone className="w-3.5 h-3.5 text-[#3E6B35]" />
            <span className="hidden sm:inline font-mono text-[12px]">{WHATSAPP_NUMBER}</span>
            <span className="sm:hidden font-medium text-[11px]">Chat</span>
          </a>

          {/* Admin Leads Drawer Trigger (Discreet management) */}
          <button
            onClick={onOpenLeadsDrawer}
            className="relative flex items-center space-x-1 px-2.5 py-2 rounded-xl text-xs font-semibold text-[#576150] bg-[#FAF8F5] hover:bg-[#F0ECE1] border border-[#E8E2D9] transition-all cursor-pointer"
            title="View consultation leads"
          >
            <Users className="w-3.5 h-3.5 text-[#3E6B35]" />
            <span className="hidden md:inline text-[11px]">Leads</span>
            {leadsCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-[#2D5A27] text-white text-[10px] font-bold">
                {leadsCount}
              </span>
            )}
          </button>

          {/* Primary CTA Button */}
          <button
            onClick={onScrollToForm}
            className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2D5A27] to-[#3B6B34] hover:from-[#24491F] hover:to-[#2D5A27] text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-3.5 h-3.5 text-white/90" />
            <span>Book Consultation</span>
          </button>
        </div>

      </div>
    </header>
  );
};
