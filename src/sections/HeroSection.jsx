import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import GuaranteeBadge from '../components/GuaranteeBadge';
import TrustIndicators from '../components/TrustIndicators';

const HeroSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        restaurantName: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add logic to handle submission
    };

    return (
        <div className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Content */}
                    <div className="max-w-2xl">
                        <div className="mb-8">
                            <GuaranteeBadge />
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 text-textPrimary">
                            Recover <span className="text-primary text-shadow-glow">$72k</span> in Hidden Revenue Your First Year
                        </h1>

                        <p className="text-xl text-textSecondary mb-8 leading-relaxed max-w-lg">
                            Stop margin leaks before they kill your profit. Automate your operations and get 80+ hours back per month.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <a href="#audit" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-background bg-primary rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,224,255,0.3)] hover:shadow-[0_0_30px_rgba(0,224,255,0.5)]">
                                Get Free Revenue Audit
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <a href="#systems" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-textPrimary bg-surface border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                                View Systems
                            </a>
                        </div>

                        <TrustIndicators />
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-surface border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm relative">
                        <div className="absolute -top-4 -right-4 bg-secondary text-background font-bold px-4 py-2 rounded-lg transform rotate-3 shadow-lg">
                            Limited Availability
                        </div>

                        <h3 className="text-2xl font-bold mb-2">Get Your Free Revenue Audit</h3>
                        <p className="text-textSecondary mb-6">See exactly where you're losing money. No obligation.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-textSecondary mb-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-primary transition-colors"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-textSecondary mb-1">Restaurant Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-primary transition-colors"
                                    placeholder="The Salty Zebra"
                                    value={formData.restaurantName}
                                    onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-textSecondary mb-1">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-primary transition-colors"
                                    placeholder="john@restaurant.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <button type="submit" className="w-full bg-secondary text-background font-bold text-lg py-4 rounded-lg hover:bg-secondary/90 transition-all shadow-[0_0_20px_rgba(158,240,26,0.3)] hover:shadow-[0_0_30px_rgba(158,240,26,0.5)] flex items-center justify-center gap-2 mt-2">
                                Get My Free Audit
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            <p className="text-center text-xs text-textSecondary mt-4 flex items-center justify-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-secondary" />
                                Your data is 100% secure. No spam.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;

