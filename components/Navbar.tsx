import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';
import { NAVBAR_LOGO_TEXT } from '../constants';

interface NavbarProps {
  navItems: NavItem[];
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ navItems, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-md py-2 shadow-sm' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo - Hidden on Hero (since Masthead exists) or Small */}
        <a href="#home" className={`text-xl font-serif font-bold tracking-widest text-primary z-50 relative group ${!scrolled ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}>
          {NAVBAR_LOGO_TEXT}
        </a>

        {/* Desktop Menu - Dark Text for Light Theme */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 relative group ${activeSection === item.id ? 'text-primary-dark' : 'text-textBase/60 hover:text-primary'
                }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-300 ${activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - Dark Color */}
        <button
          className="md:hidden text-textBase z-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-textBase transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-textBase transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-textBase transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-3xl font-serif italic tracking-wider ${activeSection === item.id ? 'text-primary' : 'text-textBase'
                    }`}
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;