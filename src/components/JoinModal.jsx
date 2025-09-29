// src/components/JoinModal.js
import React from 'react';
import { motion } from 'framer-motion';

const JoinModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={onClose}>
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="w-full max-w-md bg-[#021827] rounded-xl p-6 border border-[#06324b]"
                onClick={e => e.stopPropagation()} // Prevent closing modal when clicking inside
            >
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Join the Waitlist</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
                </div>
                <p className="mt-2 text-sm text-gray-300">Get notified at launch and receive early access privileges.</p>

                {/* --- Formspree ID Updated --- */}
                <form action="https://formspree.io/f/mldpjvjk" method="POST" className="mt-4 space-y-3">
                    <input name="name" type="text" placeholder="Your name" className="w-full p-3 rounded bg-[#011627] border border-[#06324b] focus:ring-2 focus:ring-[#87d0ff] outline-none" />
                    <input name="email" type="email" placeholder="you@school.edu" required className="w-full p-3 rounded bg-[#011627] border border-[#06324b] focus:ring-2 focus:ring-[#87d0ff] outline-none" />
                    <div className="flex gap-3 pt-2">
                        <button type="submit" className="flex-1 px-4 py-2 rounded bg-[#87d0ff] text-[#022034] font-semibold">Join Waitlist</button>
                        <a href="https://wa.me/2347073604575" className="flex-1 text-center px-4 py-2 rounded border border-gray-500 hover:bg-gray-700">Join via WhatsApp</a>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default JoinModal;