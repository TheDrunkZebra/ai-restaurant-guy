import React from 'react';
import { Quote, TrendingDown, Clock, Star } from 'lucide-react';

const SocialProofSection = () => {
    return (
        <section className="py-12 md:py-16 bg-[#0B0F14] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Testimonial - Featured */}
                <div className="max-w-3xl mx-auto mb-12">
                    <div className="bg-white/5 rounded-xl p-6 md:p-8 border border-white/10 relative">
                        <Quote className="absolute top-4 left-4 w-8 h-8 text-[#39FF14]/20" />
                        <p className="text-lg md:text-xl text-gray-200 italic mb-4 pl-8">
                            "Seamus found $11k in vendor contracts we didn't know we were overpaying. Paid for itself the first month."
                        </p>
                        <p className="text-sm text-gray-400 pl-8">
                            — Mike R., Restaurant Owner, Palm Beach
                        </p>
                    </div>
                </div>

                {/* Credibility Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-[#00E0FF]/10 flex items-center justify-center mx-auto mb-3">
                            <TrendingDown className="w-6 h-6 text-[#00E0FF]" />
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-[#39FF14]">$120k</p>
                        <p className="text-sm text-gray-400">savings found in my own restaurants</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-[#00E0FF]/10 flex items-center justify-center mx-auto mb-3">
                            <Star className="w-6 h-6 text-[#00E0FF]" />
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-[#39FF14]">46%</p>
                        <p className="text-sm text-gray-400">prime cost achieved</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-[#00E0FF]/10 flex items-center justify-center mx-auto mb-3">
                            <Clock className="w-6 h-6 text-[#00E0FF]" />
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-[#39FF14]">25hrs</p>
                        <p className="text-sm text-gray-400">saved per week on admin</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-[#00E0FF]/10 flex items-center justify-center mx-auto mb-3">
                            <div className="text-[#00E0FF] font-bold">3</div>
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-[#39FF14]">3</p>
                        <p className="text-sm text-gray-400">restaurants I own in Jupiter, FL</p>
                    </div>
                </div>

                {/* Credibility line */}
                <p className="text-center text-gray-400 mt-8 text-sm">
                    I built these systems for my own restaurants first. Now I install them for others.
                </p>

            </div>
        </section>
    );
};

export default SocialProofSection;
