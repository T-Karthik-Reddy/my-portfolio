import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { PROJECTS_DATA, YOUR_EMAIL } from '../constants';

const ProjectsSection: React.FC<{ id: string }> = ({ id }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <SectionWrapper
      id={id}
      title=""
      className="bg-neutral py-32"
    >
      <div className="text-center mb-24">
        <span className="text-primary text-sm tracking-[0.3em] uppercase block mb-4">Selected Works</span>
        <h2 className="font-serif text-6xl md:text-7xl text-textBase">The Collection</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className={`group ${index % 2 !== 0 ? 'md:mt-24' : ''}`} // Staggered grid effect
          >
            {/* Image Container with Vogue Filter */}
            <div
              className="relative aspect-[4/3] overflow-hidden mb-8 bg-neutral-dark shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(project.imageUrl)}
            >
              <div className="absolute inset-0 border border-white/20 z-20 pointer-events-none transition-colors duration-500 group-hover:border-primary/50"></div>

              {/* Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover vogue-filter transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Date */}
              <div className="absolute top-4 right-4 z-30 bg-white/90 backdrop-blur px-3 py-1 border border-black/5">
                <span className="text-xs font-mono text-textBase/60">{project.date}</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-widest text-primary border border-primary/20 px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl font-serif text-textBase group-hover:text-primary transition-colors duration-300 leading-tight">
                {project.title}
              </h3>

              <p className="text-textBase/70 font-light leading-relaxed text-sm md:text-base border-l border-primary/20 pl-4">
                {project.description}
              </p>

              <div className="pt-4">
                <a href={`mailto:${YOUR_EMAIL}?subject=Inquiry about ${project.title}`} className="inline-block text-xs uppercase tracking-[0.2em] text-textBase border-b border-black/10 pb-1 hover:text-primary hover:border-primary transition-all duration-300">
                  Get More Info
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-50 p-2"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.img
              src={selectedImage}
              alt="Full view"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default ProjectsSection;