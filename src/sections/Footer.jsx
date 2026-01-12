import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 md:py-16 border-t border-white/5 text-center bg-[#0B0F14] text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <p className="text-xl md:text-2xl font-bold text-[#00E0FF]">
                        The AI Restaurant Guy
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                        AI automation for independent restaurants
                    </p>
                </div>
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest opacity-60">
                    &copy; {new Date().getFullYear()} O'Brien Hospitality and Consulting
                </p>
            </div>
        </footer>
    );
};

export default Footer;
