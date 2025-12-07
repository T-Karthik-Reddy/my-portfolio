import React from 'react';
import { motion } from 'framer-motion';
import { YOUR_RESUME_PATH } from '../constants';

const HeroSection: React.FC<{ id: string }> = ({ id }) => {
    return (
        <section id={id} className="relative h-screen w-full flex flex-col items-center justify-start overflow-hidden bg-background">

            {/* Full Screen Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="vogue.png"
                    alt="Karthik Vogue Cover"
                    className="w-full h-full object-cover grayscale contrast-125"
                />
                {/* Overlay Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
            </div>

            {/* MASTHEAD - The User's Name as the Vogue Logo */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-20 text-center w-full pt-24"
            >
                <h1 className="font-serif font-bold text-[15vw] md:text-[18vw] leading-[0.8] text-primary tracking-tighter mix-blend-difference opacity-90">
                    KARTHIK
                </h1>
            </motion.div>

            {/* Floating Headlines (Cover Lines) - Positioned Absolutely over the image */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="container mx-auto h-full relative">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="absolute top-1/3 left-6 md:left-0 text-left pointer-events-auto mt-12"
                    >
                        <h2 className="font-serif text-4xl md:text-6xl text-primary italic leading-tight drop-shadow-lg">
                            The <br /> <span className="text-white not-italic font-bold">Future</span> <br /> of AI
                        </h2>
                        <p className="mt-4 text-sm font-sans text-white/90 max-w-[200px] font-medium drop-shadow-md">
                            How one developer is bridging the gap between code and creativity.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="absolute bottom-32 right-6 md:right-0 text-right pointer-events-auto"
                    >
                        <h3 className="font-serif text-3xl md:text-5xl text-white font-bold drop-shadow-lg">
                            Web <br /> <span className="text-primary italic">Revolution</span>
                        </h3>
                        <p className="mt-4 text-sm font-sans text-white/90 ml-auto max-w-[200px] font-medium drop-shadow-md">
                            Mastering the art of digital experiences.
                        </p>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.a
                        href={YOUR_RESUME_PATH}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="absolute bottom-12 left-6 md:left-0 pointer-events-auto bg-primary text-white px-8 py-4 rounded-full font-bold tracking-widest text-xs uppercase shadow-xl hover:bg-primary-dark transition-colors"
                    >
                        Read The Resume
                    </motion.a>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
