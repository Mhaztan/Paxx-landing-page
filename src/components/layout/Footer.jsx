
import React from 'react';
import { Link } from 'react-router-dom';
import { paxxLogo } from '../../assets';
import { APP_NAME, SOCIAL_LINKS } from '../../constants';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

export const Footer = () => {
    const quickLinks = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Contact', path: '/contact' },
        { label: 'Careers', path: '/careers' },
    ];

    const legalLinks = [
        { label: 'Privacy Policy', path: '/privacy-policy' },
        { label: 'Terms of Service', path: '/terms-of-service' },
        { label: 'Community Guidelines', path: '/community-guidelines' },
    ];

    const resourceLinks = [
        { label: 'Safety Tips', path: '/safety' },
        { label: 'Prohibited Items', path: '/prohibited-items' },
        { label: 'How to Buy', path: '/guides/buying' },
        { label: 'How to Sell', path: '/guides/selling' },
    ];

    const socialIcons = [
        { href: SOCIAL_LINKS.instagram, icon: <FaInstagram /> },
        { href: SOCIAL_LINKS.twitter, icon: <FaTwitter /> },
        { href: SOCIAL_LINKS.facebook, icon: <FaFacebook /> },
    ];

    const FooterLinkColumn = ({ title, links }) => (
        <div>
            <h3 className="text-sm font-semibold text-bkg uppercase tracking-wider">{title}</h3>
            <ul className="mt-4 space-y-2">
                {links.map((link) => (
                    <li key={link.label}>
                        <Link to={link.path} className="text-base text-gray-400 hover:text-primary transition-colors">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <footer className="bg-accent border-t border-gray-800">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Logo and Tagline Column */}
                    <div className="col-span-2 md:col-span-1">
                        <img src={paxxLogo} alt="Paxx Logo" className="h-8 w-auto" />
                        <p className="mt-4 text-gray-400 text-sm">Your campus plug.</p>
                    </div>
                    {/* Link Columns */}
                    <FooterLinkColumn title="Quick Links" links={quickLinks} />
                    <FooterLinkColumn title="Legal" links={legalLinks} />
                    <FooterLinkColumn title="Resources" links={resourceLinks} />
                </div>

                <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} {APP_NAME} Technologies LTD. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {socialIcons.map((social) => (
                            <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                                {React.cloneElement(social.icon, { size: 20 })}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};