import React from 'react';
import SectionWrapper from './SectionWrapper';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '../constants';

interface ProjectsSectionProps {
  id: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id }) => {
  return (
    <SectionWrapper
      id={id}
      title="My Projects"
      subtitle="Here are some of the projects I've worked on, showcasing my skills in AI and Web Development."
      className="bg-background" // Main dark purple background for this section
      titleClassName="text-textBase"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          // ProjectCard itself uses bg-neutral for contrast
          <div key={project.id} className={`animate-fade-in-up`} style={{animationDelay: `${index * 150}ms`}}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;