import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <img src="/assets/logo-zebra-head.png" alt="Salty Zebra" className="w-10 h-10 object-contain" />
                        <span className="font-bold text-xl tracking-tighter text-white">ANTIGRAVITY</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#systems" className="text-sm font-medium text-textSecondary hover:text-primary transition-colors">The Systems</a>
                        <a href="#audit" className="text-sm font-medium text-textSecondary hover:text-primary transition-colors">Revenue Audit</a>
                        <a href="#audit" className="bg-primary text-background px-6 py-2.5 rounded-lg font-bold text-sm transition-all hover:bg-primary/90 shadow-[0_0_15px_rgba(0,224,255,0.2)]">
                            GET STARTED
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top">
                        <a href="#systems" className="text-lg font-medium text-white" onClick={() => setIsOpen(false)}>The Systems</a>
                        <a href="#audit" className="text-lg font-medium text-white" onClick={() => setIsOpen(false)}>Revenue Audit</a>
                        <a href="#audit" className="bg-primary text-background px-6 py-4 rounded-lg font-bold text-center" onClick={() => setIsOpen(false)}>
                            GET STARTED
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
