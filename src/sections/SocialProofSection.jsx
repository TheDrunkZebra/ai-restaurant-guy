import React from 'react';
import { Utensils, Users, MapPin } from 'lucide-react';

const SocialProofSection = () => {
    return (
        <section className="py-12 md:py-16 bg-[#0B0F14] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Credibility Stats - Owner credentials, no unverified claims */}
                <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto">
                    <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-[#00E0FF]/10 flex items-center justify-center mx-auto mb-3">
                            <Utensils className="w-6 h-6 text-[#00E0FF]" />
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-[#39FF14]">3</p>
                        <p className="text-sm text-gray-400">restaurants I own</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-[#00E0FF]/10 flex items-center justify-center mx-auto mb-3">
                            <Users className="w-6 h-6 text-[#00E0FF]" />
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-[#39FF14]">Owner</p>
                        <p className="text-sm text-gray-400">operator, not a consultant</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-[#00E0FF]/10 flex items-center justify-center mx-auto mb-3">
                            <MapPin className="w-6 h-6 text-[#00E0FF]" />
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-[#39FF14]">Jupiter</p>
                        <p className="text-sm text-gray-400">Florida based</p>
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
