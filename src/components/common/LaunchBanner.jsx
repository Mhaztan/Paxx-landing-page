import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FiInfo, FiX } from 'react-icons/fi';
import { useModal } from '../../context/ModalContext'; // Import the hook

export const LaunchBanner = ({ isVisible, onDismiss }) => {
    const { openModal } = useModal(); // Get the openModal function from context

    const bannerVariants = {
        hidden: { y: '-100%', opacity: 0 },
        visible: { y: '0%', opacity: 1 },
        exit: { y: '-100%', opacity: 0 },
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    variants={bannerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="bg-primary text-white w-full z-50 fixed top-0 left-0" // Add fixed positioning
                >
                    {/* ... content is the same */}
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3 flex-grow">
                                <FiInfo className="hidden sm:block flex-shrink-0" size={20} />
                                <p className="text-sm font-medium text-center sm:text-left flex-grow">
                                    <span className="font-bold">Exciting News!</span> Paxx is launching this month. We're putting the final touches on everything.
                                </p>
                            </div>
                            <div className="flex items-center flex-shrink-0 gap-4">
                                <button
                                    onClick={openModal} // Use the function from context
                                    className="hidden md:block text-sm font-bold underline hover:opacity-80 transition-opacity"
                                >
                                    Join the Waitlist
                                </button>
                                <button
                                    onClick={onDismiss} // Use the dismiss function from props
                                    aria-label="Dismiss banner"
                                    className="p-1 rounded-full hover:bg-black/20 transition-colors"
                                >
                                    <FiX size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

LaunchBanner.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onDismiss: PropTypes.func.isRequired,
};