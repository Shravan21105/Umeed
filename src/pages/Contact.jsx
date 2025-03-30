import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [messageStatus, setMessageStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    const currentTime = new Date().toLocaleString();
  
    const templateParams = {
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
      message: formData.message,
      time: currentTime,
    };
  
    emailjs
      .send(
        "service_cwcf328",
        "template_6pot1aq",
        templateParams,
        "YiIghRhGE-nY8toQi"
      )
      .then(
        (result) => {
          setMessageStatus("✅ Message Sent Successfully!");
  
          setTimeout(() => {
            setMessageStatus("");
          }, 5000); 
  
          console.log("Email Sent:", result.text);
          setFormData({ name: "", email: "", contact: "", message: "" });
        },
        (error) => {
          setMessageStatus("❌ Failed to send message. Try again.");
          
          setTimeout(() => {
            setMessageStatus("");
          }, 5000); 
  
          console.log("Error:", error.text);
        }
      );
  };
  

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-10 py-16 px-6 bg-gray-100 dark:bg-gray-900"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white"
      >
        Contact Us 📞
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full bg-white dark:bg-gray-800 dark:border-gray-700 p-6 rounded-lg shadow-md border border-transparent bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
        >
          <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-pink-400 text-transparent bg-clip-text dark:from-cyan-400 dark:to-purple-500 ">
            Get in Touch 💬
          </h3>

          <form className="space-y-3" onSubmit={sendEmail}>
            {["name", "email", "contact", "message"].map((field, index) => (
              <motion.label
                key={field}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * index }}
                className="block"
              >
                <span className="font-semibold text-xl bg-gradient-to-r from-blue-500 to-pink-600 text-transparent bg-clip-text block text-left mb-1 dark:from-blue-400 dark:to-pink-300">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </span>
                {field === "message" ? (
                  <textarea
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring focus:ring-blue-400 text-lg dark:bg-gray-700 dark:text-white"
                    rows="3"
                    placeholder={`Your ${field}...`}
                    required
                  ></textarea>
                ) : (
                  <input
                    type={field === "email" ? "email" : field === "contact" ? "tel" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring focus:ring-blue-400 text-lg dark:bg-gray-700 dark:text-white"
                    placeholder={`Your ${field}`}
                    required
                  />
                )}
              </motion.label>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-4 py-2 rounded-md font-medium text-xl transition-all shadow-md bg-gradient-to-r from-blue-600 to-pink-600 text-white hover:from-blue-500 hover:to-pink-500 w-full dark:from-blue-500 dark:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400"
            >
              Send Message 🚀
            </motion.button>
          </form>

          <AnimatePresence>
            {messageStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="mt-4 text-center font-semibold text-lg text-blue-600 dark:text-blue-400"
              >
                {messageStatus}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="space-y-6"
        >
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              📌 Contact Info
            </h3>

            {[
              { icon: "📍", label: "Address", value: "Ramdeobaba University, Nagpur - 440013" },
              { icon: "📞", label: "Phone", value: "+91 95792 83106" },
              { icon: "✉️", label: "Email", value: "sadalgekarsm@rknec.edu" },
            ].map((info, index) => (
              <motion.p
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 * index }}
                className="grid grid-cols-[auto_1fr] gap-2 text-gray-800 dark:text-gray-300"
              >
                <strong>{info.icon} {info.label}:</strong>
                <span className="pl-2">{info.value}</span>
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7440.798106219144!2d79.0585616751094!3d21.176300880510144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1006cc78ce9%3A0x37afa03de75a8708!2sRamdeobaba%20University%20(RBU)!5e0!3m2!1sen!2sus!4v1741808263135!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
