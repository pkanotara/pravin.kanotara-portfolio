import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  featured?: boolean;
  size?: 'normal' | 'wide' | 'tall' | 'large';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface SkillCategory {
  name: string;
  skills: { name: string; icon: string | ReactNode }[];
}

export interface Achievement {
  id: string;
  title: string;
  role: string;
  description: string;
}