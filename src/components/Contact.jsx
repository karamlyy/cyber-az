import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Mesajınız göndərildi!');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Ünvan",
            content: "Bakı şəhəri, Mərkəzi Plaza",
        },
        {
            icon: Phone,
            title: "Telefon",
            content: "+994 50 000 00 00",
        },
        {
            icon: Mail,
            title: "Email",
            content: "info@itsolutions.az",
        },
    ];

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Bizimlə Əlaqə
                    </h2>
                    <p className="text-lg text-gray-300">
                        Sualllarınız varsa, bizimlə əlaqə saxlayın
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Adınız
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 text-white placeholder-gray-400"
                                    placeholder="Adınızı daxil edin"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 text-white placeholder-gray-400"
                                    placeholder="emailiniz@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Mesajınız
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 text-white placeholder-gray-400 resize-none"
                                    placeholder="Mesajınızı buraya yazın..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                            >
                                <Send size={20} />
                                Göndər
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {contactInfo.map((info, index) => {
                            const IconComponent = info.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <div className="bg-primary p-3 rounded-lg">
                                        <IconComponent size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">
                                            {info.title}
                                        </h3>
                                        <p className="text-gray-300">
                                            {info.content}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Map or additional info could go here */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
                        >
                            <h3 className="text-lg font-semibold mb-3">İş Saatları</h3>
                            <div className="space-y-2 text-gray-300">
                                <p>Bazar ertəsi - Cümə: 09:00 - 18:00</p>
                                <p>Şənbə: 10:00 - 15:00</p>
                                <p>Bazar: Qeyri-iş günü</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
