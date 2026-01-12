import React from 'react';
import { ArrowRight, TrendingDown, TrendingUp } from 'lucide-react';

const ROISnapshot = ({ onOpenModal }) => {
    return (
        <section className="py-20 bg-[#0B0F14] text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Your ROI Potential
                </h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    Real results from our contract auditor and budget systems
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-surface/50 border border-white/10 rounded-lg p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-[#39FF14]/20 flex items-center justify-center">
                                <TrendingDown className="w-5 h-5 text-[#39FF14]" />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#F8FAFC]">
                                Cost Savings
                            </h3>
                        </div>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center gap-2">
                                <span className="text-[#39FF14]">$120k/year</span> overhead reduced via contract audits
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#39FF14]">$72k/year</span> saved on social media management
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#39FF14]">8%</span> drop in food costs
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#39FF14]">10%</span> labor cost reduction
                            </li>
                        </ul>
                    </div>

                    <div className="bg-surface/50 border border-white/10 rounded-lg p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-[#00E0FF]/20 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-[#00E0FF]" />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#F8FAFC]">
                                Operational Wins
                            </h3>
                        </div>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center gap-2">
                                <span className="text-[#00E0FF]">46%</span> prime cost achieved
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#00E0FF]">20+ hours/week</span> saved on admin tasks
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#00E0FF]">Faster decisions</span> with real-time data
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-center text-lg text-gray-300 mb-8">
                    Foundation tier ($2,000/mo) typically pays for itself in Week 2. Growth tier ($4,000/mo) in Month 1.
                </p>

                <div className="text-center">
                    <button
                        onClick={onOpenModal}
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0B0F14] bg-[#39FF14] rounded-lg hover:bg-[#2FE010] transition-all shadow-lg shadow-[#39FF14]/50 cursor-pointer"
                    >
                        Start with $500 Savings Audit
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ROISnapshot;
