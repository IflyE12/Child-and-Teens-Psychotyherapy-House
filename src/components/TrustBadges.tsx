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
  <ShieldCheck className="w-4 h-4 text-[#A7D495]" />,
  <Award className="w-4 h-4 text-[#A7D495]" />,
  <Sparkles className="w-4 h-4 text-[#A7D495]" />,
  <Users className="w-4 h-4 text-[#A7D495]" />,
  <Heart className="w-4 h-4 text-[#A7D495]" />,
  <FileCheck className="w-4 h-4 text-[#A7D495]" />,
];

export const TrustBadges: React.FC = () => {
  return (
    <div className="bg-[#172815] text-white rounded-2xl p-6 sm:p-7 shadow-md border border-[#2D452B] mb-10 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#A7D495] bg-[#223521] px-3 py-1 rounded-md border border-[#3E5C3B]">
          Clinical Ethics & Patient Sanctuary
        </span>
        <h3 className="text-lg sm:text-xl font-bold font-serif text-white mt-2">
          Committed to Clinical Excellence & Absolute Discretion
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {TRUST_BADGES.map((badge, index) => (
          <div
            key={badge}
            className="flex items-center space-x-3 bg-white/5 px-3.5 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-[#223521] border border-[#3E5C3B] flex items-center justify-center shrink-0">
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
