import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { getPostBySlug } from './posts';

/**
 * Simple Markdown-to-JSX renderer
 * Handles: headers, paragraphs, bold, italic, lists, hr, blockquotes
 */
const renderContent = (content) => {
    const lines = content.split('\n');
    const elements = [];
    let currentList = null;
    let listItems = [];

    const processInlineFormatting = (text) => {
        // Bold
        text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        // Italic
        text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
        return text;
    };

    const flushList = () => {
        if (listItems.length > 0) {
            elements.push(
                <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 text-gray-300 my-4 ml-4">
                    {listItems.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: processInlineFormatting(item) }} />
                    ))}
                </ul>
            );
            listItems = [];
        }
    };

    lines.forEach((line, idx) => {
        const trimmed = line.trim();

        // Skip empty lines (but flush lists)
        if (!trimmed) {
            flushList();
            return;
        }

        // Horizontal rule
        if (trimmed === '---') {
            flushList();
            elements.push(<hr key={idx} className="border-white/10 my-8" />);
            return;
        }

        // Headers
        if (trimmed.startsWith('## ')) {
            flushList();
            elements.push(
                <h2 key={idx} className="text-2xl font-bold text-[#F8FAFC] mt-8 mb-4">
                    {trimmed.slice(3)}
                </h2>
            );
            return;
        }

        if (trimmed.startsWith('### ')) {
            flushList();
            elements.push(
                <h3 key={idx} className="text-xl font-semibold text-[#F8FAFC] mt-6 mb-3">
                    {trimmed.slice(4)}
                </h3>
            );
            return;
        }

        // List items
        if (trimmed.startsWith('- ')) {
            listItems.push(trimmed.slice(2));
            return;
        }

        // Blockquote
        if (trimmed.startsWith('> ')) {
            flushList();
            elements.push(
                <blockquote
                    key={idx}
                    className="border-l-4 border-[#4ADE80] pl-4 py-2 my-4 text-gray-300 italic"
                    dangerouslySetInnerHTML={{ __html: processInlineFormatting(trimmed.slice(2)) }}
                />
            );
            return;
        }

        // Regular paragraph
        flushList();
        elements.push(
            <p
                key={idx}
                className="text-gray-300 leading-relaxed my-4"
                dangerouslySetInnerHTML={{ __html: processInlineFormatting(trimmed) }}
            />
        );
    });

    flushList();
    return elements;
};

/**
 * YouTube Embed Component (privacy-enhanced)
 */
const YouTubeEmbed = ({ videoId, title }) => {
    if (!videoId) return null;

    return (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden my-8 border border-white/10">
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title={title || 'Video'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
            />
        </div>
    );
};

const BlogPost = ({ onOpenModal }) => {
    const { slug } = useParams();
    const post = getPostBySlug(slug);

    // 404 if post not found
    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const canonicalUrl = `https://theairestaurantguy.com/blog/${post.slug}`;

    return (
        <>
            <Helmet>
                <title>{post.title} | The AI Restaurant Guy</title>
                <meta name="description" content={post.description} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.description} />
                <meta property="og:image" content="https://theairestaurantguy.com/seamus-portrait.jpg" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="article:published_time" content={post.date} />
                {post.tags.map(tag => (
                    <meta key={tag} property="article:tag" content={tag} />
                ))}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="https://theairestaurantguy.com/seamus-portrait.jpg" />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>

            <div className="min-h-screen bg-[#0B0F14] text-[#F8FAFC]">
                {/* Header */}
                <header className="pt-24 pb-8 md:pt-32 md:pb-12">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#4ADE80] mb-8 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            All Posts
                        </Link>

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
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            {post.title}
                        </h1>

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
                    </div>
                </header>

                {/* YouTube Embed (if present) */}
                {post.youtubeId && (
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <YouTubeEmbed videoId={post.youtubeId} title={post.title} />
                    </div>
                )}

                {/* Content */}
                <article className="pb-12">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="prose prose-invert max-w-none">
                            {renderContent(post.content)}
                        </div>
                    </div>
                </article>

                {/* End-of-post CTA */}
                <section className="py-16 border-t border-white/5">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-[#4ADE80]/10 border border-[#4ADE80]/30 rounded-xl p-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">
                                Ready to find the money hiding in your restaurant?
                            </h2>
                            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                                I'll audit your vendor contracts and operations using the same system I use in my own restaurants.
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
                    </div>
                </section>

                {/* Back to blog link */}
                <div className="pb-16">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#4ADE80] transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to all posts
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPost;
