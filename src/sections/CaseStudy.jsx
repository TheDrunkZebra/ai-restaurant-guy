import React from 'react';
import { Quote } from 'lucide-react';

const stats = [
    { value: "$72k", label: "Agency Fees Eliminated" },
    { value: "2 Days", label: "On-Site Time / Month" },
    { value: "3%", label: "Prime Cost Reduction" },
    { value: "5", label: "Platforms Automated" }
];

const CaseStudy = () => {
    return (
        <div className="py-24 bg-surface border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Results Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-background border border-white/5 p-6 rounded-xl text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-textSecondary uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Narrative */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Lightbulb Moment</h2>
                        <div className="space-y-6 text-textSecondary text-lg leading-relaxed">
                            <p>
                                I was spending $6,000 a month on agencies that didn't get it. They posted generic content, built websites that broke, and sent me "reports" that meant nothing to my bottom line.
                            </p>
                            <p>
                                When I replaced them with these systems, not only did the work get better—it got done instantly. No waiting for revisions. No "circling back."
                            </p>
                            <p>
                                This isn't about replacing people. It's about replacing the grunt work so you can get back to the floor, the food, and the guests.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-10 -left-10 text-white/5">
                            <Quote size={120} />
                        </div>
                        <blockquote className="relative bg-background border border-white/10 p-10 rounded-2xl">
                            <p className="text-xl italic text-white mb-6">
                                "I built these systems because I was tired of being held hostage by tech I didn't understand and vendors who overcharged. Now, I run a tighter ship than ever before."
                            </p>
                            <footer className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
                                    SO
                                </div>
                                <div>
                                    <div className="font-bold text-white">Seamus O'Brien</div>
                                    <div className="text-sm text-textSecondary">Founder, The Salty Zebra</div>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CaseStudy;

