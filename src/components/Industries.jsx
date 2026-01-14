import { motion } from 'framer-motion';
import { Building2, GraduationCap, Heart, Truck, ShoppingBag, Factory } from 'lucide-react';

const Industries = () => {
    const industries = [
        { name: "Maliyyə və Bankçılıq", icon: Building2 },
        { name: "Təhsil", icon: GraduationCap },
        { name: "Səhiyyə", icon: Heart },
        { name: "Logistika", icon: Truck },
        { name: "Pərakəndə Satış", icon: ShoppingBag },
        { name: "İstehsalat", icon: Factory },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Hansı Sahələr Üçün?
                    </h2>
                    <p className="text-lg text-gray-600">
                        Müxtəlif sektorlarda ixtisaslaşmış xidmətlər
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {industries.map((industry, index) => {
                        const IconComponent = industry.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4 cursor-pointer border border-gray-100"
                            >
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <IconComponent size={28} className="text-primary" />
                                </div>
                                <span className="text-lg font-semibold text-gray-800">
                                    {industry.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Industries;
