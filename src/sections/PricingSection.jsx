import React from 'react';
import { ArrowRight, Check, Eye, FileSearch, Shield, BarChart3, Megaphone, MapPin, Cpu, Clock } from 'lucide-react';

const PricingSection = ({ onOpenModal }) => {
    const packages = [
        {
            name: "Essentials",
            setup: "$2,500",
            monthly: "$1,500",
            period: "/mo",
            commitment: "3-month minimum",
            description: "Core visibility across all your locations",
            popular: false,
            timePerMonth: "4-6 hrs of my time",
            features: [
                { icon: Eye, text: "Weekly dashboard (all locations)" },
                { icon: BarChart3, text: "Budget tracking + prime cost alerts" },
                { icon: FileSearch, text: "Contract audit (initial + annual)" },
                { icon: Shield, text: "Review monitoring + response drafts" },
                { icon: Check, text: "Monthly strategy call (30 min)" },
            ],
            cta: "Start with Audit"
        },
        {
            name: "Growth",
            setup: "$4,000",
            monthly: "$2,500",
            period: "/mo",
            commitment: "3-month minimum",
            description: "Full operational intelligence suite",
            popular: true,
            timePerMonth: "8-10 hrs of my time",
            features: [
                { icon: Check, text: "Everything in Essentials" },
                { icon: Cpu, text: "Full CFO Agent (weekly P&L analysis)" },
                { icon: Megaphone, text: "Content Engine (2 campaigns/month)" },
                { icon: MapPin, text: "Growth Mapper (quarterly deep dive)" },
                { icon: Check, text: "Bi-weekly strategy calls" },
            ],
            cta: "Start with Audit"
        },
        {
            name: "Scale",
            setup: "$6,000",
            monthly: "$4,000",
            period: "/mo",
            commitment: "3-month minimum",
            description: "Priority support + custom integrations",
            popular: false,
            timePerMonth: "12-15 hrs of my time",
            features: [
                { icon: Check, text: "Everything in Growth" },
                { icon: Check, text: "Custom dashboard integrations" },
                { icon: Check, text: "Google Ads management" },
                { icon: Check, text: "Same-day support response" },
                { icon: Check, text: "Weekly strategy calls + exit planning" },
            ],
            cta: "Start with Audit"
        }
    ];

    return (
        <section className="py-20 bg-surface/30 text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Entry Offer Banner */}
                <div className="mb-16 text-center">
                    <div className="inline-block bg-gradient-to-r from-[#00E0FF]/20 to-[#39FF14]/20 border border-[#00E0FF]/50 rounded-2xl p-8 max-w-2xl">
                        <div className="text-sm font-semibold text-[#00E0FF] uppercase tracking-wider mb-2">
                            Start Here
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">
                            Discovery Audit
                        </h3>
                        <div className="text-4xl font-bold text-[#39FF14] mb-2">
                            $1,000
                            <span className="text-lg text-gray-400 font-normal ml-2">
                                (applied to setup)
                            </span>
                        </div>
                        <p className="text-gray-300 mb-4 max-w-lg mx-auto">
                            I audit one location—contracts, costs, opportunities. You get a findings report
                            with quantified savings and a dashboard mockup showing what you'd see.
                        </p>
                        <ul className="text-left max-w-md mx-auto mb-6 space-y-2">
                            <li className="flex items-center gap-2 text-sm text-gray-300">
                                <Check className="w-4 h-4 text-[#39FF14]" />
                                Contract analysis + negotiation scripts
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-300">
                                <Check className="w-4 h-4 text-[#39FF14]" />
                                POS data deep dive (sales, labor, product mix)
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-300">
                                <Check className="w-4 h-4 text-[#39FF14]" />
                                Top 5 opportunities ranked by ROI
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-300">
                                <Check className="w-4 h-4 text-[#39FF14]" />
                                Dashboard mockup for your locations
                            </li>
                        </ul>
                        <button
                            onClick={onOpenModal}
                            data-cta="discovery-audit"
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0B0F14] bg-[#00E0FF] rounded-lg hover:bg-[#00C4E0] transition-all"
                        >
                            Book Discovery Audit
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                        <p className="text-xs text-gray-500 mt-4">
                            If you sign within 30 days, the $1,000 applies to your setup fee.
                        </p>
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Monthly Packages
                </h2>
                <p className="text-center text-gray-400 mb-4 max-w-2xl mx-auto">
                    Not SaaS. Not consulting. The same operational intelligence systems running my
                    $5M restaurant portfolio—installed in your business.
                </p>
                <p className="text-center text-sm text-gray-500 mb-12">
                    All packages start with a Discovery Audit. No commitment until you see the findings.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`bg-[#0B0F14] border-2 rounded-xl p-6 relative flex flex-col ${
                                pkg.popular
                                    ? 'border-[#39FF14] shadow-lg shadow-[#39FF14]/20'
                                    : 'border-white/10'
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#39FF14] text-[#0B0F14] px-4 py-1 rounded-full text-sm font-semibold">
                                    Most Popular
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold mb-1 text-[#F8FAFC]">
                                    {pkg.name}
                                </h3>
                                <p className="text-sm text-gray-400 mb-4">
                                    {pkg.description}
                                </p>

                                <div className="flex items-baseline justify-center gap-2 mb-1">
                                    <span className="text-4xl font-bold text-[#39FF14]">{pkg.monthly}</span>
                                    <span className="text-gray-400">{pkg.period}</span>
                                </div>
                                <div className="text-sm text-gray-500 mb-2">
                                    + {pkg.setup} setup (one-time)
                                </div>
                                <div className="text-xs text-gray-500">
                                    {pkg.commitment}
                                </div>
                            </div>

                            {/* Time indicator */}
                            <div className="flex items-center justify-center gap-2 mb-4 py-2 px-3 bg-[#00E0FF]/10 rounded-lg">
                                <Clock className="w-4 h-4 text-[#00E0FF]" />
                                <span className="text-xs text-[#00E0FF]">{pkg.timePerMonth}</span>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-6 flex-grow">
                                {pkg.features.map((feature, fIndex) => {
                                    const IconComponent = feature.icon;
                                    return (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            <IconComponent className="w-5 h-5 text-[#00E0FF] flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-300">{feature.text}</span>
                                        </li>
                                    );
                                })}
                            </ul>

                            <button
                                onClick={onOpenModal}
                                data-cta="discovery-audit"
                                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                                    pkg.popular
                                        ? 'bg-[#39FF14] text-[#0B0F14] hover:bg-[#2FE010] shadow-lg shadow-[#39FF14]/30'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                            >
                                {pkg.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Value Comparison */}
                <div className="bg-[#0F1419] border border-white/10 rounded-xl p-8 mb-8">
                    <h3 className="text-xl font-bold text-center mb-6">Why This Costs Less Than You Think</h3>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-2xl font-bold text-gray-500 line-through mb-1">$150K/yr</div>
                            <div className="text-sm text-gray-400">Full-time CFO</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-500 line-through mb-1">$10K/project</div>
                            <div className="text-sm text-gray-400">Restaurant consultant</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-[#39FF14] mb-1">$2,500/mo</div>
                            <div className="text-sm text-gray-400">Both + the systems</div>
                        </div>
                    </div>
                </div>

                {/* Multi-location note */}
                <div className="text-center mb-8">
                    <p className="text-sm text-gray-400">
                        Running multiple locations?{' '}
                        <span className="text-[#00E0FF]">All locations included in your package</span>
                        —no per-location fees.
                    </p>
                </div>

                {/* Local Demo */}
                <div className="text-center border-t border-white/10 pt-8">
                    <p className="text-gray-400 mb-2">
                        Want to see it running live?
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="text-white font-medium">Come to Jupiter, FL.</span>{' '}
                        I'll walk you through the dashboards at Bagel Boyz or Salty Zebra and show you exactly what you'd get.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
