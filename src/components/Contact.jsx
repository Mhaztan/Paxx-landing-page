// src/components/Contact.js
import React from 'react';

const Contact = ({ contacts }) => (
    <section className="py-16 bg-[#021627] text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-bold">Contact Us</h3>
                <p className="mt-3 text-gray-300">Reach out to either of us — we're happy to chat about partnerships, press, or early access.</p>

                <div className="mt-6 space-y-4">
                    {contacts.map((c) => (
                        <div key={c.name} className="p-4 rounded-lg bg-gradient-to-br from-[#06324b] to-[#022233]">
                            <div className="font-semibold">{c.name} — {c.role}</div>
                            <div className="text-sm text-gray-300">WhatsApp: <a className="underline" href={`https://wa.me/${c.whatsapp.replace(/\+/g, '')}`}>{c.whatsapp}</a></div>
                            <div className="text-sm text-gray-300">Email: <a className="underline" href={`mailto:${c.email}`}>{c.email}</a></div>
                            <div className="text-sm text-gray-300">Location: {c.location}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold">Send us a message</h3>
                <p className="mt-2 text-gray-300">Or use this form. We'll reply via email or WhatsApp.</p>

                {/* --- Formspree ID Updated --- */}
                <form action="https://formspree.io/f/myzneveq" method="POST" className="mt-4 space-y-4">
                    <input type="text" name="name" placeholder="Your name" className="w-full p-3 rounded bg-[#021827] border border-[#06324b] focus:ring-2 focus:ring-[#87d0ff] outline-none" required />
                    <input type="email" name="email" placeholder="Your email" className="w-full p-3 rounded bg-[#021827] border border-[#06324b] focus:ring-2 focus:ring-[#87d0ff] outline-none" required />
                    <textarea name="message" placeholder="Your message" rows={5} className="w-full p-3 rounded bg-[#021827] border border-[#06324b] focus:ring-2 focus:ring-[#87d0ff] outline-none" required />
                    <button type="submit" className="px-5 py-3 rounded bg-[#87d0ff] text-[#eff1f3] font-semibold">Send Message</button>
                </form>
            </div>
        </div>
    </section>
);

export default Contact;