import { motion } from 'framer-motion';

export default function About() {
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
            <motion.div 
                className="max-w-3xl text-center text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <p className="mb-5">
                    Hi! I'm <span className="font-bold">Sivasankar</span>, a passionate <span className="font-bold">Full Stack Developer</span> with experience in building dynamic and scalable web applications. I specialize in **ReactJS**, **Node.js**, **MongoDB**, and **Spring Boot**, delivering high-performance applications with seamless user experiences.
                </p>
                <p className="mb-5">
                    I love solving problems and building products that make an impact. From developing **interactive UIs** to working on **cloud-based microservices**, I always strive for **efficiency, scalability, and innovation** in my projects.
                </p>
                <p>
                    Whether it's **collaborating on new ideas**, **optimizing performance**, or **learning new technologies**, I'm always excited to grow as a developer and contribute to meaningful projects!
                </p>
            </motion.div>

            {/* CTA Button */}
            <motion.a 
                href="#contact"
                className="mt-8 px-6 py-3 bg-white text-blue-600 font-bold text-lg rounded-lg shadow-lg hover:bg-opacity-80 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Get in Touch
            </motion.a>
        </section>
    );
}
