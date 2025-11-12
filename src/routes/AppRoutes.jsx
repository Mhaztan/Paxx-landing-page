import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts';
import {
    Home,
    About,
    Contact,
    PrivacyPolicy,
    TermsOfService,
    NotFound,
    Safety,
    Careers,
    CommunityGuidelines,
    ProhibitedItems,
    BuyingGuide,
    SellingGuide,
} from '../pages';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />

                    {/* Newly Added Routes */}
                    <Route path="/safety" element={<Safety />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/community-guidelines" element={<CommunityGuidelines />} />
                    <Route path="/prohibited-items" element={<ProhibitedItems />} />
                    <Route path="/guides/buying" element={<BuyingGuide />} />
                    <Route path="/guides/selling" element={<SellingGuide />} />

                    {/* Fallback route for any path that doesn't match */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
};