import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/common';
import { heroMockup } from '../../assets';
import { APP_TAGLINE } from '../../constants';
import { useModal } from '../../context/ModalContext';

export const HeroSection = () => {
    const { openModal } = useModal(); // Get the function from context
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="bg-accent text-bkg py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Text Content */}
                    <div className="text-center md:text-left">
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
                            variants={itemVariants}
                        >
                            paxx: <span className="text-primary">{APP_TAGLINE}</span>
                        </motion.h1>
                        <motion.p
                            className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0"
                            variants={itemVariants}
                        >
                            The ultimate student marketplace with a social twist. Buy, sell, and connect with fellow students on your campus.
                        </motion.p>
                        <motion.div variants={itemVariants} className="mt-8">
                            <Button onClick={openModal} className="w-full sm:w-auto px-8 py-3 text-lg">
                                Join the Waitlist
                            </Button>
                        </motion.div>
                    </div>

                    {/* Image Content */}
                    <motion.div
                        className="flex justify-center"
                        variants={itemVariants}
                    >
                        <img
                            src={heroMockup}
                            alt="Paxx App Mockup"
                            className="max-w-xs md:max-w-md lg:max-w-lg rounded-lg"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};