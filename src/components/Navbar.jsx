import { useEffect, useRef } from 'react'

export default function Navbar() {
    const sideMenuRef = useRef();
    const navRef = useRef();
    const navLinkRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
    const toggleTheme = () => {

        document.documentElement.classList.toggle('dark');

        if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                navRef.current.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
                navLinkRef.current.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
            } else {
                navRef.current.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
                navLinkRef.current.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
            }
        })

        // -------- light mode and dark mode -----------

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <img src="./assets/header-bg-color.png" alt="" className="w-full" />
            </div>

            <nav ref={navRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">

                <a href="#!">
                    <img src="./assets/logo.png" alt="Logo" className="w-28 cursor-pointer mr-14 dark:hidden" />
                    <img src="data:image/jpeg;base64,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" 
                    alt="Logo" className="w-28 cursor-pointer mr-14 hidden dark:block rounded-full" />
                </a>

                <ul ref={navLinkRef} className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/30 dark:bg-transparent ">
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#top">Home</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#about">About me</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#services">Services</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#work">My Work</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#contact">Contact me</a></li>
                </ul>

                <div className="flex items-center gap-4">
                    <button onClick={toggleTheme}>
                        <img src="./assets/moon_icon.png" alt="" className="w-5 dark:hidden" />
                        <img src="./assets/sun_icon.png" alt="" className="w-5 hidden dark:block" />
                    </button>

                    <a href="#contact" className="hidden lg:flex items-center gap-3 px-8 py-1.5 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full ml-4 font-Ovo dark:border-white/30">
                        Contact
                        <img src="./assets/arrow-icon.png" alt="" className="w-3 dark:hidden" />
                        <img src="./assets/arrow-icon-dark.png" alt="" className="w-3 hidden dark:block" />
                    </a>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <img src="./assets/menu-black.png" alt="" className="w-6 dark:hidden" />
                        <img src="./assets/menu-white.png" alt="" className="w-6 hidden dark:block" />
                    </button>

                </div>
                {/* -- ----- mobile menu ------  -- */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white">

                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <img src="./assets/close-black.png" alt="" className="w-5 cursor-pointer dark:hidden" />
                        <img src="./assets/close-white.png" alt="" className="w-5 cursor-pointer hidden dark:block" />
                    </div>

                    <li><a href="#top" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About me</a></li>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#work" onClick={closeMenu}>My Work</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}