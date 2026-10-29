import React from 'react';
import { Calendar, ArrowDown } from 'lucide-react';

export const ConsultationCTA: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
      <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-[#2D5A27]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#3E6B35]"></span>
        <span className="uppercase tracking-widest text-[11px] font-bold">Confidential Booking & Assessment</span>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif text-[#172815] tracking-tight">
        Take the First Gentle Step for Your Child Today
      </h2>

      <p className="text-[#566050] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
        Schedule a confidential consultation. Discover how specialized child & teen counselling empowers your family with clarity, resilience, and genuine peace.
      </p>

      <p className="text-[#2D5A27] font-serif font-medium italic text-base sm:text-lg pt-1">
        Because every child deserves the space to flourish—and every parent deserves trusted, compassionate guidance.
      </p>

      <div className="flex justify-center pt-2">
        <div className="w-10 h-10 rounded-2xl bg-[#F4F7EF] text-[#2D5A27] border border-[#DFE7D6] flex items-center justify-center shadow-2xs">
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </div>
  );
};
