// src/components/ComingSoon.js
import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

const ComingSoon = ({ onJoin }) => (
    <section className="py-20 bg-[#03142a] text-white">
        <div className="container mx-auto px-6 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold">Launching November 2025</motion.h2>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto">We're working hard to bring you the best student marketplace. Sign up for early access and product updates.</p>

            {/* --- Countdown Timer Added Here --- */}
            <CountdownTimer targetDate="2025-11-01T00:00:00" />

            <div className="mt-10">
                <button onClick={onJoin} className="px-8 py-4 rounded-lg bg-[#87d0ff] text-[#f7fbfd] font-semibold shadow-lg hover:scale-105 transform transition">Join The Waitlist</button>
            </div>
        </div>
    </section>
);

export default ComingSoon;