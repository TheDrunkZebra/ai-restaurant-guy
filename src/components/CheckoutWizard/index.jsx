import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import StepAssessment from './StepAssessment';
import StepRecommendation from './StepRecommendation';
import StepCustomize from './StepCustomize';
import StepInvestment from './StepInvestment';

const STEPS = [
    { id: 1, name: 'Assessment', description: 'Tell us about your operation' },
    { id: 2, name: 'Recommendation', description: 'Your personalized plan' },
    { id: 3, name: 'Customize', description: 'Add what you need' },
    { id: 4, name: 'Investment', description: 'See your ROI' },
];

const CheckoutWizard = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Assessment
        locations: null,
        painPoints: [],
        adminHours: null,
        techStack: [],
        successGoal: '',

        // Package selection
        selectedPackage: 'growth', // essentials, growth, scale

        // Add-ons
        addOns: {
            googleAds: false,
            priorityResponse: false,
            strategyCall: false,
        },

        // Contact
        name: '',
        email: '',
        phone: '',
        restaurantName: '',
        address: '',
    });

    const updateFormData = (updates) => {
        setFormData(prev => ({ ...prev, ...updates }));
    };

    const nextStep = () => {
        if (currentStep < STEPS.length) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const getRecommendedPackage = () => {
        // Logic based on assessment answers
        const { locations, painPoints, adminHours } = formData;

        // Scale for larger operations or heavy admin burden
        if (locations === '10+' || adminHours === '30+') {
            return 'scale';
        }

        // Essentials for single location with lighter needs
        if (locations === '1' && adminHours === '5-10') {
            return 'essentials';
        }

        // Growth is the sweet spot for most
        return 'growth';
    };

    const calculateTotal = () => {
        const packages = {
            essentials: { setup: 2500, monthly: 1500 },
            growth: { setup: 4000, monthly: 2500 },
            scale: { setup: 6000, monthly: 4000 },
        };

        const addOnPrices = {
            googleAds: 500,
            priorityResponse: 300,
            strategyCall: 200,
        };

        const pkg = packages[formData.selectedPackage];
        let monthlyAddOns = 0;

        Object.entries(formData.addOns).forEach(([key, enabled]) => {
            if (enabled) {
                monthlyAddOns += addOnPrices[key];
            }
        });

        return {
            setup: pkg.setup,
            monthly: pkg.monthly + monthlyAddOns,
            threeMonthTotal: pkg.setup + (pkg.monthly + monthlyAddOns) * 3,
        };
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <StepAssessment
                        formData={formData}
                        updateFormData={updateFormData}
                        onNext={nextStep}
                    />
                );
            case 2:
                return (
                    <StepRecommendation
                        formData={formData}
                        updateFormData={updateFormData}
                        recommendedPackage={getRecommendedPackage()}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                );
            case 3:
                return (
                    <StepCustomize
                        formData={formData}
                        updateFormData={updateFormData}
                        totals={calculateTotal()}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                );
            case 4:
                return (
                    <StepInvestment
                        formData={formData}
                        updateFormData={updateFormData}
                        totals={calculateTotal()}
                        onBack={prevStep}
                        onClose={onClose}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative bg-[#0B0F14] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                {/* Progress Bar */}
                <div className="px-6 pt-6 pb-4 border-b border-white/10">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-[#F8FAFC]">
                            Get Started
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Step indicators */}
                    <div className="flex items-center gap-2">
                        {STEPS.map((step, index) => (
                            <React.Fragment key={step.id}>
                                <div className="flex items-center gap-2">
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                                            currentStep > step.id
                                                ? 'bg-[#39FF14] text-[#0B0F14]'
                                                : currentStep === step.id
                                                ? 'bg-[#00E0FF] text-[#0B0F14]'
                                                : 'bg-white/10 text-gray-500'
                                        }`}
                                    >
                                        {currentStep > step.id ? (
                                            <Check className="w-4 h-4" />
                                        ) : (
                                            step.id
                                        )}
                                    </div>
                                    <span
                                        className={`text-sm hidden sm:block ${
                                            currentStep >= step.id
                                                ? 'text-[#F8FAFC]'
                                                : 'text-gray-500'
                                        }`}
                                    >
                                        {step.name}
                                    </span>
                                </div>
                                {index < STEPS.length - 1 && (
                                    <div
                                        className={`flex-1 h-0.5 ${
                                            currentStep > step.id
                                                ? 'bg-[#39FF14]'
                                                : 'bg-white/10'
                                        }`}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    {renderStep()}
                </div>
            </div>
        </div>
    );
};

export default CheckoutWizard;
