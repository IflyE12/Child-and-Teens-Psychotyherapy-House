import React from 'react';
import { SERVICES_DATA } from '../data/copyData';
import {
  ShieldAlert,
  GraduationCap,
  HeartHandshake,
  Smile,
  Sparkles,
  Users,
  Home,
  Sun,
  Compass,
  TrendingUp,
  Sparkle
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  Smile: <Smile className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Sun: <Sun className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
};

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-[#F7F9F2] border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A5D23] bg-white border border-[#E5E1D8] px-3.5 py-1 rounded-md">
            Specialized Psychological Care
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold font-serif text-[#1A2A1A]">
            How We Can Help
          </h2>
          <p className="text-[#555] text-sm sm:text-base">
            Whether your child is facing a temporary challenge or ongoing emotional concerns, we provide personalized support for issues including:
          </p>
        </div>

        {/* 10 Service Area Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 mb-10">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white p-4 rounded-xl border border-[#E5E1D8] shadow-2xs hover:border-[#6B8E23] transition-all flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#F7F9F2] border border-[#E5E1D8] text-[#6B8E23] group-hover:bg-[#6B8E23] group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                  {iconMap[service.iconName] || <Sparkles className="w-5 h-5" />}
                </div>
                <h3 className="font-bold text-[#1A2A1A] text-sm font-serif mb-1.5 group-hover:text-[#6B8E23] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-[#555] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tailored Plan Reassurance */}
        <div className="bg-white border border-[#E5E1D8] rounded-xl p-4 text-center max-w-2xl mx-auto flex items-center justify-center space-x-3 shadow-2xs">
          <Sparkle className="w-4 h-4 text-[#6B8E23] shrink-0" />
          <p className="text-[#1A2A1A] font-semibold text-xs sm:text-sm font-serif">
            Every therapy plan is thoughtfully tailored because no two children are the same.
          </p>
        </div>

      </div>
    </section>
  );
};
