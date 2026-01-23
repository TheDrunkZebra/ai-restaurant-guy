import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Target, Eye } from 'lucide-react';

const HeroSection = ({ onOpenModal }) => {
    const proofPoints = [
        { value: "$4.33M", label: "Portfolio Revenue" },
        { value: "94%", label: "Forecast Accuracy" },
        { value: "17.7%", label: "Labor Cost (vs 22% avg)" },
    ];

    return (
        <section className="relative pt-28 pb-16 md:py-24 lg:py-32 overflow-hidden bg-[#0B0F14] text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left Column: Content - MOBILE OPTIMIZED */}
                    <div className="text-center lg:text-left">
                        {/* Pre-headline */}
                        <div className="inline-flex items-center gap-2 bg-[#00E0FF]/10 border border-[#00E0FF]/30 rounded-full px-4 py-1.5 mb-6">
                            <TrendingUp className="w-4 h-4 text-[#00E0FF]" />
                            <span className="text-sm text-[#00E0FF] font-medium">For Multi-Unit Operators (3-10 Locations)</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-[1.75rem] leading-[1.2] md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] mb-6 md:mb-8 font-display md:leading-tight">
                            <span className="text-[#00E0FF]">I'll Install the Same AI Systems</span>
                            <br className="hidden md:block" />
                            <span className="md:hidden"> </span>
                            Running My $5M Restaurant Portfolio Into Yours.
                        </h1>

                        {/* Subhead - The pitch */}
                        <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed">
                            You'll see your numbers like I see mine—every week, not every quarter.
                            Real-time prime cost, 94% forecast accuracy, and growth opportunities quantified.
                        </p>

                        {/* CTA with inline guarantee */}
                        <div className="flex flex-col gap-4 md:gap-5 mb-8">
                            <button
                                id="hero-cta-primary"
                                data-cta="discovery-audit"
                                onClick={onOpenModal}
                                className="inline-flex items-center justify-center px-6 py-4 md:px-8 text-base font-semibold text-[#0B0F14] bg-[#39FF14] rounded-lg hover:bg-[#2FE010] transition-all shadow-lg shadow-[#39FF14]/50 cursor-pointer w-full sm:w-auto"
                            >
                                Book $1,500 Discovery Audit
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>

                            {/* Guarantee NEXT to CTA */}
                            <p className="hidden md:flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-400">
                                <ShieldCheck className="w-4 h-4 text-[#39FF14] flex-shrink-0" />
                                <span>Applied to setup if you sign within 30 days</span>
                            </p>
                        </div>

                        {/* Proof Points - Mobile Visible */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                            {proofPoints.map((point, index) => (
                                <div key={index} className="text-center lg:text-left">
                                    <div className="text-xl md:text-2xl font-bold text-[#39FF14]">{point.value}</div>
                                    <div className="text-xs md:text-sm text-gray-400">{point.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Portfolio Dashboard Preview */}
                    <div className="relative group hidden md:block">
                        <div className="relative">
                            {/* Dashboard Preview Card */}
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F1419] p-6">
                                {/* Dashboard Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <Eye className="w-5 h-5 text-[#00E0FF]" />
                                        <span className="font-semibold text-[#F8FAFC]">Portfolio Command Center</span>
                                    </div>
                                    <span className="text-xs text-gray-500">Live Data</span>
                                </div>

                                {/* Mini Dashboard Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-[#1A1F26] rounded-lg p-4">
                                        <div className="text-xs text-gray-400 mb-1">Weekly Revenue</div>
                                        <div className="text-2xl font-bold text-[#39FF14]">$83.4K</div>
                                        <div className="text-xs text-green-400">↑ 12% vs forecast</div>
                                    </div>
                                    <div className="bg-[#1A1F26] rounded-lg p-4">
                                        <div className="text-xs text-gray-400 mb-1">Prime Cost</div>
                                        <div className="text-2xl font-bold text-[#00E0FF]">55.2%</div>
                                        <div className="text-xs text-green-400">↓ 1.8% vs last week</div>
                                    </div>
                                    <div className="bg-[#1A1F26] rounded-lg p-4">
                                        <div className="text-xs text-gray-400 mb-1">Labor %</div>
                                        <div className="text-2xl font-bold text-[#F8FAFC]">17.7%</div>
                                        <div className="text-xs text-gray-500">4pt under industry</div>
                                    </div>
                                    <div className="bg-[#1A1F26] rounded-lg p-4">
                                        <div className="text-xs text-gray-400 mb-1">Opportunities</div>
                                        <div className="text-2xl font-bold text-[#FBBF24]">$385K</div>
                                        <div className="text-xs text-gray-500">identified this quarter</div>
                                    </div>
                                </div>

                                {/* Venues Bar */}
                                <div className="flex gap-2">
                                    <div className="flex-1 bg-[#39FF14]/20 border border-[#39FF14]/30 rounded px-3 py-2 text-center">
                                        <div className="text-xs text-[#39FF14]">Bagel Boyz</div>
                                    </div>
                                    <div className="flex-1 bg-[#00E0FF]/20 border border-[#00E0FF]/30 rounded px-3 py-2 text-center">
                                        <div className="text-xs text-[#00E0FF]">Salty Zebra</div>
                                    </div>
                                    <div className="flex-1 bg-[#FBBF24]/20 border border-[#FBBF24]/30 rounded px-3 py-2 text-center">
                                        <div className="text-xs text-[#FBBF24]">Locals Pub</div>
                                    </div>
                                </div>
                            </div>

                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#00E0FF]/20 via-transparent to-[#39FF14]/20 rounded-3xl blur-xl opacity-50 -z-10" />
                        </div>
                    </div>

                </div>

                {/* Trust bar - Desktop only */}
                <p className="hidden lg:block text-sm text-gray-500 mt-8">
                    Operator of Bagel Boyz ($2.5M), Salty Zebra Bistro ($732K), The Locals Pub ($1.08M) in Jupiter, FL
                </p>

            </div>
        </section>
    );
};

export default HeroSection;
