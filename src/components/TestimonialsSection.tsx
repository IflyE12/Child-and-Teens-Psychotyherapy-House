import React from 'react';
import { TESTIMONIALS } from '../data/copyData';
import { Calendar, Quote, Heart } from 'lucide-react';

interface TestimonialsSectionProps {
  onScrollToForm: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onScrollToForm }) => {
  return (
    <section className="py-12 lg:py-16 bg-[#FDFCFB] border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#4A5D23] bg-[#F7F9F2] px-3.5 py-1 rounded-md border border-[#E5E1D8]">
            REAL FAMILIES. REAL STORIES.
          </span>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif text-[#1A2A1A]">
            Trusted by Parents. Loved by Children.
          </h2>

          <div className="flex items-center justify-center space-x-2 text-[#6B8E23] py-0.5">
            <div className="w-10 h-0.5 bg-[#E5E1D8] rounded-full" />
            <Heart className="w-4 h-4 fill-[#6B8E23]" />
            <div className="w-10 h-0.5 bg-[#E5E1D8] rounded-full" />
          </div>

          <p className="text-[#555] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Every child's journey is unique. Here's what some parents and teens have to say about their experience.
          </p>
        </div>

        {/* 7 Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl p-5 border border-[#E5E1D8] shadow-2xs hover:border-[#6B8E23]/60 transition-all flex flex-col justify-between relative group ${
                idx === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.avatarUrl}
                      alt={item.author}
                      className="w-11 h-11 rounded-full object-cover border border-[#E5E1D8]"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-[#1A2A1A] text-sm font-serif">{item.author}</h4>
                      <p className="text-[11px] text-[#6B8E23] font-semibold">{item.role}</p>
                    </div>
                  </div>
                  <Quote className="w-5 h-5 text-[#E5E1D8] group-hover:text-[#6B8E23] transition-colors shrink-0" />
                </div>

                <p className="text-[#555] text-xs sm:text-sm leading-relaxed italic font-serif">
                  "{item.quote}"
                </p>
              </div>

              {item.tag && (
                <div className="mt-3 pt-2.5 border-t border-[#E5E1D8] flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-[#4A5D23] bg-[#F7F9F2] px-2 py-0.5 rounded border border-[#E5E1D8]">
                    {item.tag}
                  </span>
                  <div className="flex text-[#6B8E23] text-xs">
                    ★★★★★
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-white rounded-xl p-5 border border-[#E5E1D8] shadow-2xs max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-[#6B8E23] text-white flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-serif text-[#1A2A1A]">
                Your child's story can change too.
              </h3>
              <p className="text-xs text-[#555] mt-0.5">
                Book a consultation today and take the first step toward a brighter, healthier future.
              </p>
            </div>
          </div>

          <button
            onClick={onScrollToForm}
            className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-[#6B8E23] hover:bg-[#5a781d] text-white font-bold text-xs shadow-2xs transition-all cursor-pointer shrink-0 text-center"
          >
            Book a Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
