import React from 'react';

/**
 * Case Study Section - Original design
 * Salty Zebra case study with metrics
 */
const CaseStudy = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0B0F14] via-[#0E131B] to-[#0B0F14] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF]/5 via-transparent to-[#9EF01A]/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#00E0FF]/10 border border-[#00E0FF]/30 rounded-full mb-4">
            <span className="text-sm font-semibold text-[#00E0FF]">PROVEN IN THE TRENCHES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            The Salty Zebra Case Study
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            We built these agents to save our own restaurants first. Now, we're deploying them for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8" style={{
              filter: "grayscale(100%) contrast(1.1) brightness(1.1)",
              boxShadow: "0 0 0 2px rgba(0,224,255,.25), 0 25px 50px -12px rgba(0,0,0,.8)"
            }}>
              <img
                src="/seamus-portrait.jpg"
                alt="Seamus O'Brien, Founder of AI Restaurant Guy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/10 to-transparent pointer-events-none" />
            </div>
            
            <div className="bg-[#0E131B] border border-[#1F2937] rounded-2xl p-8">
              <blockquote className="text-xl text-[#F8FAFC] mb-6 italic leading-relaxed">
                "I was constantly working or thinking about work. Missing my kids' events and quality time with my wife, while paying $10,000 a month in marketing that barely worked. Then I discovered the power of AI agents."
              </blockquote>
              <cite className="text-[#94A3B8]">
                — Seamus O'Brien, The AI Restaurant Guy
              </cite>
            </div>
          </div>

          <div>
            <div className="bg-[#0E131B] border-2 border-[#00E0FF]/20 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#00E0FF]/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🦓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F8FAFC]">Salty Zebra Bistro</h3>
                  <p className="text-sm text-[#94A3B8]">Independent Restaurant • Owner-Operator</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#0E131B] border-2 border-[#00E0FF]/30 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-[#00E0FF] mb-2 font-mono">
                  5000/mo
                </div>
                <div className="text-[#F8FAFC] font-medium mb-1">
                  Saved on Delivery Fees
                </div>
                <div className="text-sm text-[#94A3B8]">
                  via AI Negotiation
                </div>
              </div>

              <div className="bg-[#0E131B] border-2 border-[#00E0FF]/30 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-[#00E0FF] mb-2 font-mono">
                  2500/yr
                </div>
                <div className="text-[#F8FAFC] font-medium mb-1">
                  Saved on Utility/Gas
                </div>
                <div className="text-sm text-[#94A3B8]">
                  Contracts
                </div>
              </div>

              <div className="bg-[#0E131B] border-2 border-[#9EF01A]/30 rounded-2xl p-6 text-center md:col-span-2">
                <div className="text-4xl font-bold text-[#9EF01A] mb-2 font-mono">
                  1500 hours/yr
                </div>
                <div className="text-[#F8FAFC] font-medium mb-1">
                  Reclaimed from Administrative "Busywork"
                </div>
                <div className="text-sm text-[#94A3B8]">
                  Time back to focus on what matters
                </div>
              </div>
            </div>

            <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-[#9EF01A] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">
                    The Transformation
                  </h3>
                  <p className="text-[#94A3B8]">
                    These hard stats represent real savings and time recovery. The AI agents work 24/7, 
                    negotiating better rates, managing reviews, and handling content—all while you focus 
                    on running your restaurant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#systems"
            className="text-lg px-8 py-4 bg-[#00E0FF] text-[#0B0F14] hover:bg-[#08C7E5] font-semibold rounded-2xl transition-colors inline-block"
          >
            See the Full Case Study →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
