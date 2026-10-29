import React, { useState } from 'react';
import { Calendar, ShieldCheck, Heart, Sparkles, ArrowRight, MessageCircle, CheckCircle2, ChevronRight, Flame, HeartPulse, UserMinus, Compass } from 'lucide-react';
import heroImg from '../assets/images/hero_black_counsellor_1793183143285.jpg';
import { WHATSAPP_NUMBER, WHATSAPP_INTL } from '../data/copyData';

interface HeroProps {
  onScrollToForm: () => void;
}

const COMMON_CHALLENGES = [
  {
    id: 'meltdowns',
    label: 'Frequent Meltdowns',
    icon: Flame,
    shortIssue: 'Emotional Outbursts & Defiance',
    insight: 'Behind intense anger or defiance is often a nervous system overwhelmed by feelings the child has no words for.',
    howWeHelp: 'We teach gentle emotional regulation, anger diffusion rituals, and provide parents with calm, de-escalating communication tools.',
  },
  {
    id: 'anxiety',
    label: 'School & Social Anxiety',
    icon: HeartPulse,
    shortIssue: 'Worry, Panic & Declining Focus',
    insight: 'Perfectionism, exam fear, or playground exclusion create chronic fight-or-flight tension that blocks learning.',
    howWeHelp: 'Through evidence-based CBT and somatic calm techniques, children regain courage, focus, and classroom confidence.',
  },
  {
    id: 'withdrawn',
    label: 'Quiet Withdrawal',
    icon: UserMinus,
    shortIssue: 'Isolation & Low Self-Esteem',
    insight: 'Silence is often a quiet cry for connection when a child feels misunderstood or burdened by hidden sadness.',
    howWeHelp: 'In our warm, zero-judgment sanctuary, children safely express their internal world and rebuild authentic self-worth.',
  },
  {
    id: 'teen',
    label: 'Teen Transitions',
    icon: Compass,
    shortIssue: 'Identity, Screen Clashes & Rebellion',
    insight: 'Adolescence brings intense neurological shifts; teenagers need an unbiased, confidential space outside the home.',
    howWeHelp: 'We partner with teens as mentors and clinicians, helping them navigate pressure while restoring family peace.',
  },
];

