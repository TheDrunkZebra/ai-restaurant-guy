import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Check, Loader2, ShieldCheck } from 'lucide-react';

const AIBuildPlanModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        restaurantName: '',
        painPoint: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            // Create mailto link as fallback for now
            const mailtoSubject = encodeURIComponent(`$500 Audit Request - ${formData.restaurantName}`);
            const mailtoBody = encodeURIComponent(`
$500 Savings Audit Request

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Restaurant: ${formData.restaurantName}

What's happening in your restaurant:
${formData.painPoint}
            `.trim());

            // Open mailto (will also work as a backup)
            window.location.href = `mailto:info@saltyzebrabistro.com?subject=${mailtoSubject}&body=${mailtoBody}`;

            // Show success state
            setIsSuccess(true);
        } catch (err) {
            setError('Something went wrong. Please try again or email us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            restaurantName: '',
            painPoint: '',
        });
        setIsSuccess(false);
        setError(null);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" data-modal="audit-intake">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-[#0E131B] border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-10"
                >
                    <X className="w-6 h-6" />
                </button>

                {!isSuccess ? (
                    <div className="p-6 md:p-8">
                        {/* Header */}
                        <div className="text-center mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                Start the $500 Audit
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                Tell me about your restaurant. I'll run a savings audit using the same system I use in my own spots.
                            </p>
                        </div>

                        {/* Guarantee */}
                        <div className="flex items-start gap-3 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-lg p-4 mb-6">
                            <ShieldCheck className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-300">
                                <span className="font-semibold text-[#39FF14]">2× guarantee:</span> if we can't uncover at least 2× your audit fee in documented savings opportunities, we keep working at no extra cost until we do.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Contact Info */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#0B0F14] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#39FF14] transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#0B0F14] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#39FF14] transition-colors"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#0B0F14] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#39FF14] transition-colors"
                                    placeholder="you@restaurant.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Restaurant Name *
                                </label>
                                <input
                                    type="text"
                                    name="restaurantName"
                                    value={formData.restaurantName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#0B0F14] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#39FF14] transition-colors"
                                    placeholder="Your Restaurant"
                                />
                            </div>

                            {/* Pain Point */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    What's happening in your restaurant right now? *
                                </label>
                                <textarea
                                    name="painPoint"
                                    value={formData.painPoint}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    className="w-full px-4 py-3 bg-[#0B0F14] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#39FF14] transition-colors resize-none"
                                    placeholder="E.g., Food costs feel high, not sure where money is going, vendors keep raising prices..."
                                />
                            </div>

                            {/* Error Display */}
                            {error && (
                                <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 text-red-400 text-sm">
                                    {error}
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                data-cta="start-audit"
                                className="w-full bg-[#39FF14] text-[#0B0F14] font-bold py-4 px-6 rounded-lg hover:bg-[#2FE010] transition-all shadow-lg shadow-[#39FF14]/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Start My $500 Audit
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                ) : (
                    /* Success State */
                    <div className="p-8 md:p-12 text-center">
                        <div className="w-20 h-20 rounded-full bg-[#39FF14]/20 flex items-center justify-center mx-auto mb-6">
                            <Check className="w-10 h-10 text-[#39FF14]" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Request Sent!
                        </h2>
                        <p className="text-gray-400 mb-6 max-w-md mx-auto">
                            Thanks, <strong className="text-white">{formData.name}</strong>!
                            I'll review your info and reach out within 24 hours to get started on your savings audit.
                        </p>
                        <button
                            onClick={() => {
                                resetForm();
                                onClose();
                            }}
                            className="px-8 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AIBuildPlanModal;
