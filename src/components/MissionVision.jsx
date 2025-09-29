// // src/components/MissionVision.js
// import React from 'react';
// import { motion } from 'framer-motion';

// const MissionVision = () => (
//     <section className="py-20 bg-[#021627] text-white">
//         <div className="container mx-auto px-6">
//             <div className="text-center mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold">Our Guiding Principles</h2>
//                 <p className="mt-3 text-gray-400">The core ideas that drive PAXX forward.</p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                 <motion.div 
//                     initial={{ y: 20, opacity: 0 }} 
//                     whileInView={{ y: 0, opacity: 1 }} 
//                     viewport={{ once: true }} 
//                     transition={{ duration: 0.5 }}
//                     className="p-8 rounded-xl bg-gradient-to-br from-[#06324b] to-[#022233]"
//                 >
//                     <h3 className="text-2xl font-bold text-[#87d0ff]">Mission</h3>
//                     <p className="mt-4 text-gray-300">
//                         To create a simple, safe, and efficient campus economy by connecting students to buy, sell, and discover opportunities within their university environment.
//                     </p>
//                 </motion.div>
//                 <motion.div 
//                     initial={{ y: 20, opacity: 0 }} 
//                     whileInView={{ y: 0, opacity: 1 }} 
//                     viewport={{ once: true }} 
//                     transition={{ duration: 0.5, delay: 0.1 }}
//                     className="p-8 rounded-xl bg-gradient-to-br from-[#06324b] to-[#022233]"
//                 >
//                     <h3 className="text-2xl font-bold text-[#87d0ff]">Vision</h3>
//                     <p className="mt-4 text-gray-300">
//                         To be the leading student-first marketplace in Nigeria, designed exclusively for the unique needs and vibrancy of campus communities.
//                     </p>
//                 </motion.div>
//             </div>
//         </div>
//     </section>
// );

// export default MissionVision;


// src/components/MissionVision.js
import React from 'react';
import { motion } from 'framer-motion';

const MissionVision = () => (
    <section className="py-24 bg-[#021627] text-white">
        <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold">Our Guiding Principles</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                    At PAXX, our mission and vision are more than just statements—they are
                    the compass that directs every feature we build, every student we serve,
                    and every community we impact.
                </p>
            </div>

            {/* Mission + Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Mission */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="p-10 rounded-2xl bg-gradient-to-br from-[#06324b] to-[#022233] shadow-lg"
                >
                    <h3 className="text-3xl font-bold text-[#87d0ff]">Mission</h3>
                    <p className="mt-6 text-gray-300 leading-relaxed">
                        Our mission is to <span className="text-white font-semibold">transform campus life</span>
                        by providing a safe, trusted, and structured digital marketplace where
                        students can buy, sell, trade, and discover opportunities within their
                        university environment.
                    </p>
                    <p className="mt-4 text-gray-300 leading-relaxed">
                        We aim to replace the noise and disorder of scattered WhatsApp groups
                        with a platform that is simple to use, mobile-first, and student-centered.
                        Through verification systems, secure OTPs, and smart listing features, we
                        ensure that every interaction on PAXX builds trust and strengthens campus
                        communities.
                    </p>
                    <p className="mt-4 text-gray-300 leading-relaxed">
                        At its heart, PAXX is about more than transactions—it is about giving students
                        a tool to <span className="text-white font-semibold">save time, save money, and unlock opportunities</span>
                        that enrich their academic journey.
                    </p>
                </motion.div>

                {/* Vision */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="p-10 rounded-2xl bg-gradient-to-br from-[#06324b] to-[#022233] shadow-lg"
                >
                    <h3 className="text-3xl font-bold text-[#87d0ff]">Vision</h3>
                    <p className="mt-6 text-gray-300 leading-relaxed">
                        Our vision is to become <span className="text-white font-semibold">
                            the leading student-first marketplace in Nigeria</span>, uniquely designed
                        for the vibrant and dynamic needs of campus communities.
                    </p>
                    <p className="mt-4 text-gray-300 leading-relaxed">
                        We imagine a future where every student has access to a digital ecosystem
                        that makes campus life more convenient, transparent, and connected. A
                        future where buying and selling is not just safe, but also empowering.
                    </p>
                    <p className="mt-4 text-gray-300 leading-relaxed">
                        In the long term, PAXX seeks to expand across Africa, becoming the default
                        hub for students to connect, exchange, and thrive—bridging the gap between
                        academic life and real-world opportunities.
                    </p>
                    <p className="mt-4 text-gray-300 leading-relaxed">
                        With technology as our backbone and students as our heartbeat, we are
                        building a platform that grows with the campus experience and prepares the
                        next generation for the world beyond.
                    </p>
                </motion.div>
            </div>
        </div>
    </section>
);

export default MissionVision;
