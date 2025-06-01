import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
}

export const ResourceCard = ({ title, description, category }: ResourceCardProps) => {
  const getCategoryIcon = (category: string) => {
    return <BookOpen className="w-4 h-4" />;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Research':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Writing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Funding':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Data':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div className="border dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getCategoryColor(category)}`}>
          {getCategoryIcon(category)} {category}
        </span>
        <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm flex items-center">
          View <ExternalLink className="w-3 h-3 ml-1" />
        </button>
      </div>
    </div>
  );
};