// utils/mockScrapeData.ts

type BlogDomain = 'techcrunch.com' | 'medium.com' | 'default';

interface BlogData {
  title: string;
  content: string;
  author: string;
  date: string;
}

const mockBlogs: Record<BlogDomain, BlogData> = {
  'techcrunch.com': {
    title: 'The Future of AI in Software Development',
    content: 'Artificial intelligence is revolutionizing software development. AI tools can now help developers write code faster...',
    author: 'Awais ',
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

export const mockScrapeData = (url: string): BlogData => {
  for (const domain of Object.keys(mockBlogs) as BlogDomain[]) {
    if (url.includes(domain)) return mockBlogs[domain];
  }

  return mockBlogs['default'];
};
