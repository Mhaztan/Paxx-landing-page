// src/components/Header.js
import React, { useState } from 'react';
import { NAV } from '../constants/data';
import { Menu, X, Package, MessageCircle } from 'lucide-react'; // Import icons
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ route, setRoute }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (routeKey) => {
        setRoute(routeKey);
        setIsMenuOpen(false); // Close menu on navigation
    };

    return (
        <header className="backdrop-blur-lg sticky top-0 z-40 bg-[#021627]/60 border-b border-[#062233]">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => handleNavClick('home')}
                >
                    <Package className="text-[#87d0ff]" />
                    <div className="font-bold text-xl">PAXX</div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {NAV.map((n) => (
                        <button
                            key={n.key}
                            onClick={() => handleNavClick(n.key)}
                            className={`text-sm transition-colors ${route === n.key ? 'text-[#87d0ff]' : 'text-gray-300'} hover:text-[#87d0ff]`}
                        >
                            {n.label}
                        </button>
                    ))}
                    <a
                        href="https://wa.me/2347073604575"
                        target="_blank"
                        rel="noreferrer"
                        className="ml-4 px-4 py-2 flex items-center gap-2 bg-[#87d0ff] text-[#022034] rounded-lg font-semibold hover:scale-105 transition-transform"
                    >
                        <MessageCircle size={16} />
                        WhatsApp
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(true)}>
                        <Menu className="text-white" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 h-full w-full max-w-xs bg-[#020e18] shadow-lg p-6 z-50 md:hidden"
                    >
                        <div className="flex justify-between items-center mb-10">
                            <div className="font-bold text-lg">Navigation</div>
                            <button onClick={() => setIsMenuOpen(false)}>
                                <X />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-6 bg-[#020e18]">
                            {NAV.map((n) => (
                                <button
                                    key={n.key}
                                    onClick={() => handleNavClick(n.key)}
                                    className={`text-left text-lg ${route === n.key ? 'text-[#87d0ff]' : 'text-gray-200'}`}
                                >
                                    {n.label}
                                </button>
                            ))}
                            <a
                                href="https://wa.me/2347073604575"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 px-4 py-3 text-center bg-[#87d0ff] text-[#022034] rounded-lg font-semibold"
                            >
                                WhatsApp Us
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;