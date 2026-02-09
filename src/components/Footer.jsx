import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/vaibhav3022", icon: "⚡" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vaibhav-dhotre-96b83a224/",
      icon: "💼",
    },
    { name: "Twitter", url: "https://twitter.com/VaibhavDhotre30", icon: "🐦" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-5  bg-gray-50 dark:bg-gray-900/50">
      {/* Footer Content */}
      <div className="border-t border-gray-300 dark:border-gray-700 mx-[10%] py-6">
        <div className="text-center sm:flex items-center justify-between px-4">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://github.com/vaibhav3022"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              Vaibhav Dhotre
            </a>{" "}
            • MERN Stack Developer • All rights reserved.
          </p>

          <ul className="flex items-center gap-8 justify-center mt-4 sm:mt-0">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center py-4 text-sm text-gray-500 dark:text-gray-500">
        Built with React, Tailwind CSS & Framer Motion
      </div>

      {/* 🔝 Scroll To Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="
          fixed bottom-6 right-6 z-50
          w-12 h-12
          rounded-full
          bg-gradient-to-r from-purple-600 to-orange-600
          text-white
          flex items-center justify-center
          shadow-lg
          hover:shadow-xl
          transition-all duration-300
        "
        aria-label="Scroll to top"
      >
        ↑
      </motion.button>
    </div>
  );
}
