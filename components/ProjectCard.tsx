import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm border border-primary/20 p-8 shadow-sm hover:shadow-2xl hover:border-primary/50 transition-all duration-500 flex flex-col h-full rounded-sm group">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl md:text-3xl font-serif text-textBase leading-tight tracking-wide group-hover:text-primary-dark transition-colors duration-300">{project.title}</h3>
        {project.date && <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase whitespace-nowrap ml-4 mt-2 px-2.5 py-1 bg-primary/10 rounded-sm border border-primary/20">{project.date}</span>}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, i) => (
          <span key={i} className="text-[11px] uppercase tracking-widest font-medium text-primary bg-primary/5 border border-primary/20 px-2.5 py-1 rounded-sm hover:bg-primary hover:text-white transition-colors duration-300">
            {tag}
          </span>
        ))}
      </div>

      <p className="mb-8 flex-grow text-textBase/80 font-light leading-relaxed border-l-2 border-primary/40 pl-4">{project.description}</p>

      {project.performanceMetrics && project.performanceMetrics.length > 0 && (
        <div className="mb-8 bg-neutral/60 p-4 rounded-sm border border-black/5">
          <div className="text-primary-dark mb-3 text-xs tracking-[0.2em] uppercase font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            Performance Metrics
          </div>
          <ul className="space-y-2">
            {project.performanceMetrics.map((metric, i) => (
              <li key={i} className="flex items-center text-sm font-light text-textBase/90">
                <span className="text-primary font-bold mr-3 text-base">✓</span>{metric}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.architecture && project.architecture.length > 0 && (
        <div className="mb-10">
          <div className="text-textBase/50 mb-4 text-xs tracking-[0.2em] uppercase font-semibold">Architecture Flow</div>
          <div className="flex flex-wrap items-center gap-2">
            {project.architecture.map((node, i) => (
              <React.Fragment key={i}>
                <span className="border border-primary/20 bg-neutral py-1.5 px-3.5 text-xs font-mono text-textBase/90 rounded-sm shadow-2xs hover:border-primary transition-colors">
                  {node}
                </span>
                {i < project.architecture.length - 1 && (
                  <span className="text-primary text-sm font-bold leading-none px-1">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-6 border-t border-black/5 pt-6">
         {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-textBase border-b border-primary/30 pb-1 hover:text-primary hover:border-primary transition-all duration-300">
               <span>View Repository</span>
               <span className="text-xs">↗</span>
            </a>
         )}
         {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-textBase border-b border-primary/30 pb-1 hover:text-primary hover:border-primary transition-all duration-300">
               <span>Live Demo</span>
               <span className="text-xs">↗</span>
            </a>
         )}
      </div>
    </div>
  );
};

export default ProjectCard;