import React from 'react';
import {
    Eye,
    DollarSign,
    FileSearch,
    Shield,
    Megaphone,
    MapPin,
    ArrowRight
} from 'lucide-react';

const systems = [
    {
        icon: Eye,
        title: "Command Center",
        description: "One dashboard showing all locations, all metrics. What I see every Monday morning.",
        highlight: true,
        proof: "This is the main dashboard running my 3 restaurants"
    },
    {
        icon: DollarSign,
        title: "CFO Agent",
        description: "Weekly budget reports, prime cost tracking, variance alerts. Know your numbers instantly.",
        highlight: false,
        proof: "Tracks $4.33M across my portfolio"
    },
    {
        icon: FileSearch,
        title: "Contract Killer",
        description: "Audit every vendor contract, generate negotiation scripts. Find money you're leaving on the table.",
        highlight: false,
        proof: "$5k-$20k/year savings found per client"
    },
    {
        icon: Shield,
        title: "Reputation Shield",
        description: "AI review responses, sentiment tracking, win-back flows for unhappy customers.",
        highlight: false,
        proof: "Maintains 4.5+ stars across all venues"
    },
    {
        icon: Megaphone,
        title: "Content Engine",
        description: "Blog + GMB + Email automation in your brand voice. Marketing on autopilot.",
        highlight: false,
        proof: "Powers all 3 restaurant marketing channels"
    },
    {
        icon: MapPin,
        title: "Growth Mapper",
        description: "Quantified vertical opportunities ranked by investment, risk, and timeline.",
        highlight: false,
        proof: "$950K+ opportunities identified for my portfolio"
    }
];

const ShopTheSystems = ({ onOpenModal }) => {
    return (
        <section className="py-20 bg-[#0B0F14] text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full px-4 py-1.5 mb-4">
                        <span className="text-sm text-[#39FF14] font-medium">The Systems Running My $5M Portfolio</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        What You're Getting Installed
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        These aren't demos or mockups. This is the actual operational intelligence infrastructure
                        running Bagel Boyz, Salty Zebra Bistro, and The Locals Pub right now.
                    </p>
                </div>

                {/* Featured System - Command Center */}
                <div className="mb-8">
                    <div className="bg-gradient-to-r from-[#00E0FF]/10 to-[#39FF14]/10 border border-[#00E0FF]/30 rounded-2xl p-8 md:p-10">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#00E0FF]/20 flex items-center justify-center">
                                        <Eye className="w-6 h-6 text-[#00E0FF]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Command Center</h3>
                                        <span className="text-sm text-[#00E0FF]">The Dashboard That Closes Deals</span>
                                    </div>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    "This is what I see every Monday morning. Want this for your restaurants?"
                                </p>
                                <p className="text-gray-400 text-sm mb-6">
                                    One screen showing revenue, prime cost, labor %, forecast accuracy, and growth
                                    opportunities across all your locations. No more driving to check on things.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2 text-sm text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full"></span>
                                        Real-time data from Toast/Square/7shifts
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full"></span>
                                        Weekly targets with variance tracking
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full"></span>
                                        13-month seasonality forecasting
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-[#0F1419] rounded-xl p-6 border border-white/10">
                                {/* Mini Dashboard Preview */}
                                <div className="text-xs text-gray-500 mb-4">LIVE PREVIEW</div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-[#1A1F26] rounded-lg p-3">
                                        <div className="text-xs text-gray-400">This Week</div>
                                        <div className="text-lg font-bold text-[#39FF14]">$83.4K</div>
                                    </div>
                                    <div className="bg-[#1A1F26] rounded-lg p-3">
                                        <div className="text-xs text-gray-400">Prime Cost</div>
                                        <div className="text-lg font-bold text-[#00E0FF]">55.2%</div>
                                    </div>
                                    <div className="bg-[#1A1F26] rounded-lg p-3">
                                        <div className="text-xs text-gray-400">Forecast Acc.</div>
                                        <div className="text-lg font-bold text-[#F8FAFC]">94%</div>
                                    </div>
                                    <div className="bg-[#1A1F26] rounded-lg p-3">
                                        <div className="text-xs text-gray-400">Opportunities</div>
                                        <div className="text-lg font-bold text-[#FBBF24]">$385K</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Systems Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
                    {systems.slice(1).map((system, index) => {
                        const IconComponent = system.icon;
                        return (
                            <div
                                key={index}
                                className="bg-surface/50 border border-white/10 rounded-xl p-5 hover:border-[#00E0FF]/50 transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#00E0FF]/10 flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-[#00E0FF]/20">
                                        <IconComponent className="w-5 h-5 text-[#00E0FF] transition-transform group-hover:scale-110" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold mb-1 text-[#F8FAFC]">
                                            {system.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 leading-relaxed mb-2">
                                            {system.description}
                                        </p>
                                        <p className="text-xs text-[#39FF14]">
                                            {system.proof}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <p className="text-gray-400 mb-4">
                        Want to see YOUR data in these dashboards?
                    </p>
                    <button
                        onClick={onOpenModal}
                        data-cta="discovery-audit"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0B0F14] bg-[#39FF14] rounded-lg hover:bg-[#2FE010] transition-all shadow-lg shadow-[#39FF14]/30"
                    >
                        Book Discovery Audit
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ShopTheSystems;
