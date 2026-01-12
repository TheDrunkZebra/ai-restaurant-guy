import React from 'react';

/**
 * Professional Case Study Section
 * Clean metrics presentation and compelling story
 */
const CaseStudy = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-[#0B0F14] to-[#0E131B] border-t border-[#1F2937]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F8FAFC] mb-6 tracking-tight">
            Real <span className="text-[#9EF01A]">Results</span>
          </h2>
          <p className="text-xl text-[#94A3B8] font-light">
            From our own operations
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-24">
          <div className="bg-[#0E131B]/40 backdrop-blur-sm border border-[#1F2937]/50 rounded-2xl p-10 text-center hover:border-[#00E0FF]/30 transition-all duration-300">
            <div className="text-6xl font-bold text-[#00E0FF] mb-4 font-mono leading-none">72k</div>
            <div className="text-[#94A3B8] text-lg">Agency fees eliminated</div>
          </div>
          <div className="bg-[#0E131B]/40 backdrop-blur-sm border border-[#1F2937]/50 rounded-2xl p-10 text-center hover:border-[#00E0FF]/30 transition-all duration-300">
            <div className="text-6xl font-bold text-[#00E0FF] mb-4 font-mono leading-none">2</div>
            <div className="text-[#94A3B8] text-lg">Days on-site per month</div>
          </div>
          <div className="bg-[#0E131B]/40 backdrop-blur-sm border border-[#1F2937]/50 rounded-2xl p-10 text-center hover:border-[#9EF01A]/30 transition-all duration-300">
            <div className="text-6xl font-bold text-[#9EF01A] mb-4 font-mono leading-none">3%</div>
            <div className="text-[#94A3B8] text-lg">Food + labor reduction</div>
          </div>
          <div className="bg-[#0E131B]/40 backdrop-blur-sm border border-[#1F2937]/50 rounded-2xl p-10 text-center hover:border-[#00E0FF]/30 transition-all duration-300">
            <div className="text-6xl font-bold text-[#00E0FF] mb-4 font-mono leading-none">5</div>
            <div className="text-[#94A3B8] text-lg">Platforms automated</div>
          </div>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto bg-[#0E131B]/40 backdrop-blur-sm border border-[#1F2937]/50 rounded-2xl p-12 lg:p-16">
          <h3 className="text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-10 text-center">
            The <span className="text-[#9EF01A]">Lightbulb Moment</span>
          </h3>
          <div className="space-y-6 text-lg text-[#94A3B8] leading-relaxed">
            <p>
              We deployed the Content Creation Engine to break free from expensive agency retainers. Results were immediate—we generated the volume of platform-perfect content needed for Instagram and Google My Business instantly.
            </p>
            <p>
              The real breakthrough came when we cross-referenced success with the Financial Intelligence Engine. While sales were up, the system flagged a critical food + labor variance—a popular menu item had a hidden margin leak threatening to eliminate all new profit.
            </p>
            <p className="text-[#F8FAFC] font-semibold text-xl">
              We adjusted vendors and prices immediately, protecting the bottom line instead of reacting 90 days later. We weren't just marketing better—we were operating smarter.
            </p>
            <div className="pt-6 border-t border-[#1F2937]/50">
              <cite className="text-[#94A3B8] text-base not-italic">
                — Seamus O'Brien, Owner
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
