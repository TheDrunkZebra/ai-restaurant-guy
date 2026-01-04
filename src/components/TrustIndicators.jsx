import React from 'react';
import { Star } from 'lucide-react';

const TrustIndicators = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 opacity-80">
            <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-surface border-2 border-background flex items-center justify-center overflow-hidden">
                        {/* Placeholder avatars or initials */}
                        <div className="w-full h-full bg-gray-700 flex items-center justify-center text-xs text-white">
                            {String.fromCharCode(64 + i)}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col">
                <div className="flex items-center gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                </div>
                <p className="text-sm text-textSecondary">
                    <span className="text-textPrimary font-semibold">500+</span> Restaurant Operators
                </p>
            </div>
        </div>
    );
};

export default TrustIndicators;

