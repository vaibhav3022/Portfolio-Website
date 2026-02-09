import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const sideMenuRef = useRef();
    const navRef = useRef();
    const navLinkRef = useRef();
    const [activeSection, setActiveSection] = useState('top');

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    };

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    };

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY > 50) {
                navRef.current.classList.add('bg-white/80', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-gray-900/80', 'dark:shadow-white/5');
                navLinkRef.current.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', 'dark:bg-transparent');
            } else {
                navRef.current.classList.remove('bg-white/80', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-gray-900/80', 'dark:shadow-white/5');
                navLinkRef.current.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', 'dark:bg-transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Theme initialization
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#top' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Experience', href: '#experience' },
        { name: 'Work', href: '#work' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <img src="./assets/header-bg-color.png" alt="" className="w-full" />
            </div>

            <motion.nav
                ref={navRef}
                className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.a
                    href="#!"
                    whileHover={{ scale: 1.1 }}
                    className="relative group"
                >
                    <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-orange-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"
                    />
                    <img
                        src="/assets/profile.JPG"
                        alt="Logo"
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-lg dark:hidden"
                    />
                    <img
                        src="/assets/profile.JPG"
                        alt="Logo"
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-lg hidden dark:block"
                    />
                </motion.a>

                <ul
                    ref={navLinkRef}
                    className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/30 dark:bg-transparent backdrop-blur-sm"
                >
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a
                                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 relative group"
                                href={item.href}
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-orange-600 group-hover:w-full transition-all duration-300" />
                            </a>
                        </motion.li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <motion.button
                        onClick={toggleTheme}
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                    >
                        <img src="./assets/moon_icon.png" alt="" className="w-5 dark:hidden" />
                        <img src="./assets/sun_icon.png" alt="" className="w-5 hidden dark:block" />
                    </motion.button>

                    <motion.a
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-8 py-2 border-2 border-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 dark:border-gray-600 rounded-full font-Ovo transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact
                        <motion.img
                            src="./assets/arrow-icon.png"
                            alt=""
                            className="w-3 dark:hidden"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <motion.img
                            src="./assets/arrow-icon-dark.png"
                            alt=""
                            className="w-3 hidden dark:block"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </motion.a>

                    <motion.button
                        className="block md:hidden ml-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                        onClick={openMenu}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img src="./assets/menu-black.png" alt="" className="w-6 dark:hidden" />
                        <img src="./assets/menu-white.png" alt="" className="w-6 hidden dark:block" />
                    </motion.button>
                </div>

                {/* Mobile menu */}
                <ul
                    ref={sideMenuRef}
                    className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-gray-900 transition duration-500 font-Ovo shadow-2xl"
                >
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <motion.button whileTap={{ scale: 0.9 }}>
                            <img src="./assets/close-black.png" alt="" className="w-5 cursor-pointer dark:hidden" />
                            <img src="./assets/close-white.png" alt="" className="w-5 cursor-pointer hidden dark:block" />
                        </motion.button>
                    </div>

                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.name}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a
                                href={item.href}
                                onClick={closeMenu}
                                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 text-lg"
                            >
                                {item.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </motion.nav>
        </>
    );
}