import React from 'react';

/**
 * Modern Hero Section - Premium AI Consultancy Aesthetic
 * Clean, minimal, sophisticated design
 */
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
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
          <div className="text-center lg:text-left">
            {/* Minimal badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm text-slate-400 font-medium">Trusted by 500+ Restaurant Operators</span>
            </div>

            {/* Headline - Clean and powerful */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-[1.1] tracking-tight">
              AI-Powered Systems
              <br />
              <span className="font-semibold bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent">
                Built for Operators
              </span>
            </h1>

            {/* Subheadline - Concise and clear */}
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Replace expensive agencies and fractional CFOs with battle-tested automation. Recover hidden revenue. Eliminate busywork.
            </p>

            {/* Simple metrics - No boxes */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mb-12 text-sm text-slate-500">
              <div>
                <span className="text-2xl font-semibold text-white">$72k</span>
                <span className="ml-2">recovered Year 1</span>
              </div>
              <div>
                <span className="text-2xl font-semibold text-white">80+</span>
                <span className="ml-2">hours back/month</span>
              </div>
              <div>
                <span className="text-2xl font-semibold text-white">3%</span>
                <span className="ml-2">prime cost reduction</span>
              </div>
            </div>

            {/* Clean CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#systems"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-slate-950 rounded-full font-medium hover:bg-slate-100 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/10"
              >
                View Systems
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                Free Revenue Audit
              </a>
            </div>
          </div>

          {/* Right: Portrait - Clean and elegant */}
          <div className="relative lg:pl-8">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src="/seamus-portrait.jpg"
                alt="Seamus O'Brien"
                className="w-full h-full object-cover object-center"
                style={{
                  filter: 'grayscale(0.2) contrast(1.1) brightness(1.05)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
            {/* Subtle glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-transparent to-blue-500/20 rounded-3xl blur-3xl -z-10 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
