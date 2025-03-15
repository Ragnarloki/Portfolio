import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-6 text-center">
            <div className="flex justify-center space-x-6 mb-3">
                <a href="https://www.linkedin.com/in/sivasankar-s-79b52a2a5" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
                    <AiOutlineLinkedin size={30} />
                </a>
                <a href="https://github.com/Ragnarloki" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
                    <AiOutlineGithub size={30} />
                </a>
            </div>
            <p className="text-gray-300">&copy; {new Date().getFullYear()} Sivasankar S | All Rights Reserved</p>
        </footer>
    );
}
