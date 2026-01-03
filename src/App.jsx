import React from 'react';
import HeroSection from './HeroSection';
import ShopTheSystems from './ShopTheSystems';
import CaseStudy from './CaseStudy';
import RevenueRecoveryAudit from './RevenueRecoveryAudit';

/**
 * Modern AI Consultancy Landing Page
 * Clean, minimal, sophisticated design
 */
function App() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F8FAFC]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Systems Showcase */}
      <ShopTheSystems />

      {/* Case Study */}
      <CaseStudy />

      {/* Lead Capture */}
      <RevenueRecoveryAudit />

      {/* Footer */}
      <footer className="py-16 border-t border-[#1F2937] bg-[#0B0F14]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center text-[#94A3B8] text-sm">
            © 2025 The AI Restaurant Guy. Built for operators, by operators.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
