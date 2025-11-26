import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { CONTACT_LINKS, YOUR_EMAIL } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

interface ContactSectionProps {
  id: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(YOUR_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper
      id={id}
      title="Get In Touch"
      subtitle="Ready to start a project or just want to say hi? My inbox is open."
      className="bg-neutral relative overflow-hidden"
      titleClassName="text-textBase"
    >
      {/* Background Grid Pattern (CSS-in-JS for simplicity here, or could be in index.css) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#8E9AAF 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Email Command Bar */}
        <div className="bg-background/80 backdrop-blur-md border border-primary/20 rounded-2xl p-2 sm:p-4 mb-12 shadow-2xl flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up">
          <div className="flex-grow w-full sm:w-auto bg-neutral-darker/50 rounded-xl px-4 py-3 flex items-center border border-white/5">
            <span className="text-accent mr-3 font-mono hidden sm:inline">{'>'}</span>
            <input
              type="text"
              readOnly
              value={YOUR_EMAIL}
              className="bg-transparent border-none outline-none text-textBase/90 w-full font-mono text-sm sm:text-base"
            />
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={handleCopyEmail}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral hover:bg-primary/10 border border-primary/30 hover:border-primary text-textBase transition-all duration-300 group"
              title="Copy Email"
            >
              <FontAwesomeIcon icon={copied ? faCheck : faCopy} className={copied ? "text-green-400" : "text-primary group-hover:text-accent"} />
              <span className="font-medium">{copied ? 'Copied!' : 'Copy'}</span>
            </button>
            <a
              href={`mailto:${YOUR_EMAIL}`}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-background font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>Send</span>
            </a>
          </div>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {CONTACT_LINKS.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-background/50 backdrop-blur-sm border border-white/5 hover:border-primary/30 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-neutral transition-colors duration-300">
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-8 h-8 object-contain transition-all duration-300"
                />
                {/* Ring Animation */}
                <div className="absolute inset-0 rounded-full border border-primary/20 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-semibold text-textBase group-hover:text-primary transition-colors duration-300">{link.name}</h4>
                <span className="text-xs text-textBase/50 group-hover:text-textBase/70 transition-colors duration-300">Connect</span>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};

export default ContactSection;