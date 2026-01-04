import React, { useState } from 'react';

/**
 * Production-Ready Lead Capture Form
 * Clean, modern design with clear value proposition
 */
const RevenueRecoveryAudit = () => {
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
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitStatus('success');
      setFormData({ name: '', email: '', restaurantName: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="audit" className="py-24 lg:py-32 bg-gradient-to-b from-[#0B0F14] to-[#0E131B] border-t border-[#1F2937]/30">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8FAFC] mb-6 tracking-tight">
            Free <span className="text-[#00E0FF]">Revenue Audit</span>
          </h2>
          <p className="text-xl text-[#94A3B8] font-light max-w-2xl mx-auto leading-relaxed">
            Discover hidden revenue leaks in your vendor contracts. We analyze your invoices and deliver actionable insights.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#0E131B]/60 backdrop-blur-sm border border-[#1F2937] rounded-2xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-6 py-4 bg-[#0B0F14] border border-[#1F2937] rounded-xl text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20 transition-all text-lg"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="w-full px-6 py-4 bg-[#0B0F14] border border-[#1F2937] rounded-xl text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20 transition-all text-lg"
              />
            </div>
            <div>
              <input
                type="text"
                name="restaurantName"
                value={formData.restaurantName}
                onChange={handleChange}
                placeholder="Restaurant name"
                required
                className="w-full px-6 py-4 bg-[#0B0F14] border border-[#1F2937] rounded-xl text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20 transition-all text-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#00E0FF] text-[#0B0F14] rounded-xl font-bold text-lg hover:bg-[#08C7E5] transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00E0FF]/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Get Free Audit →'}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-[#9EF01A]/10 border border-[#9EF01A]/30 rounded-xl">
                <p className="text-center text-[#9EF01A] font-medium">
                  ✓ Audit request submitted successfully! We'll be in touch shortly.
                </p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <p className="text-center text-red-400 font-medium">
                  There was an error submitting your request. Please try again.
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-[#94A3B8] text-sm">
            No spam. 48-hour turnaround. Used by 500+ operators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RevenueRecoveryAudit;
