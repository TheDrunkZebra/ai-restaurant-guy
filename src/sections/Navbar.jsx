import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = ({ onOpenModal }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F14]/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Brand - Name removed per request */}
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold text-[#F8FAFC]">The AI Restaurant Guy</h1>
                    </div>

                    {/* Desktop Nav - ONE primary CTA */}
                    <div className="hidden md:flex items-center gap-6">
                        <a
                            href="#demo"
                            className="text-sm text-gray-400 hover:text-[#00E0FF] transition-colors"
                        >
                            See the System
                        </a>
                        <button
                            onClick={onOpenModal}
                            className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-[#0B0F14] bg-[#39FF14] rounded-lg hover:bg-[#2FE010] transition-all shadow-lg shadow-[#39FF14]/50 cursor-pointer"
                        >
                            Start $500 Audit
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-[#F8FAFC]" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu - ONE primary CTA */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-[#0B0F14] border-b border-white/10 p-6 flex flex-col gap-4">
                        <button onClick={() => { onOpenModal(); setIsOpen(false); }} className="text-lg font-semibold text-[#39FF14] text-left">
                            Start $500 Audit →
                        </button>
                        <a href="#demo" className="text-sm text-gray-400" onClick={() => setIsOpen(false)}>
                            See the System
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
