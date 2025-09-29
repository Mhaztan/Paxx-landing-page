// src/components/HowItWorks.js
import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Sign Up",
        description:
            "Create a PAXX account with your student email and verify via OTP for security.",
    },
    {
        number: "02",
        title: "Explore",
        description:
            "Browse products, services, and opportunities shared by fellow students in your campus community.",
    },
    {
        number: "03",
        title: "Connect",
        description:
            "Chat, negotiate, and finalize deals with trusted student sellers and buyers.",
    },
    {
        number: "04",
        title: "Transact",
        description:
            "Complete your deal with safe and secure meetups.",
    },
];

const HowItWorks = () => (
    <section className="py-20 bg-[#011624] text-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-xl bg-gradient-to-br from-[#06324b] to-[#022233] shadow-lg"
                    >
                        <div className="text-5xl font-extrabold text-[#87d0ff] mb-4">
                            {step.number}
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <p className="mt-3 text-gray-300 text-sm">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default HowItWorks;
