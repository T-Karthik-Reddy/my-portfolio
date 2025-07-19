import React, { useState, useEffect, useRef } from 'react';
import { CONTACT_LINKS, HERO_NAME, ComputerDesktopIcon, CpuChipIcon } from '../constants';

interface HeroSectionProps {
  id: string;
}

const CHARS = '01'; // Characters for binary rain
const COLUMN_WIDTH = 18; // px, approx width of a character + spacing
const MIN_SPEED = 5; // seconds for full fall
const MAX_SPEED = 12; // seconds for full fall

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const [binaryColumns, setBinaryColumns] = useState<Array<{ id: number; content: string; left: number; duration: number; delay: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const screenWidth = containerRef.current.offsetWidth;
    const screenHeight = containerRef.current.offsetHeight;
    const numColumns = Math.floor(screenWidth / COLUMN_WIDTH);
    // Approximate chars per column based on 0.9em line height for 1em font size (COLUMN_WIDTH is effectively font size here)
    const charsPerColumn = Math.floor(screenHeight / (COLUMN_WIDTH * 0.9));


    const newColumns = Array.from({ length: numColumns }).map((_, i) => {
      let columnContent = '';
      for (let j = 0; j < charsPerColumn; j++) {
        columnContent += CHARS[Math.floor(Math.random() * CHARS.length)] + (j < charsPerColumn - 1 ? '\n' : '');
      }
      return {
        id: i,
        content: columnContent,
        left: i * COLUMN_WIDTH,
        duration: Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED,
        delay: Math.random() * MAX_SPEED * 0.5, // Stagger start times
      };
    });
    setBinaryColumns(newColumns);
  }, []); // Re-calculate on resize might be too much, but consider for resize listener if dynamic layout changes drastically

  const socialIconsToShow = CONTACT_LINKS.filter(link => ['github', 'linkedin', 'leetcode'].includes(link.id));


  return (
    <section
      ref={containerRef}
      id={id}
      className="relative h-screen flex flex-col items-center justify-center text-center text-textBase overflow-hidden bg-background p-6"
    >
      {/* Binary Rain Background - color is handled by CSS in index.css */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {binaryColumns.map(col => (
          <div
            key={col.id}
            className="binary-rain-column animate-binary-rain-fall" // Animation defined in tailwind.config.js and index.css
            style={{
              left: `${col.left}px`,
              fontSize: `${COLUMN_WIDTH * 0.8}px`, // Adjust character size relative to column width
              lineHeight: `${COLUMN_WIDTH * 0.9}px`, // Adjust line height
              animationDuration: `${col.duration}s`,
              animationDelay: `${col.delay}s`,
              width: `${COLUMN_WIDTH}px`,
            }}
          >
            {col.content.split('\n').map((charLine, index) => (
              <span key={index} style={{ opacity: Math.random() * 0.5 + 0.5 }}>{charLine || ' '}</span>
            ))}
          </div>
        ))}
      </div>

      <div className="relative z-10 animate-fade-in-up">
        {/* Text shadow for better readability over busy background */}
        <div style={{ textShadow: '0px 0px 10px rgba(21, 18, 26, 0.9), 0px 0px 3px rgba(21, 18, 26, 1)' }}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-textBase">
            {HERO_NAME}
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 text-xl sm:text-2xl md:text-3xl mb-10 text-textBase">
            <div className="flex items-center">
              <ComputerDesktopIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-primary" />
              <span>Web Developer</span>
            </div>
            <div className="flex items-center">
              <CpuChipIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-accent" />
              <span>AI Enthusiast</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          {socialIconsToShow.map(link => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel || link.name}
              title={link.name}
              className="text-textBase hover:text-primary transition-colors duration-300 transform hover:scale-125"
            >
              <img src={link.icon} alt={link.name} className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
            </a>
          ))}
        </div>

        <div>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary hover:bg-primary-dark text-background font-semibold py-3.5 px-10 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
          >
            View My Work
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-textBase opacity-50 hover:opacity-80 transition-opacity">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;