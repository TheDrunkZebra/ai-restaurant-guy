import React from 'react';

/**
 * Hero Section - Clear and Impressive for Restaurant Owners
 * Features portrait image and clear value proposition
 */
const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#0B0F14] to-[#0E131B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-[#9EF01A] text-[#0B0F14] px-4 py-2 rounded-full text-sm font-bold">
                60-Day Conversion Guarantee
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] mb-6 leading-tight">
              Replace Your $6,000 Agency and Your $150/hr CFO with One System.
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-[#94A3B8] mb-8 leading-relaxed">
              Stop paying third parties to dilute your brand or miss margin leaks. Deploy proprietary, battle-tested AI Workflows that drive sales volume and defend your profit margin simultaneously.
            </p>

            {/* Key Metrics - Scannable for Restaurant Owners */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-[#0E131B] border border-[#1F2937] rounded-lg p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#00E0FF] mb-1">$72k</div>
                <div className="text-xs text-[#94A3B8]">Recovered Year 1</div>
              </div>
              <div className="bg-[#0E131B] border border-[#1F2937] rounded-lg p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#00E0FF] mb-1">80+</div>
                <div className="text-xs text-[#94A3B8]">Hours Back/Month</div>
              </div>
              <div className="bg-[#0E131B] border border-[#1F2937] rounded-lg p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#00E0FF] mb-1">3%</div>
                <div className="text-xs text-[#94A3B8]">Prime Cost Drop</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#shop-systems"
                className="bg-[#00E0FF] text-[#0B0F14] hover:bg-[#08C7E5] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 shadow-lg"
              >
                Shop the Systems →
              </a>
              <a
                href="#revenue-recovery-audit"
                className="bg-[#9EF01A] text-[#0B0F14] hover:bg-[#8ED60A] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 shadow-lg"
              >
                Free Revenue Audit
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <span className="text-[#00E0FF]">✓</span>
                <span>Built in Salty Zebra Bistro</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00E0FF]">✓</span>
                <span>$100k+ labor saved</span>
              </div>
            </div>
          </div>

          {/* Right Side: Portrait Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/seamus-portrait.jpg"
                alt="Seamus O'Brien, The AI Restaurant Guy - Restaurant owner and AI automation expert"
                className="w-full h-auto object-cover"
                style={{
                  filter: 'grayscale(20%) contrast(1.1) brightness(1.05)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/5 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
