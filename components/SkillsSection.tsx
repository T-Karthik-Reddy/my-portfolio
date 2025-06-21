import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ALL_SKILLS } from '../constants';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, delay }) => (
  <div
    className="bg-background p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center aspect-square transform hover:-translate-y-1 opacity-0 animate-skill-icon-flow group"
    style={{ animationDelay: `${delay}ms` }}
    title={skill.name} // Tooltip for skill name
  >
    <div className="transition-transform duration-300 group-hover:scale-110">
      <img 
        src={skill.icon} 
        alt={skill.name} 
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" // Increased icon size
      />
    </div>
    {/* Skill name text removed from direct view to make icons primary focus, title attribute provides it on hover */}
    {/* <h4 className="sr-only font-medium text-sm sm:text-base text-textBase mt-1 truncate w-full px-1">{skill.name}</h4> */}
  </div>
);

interface SkillsSectionProps {
  id: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ id }) => {
  // Removed unused 'totalItems' parameter
  const getDelay = (index: number) => { 
    const baseDelay = 50;
    const spreadFactor = 30;
    // Determine number of columns based on common breakpoints
    const numCols = window.innerWidth < 640 ? 3 : (window.innerWidth < 768 ? 4 : (window.innerWidth < 1024 ? 5 : (window.innerWidth < 1280 ? 6: 7)));
    
    const rowIndex = Math.floor(index / numCols);
    const colIndex = index % numCols;
    
    // Stagger delay based on row and column, with some randomness
    return baseDelay + (rowIndex * spreadFactor * 1.5) + (colIndex * spreadFactor * 0.8) + (Math.random() * 50);
  };

  return (
    <SectionWrapper
      id={id}
      title="Tech Stack"
      subtitle="My toolbox of languages, frameworks, and technologies I work with."
      className="bg-neutral" 
      titleClassName="text-textBase"
    >
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 md:gap-6">
        {ALL_SKILLS.map((skill, index) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            // Removed ALL_SKILLS.length from the call
            delay={getDelay(index)} 
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;