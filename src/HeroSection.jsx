import React from 'react';

/**
 * Professional Hero Section
 * Modeled after Stripe, Linear, Vercel - Clean, modern, visually sophisticated
 */
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0F14]">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E131B] via-[#0B0F14] to-[#0B0F14]"></div>
      
      {/* Very subtle grid pattern for texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E131B]/60 backdrop-blur-sm border border-[#1F2937]/50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9EF01A] animate-pulse"></span>
              <span className="text-sm text-[#94A3B8] font-medium">Trusted by 500+ Restaurant Operators</span>
            </div>

            {/* Main Headline - Bold, Oversized */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#F8FAFC] leading-[1.05] tracking-tight">
                Replace Expensive
                <br />
                <span className="text-[#00E0FF]">Agencies</span>
                <br />
                <span className="text-[#F8FAFC]">With AI Systems</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-[#94A3B8] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Battle-tested automation that recovers hidden revenue, eliminates busywork, and scales with your operations. Built for operators, by operators.
            </p>

            {/* Metrics - Clean, Scannable */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-[#00E0FF] font-mono leading-none">72k</span>
                <span className="text-sm text-[#94A3B8] mt-1">recovered</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-[#00E0FF] font-mono leading-none">80+</span>
                <span className="text-sm text-[#94A3B8] mt-1">hours/month</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-[#9EF01A] font-mono leading-none">3%</span>
                <span className="text-sm text-[#94A3B8] mt-1">cost reduction</span>
              </div>
            </div>

            {/* CTAs - Clean, Professional */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00E0FF] text-[#0B0F14] rounded-xl font-bold text-lg hover:bg-[#08C7E5] transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00E0FF]/30"
              >
                Get Free Revenue Audit
              </a>
              <a
                href="#systems"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#1F2937] text-[#F8FAFC] rounded-xl font-semibold text-lg hover:bg-[#1F2937]/50 hover:border-[#00E0FF]/40 transition-all duration-200"
              >
                View Systems
              </a>
            </div>

            {/* Trust Indicators - Subtle */}
            <div className="pt-6 border-t border-[#1F2937]/30">
              <p className="text-sm text-[#94A3B8]">
                No credit card required • 48-hour turnaround • Used by 500+ operators
              </p>
            </div>
          </div>

          {/* Right: Portrait - Professional */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden w-[300px] h-[375px] lg:w-[360px] lg:h-[450px] shadow-2xl">
                <img
                  src="/seamus-portrait.jpg"
                  alt="Seamus O'Brien - Restaurant Operator & AI Systems Builder"
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/30 via-transparent to-transparent" />
              </div>
              {/* Subtle glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00E0FF]/5 via-transparent to-[#9EF01A]/5 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
