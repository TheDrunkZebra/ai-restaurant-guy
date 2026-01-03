import React, { useState } from 'react';

/**
 * Original Design Lead Capture Form
 * Clean, elegant with original styling
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
    <section id="audit" className="py-32 bg-[#0B0F14]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header - Original style */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-6 tracking-tight">
            Free <span className="text-[#00E0FF]">Revenue Audit</span>
          </h2>
          <p className="text-xl text-[#94A3B8] font-light max-w-2xl mx-auto">
            Discover hidden revenue leaks in your vendor contracts. We analyze your invoices and deliver actionable insights.
          </p>
        </div>

        {/* Form - Original glassmorphism */}
        <div className="glass-card p-12">
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
              className="w-full px-8 py-4 bg-[#00E0FF] text-[#0B0F14] rounded-xl font-bold hover:bg-[#08C7E5] transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#00E0FF]/20 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Get Free Audit →'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-center text-[#9EF01A] mt-4">
                Audit request submitted successfully! We'll be in touch shortly.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-center text-red-500 mt-4">
                There was an error submitting your request. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* Trust indicators - Original style */}
        <div className="mt-12 text-center text-[#94A3B8] text-sm">
          No spam. 48-hour turnaround. Used by 500+ operators.
        </div>
      </div>
    </section>
  );
};

export default RevenueRecoveryAudit;
