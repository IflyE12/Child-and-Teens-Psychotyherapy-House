import React from 'react';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { IMAGINE_DIFFERENCE } from '../data/copyData';
import familyImg from '../assets/images/happy_family_thriving_1786127684448.jpg';

interface ImagineDifferenceProps {
  onScrollToForm: () => void;
}

export const ImagineDifference: React.FC<ImagineDifferenceProps> = ({ onScrollToForm }) => {
  return (
    <section className="py-12 lg:py-16 bg-[#1A2A1A] text-white relative overflow-hidden border-b border-[#4A5D23]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Checklists */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#4A5D23]/60 text-[#F7F9F2] text-xs font-bold uppercase tracking-wider border border-[#6B8E23]">
              <Sparkles className="w-3.5 h-3.5 text-[#6B8E23]" />
              <span>Positive Life Transformation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif leading-tight text-white">
              Imagine the Difference...
            </h2>

            <p className="text-lg font-medium text-[#F7F9F2] font-serif">
              Imagine your child...
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {IMAGINE_DIFFERENCE.map((item) => (
                <div
                  key={item}
                  className="flex items-start space-x-3 bg-white/10 p-3.5 rounded-xl border border-white/10 hover:bg-white/15 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#6B8E23] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-[#F7F9F2]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 p-4 rounded-xl border border-[#6B8E23]/40 space-y-2">
              <p className="text-sm sm:text-base text-[#F7F9F2] leading-relaxed font-serif">
                Imagine your home becoming calmer, your child smiling more often, and your family enjoying healthier relationships.
              </p>
              <p className="text-xs font-bold text-[#6B8E23] uppercase tracking-wider">
                This transformation is possible—and it begins with one important step.
              </p>
            </div>

            <div>
              <button
                onClick={onScrollToForm}
                className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-xl bg-[#6B8E23] hover:bg-[#5a781d] text-white font-bold text-sm shadow-sm transition-all cursor-pointer"
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
