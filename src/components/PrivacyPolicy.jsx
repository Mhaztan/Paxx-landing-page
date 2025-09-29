// src/components/PrivacyPolicy.js
import React from "react";

const PrivacyPolicy = () => (
    <section className="py-16 bg-[#021627] text-white">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-sm text-gray-400">Last Updated: September 2025</p>

                {/* 1. Intro */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        1. Introduction
                    </h3>
                    <p>
                        Welcome to <span className="font-semibold">PAXX</span>. Your privacy
                        is very important to us. This Privacy Policy describes how we
                        collect, use, and protect your personal data when you use our
                        platform. By using PAXX, you agree to the practices outlined here.
                    </p>
                </div>

                {/* 2. Info we collect */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        2. Information We Collect
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <span className="font-semibold">Account Details:</span> Name,
                            email, phone number, school, department, and level when you
                            register.
                        </li>
                        <li>
                            <span className="font-semibold">Verification Data:</span> Student
                            ID (optional), profile image, and OTP verification details.
                        </li>
                        <li>
                            <span className="font-semibold">Transactions:</span> Payments made
                            via Flutterwave, listing details, and promotions purchased.
                        </li>
                        <li>
                            <span className="font-semibold">Usage Data:</span> Device info,
                            IP address, pages visited, and interactions with our site.
                        </li>
                        <li>
                            <span className="font-semibold">Communications:</span> Emails,
                            WhatsApp clicks, and support inquiries.
                        </li>
                    </ul>
                </div>

                {/* 3. How we use */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        3. How We Use Your Information
                    </h3>
                    <p>We use your information to:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Create and manage your PAXX account.</li>
                        <li>Verify your identity and increase trust within campus commerce.</li>
                        <li>Enable secure payments and transactions.</li>
                        <li>Send OTPs, alerts, and important notifications.</li>
                        <li>
                            Improve the platform experience and detect fraudulent activity.
                        </li>
                        <li>
                            Send optional newsletters and promotional content (only if you
                            opt-in).
                        </li>
                    </ul>
                </div>

                {/* 4. Sharing */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        4. Sharing of Information
                    </h3>
                    <p>
                        We do not sell your personal data. However, we may share limited
                        information with trusted third-party providers:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <span className="font-semibold">Flutterwave:</span> for payment
                            processing.
                        </li>
                        <li>
                            <span className="font-semibold"><i>-Pending: </i></span> for sending SMS
                            OTPs.
                        </li>
                        <li>
                            <span className="font-semibold">Cloudinary:</span> for secure
                            image hosting and watermarking.
                        </li>
                        <li>
                            <span className="font-semibold">Formspree:</span> for collecting
                            emails via our newsletter form.
                        </li>
                        <li>
                            <span className="font-semibold">Analytics tools:</span> to measure
                            engagement and improve services.
                        </li>
                    </ul>
                </div>

                {/* 5. Storage & Security */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        5. Data Storage & Security
                    </h3>
                    <p>
                        We take strong precautions to secure your personal data, including
                        encryption, access controls, and regular audits. Sensitive data such
                        as ID uploads are stored securely and permanently deleted once
                        verification is complete.
                    </p>
                </div>

                {/* 6. Your Rights */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        6. Your Rights
                    </h3>
                    <p>As a user, you have the right to:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Access and update your personal information.</li>
                        <li>Request deletion of your account and related data.</li>
                        <li>Opt-out of promotional emails and newsletters.</li>
                        <li>
                            Report suspicious activity or request review of flagged
                            transactions.
                        </li>
                    </ul>
                </div>

                {/* 7. Children’s Privacy */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        7. Children’s Privacy
                    </h3>
                    <p>
                        PAXX is designed for university students (typically 16+). We do not
                        knowingly collect data from children under 16. If we discover such
                        accounts, they will be deleted.
                    </p>
                </div>

                {/* 8. Changes */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        8. Changes to This Policy
                    </h3>
                    <p>
                        We may update this Privacy Policy from time to time. Changes will be
                        communicated via email and updated on this page with a new “Last
                        Updated” date.
                    </p>
                </div>

                {/* 9. Contact */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        9. Contact Us
                    </h3>
                    <p>
                        If you have questions or concerns about this Privacy Policy, you can
                        contact us:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Email: <a href="mailto:itiriemmanuel2@gmail.com" className="text-[#87d0ff] underline">itiriemmanuel2@gmail.com</a></li>
                        <li>WhatsApp: <a href="https://wa.me/2347073604575" target="_blank" rel="noreferrer" className="text-[#87d0ff] underline">+234 707 360 4575</a></li>
                        <li>Location: Enugu, Nigeria</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default PrivacyPolicy;
