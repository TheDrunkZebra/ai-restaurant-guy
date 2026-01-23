import React, { useState } from 'react';
import {
    Eye,
    DollarSign,
    FileSearch,
    Shield,
    Megaphone,
    MapPin,
    ChevronRight,
    Check,
    ArrowRight,
    Clock,
    FileText,
    BarChart3,
    Mail,
    Star,
    Zap,
    Target,
    TrendingUp,
    AlertCircle,
    X
} from 'lucide-react';

const systems = [
    {
        id: 'command-center',
        icon: Eye,
        title: 'Command Center',
        tagline: 'See all locations. One screen.',
        description: 'Real-time dashboard showing revenue, costs, and opportunities across your entire portfolio.',
        timeToValue: 'Weekly insights from day 1',
        steps: [
            { icon: FileText, title: 'Connect Your POS', desc: 'We pull sales data from Toast, Square, or your system' },
            { icon: BarChart3, title: 'Automated Analysis', desc: 'AI calculates prime cost, labor %, forecast accuracy' },
            { icon: Eye, title: 'Dashboard Updates', desc: 'See all locations, all metrics, every Monday morning' },
            { icon: AlertCircle, title: 'Variance Alerts', desc: 'Get notified when numbers drift from targets' },
        ],
        outputs: ['Weekly revenue by location', 'Prime cost tracking', 'Labor % vs target', 'YoY comparisons', 'Forecast accuracy'],
        realExample: 'At Bagel Boyz, we discovered 55% of revenue comes in 2 hours (8-10 AM). This changed how we staff.',
    },
    {
        id: 'cfo-agent',
        icon: DollarSign,
        title: 'CFO Agent',
        tagline: 'Weekly P&L. No CFO required.',
        description: 'Automated financial reports that tell you where money is going—and where it\'s leaking.',
        timeToValue: 'First report in 48 hours',
        steps: [
            { icon: FileText, title: 'Export Toast/Square Data', desc: 'Sales and labor exports (we show you how)' },
            { icon: Zap, title: 'AI Processing', desc: 'Parses 1000s of transactions in seconds' },
            { icon: BarChart3, title: 'Cost Breakdown', desc: 'Food cost, bev cost, labor by role' },
            { icon: TrendingUp, title: 'Trend Analysis', desc: 'Week-over-week, month-over-month comparisons' },
        ],
        outputs: ['True prime cost %', 'Labor by position', 'Food cost by category', 'Variance from budget', 'Cash flow projection'],
        realExample: 'Toast was reporting 18.9% labor. Actual was 17.7%. The system was miscalculating overtime. We found $30K in phantom costs.',
    },
    {
        id: 'contract-killer',
        icon: FileSearch,
        title: 'Contract Killer',
        tagline: 'Find the money hiding in your contracts.',
        description: 'AI audits every vendor agreement to find overcharges, hidden fees, and negotiation opportunities.',
        timeToValue: 'Findings report in 7 days',
        steps: [
            { icon: FileText, title: 'Upload Contracts', desc: 'POS, food vendors, supplies, services—all of them' },
            { icon: Target, title: 'AI Benchmark Analysis', desc: 'Compares your rates to industry standards' },
            { icon: AlertCircle, title: 'Red Flag Detection', desc: 'Finds auto-renewals, hidden fees, pricing traps' },
            { icon: Mail, title: 'Negotiation Scripts', desc: 'Ready-to-send emails to renegotiate' },
        ],
        outputs: ['Annual savings estimate', 'Line-by-line contract issues', 'Competitive alternatives', 'Negotiation letter drafts', 'Renewal calendar'],
        realExample: 'Found a client paying for Toast features they never activated. $2,400/year recovered with one email.',
    },
    {
        id: 'reputation-shield',
        icon: Shield,
        title: 'Reputation Shield',
        tagline: 'Never miss a review again.',
        description: 'AI monitors reviews across all platforms, responds appropriately, and alerts you to problems before they escalate.',
        timeToValue: 'Monitoring starts immediately',
        steps: [
            { icon: Star, title: 'Connect Platforms', desc: 'Google, Yelp, OpenTable, TripAdvisor synced' },
            { icon: Zap, title: 'AI Classification', desc: 'Categorizes by sentiment, issue type, urgency' },
            { icon: Mail, title: 'Response Suggestions', desc: 'Draft replies for each review type' },
            { icon: AlertCircle, title: 'Escalation Alerts', desc: '1-2 star reviews flagged for immediate action' },
        ],
        outputs: ['Weekly sentiment report', 'Response drafts by category', 'Issue trend tracking', 'Competitor rating comparison', 'Staff mention alerts'],
        realExample: 'Caught a pattern of "slow service" mentions on Fridays. Identified understaffing issue before it tanked ratings.',
    },
    {
        id: 'content-engine',
        icon: Megaphone,
        title: 'Content Engine',
        tagline: 'One idea. Four channels. Full attribution.',
        description: 'AI creates content in your brand voice, distributes across channels, and tracks what actually drives bookings.',
        timeToValue: 'First content in 72 hours',
        steps: [
            { icon: FileText, title: 'Topic or Event Input', desc: 'Tell us what to promote (or we suggest based on calendar)' },
            { icon: Zap, title: '5-Agent Creation', desc: 'Research → Write → Edit → Format → Publish' },
            { icon: Megaphone, title: 'Multi-Channel Distribution', desc: 'Blog + Email + GMB + Social + QR codes' },
            { icon: BarChart3, title: 'Attribution Tracking', desc: 'Know which channel drove each booking' },
        ],
        outputs: ['Blog posts (SEO-optimized)', 'Email campaigns', 'GMB posts with images', 'Social media content', 'QR codes for print'],
        realExample: 'Truffle Dinner campaign: Email drove 40% of reservations, GMB caught 25% of new guests searching "Jupiter fine dining."',
    },
    {
        id: 'growth-mapper',
        icon: MapPin,
        title: 'Growth Mapper',
        tagline: 'Know exactly where to invest.',
        description: 'Quantified growth opportunities ranked by investment, risk, and expected return.',
        timeToValue: 'Opportunity report in 14 days',
        steps: [
            { icon: BarChart3, title: 'Data Deep Dive', desc: 'Analyze sales, PMIX, customer segments, dayparts' },
            { icon: Target, title: 'Opportunity Identification', desc: 'Find gaps: attachment rates, dead hours, untapped channels' },
            { icon: DollarSign, title: 'ROI Calculation', desc: 'Estimate revenue impact and investment required' },
            { icon: TrendingUp, title: 'Priority Ranking', desc: 'Rank by: quick wins vs long-term plays' },
        ],
        outputs: ['Opportunity dashboard', 'Investment/return matrix', 'Implementation roadmap', 'Quick wins list', 'Monthly tracking'],
        realExample: 'Coffee attachment rate at 12.6% vs 50% benchmark = $37K annual opportunity. Zero capital required, just training.',
    },
];

