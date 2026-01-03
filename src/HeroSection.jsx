import React, { useState } from 'react';

/**
 * Optimized Hero Section
 * Built per ZEBRA_KNOWLEDGE_BASE.md frameworks:
 * - Hormozi: Dream Outcome headline, Guarantee badge, Effort Reduction
 * - Zieman: Form above-the-fold, Good Friction (5-7 fields for $2k-$5k)
 * - Maguire: Hook in first 3 lines, No vague slop, Authentic voice
 */

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurantName: '',
    biggestPainPoint: '',
    timeline: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Integrate with form submission API
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitStatus('success');
    setIsSubmitting(false);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Headline + Form (Above-the-Fold) */}
          <div className="text-center lg:text-left">
            
            {/* Guarantee Badge (Hormozi - Above Headline) */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <span className="bg-[#9EF01A] text-[#0B0F14] px-4 py-2 rounded-full text-sm font-semibold">
                60-Day Conversion Guarantee
              </span>
            </div>

            {/* Hook in First 3 Lines (Maguire) */}
            <h1 className="text-4xl md:text-6xl font-bold text-[#F8FAFC] mb-4 font-display leading-tight">
              Stop Losing $50k/Year to Hidden Margin Leaks
            </h1>
            <p className="text-xl md:text-2xl text-[#00E0FF] mb-2 font-semibold">
              Get Your Profit Back in 48 Hours
            </p>
            <p className="text-lg text-[#94A3B8] mb-8">
              The system that recovered $72k in my first year. We handle everything—you just show up.
            </p>

            {/* Inquiry Form Above-the-Fold (Zieman CRO - Good Friction: 5-7 fields for $2k-$5k) */}
            <div className="bg-[#0E131B] border border-[#1F2937] rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-[#F8FAFC] mb-4 text-center lg:text-left">
                Get Your Free Revenue Recovery Audit
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                  />
                </div>
                
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  required
                  className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                />
                
                <input
                  type="text"
                  name="restaurantName"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  placeholder="Restaurant Name *"
                  required
                  className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                />
                
                <textarea
                  name="biggestPainPoint"
                  value={formData.biggestPainPoint}
                  onChange={handleChange}
                  placeholder="What's your biggest pain point? (e.g., Vendor costs killing margins, $6k/month agency with no results) *"
                  required
                  rows={2}
                  className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                />
                
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                >
                  <option value="">Timeline for implementation *</option>
                  <option value="immediate">Immediate (This week)</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="exploring">Just exploring</option>
                </select>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#9EF01A] text-[#0B0F14] hover:bg-[#8ED60A] font-semibold rounded-xl px-8 py-4 text-lg shadow-[0_0_0_2px_rgba(158,240,26,.25),0_8px_30px_-10px_rgba(158,240,26,.6)] hover:translate-y-[-1px] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Free Audit →'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="bg-[#22C55E]/10 border border-[#22C55E] rounded-xl p-4 text-center">
                    <p className="text-[#22C55E] font-semibold text-sm">
                      ✅ We'll contact you within 24 hours
                    </p>
                  </div>
                )}
              </form>
              
              <p className="text-xs text-[#94A3B8] mt-4 text-center">
                🔒 Your information is secure. We'll never share your data.
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <span className="text-[#00E0FF]">✓</span>
                <span>Built in Salty Zebra Bistro • Locals Pub • Bagel Boyz</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00E0FF]">✓</span>
                <span>$72k recovered in first year</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00E0FF]">✓</span>
                <span>80+ owner hours back/month</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="text-center lg:text-right">
            <div className="relative max-w-md mx-auto">
              <img
                src="/seamus-portrait.jpg"
                alt="Seamus O'Brien, The AI Restaurant Guy"
                className="rounded-2xl w-full h-auto object-cover shadow-2xl"
                style={{
                  filter: "grayscale(100%) contrast(1.1) brightness(1.1)",
                  boxShadow: "0 0 0 2px rgba(0,224,255,.25), 0 25px 50px -12px rgba(0,0,0,.8)"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/10 to-transparent rounded-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

