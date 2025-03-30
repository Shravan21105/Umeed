  import { useState } from "react";
  import { motion } from "framer-motion";
  import { Link } from "react-router-dom";
  import { Link as ScrollLink } from "react-scroll";
  import contactImg from "../assets/images/Contact.png";
  import emailjs from "emailjs-com";
  import { AnimatePresence } from "framer-motion";



  const images = [
    "/assets/images/kid3.png",
    "/assets/images/kid2.png",
    "/assets/images/kid4.png",
    "/assets/images/kid5.png",
  ];

  const positions = [
    { top: "5%", left: "5%", animation: { x: [-100, 0] } },
    { top: "5%", right: "5%", animation: { x: [100, 0] } },
    { bottom: "75%", left: "10%", animation: { x: [-50, 0], y: [50, 0] } },
    { bottom: "75%", right: "10%", animation: { x: [50, 0], y: [50, 0] } },
  ];

  const sizes = [
    { width: "200px", height: "230px" },
    { width: "170px", height: "200px" },
    { width: "190px", height: "210px" },
    { width: "170px", height: "190px" },
  ];

  const faqs = [
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer educational programs, counseling, and resources to help specially-abled children and their families.",
    },
    {
      question: "How can I contribute to your organization?",
      answer:
        "You can contribute by volunteering, donating, or spreading awareness about our cause.",
    },
    {
      question: "Are there any fees for accessing resources?",
      answer:
        "No, our resources and support services are free for specially-abled children and their families.",
    },
    {
      question: "How do I find a school for my child?",
      answer:
        "We have compiled a list of schools in the Vidarbha region that provide inclusive education for specially-abled children.",
    },
  ];


  const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);


    return (
      <section className="mt-16 px-6">
        <h3 className="text-4xl font-bold mb-10 text-center dark:text-white">
          Frequently Asked Questions
        </h3>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-md bg-gradient-to-r from-blue-50 to-purple-50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 dark:from-gray-700 dark:to-gray-800"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 font-semibold flex justify-between items-center transition-all duration-300 hover:bg-opacity-80"
              >
                <span className="text-lg text-black dark:text-white">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-xl text-black dark:text-white"
                >
                  {openIndex === index ? "−" : "+"}
                </motion.span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="px-6 py-4 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300"
              >
                {faq.answer}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };



  const AnimatedSection = ({ children }) => {
    return (
      <motion.section
        initial={{ opacity: 0.5, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }} 
        viewport={{ once: true }} 
      >
        {children}
      </motion.section>
    );
  };



  const Home = ({ darkMode }) => {

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

      // 🕒 Generate Current Time
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
            console.log("✅ Email Sent:", result.text);
            setMessageStatus("✅ Message Sent Successfully!");

            setTimeout(() => setMessageStatus(""), 5000);

            setFormData({ name: "", email: "", contact: "", message: "" });
          },
          (error) => {
            console.log("❌ Error:", error.text);
            setMessageStatus("❌ Failed to send message. Try again.");

            setTimeout(() => setMessageStatus(""), 5000);
          }
        );
    };


    return (
      <div className="relative text-center py-40 transition-all duration-300">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            className="absolute hidden max-[1330px]:hidden xl:block"
            style={{
              ...positions[index],
              width: sizes[index].width,
              height: sizes[index].height,
            }}
            initial={{ opacity: 0, ...positions[index].animation }}
            animate={{ opacity: 1, ...positions[index].animation }}
            transition={{ duration: 1.2, delay: index * 0.3, ease: "easeOut" }}
          />
        ))}

        <AnimatedSection>
          <section className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl font-extrabold tracking-wide drop-shadow-md">
              <span className="bg-gradient-to-r from-blue-600 to-pink-500 
          dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">
                Empowering Specially-Abled Children & Families
              </span>
            </h2>


            <p className="text-lg mt-4 max-w-2xl mx-auto opacity-90">
              Our mission is to provide
              <span
                className="font-semibold bg-gradient-to-r from-pink-600 to-blue-600 
            dark:from-cyan-400 dark:to-blue-400  bg-clip-text text-transparent">
                {" "} support, resources, and education{" "}
              </span>
              to ensure every child gets equal opportunities to thrive and succeed.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg font-semibold text-lg transition-all shadow-md 
            bg-gradient-to-r from-white to-gray-100 text-blue-600 hover:from-gray-200 hover:to-gray-300"
              >
                <Link to="/about">Know More About Us</Link>
              </motion.button>

              <ScrollLink to="getInvolved" smooth={true} duration={1400} offset={-110}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg font-semibold text-lg transition-all shadow-md 
            bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 
            hover:from-yellow-300 hover:to-yellow-200"
                >
                  Get Involved
                </motion.button>
              </ScrollLink>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mt-16 px-6">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg max-w-3xl mx-auto animate-fade-in">
              We strive to build an inclusive world where specially-abled children receive equal opportunities to learn and grow. Through our dedicated programs, community support, and innovative learning methods, we are creating a better future for these children and their families.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mt-16 px-6">
            <h3 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-200">
              Why Choose Us?
            </h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="p-4 rounded-lg shadow-lg max-w-sm hover:scale-105 transition-transform 
                        bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 
                        border border-blue-200 dark:border-gray-700">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">💡 Inclusive Learning</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  We create tailored education plans for every child.
                </p>
              </div>
              <div className="p-4 rounded-lg shadow-lg max-w-sm hover:scale-105 transition-transform 
                        bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 
                        border border-blue-200 dark:border-gray-700">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">❤️ Community Support</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Parents and children receive 24/7 emotional and resource support.
                </p>
              </div>
              <div className="p-4 rounded-lg shadow-lg max-w-sm hover:scale-105 transition-transform 
                        bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 
                        border border-blue-200 dark:border-gray-700">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">🚀 Real Impact</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  We are committed to making a lasting difference in children's lives.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>



        <AnimatedSection>
          <section className="mt-16 px-6">
            <h3 className="text-3xl font-bold mb-6">Schools in Vidarbha Region</h3>
            <p className="text-lg max-w-3xl mx-auto mb-6 animate-fade-in">
              We provide a list of schools in the <span className="font-semibold bg-gradient-to-r from-pink-600 to-blue-600 
          dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
                {" "} Vidarbha Region {" "}
              </span>
              that offer supportive education for specially-abled children. Our aim is to help families
              find the right institutions that cater to their children's unique needs.
            </p>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg font-semibold text-lg transition-all shadow-md bg-gradient-to-r from-pink-600 to-blue-600 text-white
                dark:from-teal-400 dark:to-blue-400 dark:text-black"
              >
                <Link to="/schools">View Schools in Vidarbha 🏫</Link>
              </motion.button>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>

          <section id="getInvolved" className="mt-16 px-6">
            <h3 className="text-3xl font-bold mb-6">Get Involved</h3>
            <p className="text-lg max-w-3xl mx-auto mb-6 animate-fade-in">
              Join us in our mission to support and uplift specially-abled children
              and their families. You can contribute by volunteering, donating, or
              spreading awareness about our cause.
            </p>
          </section>
        </AnimatedSection>
        <AnimatedSection>
          <section
            className="mt-12 px-6 flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <div className="w-full md:w-2/5 hidden md:block">
              <img
                src={contactImg}
                alt="Contact Us"
                className="rounded-lg w-full h-auto"
              />
            </div>


            <div className="w-full md:w-1/2 lg:w-2/5 bg-white dark:bg-gray-800 dark:border-gray-700 p-6 rounded-lg shadow-md border border-transparent bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-pink-400 text-transparent bg-clip-text dark:from-cyan-400 dark:to-purple-500">
                Contact Us 📞
              </h3>

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

              <form onSubmit={sendEmail} className="space-y-3">
                <label className="block">
                  <span className="font-semibold text-xl bg-gradient-to-r from-blue-500 to-pink-600 text-transparent bg-clip-text block text-left mb-1 dark:from-blue-400 dark:to-pink-300">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring focus:ring-blue-400 text-lg dark:bg-gray-700 dark:text-white transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </label>

                <label className="block">
                  <span className="font-semibold text-xl bg-gradient-to-r from-blue-500 to-pink-600 text-transparent bg-clip-text block text-left mb-1 dark:from-blue-400 dark:to-pink-300">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring focus:ring-blue-400 text-lg dark:bg-gray-700 dark:text-white transition-all duration-300"
                    placeholder="Your email"
                    required
                  />
                </label>

                <label className="block">
                  <span className="font-semibold text-xl bg-gradient-to-r from-blue-500 to-pink-600 text-transparent bg-clip-text block text-left mb-1 dark:from-blue-400 dark:to-pink-300">
                    Contact Number
                  </span>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring focus:ring-blue-400 text-lg dark:bg-gray-700 dark:text-white transition-all duration-300"
                    placeholder="Your phone number"
                    required
                  />
                </label>

                <label className="block">
                  <span className="font-semibold text-xl bg-gradient-to-r from-blue-500 to-pink-600 text-transparent bg-clip-text block text-left mb-1 dark:from-blue-400 dark:to-pink-300">
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring focus:ring-blue-400 text-lg dark:bg-gray-700 dark:text-white transition-all duration-300"
                    rows="3"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </label>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-4 py-2 rounded-md font-medium text-xl transition-all shadow-md bg-gradient-to-r from-blue-600 to-pink-600 text-white hover:from-blue-500 hover:to-pink-500 w-full dark:from-blue-500 dark:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400"
                >
                  Send Message 🚀
                </motion.button>
              </form>
            </div>

          </section>
        </AnimatedSection>
        <AnimatedSection>
          <FAQSection />
        </AnimatedSection>
      </div>
    );
  };

  export default Home;
