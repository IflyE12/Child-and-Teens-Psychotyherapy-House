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
  const [activeTab, setActiveTab] = React.useState<'all' | 'behavior' | 'school' | 'social'>('all');

  const filteredServices = React.useMemo(() => {
    if (activeTab === 'behavior') {
      return SERVICES_DATA.filter((s) => ['behavioural', 'anxiety', 'outbursts', 'anger'].includes(s.id));
    }
    if (activeTab === 'school') {
      return SERVICES_DATA.filter((s) => ['academic', 'attention', 'confidence'].includes(s.id));
    }
    if (activeTab === 'social') {
      return SERVICES_DATA.filter((s) => ['social', 'family', 'bullying', 'trauma'].includes(s.id));
    }
    return SERVICES_DATA;
  }, [activeTab]);

  return (
    <section id="services-section" className="py-16 lg:py-20 bg-[#F8F6F1] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-[#2D5A27]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3E6B35]"></span>
            <span className="uppercase tracking-widest text-[11px] font-bold">Specialized Psychological Care</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif text-[#172815] tracking-tight">
            Comprehensive Clinical Support for Every Child & Teen
          </h2>
          <p className="text-[#566050] text-sm sm:text-base leading-relaxed">
            Whether your child is facing an acute crisis or gradual emotional shifts, we provide individualized, research-backed therapies tailored to their age.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              activeTab === 'all'
                ? 'bg-[#2D5A27] text-white border-[#2D5A27] shadow-xs'
                : 'bg-white text-[#566050] border-[#E8E2D9] hover:bg-[#FAF8F5]'
            }`}
          >
            All Areas of Care ({SERVICES_DATA.length})
          </button>
          <button
            onClick={() => setActiveTab('behavior')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              activeTab === 'behavior'
                ? 'bg-[#2D5A27] text-white border-[#2D5A27] shadow-xs'
                : 'bg-white text-[#566050] border-[#E8E2D9] hover:bg-[#FAF8F5]'
            }`}
          >
            Emotional & Behavioral Regulation
          </button>
          <button
            onClick={() => setActiveTab('school')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              activeTab === 'school'
                ? 'bg-[#2D5A27] text-white border-[#2D5A27] shadow-xs'
                : 'bg-white text-[#566050] border-[#E8E2D9] hover:bg-[#FAF8F5]'
            }`}
          >
            School, Focus & Confidence
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              activeTab === 'social'
                ? 'bg-[#2D5A27] text-white border-[#2D5A27] shadow-xs'
                : 'bg-white text-[#566050] border-[#E8E2D9] hover:bg-[#FAF8F5]'
            }`}
          >
            Social, Family & Bullying
          </button>
        </div>

        {/* Dynamic Service Area Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white p-5 rounded-2xl border border-[#E8E2D9] shadow-2xs hover:border-[#3E6B35] hover:shadow-sm transition-all flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#F4F7EF] border border-[#DFE7D6] text-[#2D5A27] group-hover:bg-[#2D5A27] group-hover:text-white flex items-center justify-center mb-3.5 transition-colors">
                  {iconMap[service.iconName] || <Sparkles className="w-5 h-5" />}
                </div>
                <h3 className="font-bold text-[#172815] text-sm font-serif mb-1.5 group-hover:text-[#2D5A27] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-[#566050] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tailored Plan Reassurance */}
        <div className="bg-white border border-[#E8E2D9] rounded-2xl p-4 text-center max-w-2xl mx-auto flex items-center justify-center space-x-3 shadow-2xs">
          <Sparkle className="w-4 h-4 text-[#3E6B35] shrink-0" />
          <p className="text-[#172815] font-semibold text-xs sm:text-sm font-serif">
            Every therapy plan is thoughtfully personalized because every child possesses a unique mind and journey.
          </p>
        </div>

      </div>
    </section>
  );
};
