// src/components/Features.js
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ShieldCheck, Zap } from 'lucide-react'; // Example icons

const coreFeatures = [
    { title: 'Student Marketplace', desc: 'A dedicated space for student-to-student listings for phones, fashion, textbooks, and services.', icon: <ShoppingCart size={28} className="text-[#87d0ff]" /> },
    { title: 'Trust & Safety System', desc: 'Trade with confidence using Verified badges, Trust Points, and lightweight transaction confirmations.', icon: <ShieldCheck size={28} className="text-[#87d0ff]" /> },
    { title: 'Fresh & Relevant Feed', desc: 'Auto-expiring listings keep the marketplace clean and clutter-free, showing you only what\'s fresh and available.', icon: <Zap size={28} className="text-[#87d0ff]" /> }
];

const Features = () => (
    <section className="py-20 bg-[#021627] text-white">
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold">Why Choose PAXX?</h2>
                <p className="mt-3 max-w-2xl mx-auto text-gray-400">
                    We built PAXX from the ground up to solve the unique challenges of campus commerce.
                </p>
            </motion.div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {coreFeatures.map((feature, i) => (
                    <motion.div
                        key={i}
                        className="p-8 rounded-xl bg-gradient-to-br from-[#06324b] to-[#022233] shadow-lg"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-300">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Features;