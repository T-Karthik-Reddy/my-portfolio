import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { CONTACT_LINKS, YOUR_EMAIL } from '../constants';

const ContactSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <SectionWrapper
      id={id}
      title=""
      className="bg-background py-32 relative overflow-hidden"
    >
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none">
        <span className="text-[25vw] font-serif font-bold text-primary whitespace-nowrap">
          CONTACT
        </span>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6">Inquiries</p>
          <h2 className="font-serif text-6xl md:text-8xl text-textBase mb-12">
            Let's <span className="italic text-textBase/40">Talk</span>
          </h2>

          <p className="text-xl font-light text-textBase/80 mb-16 leading-relaxed max-w-xl mx-auto">
            Available for ML and Computer Architecture research.
            Let's create something timeless.
          </p>

          <a
            href={`mailto:${YOUR_EMAIL}`}
            onClick={(e) => {
              window.location.href = `mailto:${YOUR_EMAIL}`;
            }}
            className="inline-block px-12 py-5 bg-primary text-white font-serif font-bold text-xl tracking-wider hover:bg-primary-dark transition-all duration-500 shadow-[0_0_30px_rgba(184,134,11,0.2)] hover:shadow-[0_0_50px_rgba(184,134,11,0.4)] cursor-pointer"
          >
            SAY HELLO
          </a>

          <div className="mt-24 flex justify-center gap-12">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-[0.2em] text-textBase/40 hover:text-primary transition-colors duration-300 border-b border-transparent hover:border-primary pb-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;