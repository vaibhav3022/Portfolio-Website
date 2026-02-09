import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experience = [
    {
      company: "The DataTech Labs",
      location: "Bavdhan, Pune",
      role: "Software Engineer Trainee – Intern",
      period: "Nov 2025 - Present",
      description: [
        "Developed responsive and reusable UI components using React.js",
        "Implemented modern layouts and designs using Tailwind CSS",
        "Managed component state and props for smooth user interactions",
        "Integrated frontend with backend APIs for dynamic data rendering",
        "Focused on performance optimization and clean component architecture",
        "Collaborated with designers and backend developers for UI alignment",
      ],
    },
    {
      company: "NDSOFTTECH Solutions",
      location: "Pune",
      role: "MERN Stack Developer Intern",
      period: "Nov 2024 - Jan 2025",
      description: [
        "Developed and integrated frontend components using React.js",
        "Built RESTful APIs using Node.js & Express.js",
        "Implemented CRUD operations and form validations",
        "Used Git & GitHub for collaborative development",
      ],
    },
  ];

  const achievements = [
    {
      title: "Published Research",
      description:
        "Co-authored paper on 'Analyzing Social Media's Impact on Suicide' at 9th Student Conference, Indira College (2025)",
      icon: "📚",
    },
    {
      title: "Competition Winner",
      description:
        "First place in LTIMindTree corporate analysis competition on technology consulting",
      icon: "🏆",
    },
    {
      title: "Cultural Excellence",
      description:
        "Accomplished Pakhawaj player with multiple cultural program performances",
      icon: "🎵",
    },
  ];

  /* 🔥 FAST VARIANTS */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06, // FAST stagger
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3, // FAST
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={ref}
      id="experience"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/30"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.35 }}
      >
        <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400">
          My Journey
        </h4>
        <h2 className="text-center text-5xl font-Ovo font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
          Experience & Achievements
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo text-gray-600 dark:text-gray-400">
          Building expertise through hands-on development and continuous learning
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto mb-16"
      >
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative pl-8 pb-12 border-l-2 border-purple-500/30"
          >
            <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-orange-600 rounded-full shadow-lg" />

            <motion.div
              whileHover={{
                y: -6,
                transition: { duration: 0.15 }, // FAST hover
              }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0 text-sm text-gray-600 dark:text-gray-400">
                  <p className="font-medium">{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-purple-600 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Achievements */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-center mb-10 font-Ovo">
          Achievements & Recognition
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.15 },
              }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                {achievement.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto mt-16"
      >
        <h3 className="text-3xl font-bold text-center mb-10 font-Ovo">
          Education
        </h3>

        <div className="space-y-6">
          {[ 
            {
              title: "Master of Science in Computer Applications",
              college: "Indira College of Commerce and Science, Pune",
              cgpa: "CGPA: 9.25/10",
              period: "Aug 2024 - May 2026",
            },
            {
              title: "Bachelor of Science in Computer Science",
              college: "R.B. Narayanrao Borawake College, Shrirampur",
              cgpa: "CGPA: 7.64/10",
              period: "June 2021 - May 2024",
            },
          ].map((edu, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                    {edu.title}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold mt-1">
                    {edu.college}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0 text-right">
                  <p className="text-sm font-bold text-gray-800 dark:text-white">
                    {edu.cgpa}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {edu.period}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
