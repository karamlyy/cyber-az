import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">
                            IT Solutions Pro
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Reliable technology solutions and professional support for your business.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/#home" className="text-gray-400 hover:text-primary transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/#services" className="text-gray-400 hover:text-primary transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/#about" className="text-gray-400 hover:text-primary transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/#contact" className="text-gray-400 hover:text-primary transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Network Infrastructure</li>
                            <li className="text-gray-400">Cybersecurity</li>
                            <li className="text-gray-400">Server Management</li>
                            <li className="text-gray-400">IT Support</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-400">
                                <MapPin size={18} className="text-primary" />
                                <span>Baku, Central Plaza</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-400">
                                <Phone size={18} className="text-primary" />
                                <span>+994 50 000 00 00</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-400">
                                <Mail size={18} className="text-primary" />
                                <span>info@itsolutions.az</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Media & Copyright */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Social Media */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.2, y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-colors duration-300"
                                    >
                                        <IconComponent size={20} />
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Copyright */}
                        <p className="text-gray-400 text-center">
                            &copy; {new Date().getFullYear()} IT Solutions Pro. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
