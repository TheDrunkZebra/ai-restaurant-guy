import React from 'react';
import { Check } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            number: "1",
            title: "Discovery Call",
            duration: "15 min",
            description: "We audit your current stack, goals, and biggest bottlenecks."
        },
        {
            number: "2",
            title: "Setup & Build",
            duration: "1-2 weeks",
            description: "We install, connect, and customize your AI workflows."
        },
        {
            number: "3",
            title: "Testing & Training",
            duration: "Week 2-3",
            description: "Live testing, screen share training, SOPs delivered."
        },
        {
            number: "4",
            title: "See Results",
            duration: "Month 2",
            description: "Systems running, monthly reports, ongoing optimization."
        }
    ];

    return (
        <section className="py-20 bg-[#0B0F14] text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        How It Works
                    </h2>
                    <p className="text-gray-400">
                        From first call to running systems in about a month
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center relative">
                            {/* Connector line (hidden on mobile, shown on desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#00E0FF]/50 to-transparent" />
                            )}
                            <div className="w-16 h-16 rounded-full bg-[#00E0FF]/20 flex items-center justify-center mx-auto mb-4 relative z-10">
                                <span className="text-2xl md:text-3xl font-bold text-[#00E0FF]">
                                    {step.number}
                                </span>
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold mb-1 text-[#F8FAFC]">
                                {step.title}
                            </h3>
                            <p className="text-sm text-[#00E0FF] font-medium mb-2">
                                {step.duration}
                            </p>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#39FF14]/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-6 h-6 text-[#39FF14]" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-[#F8FAFC]">
                            2× Guarantee
                        </h3>
                    </div>
                    <p className="text-base md:text-lg text-gray-300">
                        If we can't uncover at least 2× your audit fee in documented savings opportunities, we keep working at no extra cost until we do.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
