
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { NAV_ITEMS, MORE_DROPDOWN_EXTRA_ITEMS } from '../constants';

const Logo = () => (
    <Link to="/" className="flex items-center space-x-2">
        <img src="/logo.png" alt="MAXFIN Logo" className="h-12 w-auto" />
    </Link>
);

const Footer: React.FC = () => {
    const quickLinks = NAV_ITEMS.filter(item => !item.subItems).slice(0, 4);
    const moreLinks = (NAV_ITEMS.find(item => item.label === 'More')?.subItems || []).concat(MORE_DROPDOWN_EXTRA_ITEMS);

    return (
        <footer className="bg-maxfin-dark-green text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About */}
                    <div className="space-y-4">
                        <Logo />
                        <p className="text-gray-300">
                            MAXFIN – Makkal Sevai Maiyam, offers easy fund transfer & withdrawal services, serving people with trust.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map(link => (
                                <li key={link.label}>
                                    <Link to={link.href} className="text-gray-300 hover:text-white">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* More Links */}
                    <div>
                        <h3 className="font-bold text-lg text-white mb-4">Explore</h3>
                        <ul className="space-y-2">
                            {moreLinks.slice(0, 5).map(link => (
                                <li key={link.label}>
                                    <Link to={link.href} className="text-gray-300 hover:text-white">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg text-white mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 mt-1 text-maxfin-green" />
                                <span>123, MAXFIN Towers, Fintech City, Chennai, India</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-maxfin-green" />
                                <a href="tel:+9118001234567" className="hover:text-white">1800-123-4567</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-maxfin-green" />
                                <a href="mailto:support@maxfin.com" className="hover:text-white">support@maxfin.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} MAXFIN. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
