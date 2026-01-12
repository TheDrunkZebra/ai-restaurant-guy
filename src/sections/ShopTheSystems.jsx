import React from 'react';
import {
    Mail,
    Star,
    Camera,
    Handshake,
    BarChart3,
    Gift,
    DollarSign,
    PartyPopper
} from 'lucide-react';

const systems = [
    {
        icon: Mail,
        title: "Newsletter Automation",
        description: "grows list, sends campaigns, tracks redemptions."
    },
    {
        icon: Star,
        title: "Review Management",
        description: "replies, escalations, win‑back flows."
    },
    {
        icon: Camera,
        title: "Social Content",
        description: "30‑day calendar that actually posts."
    },
    {
        icon: Handshake,
        title: "Outreach & Partnerships",
        description: "B2B/catering pipeline on autopilot."
    },
    {
        icon: BarChart3,
        title: "Ads Optimizer",
        description: "daily budget shifts, creative testing."
    },
    {
        icon: Gift,
        title: "Loyalty & CRM",
        description: "points, birthdays, reactivation offers."
    },
    {
        icon: DollarSign,
        title: "Financial Reports",
        description: "weekly P&L, cash‑flow alerts."
    },
    {
        icon: PartyPopper,
        title: "Events & Catering",
        description: "inquiry capture, quotes, follow‑ups."
    }
];

const ShopTheSystems = () => {
    return (
        <section className="py-20 bg-[#0B0F14] text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        All Systems Available
                    </h2>
                    <p className="text-gray-400">
                        Mix and match based on your needs. We bundle them into packages that make sense. Custom workflows available for your specific restaurant.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {systems.map((system, index) => {
                        const IconComponent = system.icon;
                        return (
                            <div
                                key={index}
                                className="bg-surface/50 border border-white/10 rounded-xl p-4 md:p-5 hover:border-[#00E0FF]/50 transition-all group text-center"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#00E0FF]/10 flex items-center justify-center mx-auto mb-3 transition-all group-hover:bg-[#00E0FF]/20">
                                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-[#00E0FF] transition-transform group-hover:scale-110" />
                                </div>
                                <h3 className="text-sm md:text-base font-semibold mb-1 text-[#F8FAFC]">
                                    {system.title}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                                    {system.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ShopTheSystems;
