import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 text-center">
            <div className="container mx-auto px-4">
                <p className="text-textSecondary mb-4">
                    &copy; {new Date().getFullYear()} The AI Restaurant Guy. All rights reserved.
                </p>
                <p className="text-sm text-textSecondary/50 font-mono">
                    Wildly Refined. Zero Pretense.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

