import React from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Globe, 
  Smartphone,
  Terminal,
  Cloud,
  Bot,
  BookOpen,
  Lock,
  Workflow,
  Layers,
  Zap,
  Box,
  Shield,
  Binary,
  PenTool,
  Gauge
} from 'lucide-react';
import { Achievement, Experience, Project, SkillCategory } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Frontend Web Developer Intern',
    company: 'Su-kEm Tech Lab, Ahmedabad',
    period: 'May 2025 – June 2025',
    description: 'Worked as a Frontend Web Developer Intern, contributing to a real-world food delivery web application and gaining hands-on experience in modern frontend and full-stack collaboration.',
    achievements: [
      'Built a responsive food delivery frontend using React.js and Tailwind CSS, serving 500+ test users with strong UI/UX feedback.',
      'Developed 20+ reusable React components, including product listings, shopping cart with real-time updates, and authentication modals.',
      'Integrated RESTful APIs for dynamic data rendering and improved page load time by ~40% using optimized state management and lazy loading.',
      'Collaborated with backend developers on Node.js, Express.js, JWT authentication, and MongoDB integration.',
      'Used Git and GitHub for version control with 100+ commits, following feature-branch workflow and code review practices.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: '👨‍💻 Programming Languages',
    skills: [
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      { name: 'Java', icon: 'devicon-java-plain' },
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'C++', icon: 'devicon-cplusplus-plain' }
    ]
  },
  {
    name: '⚛️ Frontend Development',
    skills: [
      { name: 'React.js', icon: 'devicon-react-original' },
      { name: 'HTML5', icon: 'devicon-html5-plain' },
      { name: 'CSS3', icon: 'devicon-css3-plain' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original' },
      { name: 'Responsive Web Design', icon: <Layout className="w-6 h-6" /> },
      { name: 'Component Arch.', icon: <Box className="w-6 h-6" /> },
      { name: 'UI Performance', icon: <Zap className="w-6 h-6" /> }
    ]
  },
  {
    name: '🧠 Backend Development',
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'Express.js', icon: 'devicon-express-original' },
      { name: 'RESTful APIs', icon: <Globe className="w-6 h-6" /> },
      { name: 'JWT Auth', icon: <Lock className="w-6 h-6" /> }
    ]
  },
  {
    name: '🗄️ Databases',
    skills: [
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
      { name: 'MySQL', icon: 'devicon-mysql-plain' }
    ]
  },
  {
    name: '🛠️ Tools & Platforms',
    skills: [
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'VS Code', icon: 'devicon-vscode-plain' },
      { name: 'Postman', icon: 'devicon-postman-plain' },
      { name: 'n8n', icon: <Workflow className="w-6 h-6" /> },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
      { name: 'Vercel', icon: 'devicon-vercel-original' },
      { name: 'Netlify', icon: 'devicon-netlify-plain' },
      { name: 'Figma', icon: 'devicon-figma-plain' }
    ]
  },
  {
    name: '🤖 AI / Automation',
    skills: [
      { name: 'AI API Integrations', icon: <Bot className="w-6 h-6" /> },
      { name: 'Workflow Automation', icon: <Workflow className="w-6 h-6" /> },
      { name: 'Encryption (AES)', icon: <Shield className="w-6 h-6" /> },
      { name: 'Secure Data', icon: <Database className="w-6 h-6" /> }
    ]
  },
  {
    name: '📐 Concepts & Practices',
    skills: [
      { name: 'DSA', icon: <Binary className="w-6 h-6" /> },
      { name: 'Clean Code', icon: <Code2 className="w-6 h-6" /> },
      { name: 'Scalable Arch', icon: <Server className="w-6 h-6" /> },
      { name: 'Performance Opt.', icon: <Gauge className="w-6 h-6" /> },
      { name: 'UI/UX Design', icon: <PenTool className="w-6 h-6" /> }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'smart-notes',
    title: 'Smart Notes',
    description: 'AI-powered note-taking with client-side encryption.',
    longDescription: 'AI-powered note-taking web application with client-side encryption, auto-save, summarization, and productivity-focused features.',
    tags: ['React.js', 'Tailwind CSS', 'OpenAI', 'CryptoJS'],
    imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800',
    size: 'large',
    link: '#',
    github: 'https://github.com/pkanotara/Smart-Notes'
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery Platform',
    description: 'End-to-end food delivery web app.',
    longDescription: 'End-to-end food delivery web app featuring menu browsing, cart management, authentication, and responsive UI with real-time interactions.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    size: 'wide',
    link: '#',
    github: 'https://github.com/pkanotara/Food-delivery'
  },
  {
    id: 'auth-system',
    title: 'AuthSystem',
    description: 'Secure full-stack authentication system.',
    longDescription: 'Secure full-stack authentication system implementing JWT-based authentication, protected routes, and role-based access.',
    tags: ['React.js', 'Node.js', 'JWT', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=600',
    size: 'tall',
    link: '#',
    github: 'https://github.com/pkanotara/AuthSystem'
  },
  {
    id: 'github-insight',
    title: 'GitHub Resume Insight',
    description: 'Developer utility analyzing GitHub repos.',
    longDescription: 'Developer utility that analyzes GitHub repositories and resume data to generate structured insights and summaries.',
    tags: ['TypeScript', 'Node.js', 'GitHub API'],
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=600',
    size: 'normal',
    link: '#',
    github: 'https://github.com/pkanotara/github-resume-insight'
  },
  {
    id: 'shopkart',
    title: 'Shopkart',
    description: 'E-commerce interface focused on product browsing.',
    longDescription: 'E-commerce interface focused on product browsing, UI structure, and responsive layout design.',
    tags: ['React.js', 'JavaScript', 'CSS3'],
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-4155f2118c15?auto=format&fit=crop&q=80&w=600',
    size: 'normal',
    link: '#',
    github: 'https://github.com/pkanotara/shopkart'
  },
  {
    id: 'whatsapp-bot',
    title: 'WhatsApp Chatbot',
    description: 'Automated chatbot for interactions.',
    longDescription: 'Automated chatbot built for WhatsApp to handle user interactions and message-based workflows.',
    tags: ['Node.js', 'WhatsApp API'],
    imageUrl: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=600',
    size: 'normal',
    link: '#',
    github: 'https://github.com/pkanotara/WhatsApp-based-Chatbot'
  },
  {
    id: 'leetcode',
    title: 'LeetCode Solutions',
    description: 'Optimized DSA solutions.',
    longDescription: 'Collection of optimized data structures and algorithms solutions for coding interviews and problem-solving practice.',
    tags: ['C++', 'Java', 'DSA'],
    imageUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=600',
    size: 'normal',
    link: '#',
    github: 'https://github.com/pkanotara/LeetCode'
  },
  {
    id: 'graph-builder',
    title: 'Graph Builder',
    description: 'Interactive graph visualization tool.',
    longDescription: 'Interactive graph visualization tool for creating, manipulating, and analyzing graph structures dynamically.',
    tags: ['JavaScript', 'Canvas API', 'Graph Theory'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    size: 'wide',
    link: '#',
    github: 'https://github.com/pkanotara/graph_builder'
  },
  {
    id: 'typeflow',
    title: 'Typeflow',
    description: 'Modern typing practice application.',
    longDescription: 'Modern typing practice application with real-time performance analytics and customizable practice modes.',
    tags: ['React.js', 'TypeScript', 'Analytics'],
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b91a603?auto=format&fit=crop&q=80&w=600',
    size: 'normal',
    link: '#',
    github: 'https://github.com/pkanotara/Typeflow'
  },
  {
    id: 'splitwise-pro',
    title: 'SplitWise Pro',
    description: 'Smart expense-splitting application.',
    longDescription: 'Smart expense-splitting application designed to simplify group bill management using optimized settlement logic.',
    tags: ['React.js', 'JavaScript', 'CSS3'],
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600',
    size: 'normal',
    link: '#',
    github: 'https://github.com/pkanotara/SplitWise-Pro'
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    description: 'Classic browser-based game.',
    longDescription: 'Classic browser-based game implementing core JavaScript logic and interactive UI.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?auto=format&fit=crop&q=80&w=600',
    size: 'normal',
    link: '#',
    github: 'https://github.com/pkanotara/Tic-Tac-Toe'
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'Real-time weather information.',
    longDescription: 'Real-time weather information interface fetching and displaying data from external APIs.',
    tags: ['JavaScript', 'Weather API', 'CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=600',
    size: 'normal',
    link: '#',
    github: 'https://github.com/pkanotara/weather-app'
  },
  {
    id: 'todo-list',
    title: 'Todo List',
    description: 'Simple task management.',
    longDescription: 'Simple task management application focusing on clean UI and basic CRUD functionality.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=600',
    size: 'normal',
    link: '#',
    github: 'https://github.com/pkanotara/todo-list'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: 'Microsoft Learn Workshop',
    role: 'Web Development Certification',
    description: 'Hands-on training focused on modern web development fundamentals, best practices, and real-world frontend workflows.'
  },
  {
    id: '2',
    title: 'Smart India Hackathon',
    role: 'SIH 2023 & 2024 Participant',
    description: 'Participated in national-level hackathons, collaborating on problem statements and building technology-driven solutions.'
  },
  {
    id: '3',
    title: 'Tata Imagination Challenge',
    role: 'Innovation Challenge Participant',
    description: 'Engaged in ideation and problem-solving challenges emphasizing creativity, innovation, and business thinking.'
  },
  {
    id: '4',
    title: 'MINED Hackathon',
    role: 'AI Solutions Track',
    description: 'Worked on AI-driven approaches to solve practical challenges using intelligent systems and optimization techniques.'
  },
  {
    id: '5',
    title: 'AWS Academy Graduate',
    role: 'Cloud Foundations Certified',
    description: 'Gained foundational knowledge of cloud computing concepts, AWS services, and cloud architecture fundamentals.'
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Languages': return <Code2 className="w-5 h-5" />;
    case 'Frontend': return <Layout className="w-5 h-5" />;
    case 'Backend': return <Server className="w-5 h-5" />;
    case 'DevOps & Tools': return <Wrench className="w-5 h-5" />;
    default: return <Layers className="w-5 h-5" />;
  }
};