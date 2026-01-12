import React from 'react';
import { FileSearch, MessageSquare, BarChart3, Zap } from 'lucide-react';

const CaseStudyMetrics = () => {
    const capabilities = [
        {
            icon: FileSearch,
            title: "Contract Audits",
            description: "We find money hiding in vendor agreements"
        },
        {
            icon: BarChart3,
            title: "Budget Systems",
            description: "Weekly food + labor tracking that works"
        },
        {
            icon: MessageSquare,
            title: "Review Management",
            description: "Respond faster, recover upset guests"
        },
        {
            icon: Zap,
            title: "AI Workflows",
            description: "Automate the repetitive stuff"
        }
    ];

    return (
        <section className="py-20 bg-surface/30 text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        What We Do
                    </h2>
                    <p className="text-lg text-gray-400">
                        Field-tested in real restaurants, not classrooms
                    </p>
                </div>

                {/* Capabilities */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {capabilities.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={index} className="text-center bg-[#0B0F14] rounded-xl p-6 border border-white/5">
                                <div className="w-12 h-12 rounded-full bg-[#00E0FF]/10 flex items-center justify-center mx-auto mb-4">
                                    <IconComponent className="w-6 h-6 text-[#00E0FF]" />
                                </div>
                                <div className="text-lg font-semibold text-[#F8FAFC] mb-2">
                                    {item.title}
                                </div>
                                <div className="text-sm text-gray-400">
                                    {item.description}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CaseStudyMetrics;
