import React from 'react';
import { NavItem, Skill, Project, ContactLink, Experience } from './types';
// Import FontAwesome icons that are still used (e.g., for resume download, heart icon)
import { faDownload, faHeart } from '@fortawesome/free-solid-svg-icons';

export const YOUR_NAME = "T Karthik Reddy";
export const YOUR_EMAIL = "karthikreddytheepi@gmail.com";
export const YOUR_LINKEDIN_USERNAME = "tkarthikreddy"; 
export const YOUR_GITHUB_USERNAME = "T-Karthik-Reddy"; 
export const YOUR_LEETCODE_USERNAME = "tkarthikreddy"; 
export const YOUR_RESUME_PATH = "Karthik_Resume_a.pdf";

export const NAVBAR_LOGO_TEXT = "KR";
export const SITE_TITLE = `${YOUR_NAME} | AI & Systems Portfolio`;
export const HERO_NAME = YOUR_NAME;
export const FOOTER_NAME = YOUR_NAME;

export const ABOUT_ME_DESCRIPTION = `
  Software Engineer focused on distributed systems, AI infrastructure, and scalable backend services. Experienced building production GenAI platforms and high-performance concurrent systems using C++, Rust, Java, and Python.

  Achievements:
  • Winner - IBM Qiskit Fall Fest, 2024 (1/180)
  • Technical Excellence Award - Silicon Labs Challenge, 2026 (4/440)
  • Best Startup Ideation Award - ENTREPX, 2025 (1/90)
`;

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
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const ALL_SKILLS: Skill[] = [
  // Languages
  { id: 'java', name: 'Java', icon: '' },
  { id: 'python', name: 'Python', icon: '' },
  { id: 'cpp', name: 'C++', icon: '' },
  { id: 'c', name: 'C', icon: '' },
  { id: 'rust', name: 'Rust', icon: '' },
  { id: 'sql', name: 'SQL', icon: '' },
  { id: 'javascript', name: 'JavaScript/TypeScript', icon: '' },
  // AI/ML
  { id: 'pytorch', name: 'PyTorch', icon: '' },
  { id: 'tensorflow', name: 'TensorFlow', icon: '' },
  { id: 'huggingface', name: 'Hugging Face', icon: '' },
  { id: 'langchain', name: 'LangChain', icon: '' },
  { id: 'lora', name: 'LoRA/PEFT', icon: '' },
  { id: 'rag', name: 'RAG', icon: '' },
  { id: 'faiss', name: 'FAISS', icon: '' },
  { id: 'tensorrt', name: 'TensorRT', icon: '' },
  { id: 'genai', name: 'Generative AI', icon: '' },
  // Systems & Backend
  { id: 'dist_systems', name: 'Distributed Systems', icon: '' },
  { id: 'java_nio', name: 'Java NIO', icon: '' },
  { id: 'io_uring', name: 'Linux io_uring', icon: '' },
  { id: 'tcp', name: 'TCP Protocol Design', icon: '' },
  { id: 'grpc', name: 'gRPC', icon: '' },
  { id: 'rest', name: 'REST APIs', icon: '' },
  { id: 'fastapi', name: 'FastAPI', icon: '' },
  { id: 'nodejs', name: 'Node.js', icon: '' },
  // Databases & Data
  { id: 'postgres', name: 'PostgreSQL', icon: '' },
  { id: 'mongodb', name: 'MongoDB', icon: '' },
  { id: 'chromadb', name: 'Chroma DB', icon: '' },
  { id: 'redis', name: 'Redis', icon: '' },
  { id: 'leveldb', name: 'LevelDB', icon: '' },
  { id: 'sql_opt', name: 'SQL query optimization', icon: '' },
  // Cloud & DevOps
  { id: 'aws', name: 'AWS (EC2, S3)', icon: '' },
  { id: 'gcp', name: 'Google Cloud Platform', icon: '' },
  { id: 'docker', name: 'Docker', icon: '' },
  { id: 'kubernetes', name: 'Kubernetes', icon: '' },
  { id: 'cicd', name: 'CI/CD', icon: '' },
  // Core CS
  { id: 'dsa', name: 'Data Structures & Algorithms', icon: '' },
  { id: 'sysdesign', name: 'System Design', icon: '' },
  { id: 'os', name: 'Operating Systems', icon: '' },
  { id: 'network', name: 'Computer Networks', icon: '' },
  { id: 'concurrency', name: 'Concurrency', icon: '' },
  { id: 'oop', name: 'OOP', icon: '' }
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


export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'techolution-associate',
    role: 'Associate AI Engineer',
    company: 'Techolution',
    duration: 'Mar 2026 - Present',
    description: 'Implemented a flagship healthcare BPA platform, compressing a 6-month manual document process into a fully automated, audit-ready pipeline while maintaining HIPAA-grade compliance. Built a highly scalable multi-database system (PostgreSQL, MongoDB, Redis) supporting 15-30 microservices; engineered to support production traffic peaks of up to 500K requests. Developed intelligent code generation pipelines and multi-modal requirement extraction tools.',
  },
  {
    id: 'techolution-intern',
    role: 'Generative AI Engineer Intern',
    company: 'Techolution',
    duration: 'Sep 2025 - Mar 2026',
    description: 'Designed the foundational architecture for a Pixel-to-Website AI tool; developed an optimized Monte Carlo Tree Search (MCTS) algorithm with parallel rollout execution. Managed a multi-tiered judging swarm utilizing actor-model concurrency. Integrated a dynamic conflict-resolution pipeline for a Knowledge Retrieval agent.',
  },
  {
    id: 'nrsc-intern',
    role: 'Research Intern',
    company: 'NRSC - ISRO',
    duration: 'Jun 2025 - Aug 2025',
    description: 'Evaluated and deployed Vision Transformer (ViT) architectures to denoise high-resolution SAR satellite imagery. Optimized deep learning inference pipelines utilizing mixed-precision (FP16) and batched execution, reducing VRAM footprint by 40% and accelerating throughput over baseline CNN models.',
    images: [
      '/my-portfolio/experience/nrsc-1.jpg',
      '/my-portfolio/experience/nrsc-2.jpg'
    ]
  },
];


