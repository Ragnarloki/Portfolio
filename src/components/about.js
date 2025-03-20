import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function About() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 100,
            easing: "ease-in-out",
            once: true, // Ensures animation runs only once
        });
    }, []);

    return (
        <section id="about" className="flex flex-col items-center justify-center py-20 px-8 bg-gradient-to-br from-blue-500 to-teal-500 text-white">
            {/* Section Title */}
            <motion.h1 
                className="text-5xl font-extrabold border-b-4 border-white pb-3 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                About Me
            </motion.h1>

            {/* About Content */}
            <div className="max-w-3xl text-center text-lg leading-relaxed">
                <p className="mb-5" data-aos="fade-up">
                    Hi! I'm <span className="font-bold">Sivasankar</span>, a passionate <span className="font-bold">Full Stack Developer</span> with experience in building dynamic and scalable web applications. I specialize in <strong>ReactJS</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>Spring Boot</strong>, delivering high-performance applications with seamless user experiences.
                </p>
                <p className="mb-5" data-aos="fade-up" data-aos-delay="200">
                    I love solving problems and building products that make an impact. From developing <strong>interactive UIs</strong> to working on <strong>cloud-based microservices</strong>, I always strive for <strong>efficiency, scalability, and innovation</strong> in my projects.
                </p>
                <p data-aos="fade-up" data-aos-delay="400">
                    Whether it's <strong>collaborating on new ideas</strong>, <strong>optimizing performance</strong>, or <strong>learning new technologies</strong>, I'm always excited to grow as a developer and contribute to meaningful projects!
                </p>
            </div>

            {/* CTA Button */}
            <motion.a 
                href="#contact"
                className="mt-8 px-6 py-3 bg-white text-blue-600 font-bold text-lg rounded-lg shadow-lg hover:bg-opacity-80 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-aos="zoom-in"
            >
                Get in Touch
            </motion.a>
        </section>
    );
}
