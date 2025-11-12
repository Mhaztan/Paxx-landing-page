// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { paxxLogo } from '../../assets';
// import { navLinks } from '../../constants';
// import { Button } from '../common';
// import { useResponsive } from '../../hooks';
// import { FiMenu, FiX } from 'react-icons/fi';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useModal } from '../../context/ModalContext'; 

// export const Navbar = () => {
//     const { openModal } = useModal(); 
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const isMobile = useResponsive();

//     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//     const MobileMenu = () => (
//         <AnimatePresence>
//             {isMenuOpen && (
//                 <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     className="absolute top-0 left-0 w-full h-screen bg-accent z-40 flex flex-col items-center justify-center"
//                 >
//                     <nav className="flex flex-col items-center gap-y-8">
//                         {navLinks.map((link) => (
//                             <NavLink
//                                 key={link.label}
//                                 to={link.path}
//                                 onClick={toggleMenu}
//                                 className="text-2xl font-semibold text-bkg hover:text-primary transition-colors"
//                             >
//                                 {link.label}
//                             </NavLink>
//                         ))}
//                         <Link to="/contact" onClick={toggleMenu} className="text-2xl font-semibold text-bkg hover:text-primary transition-colors">
//                             Contact Us
//                         </Link>
//                     </nav>
//                     <Button onClick={openModal} className="mt-8">Join Waitlist</Button>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );

//     return (
//         <header className="fixed top-0 left-0 w-full bg-accent/80 backdrop-blur-sm z-50">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                     {/* Logo */}
//                     <div className="flex-shrink-0">
//                         <Link to="/">
//                             <img src={paxxLogo} alt="Paxx Logo" className="h-8 w-auto" />
//                         </Link>
//                     </div>

//                     {/* Desktop Navigation */}
//                     {!isMobile && (
//                         <nav className="hidden md:flex items-center gap-x-8">
//                             {navLinks.map((link) => (
//                                 <NavLink
//                                     key={link.label}
//                                     to={link.path}
//                                     className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
//                                 >
//                                     {link.label}
//                                 </NavLink>
//                             ))}
//                         </nav>
//                     )}

//                     {/* Desktop CTAs */}
//                     {!isMobile && (
//                         <div className="hidden md:flex items-center gap-x-4">
//                             <Link to="/contact" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
//                                 Contact Us
//                             </Link>
//                             <Button onClick={openModal}>Join Waitlist</Button>
//                         </div>
//                     )}

//                     {/* Mobile Menu Button */}
//                     {isMobile && (
//                         <div className="md:hidden z-50">
//                             <button onClick={toggleMenu} aria-label="Toggle menu">
//                                 {isMenuOpen ? <FiX size={24} className="text-bkg" /> : <FiMenu size={24} className="text-bkg" />}
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             {isMobile && <MobileMenu />}
//         </header>
//     );
// };


import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes
import { paxxLogo } from '../../assets';
import { navLinks } from '../../constants';
import { Button } from '../common';
import { useResponsive } from '../../hooks';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../../context/ModalContext';

// Accept the `topClass` prop and provide a default value
export const Navbar = ({ topClass = 'top-0' }) => {
    const { openModal } = useModal();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useResponsive();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const MobileMenu = () => (
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-0 left-0 w-full h-screen bg-accent z-40 flex flex-col items-center justify-center"
                >
                    <nav className="flex flex-col items-center gap-y-8">
                        {navLinks.map((link) => (
                            <NavLink key={link.label} to={link.path} onClick={toggleMenu} className="text-2xl font-semibold text-bkg hover:text-primary transition-colors">
                                {link.label}
                            </NavLink>
                        ))}
                        <Link to="/contact" onClick={toggleMenu} className="text-2xl font-semibold text-bkg hover:text-primary transition-colors">
                            Contact Us
                        </Link>
                    </nav>
                    <Button onClick={openModal} className="mt-8">Join Waitlist</Button>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        // Apply the dynamic topClass here and add a transition for smoothness
        <header className={`fixed left-0 w-full bg-accent/80 backdrop-blur-sm z-40 transition-all duration-300 ${topClass}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <img src={paxxLogo} alt="Paxx Logo" className="h-8 w-auto" />
                        </Link>
                    </div>
                    {!isMobile && (
                        <nav className="hidden md:flex items-center gap-x-8">
                            {navLinks.map((link) => (
                                <NavLink key={link.label} to={link.path} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
                                    {link.label}
                                </NavLink>
                            ))}
                        </nav>
                    )}
                    {!isMobile && (
                        <div className="hidden md:flex items-center gap-x-4">
                            <Link to="/contact" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
                                Contact Us
                            </Link>
                            <Button onClick={openModal}>Join Waitlist</Button>
                        </div>
                    )}
                    {isMobile && (
                        <div className="md:hidden z-50">
                            <button onClick={toggleMenu} aria-label="Toggle menu">
                                {isMenuOpen ? <FiX size={24} className="text-bkg" /> : <FiMenu size={24} className="text-bkg" />}
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {isMobile && <MobileMenu />}
        </header>
    );
};

// Add prop types for the new prop
Navbar.propTypes = {
    topClass: PropTypes.string,
};