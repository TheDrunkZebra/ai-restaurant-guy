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
                        <p className="text-textSecondary mb-8">
                            Vendor contracts. Waste logs. Staff scheduling. We'll analyze your current setup and find at least 3 areas where you're bleeding cash.
                        </p>

                        <div className="space-y-4">
                            {["No Spam Promise", "48-Hour Turnaround", "Actionable Report"].map((item, i) => (
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
                            <select
                                name="pos"
                                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none text-textSecondary"
                                onChange={handleChange}
                            >
                                <option value="">Select POS System</option>
                                <option value="toast">Toast</option>
                                <option value="square">Square</option>
                                <option value="aloha">Aloha</option>
                                <option value="other">Other</option>
                            </select>

                            <button className="w-full bg-primary text-background font-bold py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mt-4">
                                Start My Application
                                <Send className="w-4 h-4" />
                            </button>

                            <div className="flex items-center justify-center gap-2 text-xs text-textSecondary mt-4">
                                <Lock className="w-3 h-3" />
                                Secure 256-bit Encryption
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default RevenueRecoveryAudit;

