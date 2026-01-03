import React from 'react';

/**
 * Original Design Product Showcase
 * Glassmorphism cards with original color scheme
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
    <section id="systems" className="py-32 bg-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header - Original style */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4 tracking-tight">
            Systems That <span className="text-[#00E0FF]">Scale</span>
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Battle-tested automation built in real restaurants
          </p>
        </div>
        
        {/* Product grid - Original glassmorphism */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="glass-card p-10 hover-lift group"
            >
              {/* Price - Original cyan */}
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#00E0FF]">{product.price}</span>
                <span className="text-[#94A3B8] ml-2 text-sm">one-time</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#F8FAFC] mb-4">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-[#94A3B8] mb-8 text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Features - Original green checkmarks */}
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#F8FAFC]">
                    <span className="w-2 h-2 rounded-full bg-[#9EF01A] flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA - Original cyan button */}
              <a
                href={product.buttonHref}
                className="inline-flex items-center justify-center w-full px-8 py-3 bg-[#00E0FF] text-[#0B0F14] rounded-lg font-bold hover:bg-[#08C7E5] transition-all duration-200 hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-[#00E0FF]/20"
              >
                {product.buttonText}
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Custom Automation CTA - Original style */}
        <div className="mt-16 glass-card p-12 text-center">
          <h3 className="text-3xl font-bold text-[#F8FAFC] mb-4">
            Need <span className="text-[#00E0FF]">Custom Automation</span>?
          </h3>
          <p className="text-lg text-[#94A3B8] mb-8">
            White-glove installation and custom API integration for high-volume groups.
          </p>
          <a
            href="#audit"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#9EF01A] text-[#0B0F14] rounded-full font-bold hover:bg-[#8ED60A] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[#9EF01A]/20"
          >
            Book a Strategy Call
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopTheSystems;
