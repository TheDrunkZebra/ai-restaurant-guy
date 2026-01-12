import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const LightbulbCaseStudy = () => {
    const metrics = [
        {
            label: "Emails sent/month",
            before: "0",
            after: "8",
            trend: "up"
        },
        {
            label: "Cost per lead",
            before: "$31",
            after: "$18",
            trend: "down"
        },
        {
            label: "Owner hours in ops",
            before: "70/wk",
            after: "45/wk",
            trend: "down"
        },
        {
            label: "Review score trend",
            before: "3.8",
            after: "4.4",
            trend: "up"
        }
    ];

    return (
        <section className="py-20 bg-surface/30 text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    The Lightbulb Moment
                </h2>

                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    {/* Image */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/seamus-portrait.jpg"
                                alt="Seamus O'Brien reviewing AI dashboard results at his restaurant"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="flex flex-col justify-center">
                        <blockquote className="text-2xl md:text-3xl font-medium text-[#F8FAFC] mb-6 leading-relaxed">
                            "I thought AI was just social media. Then we wired it into email, ads, outreach, bookkeeping. Overnight, tasks I avoided for years just… happened. A small shop can compete with chains — software doesn't sleep."
                        </blockquote>
                        <p className="text-lg text-gray-400">
                            — Seamus, Owner
                        </p>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <div key={index} className="bg-[#0B0F14] border border-white/10 rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-4 text-[#F8FAFC]">
                                {metric.label}
                            </h3>
                            <div className="flex items-center justify-between">
                                <div className="text-3xl font-bold text-gray-400">
                                    {metric.before}
                                </div>
                                {metric.trend === "up" ? (
                                    <TrendingUp className="w-6 h-6 text-[#39FF14]" />
                                ) : (
                                    <TrendingDown className="w-6 h-6 text-red-400" />
                                )}
                                <div className="text-3xl font-bold text-[#00E0FF]">
                                    {metric.after}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LightbulbCaseStudy;
