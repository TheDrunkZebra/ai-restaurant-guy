import React, { useState } from 'react';

/**
 * Profit Recovery Form - "The Front Door" for Zebra Auditor
 * 
 * Workflow:
 * 1. Prospect fills form + uploads vendor contract
 * 2. Triggers zebra_auditor.py in background
 * 3. Generates teaser report showing "Lazy Tax"
 * 4. Displays results to prospect (sales hook)
 * 
 * Built per ZEBRA_KNOWLEDGE_BASE.md:
 * - Hormozi: Dream Outcome, Guarantee, Effort Reduction
 * - Zieman: Form above-the-fold, Good Friction (5-7 fields for $2k-$5k)
 * - Maguire: Hook in first 3 lines, No vague slop
 */

const ProfitRecoveryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurantName: '',
    vendorName: '',
    contractType: '',
    biggestPainPoint: '',
  });

  const [contractFile, setContractFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [teaserReport, setTeaserReport] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ['application/pdf', 'text/plain', 'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        setError('Please upload a PDF, Word document, or text file');
        return;
      }
      // Validate file size (max 100MB - matches backend limit)
      if (file.size > 100 * 1024 * 1024) {
        setError('File size must be less than 100MB');
        return;
      }
      setContractFile(file);
      setError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);
    setTeaserReport(null);

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('restaurantName', formData.restaurantName);
      formDataToSend.append('vendorName', formData.vendorName);
      formDataToSend.append('contractType', formData.contractType);
      formDataToSend.append('biggestPainPoint', formData.biggestPainPoint);
      formDataToSend.append('contract', contractFile);

      // Call API endpoint
      const apiUrl = 'https://profit-recovery-api-production.up.railway.app/api/profit-recovery-audit';
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to process protocol');
      }

      const result = await response.json();
      setTeaserReport(result);

    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="py-24 bg-background" id="profit-recovery">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section - Dream Outcome (Hormozi) */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded font-black text-xs uppercase tracking-widest italic">
              60-Day Conversion Guarantee
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 italic tracking-tighter uppercase leading-tight">
            EXTRACT YOUR <span className="text-primary">"LAZY TAX"</span> IN 48 HOURS
          </h2>
          <p className="text-xl text-textSecondary mb-8 max-w-2xl mx-auto font-medium">
            Upload Your Vendor Contract. Deploy The Profit Protocol. See exactly how much cash is bleeding—before you sign a thing.
          </p>
        </div>

        {/* Value Stack */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-surface border border-white/5 rounded-xl p-6 text-center shadow-xl">
            <div className="text-3xl font-black text-primary italic tracking-tighter mb-2 uppercase">$50k+</div>
            <div className="text-textSecondary text-[10px] font-black uppercase tracking-widest">Avg Hidden Costs Found</div>
          </div>
          <div className="bg-surface border border-white/5 rounded-xl p-6 text-center shadow-xl">
            <div className="text-3xl font-black text-primary italic tracking-tighter mb-2 uppercase">48hrs</div>
            <div className="text-textSecondary text-[10px] font-black uppercase tracking-widest">Protocol Findings Delivered</div>
          </div>
          <div className="bg-surface border border-white/5 rounded-xl p-6 text-center shadow-xl">
            <div className="text-3xl font-black text-primary italic tracking-tighter mb-2 uppercase">100%</div>
            <div className="text-textSecondary text-[10px] font-black uppercase tracking-widest">Free Extraction Insight</div>
          </div>
        </div>

        {/* Form - Good Friction (Zieman CRO) - 5-7 fields for $2k-$5k offer */}
        {!teaserReport ? (
          <div className="bg-[#0E131B] border border-[#1F2937] rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Section 1: Contact Information */}
              <div>
                <h3 className="text-xl font-black text-white mb-4 italic tracking-tighter uppercase">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    className="w-full px-4 py-3 bg-background border border-white/5 rounded text-white focus:outline-none focus:border-primary transition-all font-medium"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="w-full px-4 py-3 bg-background border border-white/5 rounded text-white focus:outline-none focus:border-primary transition-all font-medium"
                  />
                  <div className="md:col-span-2">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      required
                      className="w-full px-4 py-3 bg-background border border-white/5 rounded text-white focus:outline-none focus:border-primary transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Restaurant & Vendor Details */}
              <div className="border-t border-white/5 pt-6">
                <h3 className="text-xl font-black text-white mb-4 italic tracking-tighter uppercase">Restaurant & Vendor Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="restaurantName"
                    value={formData.restaurantName}
                    onChange={handleChange}
                    placeholder="Restaurant Name *"
                    required
                    className="w-full px-4 py-3 bg-background border border-white/5 rounded text-white focus:outline-none focus:border-primary transition-all font-medium"
                  />
                  <input
                    type="text"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleChange}
                    placeholder="Vendor (e.g., Sysco, US Foods) *"
                    required
                    className="w-full px-4 py-3 bg-background border border-white/5 rounded text-white focus:outline-none focus:border-primary transition-all font-medium"
                  />
                  <div className="md:col-span-2">
                    <select
                      name="contractType"
                      value={formData.contractType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-white/5 rounded text-textSecondary focus:outline-none focus:border-primary transition-all font-medium"
                    >
                      <option value="">Contract Type *</option>
                      <option value="Linen">Linen Service</option>
                      <option value="Waste">Waste Management</option>
                      <option value="POS">POS System</option>
                      <option value="Utilities">Utilities</option>
                      <option value="Food Supplier">Food Supplier</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 3: Contract Upload */}
              <div className="border-t border-white/5 pt-6">
                <h3 className="text-xl font-black text-white mb-4 italic tracking-tighter uppercase">Upload Your Vendor Contract</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase font-black text-textSecondary mb-2 ml-1 tracking-widest italic">
                      Contract File (PDF, Word, or Text) *
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={handleFileChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-white/5 rounded text-white focus:outline-none focus:border-primary transition-all file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-[10px] file:font-black file:bg-primary/20 file:text-primary file:uppercase file:italic"
                    />
                    {contractFile && (
                      <p className="text-[10px] text-primary mt-2 font-black uppercase italic">
                        ✓ Selected: {contractFile.name} ({(contractFile.size / 1024).toFixed(1)} KB)
                      </p>
                    )}
                  </div>
                  <textarea
                    name="biggestPainPoint"
                    value={formData.biggestPainPoint}
                    onChange={handleChange}
                    placeholder="What's your biggest pain point with this vendor? *"
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-background border border-white/5 rounded text-white focus:outline-none focus:border-primary transition-all font-medium"
                  />
                </div>
              </div>

              {/* Guarantee Badge */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white mb-1 italic tracking-tighter uppercase">
                      60-Day Conversion Guarantee
                    </h4>
                    <p className="text-textSecondary text-sm font-medium">
                      If we don't find at least $10,000 in hidden costs within 60 days,
                      we'll refund your fee and work with you until we do.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing || !contractFile}
                className="w-full bg-primary text-background font-black rounded py-5 text-xl shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:translate-y-[-1px] transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase italic tracking-tighter border border-primary/20"
              >
                {isProcessing ? 'Processing Contract...' : 'Get Free Teaser Report →'}
              </button>

              {/* Error Display */}
              {error && (
                <div className="bg-[#EF4444]/10 border border-[#EF4444] rounded-xl p-4 text-center">
                  <p className="text-[#EF4444] font-semibold">❌ {error}</p>
                </div>
              )}

              {/* Trust Indicators */}
              <div className="text-center pt-4 border-t border-[#1F2937]">
                <p className="text-sm text-[#94A3B8]">
                  🔒 Your contract is secure. We'll never share your data.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Teaser Report Display (Sales Hook) */
          <div className="bg-surface border border-white/5 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <span className="bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded font-black text-xs uppercase tracking-widest italic">
                  Protocol Findings Ready
                </span>
              </div>
              <h3 className="text-3xl font-black text-white mb-4 italic tracking-tighter uppercase">
                YOUR "LAZY TAX" REPORT
              </h3>
              <p className="text-lg text-textSecondary font-medium">
                Initial extraction complete. Full protocol deployment covers negotiation strategy and vendor replacement.
              </p>
            </div>

            {/* Report Content */}
            <div className="space-y-6">
              {teaserReport.benchmarkResearch && (
                <div className="bg-background border border-white/5 rounded-xl p-6">
                  <h4 className="text-xl font-black text-white mb-4 italic tracking-tighter uppercase">📊 Market Benchmark Analysis</h4>
                  <div className="text-textSecondary whitespace-pre-wrap font-medium">
                    {teaserReport.benchmarkResearch}
                  </div>
                </div>
              )}

              {teaserReport.identifiedSavings && (
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h4 className="text-xl font-black text-primary mb-4 italic tracking-tighter uppercase">💰 Identified Savings</h4>
                  <div className="text-textSecondary whitespace-pre-wrap font-medium">
                    {teaserReport.identifiedSavings}
                  </div>
                </div>
              )}

              {teaserReport.estimatedSavings && (
                <div className="bg-primary border border-primary/20 rounded-xl p-8 text-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <div className="text-5xl font-black text-background italic tracking-tighter mb-1 uppercase">
                    ${teaserReport.estimatedSavings.toLocaleString()}
                  </div>
                  <div className="text-background font-black uppercase text-[10px] tracking-widest italic opacity-80">Estimated Annual Revenue Recovery</div>
                </div>
              )}

              <div className="bg-background border border-primary/30 rounded-xl p-8 text-center">
                <h4 className="text-xl font-black text-white mb-4 italic tracking-tighter uppercase">
                  Fully Deploy Protocol
                </h4>
                <p className="text-textSecondary mb-6 font-medium">
                  Implement the full negotiation strategy, automated vendor monitoring, and cash recovery engine.
                </p>
                <a
                  href="#systems"
                  className="inline-block bg-primary text-background font-black rounded px-8 py-4 uppercase italic tracking-tighter shadow-xl"
                >
                  View Full Systems
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-textSecondary text-[10px] font-black uppercase tracking-[0.2em] mb-6 opacity-50 italic">
            Military-Grade Profit Enforcement
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-[11px] font-black text-white/40 uppercase tracking-widest italic">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-sm" />
              <span>Real-World Tested</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-sm" />
              <span>$50k+ Avg Recovery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-sm" />
              <span>48-Hour Turnaround</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitRecoveryForm;

