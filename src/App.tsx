/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingCalculator } from './components/BookingCalculator';
import { PackagesSection } from './components/PackagesSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TermsSection } from './components/TermsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { StatsSection } from './components/StatsSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServicePackage } from './types';

function AppContent() {
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(null);

  const handleSelectPackage = (pkg: ServicePackage) => {
    setSelectedPackage(pkg);
    // Smooth scroll to calculator right after hero
    const el = document.getElementById('kalkulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9FA] text-[#2D1A22] w-full overflow-x-hidden">
      {/* Top Bar Navigation */}
      <Navbar />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Kira Sebut Harga (Price Calculator) - Placed directly AFTER Hero as requested! */}
        <BookingCalculator selectedPackage={selectedPackage} />

        {/* 3. Official Packages & Pricing */}
        <PackagesSection onSelectPackage={handleSelectPackage} />

        {/* 4. Curated Look Portfolio Gallery */}
        <PortfolioGallery />

        {/* 6. Testimonials */}
        <TestimonialsSection />

        {/* 7. Official Terms & Disclaimer */}
        <TermsSection />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />

        {/* 9. Contact Channels & Social Media */}
        <ContactSection />

        {/* 10. Official Stats & Milestones - Placed at the very bottom before footer as requested */}
        <StatsSection />
      </main>

      {/* Quiet Luxury Footer */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
