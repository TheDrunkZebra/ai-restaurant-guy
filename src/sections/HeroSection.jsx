import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const HeroSection = ({ onOpenModal }) => {
    return (
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#0B0F14] text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Content - SIMPLIFIED */}
                    <div className="text-center lg:text-left">
                        {/* Main Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] mb-6 md:mb-8 font-display leading-tight">
                            <span className="text-[#00E0FF]">I Cut My Prime Cost to 46%.</span>
                            <br />Now I'll Show You How.
                        </h1>

                        {/* ONE line subhead - qualifier baked in */}
                        <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10">
                            For restaurant owners doing $1M–$5M who want their profit back — and their weekends.
                        </p>

                        {/* CTA with inline guarantee */}
                        <div className="flex flex-col gap-4 mb-6">
                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0B0F14] bg-[#39FF14] rounded-lg hover:bg-[#2FE010] transition-all shadow-lg shadow-[#39FF14]/50 cursor-pointer w-full sm:w-auto"
                            >
                                Start with $500 Savings Audit
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                            
                            {/* Guarantee NEXT to CTA - not at top */}
                            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-400">
                                <ShieldCheck className="w-4 h-4 text-[#39FF14]" />
                                <span>2x ROI guaranteed or we work free. Most owners find $5k–$15k.</span>
                            </div>
                        </div>

                        {/* Trust bar - simple, one line */}
                        <p className="text-sm text-gray-500 mt-8">
                            Trusted by 12+ independent restaurants in South Florida
                        </p>
                    </div>

                    {/* Right Column: Portrait */}
                    <div className="relative group">
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-surface">
                                <img
                                    src="/seamus-portrait.jpg"
                                    alt="Seamus O'Brien, The AI Restaurant Guy, restaurant owner and AI automation expert"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
