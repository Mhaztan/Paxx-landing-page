// src/components/Faq.js
import React from 'react';

const Faq = ({ faqs }) => (
    <section className="py-20 bg-[#03142a] text-white">
        <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
                <p className="mt-3 text-gray-400">
                    Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
                </p>
            </div>
            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <details key={i} className="group bg-gradient-to-br from-[#06324b] to-[#022233] p-5 rounded-lg" >
                        <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                            {faq.q}
                            <div className="transition-transform duration-300 group-open:rotate-45">
                                +
                            </div>
                        </summary>
                        <div className="mt-4 pt-4 border-t border-white/10 text-gray-300">
                            {faq.a}
                        </div>
                    </details>
                ))}
            </div>
        </div>
    </section>
);

export default Faq;