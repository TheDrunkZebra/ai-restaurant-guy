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
      // Production: Railway API URL (set via environment variable or hardcode)
      // Development: Local API server
      const apiUrl = process.env.REACT_APP_API_URL || 
                     (process.env.NODE_ENV === 'production' 
                       ? 'https://profit-recovery-api-production.up.railway.app/api/profit-recovery-audit'
                       : 'http://localhost:5000/api/profit-recovery-audit');
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to process audit');
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
    <section className="py-20 bg-[#0B0F14]" id="profit-recovery">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section - Dream Outcome (Hormozi) */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-[#9EF01A] text-[#0B0F14] px-4 py-2 rounded-full text-sm font-semibold">
              60-Day Conversion Guarantee
            </span>
          </div>
          
          {/* Hook in First 3 Lines (Maguire) */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4 font-display leading-tight">
            Find Your Hidden "Lazy Tax" in 48 Hours
          </h2>
          <p className="text-xl md:text-2xl text-[#00E0FF] mb-2 font-semibold">
            Upload Your Vendor Contract. Get a Free Teaser Report.
          </p>
          <p className="text-lg text-[#94A3B8] mb-8">
            See exactly how much you're overpaying—before you sign anything with us.
          </p>
        </div>

        {/* Value Stack - Grand Slam (Hormozi) */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#0E131B] border border-[#1F2937] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#00E0FF] font-mono mb-2">$50k+</div>
            <div className="text-[#94A3B8] text-sm">Average Hidden Costs Found</div>
          </div>
          <div className="bg-[#0E131B] border border-[#1F2937] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#00E0FF] font-mono mb-2">48hrs</div>
            <div className="text-[#94A3B8] text-sm">Teaser Report Delivered</div>
          </div>
          <div className="bg-[#0E131B] border border-[#1F2937] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#00E0FF] font-mono mb-2">100%</div>
            <div className="text-[#94A3B8] text-sm">Free—No Obligation</div>
          </div>
        </div>

        {/* Form - Good Friction (Zieman CRO) - 5-7 fields for $2k-$5k offer */}
        {!teaserReport ? (
          <div className="bg-[#0E131B] border border-[#1F2937] rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Section 1: Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-[#F8FAFC] mb-4">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
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
                  <div className="md:col-span-2">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      required
                      className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Restaurant & Vendor Details */}
              <div className="border-t border-[#1F2937] pt-6">
                <h3 className="text-xl font-semibold text-[#F8FAFC] mb-4">Restaurant & Vendor Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="restaurantName"
                    value={formData.restaurantName}
                    onChange={handleChange}
                    placeholder="Restaurant Name *"
                    required
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                  />
                  <input
                    type="text"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleChange}
                    placeholder="Vendor Name (e.g., Sysco, US Foods) *"
                    required
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                  />
                  <div className="md:col-span-2">
                    <select
                      name="contractType"
                      value={formData.contractType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
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
              <div className="border-t border-[#1F2937] pt-6">
                <h3 className="text-xl font-semibold text-[#F8FAFC] mb-4">Upload Your Vendor Contract</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                      Contract File (PDF, Word, or Text) *
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={handleFileChange}
                      required
                      className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#00E0FF] file:text-[#0B0F14] hover:file:bg-[#08C7E5]"
                    />
                    {contractFile && (
                      <p className="text-sm text-[#94A3B8] mt-2">
                        ✓ Selected: {contractFile.name} ({(contractFile.size / 1024).toFixed(1)} KB)
                      </p>
                    )}
                  </div>
                  <textarea
                    name="biggestPainPoint"
                    value={formData.biggestPainPoint}
                    onChange={handleChange}
                    placeholder="What's your biggest pain point with this vendor? (e.g., Costs keep going up, hidden fees, locked into long contract) *"
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-[#111827] border border-[#1F2937] rounded-lg text-[#F8FAFC] focus:outline-none focus:border-[#00E0FF] focus:ring-2 focus:ring-[#00E0FF]/20"
                  />
                </div>
              </div>

              {/* Guarantee Badge (Risk Reversal - Hormozi) */}
              <div className="bg-[#111827] border border-[#9EF01A]/30 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🛡️</div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#F8FAFC] mb-2">
                      60-Day Conversion Guarantee
                    </h4>
                    <p className="text-[#94A3B8] text-sm">
                      If we don't find at least $10,000 in hidden costs within 60 days, 
                      we'll refund your audit fee and work with you until we do. No questions asked.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing || !contractFile}
                className="w-full bg-[#9EF01A] text-[#0B0F14] hover:bg-[#8ED60A] font-semibold rounded-xl px-8 py-4 text-lg shadow-[0_0_0_2px_rgba(158,240,26,.25),0_8px_30px_-10px_rgba(158,240,26,.6)] hover:translate-y-[-1px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing Your Contract...' : 'Get My Free Teaser Report →'}
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
          <div className="bg-[#0E131B] border border-[#1F2937] rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <span className="bg-[#00E0FF] text-[#0B0F14] px-4 py-2 rounded-full text-sm font-semibold">
                  Your Teaser Report is Ready
                </span>
              </div>
              <h3 className="text-3xl font-bold text-[#F8FAFC] mb-4 font-display">
                Here's Your "Lazy Tax"
              </h3>
              <p className="text-lg text-[#94A3B8]">
                This is what we found in your contract. The full audit includes negotiation strategies and vendor communication templates.
              </p>
            </div>

            {/* Report Content */}
            <div className="space-y-6">
              {/* Benchmark Research */}
              {teaserReport.benchmarkResearch && (
                <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-[#F8FAFC] mb-4">📊 Market Benchmark Analysis</h4>
                  <div className="text-[#94A3B8] whitespace-pre-wrap">
                    {teaserReport.benchmarkResearch}
                  </div>
                </div>
              )}

              {/* Identified Savings */}
              {teaserReport.identifiedSavings && (
                <div className="bg-[#111827] border border-[#9EF01A]/30 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-[#F8FAFC] mb-4">💰 Identified Savings</h4>
                  <div className="text-[#94A3B8] whitespace-pre-wrap">
                    {teaserReport.identifiedSavings}
                  </div>
                </div>
              )}

              {/* Estimated Annual Savings */}
              {teaserReport.estimatedSavings && (
                <div className="bg-[#9EF01A]/10 border border-[#9EF01A] rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-[#9EF01A] font-mono mb-2">
                    ${teaserReport.estimatedSavings.toLocaleString()}
                  </div>
                  <div className="text-[#F8FAFC] font-semibold">Estimated Annual Savings</div>
                </div>
              )}

              {/* CTA to Full Audit */}
              <div className="bg-[#111827] border border-[#00E0FF]/30 rounded-xl p-6 text-center">
                <h4 className="text-xl font-semibold text-[#F8FAFC] mb-4">
                  Want the Full Audit?
                </h4>
                <p className="text-[#94A3B8] mb-6">
                  Get the complete negotiation strategy, vendor email templates, and ongoing monitoring for $2,997.
                </p>
                <a
                  href="#financial-engine"
                  className="inline-block bg-[#00E0FF] text-[#0B0F14] hover:bg-[#08C7E5] font-semibold rounded-xl px-8 py-4 transition-colors"
                >
                  Get Full Audit - $2,997
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Social Proof */}
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
              <span>$50k+ Hidden Costs Found</span>
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

export default ProfitRecoveryForm;

