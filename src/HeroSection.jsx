import React from 'react';

/**
 * Production-Ready Hero Section
 * Modern, conversion-optimized design inspired by Square, Stripe, Notion
 * Clear value proposition, strong CTAs, trust indicators
 */
const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0B0F14]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E131B] via-[#0B0F14] to-[#0B0F14] opacity-100"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full bg-[#0E131B]/80 border border-[#1F2937] backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#9EF01A] animate-pulse"></span>
              <span className="text-sm text-[#94A3B8] font-medium">Trusted by 500+ Restaurant Operators</span>
            </div>

            {/* Main Headline - Clear, Benefit-Focused */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F8FAFC] mb-6 leading-[1.1] tracking-tight">
              Replace Expensive Agencies
              <br />
              <span className="text-[#00E0FF]">
                With AI-Powered Systems
              </span>
            </h1>

            {/* Subheadline - Value Proposition */}
            <p className="text-xl sm:text-2xl text-[#94A3B8] mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Battle-tested automation that recovers hidden revenue, eliminates busywork, and scales with your operations. Built for operators, by operators.
            </p>

            {/* Social Proof Metrics - Quick Scannable */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8 mb-10">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#00E0FF] font-mono">72k</span>
                <span className="text-[#94A3B8] text-sm">recovered</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#00E0FF] font-mono">80+</span>
                <span className="text-[#94A3B8] text-sm">hours/month</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#9EF01A] font-mono">3%</span>
                <span className="text-[#94A3B8] text-sm">cost reduction</span>
              </div>
            </div>

            {/* Primary CTAs - Clear Hierarchy */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#audit"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#00E0FF] text-[#0B0F14] rounded-xl font-bold text-lg hover:bg-[#08C7E5] transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00E0FF]/30"
              >
                Get Free Revenue Audit
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#systems"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#1F2937] text-[#F8FAFC] rounded-xl font-semibold text-lg hover:bg-[#1F2937] hover:border-[#00E0FF]/40 transition-all duration-200"
              >
                View Systems
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-[#1F2937]/50">
              <p className="text-sm text-[#94A3B8] mb-4">No credit card required • 48-hour turnaround • Used by 500+ operators</p>
            </div>
          </div>

          {/* Right: Portrait - Clean, Professional */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden w-[280px] h-[350px] lg:w-[320px] lg:h-[400px] mx-auto lg:mx-0 shadow-2xl">
                <img
                  src="/seamus-portrait.jpg"
                  alt="Seamus O'Brien - Restaurant Operator & AI Systems Builder"
                  className="w-full h-full object-cover object-center"
                  style={{
                    filter: 'grayscale(0.1) contrast(1.05) brightness(1.02)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/40 via-transparent to-transparent" />
              </div>
              {/* Subtle glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00E0FF]/10 via-transparent to-[#9EF01A]/10 rounded-2xl blur-3xl -z-10 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