export const Hero: React.FC<HeroProps> = ({ onScrollToForm }) => {
  const [selectedChallenge, setSelectedChallenge] = useState(COMMON_CHALLENGES[0]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FDFCFB] via-[#F8F6F0] to-[#FAF8F5] pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-[#E8E2D9]">
      
      {/* Subtle organic background warmth accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EAF0E5]/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#F4E8DC]/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Sales Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-[#2D2D2D]">
            
            {/* Context kicker with clean separator */}
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#2D5A27]">
              <span className="w-2 h-2 rounded-full bg-[#3E6B35]"></span>
              <span className="uppercase tracking-widest text-[11px] font-bold">Child, Teen & Family Psychological Sanctuary</span>
              <span className="text-[#A4B59D]" aria-hidden="true">·</span>
              <span className="text-[#5F6A57]">Certified Specialists</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-serif leading-[1.14] text-[#172815] tracking-tight">
              Give Your Child the <span className="text-[#2D5A27] underline decoration-[#8BB879]/50 decoration-wavy underline-offset-8">Support</span> They Need to Truly Thrive
            </h1>

            <p className="text-base sm:text-lg text-[#4A5345] font-normal leading-relaxed">
              Helping children and teenagers overcome emotional hurdles, anxiety, and behavioral distress—restoring confidence, joy, and peace in your home.
            </p>

            {/* Interactive Parent Empathy Box */}
            <div className="bg-white rounded-2xl p-5 border border-[#E8E2D9] shadow-xs">
              <div className="flex items-center justify-between border-b border-[#EFECE6] pb-3 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#172815]">
                  What are you noticing at home right now?
                </span>
                <span className="text-[11px] text-[#7A8572] italic">Tap to explore</span>
              </div>

              {/* Segmented Challenge Selectors with Encased Icons - All in green boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
                {COMMON_CHALLENGES.map((ch) => {
                  const isActive = selectedChallenge.id === ch.id;
                  const IconComp = ch.icon;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => setSelectedChallenge(ch)}
                      className={`group flex items-center space-x-2.5 text-left p-2.5 sm:p-3 rounded-xl text-xs sm:text-[13px] font-semibold transition-all cursor-pointer border ${
                        isActive
                          ? 'bg-[#1C3B18] text-white border-2 border-[#94D480] shadow-md ring-2 ring-[#2D5A27]/30 scale-[1.01]'
                          : 'bg-[#2D5A27] hover:bg-[#244A1F] text-white/95 border border-[#1E411B]/80 shadow-xs'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
                          isActive
                            ? 'bg-white/25 border-white/50 text-white'
                            : 'bg-white/15 border-white/30 text-white group-hover:bg-white/25'
                        }`}
                      >
                        <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="leading-tight font-semibold">{ch.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Insight Content - Bolder, larger, highly legible */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F3F7F0] border-2 border-[#CADBBF] space-y-3.5 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#2D5A27] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <selectedChallenge.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-base sm:text-lg font-extrabold text-[#11240E] font-serif tracking-tight">
                      {selectedChallenge.shortIssue}
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs uppercase font-extrabold text-[#224A1D] bg-[#DFECD6] px-2.5 py-1 rounded-md tracking-wider border border-[#BFD9B1]">
                    Clinical Insight
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#1E2E1A] font-medium leading-relaxed italic bg-white/75 p-3 sm:p-3.5 rounded-xl border border-[#DFEBD7]">
                  "{selectedChallenge.insight}"
                </p>

                <div className="pt-2.5 border-t border-[#CADBBF] flex items-start space-x-2.5 text-sm sm:text-base text-[#163311]">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#2D5A27]" />
                  <span className="leading-snug">
                    <strong className="font-extrabold text-[#11240E]">How Haven Helps:</strong>{' '}
                    <span className="font-semibold text-[#1A3815]">{selectedChallenge.howWeHelp}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button Block */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onScrollToForm}
                className="inline-flex items-center justify-center space-x-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#2D5A27] via-[#35642E] to-[#2D5A27] hover:from-[#24491F] hover:to-[#24491F] text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <Calendar className="w-4 h-4 text-white/90 group-hover:scale-110 transition-transform" />
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent("Hello! I would like to inquire about booking a child & teen consultation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-bold text-xs sm:text-sm border border-[#25D366]/30 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#128C7E]" />
                <span>WhatsApp: {WHATSAPP_NUMBER}</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#5E6857]">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2D5A27]" />
                <span>100% Confidential Care</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2D5A27]" />
                <span>Physical (Lagos) & Online</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Heart className="w-4 h-4 text-[#2D5A27]" />
                <span>Evidence-Based Guidance</span>
              </span>
            </div>

          </div>

          {/* Right Column: Visual Feature Card with Overlays */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#E8E2D9] bg-white p-2.5">
              <img
                src={heroImg}
                alt="Compassionate child and teen psychological session"
                className="w-full h-[380px] sm:h-[430px] object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Stat Overlay */}
              <div className="absolute top-6 right-6 bg-[#172815]/90 backdrop-blur-md text-white px-3.5 py-2.5 rounded-xl border border-white/10 shadow-md">
                <p className="text-[10px] uppercase font-bold text-[#A7D495] tracking-wider">Parent Rating</p>
                <div className="flex items-center space-x-1 mt-0.5">
                  <span className="text-amber-400 text-sm">★★★★★</span>
                  <span className="text-xs font-bold text-white ml-1">4.9 / 5.0</span>
                </div>
              </div>

              {/* Lower Clinical Sanctuary Note */}
              <div className="mt-3 bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E2D9]">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-[#2D5A27] flex items-center justify-center text-white shrink-0 shadow-2xs">
                    <Heart className="w-4 h-4 fill-white/30 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#172815] text-xs font-serif uppercase tracking-wider">
                      The Haven Promise
                    </h4>
                    <p className="text-xs text-[#525E4D] italic leading-relaxed mt-1 font-serif">
                      "No blame, no labeling. Just genuine understanding, clinical expertise, and real tools that empower your child to blossom."
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
