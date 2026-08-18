import React from 'react';
import { HeartHandshake, ShieldCheck } from 'lucide-react';

export const ReassuranceSection: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-[#FDFCFB] border-b border-[#E5E1D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Parent Reassurance Block */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E1D8] shadow-2xs space-y-4">
          <div className="flex items-center space-x-3 text-[#1A2A1A]">
            <div className="w-10 h-10 rounded-lg bg-[#F7F9F2] border border-[#E5E1D8] flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5 text-[#6B8E23]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#1A2A1A]">
              You Don't Have to Face This Alone
            </h2>
          </div>

          <div className="space-y-3 text-[#555] text-sm sm:text-base leading-relaxed">
            <p>
              As a parent, it's natural to worry when your child is struggling. You may have tried different approaches, spoken to teachers, searched online for answers, or simply hoped things would improve with time.
            </p>
            <p className="font-semibold text-[#1A2A1A]">
              Sometimes they do. Often, they need professional support.
            </p>
            <div className="bg-[#F7F9F2] p-4 rounded-lg border-l-4 border-l-[#6B8E23] font-serif text-[#1A2A1A] font-semibold text-sm sm:text-base border border-[#E5E1D8]">
              "Seeking help is not a sign that you've failed as a parent. It's one of the strongest and most loving decisions you can make for your child's future."
            </div>
          </div>
        </div>

        {/* Future Starts Today Block */}
        <div className="bg-[#1A2A1A] text-white p-6 sm:p-8 rounded-xl border border-[#4A5D23] shadow-sm space-y-4 relative overflow-hidden">
          <div className="relative space-y-3">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-md bg-[#4A5D23]/60 text-[#F7F9F2] text-xs font-bold uppercase tracking-wider border border-[#6B8E23]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#6B8E23]" />
              <span>Early Support Matters</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Your Child's Future Starts Today
            </h3>

            <p className="text-[#F7F9F2] text-sm sm:text-base leading-relaxed">
              The earlier emotional, behavioural, and social challenges are addressed, the greater the opportunity for healthy development and lasting success.
            </p>

            <p className="text-[#6B8E23] font-serif font-bold text-sm sm:text-base leading-relaxed pt-1">
              Together, we can help your child build the confidence, emotional resilience, and life skills they need to flourish—at home, in school, and beyond.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