export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-kv-store',
    title: 'High-Performance Distributed Key-Value Store',
    description: 'Built a distributed key-value store from scratch, benchmarking at 1,640,631 Requests/sec using wrk with Lua HTTP pipelining on a Dockerized Ubuntu 24.04 deployment. Engineered a robust threading model and implemented the Raft consensus algorithm for strict fault tolerance and leader election.',
    imageUrl: 'https://t-karthik-reddy.github.io/my-portfolio/projects/kv-store.png',
    tags: ['C++20', 'io_uring', 'Raft Consensus', 'Zero-Copy'],
    date: 'Recent',
  },
  {
    id: 'project-message-broker',
    title: 'Low-Latency Distributed Message Broker',
    description: 'Created a distributed message broker measuring 1,000,000 ops/sec on Linux by integrating io_uring via Java 22’s Project Panama to streamline zero-copy network ingestion. Established comprehensive benchmarking and observability pipelines using JMH on an arm64 architecture, achieving a 133.8ns response time.',
    imageUrl: 'https://t-karthik-reddy.github.io/my-portfolio/projects/message-broker.png',
    tags: ['Java 22 (FFM API)', 'io_uring', 'Netty', 'Disruptor'],
    date: 'Recent',
  },
  {
    id: 'project-agent-engine',
    title: 'High-Frequency Multi-Agent Orchestration Engine',
    description: 'Developed a highly resilient orchestration engine in Rust to manage massive agent swarms, focusing on predictable system behavior and strict resource allocation. Designed reliable inter-agent communication buses, preventing race conditions across thousands of parallel execution streams (2.42 Million agents/sec).',
    imageUrl: 'https://t-karthik-reddy.github.io/my-portfolio/projects/agent-engine.png',
    tags: ['Rust', 'Lock-Free Concurrency', 'Bare-Metal', 'Atomics'],
    date: 'Recent',
  },
  {
    id: 'project-wasm-runtime',
    title: 'Distributed WebAssembly (WASM) Serverless Runtime',
    description: 'Implemented a distributed edge-compute runtime for deploying untrusted WebAssembly modules, engineering a secure provisioning pipeline that achieves 54.16µs cold-starts. Engineered a fault-tolerant Stateful Live Migration protocol via gRPC and integrated the Wasmtime JIT compiler for memory isolation.',
    imageUrl: 'https://t-karthik-reddy.github.io/my-portfolio/projects/wasm-runtime.png',
    tags: ['Rust', 'Wasmtime', 'gRPC', 'JIT Compilation'],
    date: 'Recent',
  },
  {
    id: 'project-web3-game',
    title: 'Online PVP Game Platform with Crypto Rewards',
    description: 'Developed a real-time PVP gaming platform using WebSockets for fast-paced gameplay. Integrated with the Ethereum blockchain via Solidity smart contracts and MetaMask for secure, automated crypto rewards for winners.',
    imageUrl: 'https://t-karthik-reddy.github.io/my-portfolio/projects/web3-project.png',
    tags: ['Solidity', 'Smart Contracts', 'WebSockets', 'GoLang'],
    date: 'June. 2025',
  },
];