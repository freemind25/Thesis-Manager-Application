import React from 'react';
import { CheckCircle, Clock, Edit, FileText, MoreVertical } from 'lucide-react';

export const TaskList = () => {
  const tasks = [
    {
      id: 1,
      title: 'Submit Research Proposal',
      dueDate: 'May 15, 2025',
      category: 'Thesis',
      priority: 'high',
      icon: <FileText className="w-4 h-4" />,
      status: 'pending'
    },
    {
      id: 2,
      title: 'Literature Review Draft',
      dueDate: 'May 28, 2025',
      category: 'Research',
      priority: 'medium',
      icon: <Edit className="w-4 h-4" />,
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'Faculty Research Grant Application',
      dueDate: 'June 10, 2025',
      category: 'Funding',
      priority: 'medium',
      icon: <FileText className="w-4 h-4" />,
      status: 'pending'
    },
    {
      id: 4,
      title: 'Mid-term Progress Meeting',
      dueDate: 'June 15, 2025',
      category: 'Meeting',
      priority: 'high',
      icon: <Clock className="w-4 h-4" />,
      status: 'scheduled'
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Thesis':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Research':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Funding':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Meeting':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div key={task.id} className="p-3 border dark:border-gray-700 rounded-lg flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-3">
              <input 
                type="checkbox" 
                className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <div className="font-medium">{task.title}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center">
                <span className="flex items-center mr-2">
                  <Clock className="w-3 h-3 mr-1" /> Due: {task.dueDate}
                </span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(task.category)}`}>
                  {task.category}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
            <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
      <button className="w-full py-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors">
        + Add New Task
      </button>
    </div>
  );
};