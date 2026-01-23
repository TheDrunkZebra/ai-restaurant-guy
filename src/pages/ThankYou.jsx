import React, { useEffect, useState } from 'react';
import { CheckCircle, Calendar, Mail, ArrowRight } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';

const ThankYou = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');

    return (
        <div className="min-h-screen bg-[#0B0F14] flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                {/* Success Icon */}
                <div className="mb-8">
                    <div className="w-20 h-20 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-12 h-12 text-[#39FF14]" />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-4xl font-bold text-[#F8FAFC] mb-4">
                    You're In.
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                    Payment received. Let's get to work.
                </p>

                {/* What Happens Next */}
                <div className="bg-[#0F1419] border border-white/10 rounded-xl p-8 mb-8 text-left">
                    <h2 className="text-lg font-semibold text-[#F8FAFC] mb-6">
                        Here's what happens next:
                    </h2>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 bg-[#39FF14]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-[#39FF14] font-bold text-sm">1</span>
                            </div>
                            <div>
                                <h3 className="font-medium text-[#F8FAFC] mb-1">
                                    Check your inbox
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    You'll get a receipt from Stripe and a welcome email from me within the hour.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-8 h-8 bg-[#39FF14]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-[#39FF14] font-bold text-sm">2</span>
                            </div>
                            <div>
                                <h3 className="font-medium text-[#F8FAFC] mb-1">
                                    Kickoff call scheduled
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    I'll reach out within 24 hours to schedule our kickoff call. We'll map out your current systems and prioritize what to build first.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-8 h-8 bg-[#39FF14]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-[#39FF14] font-bold text-sm">3</span>
                            </div>
                            <div>
                                <h3 className="font-medium text-[#F8FAFC] mb-1">
                                    Systems go live
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Within 2 weeks, your first AI systems will be running. You'll see the difference in your Monday morning.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="bg-[#00E0FF]/10 border border-[#00E0FF]/30 rounded-xl p-6 mb-8">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <Mail className="w-5 h-5 text-[#00E0FF]" />
                        <span className="text-[#F8FAFC] font-medium">Questions before then?</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Email me directly at{' '}
                        <a
                            href="mailto:seamus@airestaurantguy.com"
                            className="text-[#00E0FF] hover:underline"
                        >
                            seamus@airestaurantguy.com
                        </a>
                        . I answer my own emails.
                    </p>
                </div>

                {/* Back to Home */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-[#F8FAFC] transition-colors"
                >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    Back to home
                </Link>
            </div>
        </div>
    );
};

export default ThankYou;
