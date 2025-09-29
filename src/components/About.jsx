// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = ({ team }) => (
    <section className="py-20 bg-[#031827] text-white">
        <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">About Us</h2>
                <p className="mt-6 text-gray-300 leading-relaxed">
                    PAXX was born from a simple idea: <span className="text-white font-semibold">
                        to make campus life easier</span>. As students ourselves, we
                    experienced firsthand the clutter of WhatsApp groups and status spam
                    when trying to buy or sell things, find services, or share
                    opportunities. We knew there had to be a better way.
                </p>
                <p className="mt-4 text-gray-300 leading-relaxed">
                    That’s why we started building PAXX — a trusted, student-first
                    marketplace designed exclusively for Nigerian campuses. Our platform
                    helps students connect, trade, and discover opportunities within their
                    community in a way that’s simple, safe, and built for their needs.
                </p>
            </div>

            {/* Team Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {team.map((m, idx) => (
                    <motion.div
                        key={m.name}
                        className="p-8 rounded-2xl bg-gradient-to-br from-[#06324b] to-[#022233] shadow-lg"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        whileHover={{ y: -8 }}
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                                    m.name
                                )}&background=021627&color=87d0ff&size=128`}
                                alt={m.name}
                                className="w-20 h-20 rounded-full object-cover border-2 border-[#093b5a]"
                            />
                            <div>
                                <div className="font-semibold text-xl">{m.name}</div>
                                <div className="text-sm text-[#87d0ff]">{m.role}</div>
                            </div>
                        </div>
                        <p className="mt-6 text-gray-300 leading-relaxed">{m.bio}</p>
                        <div className="mt-6 flex gap-6">
                            <a
                                href={`https://wa.me/${m.whatsapp.replace(/\+/g, '')}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm hover:underline hover:text-[#87d0ff] transition-colors"
                            >
                                WhatsApp
                            </a>
                            <a
                                href={`mailto:${m.email}`}
                                className="text-sm hover:underline hover:text-[#87d0ff] transition-colors"
                            >
                                Email
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-20">
                <motion.a
                    href="#waitlist"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-8 py-3 rounded-full bg-[#87d0ff] text-[#031827] font-semibold shadow-md hover:shadow-lg transition"
                >
                    Join the Waitlist
                </motion.a>
            </div>
        </div>
    </section>
);

export default About;
