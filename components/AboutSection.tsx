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
            Hi there! I'm a passionate Computer Science and Engineering student with a strong
            interest in the ever-evolving fields of Artificial Intelligence and Web Development. I thrive on
            solving complex problems and building innovative solutions that can make a real impact.
          </p>
          <p>
            In AI, I'm particularly fascinated by machine learning, natural language processing,
            and computer vision. I enjoy exploring how intelligent systems can learn from data to perform
            tasks that traditionally require human intellect.
          </p>
          <p>
            On the web development front, I love crafting responsive, user-friendly interfaces and
            robust backend systems. I'm proficient with modern frameworks like React and Node.js, and always
            eager to learn new technologies to enhance my skillset.
          </p>
          <p>
            I'm a firm believer in continuous learning and collaboration. I'm always looking for
            opportunities to contribute to exciting projects and grow both personally and professionally.
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