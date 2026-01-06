import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const products = [
    {
        id: 1,
        title: "The Guest Magnet",
        price: "497",
        description: "Zero-fluff landing pages designed to convert. We don't do pretty; we do profitable.",
        features: ["High-Conversion Framework", "Zieman CRO Logic", "Zero-Latency Hosting"],
        addons: ["60-Day Copy Audit ($200 Value)", "Market Intelligence Pack"]
    },
    {
        id: 2,
        title: "Content Creation Engine",
        price: "997",
        description: "One menu upload. 30 days of platform-perfect posts. Authentic UGC style only.",
        features: ["UGC Visual Logic", "Seamus Style Training", "Viral Hook Library"],
        addons: ["Engagement Auto-Pilot", "Custom Brand Voice Tuning"]
    },
    {
        id: 3,
        title: "Financial Intelligence",
        price: "2,997",
        description: "Stop bleeding cash. Real-time prime cost tracking and automated vendor auditing.",
        features: ["Dead-Simple Dashboards", "Vendor Invoice Audit", "Leakage Alerts"],
        addons: ["Profit Recovery Strategy ($1.5k Value)", "Prime Cost Shield"]
    },
    {
        id: 4,
        title: "ShiftPilot",
        price: "197",
        description: "Task prioritization that actually works. 80+ hours saved per month, guaranteed.",
        features: ["Scrappy Logic Engine", "Role-Based Priorities", "Auto-Scheduling"],
        addons: ["Decision Fatigue Shield", "Unlimited Task Nodes"]
    }
];

const ShopTheSystems = () => {
    return (
        <div id="systems" className="py-32 bg-background relative border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">Systems Built for Speed</h2>
                    <p className="text-xl text-textSecondary">
                        One-time payment. Lifetime value. No monthly recurring fees for the core systems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-surface border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,224,255,0.1)]">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-bold text-textPrimary">{product.title}</h3>
                                <div className="text-right">
                                    <div className="text-3xl font-bold text-primary">${product.price}</div>
                                    <div className="text-xs text-textSecondary uppercase tracking-wider">One-time</div>
                                </div>
                            </div>

                            <p className="text-textSecondary mb-8 min-h-[3rem]">{product.description}</p>

                            <ul className="space-y-3 mb-6">
                                {product.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm">
                                        <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center mr-3">
                                            <Check className="w-3 h-3 text-secondary" />
                                        </div>
                                        <span className="text-textPrimary font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mb-8 pt-6 border-t border-white/5">
                                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-3">Value Stack Add-ons:</p>
                                <ul className="space-y-2">
                                    {product.addons.map((addon, idx) => (
                                        <li key={idx} className="text-xs text-textSecondary flex items-start gap-2 italic">
                                            <span className="text-primary">+</span>
                                            {addon}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className="w-full py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all flex items-center justify-center gap-2">
                                Add to My Operations
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ShopTheSystems;

