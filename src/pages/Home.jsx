import React from 'react';
import { HeroSection, FeaturesSection, FoundersSection } from '../features/home';

/**
 * The main landing page of the application.
 * It aggregates different feature sections to create a comprehensive overview.
 */
export const Home = () => {
    return (
        <>
            <HeroSection/> 
            <FeaturesSection />
            <FoundersSection />
        </>
    );
};