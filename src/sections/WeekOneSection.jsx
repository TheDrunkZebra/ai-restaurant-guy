import React from 'react';
import {
    FileText,
    Star,
    Layout,
    Target,
    Calculator,
    FileSearch,
    Wrench
} from 'lucide-react';

const WeekOneSection = () => {
    const workflows = [
        {
            icon: FileText,
            title: "AI Content Workflow",
            description: "Blog → Google My Business Post → Newsletter. All customized to your restaurant's voice and brand.",
            color: "#00E0FF"
        },
        {
            icon: Star,
            title: "Reputation Management",
            description: "Automated review responses in your tone + NAP setup for local SEO. Never miss a review again.",
            color: "#39FF14"
        },
        {
            icon: Layout,
            title: "Landing Page Builder",
            description: "Beautiful campaign landing pages integrated with Google Ads. Built for conversions, not just looks.",
            color: "#00E0FF"
        },
        {
            icon: Target,
            title: "Google Ads Optimizer",
            description: "Weekly recursive self-improvement. Our agents learn from mistakes and optimize your spend automatically.",
            color: "#39FF14"
        },
        {
            icon: Calculator,
            title: "Financial Intelligence",
            description: "Weekly data-driven budgets for your management. Tracks food costs, flags overpayments before they hurt.",
            color: "#00E0FF"
        },
        {
            icon: FileSearch,
            title: "Contract Killer",
            description: "AI audits your vendor contracts and finds hidden costs. Generates negotiation scripts to save you money.",
            color: "#39FF14"
        },
        {
            icon: Wrench,
            title: "Custom Build",
            description: "Have a specific need? We build custom AI workflows tailored to your restaurant's unique operations.",
            color: "#00E0FF"
        }
    ];

    return (
        <section id="system" className="py-20 bg-[#0B0F14] text-[#F8FAFC] scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        AI Workflows We Deploy
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Each workflow is a team of AI agents working 24/7. Custom-built for your restaurant, running on autopilot.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {workflows.map((workflow, index) => {
                        const IconComponent = workflow.icon;
                        return (
                            <div
                                key={index}
                                className="bg-surface/50 border border-white/10 rounded-xl p-6 hover:border-[#00E0FF]/50 transition-all group"
                            >
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all"
                                    style={{ backgroundColor: `${workflow.color}20` }}
                                >
                                    <IconComponent
                                        className="w-6 h-6 transition-transform group-hover:scale-110"
                                        style={{ color: workflow.color }}
                                    />
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#F8FAFC]">
                                    {workflow.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                                    {workflow.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WeekOneSection;
