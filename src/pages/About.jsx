import React from 'react';

/**
 * A static page component to display the "About Us" content.
 */
export const About = () => {
    return (
        <div className="bg-accent text-bkg py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-4xl font-extrabold text-white mb-6">About PAXX</h1>
                <p className="text-lg text-gray-300 mb-8">
                    Welcome to PAXX – Your Campus Marketplace, Simplified.
                </p>

                <div className="space-y-6 text-gray-400">
                    <p>
                        At PAXX, we believe that student life should be seamless, connected, and efficient. Navigating campus life—whether buying, selling, or discovering opportunities—can sometimes feel overwhelming. That’s why we created PAXX, a modern, intuitive, and secure platform designed exclusively for students to engage, trade, and connect within their campus community.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-3">Our Mission</h2>
                        <p>
                            Our mission is simple: to empower students to effortlessly buy, sell, and connect while fostering a trusted and vibrant campus community. We strive to make campus life more convenient by providing a reliable digital marketplace where students can access exactly what they need, when they need it, without the hassle.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-3">Our Vision</h2>
                        <p>
                            We envision a campus where every student can access resources, share opportunities, and connect without barriers. PAXX is committed to continuously innovating, integrating feedback, and evolving to meet the changing needs of students. Our long-term goal is to expand this vibrant campus ecosystem to multiple institutions, creating a network where students can thrive academically, socially, and economically.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};