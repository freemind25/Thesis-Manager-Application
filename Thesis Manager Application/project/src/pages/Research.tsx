import React from 'react';
import { Pencil, BarChart, ArrowRight, SearchIcon, Filter, Download, Upload, Star } from 'lucide-react';

export const Research = () => {
  const researchProjects = [
    { 
      id: 1, 
      title: "Impact of Climate Change on Urban Agriculture", 
      status: "Active", 
      lastUpdated: "May 5, 2025",
      tags: ["Climate", "Urban Studies", "Agriculture"],
      progress: 65
    },
    { 
      id: 2, 
      title: "Neural Networks for Natural Language Processing", 
      status: "Planning", 
      lastUpdated: "May 2, 2025",
      tags: ["AI", "Machine Learning", "NLP"],
      progress: 25
    },
    { 
      id: 3, 
      title: "Socioeconomic Factors in Education Access", 
      status: "Completed", 
      lastUpdated: "Apr 20, 2025",
      tags: ["Education", "Sociology", "Economics"],
      progress: 100
    }
  ];

  const resources = [
    { 
      id: 1, 
      title: "Journal Database Access", 
      description: "Access to over 500 academic journals",
      link: "#" 
    },
    { 
      id: 2, 
      title: "Data Analysis Software", 
      description: "Statistical analysis tools with academic license",
      link: "#" 
    },
    { 
      id: 3, 
      title: "Research Methodology Guides", 
      description: "Comprehensive guides for various research methods",
      link: "#" 
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Research Hub</h1>
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Pencil className="w-4 h-4 mr-1" /> New Project
          </button>
          <button className="flex items-center px-4 py-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <BarChart className="w-4 h-4 mr-1" /> Research Analytics
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-4">
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex-grow">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search research projects, papers, or resources..." 
                className="w-full pl-10 pr-4 py-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <button className="flex items-center px-4 py-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Filter className="w-4 h-4 mr-1" /> Filters
          </button>
          <button className="flex items-center px-4 py-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Download className="w-4 h-4 mr-1" /> Export
          </button>
          <button className="flex items-center px-4 py-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Upload className="w-4 h-4 mr-1" /> Import
          </button>
        </div>

        <div className="space-y-4">
          {researchProjects.map((project) => (
            <div key={project.id} className="border dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium">{project.title}</h3>
                    {project.status === "Completed" && (
                      <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs font-medium">
                        Completed
                      </span>
                    )}
                    {project.status === "Active" && (
                      <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs font-medium">
                        Active
                      </span>
                    )}
                    {project.status === "Planning" && (
                      <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-xs font-medium">
                        Planning
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Progress</div>
                    <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-1">
                      <div 
                        className={`h-2.5 rounded-full ${
                          project.status === "Completed" ? "bg-green-500" : "bg-blue-500"
                        }`} 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    View
                  </button>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                Last updated: {project.lastUpdated}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Papers</h2>
              <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center text-sm">
                View Library <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="p-4 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-medium">Sustainable Urban Development Models in the 21st Century</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Urban Planning Journal, Vol. 45, Issue 3</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Added: May 10, 2025</span>
                    <div className="flex items-center ml-4">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <Star className="h-4 w-4 text-gray-300 dark:text-gray-600" />
                    </div>
                  </div>
                  <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm">View Paper</button>
                </div>
              </div>
              <div className="p-4 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-medium">Advanced Deep Learning Algorithms for Natural Language Processing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Journal of Artificial Intelligence Research, Vol. 12, Issue 2</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Added: May 5, 2025</span>
                    <div className="flex items-center ml-4">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                  <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm">View Paper</button>
                </div>
              </div>
              <div className="p-4 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-medium">Economic Implications of Educational Access in Developing Nations</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Journal of Educational Economics, Vol. 28, Issue 4</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Added: Apr 28, 2025</span>
                    <div className="flex items-center ml-4">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <Star className="h-4 w-4 text-gray-300 dark:text-gray-600" />
                      <Star className="h-4 w-4 text-gray-300 dark:text-gray-600" />
                    </div>
                  </div>
                  <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm">View Paper</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Research Resources</h2>
            <div className="space-y-3">
              {resources.map((resource) => (
                <a 
                  key={resource.id}
                  href={resource.link}
                  className="block p-3 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <h3 className="font-medium">{resource.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{resource.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Upcoming Research Events</h2>
            <div className="space-y-3">
              <div className="p-3 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-medium">Graduate Research Symposium</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">May 25, 2025 • University Conference Center</p>
              </div>
              <div className="p-3 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h3 className="font-medium">Research Methodology Workshop</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">June 2, 2025 • Science Building, Room 302</p>
              </div>
              <div className="p-3 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                <h3 className="font-medium">Academic Publishing Seminar</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">June 15, 2025 • Library Meeting Room</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};