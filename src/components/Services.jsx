import { motion } from 'framer-motion';
import { Server, ShieldCheck, Wifi, Headphones } from 'lucide-react';

const servicesData = [
    {
        title: "Network Infrastructure",
        desc: "LAN/WAN installation, cabling, and Wi-Fi optimization",
        icon: Wifi,
    },
    {
        title: "Cybersecurity",
        desc: "Firewall installation, antivirus solutions, and data protection",
        icon: ShieldCheck,
    },
    {
        title: "Server Management",
        desc: "Linux/Windows server installation and 24/7 monitoring",
        icon: Server,
    },
    {
        title: "IT Support",
        desc: "Prompt resolution of in-house technical issues",
        icon: Headphones,
    }
];

const Services = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600">
                        Professional solutions tailored to your business needs
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {servicesData.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="bg-blue-50 p-4 rounded-full">
                                        <IconComponent size={40} className="text-primary" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
