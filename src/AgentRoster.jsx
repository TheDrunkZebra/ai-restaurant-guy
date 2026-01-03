import React from 'react';

/**
 * Agent Roster Section - Original design
 * Shows the three main AI agents
 */
const AgentRoster = () => {
  return (
    <section className="py-20 bg-[#0E131B]" id="systems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
            The Agent Roster
          </h2>
          <p className="text-xl text-[#94A3B8]">
            Your 24/7 Digital Workforce
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* The Auditor */}
          <div className="bg-[#111827] border border-[#1F2937] hover:border-[#00E0FF]/30 transition-colors rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[#00E0FF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="h-8 w-8 text-[#00E0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#F8FAFC] mb-3">
                  The Auditor
                </h3>
                <p className="text-[#94A3B8] leading-relaxed">
                  Monitors delivery and utility contracts 24/7. Negotiates lower rates automatically.{" "}
                  <strong className="text-[#00E0FF]">30% performance fee—we only get paid if you save.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* The Gatekeeper */}
          <div className="bg-[#111827] border border-[#1F2937] hover:border-[#00E0FF]/30 transition-colors rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[#00E0FF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="h-8 w-8 text-[#00E0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#F8FAFC] mb-3">
                  The Gatekeeper
                </h3>
                <p className="text-[#94A3B8] leading-relaxed">
                  Handles 24/7 guest sentiment. Responds to every Google, Yelp, and Reddit review in your brand voice.{" "}
                  <strong className="text-[#00E0FF]">Triage for 1-star reviews happens in seconds.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* The Ghostwriter */}
          <div className="bg-[#111827] border border-[#1F2937] hover:border-[#00E0FF]/30 transition-colors rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[#00E0FF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="h-8 w-8 text-[#00E0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#F8FAFC] mb-3">
                  The Ghostwriter
                </h3>
                <p className="text-[#94A3B8] leading-relaxed">
                  Produces weekly SEO-optimized blogs and Google Business updates.{" "}
                  <strong className="text-[#00E0FF]">Moves you off expensive platforms (BentoBox) to our high-performance stack.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentRoster;

