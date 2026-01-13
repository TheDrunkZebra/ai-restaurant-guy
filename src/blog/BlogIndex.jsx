import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { getAllPosts } from './posts';

const BlogIndex = ({ onOpenModal }) => {
    const posts = getAllPosts();

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <Helmet>
                <title>Owner Stories | The AI Restaurant Guy</title>
                <meta name="description" content="Real stories from running three restaurants in Jupiter, FL. Lessons on operations, AI automation, and profitability from an owner-operator." />
                <meta property="og:title" content="Owner Stories | The AI Restaurant Guy" />
                <meta property="og:description" content="Real stories from running three restaurants in Jupiter, FL. Lessons on operations, AI automation, and profitability." />
                <meta property="og:image" content="https://theairestaurantguy.com/seamus-portrait.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://theairestaurantguy.com/blog" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="https://theairestaurantguy.com/seamus-portrait.jpg" />
                <link rel="canonical" href="https://theairestaurantguy.com/blog" />
            </Helmet>

            <div className="min-h-screen bg-[#0B0F14] text-[#F8FAFC]">
                {/* Header */}
                <header className="pt-24 pb-12 md:pt-32 md:pb-16 border-b border-white/5">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link
                            to="/"
                            className="inline-flex items-center text-sm text-gray-400 hover:text-[#4ADE80] mb-6 transition-colors"
                        >
                            ← Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Owner Stories
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl">
                            Lessons from running three restaurants in Jupiter, FL.
                            Real operations, real numbers, real talk.
                        </p>
                    </div>
                </header>

                {/* Posts List */}
                <main className="py-12 md:py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        {posts.length === 0 ? (
                            <p className="text-gray-400 text-center py-12">
                                No posts yet. Check back soon.
                            </p>
                        ) : (
                            <div className="space-y-8">
                                {posts.map((post) => (
                                    <article
                                        key={post.slug}
                                        className="group bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 hover:border-[#4ADE80]/50 transition-all"
                                    >
                                        <Link to={`/blog/${post.slug}`}>
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {post.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="inline-flex items-center gap-1 text-xs text-[#4ADE80] bg-[#4ADE80]/10 px-2 py-1 rounded-full"
                                                    >
                                                        <Tag className="w-3 h-3" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-xl md:text-2xl font-bold text-[#F8FAFC] group-hover:text-[#4ADE80] transition-colors mb-3">
                                                {post.title}
                                            </h2>

                                            {/* Description */}
                                            <p className="text-gray-400 mb-4 leading-relaxed">
                                                {post.description}
                                            </p>

                                            {/* Meta */}
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <span className="inline-flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {formatDate(post.date)}
                                                </span>
                                                {post.readTime && (
                                                    <span className="inline-flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        {post.readTime} min read
                                                    </span>
                                                )}
                                            </div>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </main>

                {/* Bottom CTA Module */}
                <section className="py-16 border-t border-white/5">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to find money hiding in your restaurant?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            I use the same systems from these posts in my own restaurants.
                            Let me audit yours and show you where the leaks are.
                        </p>
                        <button
                            onClick={onOpenModal}
                            data-cta="start-audit"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0B0F14] bg-[#4ADE80] rounded-lg hover:bg-[#3FCF70] transition-all shadow-lg shadow-[#4ADE80]/30"
                        >
                            Start the $500 Audit
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default BlogIndex;
