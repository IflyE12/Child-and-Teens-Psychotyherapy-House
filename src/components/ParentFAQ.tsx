import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_INTL } from '../data/copyData';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'How do I know if my child needs professional counselling rather than just "growing out of it"?',
    answer:
      'While all children experience emotional ups and downs, therapy is indicated when changes persist for several weeks, disrupt daily family life or schoolwork, cause chronic distress, or manifest in uncharacteristic aggression, anxiety, or deep withdrawal. Early clinical guidance provides children with coping toolkits before habits become deeply entrenched.',
  },
  {
    question: 'Are sessions strictly confidential? Will my child feel comfortable opening up?',
    answer:
      'Confidentiality is our primary ethical cornerstone. We create a warm, zero-judgment atmosphere using play therapy, conversational techniques, and creative expression. Children and teenagers feel safe because they know our clinic is their private sanctuary to be heard without fear of scolding or judgment.',
  },
  {
    question: 'Can we book virtual sessions if we reside outside Lagos or prefer online appointments?',
    answer:
      'Yes, absolutely. We offer secure, interactive virtual consultations nationwide across Nigeria and internationally. Virtual sessions for older children and teens are highly effective, engaging, and convenient for busy families.',
  },
  {
    question: 'How are parents involved in the counselling journey?',
    answer:
      'We believe parents are essential partners in healing. While your child has their own confidential clinical space, we conduct regular parent debriefs and guidance sessions to equip you with specific positive parenting strategies, de-escalation tools, and routine adjustments at home.',
  },
  {
    question: 'What happens after I submit the consultation form on this website?',
    answer:
      `Immediately upon submitting the form, your request is logged and you will be connected directly to our clinical coordinator via WhatsApp (${WHATSAPP_NUMBER}). We will confirm your preferred timing and prepare the initial assessment schedule.`,
  },
];

export const ParentFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-[#2D5A27]">
            <HelpCircle className="w-4 h-4 text-[#3E6B35]" />
            <span className="uppercase tracking-widest text-[11px] font-bold">Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif text-[#172815] tracking-tight">
            Common Questions From Concerned Parents
          </h2>
          <p className="text-[#566050] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our approach, confidentiality, and what to expect during your first consultation.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-8">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-[#E8E2D9] overflow-hidden transition-all shadow-2xs hover:border-[#3E6B35]/50"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between space-x-4 cursor-pointer"
                >
                  <span className="font-bold text-[#172815] font-serif text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#2D5A27] text-white rotate-180' : 'bg-[#F4F7EF] text-[#2D5A27]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-[#566050] leading-relaxed border-t border-[#EFECE6] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp Inquiries Note */}
        <div className="text-center p-4 rounded-xl bg-white border border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#566050]">
          <span>Have a specific personal question about your child's situation?</span>
          <a
            href={`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent("Hello! I have a question about child & teen counselling consultations.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 font-bold text-[#128C7E] hover:underline"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ask us directly on WhatsApp ({WHATSAPP_NUMBER})</span>
          </a>
        </div>

      </div>
    </section>
  );
};
