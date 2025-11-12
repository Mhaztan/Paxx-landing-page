import React from 'react';

export const BuyingGuide = () => {
    return (
        <div className="bg-accent text-bkg py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl prose prose-invert">
                <h1 className="text-4xl font-extrabold text-white mb-6">Buying on PAXX</h1>
                <p>Welcome to your campus-only marketplace where buying is simple, fast, and safe.</p>

                <h2>How Buying Works</h2>
                <ol>
                    <li><strong>Sign Up & Verify:</strong> Create an account in under a minute.</li>
                    <li><strong>Browse the Marketplace:</strong> Explore listings from your campus.</li>
                    <li><strong>Check the Details:</strong> Review the price and description.</li>
                    <li><strong>Contact the Seller:</strong> Tap “Message on WhatsApp” to start a conversation instantly.</li>
                </ol>

                <h2>Why Buy on PAXX?</h2>
                <ul>
                    <li><strong>Safe & Verified:</strong> Only students from your campus can list and buy items.</li>
                    <li><strong>Local & Hyper-Focused:</strong> Everything happens within your campus for fast pick-up.</li>
                    <li><strong>Transparent Pricing:</strong> Prices are clear and direct negotiation is via WhatsApp.</li>
                </ul>

                <h2>Pro Tips for Smart Buying</h2>
                <ul>
                    <li>Check for the blue verified badge to trade confidently.</li>
                    <li>Ask questions and clarify details with the seller before paying.</li>
                </ul>
            </div>
        </div>
    );
};