import React from 'react';

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '', 
  titleClassName = 'text-textBase', // Default title color
  contentClassName = '' 
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-12 md:mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-3 animate-fade-in-up ${titleClassName}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-lg text-textBase/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200`}> {/* Ensure subtitle has good contrast */}
                {subtitle}
              </p>
            )}
            <div className="mt-4 h-1 w-24 bg-primary mx-auto rounded-full animate-fade-in-up animation-delay-200"></div>
          </div>
        )}
        <div className={contentClassName}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;