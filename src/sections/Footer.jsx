import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, BookOpen } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 md:py-16 border-t border-white/5 bg-[#0B0F14] text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Brand */}
                <div className="text-center mb-8">
                    <p className="text-xl md:text-2xl font-bold text-[#00E0FF]">
                        The AI Restaurant Guy
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                        AI automation for independent restaurants
                    </p>
                </div>

                {/* Links */}
                <div className="flex justify-center gap-6 mb-8">
                    <Link 
                        to="/blog"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#4ADE80] transition-colors"
                    >
                        <BookOpen className="w-4 h-4" />
                        Blog
                    </Link>
                    <a 
                        href="https://www.youtube.com/@TheAIRestaurantGuy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#4ADE80] transition-colors"
                    >
                        <Youtube className="w-4 h-4" />
                        YouTube
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest opacity-60 text-center">
                    &copy; {new Date().getFullYear()} O'Brien Hospitality and Consulting
                </p>
            </div>
        </footer>
    );
};

export default Footer;
