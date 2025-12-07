import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCE_DATA } from '../constants';

const ExperienceSection: React.FC<{ id: string }> = ({ id }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <SectionWrapper
            id={id}
            title=""
            className="bg-background py-24"
        >
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20">
                    <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Career History</p>
                    <h2 className="font-serif text-5xl md:text-6xl text-textBase">The Journey</h2>
                </div>

                <div className="relative border-l md:border-l-0 border-primary/20 ml-4 md:ml-0 md:pl-0 space-y-16">
                    {/* Central Line for Desktop */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 hidden md:block"></div>
                    {EXPERIENCE_DATA.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="relative pl-12 md:pl-0"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-2 w-2.5 h-2.5 bg-primary rounded-full ring-4 ring-background z-10"></div>

                            <div className={`md:flex items-start justify-between gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Date - Opposite Side */}
                                <div className={`hidden md:block w-1/2 pt-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                    <span className="font-serif italic text-2xl text-textBase/60">{exp.duration}</span>
                                </div>

                                {/* Content Card */}
                                <div className="md:w-1/2">
                                    <div className="bg-neutral p-8 border border-black/5 hover:border-primary/30 transition-colors duration-500 group shadow-sm hover:shadow-md">
                                        <span className="md:hidden block text-sm text-primary mb-2 font-mono">{exp.duration}</span>
                                        <h3 className="text-2xl font-serif text-textBase mb-1 group-hover:text-primary transition-colors duration-300">
                                            {exp.role}
                                        </h3>
                                        <h4 className="text-lg text-textBase/60 mb-6 font-light tracking-wide">
                                            {exp.company}
                                        </h4>
                                        <p className="text-textBase/80 leading-relaxed font-light border-l-2 border-primary/20 pl-4">
                                            {exp.description}
                                        </p>

                                        {exp.images && (
                                            <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
                                                {exp.images.map((imgUrl, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-24 h-24 flex-shrink-0 bg-neutral-light overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-300"
                                                        onClick={() => setSelectedImage(imgUrl)}
                                                    >
                                                        <img
                                                            src={imgUrl}
                                                            alt={`${exp.company} work ${i + 1}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
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

export default ExperienceSection;
