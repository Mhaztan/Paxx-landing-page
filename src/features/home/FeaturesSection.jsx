import React from 'react';
import { FiShoppingCart, FiUsers, FiClock, FiCheckCircle } from 'react-icons/fi';

const featuresData = [
    {
        icon: <FiShoppingCart size={32} />,
        title: 'Student Marketplace',
        description: 'A dedicated space to buy and sell anything from textbooks and gadgets to furniture and fashion within your campus.',
    },
    {
        icon: <FiUsers size={32} />,
        title: 'Social Moments',
        description: 'Share and view updates and photos with your campus community, making connections beyond transactions.',
    },
    {
        icon: <FiClock size={32} />,
        title: '7-Day Listing Expiry',
        description: 'Our algorithm automatically removes listings after 7 days, ensuring the marketplace is always fresh and active.',
    },
    {
        icon: <FiCheckCircle size={32} />,                                                                                                                                 
        title: 'User Verification',
        description: 'Trade with confidence using our verification system, which rewards trusted users with a badge for enhanced security.',
    },
];

export const FeaturesSection = () => {
    return (
        <section id="features" className="py-20 bg-gray-900 text-bkg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">                                                                                                                                                                                                                               
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why Choose Paxx?</h2>                               
                    <p className="mt-4 text-lg text-gray-400">More than a marketplace, it's your campus ecosystem.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="bg-accent p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white mx-auto">
                                {feature.icon}
                            </div>
                            <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                            <p className="mt-2 text-base text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};