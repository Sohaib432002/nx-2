'use client';

import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import BlogContent from '../components/BlogContent';
import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';
import { mockScrapeData } from '../utils/mockScrapeData';
import { generateSummary } from '../utils/generateSummary';
import { translateToUrdu } from '../utils/translateToUrdu';
import { BlogData } from '../utils/types';

const BlogSummariser = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [summary, setSummary] = useState('');
  const [urduSummary, setUrduSummary] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      setError('Please enter a valid blog URL');
      return;
    }
    setLoading(true);
    setError('');
    setBlogData(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const scrapedData = mockScrapeData(url);
      setBlogData(scrapedData);
      const generatedSummary = generateSummary(scrapedData.content);
      setSummary(generatedSummary);
      const translatedSummary = translateToUrdu(generatedSummary);
      setUrduSummary(translatedSummary);
    } catch {
      setError('Failed to process the blog. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setUrl('');
    setBlogData(null);
    setSummary('');
    setUrduSummary('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Blog Summariser App</h1>
          <p className="text-gray-600 mt-2">Paste any blog URL to get an AI summary and Urdu translation</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8 space-y-4">
          <form onSubmit={handleSubmit}>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">Blog URL</label>
            <div className="relative">
              <ExternalLink className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                id="url"
                type="url"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/blog-post"
                disabled={loading}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
              />
            </div>
            <div className="flex gap-3 mt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                {loading ? 'Processing...' : 'Summarise Blog'}
              </button>
              {blogData && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  Reset
                </button>
              )}
            </div>
          </form>
        </div>

        {error && <div className="mb-6"><ErrorMessage message={error} /></div>}
        {loading && <LoadingSpinner />}
        {/* {blogData && !loading && <BlogContent data={blogData} summary={summary} urduSummary={urduSummary} />} */}
        {!blogData && !loading && (
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Try these demo URLs:</h3>
            <div className="space-y-2">
              {[
                'https://techcrunch.com/ai-development',
                'https://medium.com/react-guide',
                'https://example.com/digital-transformation',
              ].map((demoUrl) => (
                <button
                  key={demoUrl}
                  onClick={() => setUrl(demoUrl)}
                  className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-white rounded-lg transition-colors duration-200"
                >
                  {demoUrl}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <footer className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-600">
          Built with React • sohaib-code
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BlogSummariser;
