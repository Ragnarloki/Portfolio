import { motion } from 'framer-motion';
import Img1 from '../assets/Recipe.png';
import Img2 from '../assets/workout.png';
import Img3 from '../assets/weather.png';
import Img4 from '../assets/PhotframeShop.png';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';
export default function Projects() {
    useEffect(() => {
        AOS.init({
          duration: 15000, // Animation duration in milliseconds
          offset: 100, // Offset in px before animation triggers
          easing: "ease-in-out", // Type of animation easing
          once: false, // Whether animation should happen only once
        });
      }, []);
    const projects = [
        {
            image: Img1,
            description: 'Food Recipe Finder',
            link: 'https://recipefinder-uwkw.onrender.com/',
        },
        {
            image: Img2,
            description: 'Fitness Tracker',
            link: 'https://ragnarloki.github.io/workout_now/',
        },
        
        {
            image: Img4,
            description: 'Photoframe Shop',
            link: 'https://thittani-photoframe.onrender.com/',
        },
        {
            image: Img3,
            description: 'Weather App',
            link: 'https://ragnarloki.github.io/weather_api/',
        },

    ];
    return (
        <section id="projects" className="flex flex-col items-center  py-20 px-5 bg-secondary text-black">
            {/* Section Title with Animation */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="w-full text-center mb-10"
            >
                <h1 className="text-4xl border-b-4 border-primary inline-block font-bold">Projects</h1>
            </motion.div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 " >
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                        
                        data-aos-delay="300"
                        data-aos="fade-zoom-in"
                    >
                        {/* Project Image */}
                        <img 
                            src={project.image} 
                            alt={project.description} 
                            className="h-[200px] w-full object-cover"
                        />

                        {/* Hover Overlay for Desktop */}
                        <div className="hidden md:flex absolute inset-0 bg-black bg-opacity-60 flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg font-semibold mb-3">{project.description}</p>
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="px-5 py-2 bg-secondary text-black font-bold rounded-lg hover:bg-opacity-80 transition"
                            >
                                View Project
                            </a>
                        </div>

                        {/* Project Name & Clickable Link for Mobile */}
                        <div className="md:hidden text-center py-3">
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-lg font-semibold text-primary hover:underline"
                            >
                                {project.description}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
