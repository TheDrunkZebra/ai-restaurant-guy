import React from 'react';
import HeroSection from './HeroSection';
import ShopTheSystems from './ShopTheSystems';
import CaseStudy from './CaseStudy';
import BudgetDashboard from './BudgetDashboard';
import RevenueRecoveryAudit from './RevenueRecoveryAudit';

/**
 * The AI Restaurant Guy Landing Page
 * Clean, impressive design for restaurant owners
 * Clear value propositions and ROI-focused
 */
function App() {
  return (
    <div className="min-h-screen bg-[#0B0F14]">
      {/* Section 1: Hero with Portrait */}
      <HeroSection />

      {/* Section 2: Shop the Systems */}
      <section id="shop-systems">
        <ShopTheSystems />
      </section>

      {/* Section 3: Case Study / ROI */}
      <CaseStudy />

      {/* Section 4: Budget Architect Dashboard */}
      <BudgetDashboard />

      {/* Section 5: Revenue Recovery Audit Form */}
      <section id="revenue-recovery-audit">
        <RevenueRecoveryAudit />
      </section>

      {/* Footer */}
      <footer className="bg-[#0B0F14] border-t border-[#1F2937] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-[#F8FAFC] font-bold text-xl mb-4">
              The AI Restaurant Guy
            </div>
            <div className="text-[#94A3B8] text-sm mb-6">
              Systems by Operators, for Operators
            </div>
            <div className="flex justify-center gap-6 text-[#64748B] text-sm">
              <a href="#shop-systems" className="hover:text-[#9EF01A] transition-colors">
                Shop the Systems
              </a>
              <a href="#revenue-recovery-audit" className="hover:text-[#9EF01A] transition-colors">
                Free Revenue Audit
              </a>
            </div>
            <div className="mt-8 text-[#64748B] text-xs">
              © 2025 The AI Restaurant Guy • 60-Day Conversion Guarantee
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
