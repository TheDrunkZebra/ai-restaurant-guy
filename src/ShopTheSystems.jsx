import React from 'react';

/**
 * Production-Ready Systems Showcase
 * Clean grid layout, clear pricing, strong CTAs
 */
const ShopTheSystems = () => {
  const products = [
    {
      id: 1,
      title: "Landing Page Builder",
      price: "497",
      description: "Professional restaurant landing pages in minutes. No developer needed.",
      features: ["Mobile-responsive", "SEO optimized", "Free hosting"],
      buttonHref: "#audit",
      buttonText: "Get Started"
    },
    {
      id: 2,
      title: "Content Creation Engine",
      price: "997",
      description: "Generate 30 days of platform-perfect content from a single menu upload.",
      features: ["Multi-platform", "Brand voice trained", "Viral hooks"],
      buttonHref: "#audit",
      buttonText: "Get Started"
    },
    {
      id: 3,
      title: "Financial Intelligence",
      price: "2997",
      description: "Real-time prime cost tracking and automated vendor invoice auditing.",
      features: ["Prime cost alerts", "Vendor audit", "Break-even analysis"],
      buttonHref: "#audit",
      buttonText: "Get Started"
    },
    {
      id: 4,
      title: "ShiftPilot",
      price: "97",
      description: "Eliminate decision fatigue with AI-powered task prioritization.",
      features: ["Role-based logic", "Time-blocking", "Auto-prioritization"],
      buttonHref: "#audit",
      buttonText: "Get Started"
    }
  ];

  return (
    <section id="systems" className="py-24 lg:py-32 bg-[#0B0F14] border-t border-[#1F2937]/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8FAFC] mb-4 tracking-tight">
            Systems That <span className="text-[#00E0FF]">Scale</span>
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto font-light">
            Battle-tested automation built in real restaurants
          </p>
        </div>
        
        {/* Product Grid - Clean Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#0E131B]/60 backdrop-blur-sm border border-[#1F2937] rounded-2xl p-8 lg:p-10 hover:border-[#00E0FF]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#00E0FF]/10 hover:-translate-y-1"
            >
              {/* Price - Prominent */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-[#00E0FF] font-mono">{product.price}</span>
                  <span className="text-[#94A3B8] text-sm font-medium">one-time</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-[#F8FAFC] mb-4">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-[#94A3B8] mb-8 text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#F8FAFC]">
                    <span className="w-2 h-2 rounded-full bg-[#9EF01A] flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={product.buttonHref}
                className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-[#00E0FF] text-[#0B0F14] rounded-xl font-bold hover:bg-[#08C7E5] transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#00E0FF]/30 group-hover:shadow-xl"
              >
                {product.buttonText}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Custom Automation CTA */}
        <div className="mt-16 lg:mt-20 bg-[#0E131B]/60 backdrop-blur-sm border border-[#1F2937] rounded-2xl p-10 lg:p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#F8FAFC] mb-4">
            Need <span className="text-[#00E0FF]">Custom Automation</span>?
          </h3>
          <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            White-glove installation and custom API integration for high-volume groups.
          </p>
          <a
            href="#audit"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#9EF01A] text-[#0B0F14] rounded-xl font-bold text-lg hover:bg-[#8ED60A] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[#9EF01A]/20"
          >
            Book a Strategy Call
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopTheSystems;
