import React from 'react';
import HeroSection from './HeroSection';
import GrandSlamForm from './GrandSlamForm';
import InsightsDashboard from './InsightsDashboard';
import AIWorkforceSection from './AIWorkforceSection';
import ManagerAgentDashboard from './ManagerAgentDashboard';

/**
 * The AI Restaurant Guy Landing Page
 * Modular, high-conversion "Dark Mode" interface
 * Sells Systems, not Services
 * 
 * Brand: "Wildly Refined. Zero Pretense."
 * Architecture: Chicago Culinary Discipline × Florida Terroir
 */
function App() {
  return (
    <div className="min-h-screen bg-[#0B0F14]">
      {/* Section 1: Executive Hero */}
      <HeroSection />

      {/* Section 2: The "Lazy Tax" Terminal */}
      <GrandSlamForm />

      {/* Section 3: Market Intelligence Suite */}
      <InsightsDashboard />

      {/* Section 4: The AI Workforce */}
      <AIWorkforceSection />

      {/* Section 5: Infrastructure */}
      <ManagerAgentDashboard />

      {/* Footer */}
      <footer className="bg-[#0B0F14] border-t border-[#27272a] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-[#F8FAFC] font-bold text-xl mb-4">
              Wildly Refined. Zero Pretense.
            </div>
            <div className="text-[#94A3B8] font-mono text-sm mb-6">
              The AI Restaurant Guy • Systems by Operators, for Operators
            </div>
            <div className="flex justify-center gap-6 text-[#64748B] font-mono text-xs">
              <a href="#lazy-tax-terminal" className="hover:text-[#9EF01A] transition-colors">
                Revenue Recovery
              </a>
              <a href="#market-intelligence" className="hover:text-[#9EF01A] transition-colors">
                Market Intelligence
              </a>
              <a href="#ai-workforce" className="hover:text-[#9EF01A] transition-colors">
                AI Workforce
              </a>
              <a href="#infrastructure" className="hover:text-[#9EF01A] transition-colors">
                Infrastructure
              </a>
            </div>
            <div className="mt-8 text-[#64748B] font-mono text-xs">
              © 2025 The AI Restaurant Guy • 60-Day Conversion Guarantee
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
