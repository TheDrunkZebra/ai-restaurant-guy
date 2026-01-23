import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Eye, X, Clock, DollarSign, Percent } from 'lucide-react';

const HeroSection = ({ onOpenModal }) => {
    const [selectedVenue, setSelectedVenue] = useState(null);

    const proofPoints = [
        { value: "94%", label: "Forecast Accuracy" },
        { value: "<50%", label: "Prime Cost" },
        { value: "20%+", label: "Gross Margin" },
    ];

    const venueData = {
        'bagel-boyz': {
            name: 'Bagel Boyz',
            type: 'Fast Casual Deli',
            color: '#39FF14',
            stats: [
                { label: 'Labor Cost', value: '17.7%', note: 'vs 28-32% industry avg' },
                { label: 'Food Cost', value: '28%', note: 'controlled through PMIX analysis' },
                { label: 'Prime Cost', value: '48%', note: 'vs 60-65% industry avg' },
                { label: 'Forecast Accuracy', value: '94%', note: 'weekly sales prediction' },
            ],
            highlight: '$3,500/mo saved by automating social media management'
        },
        'salty-zebra': {
            name: 'Salty Zebra Bistro',
            type: 'Fine Dining',
            color: '#00E0FF',
            stats: [
                { label: 'Bev Cost', value: '24%', note: 'craft cocktail program' },
                { label: 'Food Cost', value: '30%', note: 'chef-driven seasonal menu' },
                { label: 'Prime Cost', value: '49%', note: 'vs 60-65% industry avg' },
                { label: 'Gross Margin', value: '22%', note: 'after all controllables' },
            ],
            highlight: 'Tuesday sales up 56% YoY with data-driven specials'
        },
        'locals-pub': {
            name: 'The Locals Pub',
            type: 'Bar & Live Music',
            color: '#FBBF24',
            stats: [
                { label: 'Bev Cost', value: '22%', note: 'high-volume bar program' },
                { label: 'Food Cost', value: '28%', note: 'streamlined pub menu' },
                { label: 'Prime Cost', value: '48%', note: 'vs 60-65% industry avg' },
                { label: 'Labor', value: '19%', note: 'optimized through forecasting' },
            ],
            highlight: 'Real-time sales tracking across bar, kitchen, and events'
        }
    };

    return (
        <section className="relative pt-28 pb-16 md:py-24 lg:py-32 overflow-hidden bg-[#0B0F14] text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left Column: Content */}
                    <div className="text-center lg:text-left">
                        {/* Pre-headline */}
                        <div className="inline-flex items-center gap-2 bg-[#00E0FF]/10 border border-[#00E0FF]/30 rounded-full px-4 py-1.5 mb-6">
                            <TrendingUp className="w-4 h-4 text-[#00E0FF]" />
                            <span className="text-sm text-[#00E0FF] font-medium">From an Operator, Not a Consultant</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-[1.75rem] leading-[1.2] md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] mb-6 md:mb-8 font-display md:leading-tight">
                            The AI Systems Behind
                            <br className="hidden md:block" />
                            <span className="md:hidden"> </span>
                            <span className="text-[#39FF14]">20%+ Profit.</span>
                        </h1>

                        {/* Subhead */}
                        <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed">
                            Built by an operator, for operators. I'll show you exactly how it works.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-col gap-4 md:gap-5 mb-8">
                            <button
                                id="hero-cta-primary"
                                data-cta="discovery-audit"
                                onClick={onOpenModal}
                                className="inline-flex items-center justify-center px-6 py-4 md:px-8 text-base font-semibold text-[#0B0F14] bg-[#39FF14] rounded-lg hover:bg-[#2FE010] transition-all shadow-lg shadow-[#39FF14]/50 cursor-pointer w-full sm:w-auto"
                            >
                                Book $1,000 Discovery Audit
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>

                            <p className="hidden md:flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-400">
                                <ShieldCheck className="w-4 h-4 text-[#39FF14] flex-shrink-0" />
                                <span>Applied to setup if you sign within 30 days</span>
                            </p>
                        </div>

                        {/* Proof Points */}
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
                                        <div className="text-xs text-gray-400 mb-1">Prime Cost</div>
                                        <div className="text-2xl font-bold text-[#39FF14]">48.2%</div>
                                        <div className="text-xs text-green-400">vs 60-65% industry</div>
                                    </div>
                                    <div className="bg-[#1A1F26] rounded-lg p-4">
                                        <div className="text-xs text-gray-400 mb-1">Forecast Accuracy</div>
                                        <div className="text-2xl font-bold text-[#00E0FF]">94%</div>
                                        <div className="text-xs text-gray-500">weekly prediction</div>
                                    </div>
                                    <div className="bg-[#1A1F26] rounded-lg p-4">
                                        <div className="text-xs text-gray-400 mb-1">Labor %</div>
                                        <div className="text-2xl font-bold text-[#F8FAFC]">17.7%</div>
                                        <div className="text-xs text-green-400">vs 28-32% industry</div>
                                    </div>
                                    <div className="bg-[#1A1F26] rounded-lg p-4">
                                        <div className="text-xs text-gray-400 mb-1">Gross Margin</div>
                                        <div className="text-2xl font-bold text-[#FBBF24]">22%</div>
                                        <div className="text-xs text-gray-500">after controllables</div>
                                    </div>
                                </div>

                                {/* Clickable Venues Bar */}
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setSelectedVenue('bagel-boyz')}
                                        className="flex-1 bg-[#39FF14]/20 border border-[#39FF14]/30 rounded px-3 py-2 text-center hover:bg-[#39FF14]/30 transition-all cursor-pointer"
                                    >
                                        <div className="text-xs text-[#39FF14]">Bagel Boyz</div>
                                    </button>
                                    <button
                                        onClick={() => setSelectedVenue('salty-zebra')}
                                        className="flex-1 bg-[#00E0FF]/20 border border-[#00E0FF]/30 rounded px-3 py-2 text-center hover:bg-[#00E0FF]/30 transition-all cursor-pointer"
                                    >
                                        <div className="text-xs text-[#00E0FF]">Salty Zebra</div>
                                    </button>
                                    <button
                                        onClick={() => setSelectedVenue('locals-pub')}
                                        className="flex-1 bg-[#FBBF24]/20 border border-[#FBBF24]/30 rounded px-3 py-2 text-center hover:bg-[#FBBF24]/30 transition-all cursor-pointer"
                                    >
                                        <div className="text-xs text-[#FBBF24]">Locals Pub</div>
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 text-center mt-3">Click a venue to see the numbers</p>
                            </div>

                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#00E0FF]/20 via-transparent to-[#39FF14]/20 rounded-3xl blur-xl opacity-50 -z-10" />
                        </div>
                    </div>

                </div>

                {/* Trust bar */}
                <p className="hidden lg:block text-sm text-gray-500 mt-8">
                    Owner-operator of Bagel Boyz, Salty Zebra Bistro, and The Locals Pub in Jupiter, FL
                </p>

            </div>

            {/* Venue Detail Modal */}
            {selectedVenue && venueData[selectedVenue] && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedVenue(null)}
                    />
                    <div className="relative bg-[#0F1419] border border-white/10 rounded-2xl max-w-md w-full p-6">
                        <button
                            onClick={() => setSelectedVenue(null)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="mb-6">
                            <h3
                                className="text-2xl font-bold mb-1"
                                style={{ color: venueData[selectedVenue].color }}
                            >
                                {venueData[selectedVenue].name}
                            </h3>
                            <p className="text-sm text-gray-400">{venueData[selectedVenue].type}</p>
                        </div>

                        <div className="space-y-4 mb-6">
                            {venueData[selectedVenue].stats.map((stat, index) => (
                                <div key={index} className="flex items-center justify-between py-2 border-b border-white/5">
                                    <div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                        <div className="text-xs text-gray-500">{stat.note}</div>
                                    </div>
                                    <div
                                        className="text-2xl font-bold"
                                        style={{ color: venueData[selectedVenue].color }}
                                    >
                                        {stat.value}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div
                            className="rounded-lg p-4 text-sm"
                            style={{
                                backgroundColor: `${venueData[selectedVenue].color}15`,
                                borderLeft: `3px solid ${venueData[selectedVenue].color}`
                            }}
                        >
                            <div className="flex items-start gap-2">
                                <TrendingUp className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: venueData[selectedVenue].color }} />
                                <span className="text-gray-300">{venueData[selectedVenue].highlight}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default HeroSection;
