import React from 'react';

export const SellingGuide = () => {
    return (
        <div className="bg-accent text-bkg py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl prose prose-invert">
                <h1 className="text-4xl font-extrabold text-white mb-6">Selling on PAXX</h1>
                <p>Ready to make your items work for you? Selling on PAXX is easy, fast, and secure.</p>

                <h2>How Selling Works</h2>
                <ol>
                    <li><strong>Create & Verify Your Account:</strong> Verified sellers earn a blue badge to build trust.</li>
                    <li><strong>Create Your Listing:</strong> Add a title, description, price, and photos.</li>
                    <li><strong>Publish & Share:</strong> Listings appear in the campus feed.</li>
                    <li><strong>Complete the Trade:</strong> Meet on campus or arrange safe pick-up.</li>
                </ol>

                <h2>Why Sell on PAXX?</h2>
                <ul>
                    <li><strong>Campus-Only Audience:</strong> Your items are visible to students who can pick them up.</li>
                    <li><strong>Boosted Listings:</strong> Pin your item for faster visibility.</li>
                    <li><strong>Direct Communication:</strong> Message buyers instantly via WhatsApp.</li>
                </ul>

                <h2>Pro Tips for Smart Selling</h2>
                <ul>
                    <li>Add clear photos and write honest descriptions.</li>
                    <li>Boost popular listings you want to sell quickly.</li>
                    <li>Respond promptly to secure trades.</li>
                </ul>
            </div>
        </div>
    );
};