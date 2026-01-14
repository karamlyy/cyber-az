import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceDetail = ({ onRequestService }) => {
    const { slug } = useParams();
    const service = servicesData[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20 px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Xidmət tapılmadı</h2>
                    <Link 
                        to="/" 
                        className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
                    >
                        Ana Səhifəyə Qayıt
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Service Header */}
            <div 
                className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white mt-16"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto px-4 text-center"
                >
                    <span className="inline-block bg-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
                        {service.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {service.title}
                    </h1>
                    <p className="text-xl text-gray-200">
                        {service.description}
                    </p>
                </motion.div>
            </div>

            {/* Service Body */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-8 font-medium"
                >
                    <ArrowLeft size={20} />
                    Ana Səhifəyə Qayıt
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                Xidmət Haqqında
                            </h3>
                            <div className="prose prose-lg max-w-none space-y-4 text-gray-600">
                                {service.details.split('\n').map((line, index) => (
                                    <p key={index} className="leading-relaxed">
                                        {line}
                                    </p>
                                ))}
                            </div>

                            {/* Benefits */}
                            <div className="mt-12 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                                    Niyə Bizi Seçməlisiniz?
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-lg text-gray-700">
                                        <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                                        <span>Peşəkar və təcrübəli komanda</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-lg text-gray-700">
                                        <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                                        <span>24/7 Texniki Dəstək</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-lg text-gray-700">
                                        <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                                        <span>Zəmanətli və Keyfiyyətli Xidmət</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-lg text-gray-700">
                                        <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                                        <span>Rəqabətli Qiymət</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="sticky top-24"
                        >
                            <div className="bg-white border-t-4 border-primary p-8 rounded-xl shadow-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Bu xidməti sifariş etmək istəyirsiniz?
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Mütəxəssislərimizlə əlaqə saxlayın və sizə uyğun həlli tapaq.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => onRequestService(service.title)}
                                    className="w-full bg-primary hover:bg-secondary text-white font-semibold px-6 py-4 rounded-lg transition-colors duration-300 shadow-lg"
                                >
                                    Müraciət Et
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
