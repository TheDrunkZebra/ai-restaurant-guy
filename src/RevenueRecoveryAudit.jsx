import React, { useState } from 'react';

/**
 * Revenue Recovery Audit Form
 * Built per ZEBRA_KNOWLEDGE_BASE.md frameworks:
 * - Hormozi Value Architecture (Dream Outcome, Guarantee, Effort Reduction, Grand Slam)
 * - Zieman CRO (Good Friction for $2k+ leads, Forms above-the-fold, Ad Scent Continuity)
 * - Maguire/Crew (UGC style, Hooks, Authentic voice, CRO design)
 */

const RevenueRecoveryAudit = () => {
  const [formData, setFormData] = useState({
    // Contact Info (Basic)
    name: '',
    email: '',
    phone: '',
    
    // Event Details (Good Friction for $2k+)
    restaurantName: '',
    restaurantType: '',
    numberOfLocations: '',
    currentAnnualRevenue: '',
    
    // Budget & Timeline (High-Value Qualification)
    monthlyMarketingBudget: '',
    timelineForImplementation: '',
    biggestPainPoint: '',
    
    // Preferences & Special Requests (Grand Slam Qualification)
    preferredContactMethod: 'email',
    dietaryRestrictions: '',
    specialRequests: '',
    
    // Additional Context
    currentVendorContracts: '',
    currentMarketingAgencies: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // TODO: Integrate with form submission API (Formspree, etc.)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        restaurantName: '',
        restaurantType: '',
        numberOfLocations: '',
        currentAnnualRevenue: '',
        monthlyMarketingBudget: '',
        timelineForImplementation: '',
        biggestPainPoint: '',
        preferredContactMethod: 'email',
        dietaryRestrictions: '',
        specialRequests: '',
        currentVendorContracts: '',
        currentMarketingAgencies: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-[#0B0F14]" id="revenue-recovery-audit">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Dream Outcome (Hormozi) */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-[#9EF01A] text-[#0B0F14] px-4 py-2 rounded-full text-sm font-semibold">
              60-Day Conversion Guarantee
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-6 font-display leading-tight">
            Recover Hidden Revenue Before It's Too Late
          </h2>
          <p className="text-xl md:text-2xl text-[#94A3B8] mb-4 max-w-3xl mx-auto leading-relaxed">
            Stop margin leaks and vendor overcharges from killing your profit. 
            Our Revenue Recovery Audit finds every dollar you're losing—before your next P&L.
          </p>
          <p className="text-lg text-[#00E0FF] font-semibold mb-8">
            We handle everything. You just show up.
          </p>
        </div>

        {/* Value Stack - Grand Slam Offer (Hormozi) */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#0E131B] border border-[#1F2937] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#00E0FF] font-mono mb-2">$50k+</div>
            <div className="text-[#94A3B8] text-sm">Average Revenue Recovered</div>
          </div>
          <div className="bg-[#0E131B] border border-[#1F2937] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#00E0FF] font-mono mb-2">48hrs</div>
            <div className="text-[#94A3B8] text-sm">Complete Audit Delivered</div>
          </div>
          <div className="bg-[#0E131B] border border-[#1F2937] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#00E0FF] font-mono mb-2">100%</div>
            <div className="text-[#94A3B8] text-sm">Effortless—We Handle It All</div>
          </div>
        </div>

        {/* Form - Good Friction (Zieman CRO) - 10+ fields for $2k+ offer */}
        <div className="bg-[#0E131B] border border-[#1F2937] rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Section 1: Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-[#F8FAFC] mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                    placeholder="john@restaurant.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                    placeholder="(561) 555-1234"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Restaurant Details */}
            <div className="border-t border-[#1F2937] pt-6">
              <h3 className="text-xl font-semibold text-[#F8FAFC] mb-4">Restaurant Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="restaurantName" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    Restaurant Name *
                  </label>
                  <input
                    type="text"
                    id="restaurantName"
                    name="restaurantName"
                    value={formData.restaurantName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                    placeholder="The Salty Zebra Bistro"
                  />
                </div>
                <div>
                  <label htmlFor="restaurantType" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    Restaurant Type *
                  </label>
                  <select
                    id="restaurantType"
                    name="restaurantType"
                    value={formData.restaurantType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                  >
                    <option value="">Select type...</option>
                    <option value="fine-dining">Fine Dining</option>
                    <option value="casual-dining">Casual Dining</option>
                    <option value="fast-casual">Fast Casual</option>
                    <option value="bar-pub">Bar/Pub</option>
                    <option value="catering">Catering</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="numberOfLocations" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    Number of Locations *
                  </label>
                  <select
                    id="numberOfLocations"
                    name="numberOfLocations"
                    value={formData.numberOfLocations}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                  >
                    <option value="">Select...</option>
                    <option value="1">1 Location</option>
                    <option value="2-3">2-3 Locations</option>
                    <option value="4-10">4-10 Locations</option>
                    <option value="10+">10+ Locations</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="currentAnnualRevenue" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    Current Annual Revenue *
                  </label>
                  <select
                    id="currentAnnualRevenue"
                    name="currentAnnualRevenue"
                    value={formData.currentAnnualRevenue}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                  >
                    <option value="">Select range...</option>
                    <option value="under-500k">Under $500k</option>
                    <option value="500k-1m">$500k - $1M</option>
                    <option value="1m-2m">$1M - $2M</option>
                    <option value="2m-5m">$2M - $5M</option>
                    <option value="5m+">$5M+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Budget & Timeline (High-Value Qualification) */}
            <div className="border-t border-[#1F2937] pt-6">
              <h3 className="text-xl font-semibold text-[#F8FAFC] mb-4">Budget & Timeline</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="monthlyMarketingBudget" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    Current Monthly Marketing Budget *
                  </label>
                  <select
                    id="monthlyMarketingBudget"
                    name="monthlyMarketingBudget"
                    value={formData.monthlyMarketingBudget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                  >
                    <option value="">Select range...</option>
                    <option value="under-1k">Under $1,000</option>
                    <option value="1k-3k">$1,000 - $3,000</option>
                    <option value="3k-5k">$3,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k+">$10,000+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timelineForImplementation" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    Timeline for Implementation *
                  </label>
                  <select
                    id="timelineForImplementation"
                    name="timelineForImplementation"
                    value={formData.timelineForImplementation}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                  >
                    <option value="">Select timeline...</option>
                    <option value="immediate">Immediate (This week)</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="biggestPainPoint" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    What's Your Biggest Pain Point Right Now? *
                  </label>
                  <textarea
                    id="biggestPainPoint"
                    name="biggestPainPoint"
                    value={formData.biggestPainPoint}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                    placeholder="e.g., Vendor costs are killing our margins, or we're spending $6k/month on agencies with no results..."
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Preferences & Special Requests (Grand Slam Qualification) */}
            <div className="border-t border-[#1F2937] pt-6">
              <h3 className="text-xl font-semibold text-[#F8FAFC] mb-4">Preferences & Special Requests</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredContactMethod" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    Preferred Contact Method *
                  </label>
                  <select
                    id="preferredContactMethod"
                    name="preferredContactMethod"
                    value={formData.preferredContactMethod}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="text">Text Message</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="currentVendorContracts" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    Current Vendor Contracts (Optional)
                  </label>
                  <input
                    type="text"
                    id="currentVendorContracts"
                    name="currentVendorContracts"
                    value={formData.currentVendorContracts}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                    placeholder="e.g., Sysco, US Foods, etc."
                  />
                </div>
                <div>
                  <label htmlFor="currentMarketingAgencies" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    Current Marketing Agencies (Optional)
                  </label>
                  <input
                    type="text"
                    id="currentMarketingAgencies"
                    name="currentMarketingAgencies"
                    value={formData.currentMarketingAgencies}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                    placeholder="e.g., Local agency, $6k/month retainer..."
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-[#94A3B8] mb-2">
                    Special Requests or Additional Context
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                    placeholder="Anything else we should know? (Optional)"
                  />
                </div>
              </div>
            </div>

            {/* Guarantee Badge (Risk Reversal - Hormozi) */}
            <div className="bg-[#111827] border border-[#9EF01A]/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🛡️</div>
                <div>
                  <h4 className="text-lg font-semibold text-[#F8FAFC] mb-2">
                    60-Day Conversion Guarantee
                  </h4>
                  <p className="text-[#94A3B8] text-sm">
                    If we don't recover at least $10,000 in hidden revenue within 60 days, 
                    we'll refund your audit fee and work with you until we do. No questions asked.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#9EF01A] text-[#0B0F14] hover:bg-[#8ED60A] font-semibold rounded-xl px-8 py-4 text-lg shadow-[0_0_0_2px_rgba(158,240,26,.25),0_8px_30px_-10px_rgba(158,240,26,.6)] hover:translate-y-[-1px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Start My Revenue Recovery Audit →'}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-[#22C55E]/10 border border-[#22C55E] rounded-xl p-4 text-center">
                <p className="text-[#22C55E] font-semibold">
                  ✅ Thank you! We'll contact you within 24 hours to schedule your audit.
                </p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-[#EF4444]/10 border border-[#EF4444] rounded-xl p-4 text-center">
                <p className="text-[#EF4444] font-semibold">
                  ❌ Something went wrong. Please try again or contact us directly.
                </p>
              </div>
            )}

            {/* Trust Indicators */}
            <div className="text-center pt-4 border-t border-[#1F2937]">
              <p className="text-sm text-[#94A3B8]">
                🔒 Your information is secure. We'll never share your data.
              </p>
            </div>
          </form>
        </div>

        {/* Social Proof Section */}
        <div className="mt-12 text-center">
          <p className="text-[#94A3B8] text-sm mb-4">
            Trusted by independent restaurant operators across South Florida
          </p>
          <div className="flex justify-center items-center gap-6 text-sm text-[#94A3B8]">
            <div className="flex items-center gap-2">
              <span className="text-[#00E0FF]">✓</span>
              <span>Built in Real Restaurants</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#00E0FF]">✓</span>
              <span>$100k+ Revenue Recovered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#00E0FF]">✓</span>
              <span>48-Hour Turnaround</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueRecoveryAudit;

