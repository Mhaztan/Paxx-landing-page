// src/components/TermsOfService.js
import React from "react";

const TermsOfService = () => (
    <section className="py-16 bg-[#021627] text-white">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Terms of Service</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-sm text-gray-400">Last Updated: September 2025</p>

                {/* 1. Agreement */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        1. Agreement to Terms
                    </h3>
                    <p>
                        By accessing or using <span className="font-semibold">PAXX</span>,
                        you agree to comply with and be bound by these Terms of Service. If
                        you do not agree, you may not use our services.
                    </p>
                </div>

                {/* 2. Eligibility */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        2. Eligibility
                    </h3>
                    <p>
                        PAXX is designed for university students in Nigeria. By using the
                        platform, you confirm that:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>You are at least 16 years old.</li>
                        <li>You are a registered student of a recognized university.</li>
                        <li>
                            The information you provide during registration (name, school,
                            level, email, phone number) is accurate and truthful.
                        </li>
                    </ul>
                </div>

                {/* 3. User Responsibilities */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        3. User Responsibilities
                    </h3>
                    <p>As a user, you agree that you will:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Use the platform lawfully and only for legitimate campus commerce
                            activities.
                        </li>
                        <li>
                            Not engage in fraud, scams, harassment, or the sale of illegal or
                            prohibited items (such as weapons, drugs, or counterfeit goods).
                        </li>
                        <li>
                            Keep your login details secure and not share your account with
                            others.
                        </li>
                        <li>
                            Be responsible for all content, listings, and communications you
                            post on PAXX.
                        </li>
                    </ul>
                </div>

                {/* 4. Transactions & Payments */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        4. Transactions & Payments
                    </h3>
                    <p>
                        All payments and promotions are securely processed via{" "}
                        <span className="font-semibold">Flutterwave</span>. PAXX is not a
                        bank and does not store your payment card details. Buyers and
                        sellers are responsible for completing transactions honestly and in
                        good faith.
                    </p>
                    <p className="mt-2">
                        PAXX may charge small service fees for promotions, featured
                        listings, or secure escrow services (when introduced).
                    </p>
                </div>

                {/* 5. Verification */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        5. Verification
                    </h3>
                    <p>
                        To increase trust, PAXX may request student ID uploads, OTP
                        verification, or email confirmation. Submitting false or fraudulent
                        information may result in suspension or permanent banning from the
                        platform.
                    </p>
                </div>

                {/* 6. Content Ownership */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        6. Content Ownership & Licensing
                    </h3>
                    <p>
                        You retain ownership of the content (listings, images, text) you
                        post on PAXX. However, by posting, you grant PAXX a limited license
                        to display and distribute this content on the platform for the
                        purpose of promoting your listings.
                    </p>
                </div>

                {/* 7. Prohibited Activities */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        7. Prohibited Activities
                    </h3>
                    <p>You agree not to:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Impersonate another person or misrepresent your identity.</li>
                        <li>
                            Use PAXX to distribute spam, harmful software, or phishing scams.
                        </li>
                        <li>
                            Sell restricted items such as illegal drugs, weapons, stolen
                            goods, or academic materials (exam papers, assignments, etc.).
                        </li>
                        <li>
                            Attempt to hack, disrupt, or exploit the platform in any way.
                        </li>
                    </ul>
                </div>

                {/* 8. Limitation of Liability */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        8. Limitation of Liability
                    </h3>
                    <p>
                        PAXX provides a student marketplace platform but is not responsible
                        for disputes, damages, losses, or fraud arising from transactions
                        between users. Users transact at their own risk.
                    </p>
                </div>

                {/* 9. Termination */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        9. Termination
                    </h3>
                    <p>
                        We reserve the right to suspend or terminate your account at any
                        time if you violate these Terms or engage in harmful activities on
                        the platform.
                    </p>
                </div>

                {/* 10. Changes */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        10. Changes to Terms
                    </h3>
                    <p>
                        We may update these Terms of Service from time to time. Any changes
                        will be effective immediately upon posting. You are encouraged to
                        review this page regularly.
                    </p>
                </div>

                {/* 11. Contact */}
                <div>
                    <h3 className="text-xl font-semibold text-[#87d0ff] mb-2">
                        11. Contact Us
                    </h3>
                    <p>
                        If you have questions about these Terms, please contact us:
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

export default TermsOfService;
