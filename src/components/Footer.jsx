// src/components/Footer.js
import React from "react";

const Footer = ({ setRoute }) => (
    <footer className="bg-[#011624] text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
                <div className="font-extrabold text-2xl text-white">PAXX</div>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    Your Campus Plug — launching November 2025.
                    Built for students, by students.
                </p>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="font-semibold text-white mb-4 text-lg">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                    <li>
                        <button
                            onClick={() => setRoute("home")}
                            className="hover:text-[#87d0ff] transition-colors"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setRoute("about")}
                            className="hover:text-[#87d0ff] transition-colors"
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setRoute("faq")}
                            className="hover:text-[#87d0ff] transition-colors"
                        >
                            FAQ
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setRoute("contact")}
                            className="hover:text-[#87d0ff] transition-colors"
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </div>

            {/* Newsletter */}
            <div>
                <h3 className="font-semibold text-white mb-4 text-lg">Newsletter</h3>
                <p className="text-sm text-gray-400 mb-3">
                    Stay updated with launch news and student stories.
                </p>
                <form
                    action="https://formspree.io/f/mqaypjpj"
                    method="POST"
                    className="flex gap-2"
                >
                    <input
                        name="email"
                        type="email"
                        placeholder="you@school.edu"
                        className="px-3 py-2 rounded-lg bg-[#021827] text-white text-sm w-full border border-[#06324b] focus:ring-2 focus:ring-[#87d0ff] outline-none"
                        required
                    />
                    <button className="px-5 py-2 rounded-lg bg-[#87d0ff] text-[#dfe4e7] font-semibold hover:bg-[#5bbef5] transition-colors">
                        Join
                    </button>
                </form>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="container mx-auto px-6 mt-12 pt-6 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} PAXX. All rights reserved.</div>
            <div className="flex gap-6">
                <button
                    onClick={() => setRoute("privacy-policy")}
                    className="hover:text-gray-300 transition-colors"
                >
                    Privacy Policy
                </button>
                <button
                    onClick={() => setRoute("terms-of-service")}
                    className="hover:text-gray-300 transition-colors"
                >
                    Terms of Service
                </button>
            </div>
        </div>
    </footer>
);

export default Footer;
