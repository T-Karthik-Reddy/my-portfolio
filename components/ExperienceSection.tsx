import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCE_DATA } from '../constants';

interface ExperienceSectionProps {
    id: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id }) => {
    return (
        <SectionWrapper
            id={id}
            title="Experience"
            subtitle="My professional journey and internships."
            className="bg-background relative overflow-hidden"
            titleClassName="text-textBase"
        >
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

                <div className="space-y-16">
                    {EXPERIENCE_DATA.map((exp, index) => (
                        <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-background border-4 border-accent rounded-full z-10 top-0 md:top-8 shadow-[0_0_10px_rgba(199,146,234,0.6)]"></div>

                            {/* Content Wrapper */}
                            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 !== 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                                <div className="group relative bg-neutral/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-white/5 hover:border-accent/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

                                    {/* Glow effect on hover */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur-lg"></div>

                                    <div className="relative z-10">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                            <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-accent uppercase bg-accent/10 rounded-full border border-accent/20">
                                                {exp.duration}
                                            </span>
                                            {exp.logo && (
                                                <img src={exp.logo} alt={`${exp.company} logo`} className="h-8 object-contain" />
                                            )}
                                        </div>

                                        <h3 className="text-2xl font-bold text-textBase mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                                        <h4 className="text-lg font-medium text-primary/90 mb-4">{exp.company}</h4>

                                        <p className="text-textBase/80 text-sm leading-relaxed mb-6">
                                            {exp.description}
                                        </p>

                                        {/* Images Grid */}
                                        {exp.images && exp.images.length > 0 && (
                                            <div className="grid grid-cols-2 gap-3 mt-4">
                                                {exp.images.map((img, imgIndex) => (
                                                    <div key={imgIndex} className="relative overflow-hidden rounded-lg aspect-video group/image cursor-pointer">
                                                        <img
                                                            src={img}
                                                            alt={`${exp.company} highlight ${imgIndex + 1}`}
                                                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover/image:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-black/20 group-hover/image:bg-transparent transition-colors duration-300"></div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Spacer for desktop layout balance */}
                            <div className="hidden md:block md:w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ExperienceSection;
