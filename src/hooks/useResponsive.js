import { useState, useEffect } from 'react';

/**
 * Custom hook to determine if the current viewport width is considered mobile.
 * It listens to window resize events and updates the state accordingly.
 *
 * @param {number} [breakpoint=768] - The viewport width in pixels to consider as the mobile breakpoint.
 * @returns {boolean} - Returns `true` if the window width is less than the breakpoint, otherwise `false`.
 */
export const useResponsive = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
        // Handler to call on window resize
        const handleResize = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state is correct on initial render
        handleResize();

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]); // Re-run effect only if breakpoint changes

    return isMobile;
};