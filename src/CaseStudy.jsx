import React from 'react';

/**
 * Case Study Section - Clear ROI for Restaurant Owners
 */
const CaseStudy = () => {
  return (
    <section className="py-20 bg-[#0E131B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
            Built in Real Restaurants
          </h2>
          <p className="text-xl text-[#94A3B8]">
            Owner-operator case study with real metrics
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#0B0F14] border border-[#1F2937] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#00E0FF] mb-2 font-mono">$72,000</div>
            <div className="text-[#F8FAFC] font-medium mb-1">Annual Agency Fees Eliminated</div>
            <div className="text-sm text-[#94A3B8]">Replaced expensive retainers with the Content Engine.</div>
          </div>
          <div className="bg-[#0B0F14] border border-[#1F2937] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#00E0FF] mb-2 font-mono">2 Days/Mo</div>
            <div className="text-[#F8FAFC] font-medium mb-1">Owner On-Site Time</div>
            <div className="text-sm text-[#94A3B8]">I only visit for bi-weekly mgmt meetings. The AI runs the rest.</div>
          </div>
          <div className="bg-[#0B0F14] border border-[#1F2937] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#00E0FF] mb-2 font-mono">3% Drop</div>
            <div className="text-[#F8FAFC] font-medium mb-1">In Prime Costs</div>
            <div className="text-sm text-[#94A3B8]">Caught vendor leaks and optimized labor instantly.</div>
          </div>
          <div className="bg-[#0B0F14] border border-[#1F2937] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#00E0FF] mb-2 font-mono">5 Platforms</div>
            <div className="text-[#F8FAFC] font-medium mb-1">Dominated Daily</div>
            <div className="text-sm text-[#94A3B8]">TikTok, IG, GMB, Email, and Web updated without extra staff.</div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-[#0B0F14] border border-[#1F2937] rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-6 text-center">
              The Lightbulb Moment
            </h3>
            <div className="space-y-6 text-lg text-[#94A3B8] leading-relaxed">
              <p>
                We initially deployed the Content Creation Engine to break free from the expensive, generic content provided by the $6,000 agency trap. The results were immediate: we instantly generated the 'impossible' volume of platform-perfect content needed for Instagram and Google My Business. Sales reports confirmed the strategy was driving new traffic and revenue.
              </p>
              <p>
                But the real lightbulb moment came when I cross-referenced that success with The Financial Intelligence Engine. While sales were up, the system flagged a critical Prime Cost Variance. That new popular menu item, marketed heavily by the AI, had a hidden margin leak—similar to the unnoticed $0.50 vendor increase on cream cheese—threatening to eliminate all new profit.
              </p>
              <p className="text-[#F8FAFC] font-semibold">
                Because the system constantly tracks spending against targets, we adjusted vendors and prices immediately, protecting the bottom line instead of reacting 90 days later. I realized I wasn't just marketing better; I was operating smarter.
              </p>
              <cite className="block text-right text-[#94A3B8] mt-8">— Seamus O'Brien, Owner</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;

