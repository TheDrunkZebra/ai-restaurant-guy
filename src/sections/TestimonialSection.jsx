import React from 'react';
import { Quote } from 'lucide-react';

/**
 * TestimonialSection - Dedicated section for testimonials
 * Moved below the fold per mobile optimization requirements
 * Dark theme + green accent (#4ADE80/#39FF14) for consistency
 */
const TestimonialSection = () => {
    return (
        <section className="py-12 md:py-16 bg-[#0B0F14] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Testimonial - Featured */}
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white/5 rounded-xl p-6 md:p-8 border border-white/10 relative">
                        <Quote className="absolute top-4 left-4 w-8 h-8 text-[#4ADE80]/20" />
                        <p className="text-lg md:text-xl text-gray-200 italic mb-4 pl-8">
                            "Seamus found $11k in vendor contracts we didn't know we were overpaying. Paid for itself the first month."
                        </p>
                        <p className="text-sm text-gray-400 pl-8">
                            — Mike R., Restaurant Owner, Palm Beach
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TestimonialSection;
