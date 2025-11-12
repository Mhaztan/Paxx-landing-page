import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Footer } from '../components/layout';
import { WaitlistModal, LaunchBanner } from '../components/common';
import { useModal } from '../context/ModalContext';

export const MainLayout = ({ children }) => {
    const { isModalOpen, closeModal } = useModal();
    const [isBannerVisible, setIsBannerVisible] = useState(false);

    useEffect(() => {
        const bannerDismissed = localStorage.getItem('paxxLaunchBannerDismissed');
        if (bannerDismissed !== 'true') {
            setIsBannerVisible(true);
        }
    }, []);

    const handleDismissBanner = () => {
        setIsBannerVisible(false);
        localStorage.setItem('paxxLaunchBannerDismissed', 'true');
    };

    // Determine the CSS class for the Navbar's top position
    // The banner has a height of roughly h-10 (2.5rem / 40px)
    const navbarTopClass = isBannerVisible ? 'top-10' : 'top-0';

    // Determine the main content's top padding
    // Navbar (h-16 = 4rem) + Banner (h-10 = 2.5rem) = 6.5rem. pt-28 (7rem) is a safe value.
    const mainPaddingClass = isBannerVisible ? 'pt-28' : 'pt-16';

    return (
        <div className="flex flex-col min-h-screen">
            <LaunchBanner isVisible={isBannerVisible} onDismiss={handleDismissBanner} />

            {/* Pass the calculated top position class to the Navbar */}
            <Navbar topClass={navbarTopClass} />

            <main className={`flex-grow ${mainPaddingClass}`}>
                {children}
            </main>

            <Footer />
            <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};