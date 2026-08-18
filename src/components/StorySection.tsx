import React from 'react';
import { MessageSquareHeart, TrendingDown, UserX, Heart } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-[#FDFCFB] relative border-b border-[#E5E1D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A5D23] bg-[#F7F9F2] border border-[#E5E1D8] px-3 py-1 rounded-md">
            Our Core Belief
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold font-serif text-[#1A2A1A]">
            Because Every Child's Story Can Change
          </h2>
          <p className="text-[#555555] text-sm sm:text-base">
            Understanding the real feelings underneath daily struggles is the first step toward lasting healing.
          </p>
        </div>

        {/* 3 Insight Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          
          <div className="p-5 rounded-xl bg-white border border-[#E5E1D8] transition-all hover:border-[#6B8E23]/50 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#F7F9F2] border border-[#E5E1D8] text-[#6B8E23] flex items-center justify-center mb-3">
              <MessageSquareHeart className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#1A2A1A] text-base font-serif mb-1.5">Behavioural Outbursts</h3>
            <p className="text-[#555] text-xs sm:text-sm leading-relaxed">
              Behind every behavioural outburst may be a child struggling to communicate overwhelming feelings they don't yet have words for.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E5E1D8] transition-all hover:border-[#6B8E23]/50 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#F7F9F2] border border-[#E5E1D8] text-[#6B8E23] flex items-center justify-center mb-3">
              <TrendingDown className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#1A2A1A] text-base font-serif mb-1.5">Declining Grades</h3>
            <p className="text-[#555] text-xs sm:text-sm leading-relaxed">
              Behind declining academic performance may be hidden anxiety, low confidence, social pressures, or unresolved emotional distress.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E5E1D8] transition-all hover:border-[#6B8E23]/50 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#F7F9F2] border border-[#E5E1D8] text-[#6B8E23] flex items-center justify-center mb-3">
              <UserX className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#1A2A1A] text-base font-serif mb-1.5">Withdrawal & Isolation</h3>
            <p className="text-[#555] text-xs sm:text-sm leading-relaxed">
              Behind quiet withdrawal and isolation may be a young person quietly longing to feel understood, accepted, and supported.
            </p>
          </div>

        </div>

        {/* Highlighted Mission Card */}
        <div className="bg-[#1A2A1A] text-white rounded-2xl p-6 sm:p-8 border border-[#4A5D23] shadow-sm relative overflow-hidden">
          
          <div className="relative max-w-3xl mx-auto text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto text-[#6B8E23]">
              <Heart className="w-5 h-5 fill-[#6B8E23] text-[#6B8E23]" />
            </div>
            <p className="text-lg sm:text-xl font-serif leading-relaxed text-[#F7F9F2]">
              "We believe that every child deserves someone who will listen without judgment, understand their unique needs, and guide them toward healing and growth."
            </p>
            <p className="text-xs font-bold text-[#6B8E23] uppercase tracking-widest pt-1">
              That is exactly what we are here to do.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
