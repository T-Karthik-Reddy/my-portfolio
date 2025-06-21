import React from 'react';
import { Project } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Using a generic icon for "Request Info" or "Live Demo" if specific ones aren't suitable for all cases.
// faEnvelope for mail, faExternalLinkAlt for live demo are good choices.
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { YOUR_EMAIL } from '../constants'; // For mailto link

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const mailtoHref = `mailto:${YOUR_EMAIL}?subject=Request%20for%20Information:%20${encodeURIComponent(project.title)}&body=Hi%20Karthik,%0D%0A%0D%0AI'd%20like%20to%20know%20more%20about%20your%20project:%20${encodeURIComponent(project.title)}.%0D%0A%0D%0AThanks!`;

  return (
    <div className="bg-neutral rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 flex flex-col h-full">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-56 object-cover" // Consider object-contain if images are cut off and aspect ratio varies
      />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-xl font-semibold text-textBase">{project.title}</h3>
          {project.date && (
            <span className="text-xs text-textBase/70 whitespace-nowrap ml-2">{project.date}</span>
          )}
        </div>
        <p className="text-textBase/80 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-accent text-background text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-3">
          <a
            href={mailtoHref}
            aria-label={`Request information about ${project.title}`}
            className="text-primary hover:text-primary-light font-medium py-2 px-4 rounded-md border border-primary hover:bg-primary/20 transition-colors duration-300 flex items-center text-sm"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Request Info
          </a>
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${project.title}`}
              className="text-accent hover:text-accent-light font-medium py-2 px-4 rounded-md border border-accent hover:bg-accent/20 transition-colors duration-300 flex items-center text-sm"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" /> Live Demo
            </a>
          )}
           {/* You can add back a repoUrl button if some projects have it */}
           {/* {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              className="text-primary hover:text-primary-light font-medium py-2 px-4 rounded-md border border-primary hover:bg-primary/20 transition-colors duration-300 flex items-center text-sm"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub
            </a>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;