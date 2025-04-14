
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-bold text-gray-900">
          <span className="text-theme-purple">E</span>mmanuel<span className="text-theme-purple">.</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        
        <button onClick={toggleMenu} className="md:hidden text-gray-600 focus:outline-none">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20">
          <div className="container mx-auto px-6 flex flex-col space-y-6 py-8">
            <a href="#about" className="text-xl py-2 border-b border-gray-100" onClick={toggleMenu}>About</a>
            <a href="#skills" className="text-xl py-2 border-b border-gray-100" onClick={toggleMenu}>Skills</a>
            <a href="#experience" className="text-xl py-2 border-b border-gray-100" onClick={toggleMenu}>Experience</a>
            <a href="#projects" className="text-xl py-2 border-b border-gray-100" onClick={toggleMenu}>Projects</a>
            <a href="#education" className="text-xl py-2 border-b border-gray-100" onClick={toggleMenu}>Education</a>
            <a href="#contact" className="text-xl py-2" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
