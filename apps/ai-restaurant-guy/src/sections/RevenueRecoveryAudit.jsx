import React, { useState } from 'react';
import { Send, Lock } from 'lucide-react';

const RevenueRecoveryAudit = () => {
    const [formData, setFormData] = useState({
        name: '',
        restaurant: '',
        email: '',
        phone: '',
        pos: '',
        revenue: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Audit Request:', formData);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div id="audit" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                <div className="max-w-4xl mx-auto bg-surface border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl">

                    <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 bg-gradient-to-br from-surface to-background">
                        <h2 className="text-3xl font-bold mb-4">Find Your Leakage</h2>
                        <p className="text-textSecondary mb-8 text-lg">
                            We don't do "consulting." We audit your vendor contracts, waste logs, and schedules to find where your cash is bleeding. Most venues recover $15-50k in the first 90 days.
                        </p>

                        <div className="space-y-4">
                            {["No Agency Fluff", "48-Hour Deep Dive", "Direct Profit Roadmap"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-medium text-white">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 md:p-12 md:w-1/2 bg-surface">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none"
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    name="restaurant"
                                    placeholder="Restaurant Name"
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none"
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    name="phone"
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <select
                                    name="pos"
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none text-textSecondary"
                                    onChange={handleChange}
                                >
                                    <option value="">Select POS</option>
                                    <option value="toast">Toast</option>
                                    <option value="square">Square</option>
                                    <option value="aloha">Aloha</option>
                                    <option value="other">Other</option>
                                </select>
                                <select
                                    name="revenue"
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none text-textSecondary"
                                    onChange={handleChange}
                                >
                                    <option value="">Annual Revenue</option>
                                    <option value="sub500k">&lt;$500k</option>
                                    <option value="500k-1.5m">$500k - $1.5M</option>
                                    <option value="1.5m-5m">$1.5M - $5M</option>
                                    <option value="5mplus">$5M+</option>
                                </select>
                            </div>

                            <select
                                name="locations"
                                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none text-textSecondary"
                                onChange={handleChange}
                            >
                                <option value="">Number of Locations</option>
                                <option value="1">Single Location</option>
                                <option value="2-5">2-5 Units</option>
                                <option value="6plus">6+ Units</option>
                            </select>

                            <button className="w-full bg-primary text-background font-bold py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mt-4 shadow-[0_0_20px_rgba(0,224,255,0.2)]">
                                Apply for Free Audit
                                <Send className="w-4 h-4" />
                            </button>

                            <div className="flex items-center justify-center gap-2 text-xs text-textSecondary mt-4">
                                <Lock className="w-3 h-3" />
                                Secure Application Process
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default RevenueRecoveryAudit;

