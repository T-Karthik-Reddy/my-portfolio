import React from 'react';
import { NavItem, Skill, Project, ContactLink } from './types';
// Import FontAwesome icons that are still used (e.g., for resume download, heart icon)
import { faDownload, faHeart } from '@fortawesome/free-solid-svg-icons';


// Placeholder Name and Links - REMEMBER TO REPLACE THESE!
export const YOUR_NAME = "T Karthik Reddy"; // Updated Name
export const YOUR_EMAIL = "karthikreddytheepi@gmail.com"; // Generic placeholder email
export const YOUR_LINKEDIN_USERNAME = "tkarthikreddy"; // Generic placeholder
export const YOUR_GITHUB_USERNAME = "T-Karthik-Reddy"; // Generic placeholder
export const YOUR_LEETCODE_USERNAME = "tkarthikreddy"; // Generic placeholder for LeetCode
// Ensure this resume path is correct and the file exists in the public folder
export const YOUR_RESUME_PATH = "t_karthik_reddy_resume.pdf"; 

export const NAVBAR_LOGO_TEXT = "KR";
export const SITE_TITLE = `${YOUR_NAME} | AI & Web Portfolio`;
export const HERO_NAME = YOUR_NAME;
export const FOOTER_NAME = YOUR_NAME;

// Export FontAwesome icons for use in components
export { faDownload, faHeart };

// Custom SVG Icons from PDF (used in HeroSection, kept as SVGs as no direct logo replacement)
export const ComputerDesktopIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
  </svg>
);

export const CpuChipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v3.75m0 6V21m3.75-18v3.75m0 6V21m-9-7.5h12c.621 0 1.125-.504 1.125-1.125V9.75c0-.621-.504-1.125-1.125-1.125h-12c-.621 0-1.125.504-1.125 1.125v3.375c0 .621.504 1.125 1.125 1.125Zm8.25-7.5h-4.5v3.75h4.5v-3.75Z" />
  </svg>
);


export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const ALL_SKILLS: Skill[] = [
  { id: 'python', name: 'Python', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/python-logo.png' },
  { id: 'javascript', name: 'JavaScript', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/javascript-logo.png' },
  { id: 'react', name: 'React', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/react-logo.png' },
  { id: 'nodejs', name: 'Node.js', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/nodejs-logo.png' },
  { id: 'html5', name: 'HTML5', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/html-logo.png' },
  { id: 'css3', name: 'CSS3', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/css-logo.png' },
  // Assuming user will add tailwind-logo.png to public/logos/
  { id: 'tailwindcss', name: 'Tailwind CSS', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/tailwind-logo.png' }, 
  { id: 'tensorflow', name: 'TensorFlow', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/tensorflow-logo.png' },
  { id: 'pytorch', name: 'PyTorch', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/pytorch-logo.png' },
  // Assuming user will add scikitlearn-logo.png to public/logos/
  { id: 'scikitlearn', name: 'Scikit-learn', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/scikitlearn-logo.png' }, 
  { id: 'git', name: 'Git', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/git-logo.png' },
  { id: 'docker', name: 'Docker', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/docker-logo.png' },
  { id: 'matlab', name: 'MATLAB', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/matlab-logo.png' },
  { id: 'sql', name: 'SQL (MySQL)', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/mysql-logo.png' },
  { id: 'postgres', name: 'PostgreSQL', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/postgres-logo.png' }, // Changed from MongoDB
  { id: 'nlp', name: 'NLP (Hugging Face)', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/huggingface-logo.png' },
  { id: 'cv', name: 'Computer Vision (OpenCV)', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/opencv-logo.png' },
  { id: 'c', name: 'C', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/c-logo.png' },
  { id: 'cpp', name: 'C++', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/cpp-logo.png' },
  { id: 'flask', name: 'Flask', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/flask-logo.png' },
  { id: 'keras', name: 'Keras', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/keras-logo.png' },
  { id: 'java', name: 'Java', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/java-logo.png' },
  { id: 'jenkins', name: 'Jenkins', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/jenkins-logo.png' },
  { id: 'spring', name: 'Spring', icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/spring-logo.png' },
];

export const CONTACT_LINKS: ContactLink[] = [
  { 
    id: 'linkedin', 
    name: 'LinkedIn', 
    url: `https://linkedin.com/in/${YOUR_LINKEDIN_USERNAME}`, 
    icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/linkedin-logo.png', 
    ariaLabel: `Connect with ${HERO_NAME} on LinkedIn` 
  },
  { 
    id: 'github', 
    name: 'GitHub', 
    url: `https://github.com/${YOUR_GITHUB_USERNAME}`, 
    icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/github-logo.png', 
    ariaLabel: `View ${HERO_NAME}'s projects on GitHub` 
  },
  { 
    id: 'email', 
    name: 'Email', 
    url: `mailto:${YOUR_EMAIL}`, 
    icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/email-logo.png', 
    ariaLabel: `Send an email to ${HERO_NAME}` 
  },
  { 
    id: 'leetcode', 
    name: 'LeetCode', 
    url: `https://leetcode.com/${YOUR_LEETCODE_USERNAME}`, 
    icon: 'https://t-karthik-reddy.github.io/my-portfolio/logos/leetcode-logo.png', 
    ariaLabel: `View ${HERO_NAME}'s LeetCode profile` 
  },
];


export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-webdev',
    title: 'Web Development',
    description: 'Created the official website for QUBIT (Quantum Computing Club) to publish blogs, host events, and manage registrations. Built using ReactJS and optimized for traffic and reduced page load time by 29.8%.',
    imageUrl: 'https://t-karthik-reddy.github.io/my-portfolio/projects/webdev-project.png',
    tags: ['ReactJS', 'Web Development', 'Optimization', 'Qubit Club'],
    date: 'June. 2023',
    // repoUrl: `https://github.com/${YOUR_GITHUB_USERNAME}/qubit-website`, // Example
    // liveUrl: '#', // Example
  },
  {
    id: 'project-netsec',
    title: 'Network Security',
    description: 'Built a CNN-based system trained on the KDD dataset to detect network intrusions. Good performance with ADASYN for imbalanced class handling. Achieved improved accuracy and recall on minority attack types.',
    imageUrl: 'https://t-karthik-reddy.github.io/my-portfolio/projects/netsec-project.png',
    tags: ['CNN', 'Network Security', 'KDD Dataset', 'ADASYN', 'Machine Learning'],
    date: 'Feb. 2025',
    // repoUrl: `https://github.com/${YOUR_GITHUB_USERNAME}/network-intrusion-detection`, // Example
  },
  {
    id: 'project-automation',
    title: 'Automation',
    description: 'Utilized YOLOv8 and a multi-modal strategy to classify aircraft as civilian, military, or UAV which can handle large-scale data and optimized latency by 20%. Aids military systems in real-time threat assessment.',
    imageUrl: 'https://t-karthik-reddy.github.io/my-portfolio/projects/aircraft-project.png',
    tags: ['YOLOv8', 'Automation', 'Aircraft Classification', 'Multi-modal', 'Latency Optimization', 'AI'],
    date: 'Jan. 2024',
    // repoUrl: `https://github.com/${YOUR_GITHUB_USERNAME}/aircraft-classification`, // Example
  },
];