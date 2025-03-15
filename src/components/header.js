import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-900 to-purple-800 text-white shadow-md z-50">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                {/* Logo */}
                <a href="#" className="text-2xl font-extrabold tracking-wide">Sivasankar S</a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-lg">
                    <a href="#" className="hover:text-yellow-300 transition">Home</a>
                    <a href="#about" className="hover:text-yellow-300 transition">About</a>
                    <a href="#projects" className="hover:text-yellow-300 transition">Projects</a>
                   <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={() => setToggleMenu(!toggleMenu)} className="md:hidden">
                    {toggleMenu ? <XMarkIcon className="w-8 h-8 text-yellow-300" /> : <Bars3Icon className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {toggleMenu && (
                <nav className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-blue-900 to-purple-800 shadow-lg">
                    <ul className="flex flex-col items-center py-5 space-y-4 text-lg">
                        <li><a href="/" className="hover:text-yellow-300 transition" onClick={() => setToggleMenu(false)}>Home</a></li>
                        <li><a href="#about" className="hover:text-yellow-300 transition" onClick={() => setToggleMenu(false)}>About</a></li>
                        <li><a href="#projects" className="hover:text-yellow-300 transition" onClick={() => setToggleMenu(false)}>Projects</a></li>
                        <li><a href="#contact" className="hover:text-yellow-300 transition" onClick={() => setToggleMenu(false)}>Contact</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
