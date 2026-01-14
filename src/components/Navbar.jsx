import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id) => {
        setIsOpen(false);
        setIsServicesOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleServiceClick = (slug) => {
        setIsOpen(false);
        setIsServicesOpen(false);
        navigate(`/service/${slug}`);
    };

    const serviceCategories = [
        {
            title: "Network Solutions",
            services: [
                { name: "Network Design & Installation", slug: "network-design-installation", tag: "Design" },
                { name: "Router & Switch Configuration", slug: "router-switch-config", tag: "Config" },
                { name: "Wi-Fi Setup & Optimization", slug: "wifi-setup-optimization", tag: "Wi-Fi" },
                { name: "VLAN & Segmentation", slug: "vlan-segmentation", tag: "Security" },
            ]
        },
        {
            title: "Cybersecurity",
            services: [
                { name: "Firewall Protection", slug: "firewall-protection", tag: "Defense" },
                { name: "Antivirus Solutions", slug: "antivirus-solutions", tag: "Protection" },
                { name: "Data Encryption", slug: "data-encryption", tag: "Encryption" },
                { name: "Penetration Testing", slug: "penetration-testing", tag: "Testing" },
            ]
        },
        {
            title: "Cloud & Business IT",
            services: [
                { name: "Cloud Migration", slug: "cloud-migration", tag: "AWS/Azure" },
                { name: "Office 365 Setup", slug: "office-365-setup", tag: "M365" },
                { name: "Data Backup", slug: "data-backup", tag: "Backup" },
            ]
        },
        {
            title: "IT Support",
            services: [
                { name: "Remote Support", slug: "remote-support", tag: "Remote" },
                { name: "On-site Support", slug: "on-site-support", tag: "On-site" },
                { name: "Hardware Repair", slug: "hardware-repair", tag: "Repair" },
            ]
        }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-white shadow-lg' : 'bg-white/95 shadow-md'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-primary hover:text-secondary transition-colors">
                        IT Solutions Pro
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => handleNavClick('home')}
                            className="text-gray-700 hover:text-primary transition-colors font-medium"
                        >
                            Home
                        </button>

                        {/* Services Dropdown */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button
                                className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors font-medium"
                            >
                                Services
                                <ChevronDown 
                                    size={16} 
                                    className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {isServicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                                        style={{ left: '-200px' }}
                                    >
                                        <div className="p-6">
                                            {/* Header */}
                                            <div className="mb-4 pb-4 border-b border-gray-100">
                                                <h3 className="text-lg font-bold text-gray-900">Our Services</h3>
                                                <p className="text-sm text-gray-600 mt-1">Complete solutions for your business</p>
                                            </div>

                                            {/* Service Grid */}
                                            <div className="grid grid-cols-2 gap-6">
                                                {serviceCategories.map((category, idx) => (
                                                    <div key={idx} className="space-y-3">
                                                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                                                            {category.title}
                                                        </h4>
                                                        <div className="space-y-2">
                                                            {category.services.map((service, sIdx) => (
                                                                <button
                                                                    key={sIdx}
                                                                    onClick={() => handleServiceClick(service.slug)}
                                                                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors group"
                                                                >
                                                                    <div className="flex items-center justify-between">
                                                                        <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                                                                            {service.name}
                                                                        </span>
                                                                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded group-hover:bg-primary group-hover:text-white transition-colors">
                                                                            {service.tag}
                                                                        </span>
                                                                    </div>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Footer CTA */}
                                            <div className="mt-6 pt-4 border-t border-gray-100">
                                                <button
                                                    onClick={() => handleNavClick('contact')}
                                                    className="w-full bg-primary hover:bg-secondary text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm"
                                                >
                                                    Get Free Consultation
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <button
                            onClick={() => handleNavClick('about')}
                            className="text-gray-700 hover:text-primary transition-colors font-medium"
                        >
                            About
                        </button>
                        <button
                            onClick={() => handleNavClick('industries')}
                            className="text-gray-700 hover:text-primary transition-colors font-medium"
                        >
                            Industries
                        </button>
                        <button
                            onClick={() => handleNavClick('contact')}
                            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors font-medium"
                        >
                            Contact
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-700 hover:text-primary transition-colors"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
                            <button
                                onClick={() => handleNavClick('home')}
                                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
                            >
                                Home
                            </button>

                            {/* Mobile Services Dropdown */}
                            <div className="space-y-2">
                                <button
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
                                >
                                    Services
                                    <ChevronDown 
                                        size={16} 
                                        className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                
                                {isServicesOpen && (
                                    <div className="pl-4 space-y-3 pb-2">
                                        {serviceCategories.map((category, idx) => (
                                            <div key={idx} className="space-y-2">
                                                <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                                                    {category.title}
                                                </div>
                                                {category.services.map((service, sIdx) => (
                                                    <button
                                                        key={sIdx}
                                                        onClick={() => handleServiceClick(service.slug)}
                                                        className="block w-full text-left text-sm text-gray-600 hover:text-primary transition-colors py-1"
                                                    >
                                                        {service.name}
                                                    </button>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => handleNavClick('about')}
                                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
                            >
                                About
                            </button>
                            <button
                                onClick={() => handleNavClick('industries')}
                                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
                            >
                                Industries
                            </button>
                            <button
                                onClick={() => handleNavClick('contact')}
                                className="block w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors font-medium text-center"
                            >
                                Contact
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
