import React from 'react';
import { Calendar, Clock, Plus, Filter, MoreVertical } from 'lucide-react';

export const Scheduler = () => {
  const events = [
    {
      id: 1,
      title: 'Thesis Committee Meeting',
      date: 'May 15, 2025',
      time: '10:00 AM - 11:30 AM',
      location: 'Graduate Studies Office',
      type: 'Meeting',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Research Methodology Workshop',
      date: 'May 18, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Science Building, Room 302',
      type: 'Workshop',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Department Symposium',
      date: 'May 24, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'University Conference Center',
      type: 'Conference',
      priority: 'high'
    },
    {
      id: 4,
      title: 'Advisor Check-in',
      date: 'May 28, 2025',
      time: '3:30 PM - 4:00 PM',
      location: 'Virtual Meeting (Zoom)',
      type: 'Meeting',
      priority: 'medium'
    }
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Meeting':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Workshop':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Conference':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Schedule Manager</h1>
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Plus className="w-4 h-4 mr-1" /> New Event
          </button>
          <button className="flex items-center px-4 py-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Filter className="w-4 h-4 mr-1" /> Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="p-4 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{event.title}</h3>
                      <div className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(event.priority)}`}>
                        {event.priority}
                      </span>
                      <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Calendar</h2>
            <div className="text-center p-3 border-b dark:border-gray-700">
              <h3 className="font-medium">May 2025</h3>
            </div>
            {/* Calendar placeholder - would be replaced with a proper calendar component */}
            <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400">
              Calendar Component
            </div>
          </div>

          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                Schedule Meeting
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                View Month
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Set Reminder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};