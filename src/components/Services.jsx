import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const services = [
        {
            name: 'Full-Stack Development',
            icon: './assets/web-icon.png',
            description: 'Building scalable web applications from scratch using MongoDB, Express, React, and Node.js with modern best practices.',
            link: '#',
        },
        {
            name: 'API Development',
            icon: './assets/mobile-icon.png',
            description: 'Designing secure and efficient RESTful APIs to power your web and mobile applications with robust authentication.',
            link: '#',
        },
        {
            name: 'UI/UX Engineering',
            icon: './assets/ui-icon.png',
            description: 'Creating responsive, pixel-perfect, and interactive user interfaces with modern React practices and smooth animations.',
            link: '#',
        },
        {
            name: 'Database Architecture',
            icon: './assets/graphics-icon.png',
            description: 'Optimizing MongoDB and MySQL schemas and queries for high performance, data integrity, and scalability.',
            link: '#',
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div ref={ref} id="services" className="w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-900/30 dark:to-transparent">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400">
                    What I Offer
                </h4>
                <h2 className="text-center text-5xl font-Ovo font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
                    My Services
                </h2>
                <p className="text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo text-gray-600 dark:text-gray-400 leading-relaxed">
                    Specialized in creating modern, performant web applications with cutting-edge technologies
                    and industry best practices.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={service.name}
                        variants={itemVariants}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="group relative border border-gray-200 dark:border-gray-700 rounded-2xl p-8 cursor-pointer bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        
                        <div className="relative z-10">
                            <motion.div
                                className="w-16 h-16 mb-6 bg-gradient-to-br from-purple-100 to-orange-100 dark:from-purple-900/30 dark:to-orange-900/30 rounded-xl flex items-center justify-center"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img src={service.icon} alt="" className="w-8" />
                            </motion.div>
                            
                            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                                {service.name}
                            </h3>
                            
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                {service.description}
                            </p>
                            
                            <motion.a
                                href={service.link}
                                className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-4 transition-all duration-300"
                                whileHover={{ x: 5 }}
                            >
                                Learn More
                                <motion.img
                                    src="./assets/right-arrow.png"
                                    alt=""
                                    className="w-4 dark:invert"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </motion.a>
                        </div>

                        <motion.div
                            className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-purple-600/10 to-orange-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}