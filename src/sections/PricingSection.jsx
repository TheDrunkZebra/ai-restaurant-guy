import React from 'react';
import { ArrowRight, Check, FileSearch, Shield, BarChart3, Megaphone, Phone, Eye } from 'lucide-react';

const PricingSection = ({ onOpenModal }) => {
    const packages = [
        {
            name: "Foundation",
            setup: "$2,000",
            monthly: "$2,000",
            period: "/mo",
            commitment: "6-month minimum",
            target: "$1.5M–$2.5M revenue",
            promise: "2x monthly fee in savings—or we work free",
            popular: false,
            features: [
                { icon: FileSearch, text: "Profit Hunter (Contract Audits + Invoice Processing)" },
                { icon: Shield, text: "Reputation Shield (Review Automation + Sentiment)" },
                { icon: BarChart3, text: "Weekly Budget Generation" },
            ],
            cta: "Start Foundation"
        },
        {
            name: "Growth",
            setup: "$3,500",
            monthly: "$4,000",
            period: "/mo",
            commitment: "6-month minimum",
            target: "$2.5M–$4M revenue",
            promise: "Find $10k+ savings + systemize ops in 60 days",
            popular: true,
            features: [
                { icon: Check, text: "Everything in Foundation" },
                { icon: BarChart3, text: "Full Financial Intelligence Suite" },
                { icon: Megaphone, text: "AI Content Workflow + Newsletter" },
                { icon: Check, text: "Revenue Recovery Audit" },
                { icon: Check, text: "Menu Trends Analysis" },
            ],
            cta: "Start Growth"
        },
        {
            name: "Scale",
            setup: "$5,000",
            monthly: "$5,500",
            period: "/mo",
            commitment: "6-month minimum",
            target: "Multi-unit / Absentee Owners",
            promise: "30% time reduction + full ops visibility in 90 days",
            popular: false,
            features: [
                { icon: Check, text: "Everything in Growth" },
                { icon: Phone, text: "AI Voice Phone System" },
                { icon: Eye, text: "Vision AI Auditor" },
                { icon: Megaphone, text: "Google Ads Optimizer" },
                { icon: Check, text: "Priority Support (same-day response)" },
            ],
            cta: "Start Scale"
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
                            7-Day Savings Audit
                        </h3>
                        <div className="text-4xl font-bold text-[#39FF14] mb-2">
                            $500
                            <span className="text-lg text-gray-400 font-normal ml-2">
                                (refundable toward setup)
                            </span>
                        </div>
                        <p className="text-gray-300 mb-4 max-w-lg mx-auto">
                            We audit your vendor contracts and deliver a Found Money Report.
                            Typical finds: $5k–$15k in year-one savings. If we find nothing, you pay nothing.
                        </p>
                        <button
                            onClick={onOpenModal}
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0B0F14] bg-[#00E0FF] rounded-lg hover:bg-[#00C4E0] transition-all"
                        >
                            Get Your Savings Audit
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Ongoing Partnership Tiers
                </h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    Done-for-you AI operations. We process the data. You make better decisions.
                    <br />
                    <span className="text-[#39FF14] font-semibold">2x ROI guarantee on every tier.</span>
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
                                <div className="text-sm text-[#00E0FF] mb-4">
                                    {pkg.target}
                                </div>

                                <div className="flex items-baseline justify-center gap-2 mb-1">
                                    <span className="text-4xl font-bold text-[#39FF14]">{pkg.monthly}</span>
                                    <span className="text-gray-400">{pkg.period}</span>
                                </div>
                                <div className="text-sm text-gray-500 mb-2">
                                    + {pkg.setup} setup
                                </div>
                                <div className="text-xs text-gray-500">
                                    {pkg.commitment}
                                </div>
                            </div>

                            {/* Promise Badge */}
                            <div className="bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-lg px-3 py-2 mb-6 text-center">
                                <span className="text-sm text-[#39FF14] font-medium">
                                    {pkg.promise}
                                </span>
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

                {/* Custom Builds */}
                <div className="text-center border-t border-white/10 pt-8">
                    <p className="text-gray-400 mb-2">
                        Need a custom integration or specific workflow?
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="text-white font-medium">Custom Builds:</span> $2k–$20k depending on scope.
                        We design it. We build it. You own it.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
