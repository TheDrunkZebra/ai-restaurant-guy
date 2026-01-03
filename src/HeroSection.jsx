import React, { useState, useRef } from 'react';

/**
 * Original Hero Section - Recreated from v2 design
 * Includes file upload drop zone for savings audit
 */
const HeroSection = () => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleFileSelect = (e) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/10 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-[#F8FAFC] mb-6 leading-tight">
              The Digital Workforce for{" "}
              <span className="text-[#00E0FF]">Independent Restaurants</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#94A3B8] mb-8 max-w-4xl leading-relaxed">
              We recover <strong className="text-[#F8FAFC]">$10k+ in wasted vendor fees</strong> and install AI agents to run your operations 24/7. No new software to learn—just results.
            </p>
            
            {/* File Upload Drop Zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`bg-[#0E131B] border-2 border-dashed rounded-2xl p-8 transition-colors mb-8 ${
                isDragging ? 'border-[#00E0FF] bg-[#0E131B]/80' : 'border-[#1F2937] hover:border-[#00E0FF]/50'
              }`}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <svg className="h-12 w-12 mb-4 text-[#00E0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <h3 className="text-xl font-semibold text-[#F8FAFC] mb-2">
                  Get a Free Savings Audit
                </h3>
                <p className="text-[#94A3B8] mb-4">
                  Upload your delivery contracts, utility bills, or vendor agreements
                </p>
                <label className="cursor-pointer">
                  <span className="inline-block px-6 py-3 bg-[#00E0FF] text-[#0B0F14] hover:bg-[#08C7E5] font-semibold rounded-xl transition-colors">
                    Choose Files
                  </span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    onChange={handleFileSelect}
                  />
                </label>
                <p className="text-xs text-[#94A3B8] mt-2">
                  PDF, JPG, PNG, DOC, DOCX up to 10MB
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#systems"
                className="text-lg px-8 py-4 bg-[#00E0FF] text-[#0B0F14] hover:bg-[#08C7E5] font-semibold rounded-2xl shadow-[0_0_0_2px_rgba(0,224,255,.25),0_8px_30px_-10px_rgba(0,224,255,.6)] hover:translate-y-[-1px] transition-all flex items-center justify-center"
              >
                Show me this working
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#audit"
                className="text-lg px-8 py-4 bg-[#9EF01A] text-[#0B0F14] hover:bg-[#8ED60A] font-semibold rounded-2xl shadow-[0_0_0_2px_rgba(158,240,26,.25),0_8px_30px_-10px_rgba(158,240,26,.6)] hover:translate-y-[-1px] transition-all"
              >
                Get My AI Build Plan
              </a>
            </div>
          </div>
          
          <div className="text-center lg:text-right">
            <div className="relative max-w-md mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{
                filter: "grayscale(100%) contrast(1.1) brightness(1.1)",
                boxShadow: "0 0 0 2px rgba(0,224,255,.25), 0 25px 50px -12px rgba(0,0,0,.8)"
              }}>
                <img
                  src="/seamus-portrait.jpg"
                  alt="Seamus O'Brien, The AI Restaurant Guy"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
