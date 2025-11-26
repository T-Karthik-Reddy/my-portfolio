import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatIcon from './components/ChatIcon';
import Chatbot from './components/Chatbot';
import { NAV_ITEMS, SITE_TITLE } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    document.title = SITE_TITLE;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4, // Adjust this value to change when the section becomes active
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <div className="flex flex-col min-h-screen bg-background text-textBase">
      <Navbar navItems={NAV_ITEMS} activeSection={activeSection} />
      <main className="flex-grow">
        <HeroSection id="home" />
        <AboutSection id="about" />
        <SkillsSection id="skills" />
        <ExperienceSection id="experience" />
        <ProjectsSection id="projects" />
        <ContactSection id="contact" />
      </main>
      <Footer />
      <ChatIcon onClick={toggleChat} isOpen={isChatOpen} />
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default App;