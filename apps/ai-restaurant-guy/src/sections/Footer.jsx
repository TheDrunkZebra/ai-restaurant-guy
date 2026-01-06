import React from 'react';

const Footer = () => {
    return (
        <footer className="py-20 border-t border-white/5 text-center bg-background">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <p className="text-2xl font-bold text-white mb-2">Wildly Refined. Zero Pretense.</p>
                    <p className="text-textSecondary">For Private Events, DM <span className="font-bold text-primary">'EVENTS'</span> on Instagram.</p>
                </div>
                <p className="text-sm text-textSecondary uppercase tracking-widest mt-12 opacity-50">
                    &copy; {new Date().getFullYear()} The Salty Zebra / O'Brien Creative Studio.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

