import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { ALL_SKILLS } from '../constants';

const SkillsSection: React.FC<{ id: string }> = ({ id }) => {
    // Group skills by category for "Editorial" layout
    const categories = {
        "Languages": ['c', 'cpp', 'java', 'python', 'go', 'solidity', 'bash', 'html5', 'javascript', 'css3', 'react', 'nodejs', 'express', 'sql'],
        "System & Tools": ['linux', 'bash', 'ansible', 'docker', 'kubernetes', 'jenkins', 'git', 'wireshark', 'jira'],
        "Frameworks": ['pytorch', 'keras', 'nlp', 'flask']
    };

    return (
        <SectionWrapper
            id={id}
            title=""
            className="bg-neutral py-24"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Section Title - Vertical on Desktop */}
                <div className="lg:col-span-3 lg:border-r border-primary/20 relative">
                    <div className="sticky top-32">
                        <h2 className="font-serif text-5xl md:text-6xl text-textBase mb-4 leading-none">
                            The <br /> <span className="text-primary italic">Toolkit</span>
                        </h2>
                        <p className="text-textBase/60 text-sm tracking-widest uppercase mt-4">
                            Technical Proficiencies
                        </p>
                    </div>
                </div>

                {/* Content - Editorial List */}
                <div className="lg:col-span-9 space-y-16">
                    {Object.entries(categories).map(([category, skillIds], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-serif text-textBase mb-8 border-b border-primary/20 pb-4 inline-block pr-12">
                                {category}
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
                                {skillIds.map(skillId => {
                                    const skill = ALL_SKILLS.find(s => s.id === skillId);
                                    if (!skill) return null;

                                    return (
                                        <div key={skillId} className="group flex items-center gap-3 py-2 border-b border-black/5 hover:border-primary/50 transition-colors duration-300">
                                            <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-serif italic">
                                                —
                                            </span>
                                            <span className="text-textBase/80 group-hover:text-primary-dark transition-colors duration-300 font-light tracking-wide">
                                                {skill.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default SkillsSection;
