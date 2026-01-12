import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = ({ onOpenModal }) => {
    return (
        <section className="py-20 bg-[#0B0F14] text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/seamus-portrait.jpg"
                                alt="Seamus O'Brien, ready to build your AI restaurant automation system"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* CTA Content */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#F8FAFC]">
                            Build a system your competitors wish they had.
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={onOpenModal}
                                data-cta="start-audit"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0B0F14] bg-[#39FF14] rounded-lg hover:bg-[#2FE010] transition-all shadow-lg shadow-[#39FF14]/50 cursor-pointer"
                            >
                                Start $500 Audit
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
