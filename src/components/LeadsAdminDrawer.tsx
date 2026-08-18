import React, { useState, useEffect } from 'react';
import { X, Users, Download, Phone, RefreshCw, Search, Calendar, FileText } from 'lucide-react';
import { LeadFormData } from '../types';
import { getLocalLeads } from '../utils/leadHandler';

interface LeadRecord extends LeadFormData {
  id: string;
  timestamp: string;
}

interface LeadsAdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  refreshTrigger: number;
}

export const LeadsAdminDrawer: React.FC<LeadsAdminDrawerProps> = ({
  isOpen,
  onClose,
  refreshTrigger,
}) => {
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const local = getLocalLeads();
      const res = await fetch('/api/leads').catch(() => null);
      if (res && res.ok) {
        const data = await res.json().catch(() => null);
        if (data && data.leads) {
          // Merge unique by id
          const map = new Map<string, LeadRecord>();
          data.leads.forEach((l: LeadRecord) => map.set(l.id, l));
          local.forEach((l: LeadRecord) => map.set(l.id, l));
          setLeads(Array.from(map.values()));
          return;
        }
      }
      setLeads(local);
    } catch (err) {
      console.error('Failed to load leads:', err);
      setLeads(getLocalLeads());
    } finally {
      setLoading(false);
    }
  };

  const handleExportCSV = () => {
    if (leads.length === 0) return;
    const headers = [
      'Submission Date',
      'Parent Name',
      'Parent Email',
      'Parent Phone',
      'Parent Occupation',
      'Child Name',
      'Child Age',
      'Child Gender',
      'Concerns',
      'Other Concern',
      'Situation Description',
      'Desired Outcome',
      'Preferred Consultation',
      'Preferred Contact Method',
      'Preferred Time',
    ];

    const rows = leads.map((l) => [
      new Date(l.timestamp).toLocaleString(),
      l.parentName,
      l.parentEmail,
      l.parentPhone,
      l.parentOccupation || '',
      l.childName,
      l.childAge,
      l.childGender,
      Array.isArray(l.concerns) ? l.concerns.join('; ') : l.concerns,
      l.otherConcern || '',
      `"${(l.situationDescription || '').replace(/"/g, '""')}"`,
      `"${(l.desiredOutcome || '').replace(/"/g, '""')}"`,
      l.preferredConsultation,
      l.preferredContactMethod,
      l.preferredTime,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `haven_counselling_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (isOpen) {
      fetchLeads();
    }
  }, [isOpen, refreshTrigger]);

  if (!isOpen) return null;

  const filteredLeads = leads.filter((lead) => {
    const query = searchTerm.toLowerCase();
    return (
      lead.parentName?.toLowerCase().includes(query) ||
      lead.parentPhone?.toLowerCase().includes(query) ||
      lead.parentEmail?.toLowerCase().includes(query) ||
      lead.childName?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex justify-end">
      <div className="bg-white w-full max-w-2xl h-full shadow-2xl flex flex-col border-l border-[#E5E1D8] animate-in slide-in-from-right duration-250">
        
        {/* Drawer Header */}
        <div className="bg-[#1A2A1A] text-white p-5 flex items-center justify-between shrink-0 border-b border-[#4A5D23]">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-[#2D2D2D] border border-[#4A5D23] flex items-center justify-center text-[#6B8E23]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif">Captured Leads Dashboard</h3>
              <p className="text-xs text-[#E5E1D8]">{leads.length} total consultation requests</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={fetchLeads}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Refresh list"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            </button>

            <button
              onClick={handleExportCSV}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#6B8E23] hover:bg-[#5a781d] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-3 bg-[#F7F9F2] border-b border-[#E5E1D8] flex items-center space-x-2 shrink-0">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by parent name, child name, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs text-slate-900 bg-transparent outline-none"
          />
        </div>

        {/* Leads List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {loading ? (
            <div className="text-center py-12 text-slate-500 text-sm">Loading submissions...</div>
          ) : filteredLeads.length === 0 ? (
            <div className="text-center py-16 text-slate-500 space-y-2">
              <FileText className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="font-semibold text-sm">No leads captured yet</p>
              <p className="text-xs text-slate-400">Submissions from the consultation form will appear here in real time!</p>
            </div>
          ) : (
            filteredLeads.map((lead) => (
              <div
                key={lead.id}
                className="bg-white p-4 rounded-xl border border-[#E5E1D8] shadow-2xs hover:border-[#6B8E23]/60 transition-all space-y-2.5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A5D23] bg-[#F7F9F2] px-2 py-0.5 rounded border border-[#E5E1D8]">
                      Child: {lead.childName} ({lead.childAge})
                    </span>
                    <h4 className="font-bold text-[#1A2A1A] text-sm font-serif mt-1">
                      {lead.parentName}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {lead.parentEmail} • {lead.parentPhone}
                    </p>
                  </div>

                  <div className="flex items-center space-x-1 text-slate-400 text-[11px]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{new Date(lead.timestamp).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="text-xs text-[#2D2D2D] space-y-1 bg-[#F7F9F2] p-2.5 rounded-lg border border-[#E5E1D8]">
                  <p><strong>Concerns:</strong> {Array.isArray(lead.concerns) ? lead.concerns.join(', ') : lead.concerns} {lead.otherConcern ? `(${lead.otherConcern})` : ''}</p>
                  <p><strong>Situation:</strong> {lead.situationDescription}</p>
                  <p><strong>Preferences:</strong> {lead.preferredConsultation} | {lead.preferredContactMethod} | {lead.preferredTime}</p>
                </div>

                <div className="flex items-center justify-end pt-0.5">
                  <a
                    href={`https://wa.me/2348073327207?text=${encodeURIComponent(
                      `Hello ${lead.parentName}, following up regarding your consultation request for ${lead.childName}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-[#F7F9F2] text-[#4A5D23] text-xs font-semibold hover:bg-[#E5E1D8] transition-colors border border-[#6B8E23]/40"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#6B8E23]" />
                    <span>WhatsApp Contact</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
