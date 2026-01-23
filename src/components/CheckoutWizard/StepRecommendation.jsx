import React, { useEffect } from 'react';
import { ArrowRight, ArrowLeft, Check, Star, Clock, TrendingUp } from 'lucide-react';

const StepRecommendation = ({ formData, updateFormData, recommendedPackage, onNext, onBack }) => {
    const packages = [
        {
            id: 'essentials',
            name: 'Essentials',
            description: 'Core visibility across your locations',
            setup: 2500,
            monthly: 1500,
            hours: '4-6',
            features: [
                'Weekly dashboard (all locations)',
                'Budget tracking + prime cost alerts',
                'Contract audit (initial + annual)',
                'Review monitoring + response drafts',
                'Monthly strategy call (30 min)',
            ],
        },
        {
            id: 'growth',
            name: 'Growth',
            description: 'Full operational intelligence suite',
            setup: 4000,
            monthly: 2500,
            hours: '8-10',
            popular: true,
            features: [
                'Everything in Essentials',
                'Full CFO Agent (weekly P&L analysis)',
                'Content Engine (2 campaigns/month)',
                'Growth Mapper (quarterly deep dive)',
                'Bi-weekly strategy calls',
            ],
        },
        {
            id: 'scale',
            name: 'Scale',
            description: 'Priority support + custom integrations',
            setup: 6000,
            monthly: 4000,
            hours: '12-15',
            features: [
                'Everything in Growth',
                'Custom dashboard integrations',
                'Google Ads management',
                'Same-day support response',
                'Weekly strategy calls + exit planning',
            ],
        },
    ];

    // Set recommended package on mount
    useEffect(() => {
        if (!formData.selectedPackage) {
            updateFormData({ selectedPackage: recommendedPackage });
        }
    }, []);

    const getPainPointLabel = (value) => {
        const labels = {
            financials: 'accurate financials',
            reviews: 'review management',
            vendors: 'vendor costs',
            marketing: 'consistent marketing',
            time: 'time management',
            scale: 'scaling operations',
        };
        return labels[value] || value;
    };

    const getEstimatedSavings = () => {
        const locations = formData.locations;
        const base = locations === '1' ? 2000 : locations === '2-3' ? 4000 : locations === '4-10' ? 8000 : 15000;
        return { low: base, high: base * 1.8 };
    };

    const savings = getEstimatedSavings();

    return (
        <div className="space-y-8">
            {/* Personalized Summary */}
            <div className="bg-[#0F1419] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#F8FAFC] mb-4">
                    Your Operational Snapshot
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-xs text-gray-400 mb-1">Locations</div>
                        <div className="text-lg font-semibold text-[#F8FAFC]">{formData.locations}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-xs text-gray-400 mb-1">Admin Hours/Week</div>
                        <div className="text-lg font-semibold text-[#F8FAFC]">{formData.adminHours}</div>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="text-xs text-gray-400 mb-2">Top Pain Points</div>
                    <div className="flex flex-wrap gap-2">
                        {formData.painPoints?.map(point => (
                            <span
                                key={point}
                                className="px-3 py-1 bg-[#00E0FF]/10 border border-[#00E0FF]/30 rounded-full text-sm text-[#00E0FF]"
                            >
                                {getPainPointLabel(point)}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                    <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-[#39FF14] mt-0.5" />
                        <div>
                            <div className="text-sm text-gray-400 mb-1">
                                Based on restaurants like yours, you're likely leaving
                            </div>
                            <div className="text-2xl font-bold text-[#39FF14]">
                                ${savings.low.toLocaleString()}-${savings.high.toLocaleString()}/month
                            </div>
                            <div className="text-sm text-gray-500">
                                on the table from vendor overcharges, labor inefficiencies, and missed opportunities
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recommended Badge */}
            <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full px-4 py-2">
                    <Star className="w-4 h-4 text-[#39FF14]" />
                    <span className="text-sm text-[#39FF14] font-medium">
                        Recommended for you: {packages.find(p => p.id === recommendedPackage)?.name}
                    </span>
                </div>
            </div>

            {/* Package Selection */}
            <div className="grid md:grid-cols-3 gap-4">
                {packages.map(pkg => (
                    <button
                        key={pkg.id}
                        onClick={() => updateFormData({ selectedPackage: pkg.id })}
                        className={`relative text-left p-5 rounded-xl border-2 transition-all ${
                            formData.selectedPackage === pkg.id
                                ? 'border-[#39FF14] bg-[#39FF14]/5'
                                : pkg.id === recommendedPackage
                                ? 'border-[#00E0FF]/50 hover:border-[#00E0FF]'
                                : 'border-white/10 hover:border-white/30'
                        }`}
                    >
                        {pkg.popular && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#39FF14] text-[#0B0F14] px-3 py-0.5 rounded-full text-xs font-semibold">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-3">
                            <h4 className="text-lg font-semibold text-[#F8FAFC]">{pkg.name}</h4>
                            <p className="text-xs text-gray-500">{pkg.description}</p>
                        </div>

                        <div className="mb-4">
                            <div className="text-2xl font-bold text-[#39FF14]">
                                ${pkg.monthly.toLocaleString()}
                                <span className="text-sm text-gray-400 font-normal">/mo</span>
                            </div>
                            <div className="text-xs text-gray-500">
                                + ${pkg.setup.toLocaleString()} setup
                            </div>
                        </div>

                        <div className="flex items-center gap-1 text-xs text-[#00E0FF] mb-4">
                            <Clock className="w-3 h-3" />
                            <span>{pkg.hours} hrs/mo of my time</span>
                        </div>

                        <ul className="space-y-2">
                            {pkg.features.slice(0, 3).map((feature, index) => (
                                <li key={index} className="flex items-start gap-2 text-xs text-gray-400">
                                    <Check className="w-3 h-3 text-[#39FF14] mt-0.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                            {pkg.features.length > 3 && (
                                <li className="text-xs text-gray-500">
                                    +{pkg.features.length - 3} more
                                </li>
                            )}
                        </ul>

                        {formData.selectedPackage === pkg.id && (
                            <div className="absolute top-3 right-3">
                                <div className="w-6 h-6 rounded-full bg-[#39FF14] flex items-center justify-center">
                                    <Check className="w-4 h-4 text-[#0B0F14]" />
                                </div>
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* Navigation */}
            <div className="flex gap-4 pt-4">
                <button
                    onClick={onBack}
                    className="px-6 py-3 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all flex items-center gap-2"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </button>
                <button
                    onClick={onNext}
                    className="flex-1 py-3 rounded-lg bg-[#39FF14] text-[#0B0F14] font-semibold hover:bg-[#2FE010] transition-all flex items-center justify-center gap-2"
                >
                    Customize Your Package
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default StepRecommendation;
