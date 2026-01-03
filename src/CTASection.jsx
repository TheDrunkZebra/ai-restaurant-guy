import React from 'react';

/**
 * CTA Section - Original design
 * Final call to action with portrait
 */
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0E131B] to-[#0B0F14]" id="audit">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{
              filter: "grayscale(100%) contrast(1.1) brightness(1.1)",
              boxShadow: "0 0 0 2px rgba(0,224,255,.25), 0 25px 50px -12px rgba(0,0,0,.8)"
            }}>
              <img
                src="/seamus-portrait.jpg"
                alt="Seamus O'Brien, ready to build your AI restaurant automation system"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/10 to-transparent pointer-events-none" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-6">
              Let's build the system your competitors wish they had.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#audit"
                className="text-lg px-8 py-4 bg-[#9EF01A] text-[#0B0F14] hover:bg-[#8ED60A] font-semibold rounded-2xl shadow-[0_0_0_2px_rgba(158,240,26,.25),0_8px_30px_-10px_rgba(158,240,26,.6)] hover:translate-y-[-1px] transition-all"
              >
                Get My AI Build Plan
              </a>
              <a
                href="#systems"
                className="text-lg px-8 py-4 border border-[#1F2937] text-[#F8FAFC] hover:bg-[#111827] rounded-2xl transition-colors"
              >
                See the Systems
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

