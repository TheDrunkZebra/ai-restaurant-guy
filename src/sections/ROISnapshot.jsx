import React from 'react';
import { ArrowRight, FileSearch, BarChart3, ShieldCheck } from 'lucide-react';

const ROISnapshot = ({ onOpenModal }) => {
    return (
        <section className="py-20 bg-[#0B0F14] text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    How the Audit Works
                </h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    Simple process, documented savings
                </p>

                {/* How it works steps */}
                <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="w-14 h-14 rounded-full bg-[#39FF14]/20 flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-[#39FF14]">1</span>
                        </div>
                        <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">
                            Start the $1,000 audit
                        </h3>
                        <p className="text-sm text-gray-400">
                            Tell me about your restaurant and share your vendor contracts
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-14 h-14 rounded-full bg-[#39FF14]/20 flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-[#39FF14]">2</span>
                        </div>
                        <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">
                            We map where money is leaking
                        </h3>
                        <p className="text-sm text-gray-400">
                            Same system I use in my own spots—contract audits, invoice review, vendor benchmarks
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-14 h-14 rounded-full bg-[#39FF14]/20 flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-[#39FF14]">3</span>
                        </div>
                        <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">
                            Get a prioritized savings plan
                        </h3>
                        <p className="text-sm text-gray-400">
                            Found Money Report with documented savings opportunities + next steps
                        </p>
                    </div>
                </div>

                {/* Guarantee box */}
                <div className="bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl p-6 max-w-2xl mx-auto mb-8">
                    <div className="flex items-start gap-4">
                        <ShieldCheck className="w-6 h-6 text-[#39FF14] flex-shrink-0 mt-1" />
                        <p className="text-gray-300">
                            <span className="font-semibold text-[#39FF14]">2× guarantee:</span> if we can't uncover at least 2× your audit fee in documented savings opportunities, we keep working at no extra cost until we do.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        id="roi-cta-primary"
                        data-cta="start-audit"
                        onClick={onOpenModal}
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0B0F14] bg-[#39FF14] rounded-lg hover:bg-[#2FE010] transition-all shadow-lg shadow-[#39FF14]/50 cursor-pointer"
                    >
                        Start $1,000 Audit
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ROISnapshot;
