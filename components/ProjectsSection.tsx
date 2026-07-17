import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { PROJECTS_DATA } from '../constants';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <SectionWrapper
      id={id}
      title=""
      className="bg-neutral py-32"
    >
      <div className="text-center mb-16">
        <span className="text-primary text-sm tracking-[0.3em] uppercase block mb-4">Systems & AI</span>
        <h2 className="font-serif text-5xl md:text-6xl text-textBase">Selected Works</h2>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
          >
             <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;