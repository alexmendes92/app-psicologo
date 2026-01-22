import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    return currentPath === path || (path !== '/home' && currentPath.startsWith(path));
  };

  const navItems = [
    { path: '/home', icon: 'home', label: 'Início' },
    { path: '/modules', icon: 'school', label: 'Cursos' },
    { path: '/tools', icon: 'construction', label: 'Ferramentas' },
    { path: '/profile', icon: 'person', label: 'Perfil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-safe pt-1 transition-all duration-300">
      <div className="flex justify-around items-center h-16 sm:h-20">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center w-full h-full group active:scale-95 transition-transform ${
              isActive(item.path)
                ? 'text-primary'
                : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
            }`}
          >
            <div className={`p-1.5 rounded-full transition-colors ${isActive(item.path) ? 'bg-primary/10' : 'bg-transparent'}`}>
              <span
                className={`material-symbols-outlined text-[26px] sm:text-[28px] ${isActive(item.path) ? 'icon-filled' : ''}`}
              >
                {item.icon}
              </span>
            </div>
            <span className={`text-[10px] sm:text-xs font-medium mt-0.5 ${isActive(item.path) ? 'font-bold' : ''}`}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>
      {/* Spacer for iPhone Home Indicator if needed, handled by pb-safe usually */}
    </nav>
  );
};

export default BottomNav;