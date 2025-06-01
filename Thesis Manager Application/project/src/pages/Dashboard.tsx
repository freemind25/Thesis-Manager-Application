import React from 'react';
import { ArrowRight, Award, BookCheck, Calendar, FileCheck, Milestone, Star } from 'lucide-react';
import { ProgressCard } from '../components/dashboard/ProgressCard';
import { UpcomingEvents } from '../components/dashboard/UpcomingEvents';
import { TaskList } from '../components/dashboard/TaskList';
import { useUser } from '../contexts/UserContext';
import { ResourceCard } from '../components/dashboard/ResourceCard';

export const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
        <h2 className="text-xl font-semibold">Welcome back, {user?.name || 'Student'}</h2>
        <p className="mt-1">You're making good progress on your academic journey</p>
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="bg-white/10 rounded-lg p-3 flex items-center backdrop-blur-sm">
            <Milestone className="w-5 h-5 mr-2" />
            <span>3 milestones completed this month</span>
          </div>
          <div className="bg-white/10 rounded-lg p-3 flex items-center backdrop-blur-sm">
            <BookCheck className="w-5 h-5 mr-2" />
            <span>5 research papers reviewed</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <ProgressCard 
          title="Thesis Progress" 
          percentage={68} 
          icon={<FileCheck className="w-6 h-6" />} 
          color="bg-blue-500" 
        />
        <ProgressCard 
          title="Credit Hours" 
          percentage={75} 
          icon={<BookCheck className="w-6 h-6" />} 
          color="bg-teal-500" 
        />
        <ProgressCard 
          title="Research Goals" 
          percentage={42} 
          icon={<Star className="w-6 h-6" />} 
          color="bg-amber-500" 
        />
        <ProgressCard 
          title="Grant Applications" 
          percentage={30} 
          icon={<Award className="w-6 h-6" />} 
          color="bg-purple-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Upcoming Deadlines</h2>
              <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center text-sm">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <TaskList />
          </div>

          <div className="border dark:border-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Helpful Resources</h2>
              <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center text-sm">
                Browse Library <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ResourceCard 
                title="Research Methodology Guide"
                description="Comprehensive guide to research methodologies for graduate students"
                category="Research"
              />
              <ResourceCard 
                title="Thesis Writing Workshop"
                description="Step-by-step guidance for structuring and writing your thesis"
                category="Writing"
              />
              <ResourceCard 
                title="Grant Proposal Templates"
                description="Successful examples and templates for research grant proposals"
                category="Funding"
              />
              <ResourceCard 
                title="Statistical Analysis Tools"
                description="Overview of tools and software for academic research data analysis"
                category="Data"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Calendar</h2>
              <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-1" /> Schedule
              </button>
            </div>
            <UpcomingEvents />
          </div>

          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Academic Advisor</h2>
            <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-500 dark:text-blue-300 mr-3">
                <span className="text-xl font-bold">DR</span>
              </div>
              <div>
                <h3 className="font-medium">Dr. Rebecca Martinez</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Next meeting: Thursday, 2:00 PM</p>
              </div>
            </div>
            <button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors">
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};