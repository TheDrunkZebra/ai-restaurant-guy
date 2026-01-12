import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import GuaranteeBadge from '../components/GuaranteeBadge';

const HeroSection = ({ onOpenModal }) => {
    return (
        <section className="relative py-12 md:py-20 overflow-hidden bg-[#0B0F14] text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Column: Content */}
                    <div className="text-center lg:text-left flex flex-col">
                        {/* Guarantee Badge - Above the fold */}
                        <div className="mb-4 order-0 flex justify-center lg:justify-start">
                            <GuaranteeBadge variant="hero" />
                        </div>

                        {/* Main Headline - Sharper, results-focused */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] mb-4 md:mb-6 font-display leading-tight order-1">
                            <span className="text-[#00E0FF]">I Cut My Prime Cost to 46%.</span>
                            <br />Now I'll Show You How.
                        </h1>

                        {/* Subhead - Founder story, not testimonial format */}
                        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed order-2">
                            I own 3 restaurants in Jupiter, FL. I built AI systems that found <strong className="text-[#39FF14]">$120k in hidden savings</strong> and run my ops 24/7. Now I install them for independent restaurants.
                        </p>

                        {/* Qualifier - Who this is for */}
                        <p className="text-sm text-gray-400 mb-6 md:mb-8 order-3">
                            For owner-operators doing <strong className="text-gray-300">$1M–$5M/year</strong> who want their profit back and their weekends back.
                        </p>

                        {/* CTA Button - ONE primary action */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8 order-4">
                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0B0F14] bg-[#39FF14] rounded-lg hover:bg-[#2FE010] transition-all shadow-lg shadow-[#39FF14]/50 cursor-pointer"
                            >
                                Start with $500 Savings Audit
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                            <span className="text-sm text-gray-400 self-center">
                                Refundable if you sign. Most owners find $5k–$15k.
                            </span>
                        </div>

                        {/* Social Proof - External testimonial */}
                        <div className="bg-white/5 rounded-lg p-4 border-l-4 border-[#39FF14] mb-6 md:mb-8 order-5">
                            <p className="text-sm md:text-base text-gray-200 italic">
                                "Seamus found $11k in vendor contracts we didn't know we were overpaying. Paid for itself the first month."
                            </p>
                            <p className="text-xs md:text-sm text-gray-400 mt-2">
                                — Mike R., Restaurant Owner, Palm Beach
                            </p>
                        </div>

                        {/* Trust Indicators - Short, benefit-focused */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm order-6">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-[#39FF14]/20 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-[#39FF14]" />
                                </div>
                                <span className="text-gray-300 text-xs md:text-sm">Cut costs fast</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-[#39FF14]/20 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-[#39FF14]" />
                                </div>
                                <span className="text-gray-300 text-xs md:text-sm">More profit</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-[#39FF14]/20 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-[#39FF14]" />
                                </div>
                                <span className="text-gray-300 text-xs md:text-sm">Less busywork</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-[#39FF14]/20 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-[#39FF14]" />
                                </div>
                                <span className="text-gray-300 text-xs md:text-sm">Custom for you</span>
                            </div>
                        </div>
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
