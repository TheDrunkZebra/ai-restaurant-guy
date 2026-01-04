import React from 'react';

/**
 * AI Workforce Section
 * Selling the "AI Integration Sprint"
 * Focus on ShiftPilot dashboard and "Restaurant Manager's Brain"
 * High-Ticket CTA: "Book an Installation Sprint - 5000 Setup"
 */
const AIWorkforceSection = () => {
  return (
    <section className="py-20 bg-[#1A1F2C] border-t border-[#27272a]" id="ai-workforce">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[#9EF01A] text-[#0B0F14] px-4 py-2 rounded-full text-sm font-semibold font-mono">
              High-Ticket Installation
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-6">
            The AI Workforce
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Eliminate decision fatigue with autonomous restaurant intelligence.
            <br />
            <span className="text-[#E7C9A9] font-mono">The Restaurant Manager's Brain. Deployed in 48 hours.</span>
          </p>
        </div>

        {/* ShiftPilot Dashboard Mockup */}
        <div className="mb-16">
          <div className="bg-[#0B0F14] border border-[#27272a] rounded-lg p-8">
            {/* Dashboard Header */}
            <div className="border-b border-[#27272a] pb-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#F8FAFC] font-mono">
                    ShiftPilot Dashboard
                  </h3>
                  <p className="text-[#94A3B8] font-mono text-sm mt-1">
                    Restaurant Manager's Brain • Live Decision Engine
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#9EF01A] animate-pulse" />
                  <span className="text-[#9EF01A] font-mono text-sm">ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Decision Panel */}
              <div className="bg-[#1A1F2C] border border-[#27272a] rounded-lg p-6">
                <div className="text-[#E7C9A9] font-mono text-sm mb-4">
                  {'>'} Active Decisions
                </div>
                <div className="space-y-3">
                  <div className="bg-[#0B0F14] border border-[#27272a] rounded p-3">
                    <div className="text-[#9EF01A] font-mono text-xs mb-1">
                      LABOR OPTIMIZATION
                    </div>
                    <div className="text-[#F8FAFC] text-sm">
                      Reduce tonight's staff by 1 FOH
                    </div>
                    <div className="text-[#64748B] font-mono text-xs mt-2">
                      Confidence: 94% • Savings: 240
                    </div>
                  </div>
                  <div className="bg-[#0B0F14] border border-[#27272a] rounded p-3">
                    <div className="text-[#9EF01A] font-mono text-xs mb-1">
                      INVENTORY ALERT
                    </div>
                    <div className="text-[#F8FAFC] text-sm">
                      Order duck breast (low stock)
                    </div>
                    <div className="text-[#64748B] font-mono text-xs mt-2">
                      Auto-ordered • ETA: 24hr
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics Panel */}
              <div className="bg-[#1A1F2C] border border-[#27272a] rounded-lg p-6">
                <div className="text-[#E7C9A9] font-mono text-sm mb-4">
                  {'>'} Real-Time Metrics
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-[#64748B] font-mono text-xs mb-1">Prime Cost %</div>
                    <div className="text-3xl font-bold text-[#9EF01A] font-mono">62.4</div>
                  </div>
                  <div>
                    <div className="text-[#64748B] font-mono text-xs mb-1">Labor %</div>
                    <div className="text-3xl font-bold text-[#F8FAFC] font-mono">28.1</div>
                  </div>
                  <div>
                    <div className="text-[#64748B] font-mono text-xs mb-1">Food Cost %</div>
                    <div className="text-3xl font-bold text-[#F8FAFC] font-mono">34.3</div>
                  </div>
                </div>
              </div>

              {/* Actions Panel */}
              <div className="bg-[#1A1F2C] border border-[#27272a] rounded-lg p-6">
                <div className="text-[#E7C9A9] font-mono text-sm mb-4">
                  {'>'} Pending Actions
                </div>
                <div className="space-y-3">
                  <div className="bg-[#0B0F14] border border-[#27272a] rounded p-3">
                    <div className="text-[#F8FAFC] text-sm mb-2">
                      Review vendor price analysis
                    </div>
                    <div className="text-[#64748B] font-mono text-xs">
                      Generated 2hr ago
                    </div>
                  </div>
                  <div className="bg-[#0B0F14] border border-[#27272a] rounded p-3">
                    <div className="text-[#F8FAFC] text-sm mb-2">
                      Approve menu change recommendation
                    </div>
                    <div className="text-[#64748B] font-mono text-xs">
                      AOV impact: +12%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#0B0F14] border border-[#27272a] rounded-lg p-6">
            <div className="text-4xl font-bold text-[#9EF01A] mb-3 font-mono">40hr</div>
            <div className="text-[#F8FAFC] font-bold mb-2">Hours Saved Per Week</div>
            <div className="text-[#94A3B8] text-sm font-mono">
              Autonomous decision-making eliminates manual analysis
            </div>
          </div>
          <div className="bg-[#0B0F14] border border-[#27272a] rounded-lg p-6">
            <div className="text-4xl font-bold text-[#9EF01A] mb-3 font-mono">94%</div>
            <div className="text-[#F8FAFC] font-bold mb-2">Decision Accuracy</div>
            <div className="text-[#94A3B8] text-sm font-mono">
              Data-driven recommendations reduce human error
            </div>
          </div>
          <div className="bg-[#0B0F14] border border-[#27272a] rounded-lg p-6">
            <div className="text-4xl font-bold text-[#9EF01A] mb-3 font-mono">48hr</div>
            <div className="text-[#F8FAFC] font-bold mb-2">Installation Time</div>
            <div className="text-[#94A3B8] text-sm font-mono">
              Full system deployment in two days
            </div>
          </div>
        </div>

        {/* High-Ticket CTA */}
        <div className="bg-gradient-to-r from-[#1A1F2C] to-[#0B0F14] border-2 border-[#9EF01A] rounded-lg p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
            Book an Installation Sprint
          </h3>
          <div className="text-6xl font-bold text-[#9EF01A] mb-6 font-mono">
            5000
          </div>
          <div className="text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            <p className="text-lg mb-4">
              Full AI workforce deployment. 48-hour installation. Zero decision fatigue.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left font-mono text-sm">
              <div>✓ ShiftPilot Dashboard Setup</div>
              <div>✓ Manager Agent Configuration</div>
              <div>✓ Price Analysis Automation</div>
              <div>✓ Menu Intelligence Integration</div>
              <div>✓ Real-Time Decision Engine</div>
              <div>✓ 60-Day Performance Guarantee</div>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-block bg-[#9EF01A] text-[#0B0F14] font-bold text-xl px-12 py-5 rounded-lg hover:bg-[#8ED60A] transition-all duration-200 shadow-lg shadow-[#9EF01A]/20 hover:shadow-[#9EF01A]/40"
          >
            Book Installation Sprint
          </a>
          <div className="mt-6 text-[#64748B] font-mono text-sm">
            Setup fee: 5000 • Monthly: 1500 • 60-Day Guarantee
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWorkforceSection;


