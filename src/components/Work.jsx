import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const work = [
    {
      name: "Real-Time Chat Application",
      icon: "./assets/work1.webp",
      description: "MERN Stack & Socket.io",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      highlights: [
        "100+ concurrent users support",
        "JWT authentication & encryption",
        "Real-time notifications",
        "Online/offline status tracking",
      ],
      link: "",
    },
    {
      name: "Virtual White Flame",
      icon: "./assets/work2.webp",
      description: "Dynamic Business Platform",
      tech: ["React.js", "Express.js", "MySQL", "Bootstrap"],
      highlights: [
        "Admin panel with role-based auth",
        "15+ RESTful API endpoints",
        "90% faster content updates",
        "Responsive cross-device design",
      ],
      link: "",
    },
    {
      name: "E-commerce Platform",
      icon: "./assets/work3.jpg",
      description: "Full-Stack Shopping Solution",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      highlights: [
        "Secure payment integration",
        "Product catalog management",
        "Cart & checkout system",
        "Order tracking dashboard",
      ],
      link: "",
    },
    {
      name: "Authentication System",
      icon: "./assets/work4.jpg",
      description: "JWT & OAuth Integration",
      tech: ["Node.js", "Express", "Passport.js", "Firebase"],
      highlights: [
        "Social login integration",
        "Password encryption with bcrypt",
        "Session management",
        "Email verification system",
      ],
      link: "",
    },
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div ref={ref} id="work" className="w-full px-[12%] py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400">
          My Portfolio
        </h4>
        <h2 className="text-center text-5xl font-Ovo font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo text-gray-600 dark:text-gray-400 leading-relaxed">
          Showcasing my expertise in full-stack development with real-world
          projects that demonstrate technical proficiency and problem-solving
          skills.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10"
      >
        {work.map((project, index) => (
          <motion.div
            key={project.name}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div
              className="aspect-video bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url(${project.icon})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-orange-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                {project.name}
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="text-purple-600 dark:text-purple-400 mt-0.5">
                      ✓
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="https://github.com/vaibhav3022/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-orange-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow duration-300"
              >
                View Project
                <img
                  src="./assets/send-icon.png"
                  alt=""
                  className="w-4 invert"
                />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="text-center mt-16"
      >
        <motion.a
          href="#"
          className="inline-flex items-center gap-3 px-8 py-3 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full font-semibold text-gray-700 dark:text-white transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Projects
          <motion.img
            src="./assets/right-arrow-bold.png"
            alt=""
            className="w-4 dark:hidden"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.img
            src="./assets/right-arrow-bold-dark.png"
            alt=""
            className="w-4 hidden dark:block"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.a>
      </motion.div>
    </div>
  );
}
