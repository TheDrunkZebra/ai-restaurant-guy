import React from 'react';
import { ArrowRight, ArrowLeft, Check, Zap, Phone, MessageSquare } from 'lucide-react';

const StepCustomize = ({ formData, updateFormData, totals, onNext, onBack }) => {
    const addOns = [
        {
            id: 'googleAds',
            icon: Zap,
            name: 'Google Ads Management',
            price: 500,
            description: 'Done-for-you local ads with full reporting. Average ROI: 4-6x.',
            benefit: 'Most restaurants see 4-6x return on ad spend',
        },
        {
            id: 'priorityResponse',
            icon: MessageSquare,
            name: 'Priority Response',
            price: 300,
            description: 'Same-day turnaround on all requests instead of 48-72 hours.',
            benefit: 'For when you need answers fast',
        },
        {
            id: 'strategyCall',
            icon: Phone,
            name: 'Monthly Strategy Call',
            price: 200,
            description: 'Extra 30-minute 1:1 session each month beyond package allocation.',
            benefit: 'Some operators just need to talk it through',
        },
    ];

    const toggleAddOn = (id) => {
        updateFormData({
            addOns: {
                ...formData.addOns,
                [id]: !formData.addOns[id],
            },
        });
    };

    const selectedPackageName = {
        essentials: 'Essentials',
        growth: 'Growth',
        scale: 'Scale',
    }[formData.selectedPackage];

    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">
                    Customize Your {selectedPackageName} Package
                </h3>
                <p className="text-gray-400">
                    Add what you need. Skip what you don't. No pressure.
                </p>
            </div>

            {/* Current Package Summary */}
            <div className="bg-[#0F1419] border border-white/10 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <span className="text-sm text-gray-400">Base Package:</span>
                        <span className="ml-2 font-semibold text-[#F8FAFC]">{selectedPackageName}</span>
                    </div>
                    <div className="text-right">
                        <div className="text-lg font-bold text-[#39FF14]">
                            ${totals.monthly.toLocaleString()}/mo
                        </div>
                        <div className="text-xs text-gray-500">
                            + ${totals.setup.toLocaleString()} setup
                        </div>
                    </div>
                </div>
            </div>

            {/* Add-ons */}
            <div>
                <h4 className="text-sm font-medium text-gray-400 mb-4">Optional Add-Ons</h4>
                <div className="space-y-4">
                    {addOns.map(addon => {
                        const Icon = addon.icon;
                        const isSelected = formData.addOns[addon.id];

                        // Skip Google Ads add-on for Scale package (already included)
                        if (addon.id === 'googleAds' && formData.selectedPackage === 'scale') {
                            return (
                                <div
                                    key={addon.id}
                                    className="p-4 rounded-xl border border-white/5 bg-white/5"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-[#39FF14]" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-medium text-gray-500">{addon.name}</div>
                                            <div className="text-xs text-[#39FF14]">Included in Scale</div>
                                        </div>
                                        <Check className="w-5 h-5 text-[#39FF14]" />
                                    </div>
                                </div>
                            );
                        }

                        // Skip Priority Response for Scale (same-day already included)
                        if (addon.id === 'priorityResponse' && formData.selectedPackage === 'scale') {
                            return (
                                <div
                                    key={addon.id}
                                    className="p-4 rounded-xl border border-white/5 bg-white/5"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-[#39FF14]" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-medium text-gray-500">{addon.name}</div>
                                            <div className="text-xs text-[#39FF14]">Included in Scale</div>
                                        </div>
                                        <Check className="w-5 h-5 text-[#39FF14]" />
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <button
                                key={addon.id}
                                onClick={() => toggleAddOn(addon.id)}
                                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                                    isSelected
                                        ? 'border-[#39FF14] bg-[#39FF14]/5'
                                        : 'border-white/10 hover:border-white/30'
                                }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                            isSelected ? 'bg-[#39FF14]/20' : 'bg-white/10'
                                        }`}
                                    >
                                        <Icon
                                            className={`w-5 h-5 ${
                                                isSelected ? 'text-[#39FF14]' : 'text-[#00E0FF]'
                                            }`}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-medium text-[#F8FAFC]">{addon.name}</span>
                                            <span className="text-[#39FF14] font-semibold">
                                                +${addon.price}/mo
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-400 mb-2">{addon.description}</p>
                                        <p className="text-xs text-[#00E0FF]">{addon.benefit}</p>
                                    </div>
                                    <div
                                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                            isSelected
                                                ? 'border-[#39FF14] bg-[#39FF14]'
                                                : 'border-white/30'
                                        }`}
                                    >
                                        {isSelected && <Check className="w-4 h-4 text-[#0B0F14]" />}
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Running Total */}
            <div className="bg-gradient-to-r from-[#39FF14]/10 to-[#00E0FF]/10 border border-[#39FF14]/30 rounded-xl p-5">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-sm text-gray-400 mb-1">Your Monthly Investment</div>
                        <div className="text-3xl font-bold text-[#39FF14]">
                            ${totals.monthly.toLocaleString()}/mo
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-gray-400 mb-1">3-Month Total</div>
                        <div className="text-xl font-semibold text-[#F8FAFC]">
                            ${totals.threeMonthTotal.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">
                            (includes ${totals.setup.toLocaleString()} setup)
                        </div>
                    </div>
                </div>
            </div>

            {/* Note about locations */}
            <p className="text-center text-sm text-gray-500">
                All your locations are included—no per-location fees.
            </p>

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
                    See Your Investment
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default StepCustomize;
