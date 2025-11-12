import React from 'react';

/**
 * A static page component for the Terms of Service.
 */
export const TermsOfService = () => {
    return (
        <div className="bg-accent text-bkg py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl prose prose-invert">
                <h1 className="text-4xl font-extrabold text-white mb-6">Terms of Service</h1>
                <p className="text-gray-400 text-sm">Last Updated: November 11, 2025</p>

                <p>Welcome to PAXX! By accessing or using our platform, you agree to comply with and be bound by the following Terms of Service. These terms protect our community and ensure a safe, fair, and enjoyable marketplace for all campus users.</p>

                <h2>1. Acceptance of Terms</h2>
                <p>By using PAXX, you acknowledge that you have read, understood, and agreed to these Terms of Service. If you do not agree, you may not access or use our platform.</p>

                <h2>2. Eligibility</h2>
                <ul>
                    <li>You are a current student of your campus.</li>
                    <li>You are at least 16 years old or the minimum age required by your campus.</li>
                    <li>You will provide accurate, current, and complete information during registration.</li>
                </ul>

                <h2>3. Account Responsibilities</h2>
                <p>You are responsible for maintaining the security of your account, for all activities conducted under your account, and for reporting any unauthorized use immediately.</p>

                {/* Additional sections can be added here */}

                <h2>11. Contact Us</h2>
                <p>For any questions about these terms, email: support@paxx.com.ng</p>
            </div>
        </div>
    );
};