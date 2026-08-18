import React, { useState, useEffect } from 'react';
import { X, Copy, Check, FileSpreadsheet, ExternalLink, Code2, Play } from 'lucide-react';

interface GoogleSheetsModalProps {
  isOpen: boolean;
  onClose: () => void;
  configuredWebhookUrl: string;
  onSaveWebhookUrl: (url: string) => void;
}

export const GoogleSheetsModal: React.FC<GoogleSheetsModalProps> = ({
  isOpen,
  onClose,
  configuredWebhookUrl,
  onSaveWebhookUrl,
}) => {
  const [scriptCode, setScriptCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [webhookInput, setWebhookInput] = useState(configuredWebhookUrl);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    fetch('/api/google-sheet-script')
      .then((res) => res.json())
      .then((data) => {
        if (data.script) {
          setScriptCode(data.script);
        }
        if (data.configuredWebhookUrl) {
          setWebhookInput(data.configuredWebhookUrl);
        }
      })
      .catch((err) => console.error("Error fetching Google Sheet script:", err));
  }, []);

  useEffect(() => {
    if (configuredWebhookUrl) {
      setWebhookInput(configuredWebhookUrl);
    }
  }, [configuredWebhookUrl]);

  if (!isOpen) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(scriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSaveSettings = () => {
    onSaveWebhookUrl(webhookInput);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg border border-[#E5E1D8] overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#1A2A1A] text-white p-5 flex items-center justify-between border-b border-[#4A5D23]">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-[#2D2D2D] border border-[#4A5D23] flex items-center justify-center text-[#6B8E23]">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif">Google Sheets Automation Script</h3>
              <p className="text-xs text-[#E5E1D8]">Automatically log every incoming lead directly to your Google Sheet</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-5 max-h-[75vh] overflow-y-auto text-[#2D2D2D]">
          
          {/* Quick Step-by-Step Guide */}
          <div className="bg-[#F7F9F2] p-4 rounded-xl border border-[#E5E1D8] space-y-2.5">
            <h4 className="font-bold text-[#1A2A1A] text-xs uppercase tracking-wider font-serif flex items-center space-x-2">
              <Code2 className="w-3.5 h-3.5 text-[#6B8E23]" />
              <span>3-Minute Google Sheets Setup Instructions</span>
            </h4>
            <ol className="list-decimal list-inside text-xs text-[#555] space-y-1.5 leading-relaxed">
              <li>
                Open <a href="https://sheets.new" target="_blank" rel="noopener noreferrer" className="text-[#6B8E23] font-bold underline inline-flex items-center space-x-1"><span>Google Sheets (sheets.new)</span> <ExternalLink className="w-3 h-3" /></a> and create a new blank spreadsheet.
              </li>
              <li>
                In the menu bar, click <strong>Extensions</strong> &gt; <strong>Apps Script</strong>.
              </li>
              <li>
                Delete any existing code in the editor, paste the script code below, and click <strong>Save</strong> (the floppy disk icon).
              </li>
              <li>
                Click <strong>Deploy</strong> &gt; <strong>New deployment</strong>.
              </li>
              <li>
                Select type <strong>Web app</strong>. Set <em>Execute as:</em> <strong>Me</strong> and <em>Who has access:</em> <strong>Anyone</strong> (crucial so lead submissions work without login).
              </li>
              <li>
                Click <strong>Deploy</strong>, authorize permissions, copy the <strong>Web App URL</strong>, and paste it below!
              </li>
            </ol>
          </div>

          {/* Web App URL Save Input */}
          <div className="bg-white p-4 rounded-xl border border-[#E5E1D8] space-y-2">
            <label className="block text-[11px] font-bold uppercase text-[#444]">
              Paste Your Google Apps Script Web App URL:
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="url"
                placeholder="https://script.google.com/macros/s/.../exec"
                value={webhookInput}
                onChange={(e) => setWebhookInput(e.target.value)}
                className="flex-1 px-3.5 py-2 rounded-lg border border-[#DDD] text-xs text-slate-900 bg-white outline-none focus:border-[#6B8E23]"
              />
              <button
                onClick={handleSaveSettings}
                className="px-4 py-2 rounded-lg bg-[#6B8E23] hover:bg-[#5a781d] text-white font-bold text-xs transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shrink-0"
              >
                {saveSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Save Webhook</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Code Viewer & Copy Button */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-bold uppercase text-[#444]">
                Google Apps Script Code (Code.gs):
              </label>
              <button
                onClick={handleCopyCode}
                className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-[#1A2A1A] hover:bg-[#2c3d2c] text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#6B8E23]" />
                    <span>Copied Code!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Script</span>
                  </>
                )}
              </button>
            </div>

            <div className="relative rounded-lg bg-[#1A2A1A] text-[#F7F9F2] p-4 font-mono text-[11px] overflow-x-auto max-h-64 border border-[#4A5D23]">
              <pre className="whitespace-pre-wrap leading-relaxed">{scriptCode}</pre>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#F7F9F2] p-3.5 border-t border-[#E5E1D8] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-lg bg-white hover:bg-gray-100 text-[#1A2A1A] border border-[#E5E1D8] text-xs font-bold transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
