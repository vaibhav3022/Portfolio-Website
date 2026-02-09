import { motion } from 'framer-motion';

export default function Header() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 1
            }
        }
    };

    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 relative overflow-hidden">

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10"
            >
                 <motion.div variants={imageVariants} className="mb-6">
                    <div className="relative group">
                       
<div className="relative hidden md:flex justify-center items-center group">

  {/* 🔮 Gradient Glow (perfect circle, controlled blur) */}
  <div
    className="
      absolute
      w-52 h-52
      rounded-full
      bg-gradient-to-r from-purple-600 to-orange-600
      blur-2xl
      opacity-60
      group-hover:opacity-90
      transition duration-300
      pointer-events-none
    "
  />

  {/* 👤 Profile Image */}
  <img
    src="./assets/profile.JPG"
    alt="Vaibhav Dhotre"
    className="
      relative
      w-44 h-44
      rounded-full
      object-cover
      border-4 border-white dark:border-gray-800
      shadow-2xl
    "
  />
</div>




                    </div>
                </motion.div> 

                <motion.h3
                    variants={itemVariants}
                    className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo"
                >
                    Hi! I'm Vaibhav Dhotre
                    <motion.img
                        src="./assets/hand-icon.png"
                        alt=""
                        className="w-6"
                        animate={{
                            rotate: [0, 14, -8, 14, -4, 10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                    />
                </motion.h3>

                <motion.h1
                    variants={itemVariants}
                    className="text-3xl sm:text-5xl lg:text-6xl font-Ovo font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent"
                >
                    MERN Stack Developer
                </motion.h1>

                <motion.div
                    variants={itemVariants}
                    className="mt-2"
                >
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-Ovo">
                        Based in Pune, Maharashtra
                    </p>
                </motion.div>

                <motion.p
                    variants={itemVariants}
                    className="max-w-2xl mx-auto mt-6 font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                    Transforming ideas into powerful web applications with MongoDB, Express.js, React, and Node.js.
                    Passionate about creating seamless user experiences and scalable solutions.
                </motion.p>

             <motion.div
  variants={itemVariants}
  className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full"
>
  <motion.a
    href="#contact"
    className="px-10 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white flex items-center gap-2 font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Contact Me
    <motion.img
      src="./assets/right-arrow-white.png"
      alt=""
      className="w-4"
      animate={{ x: [0, 5, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </motion.a>

  <motion.a
    href="/assets/Vaibhav-Dhotre.pdf"
    download
    className="px-10 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2 bg-white dark:bg-transparent dark:text-white font-medium transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Download Resume
    <img
      src="./assets/download-icon.png"
      alt=""
      className="w-4 dark:invert"
    />
  </motion.a>
</motion.div>


           
            </motion.div>
        </div>
    );
}