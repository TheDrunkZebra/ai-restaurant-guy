import React, { useState } from 'react';

/**
 * Professional Hero Section
 * Modeled after Stripe, Linear, Vercel - Clean, modern, visually sophisticated
 * P0 Optimizations: Dream Outcome headline, guarantee badge, above-the-fold form
 */
const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    restaurantName: '',
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
    setSubmitStatus(null);

    try {
      // Scroll to audit section after submission
      await new Promise(resolve => setTimeout(resolve, 500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', restaurantName: '' });
      setTimeout(() => {
        document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' });
      }, 1000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0F14]">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E131B] via-[#0B0F14] to-[#0B0F14]"></div>
      
      {/* Very subtle grid pattern for texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Guarantee Badge - P0 Fix: Prominent risk reversal */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9EF01A]/10 backdrop-blur-sm border border-[#9EF01A]/30 mb-2">
              <span className="text-sm font-bold text-[#9EF01A]">✓ 60-Day Conversion Guarantee</span>
              <span className="text-xs text-[#94A3B8]">or money back</span>
            </div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E131B]/60 backdrop-blur-sm border border-[#1F2937]/50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9EF01A] animate-pulse"></span>
              <span className="text-sm text-[#94A3B8] font-medium">Trusted by 500+ Restaurant Operators</span>
            </div>

            {/* Main Headline - P0 Fix: Dream Outcome focused */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#F8FAFC] leading-[1.05] tracking-tight">
                Recover $72k in
                <br />
                <span className="text-[#00E0FF]">Hidden Revenue</span>
                <br />
                <span className="text-[#F8FAFC]">Your First Year</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-[#94A3B8] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Stop losing money to vendor overcharges and agency fees. Get 80+ hours back per month with battle-tested AI systems built by restaurant operators.
            </p>

            {/* Metrics - Clean, Scannable */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-[#00E0FF] font-mono leading-none">72k</span>
                <span className="text-sm text-[#94A3B8] mt-1">recovered</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-[#00E0FF] font-mono leading-none">80+</span>
                <span className="text-sm text-[#94A3B8] mt-1">hours/month</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-[#9EF01A] font-mono leading-none">3%</span>
                <span className="text-sm text-[#94A3B8] mt-1">cost reduction</span>
              </div>
            </div>

            {/* CTAs - Clean, Professional */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00E0FF] text-[#0B0F14] rounded-xl font-bold text-lg hover:bg-[#08C7E5] transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00E0FF]/30"
              >
                Get Free Revenue Audit
              </a>
              <a
                href="#systems"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#1F2937] text-[#F8FAFC] rounded-xl font-semibold text-lg hover:bg-[#1F2937]/50 hover:border-[#00E0FF]/40 transition-all duration-200"
              >
                View Systems
              </a>
            </div>

            {/* Enhanced Trust Indicators - P0 Fix: More prominent */}
            <div className="pt-6 border-t border-[#1F2937]/30 space-y-2">
              <p className="text-sm text-[#94A3B8]">
                No credit card required • 48-hour turnaround • Used by 500+ operators
              </p>
              <p className="text-xs text-[#94A3B8]/70">
                ✓ Real results from our own operations • ✓ Built by restaurant operators, for operators
              </p>
            </div>
          </div>

          {/* Right: Form Above-the-Fold - P0 Fix: Form visible without scrolling */}
          <div className="relative flex flex-col items-center lg:items-end gap-8">
            {/* Compact Hero Form - Above-the-fold */}
            <div className="w-full max-w-md bg-[#0E131B]/60 backdrop-blur-sm border border-[#1F2937]/50 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">Get Your Free Revenue Audit</h3>
              <p className="text-sm text-[#94A3B8] mb-6">Discover hidden revenue leaks in 48 hours</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-[#0B0F14] border border-[#1F2937] rounded-xl text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className="w-full px-4 py-3 bg-[#0B0F14] border border-[#1F2937] rounded-xl text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20 transition-all"
                />
                <input
                  type="text"
                  name="restaurantName"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  placeholder="Restaurant name"
                  required
                  className="w-full px-4 py-3 bg-[#0B0F14] border border-[#1F2937] rounded-xl text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20 transition-all"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#00E0FF] text-[#0B0F14] rounded-xl font-bold hover:bg-[#08C7E5] transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00E0FF]/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Audit'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-3 bg-[#9EF01A]/10 border border-[#9EF01A]/30 rounded-xl">
                    <p className="text-center text-[#9EF01A] text-sm font-medium">
                      ✓ Request submitted! We'll be in touch shortly.
                    </p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <p className="text-center text-red-400 text-sm font-medium">
                      Error submitting. Please try again.
                    </p>
                  </div>
                )}
              </form>

              {/* Mini Trust Indicators */}
              <div className="mt-4 pt-4 border-t border-[#1F2937]/30">
                <p className="text-xs text-[#94A3B8] text-center">
                  No spam • 48-hour turnaround • 500+ operators
                </p>
              </div>
            </div>

            {/* Portrait - Hidden on mobile, shown on large screens below form */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden w-[280px] h-[350px] shadow-2xl">
                <img
                  src="/seamus-portrait.jpg"
                  alt="Seamus O'Brien - Restaurant Operator & AI Systems Builder"
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/30 via-transparent to-transparent" />
              </div>
              {/* Subtle glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00E0FF]/5 via-transparent to-[#9EF01A]/5 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
