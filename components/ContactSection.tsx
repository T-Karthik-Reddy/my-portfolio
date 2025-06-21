import React from 'react';
import SectionWrapper from './SectionWrapper';
import { CONTACT_LINKS, YOUR_EMAIL } from '../constants';

interface ContactSectionProps {
  id: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  return (
    <SectionWrapper
      id={id}
      title="Get In Touch"
      subtitle="I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!"
      className="bg-neutral" // Section bg: lighter purple
      titleClassName="text-textBase"
    >
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
          {CONTACT_LINKS.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel || link.name}
              // Card background: main dark purple, contrasting with section's lighter purple
              className={`group bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up`}
              style={{ animationDelay: `${index * 150}ms`}}
            >
              <div className="text-4xl text-primary group-hover:text-primary-dark transition-colors duration-300 mb-4">
                <img src={link.icon} alt={link.name} className="w-10 h-10 mx-auto object-contain" />
              </div>
              <h4 className="text-lg font-semibold text-textBase group-hover:text-primary transition-colors duration-300">{link.name}</h4>
            </a>
          ))}
        </div>
        <p className="mt-12 text-center text-textBase/90 animate-fade-in-up animation-delay-600">
          Alternatively, you can drop me a line directly at <a href={`mailto:${YOUR_EMAIL}`} className="text-primary hover:underline font-semibold">{YOUR_EMAIL}</a>. I look forward to hearing from you!
        </p>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;