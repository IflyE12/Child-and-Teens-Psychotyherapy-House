import React from 'react';
import { TESTIMONIALS } from '../data/copyData';
import { Calendar, Quote, Heart } from 'lucide-react';

interface TestimonialsSectionProps {
  onScrollToForm: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onScrollToForm }) => {
  return (
    <section id="testimonials-section" className="py-16 lg:py-20 bg-[#FDFCFB] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-[#2D5A27]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3E6B35]"></span>
            <span className="uppercase tracking-widest text-[11px] font-bold">Real Families · Real Breakthroughs</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif text-[#172815] tracking-tight">
            Trusted by Parents. Loved & Respected by Children.
          </h2>

          <p className="text-[#566050] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Every family's journey starts with a single step. Here is what parents and adolescents say about finding clarity and calm with Haven.
          </p>
        </div>

        {/* 7 Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl p-6 border border-[#E8E2D9] shadow-2xs hover:border-[#3E6B35] hover:shadow-sm transition-all flex flex-col justify-between relative group ${
                idx === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3.5">
                    <img
                      src={item.avatarUrl}
                      alt={item.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#DFE7D6]"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-[#172815] text-sm font-serif">{item.author}</h4>
                      <p className="text-[11px] text-[#2D5A27] font-semibold">{item.role}</p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-[#DFE7D6] group-hover:text-[#3E6B35] transition-colors shrink-0" />
                </div>

                <p className="text-[#4A5345] text-xs sm:text-sm leading-relaxed italic font-serif">
                  "{item.quote}"
                </p>
              </div>

              {item.tag && (
                <div className="mt-4 pt-3 border-t border-[#EFECE6] flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D5A27] bg-[#F4F7EF] px-2.5 py-1 rounded-md border border-[#DFE7D6]">
                    {item.tag}
                  </span>
                  <div className="flex text-amber-500 text-xs">
                    ★★★★★
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-[#E8E2D9] shadow-xs max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2D5A27] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif text-[#172815]">
                Your child's story can change too.
              </h3>
              <p className="text-xs sm:text-sm text-[#566050] mt-0.5">
                Take the first confidential step today toward renewed calm, confidence, and connection.
              </p>
            </div>
          </div>

          <button
            onClick={onScrollToForm}
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#2D5A27] to-[#3B6B34] hover:from-[#24491F] hover:to-[#2D5A27] text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer shrink-0 text-center transform hover:-translate-y-0.5"
          >
            Book Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