const SystemModal = ({ system, isOpen, onClose }) => {
    if (!isOpen || !system) return null;

    const IconComponent = system.icon;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-[#0F1419] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="p-6 border-b border-white/10">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#00E0FF]/20 flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-[#00E0FF]" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#F8FAFC]">{system.title}</h3>
                            <p className="text-[#00E0FF]">{system.tagline}</p>
                        </div>
                    </div>
                    <p className="text-gray-400">{system.description}</p>
                    <div className="flex items-center gap-2 mt-4 text-sm">
                        <Clock className="w-4 h-4 text-[#39FF14]" />
                        <span className="text-[#39FF14]">{system.timeToValue}</span>
                    </div>
                </div>

                {/* How It Works */}
                <div className="p-6 border-b border-white/10">
                    <h4 className="text-lg font-semibold mb-4 text-[#F8FAFC]">How It Works</h4>
                    <div className="space-y-4">
                        {system.steps.map((step, index) => {
                            const StepIcon = step.icon;
                            return (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#39FF14]/10 flex items-center justify-center">
                                        <span className="text-sm font-bold text-[#39FF14]">{index + 1}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <StepIcon className="w-4 h-4 text-[#00E0FF]" />
                                            <span className="font-medium text-[#F8FAFC]">{step.title}</span>
                                        </div>
                                        <p className="text-sm text-gray-400">{step.desc}</p>
                                    </div>
                                    {index < system.steps.length - 1 && (
                                        <div className="hidden md:block">
                                            <ChevronRight className="w-4 h-4 text-gray-600" />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* What You Get */}
                <div className="p-6 border-b border-white/10">
                    <h4 className="text-lg font-semibold mb-4 text-[#F8FAFC]">What You Get</h4>
                    <div className="grid grid-cols-2 gap-2">
                        {system.outputs.map((output, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[#39FF14] flex-shrink-0" />
                                <span className="text-sm text-gray-300">{output}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Real Example */}
                <div className="p-6">
                    <h4 className="text-lg font-semibold mb-3 text-[#F8FAFC]">From Our Portfolio</h4>
                    <div className="bg-[#1A1F26] rounded-lg p-4 border-l-4 border-[#00E0FF]">
                        <p className="text-gray-300 italic">"{system.realExample}"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HowSystemsWork = ({ onOpenModal }) => {
    const [selectedSystem, setSelectedSystem] = useState(null);

    return (
        <section id="systems" className="py-20 bg-[#0B0F14] text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full px-4 py-1.5 mb-4">
                        <span className="text-sm text-[#39FF14] font-medium">The Systems Running My $5M Portfolio</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        What Gets Installed
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Click any system to see exactly how it works—the inputs, the process, and what you get.
                        These are the same tools running Bagel Boyz, Salty Zebra, and The Locals Pub.
                    </p>
                </div>

                {/* Systems Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {systems.map((system) => {
                        const IconComponent = system.icon;
                        return (
                            <button
                                key={system.id}
                                onClick={() => setSelectedSystem(system)}
                                className="bg-surface/50 border border-white/10 rounded-xl p-6 text-left hover:border-[#00E0FF]/50 transition-all group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#00E0FF]/10 flex items-center justify-center transition-all group-hover:bg-[#00E0FF]/20">
                                        <IconComponent className="w-6 h-6 text-[#00E0FF]" />
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#00E0FF] transition-colors" />
                                </div>
                                <h3 className="text-lg font-semibold mb-1 text-[#F8FAFC]">
                                    {system.title}
                                </h3>
                                <p className="text-sm text-[#00E0FF] mb-2">
                                    {system.tagline}
                                </p>
                                <p className="text-sm text-gray-400">
                                    {system.description}
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-xs text-[#39FF14]">
                                    <Clock className="w-3 h-3" />
                                    <span>{system.timeToValue}</span>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <p className="text-gray-400 mb-4">
                        Want to see these systems configured for YOUR restaurants?
                    </p>
                    <button
                        onClick={onOpenModal}
                        data-cta="discovery-audit"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0B0F14] bg-[#39FF14] rounded-lg hover:bg-[#2FE010] transition-all shadow-lg shadow-[#39FF14]/30"
                    >
                        Book Discovery Audit
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Modal */}
            <SystemModal
                system={selectedSystem}
                isOpen={!!selectedSystem}
                onClose={() => setSelectedSystem(null)}
            />
        </section>
    );
};

export default HowSystemsWork;
