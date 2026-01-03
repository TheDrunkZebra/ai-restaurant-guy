import React from 'react';

/**
 * Modern Case Study Section
 * Clean, minimal, impressive
 */
const CaseStudy = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Minimal header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Real Results
          </h2>
          <p className="text-xl text-slate-400 font-light">
            From our own operations
          </p>
        </div>

        {/* Metrics - Clean, no boxes */}
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-light text-white mb-3">$72k</div>
            <div className="text-slate-400">Agency fees eliminated</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-light text-white mb-3">2</div>
            <div className="text-slate-400">Days on-site per month</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-light text-white mb-3">3%</div>
            <div className="text-slate-400">Prime cost reduction</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-light text-white mb-3">5</div>
            <div className="text-slate-400">Platforms automated</div>
          </div>
        </div>

        {/* Story - Clean typography */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-6 font-light">
              We deployed the Content Creation Engine to break free from expensive agency retainers. Results were immediate—we generated the volume of platform-perfect content needed for Instagram and Google My Business instantly.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed mb-6 font-light">
              The real breakthrough came when we cross-referenced success with the Financial Intelligence Engine. While sales were up, the system flagged a critical Prime Cost variance—a popular menu item had a hidden margin leak threatening to eliminate all new profit.
            </p>
            <p className="text-xl text-white leading-relaxed font-medium">
              We adjusted vendors and prices immediately, protecting the bottom line instead of reacting 90 days later. We weren't just marketing better—we were operating smarter.
            </p>
            <div className="mt-12 text-slate-400 text-lg">
              — Seamus O'Brien
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
