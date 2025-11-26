import React from 'react';
import { CONTACT_LINKS, FOOTER_NAME } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = CONTACT_LINKS.filter(link =>
    ['linkedin', 'github', 'leetcode', 'email'].includes(link.id) // Added email, adjust as needed
  );

  return (
    <footer className="bg-neutral-darker text-textBase/70 py-12 animate-footer-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 flex justify-center space-x-6">
          {socialLinks.map(link => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel || link.name}
              className="text-textBase/80 hover:text-primary transition-colors duration-300"
              title={link.name}
            >
              <img src={link.icon} alt={link.name} className="w-6 h-6 object-contain" />
            </a>
          ))}
        </div>
        <p className="text-sm mb-2 text-textBase">
          &copy; {currentYear} {FOOTER_NAME}. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;