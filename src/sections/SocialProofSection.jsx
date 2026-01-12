import React from 'react';
import { Utensils, Users, MapPin, Quote } from 'lucide-react';

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
                        <p className="text-2xl md:text-3xl font-bold text-[#4ADE80]">3</p>
                        <p className="text-sm text-gray-400">restaurants I own</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-[#00E0FF]/10 flex items-center justify-center mx-auto mb-3">
                            <Users className="w-6 h-6 text-[#00E0FF]" />
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-[#4ADE80]">Owner</p>
                        <p className="text-sm text-gray-400">operator, not a consultant</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-[#00E0FF]/10 flex items-center justify-center mx-auto mb-3">
                            <MapPin className="w-6 h-6 text-[#00E0FF]" />
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-[#4ADE80]">Jupiter</p>
                        <p className="text-sm text-gray-400">Florida based</p>
                    </div>
                </div>

                {/* A note from Seamus - Authority + Authenticity card */}
                <div className="max-w-2xl mx-auto mt-10">
                    <div className="bg-white/5 rounded-xl p-6 md:p-8 border border-white/10 relative">
                        <Quote className="absolute top-4 right-4 w-6 h-6 text-[#4ADE80]/30" />
                        <h3 className="text-lg md:text-xl font-semibold text-[#F8FAFC] mb-4">
                            A note from Seamus
                        </h3>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                I'm not a consultant — I'm an operator. I own three restaurants in Jupiter, Florida, and for years I was buried in schedules, vendor calls, and "what the hell are we paying for?" contracts.
                            </p>
                            <p>
                                So I built simple workflows and AI assistants to plug the leaks and buy back my time. It worked — my restaurants are now over 20% profitable, and I'm finally working <em>on</em> the business instead of living in it.
                            </p>
                        </div>
                        <p className="mt-6 text-[#4ADE80] font-medium">
                            — Seamus, Owner-Operator
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SocialProofSection;
