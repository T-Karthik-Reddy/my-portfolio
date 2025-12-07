import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { ABOUT_ME_DESCRIPTION, YOUR_RESUME_PATH } from '../constants';

const AboutSectionVogue: React.FC<{ id: string }> = ({ id }) => {
    return (
        <SectionWrapper id={id} title="" className="bg-background py-24 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: Image Composition */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative z-10 aspect-[3/4] max-w-md mx-auto">
                        <div className="absolute inset-0 border border-primary/20 translate-x-4 translate-y-4 z-0"></div>
                        <img
                            src="vogue.png"
                            alt="About Me"
                            className="w-full h-full object-cover shadow-xl relative z-10"
                        />

                        {/* Decorative Quote */}
                        <div className="absolute -bottom-10 -right-10 bg-white p-6 shadow-lg max-w-xs z-20 border border-black/5 hidden md:block">
                            <p className="font-serif italic text-xl text-primary-dark">
                                "Code is the new <br /> <span className="text-textBase">Haute Couture.</span>"
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div>
                        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">The Editor's Note</p>
                        <h2 className="font-serif text-5xl md:text-6xl text-textBase leading-tight">
                            Crafting <br /> <span className="italic text-primary">Digital</span> Stories
                        </h2>
                    </div>

                    <div className="space-y-6 text-textBase/80 font-light leading-relaxed text-lg">
                        <p>
                            {ABOUT_ME_DESCRIPTION}
                        </p>
                        <p>
                            I believe that great software is akin to high fashion: it requires structure, creativity, and an obsessive attention to detail. My work is a blend of technical precision and artistic expression.
                        </p>
                    </div>

                    <div className="pt-4">
                        <a
                            href={YOUR_RESUME_PATH}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border-b border-primary text-primary hover:text-primary-dark transition-colors pb-1 tracking-widest uppercase text-sm"
                        >
                            Read Full Bio
                        </a>
                    </div>
                </motion.div>

            </div>
        </SectionWrapper>
    );
};

export default AboutSectionVogue;
