import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: 'Thesis Committee Meeting',
      date: 'May 15, 2025',
      time: '10:00 AM - 11:30 AM',
      location: 'Graduate Studies Office',
      color: 'border-blue-500'
    },
    {
      id: 2,
      title: 'Research Methodology Workshop',
      date: 'May 18, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Science Building, Room 302',
      color: 'border-purple-500'
    },
    {
      id: 3,
      title: 'Department Symposium',
      date: 'May 24, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'University Conference Center',
      color: 'border-amber-500'
    },
    {
      id: 4,
      title: 'Advisor Check-in',
      date: 'May 28, 2025',
      time: '3:30 PM - 4:00 PM',
      location: 'Virtual Meeting (Zoom)',
      color: 'border-green-500'
    }
  ];

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  return (
    <div className="space-y-4">
      <div className="text-center p-3 border-b dark:border-gray-700">
        <h3 className="font-medium">{currentMonth} {currentYear}</h3>
      </div>
      <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
        {events.map((event) => (
          <div 
            key={event.id} 
            className={`p-3 border-l-4 ${event.color} bg-gray-50 dark:bg-gray-700 rounded-lg`}
          >
            <h4 className="font-medium">{event.title}</h4>
            <div className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};