import React from 'react';
import { FileText, Filter, Plus, Clock, BarChart, ArrowRight, Download } from 'lucide-react';

export const Funding = () => {
  const grants = [
    {
      id: 1,
      title: 'Graduate Research Fellowship',
      amount: '$25,000',
      deadline: 'June 15, 2025',
      status: 'Open',
      type: 'Research',
      organization: 'National Science Foundation'
    },
    {
      id: 2,
      title: 'Academic Excellence Scholarship',
      amount: '$15,000',
      deadline: 'July 1, 2025',
      status: 'Open',
      type: 'Merit',
      organization: 'University Graduate School'
    },
    {
      id: 3,
      title: 'International Student Grant',
      amount: '$10,000',
      deadline: 'May 30, 2025',
      status: 'Closing Soon',
      type: 'International',
      organization: 'Global Education Fund'
    },
    {
      id: 4,
      title: 'Department Research Fund',
      amount: '$5,000',
      deadline: 'August 15, 2025',
      status: 'Open',
      type: 'Research',
      organization: 'Department of Computer Science'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Closing Soon':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Closed':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Research':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Merit':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'International':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Funding Opportunities</h1>
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Plus className="w-4 h-4 mr-1" /> New Application
          </button>
          <button className="flex items-center px-4 py-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <BarChart className="w-4 h-4 mr-1" /> Analytics
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-4">
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex-grow">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search grants, scholarships, and funding opportunities..." 
                className="w-full pl-10 pr-4 py-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <FileText className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <button className="flex items-center px-4 py-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Filter className="w-4 h-4 mr-1" /> Filters
          </button>
          <button className="flex items-center px-4 py-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Download className="w-4 h-4 mr-1" /> Export
          </button>
        </div>

        <div className="space-y-4">
          {grants.map((grant) => (
            <div key={grant.id} className="border dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h3 className="text-lg font-medium">{grant.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">{grant.organization}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(grant.status)}`}>
                      {grant.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(grant.type)}`}>
                      {grant.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-xl font-bold text-blue-500">{grant.amount}</div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      Due: {grant.deadline}
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Apply
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
            <h2 className="text-xl font-semibold">Recent Applications</h2>
            <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center text-sm">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="p-4 border dark:border-gray-700 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Research Innovation Grant</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Applied on May 1, 2025</p>
                </div>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-xs font-medium">
                  Under Review
                </span>
              </div>
            </div>
            <div className="p-4 border dark:border-gray-700 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Teaching Excellence Award</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Applied on April 15, 2025</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs font-medium">
                  Approved
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Funding Overview</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <div className="text-sm text-gray-500 dark:text-gray-400">Total Funding Received</div>
                <div className="text-2xl font-bold text-blue-500 mt-1">$45,000</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <div className="text-sm text-gray-500 dark:text-gray-400">Pending Applications</div>
                <div className="text-2xl font-bold text-green-500 mt-1">$30,000</div>
              </div>
            </div>
          </div>

          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Important Dates</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-sm">Next Deadline</div>
                <div className="text-sm font-medium">May 30, 2025</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">Review Meeting</div>
                <div className="text-sm font-medium">June 5, 2025</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">Award Announcement</div>
                <div className="text-sm font-medium">June 15, 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};