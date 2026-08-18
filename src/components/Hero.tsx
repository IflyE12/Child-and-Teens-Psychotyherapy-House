import React from 'react';
import { Calendar, ShieldCheck, Heart, Sparkles, ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/hero_counselling_session_1786127670956.jpg';

interface HeroProps {
  onScrollToForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToForm }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-[#F7F9F2] pt-8 pb-12 lg:pt-12 lg:pb-16 border-b border-[#E5E1D8]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Sales Copy & CTAs */}
          <div className="lg:col-span-7 space-y-5 text-[#2D2D2D]">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#F7F9F2] border border-[#E5E1D8] text-[#4A5D23] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#6B8E23]" />
              <span>Child & Teen Psychology Practice</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-serif leading-[1.15] text-[#1A2A1A]">
              Give Your Child the <span className="text-[#6B8E23]">Support</span> They Need to Thrive
            </h1>

            <p className="text-base sm:text-lg text-[#555] font-medium leading-relaxed font-sans">
              Helping children & teens build confidence, emotional strength, and a brighter future with professional evidence-based care.
            </p>

            <div className="space-y-3 text-[#555] text-sm sm:text-base leading-relaxed pt-1">
              <p>
                Every child deserves to feel understood, supported, and empowered to reach their full potential.
              </p>
              <p>
                If your child is struggling with behavioural difficulties, emotional challenges, academic performance, or social relationships, you're not alone. With the right support, <strong className="text-[#1A2A1A] font-bold">meaningful and lasting change is possible.</strong>
              </p>
              <div className="bg-white p-4 rounded-xl border border-[#E5E1D8] border-l-4 border-l-[#6B8E23] text-[#2D2D2D] text-sm font-medium shadow-2xs">
                Our counselling services provide a safe, compassionate, and professional environment where children and teenagers express themselves, develop healthy coping skills, and grow.
              </div>
            </div>

            {/* Benefit Grid Pill Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-1 text-xs sm:text-sm">
              <div className="p-3 bg-white rounded-lg border border-[#E5E1D8] flex items-center space-x-3 shadow-2xs">
                <div className="w-5 h-5 rounded-full bg-[#6B8E23]/15 text-[#6B8E23] flex items-center justify-center font-bold text-xs shrink-0">✓</div>
                <div>
                  <p className="font-bold text-[#1A2A1A]">Happier & Secure</p>
                  <p className="text-[11px] text-[#777]">Build emotional resilience in life.</p>
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#E5E1D8] flex items-center space-x-3 shadow-2xs">
                <div className="w-5 h-5 rounded-full bg-[#6B8E23]/15 text-[#6B8E23] flex items-center justify-center font-bold text-xs shrink-0">✓</div>
                <div>
                  <p className="font-bold text-[#1A2A1A]">Better Relationships</p>
                  <p className="text-[11px] text-[#777]">Building healthy lifelong friendships.</p>
                </div>
              </div>
            </div>

            {/* CTA Button Block */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onScrollToForm}
                className="inline-flex items-center justify-center space-x-3 px-7 py-3.5 rounded-xl bg-[#6B8E23] hover:bg-[#5a781d] text-white font-bold text-sm sm:text-base shadow-sm transition-all cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-white/80 group-hover:scale-110 transition-transform" />
                <span>Book Free Consultation Now</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center space-x-2 text-xs font-semibold text-[#555] px-3 py-2 bg-white rounded-lg border border-[#E5E1D8]">
                <ShieldCheck className="w-4 h-4 text-[#6B8E23] shrink-0" />
                <span>100% Confidential Care</span>
              </div>
            </div>

            {/* High Density Badges */}
            <div className="grid grid-cols-3 gap-2 pt-3">
              <div className="text-[10px] uppercase tracking-widest text-[#777] font-bold flex flex-col items-center text-center p-2 border border-dashed border-[#E5E1D8] rounded bg-white/60">
                <span>Confidential</span>
                <span className="text-[#1A2A1A]">Care</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#777] font-bold flex flex-col items-center text-center p-2 border border-dashed border-[#E5E1D8] rounded bg-white/60">
                <span>Evidence-Based</span>
                <span className="text-[#1A2A1A]">Support</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#777] font-bold flex flex-col items-center text-center p-2 border border-dashed border-[#E5E1D8] rounded bg-white/60">
                <span>Child & Teen</span>
                <span className="text-[#1A2A1A]">Specialist</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#E5E1D8] bg-white p-2">
              <img
                src={heroImg}
                alt="Compassionate child counselling session"
                className="w-full h-[360px] sm:h-[420px] object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Quote Badge */}
              <div className="mt-2 bg-[#F7F9F2] p-4 rounded-xl border border-[#E5E1D8]">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-full bg-[#6B8E23] flex items-center justify-center text-white shrink-0 font-serif text-lg font-bold">
                    <Heart className="w-4 h-4 fill-white/30 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A2A1A] text-xs font-serif uppercase tracking-wider">A Safe Space for Healing</h4>
                    <p className="text-xs text-[#555] italic leading-relaxed mt-1 font-serif">
                      "Behind every outburst or quiet withdrawal is a child asking to be heard. We guide them with patience and care."
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
