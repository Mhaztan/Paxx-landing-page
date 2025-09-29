// src/components/ProblemsAndSolutions.js
import React from "react";
import { motion } from "framer-motion";

/**
 * Campus Problems & Our Solutions
 * A clear, credible section that lists real campus pain points and how PAXX addresses them.
 * Drop this file into src/components and import it in App.js (see instructions below).
 */

const items = [
    {
        id: "p1",
        problem: "Cluttered WhatsApp groups",
        impact:
            "Listings get lost, messages flood students, and serious buyers/sellers are missed.",
        solutions: [
            "Hyper-local, campus-filtered marketplace (no noise from outside campus).",
            "Auto-expiring listings keep the feed fresh and relevant.",
            "Clean listing cards and search filters (campus → hostel → department).",
        ],
    },
    {
        id: "p2",
        problem: "Scams & Lack of Trust",
        impact:
            "Students avoid deals or risk losing money to impersonators and fake listings.",
        solutions: [
            "Lightweight verification (OTP + optional student ID → Verified / Verified+ badges).",
            "Trust Points & deal confirmation receipts to reward reliable sellers.",
            "Flagging & moderation with admin review and velocity limits for new accounts.",
        ],
    },
    {
        id: "p3",
        problem: "Slow or unreliable OTP / notification delivery",
        impact:
            "Signups, phone verification and transactional alerts fail or get delayed — damaging UX.",
        solutions: [
            "Dedicated SMS OTP provider integration for reliable phone verification.",
            "Transactional alerts for deal confirmations, event reminders, and safety notices.",
            "Fallback notification channels (email + WhatsApp deep links).",
        ],
    },
    {
        id: "p4",
        problem: "Difficulty finding nearby or relevant items",
        impact:
            "Buyers travel far or waste time scrolling through irrelevant listings.",
        solutions: [
            "Location hierarchy filters: State → LGA → Campus → Hostel/Department.",
            "Verified sellers shown higher in search results; boosts for short-term visibility.",
            "‘Looking For’ board to broadcast requests and reduce searching time.",
        ],
    },
    {
        id: "p5",
        problem: "Unsafe meetups / payment confusion",
        impact:
            "Students worry about safety or paying before seeing items; transactions stall.",
        solutions: [
            "Safety tips prominently shown (meet in public spaces, confirm items first).",
            "Whatsapp deep-links for quick contact plus clear listing delivery methods (pickup / meet / dispatch).",
            "Future escrow option planned; for MVP we emphasize in-person meetups + verified sellers.",
        ],
    },
    {
        id: "p6",
        problem: "Low discoverability for student services & events",
        impact:
            "Tutors, events and campus services fail to reach their audience — low engagement.",
        solutions: [
            "Dedicated Community boards: Events, Freebies, Looking For.",
            "Tiered event promotion (Basic / Standard / Premium) and homepage placement for visibility.",
            "Integrate promo tools for service sellers (Boost, Featured Ads, Verified Skill Tags).",
        ],
    },
];

const ProblemsAndSolutions = () => (
    <section className="py-20 bg-[#011624] text-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Campus Problems — And How PAXX Solves Them
                </h2>
                <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
                    We designed PAXX from the ground up to solve the everyday issues students face
                    when buying, selling, and organising campus life. Below are common problems
                    and the concrete features we built to solve them.
                </p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {items.map((it, i) => (
                    <motion.div
                        key={it.id}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.45 }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-[#06324b] to-[#022233] shadow-lg"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#082b40] text-[#87d0ff] font-bold text-lg">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">{it.problem}</h3>
                                <p className="mt-2 text-gray-300">{it.impact}</p>

                                <ul className="mt-4 list-inside list-disc text-sm space-y-2">
                                    {it.solutions.map((s, idx) => (
                                        <li key={idx} className="text-gray-200">
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#waitlist"
                    className="inline-block px-6 py-3 rounded-full bg-[#87d0ff] text-[#021827] font-semibold shadow-md"
                >
                    Join the Waitlist — Help us test solutions
                </motion.a>
            </div>
        </div>
    </section>
);

export default ProblemsAndSolutions;
