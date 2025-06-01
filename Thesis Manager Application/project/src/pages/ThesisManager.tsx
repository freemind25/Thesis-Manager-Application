import React from 'react';
import { BookText, Clock, FileText, Pencil, PlusCircle } from 'lucide-react';

export const ThesisManager = () => {
  const milestones = [
    { id: 1, title: 'Research Proposal', status: 'completed', date: 'Jan 15, 2025' },
    { id: 2, title: 'Literature Review', status: 'completed', date: 'Mar 10, 2025' },
    { id: 3, title: 'Methodology Chapter', status: 'in-progress', date: 'Jun 20, 2025' },
    { id: 4, title: 'Data Collection', status: 'upcoming', date: 'Aug 15, 2025' },
    { id: 5, title: 'Results Analysis', status: 'upcoming', date: 'Oct 1, 2025' },
    { id: 6, title: 'Discussion Chapter', status: 'upcoming', date: 'Nov 15, 2025' },
    { id: 7, title: 'Full Draft Submission', status: 'upcoming', date: 'Jan 10, 2026' },
    { id: 8, title: 'Final Defense', status: 'upcoming', date: 'Mar 1, 2026' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'upcoming':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Thesis Manager</h1>
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <PlusCircle className="w-4 h-4 mr-1" /> New Milestone
          </button>
          <button className="flex items-center px-4 py-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <FileText className="w-4 h-4 mr-1" /> Export Progress
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Thesis Timeline</h2>
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700"></div>
              <div className="space-y-6 ml-2">
                {milestones.map((milestone, index) => (
                  <div key={milestone.id} className="relative pl-8">
                    <div className={`absolute left-0 w-7 h-7 rounded-full flex items-center justify-center ${
                      milestone.status === 'completed' 
                        ? 'bg-green-500 text-white' 
                        : milestone.status === 'in-progress'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                    }`}>
                      {milestone.status === 'completed' ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{milestone.title}</h3>
                        <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="w-3 h-3 mr-1" />
                          {milestone.date}
                        </div>
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(milestone.status)}`}>
                          {milestone.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Current Chapter</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Methodology</h3>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs font-medium">
                  In Progress
                </span>
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex justify-between items-center">
                  <span>Progress</span>
                  <span>60%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="mt-3 flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Last updated: Yesterday</span>
                <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center">
                  <Pencil className="w-3 h-3 mr-1" /> Edit
                </button>
              </div>
            </div>
            <button className="w-full flex items-center justify-center py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <FileText className="w-4 h-4 mr-1" /> Open Document
            </button>
          </div>

          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Committee Feedback</h2>
            <div className="space-y-3">
              <div className="p-3 border dark:border-gray-700 rounded-lg">
                <div className="flex justify-between">
                  <div className="font-medium">Dr. Martinez</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">May 5, 2025</div>
                </div>
                <p className="text-sm mt-1">Your literature review shows excellent progress. Consider expanding the section on theoretical frameworks.</p>
              </div>
              <div className="p-3 border dark:border-gray-700 rounded-lg">
                <div className="flex justify-between">
                  <div className="font-medium">Dr. Johnson</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Apr 28, 2025</div>
                </div>
                <p className="text-sm mt-1">The research questions are well-formulated. I suggest refining the scope of your third question.</p>
              </div>
              <button className="w-full py-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors">
                View All Feedback
              </button>
            </div>
          </div>

          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Resources</h2>
            <div className="space-y-3">
              <a href="#" className="block p-3 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center">
                  <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg text-purple-600 dark:text-purple-300 mr-3">
                    <BookText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Thesis Style Guide</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">University formatting requirements</div>
                  </div>
                </div>
              </a>
              <a href="#" className="block p-3 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg text-blue-600 dark:text-blue-300 mr-3">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Citation Templates</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">APA, MLA, and Chicago formats</div>
                  </div>
                </div>
              </a>
              <a href="#" className="block p-3 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center">
                  <div className="bg-amber-100 dark:bg-amber-900 p-2 rounded-lg text-amber-600 dark:text-amber-300 mr-3">
                    <BookText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Defense Preparation</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Guide for preparing your defense</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};