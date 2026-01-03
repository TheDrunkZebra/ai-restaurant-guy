import React from 'react';

/**
 * Shop the Systems Component
 * Updated per ZEBRA_KNOWLEDGE_BASE.md frameworks:
 * - Hormozi: Dream Outcome descriptions, Guarantee mentions
 * - Maguire: No vague slop, Authentic voice, Specific numbers
 */

const ShopTheSystems = () => {
  const products = [
    {
      id: 1,
      image: "/landing-page-builder-screenshot.png",
      title: "The Restaurant Landing Page Builder",
      price: "$497",
      period: "One-time",
      // FIXED: Dream Outcome, not service features
      description: "Stop losing reservations to competitors with better websites. Get a production-ready landing page in 5 minutes—no developer, no $2,000-$5,000 fee. Deploy today, start driving reservations tomorrow.",
      features: [
        "Mobile-Responsive & SEO Ready",
        "No Coding Required",
        "Host for free on Vercel"
      ],
      buttonText: "Buy Now - $497",
      buttonHref: "#Landing-Page-Stripe-Link"
    },
    {
      id: 2,
      image: "/content-creation-engine-screenshot.png",
      title: "The Content Creation Engine",
      price: "$997",
      period: "One-time",
      // FIXED: Dream Outcome, specific numbers, no vague "battle-tested"
      description: "Eliminate the $6,000/month agency retainer. Upload your menu PDF or tonight's special photo, get 30 days of platform-perfect content for Instagram, TikTok, and Google My Business in seconds. Recovered $72k in my first year.",
      features: [
        "Multimodal (Text, Image, Video)",
        "Saves your unique Brand Voice",
        "Auto-generates Viral Hooks"
      ],
      buttonText: "Buy Now - $997",
      buttonHref: "#Content-Creation-Stripe-Link"
    },
    {
      id: 5,
      image: "/content-creation-engine-screenshot.png",
      title: "Agentic Content Loops",
      price: "$500",
      period: "Monthly",
      // FIXED: Dream Outcome, specific results
      description: "Turn one Mother's Day brunch into a complete campaign: blog post, email sequence, 10 ad variations, landing page. Fast iteration means you're always optimizing. No more one-off content—this learns what converts.",
      features: [
        "Multi-Touch Campaign Generation",
        "Stochastic A/B Testing Built-In",
        "Fast Iteration Cycles (24-48hr)",
        "Blog → Email → Ad → Landing Page Pipeline"
      ],
      buttonText: "Start Content Loop - $500/mo",
      buttonHref: "#Content-Loop-Stripe-Link"
    },
    {
      id: 6,
      image: "/content-creation-engine-screenshot.png",
      title: "High-Frequency Google Ads",
      price: "$1,500",
      period: "Monthly",
      // FIXED: Dream Outcome, specific process
      description: "Stop guessing which ads work. We generate 10 ad variations per campaign, build matching landing pages, track performance in real-time. Turn a Mother's Day brunch into a complete ad campaign in minutes, then iterate based on data.",
      features: [
        "10 Ad Variations Per Campaign",
        "Landing Page Wireframes Included",
        "Real-Time Performance Tracking",
        "60-Day Conversion Guarantee"
      ],
      buttonText: "Start Ads Engine - $1,500/mo",
      buttonHref: "#Google-Ads-Stripe-Link"
    },
    {
      id: 3,
      image: "/financial-intelligence-engine-screenshot.png",
      title: "The Financial Intelligence Engine",
      price: "$2,997",
      period: "One-time",
      // FIXED: Dream Outcome, specific numbers, no vague language
      description: "Stop margin leaks before they kill your profit. Recovered $50k+ in hidden vendor overcharges. Real-time Prime Cost tracking, predictive labor alerts, automated invoice auditing. Replaces $5,000/month fractional CFO.",
      features: [
        "Real-time Prime Cost Tracking",
        "Predictive Labor Control",
        "Automated Vendor Invoice Auditing",
        "Replaces $310/mo Margin Edge subscription"
      ],
      buttonText: "Buy Financial Engine - $2,997",
      buttonHref: "#Financial-Engine-Stripe-Link"
    },
    {
      id: 4,
      image: "/images/card-shiftpilot.png",
      title: "ShiftPilot: The Restaurant Manager's Brain",
      price: "$97",
      period: "One-time",
      // FIXED: Dream Outcome, specific use case
      description: "Cure decision fatigue. Dump your chaos—'Call Sysco, fix ice machine, payroll'—get a prioritized, time-blocked schedule in seconds. Adapts for Chefs (Prep/Orders), GMs (Labor/Cash), Owners (Strategy).",
      features: [
        "Role-Based AI Logic (Chef/GM/Owner)",
        "Auto-Prioritizes \"Brain Dumps\"",
        "Builds 15-min Time Blocks"
      ],
      buttonText: "Buy ShiftPilot - $97",
      buttonHref: "#ShiftPilot-Stripe-Link"
    }
  ];

  return (
    <section className="py-20 bg-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4 font-display">
            Shop the Systems
          </h2>
        </div>
        
        {/* Updated to 2x2 grid: grid-cols-1 md:grid-cols-2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#0E131B] border border-[#1F2937] hover:border-[#00E0FF]/30 transition-colors h-full flex flex-col"
            >
              <div className="p-8 flex flex-col h-full">
                <img
                  src={product.image}
                  alt={`${product.title} Dashboard Screenshot`}
                  className="w-full h-48 object-cover rounded-lg mb-6 bg-[#1F2937]"
                />
                <h3 className="text-2xl text-[#F8FAFC] font-display mb-4">
                  {product.title}
                </h3>
                <div className="text-4xl font-bold text-[#00E0FF] font-mono mb-4">
                  {product.price}
                </div>
                <p className="text-[#94A3B8] mb-4">{product.period}</p>
                <p className="text-[#94A3B8] mb-6 flex-grow">
                  {product.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-[#94A3B8] text-sm"
                    >
                      <span className="text-[#00E0FF]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={product.buttonHref}
                  className="w-full bg-[#00E0FF] text-[#0B0F14] hover:bg-[#08C7E5] font-semibold rounded-2xl py-3 px-6 text-center transition-colors mt-auto"
                >
                  {product.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Automation CTA - FIXED: Added form, not just link */}
        <section className="py-16 bg-[#0E131B] border border-[#00E0FF]/20 rounded-2xl mt-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4 font-display">
              Need Custom Automation?
            </h3>
            <p className="text-lg text-[#94A3B8] mb-8">
              White-glove installation and custom API integration (Social posting, POS integration) for high-volume groups. $3,500-$5,000 setup fee.
            </p>
            {/* FIXED: Changed from link to form trigger or actual form */}
            <a
              href="#revenue-recovery-audit"
              className="inline-block bg-[#9EF01A] text-[#0B0F14] hover:bg-[#8ED60A] font-semibold rounded-2xl px-8 py-4 transition-colors"
            >
              Book a Strategy Call
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ShopTheSystems;
