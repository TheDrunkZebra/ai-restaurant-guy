import React from 'react';

/**
 * Professional Systems Showcase
 * Clean, modern design with excellent spacing and visual hierarchy
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
    <section id="systems" className="py-32 bg-[#0B0F14] border-t border-[#1F2937]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F8FAFC] mb-6 tracking-tight">
            Systems That <span className="text-[#00E0FF]">Scale</span>
          </h2>
          <p className="text-xl text-[#94A3B8] font-light leading-relaxed">
            Battle-tested automation built in real restaurants
          </p>
        </div>
        
        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#0E131B]/40 backdrop-blur-sm border border-[#1F2937]/50 rounded-2xl p-10 hover:border-[#00E0FF]/30 hover:bg-[#0E131B]/60 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-[#00E0FF] font-mono leading-none">{product.price}</span>
                  <span className="text-[#94A3B8] text-sm font-medium">one-time</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-[#94A3B8] mb-8 text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#F8FAFC]">
                    <span className="w-2 h-2 rounded-full bg-[#9EF01A] flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={product.buttonHref}
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-[#00E0FF] text-[#0B0F14] rounded-xl font-bold hover:bg-[#08C7E5] transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00E0FF]/30"
              >
                {product.buttonText}
              </a>
            </div>
          ))}
        </div>

        {/* Custom Automation CTA */}
        <div className="mt-24 bg-[#0E131B]/40 backdrop-blur-sm border border-[#1F2937]/50 rounded-2xl p-12 lg:p-16 text-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4">
            Need <span className="text-[#00E0FF]">Custom Automation</span>?
          </h3>
          <p className="text-lg text-[#94A3B8] mb-10 max-w-2xl mx-auto">
            White-glove installation and custom API integration for high-volume groups.
          </p>
          <a
            href="#audit"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#9EF01A] text-[#0B0F14] rounded-xl font-bold text-lg hover:bg-[#8ED60A] transition-all duration-200 hover:scale-[1.02] shadow-xl shadow-[#9EF01A]/20"
          >
            Book a Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopTheSystems;
