import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white border border-primary/10 p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl md:text-3xl font-serif text-textBase leading-tight tracking-wide">{project.title}</h3>
        {project.date && <span className="text-primary text-xs tracking-[0.2em] uppercase whitespace-nowrap ml-4 mt-2">{project.date}</span>}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, i) => (
          <span key={i} className="text-[10px] uppercase tracking-widest text-primary border border-primary/20 px-2 py-1">
            {tag}
          </span>
        ))}
      </div>

      <p className="mb-8 flex-grow text-textBase/70 font-light leading-relaxed border-l-2 border-primary/30 pl-4">{project.description}</p>

      {project.performanceMetrics && project.performanceMetrics.length > 0 && (
        <div className="mb-8">
          <div className="text-textBase/40 mb-3 text-xs tracking-[0.2em] uppercase font-semibold">Performance Metrtics</div>
          <ul className="space-y-2">
            {project.performanceMetrics.map((metric, i) => (
              <li key={i} className="flex items-center text-sm font-light text-textBase/80">
                <span className="text-primary font-bold mr-3">✓</span>{metric}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.architecture && project.architecture.length > 0 && (
        <div className="mb-10">
          <div className="text-textBase/40 mb-4 text-xs tracking-[0.2em] uppercase font-semibold">Architecture Flow</div>
          <div className="flex flex-wrap items-center gap-3">
            {project.architecture.map((node, i) => (
              <React.Fragment key={i}>
                <span className="border border-black/10 bg-neutral py-1.5 px-4 text-xs font-mono text-textBase/80">
                  {node}
                </span>
                {i < project.architecture.length - 1 && (
                  <span className="text-primary/50 text-lg leading-none">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-6 border-t border-black/5 pt-6">
         {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-xs uppercase tracking-[0.2em] text-textBase border-b border-black/10 pb-1 hover:text-primary hover:border-primary transition-all duration-300">
               View Repository
            </a>
         )}
         {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-xs uppercase tracking-[0.2em] text-textBase border-b border-black/10 pb-1 hover:text-primary hover:border-primary transition-all duration-300">
               Live Demo
            </a>
         )}
      </div>
    </div>
  );
};

export default ProjectCard;