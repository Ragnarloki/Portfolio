import HeroImg from '../assets/obito.webp';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineDownload } from "react-icons/ai";
import { motion } from 'framer-motion';

export default function Hero() {
    const config = {
        subtitle: 'Aspiring Full-Stack Developer',
        social: {
            github: 'https://github.com/Ragnarloki',
            linkedin: 'https://www.linkedin.com/in/sivasankar-s-79b52a2a5'
        },
        resume: 'https://drive.google.com/file/d/1QclPB4--eXD7l8Ac_LoBse10tDCn_YKQ/view?usp=drivesdk' // Update this with the actual path to your resume
    }

    return (
        <section className='relative flex flex-col md:flex-row items-center px-10 py-20 bg-gradient-to-r from-blue-900 to-purple-800 text-white overflow-hidden'>
            {/* Background Animation */}
            <div className='absolute inset-0 bg-opacity-30 blur-3xl'>
                <div className='absolute -top-32 -left-32 w-96 h-96 bg-purple-400 rounded-full opacity-40'></div>
                <div className='absolute bottom-10 right-10 w-72 h-72 bg-blue-500 rounded-full opacity-30'></div>
            </div>

            {/* Text Section */}
            <motion.div 
                className='md:w-1/2 flex flex-col py-10 relative z-10'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className='text-6xl font-extrabold leading-tight'>
                    Hello, I'm <span className='text-yellow-300'>Sivasankar</span>
                </h1>
                <p className='text-xl text-gray-200 mt-3'>{config.subtitle}</p>
                <div className='flex py-5'>
                    <a href={config.social.linkedin} className='pr-5 hover:text-yellow-300 transition duration-300'>
                        <AiOutlineLinkedin size={40} />
                    </a>
                    <a href={config.social.github} className='pr-5 hover:text-yellow-300 transition duration-300'>
                        <AiOutlineGithub size={40} />
                    </a>
                </div>
                <a href={config.resume} download className='flex items-center mt-5 px-6 py-3 rounded-lg bg-yellow-400 text-black font-bold shadow-lg hover:bg-yellow-300 transition duration-300'>
                    <AiOutlineDownload className='mr-2' size={24} />
                    Download Resume
                </a>
            </motion.div>

            {/* Image Section */}
            <motion.div 
                className='md:ml-40  md:w-1/3 w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-yellow-300 relative z-10'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <img src={HeroImg} className='w-full h-full object-cover' alt='Profile' />
            </motion.div>
        </section>
    );
}
