import React from 'react';

/**
 * Original Design Case Study Section
 * Clean metrics and story with original colors
 */
const CaseStudy = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-[#0B0F14] to-[#0E131B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header - Original style */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4 tracking-tight">
            Real <span className="text-[#9EF01A]">Results</span>
          </h2>
          <p className="text-xl text-[#94A3B8]">
            From our own operations
          </p>
        </div>

        {/* Metrics - Original glass cards */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="glass-card p-8 text-center hover-lift">
            <div className="text-5xl md:text-6xl font-bold text-[#00E0FF] mb-3 font-mono">72k</div>
            <div className="text-[#94A3B8]">Agency fees eliminated</div>
          </div>
          <div className="glass-card p-8 text-center hover-lift">
            <div className="text-5xl md:text-6xl font-bold text-[#00E0FF] mb-3 font-mono">2</div>
            <div className="text-[#94A3B8]">Days on-site per month</div>
          </div>
          <div className="glass-card p-8 text-center hover-lift">
            <div className="text-5xl md:text-6xl font-bold text-[#9EF01A] mb-3 font-mono">3%</div>
            <div className="text-[#94A3B8]">Prime cost reduction</div>
          </div>
          <div className="glass-card p-8 text-center hover-lift">
            <div className="text-5xl md:text-6xl font-bold text-[#00E0FF] mb-3 font-mono">5</div>
            <div className="text-[#94A3B8]">Platforms automated</div>
          </div>
        </div>

        {/* Story - Original typography */}
        <div className="max-w-4xl mx-auto glass-card p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-8 text-center">
            The <span className="text-[#9EF01A]">Lightbulb Moment</span>
          </h3>
          <div className="space-y-6 text-lg text-[#F8FAFC] leading-relaxed">
            <p className="text-[#94A3B8]">
              We deployed the Content Creation Engine to break free from expensive agency retainers. Results were immediate—we generated the volume of platform-perfect content needed for Instagram and Google My Business instantly.
            </p>
            <p className="text-[#94A3B8]">
              The real breakthrough came when we cross-referenced success with the Financial Intelligence Engine. While sales were up, the system flagged a critical Prime Cost variance—a popular menu item had a hidden margin leak threatening to eliminate all new profit.
            </p>
            <p className="text-[#F8FAFC] font-bold">
              We adjusted vendors and prices immediately, protecting the bottom line instead of reacting 90 days later. We weren't just marketing better—we were operating smarter.
            </p>
            <cite className="block text-right text-[#94A3B8] mt-8 text-base">
              — Seamus O'Brien, Owner
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
