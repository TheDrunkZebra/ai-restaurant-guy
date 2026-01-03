import React from 'react';

/**
 * Executive Hero Section
 * Split-screen design: Left copy, Right video background
 * Brand: "Wildly Refined. Zero Pretense."
 */
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0B0F14] overflow-hidden">
      {/* Video Background Container - Right Side */}
      <div className="absolute inset-0 lg:left-1/2 lg:right-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14] via-[#0B0F14]/80 to-transparent lg:from-transparent lg:via-[#0B0F14]/60 lg:to-[#0B0F14]" />
        {/* Video Background - Chef Michael Luth's dry-aging process */}
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            {/* Placeholder - Replace with actual video URL */}
            <source src="/videos/dry-aging-duck.mp4" type="video/mp4" />
            {/* Fallback gradient if video doesn't load */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] to-[#0B0F14]" />
          </video>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="lg:max-w-2xl">
          {/* Brand Tagline */}
          <div className="mb-6">
            <span className="inline-block text-[#E7C9A9] font-mono text-sm tracking-wider uppercase mb-4">
              Chicago Culinary Discipline × Florida Terroir
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8FAFC] leading-tight mb-6">
            Wildly Refined.
            <br />
            <span className="text-[#E7C9A9]">Zero Pretense.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-[#94A3B8] mb-8 leading-relaxed">
            Restaurant intelligence systems built by operators, for operators.
            <br />
            <span className="text-[#E7C9A9]">No agency fluff. Just results.</span>
          </p>

          {/* Key Metrics - Scannable ROI */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#1A1F2C]/50 backdrop-blur-sm border border-[#27272a] rounded-lg p-4">
              <div className="text-3xl font-bold text-[#9EF01A] mb-1">72k</div>
              <div className="text-sm text-[#94A3B8] font-mono">Recovered Year 1</div>
            </div>
            <div className="bg-[#1A1F2C]/50 backdrop-blur-sm border border-[#27272a] rounded-lg p-4">
              <div className="text-3xl font-bold text-[#9EF01A] mb-1">500+</div>
              <div className="text-sm text-[#94A3B8] font-mono">Restaurants Served</div>
            </div>
            <div className="bg-[#1A1F2C]/50 backdrop-blur-sm border border-[#27272a] rounded-lg p-4 col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-[#9EF01A] mb-1">24hr</div>
              <div className="text-sm text-[#94A3B8] font-mono">Analysis Turnaround</div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#lazy-tax-terminal"
            className="inline-block bg-[#9EF01A] text-[#0B0F14] font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#8ED60A] transition-all duration-200 shadow-lg shadow-[#9EF01A]/20 hover:shadow-[#9EF01A]/40"
          >
            Get Your Free Revenue Recovery Audit
          </a>

          {/* Guarantee Badge */}
          <div className="mt-6">
            <span className="inline-flex items-center text-sm text-[#94A3B8]">
              <span className="w-2 h-2 bg-[#9EF01A] rounded-full mr-2" />
              60-Day Conversion Guarantee • No Commitment Required
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-[#E7C9A9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
