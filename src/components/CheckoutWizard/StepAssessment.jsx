import React from 'react';
import { ArrowRight, MapPin, Clock, AlertCircle, Wrench } from 'lucide-react';

const StepAssessment = ({ formData, updateFormData, onNext }) => {
    const locationOptions = [
        { value: '1', label: '1 location' },
        { value: '2-3', label: '2-3 locations' },
        { value: '4-10', label: '4-10 locations' },
        { value: '10+', label: '10+ locations' },
    ];

    const painPointOptions = [
        { value: 'financials', label: "Can't get accurate financials without digging" },
        { value: 'reviews', label: 'Negative reviews are hurting us' },
        { value: 'vendors', label: 'Vendors are overcharging (I know it)' },
        { value: 'marketing', label: 'Marketing is inconsistent or nonexistent' },
        { value: 'time', label: "I'm working IN the business, not ON it" },
        { value: 'scale', label: "Want to grow but can't scale myself" },
    ];

    const adminHoursOptions = [
        { value: '5-10', label: '5-10 hours' },
        { value: '10-20', label: '10-20 hours' },
        { value: '20-30', label: '20-30 hours' },
        { value: '30+', label: '30+ hours (or lost count)' },
    ];

    const techStackOptions = [
        { value: 'toast', label: 'Toast POS' },
        { value: 'square', label: 'Square POS' },
        { value: 'other-pos', label: 'Other POS' },
        { value: 'quickbooks', label: 'QuickBooks' },
        { value: 'google-business', label: 'Google Business Profile' },
    ];

    const togglePainPoint = (value) => {
        const current = formData.painPoints || [];
        if (current.includes(value)) {
            updateFormData({ painPoints: current.filter(p => p !== value) });
        } else if (current.length < 2) {
            updateFormData({ painPoints: [...current, value] });
        }
    };

    const toggleTechStack = (value) => {
        const current = formData.techStack || [];
        if (current.includes(value)) {
            updateFormData({ techStack: current.filter(t => t !== value) });
        } else {
            updateFormData({ techStack: [...current, value] });
        }
    };

    const canProceed = formData.locations && formData.painPoints?.length > 0 && formData.adminHours;

    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">
                    Let's understand your operation
                </h3>
                <p className="text-gray-400">
                    Takes about 2 minutes. No email required yet.
                </p>
            </div>

            {/* Locations */}
            <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#F8FAFC] mb-3">
                    <MapPin className="w-4 h-4 text-[#00E0FF]" />
                    How many locations do you operate?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {locationOptions.map(option => (
                        <button
                            key={option.value}
                            onClick={() => updateFormData({ locations: option.value })}
                            className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                                formData.locations === option.value
                                    ? 'border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14]'
                                    : 'border-white/10 text-gray-400 hover:border-white/30'
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Pain Points */}
            <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#F8FAFC] mb-3">
                    <AlertCircle className="w-4 h-4 text-[#00E0FF]" />
                    What's your biggest pain point? (select up to 2)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {painPointOptions.map(option => (
                        <button
                            key={option.value}
                            onClick={() => togglePainPoint(option.value)}
                            disabled={!formData.painPoints?.includes(option.value) && formData.painPoints?.length >= 2}
                            className={`p-3 rounded-lg border text-sm text-left transition-all ${
                                formData.painPoints?.includes(option.value)
                                    ? 'border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14]'
                                    : formData.painPoints?.length >= 2
                                    ? 'border-white/5 text-gray-600 cursor-not-allowed'
                                    : 'border-white/10 text-gray-400 hover:border-white/30'
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Admin Hours */}
            <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#F8FAFC] mb-3">
                    <Clock className="w-4 h-4 text-[#00E0FF]" />
                    How many hours per week on admin/back-office?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {adminHoursOptions.map(option => (
                        <button
                            key={option.value}
                            onClick={() => updateFormData({ adminHours: option.value })}
                            className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                                formData.adminHours === option.value
                                    ? 'border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14]'
                                    : 'border-white/10 text-gray-400 hover:border-white/30'
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tech Stack */}
            <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#F8FAFC] mb-3">
                    <Wrench className="w-4 h-4 text-[#00E0FF]" />
                    What tech do you currently use? (select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                    {techStackOptions.map(option => (
                        <button
                            key={option.value}
                            onClick={() => toggleTechStack(option.value)}
                            className={`px-4 py-2 rounded-full border text-sm transition-all ${
                                formData.techStack?.includes(option.value)
                                    ? 'border-[#00E0FF] bg-[#00E0FF]/10 text-[#00E0FF]'
                                    : 'border-white/10 text-gray-400 hover:border-white/30'
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Success Goal (Optional) */}
            <div>
                <label className="text-sm font-medium text-[#F8FAFC] mb-3 block">
                    What would success look like in 90 days? (optional)
                </label>
                <textarea
                    value={formData.successGoal}
                    onChange={(e) => updateFormData({ successGoal: e.target.value })}
                    placeholder="e.g., I want to see my numbers weekly without digging through spreadsheets..."
                    className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-[#F8FAFC] placeholder-gray-500 focus:border-[#00E0FF] focus:outline-none resize-none"
                    rows={3}
                />
            </div>

            {/* Continue Button */}
            <div className="pt-4">
                <button
                    onClick={onNext}
                    disabled={!canProceed}
                    className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                        canProceed
                            ? 'bg-[#39FF14] text-[#0B0F14] hover:bg-[#2FE010]'
                            : 'bg-white/10 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    See Your Recommendation
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default StepAssessment;
