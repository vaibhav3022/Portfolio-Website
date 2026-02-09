import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tools = [
    { name: "vscode", icon: "./assets/vscode.png" },
    { name: "firebase", icon: "./assets/firebase.png" },
    { name: "mongodb", icon: "./assets/mongodb.png" },
    { name: "Postman", icon: "./assets/postman.png" },
    { name: "git", icon: "./assets/git.png" },
  ];

  const skills = [
    {
      name: "Frontend",
      icon: "⚛️",
      description:
        "React.js, Next.js, HTML5, CSS3, Bootstrap, Tailwind CSS, Responsive Design",
    },
    {
      name: "Backend",
      icon: "🔧",
      description:
        "Node.js, Express.js, RESTful APIs, JWT Authentication, Socket.io",
    },
    {
      name: "Database",
      icon: "🗄️",
      description:
        "MongoDB, MySQL, Database Design, Query Optimization",
    },
  ];

  /* 🔥 FAST VARIANTS */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06, // FAST
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.25, // FAST
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={ref}
      id="about"
      className="w-full px-[12%] py-20 scroll-mt-20"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.35 }}
      >
        <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400">
          Get To Know More
        </h4>
        <h2 className="text-center text-5xl font-Ovo font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
          About Me
        </h2>
      </motion.div>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Image Section */}
        <motion.div
          className="max-w-max mx-auto relative"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.35 }}
        >
          <div className="relative group">
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl blur-2xl opacity-30"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                duration: 1.8, // FAST loop
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <img
              src="./assets/profile.JPG"
              alt="Vaibhav Dhotre"
              className="relative w-64 sm:w-80 rounded-3xl shadow-2xl"
            />
          </div>

          <motion.div
            className="bg-white dark:bg-gray-800 w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-2xl flex items-center justify-center border-4 border-gray-100 dark:border-gray-700"
            initial={{ scale: 0, rotate: -90 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 260, // FAST spring
              damping: 18,
            }}
          >
            <motion.img
              src="./assets/circular-text.png"
              alt=""
              className="w-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 10, // faster rotation
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <img
              src="./assets/dev-icon.jpg"
              alt=""
              className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="flex-1 px-4 sm:px-6 lg:px-0"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.35 }}
        >
          {/* Description */}
          <p className="mb-8 max-w-2xl font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            Aspiring MERN Stack Developer with professional experience as an
            intern at{" "}
            <span className="font-bold text-purple-600 dark:text-purple-400">
              NDSofttech
            </span>
            . Proficient in building dynamic web applications using React,
            Node.js, and MongoDB.
          </p>

          {/* Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mb-10"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  transition: { duration: 0.15 }, // FAST hover
                }}
                className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 cursor-pointer bg-white dark:bg-gray-800 hover:shadow-xl"
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="mb-2 font-bold text-xl text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools */}
          <h4 className="mb-5 text-gray-700 dark:text-gray-300 text-lg font-semibold">
            Tools I Use
          </h4>

          <motion.ul
            className="flex items-center gap-4 overflow-x-auto pb-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {tools.map((tool) => (
              <motion.li
                key={tool.name}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  rotate: 5,
                  transition: { duration: 0.12 }, // ⚡ FAST
                }}
                className="flex items-center justify-center w-16 aspect-square border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:shadow-lg shrink-0"
              >
                <img src={tool.icon} alt={tool.name} className="w-8" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}
