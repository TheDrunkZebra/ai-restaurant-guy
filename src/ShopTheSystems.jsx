import React from 'react';

/**
 * Modern Product Showcase
 * Clean cards with minimal borders, better spacing
 */
const ShopTheSystems = () => {
  const products = [
    {
      id: 1,
      title: "Landing Page Builder",
      price: "497",
      description: "Professional restaurant landing pages in minutes. No developer needed.",
      features: ["Mobile-responsive", "SEO optimized", "Free hosting"]
    },
    {
      id: 2,
      title: "Content Creation Engine",
      price: "997",
      description: "Generate 30 days of platform-perfect content from a single menu upload.",
      features: ["Multi-platform", "Brand voice trained", "Viral hooks"]
    },
    {
      id: 3,
      title: "Financial Intelligence",
      price: "2997",
      description: "Real-time prime cost tracking and automated vendor invoice auditing.",
      features: ["Prime cost alerts", "Vendor audit", "Break-even analysis"]
    },
    {
      id: 4,
      title: "ShiftPilot",
      price: "97",
      description: "Eliminate decision fatigue with AI-powered task prioritization.",
      features: ["Role-based logic", "Time-blocking", "Auto-prioritization"]
    }
  ];

  return (
    <section id="systems" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Minimal header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Systems That Scale
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Battle-tested automation built in real restaurants
          </p>
        </div>
        
        {/* Clean product grid - No heavy borders */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/5 rounded-3xl p-10 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
            >
              {/* Price - Prominent but elegant */}
              <div className="mb-6">
                <span className="text-5xl font-light text-white">${product.price}</span>
                <span className="text-slate-400 ml-2 text-sm">one-time</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-4">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Features - Minimal list */}
              <ul className="space-y-2 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA - Clean button */}
              <a
                href={`#${product.id}`}
                className="inline-flex items-center text-white font-medium group-hover:text-emerald-400 transition-colors"
              >
                Learn More
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopTheSystems;
