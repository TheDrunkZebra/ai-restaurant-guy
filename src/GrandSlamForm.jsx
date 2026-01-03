import React, { useState, useEffect } from 'react';

/**
 * The "Lazy Tax" Terminal
 * Security Terminal styling with manilla clipboard PDF drop zone
 * Typewriter-style system analysis animation
 */
const GrandSlamForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurantName: '',
    vendorName: '',
    contractPdf: null,
    annualVendorSpend: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [analysisLogs, setAnalysisLogs] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'contractPdf' && files && files[0]) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
      // Trigger analysis animation when file is selected
      if (!isAnalyzing) {
        startAnalysisAnimation();
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const startAnalysisAnimation = () => {
    setIsAnalyzing(true);
    setAnalysisLogs([]);

    const logMessages = [
      'Parsing Sysco Invoice...',
      'Extracting line items...',
      'Comparing to National Benchmarks...',
      'Identifying price discrepancies...',
      'Calculating potential savings...',
      'Generating negotiation script...',
      'Analysis complete.'
    ];

    logMessages.forEach((message, index) => {
      setTimeout(() => {
        setAnalysisLogs(prev => [...prev, message]);
        if (index === logMessages.length - 1) {
          setIsAnalyzing(false);
        }
      }, index * 800);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (key === 'contractPdf' && formData[key]) {
          formDataToSend.append('contractPdf', formData[key]);
        } else if (key !== 'contractPdf') {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await fetch('/api/process-contract', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to process contract');
      }

      const result = await response.json();
      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        restaurantName: '',
        vendorName: '',
        contractPdf: null,
        annualVendorSpend: '',
      });
      setAnalysisLogs([]);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-[#0B0F14] border-t border-[#27272a]" id="lazy-tax-terminal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-[#9EF01A] text-[#0B0F14] px-4 py-2 rounded-full text-sm font-semibold font-mono">
              60-Day Conversion Guarantee
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            The "Lazy Tax" Terminal
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Upload your vendor contract. Get a price analysis in 24 hours.
            <br />
            <span className="text-[#E7C9A9] font-mono">No commitment. Real numbers.</span>
          </p>
        </div>

        {/* Terminal Container */}
        <div className="bg-[#1A1F2C] border border-[#27272a] rounded-lg overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-[#0B0F14] border-b border-[#27272a] px-6 py-4 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-[#94A3B8] font-mono text-sm">revenue-recovery-analysis@ai-restaurant-guy.local</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Fields - Minimal Terminal Style */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-mono text-[#E7C9A9] mb-2">
                    $ name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0B0F14] border border-[#27272a] rounded font-mono text-[#F8FAFC] focus:outline-none focus:border-[#9EF01A]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-[#E7C9A9] mb-2">
                    $ email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0B0F14] border border-[#27272a] rounded font-mono text-[#F8FAFC] focus:outline-none focus:border-[#9EF01A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-mono text-[#E7C9A9] mb-2">
                  $ phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0B0F14] border border-[#27272a] rounded font-mono text-[#F8FAFC] focus:outline-none focus:border-[#9EF01A]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-mono text-[#E7C9A9] mb-2">
                    $ restaurant_name
                  </label>
                  <input
                    type="text"
                    name="restaurantName"
                    value={formData.restaurantName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0B0F14] border border-[#27272a] rounded font-mono text-[#F8FAFC] focus:outline-none focus:border-[#9EF01A]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-[#E7C9A9] mb-2">
                    $ vendor_name
                  </label>
                  <input
                    type="text"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleChange}
                    required
                    placeholder="Sysco, US Foods, etc."
                    className="w-full px-4 py-3 bg-[#0B0F14] border border-[#27272a] rounded font-mono text-[#F8FAFC] focus:outline-none focus:border-[#9EF01A] placeholder:text-[#64748B]"
                  />
                </div>
              </div>

              {/* Manilla Clipboard PDF Drop Zone */}
              <div>
                <label className="block text-sm font-mono text-[#E7C9A9] mb-2">
                  $ upload_contract_pdf
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="contractPdf"
                    onChange={handleChange}
                    accept=".pdf"
                    required
                    className="hidden"
                    id="contractPdf"
                  />
                  <label
                    htmlFor="contractPdf"
                    className="block cursor-pointer"
                  >
                    {/* Manilla Clipboard Style Drop Zone */}
                    <div className="bg-[#E7C9A9] border-2 border-dashed border-[#0B0F14] rounded-lg p-12 text-center hover:border-[#9EF01A] transition-colors">
                      {formData.contractPdf ? (
                        <div>
                          <div className="text-[#0B0F14] font-mono font-bold text-lg mb-2">
                            ✓ {formData.contractPdf.name}
                          </div>
                          <div className="text-[#0B0F14]/70 font-mono text-sm">
                            File ready for analysis
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="text-[#0B0F14] font-mono text-lg mb-2">
                            Drop vendor contract PDF here
                          </div>
                          <div className="text-[#0B0F14]/70 font-mono text-sm">
                            Or click to browse • PDF only • Max 10MB
                          </div>
                        </div>
                      )}
                    </div>
                  </label>
                </div>
              </div>

              {/* System Analysis Terminal Output */}
              {analysisLogs.length > 0 && (
                <div className="bg-[#0B0F14] border border-[#27272a] rounded-lg p-6 font-mono text-sm">
                  <div className="text-[#E7C9A9] mb-3">$ system_analysis</div>
                  <div className="space-y-1">
                    {analysisLogs.map((log, index) => (
                      <div key={index} className="text-[#9EF01A] animate-pulse">
                        <span className="text-[#64748B]">{'>'}</span> {log}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isAnalyzing}
                className="w-full bg-[#9EF01A] text-[#0B0F14] font-bold font-mono text-lg py-4 px-6 rounded-lg hover:bg-[#8ED60A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : isAnalyzing ? 'Analyzing...' : '$ submit_analysis'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-[#10B981] bg-opacity-20 border border-[#10B981] rounded-lg p-4 font-mono text-[#10B981]">
                  ✓ Analysis submitted. Results will be emailed within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-[#EF4444] bg-opacity-20 border border-[#EF4444] rounded-lg p-4 font-mono text-[#EF4444]">
                  ✗ Error processing contract. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrandSlamForm;
