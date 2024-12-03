import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#112240] shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-[#64ffda] font-mono text-xl">JD.</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors font-mono"
                >
                  <span className="text-[#64ffda]">0{i + 1}.</span> {item}
                </a>
              ))}
            </div>
  
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#64ffda]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
  
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-2 bg-[#112240] shadow-lg">
            {['About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-[#8892b0] hover:text-[#64ffda] transition-colors font-mono"
              >
                <span className="text-[#64ffda]">0{i + 1}.</span> {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
  };

  export default Header;