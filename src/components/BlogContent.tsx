
import { FileText, Languages } from 'lucide-react';

type Blog = {
  title: string;
  content: string;
  author: string;
  date: string;
};

type Props = {
  data: Blog;
  summary: string;
  urduSummary: string;
};

const BlogContent = ({ data, summary, urduSummary }: any) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center mb-4">
        <FileText className="w-6 h-6 text-blue-500 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Original Blog</h2>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{data.title}</h3>
      <div className="text-sm text-gray-500 mb-4">
        By {data.author} • {data.date}
      </div>
      <p className="text-gray-700 leading-relaxed">{data.content}</p>
    </div>

    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">AI Summary</h2>
      <p className="text-gray-700 leading-relaxed">{summary}</p>
    </div>

    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Urdu Translation</h2>
      <p className="text-gray-700 leading-relaxed text-right" dir="rtl">{urduSummary}</p>
    </div>
  </div>
);

export default BlogContent;
