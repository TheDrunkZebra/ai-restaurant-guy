import React from 'react';
import { ArrowRight, TrendingUp, Clock, Building2, Target } from 'lucide-react';

const AboutSection = ({ onOpenModal }) => {
    const stats = [
        { value: '12', label: 'Years Operating', icon: Clock },
        { value: '400%', label: 'Revenue Growth', icon: TrendingUp },
        { value: '3', label: 'Concepts Running', icon: Building2 },
        { value: '20%+', label: 'Profit Margins', icon: Target },
    ];

    return (
        <section id="about" className="py-20 bg-[#0B0F14] text-[#F8FAFC]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Statement */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        I spent 12 years figuring out how to compete with corporate restaurants
                        <span className="text-[#39FF14]"> on an independent's budget.</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Now I install those systems for other operators.
                    </p>
                </div>

                {/* Photo + Short Version */}
                <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                    <img
                        src="/seamus-portrait.jpg"
                        alt="Seamus O'Brien"
                        className="w-48 h-48 rounded-2xl object-cover object-top border-2 border-[#39FF14]/30"
                    />
                    <div>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I'm Seamus O'Brien. I run three restaurant concepts in South Florida—a
                            20-year-old bagel shop, a chef-driven bistro, and a live music pub. I took
                            over the family business at 28 when it was struggling and grew it 400% through
                            relentless iteration, obsessive number-tracking, and more recently, AI systems
                            that let me operate like I have a back-office team of 10.
                        </p>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="bg-[#0F1419] border border-white/10 rounded-xl p-4 text-center"
                            >
                                <Icon className="w-5 h-5 text-[#00E0FF] mx-auto mb-2" />
                                <div className="text-2xl font-bold text-[#39FF14]">{stat.value}</div>
                                <div className="text-xs text-gray-500">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>

                {/* Story Sections */}
                <div className="space-y-12">
                    {/* How I Got Here */}
                    <div>
                        <h3 className="text-sm font-semibold text-[#00E0FF] uppercase tracking-wider mb-4">
                            How I Got Here
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            My mom got sick about 12 years ago. I was 28, working at our family bagel
                            shop, and suddenly I was running it. The business was struggling. I didn't
                            have an MBA or a playbook—just a desperate need to figure it out.
                        </p>
                        <p className="text-gray-300 leading-relaxed mt-4">
                            My dad was a CPA, so numbers came naturally. I could always see what needed
                            to happen—the labor targets, the food cost percentages, the marketing gaps.
                            The problem was execution. I didn't have a team. I was the GM, the marketer,
                            the bookkeeper, and the guy unclogging the toilet at midnight.
                        </p>
                    </div>

                    {/* The Wall */}
                    <div>
                        <h3 className="text-sm font-semibold text-[#00E0FF] uppercase tracking-wider mb-4">
                            The Wall I Kept Hitting
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            For years, I watched corporate restaurants do things I couldn't afford:
                            dedicated analytics teams, content departments, contract specialists. I'd
                            spend hours in Google Analytics trying to extract insights they got in
                            minutes. I knew what to implement but couldn't keep up with implementation.
                        </p>
                        <p className="text-gray-300 leading-relaxed mt-4">
                            The business grew anyway—400% over 12 years, margins now above 20%—but it
                            was a grind. Every system I built, I built manually. Every insight came
                            from staring at spreadsheets until my eyes crossed.
                        </p>
                    </div>

                    {/* The Breakthrough */}
                    <div>
                        <h3 className="text-sm font-semibold text-[#00E0FF] uppercase tracking-wider mb-4">
                            What Changed Everything
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Two years ago, I went deep on AI. Not the chatbot gimmick stuff—actual
                            operational systems. I built what I call "agent crews": AI team members
                            with specific roles, standard operating procedures, and real capabilities.
                            A contract analysis agent that catches bad vendor terms. A CFO agent that
                            processes data and flags problems. Content workflows that produce in hours
                            what used to take weeks.
                        </p>
                        <p className="text-gray-300 leading-relaxed mt-4">
                            For the first time, I could operate like I had the resources of a corporate
                            group. The things I'd always known needed to happen? Now I could actually
                            do them.
                        </p>
                    </div>

                    {/* The Bridge */}
                    <div className="bg-[#0F1419] border border-white/10 rounded-2xl p-8">
                        <h3 className="text-sm font-semibold text-[#00E0FF] uppercase tracking-wider mb-4">
                            Why I'm Telling You This
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Because you're probably where I was. You know what your restaurant needs.
                            You can see the gaps. But you're one person trying to do the work of six,
                            and the AI stuff feels overwhelming to figure out on top of everything else.
                        </p>
                        <p className="text-lg text-[#F8FAFC] leading-relaxed mb-8">
                            When you work with me, you're not just getting a consultant—you're getting
                            access to the systems I spent two years building. I install them into your
                            operation, train your team, and stick around to make sure they actually work.
                        </p>
                        <button
                            onClick={onOpenModal}
                            data-cta="discovery-audit"
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[#0B0F14] bg-[#39FF14] rounded-lg hover:bg-[#2FE010] transition-all shadow-lg shadow-[#39FF14]/30"
                        >
                            Let's See If It's a Fit
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
