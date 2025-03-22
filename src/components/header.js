import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full ${
        isScrolled
          ? "bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg"
          : "bg-gradient-to-r from-gray-800 to-gray-900"
      } text-white z-50 transition-all duration-300 border-b-2 border-transparent hover:border-green-400`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo with Animation */}
        <motion.a
          href="#"
          className="text-2xl font-extrabold tracking-wide relative group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sivasankar S
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-400 group-hover:w-full transition-all duration-300"></span>
        </motion.a>

        {/* Desktop Navigation with Animation */}
        <nav className="hidden md:flex space-x-8 text-lg">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group hover:text-green-400 transition"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-400 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button with Animation */}
        <motion.button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {toggleMenu ? (
            <XMarkIcon className="w-8 h-8 text-green-400" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-white" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation with Animation */}
      <AnimatePresence>
        {toggleMenu && (
          <motion.nav
            className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center py-5 space-y-4 text-lg">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative group hover:text-green-400 transition"
                    onClick={() => setToggleMenu(false)}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}