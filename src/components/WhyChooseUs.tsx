import React from 'react';
import { WHY_CHOOSE_US } from '../data/copyData';
import { Heart, Award, UserCheck, Users, Target } from 'lucide-react';

const pillarIconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-5 h-5 text-[#2D5A27]" />,
  Award: <Award className="w-5 h-5 text-[#2D5A27]" />,
  UserCheck: <UserCheck className="w-5 h-5 text-[#2D5A27]" />,
  UsersTwosome: <Users className="w-5 h-5 text-[#2D5A27]" />,
  Target: <Target className="w-5 h-5 text-[#2D5A27]" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us-section" className="py-16 lg:py-20 bg-[#FDFCFB] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-[#2D5A27]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3E6B35]"></span>
            <span className="uppercase tracking-widest text-[11px] font-bold">Our Standards of Clinical Care</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif text-[#172815] tracking-tight">
            Why Discerning Families Entrust Us With Their Children
          </h2>
          <p className="text-[#566050] text-sm sm:text-base leading-relaxed">
            Dedicated to providing the highest standard of compassionate, research-backed support with clear communication for parents every step of the journey.
          </p>
        </div>

        {/* 5 Pillars Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`p-7 rounded-2xl border transition-all ${
                index === 4
                  ? 'md:col-span-2 lg:col-span-1 bg-[#172815] text-white border-[#2D452B] shadow-md'
                  : 'bg-white border-[#E8E2D9] hover:border-[#3E6B35] shadow-2xs hover:shadow-sm'
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                  index === 4 ? 'bg-[#2D5A27] text-[#A7D495]' : 'bg-[#F4F7EF] border border-[#DFE7D6] text-[#2D5A27]'
                }`}
              >
                {index === 4 ? <Target className="w-5 h-5 text-[#A7D495]" /> : (pillarIconMap[pillar.iconName] || <Heart className="w-5 h-5 text-[#2D5A27]" />)}
              </div>

              <h3
                className={`text-lg font-bold font-serif mb-2 ${
                  index === 4 ? 'text-white' : 'text-[#1A2A1A]'
                }`}
              >
                {pillar.title}
              </h3>

              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  index === 4 ? 'text-[#F7F9F2]/90' : 'text-[#555]'
                }`}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
