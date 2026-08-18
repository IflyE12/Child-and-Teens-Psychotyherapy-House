import React from 'react';
import { Calendar, ArrowDown } from 'lucide-react';

export const ConsultationCTA: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#F7F9F2] text-[#4A5D23] text-xs font-bold uppercase tracking-wider border border-[#E5E1D8]">
        <Calendar className="w-3.5 h-3.5 text-[#6B8E23]" />
        <span>Confidential Booking</span>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif text-[#1A2A1A]">
        Book Your Consultation Today
      </h2>

      <p className="text-[#555] text-sm sm:text-base leading-relaxed">
        Take the first step toward giving your child the support they deserve. Schedule a confidential consultation today and discover how professional counselling can make a lasting difference in your child's life.
      </p>

      <p className="text-[#6B8E23] font-serif font-bold text-base sm:text-lg pt-1">
        Because every child deserves the chance to thrive—and every parent deserves a trusted partner on that journey.
      </p>

      <div className="flex justify-center pt-2">
        <div className="w-9 h-9 rounded-full bg-[#F7F9F2] text-[#6B8E23] border border-[#E5E1D8] flex items-center justify-center animate-bounce">
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
