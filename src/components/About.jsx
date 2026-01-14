import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Clock } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: Users, value: "50+", label: "Daimi Müştəri" },
        { icon: Award, value: "100+", label: "Tamamlanmış Layihə" },
        { icon: Clock, value: "10+", label: "İllik Təcrübə" },
        { icon: TrendingUp, value: "99%", label: "Müştəri Məmnuniyyəti" },
    ];

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Haqqımızda
                        </h2>
                        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                            <p>
                                <span className="font-bold text-primary">IT Solutions Pro</span> olaraq 
                                məqsədimiz şirkətlərin texnoloji yükünü azaltmaqdır.
                            </p>
                            <p>
                                10 illik təcrübəmizlə biz sizin rəqəmsal partnyorunuzuq. 
                                Biz yalnız problem həll etmirik, həm də gələcək problemlərin 
                                qarşısını alırıq.
                            </p>
                            <p>
                                Komandamız ən son texnologiyalar və ən yaxşı praktikalarla 
                                təchiz edilib ki, sizin biznesinizə maksimum fayda gətirsin.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex justify-center mb-3">
                                        <IconComponent size={32} className="text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-primary mb-2">
                                        {stat.value}
                                    </h3>
                                    <p className="text-gray-700 font-medium">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
