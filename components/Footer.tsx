import React from 'react';
import { FOOTER_NAME } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral py-12 border-t border-black/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left">
          <p className="font-serif text-2xl text-textBase tracking-wider mb-1">{FOOTER_NAME}</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-textBase/40">
            Portfolio • Vol. 01
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <p className="text-textBase/40 text-xs font-light tracking-wide">
            &copy; {currentYear} All Rights Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;