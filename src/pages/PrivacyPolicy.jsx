import React from 'react';

/**
 * A static page component for the Privacy Policy.
 */
export const PrivacyPolicy = () => {
    return (
        <div className="bg-accent text-bkg py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl prose prose-invert">
                <h1 className="text-4xl font-extrabold text-white mb-6">Privacy Policy</h1>
                <p className="text-gray-400 text-sm">Last Updated: November 11, 2025</p>

                <p>Your privacy is important. This policy explains how we collect, use, store, and protect your information when you use PAXX.</p>

                <h2>1. Information We Collect</h2>
                <ul>
                    <li><strong>Personal Information:</strong> Full name, campus ID, student email, phone number, profile info.</li>
                    <li><strong>Transaction Information:</strong> Items posted/purchased, payment and transaction details, pickup info.</li>
                    <li><strong>Technical Information:</strong> Device, OS, IP, and app usage patterns.</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <ul>
                    <li>Provide, maintain, and improve PAXX services.</li>
                    <li>Verify identity for account security.</li>
                    <li>Communicate about account, transactions, and updates.</li>
                    <li>Detect, prevent, and address fraud or security issues.</li>
                    <li>Analyze usage to improve user experience.</li>
                </ul>

                <h2>3. How We Share Your Information</h2>
                <ul>
                    <li>With your consent.</li>
                    <li>With service providers (e.g., payment processors).</li>
                    <li>To comply with law or protect rights and safety.</li>
                    <li>To investigate fraud or illegal activity.</li>
                </ul>

                {/* Additional sections can be added here following the same structure */}

                <h2>10. Contact Us</h2>
                <p>For any privacy-related questions, please email us at: privacy@paxx.com.ng</p>
            </div>
        </div>
    );
};