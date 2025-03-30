import { motion } from "framer-motion";
import aboutImg from "../assets/images/about-us.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="relative text-center min-h-screen flex flex-col justify-center items-center py-32 px-6 transition-all duration-300"
    >
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-10"
      >
        About Umeed Project
      </motion.h3>

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-lg text-left"
        >
          <p className="text-xl leading-relaxed mb-6">
            Umeed Project is an initiative dedicated to
            <span className="bg-gradient-to-r dark:bg-gradient-to-l  from-blue-600 to-purple-500  dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              {" "}empowering specially-abled children
            </span>,
            particularly in the
            <span className="bg-gradient-to-r dark:bg-gradient-to-l  from-blue-600 to-purple-500  dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              {" "}Vidarbha region of Maharashtra
            </span>.
            Our mission is to provide
            <span className="bg-gradient-to-r dark:bg-gradient-to-l  from-blue-600 to-purple-500  dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              {" "}quality education, skill-based training, and emotional support
            </span>,
            ensuring that
            <span className="bg-gradient-to-r dark:bg-gradient-to-l  from-blue-600 to-purple-500  dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              {" "}no child is left behind{" "}
            </span>
            in their journey to success.
          </p>
        </motion.div>

        <motion.img
          src={aboutImg}
          alt="About Us"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-96 md:w-[400px] rounded-lg shadow-lg object-cover"
        />
      </div>

      <div className="mt-16 max-w-5xl text-left">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-center mb-6"
        >
          Our Mission & How We Work
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed"
        >
            At Umeed Project, our mission is to bring
            <span className="bg-gradient-to-r dark:bg-gradient-to-l  from-blue-600 to-purple-400  dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent font-semibold">
            {" "}quality education{" "}
          </span>
          and
          <span className="bg-gradient-to-r dark:bg-gradient-to-l  from-blue-600 to-purple-400  dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent font-semibold">
          {" "}equal opportunities{" "}
          </span>
          to specially-abled children in Vidarbha. We work closely with educators, caregivers, and communities to create a nurturing environment where every child can learn and grow with
          <span className="bg-gradient-to-r dark:bg-gradient-to-l  from-blue-600 to-purple-400  dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent font-semibold">
          {" "}dignity and respect
          </span>.

          Our initiatives focus on
          <span className="bg-gradient-to-r dark:bg-gradient-to-l  from-blue-600 to-purple-400  dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent font-semibold">
          {" "} teacher training
          </span>,
          <span className="bg-gradient-to-r dark:bg-gradient-to-l  from-blue-600 to-purple-400  dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent font-semibold">
          {" "}skill-based learning
          </span>,
          and
          <span className="bg-gradient-to-r dark:bg-gradient-to-l  from-blue-600 to-purple-400  dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent font-semibold">
          {" "} emotional well-being
          </span>, ensuring that children with diverse abilities can lead independent and fulfilling lives.

          Through
          <span className="bg-gradient-to-r dark:bg-gradient-to-l  from-blue-600 to-purple-400  dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent font-semibold">
          {" "}vocational training programs
          </span>, we empower them with
          <span className="bg-gradient-to-r dark:bg-gradient-to-l  from-blue-600 to-purple-400  dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent font-semibold">
          {" "} practical skills{" "}
          </span> that open doors to employment and self-reliance. Our vision is to build an
          <span className="bg-gradient-to-r dark:bg-gradient-to-l  from-blue-600 to-purple-400  dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent font-semibold">
          {" "}inclusive society{" "}
          </span> where barriers to education and opportunities are eliminated, allowing every child to realize their
          <span className="bg-gradient-to-r dark:bg-gradient-to-l  from-blue-600 to-purple-400  dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent font-semibold">
            {" "} true potential
          </span>.
        </motion.p>


       <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      icon: "📚",
      title: "Special Education Programs",
      description: "Developing customized learning techniques for children with diverse needs.",
    },
    {
      icon: "🧠",
      title: "Psychological Support",
      description: "Providing counseling & emotional guidance to children & parents.",
    },
    {
      icon: "🚀",
      title: "Vocational Training",
      description: "Teaching practical skills to help children become independent.",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }} 
      viewport={{ once: true }}
      className="p-6 rounded-lg shadow-lg text-center border border-blue-200 dark:border-gray-700
        bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900
        hover:scale-105 transition-all duration-300"
    >
      <h5 className="text-3xl">{item.icon}</h5>
      <h5 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 
        dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent mt-2">
        {item.title}
      </h5>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-3">{item.description}</p>
    </motion.div>
  ))}
</div>


      </div>


<div className="mt-16 max-w-5xl text-left">
  <motion.h4
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-4xl font-semibold text-center mb-8"
  >
    Our Vision for Vidarbha & Beyond 🚀
  </motion.h4>

  <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="text-xl leading-relaxed  text-center max-w-3xl mx-auto"
>
  In the next <b>5 years</b>,  
  <span className="bg-gradient-to-r dark:bg-gradient-to-l  from-blue-600 to-purple-400  dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent font-semibold">
  {" "}Umeed Project{" "}
  </span> 
  envisions transforming Vidarbha into a model region for  
  <b>
  <span className="bg-gradient-to-r dark:bg-gradient-to-l  from-blue-600 to-purple-400  dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent">
  {" "}inclusive education & empowerment
    </span>
  </b>.  
  We are committed to:
</motion.p>


<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
  {[
    {
      icon: "🏫",
      title: "Expanding Inclusive Schools",
      description:
        "We aim to expand special education schools across Vidarbha, ensuring quality learning for every specially-abled child, even in remote areas, fostering holistic development.",
    },
    {
      icon: "🎤",
      title: "Spreading Awareness",
      description:
        "Conducting workshops, community outreach, and awareness campaigns to break myths and foster inclusivity.",
    },
    {
      icon: "💡",
      title: "Assistive Technology for Learning",
      description:
        "Introducing tech-driven solutions like speech-to-text tools and customized learning apps to enhance education for specially-abled children.",
    },
    {
      icon: "🤝",
      title: "Public-Private Collaborations",
      description:
        "Partnering with schools, NGOs, and government bodies to drive large-scale impact and policy reforms.",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
      viewport={{ once: true }}
      className="p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-blue-500 dark:border-blue-400"
    >
      <h5 className="text-3xl">{item.icon}</h5>
      <h5 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-3">
        {item.title}
      </h5>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-3">
        {item.description}
      </p>
    </motion.div>
  ))}
</div>

</div>

</div>
  );
};

export default About;
