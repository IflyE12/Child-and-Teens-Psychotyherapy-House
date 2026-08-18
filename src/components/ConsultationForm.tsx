import React, { useState, useEffect } from 'react';
import { LeadFormData } from '../types';
import {
  AGE_OPTIONS,
  GENDER_OPTIONS,
  CONCERNS_OPTIONS,
  CONSULTATION_TYPES,
  CONTACT_METHODS,
  CONSULTATION_TIMES,
} from '../data/copyData';
import {
  DEFAULT_WEBHOOK_URL,
  formatWhatsAppMessage,
  saveLeadToLocalStorage,
  sendToGoogleSheetDirectly,
} from '../utils/leadHandler';
import { Send, CheckCircle2, AlertCircle, FileSpreadsheet, Lock } from 'lucide-react';

interface ConsultationFormProps {
  onSuccessSubmit: (resultData: {
    leadId: string;
    whatsappUrl: string;
    whatsappText: string;
    sheetForwarded: boolean;
    sheetError?: string | null;
    formData: LeadFormData;
  }) => void;
  configuredWebhookUrl: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  onSuccessSubmit,
  configuredWebhookUrl,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    parentOccupation: '',
    childName: '',
    childAge: '6–9 Years',
    childGender: 'Prefer not to say',
    concerns: [],
    otherConcern: '',
    situationDescription: '',
    desiredOutcome: '',
    preferredConsultation: 'Either Option',
    preferredContactMethod: 'WhatsApp',
    preferredTime: 'Morning',
    consentAccuracy: false,
    consentRequestOnly: false,
    consentContact: false,
  });

  const [customWebhookInput, setCustomWebhookInput] = useState(configuredWebhookUrl);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (configuredWebhookUrl) {
      setCustomWebhookInput(configuredWebhookUrl);
    }
  }, [configuredWebhookUrl]);

  const handleConcernToggle = (option: string) => {
    setFormData((prev) => {
      const exists = prev.concerns.includes(option);
      if (exists) {
        return { ...prev, concerns: prev.concerns.filter((c) => c !== option) };
      } else {
        return { ...prev, concerns: [...prev.concerns, option] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Form Validations
    if (!formData.parentName.trim()) {
      setErrorMessage("Parent/Guardian Full Name is required.");
      return;
    }
    if (!formData.parentEmail.trim() || !formData.parentEmail.includes('@')) {
      setErrorMessage("Please provide a valid Parent/Guardian Email Address.");
      return;
    }
    if (!formData.parentPhone.trim()) {
      setErrorMessage("Parent/Guardian Phone Number is required.");
      return;
    }
    if (!formData.childName.trim()) {
      setErrorMessage("Child's Full Name is required.");
      return;
    }
    if (formData.concerns.length === 0 && !formData.otherConcern.trim()) {
      setErrorMessage("Please select at least one concern or describe in 'Other'.");
      return;
    }
    if (!formData.situationDescription.trim()) {
      setErrorMessage("Please briefly describe the situation.");
      return;
    }
    if (!formData.consentAccuracy || !formData.consentRequestOnly || !formData.consentContact) {
      setErrorMessage("Please check all three required consent boxes to proceed.");
      return;
    }

    setIsSubmitting(true);

    const activeWebhookUrl = customWebhookInput.trim() || configuredWebhookUrl || DEFAULT_WEBHOOK_URL;
    const { whatsappText, whatsappUrl } = formatWhatsAppMessage(formData);
    const localSaved = saveLeadToLocalStorage(formData);
    const leadId = localSaved?.id || `lead_${Date.now()}`;

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          consentConfirmed: true,
          customWebhookUrl: activeWebhookUrl,
        }),
      });

      if (response.ok) {
        const resData = await response.json().catch(() => null);
        if (resData && resData.success) {
          onSuccessSubmit({
            leadId: resData.leadId,
            whatsappUrl: resData.whatsappUrl,
            whatsappText: resData.whatsappText,
            sheetForwarded: resData.sheetForwarded,
            sheetError: resData.sheetError,
            formData,
          });
          return;
        }
      }
      
      // Fallback for static hosting (e.g. Netlify)
      const sheetForwarded = await sendToGoogleSheetDirectly(activeWebhookUrl, formData);
      onSuccessSubmit({
        leadId,
        whatsappUrl,
        whatsappText,
        sheetForwarded,
        sheetError: null,
        formData,
      });
    } catch {
      // Direct client fallback
      const sheetForwarded = await sendToGoogleSheetDirectly(activeWebhookUrl, formData);
      onSuccessSubmit({
        leadId,
        whatsappUrl,
        whatsappText,
        sheetForwarded,
        sheetError: null,
        formData,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="consultation-form-section" className="bg-white rounded-xl p-6 sm:p-8 border border-[#E5E1D8] shadow-2xs max-w-4xl mx-auto">
      
      {/* Form Header */}
      <div className="border-b border-[#E5E1D8] pb-5 mb-6 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start space-x-2 text-[#4A5D23] text-xs font-bold uppercase tracking-wider mb-1.5">
          <Lock className="w-4 h-4 text-[#6B8E23]" />
          <span>Strictly Confidential Intake</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#1A2A1A]">
          Take the First Step Toward Your Child's Well-being
        </h3>
        <p className="text-[#555] text-xs sm:text-sm leading-relaxed mt-1">
          Please complete the form below. All information you provide is kept strictly confidential and will only be used to help us better understand your concerns before your consultation.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-5 p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 flex items-start space-x-3 text-xs">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Please check your entries:</p>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Section 1: Parent/Guardian Information */}
        <div className="space-y-3">
          <h4 className="text-base font-bold font-serif text-[#1A2A1A] flex items-center space-x-2 border-b border-[#E5E1D8] pb-2">
            <span className="w-5 h-5 rounded-full bg-[#F7F9F2] text-[#4A5D23] border border-[#E5E1D8] text-[11px] flex items-center justify-center font-sans font-bold">1</span>
            <span>Parent/Guardian Information</span>
          </h4>

          <div className="grid sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#444] mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g., Mrs. Adeola Johnson"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD] focus:border-[#6B8E23] text-slate-900 text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-[#444] mb-1">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="e.g., parent@example.com"
                value={formData.parentEmail}
                onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD] focus:border-[#6B8E23] text-slate-900 text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-[#444] mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="e.g., 08012345678"
                value={formData.parentPhone}
                onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD] focus:border-[#6B8E23] text-slate-900 text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-[#444] mb-1">
                Occupation
              </label>
              <input
                type="text"
                placeholder="e.g., Accountant, Teacher, Business Owner"
                value={formData.parentOccupation}
                onChange={(e) => setFormData({ ...formData, parentOccupation: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD] focus:border-[#6B8E23] text-slate-900 text-sm outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Child's Information */}
        <div className="space-y-3">
          <h4 className="text-base font-bold font-serif text-[#1A2A1A] flex items-center space-x-2 border-b border-[#E5E1D8] pb-2">
            <span className="w-5 h-5 rounded-full bg-[#F7F9F2] text-[#4A5D23] border border-[#E5E1D8] text-[11px] flex items-center justify-center font-sans font-bold">2</span>
            <span>Child's Information</span>
          </h4>

          <div className="grid sm:grid-cols-2 gap-3.5">
            <div className="sm:col-span-2">
              <label className="block text-[11px] font-bold uppercase text-[#444] mb-1">
                Child's Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g., Daniel Johnson"
                value={formData.childName}
                onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD] focus:border-[#6B8E23] text-slate-900 text-sm outline-none transition-all"
              />
            </div>

            {/* Child's Age */}
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#444] mb-1.5">
                Child's Age <span className="text-rose-500">*</span>
              </label>
              <div className="space-y-1.5">
                {AGE_OPTIONS.map((ageOpt) => (
                  <label
                    key={ageOpt}
                    className={`flex items-center space-x-2.5 p-2.5 rounded-lg border cursor-pointer transition-all text-xs ${
                      formData.childAge === ageOpt
                        ? 'bg-[#F7F9F2] border-[#6B8E23] text-[#1A2A1A] font-semibold'
                        : 'border-[#DDD] text-[#555] hover:bg-[#F7F9F2]/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="childAge"
                      checked={formData.childAge === ageOpt}
                      onChange={() => setFormData({ ...formData, childAge: ageOpt })}
                      className="accent-[#6B8E23] w-3.5 h-3.5"
                    />
                    <span>{ageOpt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#444] mb-1.5">
                Gender
              </label>
              <div className="space-y-1.5">
                {GENDER_OPTIONS.map((genderOpt) => (
                  <label
                    key={genderOpt}
                    className={`flex items-center space-x-2.5 p-2.5 rounded-lg border cursor-pointer transition-all text-xs ${
                      formData.childGender === genderOpt
                        ? 'bg-[#F7F9F2] border-[#6B8E23] text-[#1A2A1A] font-semibold'
                        : 'border-[#DDD] text-[#555] hover:bg-[#F7F9F2]/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="childGender"
                      checked={formData.childGender === genderOpt}
                      onChange={() => setFormData({ ...formData, childGender: genderOpt })}
                      className="accent-[#6B8E23] w-3.5 h-3.5"
                    />
                    <span>{genderOpt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Tell Us About Your Concern */}
        <div className="space-y-3">
          <h4 className="text-base font-bold font-serif text-[#1A2A1A] flex items-center space-x-2 border-b border-[#E5E1D8] pb-2">
            <span className="w-5 h-5 rounded-full bg-[#F7F9F2] text-[#4A5D23] border border-[#E5E1D8] text-[11px] flex items-center justify-center font-sans font-bold">3</span>
            <span>Tell Us About Your Concern</span>
          </h4>

          <div>
            <label className="block text-[11px] font-bold uppercase text-[#444] mb-1.5">
              What challenges is your child currently experiencing? (Select all that apply)
            </label>
            <div className="grid sm:grid-cols-2 gap-2">
              {CONCERNS_OPTIONS.map((concern) => {
                const checked = formData.concerns.includes(concern);
                return (
                  <label
                    key={concern}
                    className={`flex items-start space-x-2.5 p-2.5 rounded-lg border cursor-pointer transition-all text-xs ${
                      checked
                        ? 'bg-[#F7F9F2] border-[#6B8E23] text-[#1A2A1A] font-semibold'
                        : 'border-[#DDD] text-[#555] hover:bg-[#F7F9F2]/50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleConcernToggle(concern)}
                      className="accent-[#6B8E23] w-3.5 h-3.5 mt-0.5 rounded"
                    />
                    <span>{concern}</span>
                  </label>
                );
              })}
            </div>

            <div className="mt-2.5">
              <label className="block text-[11px] font-bold uppercase text-[#444] mb-1">
                Other Concern (Optional):
              </label>
              <input
                type="text"
                placeholder="Specify any other specific issue..."
                value={formData.otherConcern}
                onChange={(e) => setFormData({ ...formData, otherConcern: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg border border-[#DDD] focus:border-[#6B8E23] text-slate-900 text-xs outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Situation & Goals Description */}
        <div className="space-y-3">
          <h4 className="text-base font-bold font-serif text-[#1A2A1A] flex items-center space-x-2 border-b border-[#E5E1D8] pb-2">
            <span className="w-5 h-5 rounded-full bg-[#F7F9F2] text-[#4A5D23] border border-[#E5E1D8] text-[11px] flex items-center justify-center font-sans font-bold">4</span>
            <span>Details & Desired Outcomes</span>
          </h4>

          <div>
            <label className="block text-[11px] font-bold uppercase text-[#444] mb-1">
              Please Describe the Situation <span className="text-rose-500">*</span>
            </label>
            <p className="text-[11px] text-[#777] mb-1">
              Tell us what has been happening, when it started, and anything else you believe would help us understand your concerns.
            </p>
            <textarea
              rows={3}
              required
              placeholder="e.g., My child has been having difficulty focusing in school over the past 6 months..."
              value={formData.situationDescription}
              onChange={(e) => setFormData({ ...formData, situationDescription: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD] focus:border-[#6B8E23] text-slate-900 text-xs sm:text-sm outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-[#444] mb-1">
              What Would You Like to Achieve?
            </label>
            <p className="text-[11px] text-[#777] mb-1">
              If counselling is successful, what positive changes would you like to see in your child or family?
            </p>
            <textarea
              rows={3}
              placeholder="e.g., Improved confidence, calmer home environment, better anger control..."
              value={formData.desiredOutcome}
              onChange={(e) => setFormData({ ...formData, desiredOutcome: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD] focus:border-[#6B8E23] text-slate-900 text-xs sm:text-sm outline-none transition-all"
            />
          </div>
        </div>

        {/* Section 5: Preferences */}
        <div className="space-y-3">
          <h4 className="text-base font-bold font-serif text-[#1A2A1A] flex items-center space-x-2 border-b border-[#E5E1D8] pb-2">
            <span className="w-5 h-5 rounded-full bg-[#F7F9F2] text-[#4A5D23] border border-[#E5E1D8] text-[11px] flex items-center justify-center font-sans font-bold">5</span>
            <span>Consultation Preferences</span>
          </h4>

          <div className="grid sm:grid-cols-3 gap-3">
            {/* Preferred Consultation Type */}
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#444] mb-1.5">
                Preferred Consultation
              </label>
              <div className="space-y-1">
                {CONSULTATION_TYPES.map((type) => (
                  <label
                    key={type}
                    className={`flex items-center space-x-2 p-2 rounded-lg border cursor-pointer text-xs ${
                      formData.preferredConsultation === type
                        ? 'bg-[#F7F9F2] border-[#6B8E23] text-[#1A2A1A] font-semibold'
                        : 'border-[#DDD] text-[#555]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="preferredConsultation"
                      checked={formData.preferredConsultation === type}
                      onChange={() => setFormData({ ...formData, preferredConsultation: type })}
                      className="accent-[#6B8E23]"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#444] mb-1.5">
                Preferred Contact Method
              </label>
              <div className="space-y-1">
                {CONTACT_METHODS.map((method) => (
                  <label
                    key={method}
                    className={`flex items-center space-x-2 p-2 rounded-lg border cursor-pointer text-xs ${
                      formData.preferredContactMethod === method
                        ? 'bg-[#F7F9F2] border-[#6B8E23] text-[#1A2A1A] font-semibold'
                        : 'border-[#DDD] text-[#555]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="preferredContactMethod"
                      checked={formData.preferredContactMethod === method}
                      onChange={() => setFormData({ ...formData, preferredContactMethod: method })}
                      className="accent-[#6B8E23]"
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Preferred Consultation Time */}
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#444] mb-1.5">
                Preferred Time
              </label>
              <div className="space-y-1">
                {CONSULTATION_TIMES.map((time) => (
                  <label
                    key={time}
                    className={`flex items-center space-x-2 p-2 rounded-lg border cursor-pointer text-xs ${
                      formData.preferredTime === time
                        ? 'bg-[#F7F9F2] border-[#6B8E23] text-[#1A2A1A] font-semibold'
                        : 'border-[#DDD] text-[#555]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="preferredTime"
                      checked={formData.preferredTime === time}
                      onChange={() => setFormData({ ...formData, preferredTime: time })}
                      className="accent-[#6B8E23]"
                    />
                    <span>{time}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Google Sheet Integration Optional Link Input */}
        <div className="bg-[#F7F9F2] p-3.5 rounded-xl border border-[#E5E1D8] space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-[11px] font-bold uppercase text-[#1A2A1A] flex items-center space-x-1.5">
              <FileSpreadsheet className="w-3.5 h-3.5 text-[#6B8E23]" />
              <span>Google Sheet Webhook URL (Optional):</span>
            </label>
            <span className="text-[10px] text-[#4A5D23] font-medium">Auto-sync active</span>
          </div>
          <input
            type="url"
            placeholder="https://script.google.com/macros/s/.../exec"
            value={customWebhookInput}
            onChange={(e) => setCustomWebhookInput(e.target.value)}
            className="w-full px-3 py-1.5 rounded-lg border border-[#DDD] bg-white text-xs text-slate-800 outline-none focus:border-[#6B8E23]"
          />
        </div>

        {/* Section 6: Consent Checkboxes */}
        <div className="space-y-2 bg-[#F7F9F2]/60 p-4 rounded-xl border border-[#E5E1D8]">
          <label className="block text-[11px] font-bold uppercase text-[#1A2A1A] mb-1">
            Consent & Terms <span className="text-rose-500">*</span>
          </label>

          <label className="flex items-start space-x-2.5 cursor-pointer text-xs text-[#555]">
            <input
              type="checkbox"
              required
              checked={formData.consentAccuracy}
              onChange={(e) => setFormData({ ...formData, consentAccuracy: e.target.checked })}
              className="accent-[#6B8E23] w-3.5 h-3.5 mt-0.5 rounded"
            />
            <span>I confirm that the information provided is accurate to the best of my knowledge.</span>
          </label>

          <label className="flex items-start space-x-2.5 cursor-pointer text-xs text-[#555]">
            <input
              type="checkbox"
              required
              checked={formData.consentRequestOnly}
              onChange={(e) => setFormData({ ...formData, consentRequestOnly: e.target.checked })}
              className="accent-[#6B8E23] w-3.5 h-3.5 mt-0.5 rounded"
            />
            <span>I understand that submitting this form is a request for consultation and does not constitute emergency mental health care.</span>
          </label>

          <label className="flex items-start space-x-2.5 cursor-pointer text-xs text-[#555]">
            <input
              type="checkbox"
              required
              checked={formData.consentContact}
              onChange={(e) => setFormData({ ...formData, consentContact: e.target.checked })}
              className="accent-[#6B8E23] w-3.5 h-3.5 mt-0.5 rounded"
            />
            <span>I consent to being contacted regarding my consultation request.</span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-xl bg-[#1A2A1A] hover:bg-[#2c3d2c] text-white font-bold uppercase tracking-wider text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Processing Request...</span>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#6B8E23]" />
                <span>Book Consultation & Open WhatsApp</span>
              </>
            )}
          </button>
        </div>

      </form>

    </div>
  );
};
