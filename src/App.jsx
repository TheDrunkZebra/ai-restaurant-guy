import React from 'react';
import HeroSection from './HeroSection';
import AgentRoster from './AgentRoster';
import CaseStudy from './CaseStudy';
import CTASection from './CTASection';

/**
 * Original Design - Recreated from v2 Next.js codebase
 * Dark theme with #0B0F14, #00E0FF, #9EF01A color scheme
 */
function App() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F8FAFC]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Navigation */}
      <nav className="border-b border-[#1F2937] bg-[#0E131B]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold">
                <span className="text-[#00E0FF]">AI</span>{" "}
                <span className="text-[#F8FAFC]">Restaurant Guy</span>
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#audit" className="px-4 py-2 bg-[#9EF01A] text-[#0B0F14] hover:bg-[#8ED60A] font-semibold rounded-lg text-sm transition-colors">
                Get a Free Savings Audit
              </a>
              <a href="#systems" className="px-4 py-2 border border-[#00E0FF] text-[#00E0FF] hover:bg-[#00E0FF] hover:text-[#0B0F14] font-semibold rounded-lg text-sm transition-colors">
                See the Systems
              </a>
            </div>
            <div className="md:hidden">
              <a href="#audit" className="px-3 py-2 bg-[#9EF01A] text-[#0B0F14] hover:bg-[#8ED60A] font-semibold rounded-lg text-xs transition-colors">
                Audit
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Agent Roster Section */}
      <AgentRoster />

      {/* Case Study Section */}
      <CaseStudy />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="py-12 border-t border-[#1F2937] bg-[#0B0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-[#94A3B8] text-sm">
            <p>© 2025 AI Restaurant Guy. All rights reserved.</p>
            <p className="mt-2">AI Workforce Solutions for Independent Restaurants</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
