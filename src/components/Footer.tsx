
import React from 'react';
import { Linkedin, Github, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              <span className="text-theme-purple">E</span>mmanuel<span className="text-theme-purple">.</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
            <a href="#about" className="hover:text-theme-purple transition-colors">About</a>
            <a href="#skills" className="hover:text-theme-purple transition-colors">Skills</a>
            <a href="#experience" className="hover:text-theme-purple transition-colors">Experience</a>
            <a href="#projects" className="hover:text-theme-purple transition-colors">Projects</a>
            <a href="#education" className="hover:text-theme-purple transition-colors">Education</a>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/emmeemmanueldavidraj/" 
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-theme-purple transition-colors"
            >
              <Linkedin size={18} />
            </a>
            
            <a 
              href="https://github.com/DavidRaj1510" 
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-theme-purple transition-colors"
            >
              <Github size={18} />
            </a>
            
            <a 
              href="https://leetcode.com/u/eedraj2003/" 
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-theme-purple transition-colors"
            >
              <Code size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Emme Emmanuel David Raj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
