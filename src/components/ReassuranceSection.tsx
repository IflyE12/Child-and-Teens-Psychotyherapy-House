import React from 'react';
import { HeartHandshake, ShieldCheck } from 'lucide-react';

export const ReassuranceSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#F8F6F1] border-b border-[#E8E2D9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Parent Reassurance Block */}
        <div className="bg-white p-7 sm:p-9 rounded-2xl border border-[#E8E2D9] shadow-2xs space-y-5">
          <div className="flex items-center space-x-3.5 text-[#172815]">
            <div className="w-12 h-12 rounded-xl bg-[#F4F7EF] border border-[#DFE7D6] flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6 text-[#2D5A27]" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-[#172815]">
              You Don't Have to Face This Alone
            </h2>
          </div>

          <div className="space-y-3.5 text-[#566050] text-sm sm:text-base leading-relaxed">
            <p>
              As a parent, it is completely natural to feel exhausted or anxious when your child is distressed. You may have tried different parenting books, spoken with school teachers, searched late at night for answers, or hoped things would simply blow over with time.
            </p>
            <p className="font-semibold text-[#172815]">
              Sometimes they do. But more often, children need specialized clinical techniques to unlock what they feel.
            </p>
            <div className="bg-[#FAF8F5] p-5 rounded-xl border-l-4 border-l-[#2D5A27] font-serif text-[#172815] font-semibold text-sm sm:text-base border border-[#E8E2D9] italic">
              "Seeking professional guidance is never a reflection of failure. It is one of the most proactive, loving, and courageous investments you can make into your child's lifelong emotional well-being."
            </div>
          </div>
        </div>

        {/* Future Starts Today Block */}
        <div className="bg-[#172815] text-white p-7 sm:p-9 rounded-2xl border border-[#2D452B] shadow-md space-y-4 relative overflow-hidden">
          <div className="relative space-y-3.5">
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#A7D495]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A7D495]"></span>
              <span className="uppercase tracking-widest text-[11px] font-bold">Early Clinical Intervention</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-white">
              Your Child's Brighter Tomorrow Starts Today
            </h3>

            <p className="text-[#DFE7D6] text-sm sm:text-base leading-relaxed">
              The earlier behavioural, emotional, and social hurdles are addressed, the faster a young mind can re-anchor in safety, resilience, and joyful learning.
            </p>

            <p className="text-[#A7D495] font-serif font-bold text-base sm:text-lg leading-relaxed pt-1">
              Together, we can help your child cultivate healthy coping skills, authentic confidence, and peace that lasts into adulthood.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
