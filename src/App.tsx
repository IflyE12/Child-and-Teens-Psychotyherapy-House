import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ImagineDifference } from './components/ImagineDifference';
import { ReassuranceSection } from './components/ReassuranceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TrustBadges } from './components/TrustBadges';
import { ConsultationCTA } from './components/ConsultationCTA';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';
import { GoogleSheetsModal } from './components/GoogleSheetsModal';
import { LeadsAdminDrawer } from './components/LeadsAdminDrawer';
import { WhatsAppSuccessModal } from './components/WhatsAppSuccessModal';
import { LeadFormData } from './types';

export default function App() {
  const [isGoogleSheetModalOpen, setIsGoogleSheetModalOpen] = useState(false);
  const [isLeadsDrawerOpen, setIsLeadsDrawerOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [leadsCount, setLeadsCount] = useState(0);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [configuredWebhookUrl, setConfiguredWebhookUrl] = useState('');

  const [lastSubmissionResult, setLastSubmissionResult] = useState<{
    leadId: string;
    whatsappUrl: string;
    whatsappText: string;
    sheetForwarded: boolean;
    sheetError?: string | null;
    formData: LeadFormData | null;
  }>({
    leadId: '',
    whatsappUrl: '',
    whatsappText: '',
    sheetForwarded: false,
    sheetError: null,
    formData: null,
  });

  // Fetch count and webhook setting on mount
  useEffect(() => {
    try {
      const local = JSON.parse(localStorage.getItem('haven_leads_store') || '[]');
      if (Array.isArray(local)) {
        setLeadsCount(local.length);
      }
    } catch {
      // ignore
    }

    const savedUrl = localStorage.getItem('haven_webhook_url');
    if (savedUrl) {
      setConfiguredWebhookUrl(savedUrl);
    }

    fetch('/api/leads')
      .then((res) => {
        const ct = res.headers.get('content-type');
        if (ct && ct.includes('application/json')) {
          return res.json();
        }
        return null;
      })
      .then((data) => {
        if (data && typeof data.totalCount === 'number') {
          setLeadsCount(data.totalCount);
        }
      })
      .catch((err) => console.log('Static preview mode active for leads:', err));

    fetch('/api/google-sheet-script')
      .then((res) => {
        const ct = res.headers.get('content-type');
        if (ct && ct.includes('application/json')) {
          return res.json();
        }
        return null;
      })
      .then((data) => {
        if (data && data.configuredWebhookUrl) {
          setConfiguredWebhookUrl(data.configuredWebhookUrl);
        }
      })
      .catch((err) => console.log('Static preview mode active for settings:', err));
  }, [refreshTrigger]);

  const handleScrollToForm = () => {
    const el = document.getElementById('consultation-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSuccessSubmit = (resultData: {
    leadId: string;
    whatsappUrl: string;
    whatsappText: string;
    sheetForwarded: boolean;
    sheetError?: string | null;
    formData: LeadFormData;
  }) => {
    setLastSubmissionResult(resultData);
    setIsSuccessModalOpen(true);
    setRefreshTrigger((prev) => prev + 1);

    // Auto open WhatsApp link in a new tab for seamless user experience!
    if (resultData.whatsappUrl) {
      setTimeout(() => {
        window.open(resultData.whatsappUrl, '_blank');
      }, 500);
    }
  };

  const handleSaveWebhookUrl = async (url: string) => {
    setConfiguredWebhookUrl(url);
    try {
      await fetch('/api/settings/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ webhookUrl: url }),
      });
    } catch (err) {
      console.error('Error saving webhook URL:', err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900">
      
      {/* Navigation Header */}
      <Header
        onOpenGoogleSheetModal={() => setIsGoogleSheetModalOpen(true)}
        onOpenLeadsDrawer={() => setIsLeadsDrawerOpen(true)}
        onScrollToForm={handleScrollToForm}
        leadsCount={leadsCount}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onScrollToForm={handleScrollToForm} />

        {/* 2. Story / Emotional Core */}
        <StorySection />

        {/* 3. How We Can Help (10 Services Grid) */}
        <ServicesGrid />

        {/* 4. Why Families Choose Us (5 Pillars) */}
        <WhyChooseUs />

        {/* 5. Imagine the Difference */}
        <ImagineDifference onScrollToForm={handleScrollToForm} />

        {/* 6. Parent Reassurance & Future Starts Today */}
        <ReassuranceSection />

        {/* 7. Real Testimonials + SECOND CTA Button */}
        <TestimonialsSection onScrollToForm={handleScrollToForm} />

        {/* Final Conversion & Form Block */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-purple-50/50 to-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Placed IMMEDIATELY BEFORE the final CTA button as requested */}
            <TrustBadges />

            {/* Final CTA Header */}
            <ConsultationCTA />

            {/* Consultation Form placed AFTER the CTA Button */}
            <ConsultationForm
              onSuccessSubmit={handleFormSuccessSubmit}
              configuredWebhookUrl={configuredWebhookUrl}
            />

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        onOpenGoogleSheetModal={() => setIsGoogleSheetModalOpen(true)}
        onScrollToForm={handleScrollToForm}
      />

      {/* Modals & Drawers */}
      <GoogleSheetsModal
        isOpen={isGoogleSheetModalOpen}
        onClose={() => setIsGoogleSheetModalOpen(false)}
        configuredWebhookUrl={configuredWebhookUrl}
        onSaveWebhookUrl={handleSaveWebhookUrl}
      />

      <LeadsAdminDrawer
        isOpen={isLeadsDrawerOpen}
        onClose={() => setIsLeadsDrawerOpen(false)}
        refreshTrigger={refreshTrigger}
      />

      <WhatsAppSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        leadId={lastSubmissionResult.leadId}
        whatsappUrl={lastSubmissionResult.whatsappUrl}
        whatsappText={lastSubmissionResult.whatsappText}
        sheetForwarded={lastSubmissionResult.sheetForwarded}
        sheetError={lastSubmissionResult.sheetError}
        formData={lastSubmissionResult.formData}
      />

    </div>
  );
}
