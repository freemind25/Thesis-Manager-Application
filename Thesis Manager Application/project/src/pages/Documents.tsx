import React from 'react';
import { FileText, Filter, Plus, Download, Upload, Search, MoreVertical, Star, Clock, ArrowRight } from 'lucide-react';

export const Documents = () => {
  const documents = [
    {
      id: 1,
      title: 'Research Proposal Draft',
      type: 'Document',
      lastModified: 'May 10, 2025',
      size: '2.4 MB',
      shared: true,
      status: 'In Review'
    },
    {
      id: 2,
      title: 'Literature Review Notes',
      type: 'Notes',
      lastModified: 'May 8, 2025',
      size: '1.1 MB',
      shared: false,
      status: 'Draft'
    },
    {
      id: 3,
      title: 'Data Analysis Results',
      type: 'Spreadsheet',
      lastModified: 'May 5, 2025',
      size: '4.2 MB',
      shared: true,
      status: 'Final'
    },
    {
      id: 4,
      title: 'Methodology Chapter',
      type: 'Document',
      lastModified: 'May 1, 2025',
      size: '3.7 MB',
      shared: false,
      status: 'In Progress'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Final':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'In Review':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Document':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Notes':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Spreadsheet':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Document Manager</h1>
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Plus className="w-4 h-4 mr-1" /> New Document
          </button>
          <button className="flex items-center px-4 py-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Upload className="w-4 h-4 mr-1" /> Upload
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-4">
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex-grow">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search documents..." 
                className="w-full pl-10 pr-4 py-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <button className="flex items-center px-4 py-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Filter className="w-4 h-4 mr-1" /> Filter
          </button>
          <button className="flex items-center px-4 py-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Download className="w-4 h-4 mr-1" /> Export
          </button>
        </div>

        <div className="space-y-4">
          {documents.map((doc) => (
            <div key={doc.id} className="border dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div className="flex items-center">
                  <div className="mr-4">
                    <FileText className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">{doc.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(doc.type)}`}>
                        {doc.type}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                        {doc.status}
                      </span>
                      {doc.shared && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs font-medium">
                          Shared
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {doc.lastModified}
                    </div>
                    <div className="mt-1">{doc.size}</div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 border dark:border-gray-700 rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center text-sm">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="p-4 border dark:border-gray-700 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Research Proposal Updated</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Added new section on methodology</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">2 hours ago</div>
                </div>
              </div>
            </div>
            <div className="p-4 border dark:border-gray-700 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Literature Review Shared</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Shared with Dr. Martinez</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">Yesterday</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Storage</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Used Space</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  15 GB of 20 GB used
                </div>
              </div>
              <button className="w-full py-2 text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                Upgrade Storage
              </button>
            </div>
          </div>

          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Starred Documents
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Recent Files
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Downloads
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};