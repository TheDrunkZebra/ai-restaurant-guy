import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Check, Loader2 } from 'lucide-react';

const AIBuildPlanModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        restaurantName: '',
        services: [],
        revenueRange: '',
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

    const serviceOptions = [
        'AI Content Workflows',
        'Reputation Management',
        'Google Ads Optimizer',
        'Budgeting/Financial',
        'Contract Auditor',
        'Landing Page Builder',
        'Social Media Automation',
        'Email/Newsletter',
        'Events & Catering',
        'Custom Build',
    ];

    const revenueOptions = [
        'Under $500k',
        '$500k - $1M',
        '$1M - $2M',
        '$2M+',
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleServiceToggle = (service) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            // Create mailto link as fallback for now
            // This can be replaced with Formspree endpoint later
            const mailtoSubject = encodeURIComponent(`AI Build Plan Request - ${formData.restaurantName}`);
            const mailtoBody = encodeURIComponent(`
New AI Build Plan Request

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Restaurant: ${formData.restaurantName}
Annual Revenue: ${formData.revenueRange}
Services Interested In: ${formData.services.join(', ')}

Biggest Pain Point:
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
            services: [],
            revenueRange: '',
            painPoint: '',
        });
        setIsSuccess(false);
        setError(null);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-[#0E131B] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
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
                        <div className="text-center mb-8">
                            <div className="inline-block mb-4">
                                <span className="bg-[#39FF14]/20 text-[#39FF14] px-4 py-2 rounded-full text-sm font-semibold">
                                    Free Custom Build Plan
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Get Your AI Build Plan
                            </h2>
                            <p className="text-gray-400">
                                Tell us about your restaurant. We'll design a custom AI system for you.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Contact Info */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#0B0F14] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00E0FF] transition-colors"
                                        placeholder="John Smith"
                                    />
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
                                        className="w-full px-4 py-3 bg-[#0B0F14] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00E0FF] transition-colors"
                                        placeholder="john@restaurant.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
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
                                        className="w-full px-4 py-3 bg-[#0B0F14] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00E0FF] transition-colors"
                                        placeholder="(555) 123-4567"
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
                                        className="w-full px-4 py-3 bg-[#0B0F14] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00E0FF] transition-colors"
                                        placeholder="Your Restaurant"
                                    />
                                </div>
                            </div>

                            {/* Services Interest */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-3">
                                    Which AI systems interest you? (Select all that apply)
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    {serviceOptions.map((service) => (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => handleServiceToggle(service)}
                                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                                formData.services.includes(service)
                                                    ? 'bg-[#00E0FF]/20 text-[#00E0FF] border border-[#00E0FF]'
                                                    : 'bg-[#0B0F14] text-gray-400 border border-white/10 hover:border-white/20'
                                            }`}
                                        >
                                            {formData.services.includes(service) && (
                                                <Check className="w-3 h-3 inline mr-1" />
                                            )}
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Revenue Range */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Annual Revenue Range
                                </label>
                                <select
                                    name="revenueRange"
                                    value={formData.revenueRange}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#0B0F14] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00E0FF] transition-colors"
                                >
                                    <option value="">Select range...</option>
                                    {revenueOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Pain Point */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    What's your biggest operational pain point? *
                                </label>
                                <textarea
                                    name="painPoint"
                                    value={formData.painPoint}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    className="w-full px-4 py-3 bg-[#0B0F14] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00E0FF] transition-colors resize-none"
                                    placeholder="E.g., Spending too much time on social media, can't keep up with reviews, marketing costs are too high..."
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
                                className="w-full bg-[#39FF14] text-[#0B0F14] font-bold py-4 px-6 rounded-lg hover:bg-[#2FE010] transition-all shadow-lg shadow-[#39FF14]/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Get My Build Plan
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs text-gray-500">
                                We'll respond within 24 hours.
                            </p>
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
                            Thanks for your interest, <strong className="text-white">{formData.name}</strong>!
                            We'll review your restaurant details and send your custom AI build plan within 24 hours.
                        </p>
                        <div className="bg-[#0B0F14] border border-white/10 rounded-lg p-4 mb-6">
                            <p className="text-sm text-gray-400">
                                <strong className="text-[#00E0FF]">What happens next:</strong>
                            </p>
                            <ul className="text-sm text-gray-300 mt-2 space-y-1 text-left max-w-sm mx-auto">
                                <li>1. We analyze your restaurant's needs</li>
                                <li>2. Design custom AI workflows for you</li>
                                <li>3. Send your build plan with pricing</li>
                                <li>4. Schedule a call to walk through it</li>
                            </ul>
                        </div>
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
