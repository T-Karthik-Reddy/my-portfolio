import React from 'react';
import SectionWrapper from './SectionWrapper';
import { HERO_NAME, YOUR_RESUME_PATH, faDownload } from '../constants'; // Import faDownload
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Ensure this is installed

interface AboutSectionProps {
  id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  return (
    <SectionWrapper
      id={id}
      title="About Karthik" // Changed title here
      className="bg-neutral"
      titleClassName="text-textBase"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="md:w-1/3 animate-slide-in-left">
          <img
            src="karthik.png" // Changed image source here
            alt={`${HERO_NAME} Profile`}
            className="rounded-lg shadow-2xl w-full max-w-xs sm:max-w-sm mx-auto object-contain aspect-square border-4 border-primary/30"
          />
        </div>
        <div className="md:w-2/3 text-textBase/90 text-lg space-y-5 animate-fade-in-up animation-delay-200">
          <p>
            Hello ! I'm a CS undergrad - mostly running on caffeine, curiosity, and chaos.
            I'm super into Artificial Intelligence and Web Development (basically trying to make computers smarter and websites cooler).
          </p>

          <p>
            In AI, I really enjoy playing with machine learning, computer vision, and natural language processing - teaching machines to see, talk, and think (sometimes better than humans, no offense).
          </p>

          <p>
            On the web side, I love making websites that don’t crash when you open them 😎. I work with React and Node.js and get excited every time I learn a new tech (and then immediately forget half of it after 2 days).
          </p>

          <p>
            I’m a big fan of learning new things, especially if they involve late nights, debugging nightmares, and Stack Overflow therapy sessions. Always open to working on cool projects — especially if there's free food or good Wi-Fi.
          </p>

          <a
            href={YOUR_RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-primary text-background font-semibold py-3 px-6 rounded-lg shadow hover:bg-primary-dark transition-colors duration-300"
          >
            Download My Resume <FontAwesomeIcon icon={faDownload} className="ml-2" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;