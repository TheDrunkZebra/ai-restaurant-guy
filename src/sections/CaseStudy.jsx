import React from 'react';
import { Quote } from 'lucide-react';

const stats = [
    { value: "$72,400", label: "Agency Fees Nuked" },
    { value: "0", label: "Decision Fatigue" },
    { value: "3.2%", label: "Food + Labor Drop" },
    { value: "90 Days", label: "Full Recovery Time" }
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
                                I was cutting $6,000 checks every month to "creative agencies" who didn't know the difference between a waste log and a wine list. They sent me vanity metrics while my margins were bleeding from the back of the house.
                            </p>
                            <p>
                                When I stopped chasing "likes" and started deploying **The Profit Protocol**, the work didn't just get better—it got automated. No revisions. No "circling back." Just profit on a dashboard.
                            </p>
                            <p>
                                This isn't about some fancy culinary journey. It's about getting back to the floor, where the real money is made, while these systems run the grunt work in the background.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-10 -left-10 text-white/5">
                            <Quote size={120} />
                        </div>
                        <blockquote className="relative bg-background border border-white/10 p-10 rounded-2xl">
                            <p className="text-xl italic text-white mb-6">
                                "I was tired of being held hostage by tech I didn't understand and vendors who overcharged for fluff. Now, I run a tighter ship with 0 decision fatigue. This is how the modern house wins."
                            </p>
                            <footer className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary font-black italic uppercase">
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
