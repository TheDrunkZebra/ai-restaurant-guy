import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { getTrustLine } from '../config/siteConfig';

const HeroSection = ({ onOpenModal }) => {
    const trustLine = getTrustLine();

    return (
        <section className="relative pt-28 pb-16 md:py-24 lg:py-32 overflow-hidden bg-[#0B0F14] text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left Column: Content - MOBILE OPTIMIZED */}
                    <div className="text-center lg:text-left">
                        {/* Main Headline - Mobile: tighter, Desktop: unchanged */}
                        <h1 className="text-[1.75rem] leading-[1.2] md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] mb-6 md:mb-8 font-display md:leading-tight">
                            <span className="text-[#00E0FF]">I Keep 20% of Every Dollar My Restaurants Make.</span>
                            <br className="hidden md:block" />
                            <span className="md:hidden"> </span>
                            Now I'll Show You How.
                        </h1>

                        {/* ONE line subhead - qualifier baked in */}
                        <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed">
                            Stop guessing. I'll show you the simple system I use to keep more profit—no tech overwhelm.
                        </p>

                        {/* CTA with inline guarantee - MOBILE FIRST: Must be visible without scroll */}
                        <div className="flex flex-col gap-4 md:gap-5 mb-6 md:mb-8">
                            <button
                                id="hero-cta-primary"
                                data-cta="start-audit"
                                onClick={onOpenModal}
                                className="inline-flex items-center justify-center px-6 py-4 md:px-8 text-base font-semibold text-[#0B0F14] bg-[#39FF14] rounded-lg hover:bg-[#2FE010] transition-all shadow-lg shadow-[#39FF14]/50 cursor-pointer w-full sm:w-auto"
                            >
                                Start $500 Audit
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>

                            {/* Guarantee NEXT to CTA - not at top */}
                            <p className="hidden md:flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-400">
                                <ShieldCheck className="w-4 h-4 text-[#39FF14] flex-shrink-0" />
                                <span>2× guarantee: find documented savings or we keep working at no extra cost.</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Portrait - Hidden on mobile to keep CTA above fold */}
                    <div className="relative group hidden md:block">
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-surface">
                                <img
                                    src="/seamus-portrait.jpg"
                                    alt="The AI Restaurant Guy, restaurant owner and AI automation expert"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Trust bar - Desktop only, under content */}
                <p className="hidden lg:block text-sm text-gray-500 mt-8">
                    {trustLine}
                </p>

            </div>
        </section>
    );
};

export default HeroSection;
