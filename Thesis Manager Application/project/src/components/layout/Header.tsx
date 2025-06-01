import React from 'react';
import { Bell, Moon, Search, Sun, User } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useUser } from '../../contexts/UserContext';

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
  sidebarOpen: boolean;
}

export const Header = ({ setSidebarOpen, sidebarOpen }: HeaderProps) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { user } = useUser();

  return (
    <header
      className={`py-3 px-4 flex items-center justify-between shadow-sm z-10
      ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="flex items-center">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg mr-2 md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <div className="text-xl font-bold text-blue-500 flex items-center">
          <span className="hidden md:inline">AssistantDoctoral</span>
          <span className="md:hidden">AD</span>
        </div>
      </div>

      <div className="flex-1 mx-4 hidden md:block">
        <div className={`relative max-w-md mx-auto ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg`}>
          <input
            type="text"
            placeholder="Rechercher des ressources, documents ou conseils..."
            className={`w-full py-2 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
            ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <Bell className="h-5 w-5" />
        </button>
        <button 
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          onClick={toggleTheme}
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        <div className="relative">
          <button className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
              <User className="h-5 w-5" />
            </div>
            <span className="hidden md:inline font-medium">{user?.name || 'Se connecter'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};