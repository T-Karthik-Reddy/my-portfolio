import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { NAVBAR_LOGO_TEXT } from '../constants';

interface NavbarProps {
  navItems: NavItem[];
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ navItems, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu on navigation
    }
  };

  const navBackgroundClass = (isScrolled || isOpen) ? 'bg-neutral shadow-lg' : 'bg-transparent';
  const logoTextColorClass = (isScrolled || isOpen || activeSection !== 'home') ? 'text-primary' : 'text-textBase';
  const navLinkBaseColor = (isScrolled || isOpen || activeSection !== 'home') ? 'text-textBase' : 'text-textBase'; // Adjusted for consistent link color on non-home or scrolled
  const navLinkHoverColor = 'hover:text-primary'; // Consistent hover color
  const activeNavLinkColorClass = activeSection !== 'home' ? 'text-primary border-primary' : 'text-accent border-accent'; // Active link highlighting differentiated for home
  const mobileMenuButtonColor = (isScrolled || isOpen || activeSection !== 'home') ? 'text-textBase hover:text-primary' : 'text-textBase hover:text-primary';


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${navBackgroundClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24"> {/* Adjusted height */}
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${logoTextColorClass}`}>
              {NAVBAR_LOGO_TEXT}
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-300 group relative
                    ${activeSection === item.id
                      ? `${activeNavLinkColorClass} border-b-2`
                      : `${navLinkBaseColor} ${navLinkHoverColor}`
                    }
                  `}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                  {activeSection !== item.id && (
                     <span className={`absolute bottom-0 left-0 block h-0.5 
                      ${(isScrolled || isOpen || activeSection !== 'home') ? 'bg-primary' : 'bg-accent'} 
                      w-0 transition-all duration-300 group-hover:w-full`}>
                     </span>
                  )}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-300 ${mobileMenuButtonColor}`}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral shadow-lg animate-mobile-menu-open" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300
                  ${activeSection === item.id ? 'text-primary bg-primary/10' : 'text-textBase hover:bg-primary/5 hover:text-primary'
                  }
                `}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;