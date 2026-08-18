import React from 'react';
import { WHY_CHOOSE_US } from '../data/copyData';
import { Heart, Award, UserCheck, Users, Target } from 'lucide-react';

const pillarIconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-5 h-5 text-[#6B8E23]" />,
  Award: <Award className="w-5 h-5 text-[#6B8E23]" />,
  UserCheck: <UserCheck className="w-5 h-5 text-[#6B8E23]" />,
  UsersTwosome: <Users className="w-5 h-5 text-[#6B8E23]" />,
  Target: <Target className="w-5 h-5 text-[#6B8E23]" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-[#FDFCFB] border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A5D23] bg-[#F7F9F2] border border-[#E5E1D8] px-3.5 py-1 rounded-md">
            Our Standards of Care
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold font-serif text-[#1A2A1A]">
            Why Families Choose Us
          </h2>
          <p className="text-[#555] text-sm sm:text-base">
            Dedicated to providing the highest standard of compassionate, expert support for your family.
          </p>
        </div>

        {/* 5 Pillars Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_CHOOSE_US.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`p-6 rounded-xl border transition-all ${
                index === 4
                  ? 'md:col-span-2 lg:col-span-1 bg-[#1A2A1A] text-white border-[#4A5D23] shadow-xs'
                  : 'bg-white border-[#E5E1D8] hover:border-[#6B8E23]/60 shadow-2xs'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  index === 4 ? 'bg-white/10 text-white' : 'bg-[#F7F9F2] border border-[#E5E1D8] text-[#6B8E23]'
                }`}
              >
                {index === 4 ? <Target className="w-5 h-5 text-[#6B8E23]" /> : (pillarIconMap[pillar.iconName] || <Heart className="w-5 h-5 text-[#6B8E23]" />)}
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
