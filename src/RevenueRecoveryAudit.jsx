import React, { useState } from 'react';

/**
 * Minimal Lead Capture Form
 * Clean, elegant, no excessive fields
 */
const RevenueRecoveryAudit = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    restaurantName: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="audit" className="py-32 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Clean header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Free Revenue Audit
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
            Discover hidden revenue leaks in your vendor contracts. We analyze your invoices and deliver actionable insights.
          </p>
        </div>

        {/* Minimal form - Only essentials */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-lg"
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
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-lg"
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
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-white text-slate-950 rounded-2xl font-medium hover:bg-slate-100 transition-all duration-200 hover:scale-[1.02] text-lg"
            >
              Get Free Audit
            </button>
          </form>
        </div>

        {/* Simple trust indicators */}
        <div className="mt-12 text-center text-slate-500 text-sm">
          No spam. 48-hour turnaround. Used by 500+ operators.
        </div>
      </div>
    </section>
  );
};

export default RevenueRecoveryAudit;
