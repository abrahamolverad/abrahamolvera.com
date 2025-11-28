import React from 'react';

export interface Venture {
  id: string;
  name: string;
  description: string;
  role: string;
  status: 'Active' | 'In Progress' | 'Coming Soon';
  link?: string;
  color: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum NavSection {
  HOME = 'home',
  ABOUT = 'about',
  TOPICS = 'topics',
  VENTURES = 'ventures',
  CONTACT = 'contact'
}