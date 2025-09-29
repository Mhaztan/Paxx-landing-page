// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onJoin }) => (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#06203a] via-[#052a4d] to-[#021627] text-white">
        <div className="container mx-auto px-6 py-20 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                    initial={{ x: -30, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        PAXX — <span className="text-[#8bd3ff]">Your Campus Plug</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-gray-200">
                        A student-first marketplace for Nigerian campuses. Buy, sell, and discover opportunities safely within your university community. Launching November 2025.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button 
                            onClick={onJoin} 
                            className="px-6 py-3 rounded-lg bg-[#87d0ff] text-[#f5f7f8] font-semibold shadow-lg hover:scale-[1.03] transform transition-transform duration-200"
                        >
                            Join Waitlist
                        </button>
                        <a 
                            href="https://wa.me/2347073604575" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="px-6 py-3 rounded-lg border border-gray-400 hover:bg-white/10 transition-colors"
                        >
                            WhatsApp Us
                        </a>
                    </div>

                    <div className="mt-8 text-sm text-gray-300">
                        Be among the first 1,000 students to receive <span className="font-semibold text-white">free verification</span> at launch.
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ x: 30, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.6 }} 
                    className="flex justify-center lg:justify-end"
                >
                    <div className="w-full max-w-md rounded-2xl bg-gradient-to-br from-[#093b5a] to-[#032433] p-6 shadow-2xl">
                        <div className="h-64 bg-[url('https://cdn.pixabay.com/photo/2017/10/24/07/15/college-2883655_640.jpg')] bg-cover bg-center rounded-lg shadow-inner" />
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default Hero;