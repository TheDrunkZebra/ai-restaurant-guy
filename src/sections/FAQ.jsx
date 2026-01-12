import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Is this just social posting?",
            answer: "No — we deploy ops workflows across marketing, service, and back‑office."
        },
        {
            question: "Do you replace staff?",
            answer: "We cut the boring tasks so people can do higher‑value work."
        },
        {
            question: "What tools do you use?",
            answer: "Modern AI agents with your stack (POS, email, ads)."
        },
        {
            question: "Do I need to switch platforms?",
            answer: "Usually no. We integrate, then optimize."
        },
        {
            question: "What about data privacy?",
            answer: "Your data stays in your tools; NDAs available."
        },
        {
            question: "How fast is setup?",
            answer: "Quick Start in 3–5 days; Growth in 1–2 weeks."
        }
    ];

    return (
        <section className="py-20 bg-surface/30 text-[#F8FAFC]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    FAQs
                </h2>
                
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className="bg-[#0B0F14] border border-white/10 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface/50 transition-all"
                            >
                                <h3 className="text-lg font-semibold text-[#F8FAFC]">
                                    {faq.question}
                                </h3>
                                <span className="text-2xl text-gray-400">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4">
                                    <p className="text-gray-300 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

