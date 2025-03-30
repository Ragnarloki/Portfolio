import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp, AiOutlineClose } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 100,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const formRef = useRef();
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);

    // Contact details
    const config = {
        email: "sivasankarswaminathan62@gmail.com",
        mobile: "9361487662",
        whatsapp: "https://wa.me/9361487662",
    };

    // Function to send email
    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSent(false);
        setError(null);

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        if (!serviceID || !templateID || !publicKey) {
            setError("Missing EmailJS credentials in environment variables.");
            console.error("Missing EmailJS credentials in .env file.");
            return;
        }

        // Extracting form values
        const formData = new FormData(formRef.current);
        const templateParams = {
            user_name: formData.get("user_name"),
            user_email: formData.get("user_email"),
            message: formData.get("message"),
            reply_to: formData.get("user_email"), // Setting Reply-To header
        };

        try {
            await emailjs.send(serviceID, templateID, templateParams, publicKey);
            setIsSent(true);
            e.target.reset();

            // Auto-hide alert after 4 seconds
            setTimeout(() => {
                setIsSent(false);
            }, 4000);
        } catch (err) {
            setError("Failed to send message. Please try again.");
            console.error("Email sending failed:", err);

            // Auto-hide error alert after 4 seconds
            setTimeout(() => {
                setError(null);
            }, 4000);
        }
    };

    return (
        <section id="contact" className="relative flex flex-col md:flex-row bg-gradient-to-br from-teal-500 to-blue-600 px-8 py-20 text-white">
            {/* Contact Info Section */}
            <motion.div
                className="flex flex-col items-center md:items-start md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-5xl border-b-4 border-white pb-3 mb-5 font-extrabold">Get in Touch</h1>
                <p className="pb-5 text-lg text-center md:text-left">
                    I'm always open to discussions, collaborations, and new opportunities. Reach out to me!
                </p>

                <div className="flex flex-col gap-4 text-lg">
                    {/* Email */}
                    <motion.div
                        className="flex items-center gap-3 bg-white text-black p-3 rounded-lg shadow-lg cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                    >
                        <AiOutlineMail size={28} className="text-blue-600" />
                        <a href={`mailto:${config.email}`} className="font-bold hover:text-blue-600">
                            {config.email}
                        </a>
                    </motion.div>

                    {/* Mobile */}
                    <motion.div
                        className="flex items-center gap-3 bg-white text-black p-3 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <AiOutlinePhone size={28} className="text-green-600" />
                        <span className="font-bold">Mobile:</span> {config.mobile}
                    </motion.div>

                    {/* WhatsApp */}
                    <motion.div
                        className="flex items-center gap-3 bg-white text-black p-3 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <AiOutlineWhatsApp size={28} className="text-green-500" />
                        <a href={config.whatsapp} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-green-600">
                            WhatsApp
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Contact Form Section */}
            <motion.div className="flex flex-col items-center mt-10 md:mt-0 md:w-1/2" data-aos-delay="300" data-aos="fade-zoom">
                <h2 className="text-3xl font-extrabold mb-5">Send me a message</h2>
                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="flex flex-col w-full max-w-md bg-white p-6 rounded-lg shadow-xl text-black"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="5"
                    ></textarea>

                    <motion.button
                        type="submit"
                        className="p-3 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </motion.div>

            {/* Success Alert */}
            {isSent && (
                <motion.div
                    className="fixed top-5 right-5 bg-white z-50 text-green-700 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 border border-green-500"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="font-bold">✅ Message Sent Successfully!</span>
                    <AiOutlineClose
                        size={20}
                        className="cursor-pointer text-gray-500 hover:text-black"
                        onClick={() => setIsSent(false)}
                    />
                </motion.div>
            )}

            {/* Error Alert */}
            {error && (
                <motion.div
                    className="fixed top-5 right-5 bg-white text-red-700 px-6 py-4 rounded-lg shadow-lg flex items-center z-50 gap-3 border border-red-500"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="font-bold">❌ {error}</span>
                    <AiOutlineClose
                        size={20}
                        className="cursor-pointer text-gray-500 hover:text-black"
                        onClick={() => setError(null)}
                    />
                </motion.div>
            )}
        </section>
    );
}