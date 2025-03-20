import HeroImg from '../assets/siva.jpg';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineDownload } from "react-icons/ai";
import { motion } from 'framer-motion';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            offset: 100, // Offset in px before animation triggers
            easing: "ease-in-out", // Type of animation easing
            once: false, // Animation triggers only once per scroll
        });
    }, []);

    const config = {
        subtitle: 'Aspiring Full-Stack Developer',
        social: {
            github: 'https://github.com/Ragnarloki',
            linkedin: 'https://www.linkedin.com/in/sivasankar-s-79b52a2a5'
        },
        resume: 'https://drive.google.com/file/d/1QclPB4--eXD7l8Ac_LoBse10tDCn_YKQ/view?usp=drivesdk'
    };

    return (
        <section className='relative flex flex-col md:flex-row items-center px-10 py-20 bg-gradient-to-r from-indigo-900 to-teal-800 text-white overflow-hidden'>
            {/* Background Animation */}
            <div className='absolute inset-0 bg-opacity-30 blur-3xl'>
                <div className='absolute -top-32 -left-32 w-96 h-96 bg-teal-400 rounded-full opacity-40'></div>
                <div className='absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 rounded-full opacity-30'></div>
            </div>

            {/* Text Section */}
            <motion.div 
                className='md:w-1/2 flex flex-col py-10 relative z-10'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                data-aos="fade-right"
            >
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight' data-aos="fade-up">
                    <TypeAnimation
                        sequence={[
                            "Hello, I'm Sivasankar",
                            130
                        ]}
                        wrapper="span"
                        speed={250}
                        cursor={true}
                        repeat={Infinity} // Ensures the animation restarts
                    />
                </h1>
                <p className='text-xl text-gray-200 mt-3' data-aos="fade-up" data-aos-delay="300">
                    {config.subtitle}
                </p>
                <div className='flex py-5' data-aos="zoom-in" data-aos-delay="500">
                    <a href={config.social.linkedin} className='pr-5 hover:text-teal-300 transition duration-300'>
                        <AiOutlineLinkedin size={40} />
                    </a>
                    <a href={config.social.github} className='pr-5 hover:text-teal-300 transition duration-300'>
                        <AiOutlineGithub size={40} />
                    </a>
                </div>
                <a href={config.resume} download className='flex w-60 items-center mt-5 px-6 py-3 rounded-lg bg-teal-400 text-black font-bold shadow-lg hover:bg-teal-300 transition duration-300' data-aos="flip-up" data-aos-delay="700">
                    <AiOutlineDownload className='mr-2' size={24} />
                    Download Resume
                </a>
            </motion.div>

            {/* Image Section */}
            <div 
                className='h-[300px] md:ml-40 md:w-[400px] md:h-[400px] w-72 rounded-full overflow-hidden shadow-[0_0_40px_10px_rgba(45,212,191,0.3)] relative z-10'
               
                data-aos="fade-left"
                data-aos-delay="300"
            >
                <img src={HeroImg} className='w-full h-full ' alt='Profile' />
            </div>
        </section>
    );
}