import { motion } from 'framer-motion';

const Hero = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                    Biznesiniz üçün Müasir İT və Şəbəkə Həlləri
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl mb-10 text-gray-200"
                >
                    İnfrastrukturunuzu gücləndirin və rəqəmsal gələcəyə bizimlə addımlayın
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button
                        onClick={() => handleScroll('services')}
                        className="bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Xidmətlərimiz
                    </button>
                    <button
                        onClick={() => handleScroll('contact')}
                        className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Pulsuz Konsultasiya
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
                >
                    <div className="w-1 h-3 bg-white rounded-full mt-2" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
