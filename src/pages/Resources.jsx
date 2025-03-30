import React, { useState } from "react";
import Modal from "../components/common/Modal";
import { motion } from "framer-motion";

const Resources = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = [
        { title: "Financial Planning for Specially Abled", url: "https://www.youtube.com/embed/48nQ8kvfiZY?si=9IBITbRwRYffUgFy" },
        { title: "Sign Language Basics", url: "https://www.youtube.com/embed/0FcwzMq4iWg" },
        { title: "Assistive Tech for Special Needs", url: "https://www.youtube.com/embed/omjVM1lwkII" },
        { title: "What is Intellectual Disability?", url: "https://www.youtube.com/embed/iD_D3mhcO7I?si=N-zxuljDgGsRvUCr" },
        { title: "What is Autism?", url: "https://www.youtube.com/embed/wlUNlaqgs3A?si=4JazNqHIA28dRvcT" },
        { title: "What is ADHD?", url: "https://www.youtube.com/embed/ouZrZa5pLXk?si=6Wmo-ntYPiAd5JNj" },
        { title: "Understanding Hearing Loss in Children", url: "https://www.youtube.com/embed/_tFJ9yzvDUM?si=adYjTka7jqtCUa_3" },
        { title: "Special Education playlist for Children", url: "https://www.youtube.com/embed/videoseries?si=D1eS4ROEUzrPJDJ_&amp;list=PLx1TQlS22h2b6QQSc_eE5rQotqbXVwsSu" },
        
    ];

    const apps = [
        { name: "Be My Eyes", link: "https://play.google.com/store/apps/details?id=com.bemyeyes.bemyeyes" },
        { name: "Dictionary.com", link: "https://play.google.com/store/apps/details?id=com.dictionary" },
        { name: "ISL Journey", link: "https://play.google.com/store/apps/details?id=com.toleio.india&hl=en_IN" },
        { name: "Hand Talk Translator", link: "https://play.google.com/store/apps/details?id=br.com.handtalk&hl=en" },
        { name: "Otsimo | Special Education", link: "https://play.google.com/store/apps/details?id=com.otsimo.app&pcampaignid=web_share" },

    ];

    const pdfs = [
        { name: "NCERT Books (Class 1-12)", link: "https://ncert.nic.in/textbook.php" },
        { name: "Balbharti State Board Books (Class 1-12)", link: "https://books.ebalbharati.in/ebook.aspx" },
        { name: "Scholarship Guide", link: "/assets/pdfs/scholarship-guide.pdf" },
        { name: "Govt. Schemes for Education", link: "/assets/pdfs/govt-schemes.pdf" },
        { name: "Sign Language PDF", link: "/assets/pdfs/sign-language.pdf" },
        { name: "Assistive Tech Guide", link: "/assets/pdfs/assistive-tech.pdf" },
        { name: "Braille Guide", link: "/assets/pdfs/braille.pdf" },
        
    ];

    const websites = [
        { name: "Khan Academy", link: "https://www.khanacademy.org/" },
        { name: "IXL", link: "https://in.ixl.com/" },
        { name: "Enable India", link: "https://www.enableindia.org/" },
        { name: "EdX (Harvard, MIT Courses)", link: "https://www.edx.org/" },
        { name: "National Scholarship Portal", link: "https://scholarships.gov.in/" },
        { name: "Vidya Lakshmi (Education Loans)", link: "https://www.vidyalakshmi.co.in/" },
        { name: "Indian Sign Language Dictionary", link: "https://indiansignlanguage.org/" },
        { name: "Google Live Transcribe", link: "https://www.android.com/accessibility/live-transcribe/" },
        { name: "Unique Disability ID Registration", link: "https://www.swavlambancard.gov.in//" },
        { name: "Scholarship for Students with Disabilities", link: "https://www.nhfdc.nic.in/scholarship-for-students-with-disabilities/" },
        { name: "Assistive Technology Resources", link: "https://ataporg.org/" },
        { name: "National Institute of Open Schooling", link: "https://www.nios.ac.in/" },
        { name: "Assistive Technology for Learning", link: "https://www.atl.org/" },
        { name: "National Digital Library of India", link: "https://ndl.iitkgp.ac.in/" },
    ];

    return (
        <div className="p-6 mt-20 min-h-screen bg-gray-100 dark:bg-gray-900 transition duration-300">
            <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="text-center mb-12"
>
    <h1 
    className="text-5xl font-bold text-transparent bg-clip-text 
               drop-shadow-lg transition-all duration-500
               bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
               dark:from-cyan-400 dark:via-violet-500 dark:to-magenta-500"
>
     Resources Hub 
</h1>

    <p className="text-lg text-gray-700 dark:text-gray-300 mt-3 max-w-2xl mx-auto leading-relaxed">
        Unlock the power of knowledge with our curated collection of learning materials, tools, and guides. ✨
    </p>
    
    <motion.div 
        initial={{ scaleX: 0 }} 
        animate={{ scaleX: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="w-24 h-1 mx-auto mt-2 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"
    ></motion.div>
</motion.div>


            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">🎥 Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {videos.map((video, index) => (
                    <motion.div
                        key={index}
                        className="relative border border-blue-200 dark:border-gray-700 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-lg p-6 cursor-pointer overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedVideo(video.url)}
                    >
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{video.title}</h2>

                        <div className="relative w-full h-60 rounded-xl overflow-hidden">
                            <iframe
                                className="w-full h-full rounded-xl pointer-events-none"
                                src={video.url}
                                title={video.title}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                ))}

                {selectedVideo && (
                    <Modal onClose={() => setSelectedVideo(null)}>
                        <div className="relative w-full h-full">
                            <iframe
                                className="w-full h-full rounded-lg"
                                src={selectedVideo}
                                allowFullScreen
                                title="Selected Video"
                            ></iframe>
                        </div>
                    </Modal>
                )}
            </div>


            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">📱 Mobile Apps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {apps.map((app, index) => (
                    <motion.a
                        key={index}
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="border border-green-200 dark:border-gray-700 bg-green-50 dark:bg-gray-800 shadow-lg rounded-lg p-4 flex items-center justify-between"
                    >
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{app.name}</h3>
                        <span className="text-blue-500 dark:text-blue-300 text-sm">Download ↗</span>
                    </motion.a>
                ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">📖 Reading Material</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {pdfs.map((pdf, index) => (
                    <motion.a
                        key={index}
                        href={pdf.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="border border-yellow-200 dark:border-gray-700 bg-yellow-50 dark:bg-gray-800 shadow-lg rounded-lg p-4 flex items-center justify-between"
                    >
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{pdf.name}</h3>
                        <span className="text-blue-500 dark:text-blue-300 text-sm">Open ↗</span>
                    </motion.a>
                ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">🌐 Websites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {websites.map((site, index) => (
                    <motion.a
                        key={index}
                        href={site.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="border border-purple-200 dark:border-gray-700 bg-purple-50 dark:bg-gray-800 shadow-lg rounded-lg p-4 flex items-center justify-between"
                    >
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{site.name}</h3>
                        <span className="text-blue-500 dark:text-blue-300 text-sm">Visit ↗</span>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Resources;
