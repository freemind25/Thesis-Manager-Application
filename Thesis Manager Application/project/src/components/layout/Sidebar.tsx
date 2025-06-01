import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BookOpenText, 
  Calendar, 
  FileText, 
  Folders, 
  GraduationCap, 
  LayoutDashboard, 
  LifeBuoy, 
  Settings, 
  Users, 
  X 
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const { isDarkMode } = useTheme();
  
  const menuItems = [
    { name: 'Tableau de bord', path: '/', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Gestionnaire de thèse', path: '/these', icon: <BookOpenText className="w-5 h-5" /> },
    { name: 'Recherche', path: '/recherche', icon: <FileText className="w-5 h-5" /> },
    { name: 'Conseil', path: '/conseil', icon: <LifeBuoy className="w-5 h-5" /> },
    { name: 'Calendrier', path: '/calendrier', icon: <Calendar className="w-5 h-5" /> },
    { name: 'Financement', path: '/financement', icon: <GraduationCap className="w-5 h-5" /> },
    { name: 'Communauté', path: '/communaute', icon: <Users className="w-5 h-5" /> },
    { name: 'Documents', path: '/documents', icon: <Folders className="w-5 h-5" /> },
    { name: 'Paramètres', path: '/parametres', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <>
      {open && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      
      <aside
        className={`fixed md:relative inset-y-0 left-0 z-30 w-64 transform ${
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } transition-transform duration-300 ease-in-out flex-none ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        } shadow-lg md:shadow-none`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <h2 className="text-xl font-bold text-blue-500">AssistantDoctoral</h2>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-md md:hidden focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-500 text-white'
                        : `${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`
                    }`
                  }
                  onClick={() => window.innerWidth < 768 && setOpen(false)}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};