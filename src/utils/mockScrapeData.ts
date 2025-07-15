// utils/mockScrapeData.ts

// Define supported blog domains
type BlogDomain = 'techcrunch.com' | 'medium.com' | 'default';

// Blog data structure
export interface BlogData {
  title: string;
  content: string;
  author: string;
  date: string;
  url?: string; // optional: added when returning
}

// Mock data for known domains
const mockBlogs: Record<BlogDomain, BlogData> = {
  'techcrunch.com': {
    title: 'The Future of AI in Software Development',
    content: 'Artificial intelligence is revolutionizing software development. AI tools can now help developers write code faster...',
    author: 'Awais',
    date: '2020-02-15',
  },
  'medium.com': {
    title: 'Building Modern Web Applications with React',
    content: 'React has become the most popular JavaScript library for building user interfaces...',
    author: 'Hamza',
    date: '2023-09-17',
  },
  'default': {
    title: 'Understanding Digital Transformation',
    content: 'Digital transformation is changing how businesses operate...',
    author: 'Sohaib-Writer',
    date: '2025-07-15',
  },
};

// Main mock scraper function
export const mockScrapeData = (url: string): BlogData => {
  const matchedDomain = (Object.keys(mockBlogs) as BlogDomain[]).find(domain =>
    url.includes(domain)
  ) || 'default';

  return {
    ...mockBlogs[matchedDomain],
    url, // attach the original URL
  };
};
