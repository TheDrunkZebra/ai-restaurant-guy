import React from 'react';

/**
 * Original Design Hero Section
 * Recreated with original color scheme: #0B0F14, #00E0FF, #9EF01A
 */
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E131B] via-transparent to-[#0B0F14]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Badge with original green */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-[#0E131B] border border-[#1F2937] backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#9EF01A] animate-pulse"></span>
              <span className="text-sm text-[#94A3B8] font-medium">Trusted by 500+ Restaurant Operators</span>
            </div>

            {/* Headline - Original style */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8FAFC] mb-8 leading-[1.1] tracking-tight">
              AI-Powered Systems
              <br />
              <span className="text-[#00E0FF]">
                Built for Operators
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-[#94A3B8] mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Replace expensive agencies and fractional CFOs with battle-tested automation. Recover hidden revenue. Eliminate busywork.
            </p>

            {/* Metrics - Original style */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mb-12 text-sm text-[#94A3B8]">
              <div>
                <span className="text-2xl font-bold text-[#00E0FF]">72k</span>
                <span className="ml-2">recovered Year 1</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#00E0FF]">80+</span>
                <span className="ml-2">hours back/month</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#9EF01A]">3%</span>
                <span className="ml-2">prime cost reduction</span>
              </div>
            </div>

            {/* CTAs - Original colors */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#systems"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#00E0FF] text-[#0B0F14] rounded-full font-bold hover:bg-[#08C7E5] transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#00E0FF]/20 animate-glow"
              >
                View Systems
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0E131B] border border-[#1F2937] text-[#F8FAFC] rounded-full font-medium hover:bg-[#1F2937] hover:border-[#00E0FF]/30 transition-all duration-200 backdrop-blur-sm"
              >
                Free Revenue Audit
              </a>
            </div>
          </div>

          {/* Right: Portrait - Original styling */}
          <div className="relative lg:pl-8">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 glass-card hover-lift">
              <img
                src="/seamus-portrait.jpg"
                alt="Seamus O'Brien"
                className="w-full h-full object-cover object-center"
                style={{
                  filter: 'grayscale(0.1) contrast(1.05) brightness(1.02)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/60 via-transparent to-transparent" />
            </div>
            {/* Glow effect - Original cyan */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00E0FF]/20 via-transparent to-[#9EF01A]/20 rounded-3xl blur-3xl -z-10 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
