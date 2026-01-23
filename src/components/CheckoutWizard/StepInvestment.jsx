import React from 'react';
import { ArrowLeft, Check, Shield, Calendar, TrendingUp, Clock, DollarSign } from 'lucide-react';

const StepInvestment = ({ formData, updateFormData, totals, onBack, onClose }) => {
    const getROIEstimates = () => {
        const locations = formData.locations;
        const multiplier = locations === '1' ? 1 : locations === '2-3' ? 2.5 : locations === '4-10' ? 6 : 12;

        return {
            vendorSavings: { low: 400 * multiplier, high: 750 * multiplier },
            laborOptimization: { low: 200 * multiplier, high: 450 * multiplier },
            reviewDriven: { low: 150 * multiplier, high: 300 * multiplier },
            timeSaved: locations === '1' ? '8-12' : locations === '2-3' ? '12-18' : '15-25',
        };
    };

    const roi = getROIEstimates();
    const totalLowROI = roi.vendorSavings.low + roi.laborOptimization.low + roi.reviewDriven.low;
    const totalHighROI = roi.vendorSavings.high + roi.laborOptimization.high + roi.reviewDriven.high;

    const handleFullCheckout = () => {
        // TODO: Integrate with Stripe Checkout
        // For now, show alert with next steps
        alert('Stripe integration coming soon! For now, book a Discovery Audit to get started.');
    };

    const handleDiscoveryAudit = () => {
        // TODO: Redirect to Stripe for $1,000 audit
        // For now, close modal and trigger the main CTA modal
        onClose();
        // The main site modal will handle booking
    };

    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">
                    Your Investment
                </h3>
                <p className="text-gray-400">
                    Here's what it costs—and what it typically returns.
                </p>
            </div>

            {/* Investment Summary */}
            <div className="bg-[#0F1419] border border-white/10 rounded-xl p-6">
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <div className="text-sm text-gray-400 mb-1">Today's Setup</div>
                        <div className="text-3xl font-bold text-[#F8FAFC]">
                            ${totals.setup.toLocaleString()}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-400 mb-1">Monthly</div>
                        <div className="text-3xl font-bold text-[#39FF14]">
                            ${totals.monthly.toLocaleString()}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400">3-Month Minimum Total</span>
                        <span className="text-xl font-bold text-[#F8FAFC]">
                            ${totals.threeMonthTotal.toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>

            {/* ROI Calculator */}
            <div className="bg-gradient-to-br from-[#39FF14]/5 to-[#00E0FF]/5 border border-[#39FF14]/20 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-[#39FF14]" />
                    <h4 className="font-semibold text-[#F8FAFC]">What This Typically Returns</h4>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                    Based on {formData.locations === '1' ? 'single' : formData.locations}-location restaurants:
                </p>

                <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-[#00E0FF]" />
                            <span className="text-sm text-gray-300">Vendor savings (Contract Killer)</span>
                        </div>
                        <span className="text-sm text-[#39FF14] font-medium">
                            ${roi.vendorSavings.low.toLocaleString()}-${roi.vendorSavings.high.toLocaleString()}/mo
                        </span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-[#00E0FF]" />
                            <span className="text-sm text-gray-300">Labor optimization (CFO Agent)</span>
                        </div>
                        <span className="text-sm text-[#39FF14] font-medium">
                            ${roi.laborOptimization.low.toLocaleString()}-${roi.laborOptimization.high.toLocaleString()}/mo
                        </span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-[#00E0FF]" />
                            <span className="text-sm text-gray-300">Review-driven covers (Reputation)</span>
                        </div>
                        <span className="text-sm text-[#39FF14] font-medium">
                            ${roi.reviewDriven.low.toLocaleString()}-${roi.reviewDriven.high.toLocaleString()}/mo
                        </span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#00E0FF]" />
                            <span className="text-sm text-gray-300">Your time back</span>
                        </div>
                        <span className="text-sm text-[#39FF14] font-medium">
                            {roi.timeSaved} hrs/week
                        </span>
                    </div>
                </div>

                <div className="bg-[#0B0F14] rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400">Conservative Monthly ROI</span>
                        <span className="text-xl font-bold text-[#39FF14]">
                            ${totalLowROI.toLocaleString()}-${totalHighROI.toLocaleString()}
                        </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                        vs. ${totals.monthly.toLocaleString()}/mo investment
                    </div>
                </div>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                    <Check className="w-5 h-5 text-[#39FF14] mt-0.5" />
                    <div className="text-sm text-gray-300">3-month minimum (not a 12-month trap)</div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                    <Check className="w-5 h-5 text-[#39FF14] mt-0.5" />
                    <div className="text-sm text-gray-300">All locations included</div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                    <Check className="w-5 h-5 text-[#39FF14] mt-0.5" />
                    <div className="text-sm text-gray-300">Cancel anytime after 3 months</div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                    <Check className="w-5 h-5 text-[#39FF14] mt-0.5" />
                    <div className="text-sm text-gray-300">I answer my own emails</div>
                </div>
            </div>

            {/* Guarantee */}
            <div className="bg-[#00E0FF]/10 border border-[#00E0FF]/30 rounded-xl p-5">
                <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-[#00E0FF] flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold text-[#F8FAFC] mb-2">60-Day Visibility Guarantee</h4>
                        <p className="text-sm text-gray-300">
                            If you don't have clearer visibility into your operations after 60 days—real dashboards,
                            real insights, real time saved—I'll refund your setup fee. No hoops.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTAs */}
            <div className="space-y-4 pt-4">
                <button
                    onClick={handleFullCheckout}
                    className="w-full py-4 rounded-lg bg-[#39FF14] text-[#0B0F14] font-semibold hover:bg-[#2FE010] transition-all flex items-center justify-center gap-2 text-lg"
                >
                    Get Started Now
                    <Calendar className="w-5 h-5" />
                </button>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-[#0B0F14] text-gray-500">or</span>
                    </div>
                </div>

                <button
                    onClick={handleDiscoveryAudit}
                    className="w-full py-4 rounded-lg border border-[#00E0FF] text-[#00E0FF] font-semibold hover:bg-[#00E0FF]/10 transition-all"
                >
                    Start with Discovery Audit — $1,000
                </button>
                <p className="text-center text-xs text-gray-500">
                    Applied to setup if you sign within 30 days
                </p>
            </div>

            {/* Back button */}
            <div className="pt-2">
                <button
                    onClick={onBack}
                    className="text-gray-400 hover:text-white transition-all flex items-center gap-2 text-sm"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to customize
                </button>
            </div>
        </div>
    );
};

export default StepInvestment;
