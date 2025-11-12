import React from 'react';

const foundersData = [
    {
        name: 'Itiri Emmanuel Gideon',
        role: 'CEO & Co-founder',
        bgColor: 'bg-blue-500',
    },
    {
        name: 'Ndor Prosper Chimezerem',
        role: 'CTO & Co-founder',
        bgColor: 'bg-green-500',
    },
    {
        name: 'Nomeh Mercy Nmesoma',
        role: 'CFO & Co-founder',
        bgColor: 'bg-purple-500',
    },
];

export const FoundersSection = () => {
    return (
        <section id="community" className="py-20 bg-accent text-bkg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Meet the Team</h2>
                    <p className="mt-4 text-lg text-gray-400">Built for students, by students.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {foundersData.map((founder) => (
                        <div key={founder.name} className="bg-gray-900 p-8 rounded-lg shadow-lg">
                            {/* Placeholder for founder image */}
                            <div className={`w-32 h-32 rounded-full mx-auto ${founder.bgColor} flex items-center justify-center mb-4`}>
                                <span className="text-4xl font-bold text-white">
                                    {founder.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white">{founder.name}</h3>
                            <p className="text-primary font-medium">{founder.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};