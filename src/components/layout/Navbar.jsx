import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();
  const menuItems = ["Home", "About", "Schools", "Resources", "Contact", "Events", "Donate", "Accessibility"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-5 shadow-lg transition-all duration-300 ${darkMode ? "bg-gray-900" : "bg-white"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center relative">

        <Link
          to="/home"
          className={`text-4xl font-bold transition-all duration-300 ${darkMode ? "text-white" : "text-black"
            }`}
        >
          <span className="bg-gradient-to-r from-blue-700 to-pink-500 
                 dark:from-blue-500 dark:to-pink-500 
                 text-transparent bg-clip-text">
            U
          </span>
          meed

        </Link>

        <button
          className="text-3xl transition duration-300 lg:hidden mr-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX className="text-red-500" /> : <FiMenu />}
        </button>

        <div
          className={`absolute top-[100%] left-1/2 transform -translate-x-1/2 bg-gray-100 shadow-lg rounded-lg py-3 w-40 transition-all duration-300 ${isOpen ? "block" : "hidden"
            } lg:hidden`}
        >
          <ul className="flex flex-col items-center  space-y-3">
            {menuItems.map((item, index) => {
              const path = `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;

              return (
                <li key={index} className="relative w-full text-center">
                  <Link
                    to={path}
                    className={`block w-full py-2 font-medium bg-clip-text text-black ${darkMode
                      ? "bg-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500"
                      : "bg-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>

                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 w-full h-[2px] rounded-md"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background:
                          darkMode
                            ? "linear-gradient(to right, #60A5FA, #8B5CF6)"
                            : "linear-gradient(to right, #2563EB, #9333EA)",
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="hidden lg:flex space-x-8 items-center">
          {menuItems.slice(0, 6).map((item, index) => {
            const path = `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;

            return (
              <li key={index} className="relative">
                <Link
                  to={path}
                  className="block font-medium bg-clip-text text-transparent 
           bg-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 
           dark:bg-white dark:hover:bg-gradient-to-r dark:hover:from-blue-400 dark:hover:to-purple-500"

                >
                  {item}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 w-full h-[2px] rounded-md bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-600 dark:to-purple-600"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background:
                        darkMode
                          ? "linear-gradient(to right, #60A5FA, #8B5CF6)"
                          : "linear-gradient(to right, #2563EB, #9333EA)",
                    }}
                  />
                )}
              </li>
            );
          })}

          <li className="ml-4">
            <Link
              to="/donate"
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
            >
              Donate
            </Link>
          </li>
          <li className="ml-4">
            <Link
              to="/accessibility"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Accessibility
            </Link>
          </li>
        </ul>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className={`p-2  rounded-full shadow-md transition-all duration-300 ${darkMode ? "bg-gray-700 text-white" : "bg-gray-600 text-black"
            }`}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;
