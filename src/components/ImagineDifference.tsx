import React from 'react';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { IMAGINE_DIFFERENCE } from '../data/copyData';
import familyImg from '../assets/images/black_family_thriving_1793183156456.jpg';

interface ImagineDifferenceProps {
  onScrollToForm: () => void;
}

export const ImagineDifference: React.FC<ImagineDifferenceProps> = ({ onScrollToForm }) => {
  return (
    <section className="py-16 lg:py-20 bg-[#172815] text-white relative overflow-hidden border-b border-[#2D452B]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Checklists */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#A7D495]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A7D495]"></span>
              <span className="uppercase tracking-widest text-[11px] font-bold">Positive Life Transformation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif leading-tight text-white tracking-tight">
              Imagine the Difference in Your Home...
            </h2>

            <p className="text-lg font-medium text-[#F4F7EF] font-serif italic">
              Imagine your child with healthy tools, inner calm, and a brighter smile:
            </p>

            <div className="grid sm:grid-cols-2 gap-3.5">
              {IMAGINE_DIFFERENCE.map((item) => (
                <div
                  key={item}
                  className="flex items-start space-x-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#A7D495] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-[#F7F9F2] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <p className="text-sm sm:text-base text-[#F7F9F2] leading-relaxed font-serif">
                Imagine daily dinner conversations free of tension, morning school routines that run smoothly, and your child developing true confidence.
              </p>
              <p className="text-xs font-bold text-[#A7D495] uppercase tracking-wider">
                This transformation is completely reachable—and it begins with one confidential conversation.
              </p>
            </div>

            <div>
              <button
                onClick={onScrollToForm}
                className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#2D5A27] to-[#3B6B34] hover:from-[#24491F] hover:to-[#2D5A27] text-white font-bold text-sm shadow-sm transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Take the First Step Today</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>

          {/* Right: Family Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-xl overflow-hidden border border-[#4A5D23] shadow-md bg-[#2D2D2D] p-2">
              <img
                src={familyImg}
                alt="Happy thriving family"
                className="w-full h-[360px] object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
