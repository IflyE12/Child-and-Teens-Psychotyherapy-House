import React from 'react';
import { TRUST_BADGES } from '../data/copyData';
import {
  ShieldCheck,
  Award,
  Sparkles,
  Users,
  Heart,
  FileCheck,
  CheckCircle
} from 'lucide-react';

const trustIcons = [
  <ShieldCheck className="w-4 h-4 text-[#6B8E23]" />,
  <Award className="w-4 h-4 text-[#6B8E23]" />,
  <Sparkles className="w-4 h-4 text-[#6B8E23]" />,
  <Users className="w-4 h-4 text-[#6B8E23]" />,
  <Heart className="w-4 h-4 text-[#6B8E23]" />,
  <FileCheck className="w-4 h-4 text-[#6B8E23]" />,
];

export const TrustBadges: React.FC = () => {
  return (
    <div className="bg-[#1A2A1A] text-white rounded-xl p-5 shadow-2xs border border-[#4A5D23] mb-8 max-w-4xl mx-auto">
      <div className="text-center mb-5">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B8E23] bg-[#2D2D2D] px-2.5 py-0.5 rounded border border-[#4A5D23]">
          Why You Can Trust Our Care
        </span>
        <h3 className="text-lg sm:text-xl font-bold font-serif text-white mt-1.5">
          Committed to Excellence in Mental Health
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {TRUST_BADGES.map((badge, index) => (
          <div
            key={badge}
            className="flex items-center space-x-2.5 bg-white/10 px-3 py-2.5 rounded-lg border border-white/10 hover:bg-white/15 transition-colors"
          >
            <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center shrink-0">
              {trustIcons[index] || <CheckCircle className="w-4 h-4 text-[#6B8E23]" />}
            </div>
            <span className="text-xs font-semibold text-[#F7F9F2]">
              {badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
