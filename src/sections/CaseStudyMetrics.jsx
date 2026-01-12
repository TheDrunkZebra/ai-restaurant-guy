import React from 'react';

const CaseStudyMetrics = () => {
    const metrics = [
        {
            value: "24%",
            label: "profitability on sales",
            sublabel: "owner-operator results"
        },
        {
            value: "$6k",
            label: "saved monthly",
            sublabel: "on social media management"
        },
        {
            value: "$10-12k",
            label: "overhead reduced",
            sublabel: "per month via contract audits"
        },
        {
            value: "46%",
            label: "prime cost achieved",
            sublabel: "(COGS + labor)"
        }
    ];

    return (
        <section className="py-20 bg-surface/30 text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Owner-Operator Results
                    </h2>
                    <p className="text-lg text-gray-400">
                        Pain points solved across 3 real restaurants
                    </p>
                </div>

                {/* Primary Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {metrics.map((metric, index) => (
                        <div key={index} className="text-center bg-[#0B0F14] rounded-xl p-6 border border-white/5">
                            <div className="text-3xl md:text-5xl font-bold text-[#00E0FF] mb-2">
                                {metric.value}
                            </div>
                            <div className="text-base md:text-lg text-[#F8FAFC] mb-1">
                                {metric.label}
                            </div>
                            {metric.sublabel && (
                                <div className="text-xs md:text-sm text-gray-400">
                                    {metric.sublabel}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudyMetrics;
