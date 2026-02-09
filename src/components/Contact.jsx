import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [toast, setToast] = useState(""); // For success message
  const [loading, setLoading] = useState(false); // Optional: loading state

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "vaibhavdhotre682@gmail.com",
      link: "mailto:vaibhavdhotre682@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91-9021850960",
      link: "tel:+919021850960",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Pune, Maharashtra, India",
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default page reload
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/vaibhavdhotre682@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }
      );

      if (response.ok) {
        setToast("Form submitted successfully!");
        form.reset(); // Clear the form
      } else {
        const data = await response.json();
        setToast("Oops! Something went wrong. Please try again.");
        console.error(data);
      }
    } catch (error) {
      setToast("Error submitting the form. Try again later.");
      console.error(error);
    }

    setLoading(false);

    // Hide toast after 3 seconds
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <div
      ref={ref}
      id="contact"
      className="w-full px-[8%] sm:px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/30"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400">
          Connect With Me
        </h4>
        <h2 className="text-center text-4xl sm:text-5xl font-Ovo font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo text-gray-600 dark:text-gray-400 leading-relaxed">
          I'd love to hear from you! Whether you have a question, want to
          collaborate, or just want to say hi, feel free to reach out.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center"
            >
              <div className="text-4xl mb-3">{info.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">
                {info.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {info.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Portfolio Contact Form - New Message"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 focus:border-purple-500 outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 focus:border-purple-500 outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
            />
          </div>

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 mb-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 focus:border-purple-500 outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-white resize-none"
          />

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-orange-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Toast Notification */}
          {toast && (
            <div className="mt-4 text-center text-green-600 dark:text-green-400 font-semibold">
              {toast}
            </div>
          )}
        </motion.form>
      </div>
    </div>
  );
}
