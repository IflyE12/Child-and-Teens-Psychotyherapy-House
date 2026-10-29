import React from 'react';
import { MessageSquareHeart, TrendingDown, UserX, Heart, Sparkles } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="approach-section" className="py-16 lg:py-20 bg-[#FDFCFB] relative border-b border-[#E8E2D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-[#2D5A27]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3E6B35]"></span>
            <span className="uppercase tracking-widest text-[11px] font-bold">Our Core Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif text-[#172815] tracking-tight">
            Because Every Child's Story Can Have a New Chapter
          </h2>
          <p className="text-[#566050] text-sm sm:text-base leading-relaxed">
            Understanding the hidden feelings underneath daily struggles is the essential first step toward lasting healing.
          </p>
        </div>

        {/* 3 Insight Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-6 rounded-2xl bg-white border border-[#E8E2D9] transition-all hover:border-[#3E6B35] hover:shadow-sm shadow-2xs group">
            <div className="w-11 h-11 rounded-xl bg-[#F4F7EF] border border-[#DFE7D6] text-[#2D5A27] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <MessageSquareHeart className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#788572] block mb-1">Observation 01</span>
            <h3 className="font-bold text-[#172815] text-base font-serif mb-2">Behavioural Outbursts</h3>
            <p className="text-[#566050] text-xs sm:text-sm leading-relaxed">
              Behind every explosive temper tantrum or defiance episode is usually a child struggling to process big emotions their nervous system cannot yet organize.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E2D9] transition-all hover:border-[#3E6B35] hover:shadow-sm shadow-2xs group">
            <div className="w-11 h-11 rounded-xl bg-[#F4F7EF] border border-[#DFE7D6] text-[#2D5A27] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <TrendingDown className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#788572] block mb-1">Observation 02</span>
            <h3 className="font-bold text-[#172815] text-base font-serif mb-2">Declining Grades & Focus</h3>
            <p className="text-[#566050] text-xs sm:text-sm leading-relaxed">
              Behind slipping academic performance is frequently unaddressed classroom anxiety, social peer pressure, low confidence, or sensory overload.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E2D9] transition-all hover:border-[#3E6B35] hover:shadow-sm shadow-2xs group">
            <div className="w-11 h-11 rounded-xl bg-[#F4F7EF] border border-[#DFE7D6] text-[#2D5A27] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <UserX className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#788572] block mb-1">Observation 03</span>
            <h3 className="font-bold text-[#172815] text-base font-serif mb-2">Withdrawal & Silent Isolation</h3>
            <p className="text-[#566050] text-xs sm:text-sm leading-relaxed">
              Behind quiet withdrawal, closed bedroom doors, and monosyllabic replies is often a young person longing to be truly heard without fear of criticism.
            </p>
          </div>

        </div>

        {/* Highlighted Mission Card */}
        <div className="bg-[#172815] text-white rounded-3xl p-8 sm:p-10 border border-[#2D452B] shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3E6B35]/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative max-w-3xl mx-auto text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2D5A27] flex items-center justify-center mx-auto text-white shadow-sm ring-4 ring-white/10">
              <Heart className="w-6 h-6 fill-white/30 text-white" />
            </div>
            <p className="text-xl sm:text-2xl font-serif leading-relaxed text-[#FDFCFB] italic font-medium">
              "We believe that every child deserves someone who will listen without judgment, understand their unique world, and guide them with kindness toward emotional peace and confidence."
            </p>
            <p className="text-xs font-bold text-[#A7D495] uppercase tracking-widest pt-1">
              That is our dedicated mission at Haven Counselling.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
