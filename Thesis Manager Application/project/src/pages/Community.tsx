import React from 'react';
import { Users, Search, Filter, MessageCircle, UserPlus, Star, Calendar } from 'lucide-react';

export const Community = () => {
  const members = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      role: 'Professor',
      department: 'Computer Science',
      interests: ['AI', 'Machine Learning', 'Data Science'],
      status: 'online'
    },
    {
      id: 2,
      name: 'James Wilson',
      role: 'PhD Student',
      department: 'Physics',
      interests: ['Quantum Computing', 'Theoretical Physics'],
      status: 'offline'
    },
    {
      id: 3,
      name: 'Dr. Maria Garcia',
      role: 'Research Fellow',
      department: 'Biology',
      interests: ['Genetics', 'Molecular Biology'],
      status: 'online'
    },
    {
      id: 4,
      name: 'Alex Thompson',
      role: 'Masters Student',
      department: 'Mathematics',
      interests: ['Number Theory', 'Cryptography'],
      status: 'away'
    }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Research Methodology Best Practices',
      author: 'Dr. Sarah Chen',
      replies: 15,
      views: 234,
      lastActivity: '2 hours ago'
    },
    {
      id: 2,
      title: 'Upcoming Graduate Research Symposium',
      author: 'James Wilson',
      replies: 28,
      views: 456,
      lastActivity: '1 day ago'
    },
    {
      id: 3,
      title: 'Interdisciplinary Research Opportunities',
      author: 'Dr. Maria Garcia',
      replies: 42,
      views: 789,
      lastActivity: '3 days ago'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Graduate Research Workshop',
      date: 'May 20, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Virtual Meeting'
    },
    {
      id: 2,
      title: 'Academic Writing Seminar',
      date: 'May 25, 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Library Conference Room'
    },
    {
      id: 3,
      title: 'Networking Mixer',
      date: 'June 1, 2025',
      time: '5:00 PM - 7:00 PM',
      location: 'Graduate Student Center'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Graduate Community</h1>
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <UserPlus className="w-4 h-4 mr-1" /> Connect
          </button>
          <button className="flex items-center px-4 py-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <MessageCircle className="w-4 h-4 mr-1" /> Message
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Discussion Forums</h2>
              <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center text-sm">
                New Topic <MessageCircle className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="p-4 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{discussion.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Started by {discussion.author}</p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <div>{discussion.replies} replies</div>
                      <div>{discussion.views} views</div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Last activity: {discussion.lastActivity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border dark:border-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Community Events</h2>
              <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center text-sm">
                View Calendar <Calendar className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="p-4 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Members</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search members..."
                  className="pl-8 pr-4 py-1 border dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <Search className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div className="space-y-4">
              {members.map((member) => (
                <div key={member.id} className="p-3 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-500 dark:text-blue-300">
                        <Users className="w-5 h-5" />
                      </div>
                      <div className="ml-3">
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{member.role}</div>
                      </div>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      member.status === 'online' ? 'bg-green-500' :
                      member.status === 'away' ? 'bg-yellow-500' :
                      'bg-gray-500'
                    }`} />
                  </div>
                  <div className="mt-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{member.department}</div>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {member.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Featured Resources</h2>
            <div className="space-y-3">
              <a href="#" className="block p-3 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <div>
                    <div className="font-medium">Research Guidelines</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Updated documentation</div>
                  </div>
                </div>
              </a>
              <a href="#" className="block p-3 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <div>
                    <div className="font-medium">Collaboration Tools</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Available resources</div>
                  </div>
                </div>
              </a>
              <a href="#" className="block p-3 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <div>
                    <div className="font-medium">Mentorship Program</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Connect with mentors</div>
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