export interface Solution {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  sub: string;
  bullets: string[];
  description?: string; // Extra context if needed
  faq?: { question: string; answer: string }[];
  iconName?: string;
  category: 'payment' | 'functionality'; // Distinguish between payment methods and tools
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  organizer: string;
  intro: string;
  challenge: string;
  solution: string[];
  results: string[];
  image?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  readTime: string;
  content: string; 
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
}