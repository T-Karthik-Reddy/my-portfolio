// import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Not directly needed if only using string paths for images
// import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'; // Not directly needed for Skill/ContactLink if icon is string

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string; // Changed to string for image path
  level?: number; // Optional: for skill proficiency level
  category?: string; // Optional: for grouping skills
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  date?: string; // Added optional date field
}

export interface ContactLink {
  id: string;
  name: string;
  url: string;
  icon: string; // Changed to string for image path
  ariaLabel?: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot' | 'system';
  timestamp: Date;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  logo?: string;
  images?: string[];
}

// Interface for FontAwesome specific icons if needed elsewhere directly
// export type FASolidIcon = IconDefinition;
// export type FABrandsIcon = IconDefinition;

// Interface for custom SVG React components if needed elsewhere directly
// export type CustomSvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;