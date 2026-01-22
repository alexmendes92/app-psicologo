import React from 'react';
import { Link } from 'react-router-dom';
import { MODULES } from '../constants';

const Modules: React.FC = () => {
  return (
    <div className="flex flex-col pb-24">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 border-b border-gray-100 dark:border-gray-800">
        <h1 className="text-xl font-bold">Módulos do Curso</h1>
      </header>

      <div className="flex flex-col gap-4 p-4">
        {MODULES.map((module) => (
          <Link key={module.id} to={`/module/${module.id}`} className="group bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
            <div className="flex items-center gap-4">
              <div className={`flex items-center justify-center rounded-xl size-12 shrink-0 ${module.colorClass.replace('text-', 'bg-').replace('600', '100')} dark:bg-opacity-20`}>
                <span className={`material-symbols-outlined ${module.colorClass.split(' ')[1]}`}>{module.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-base truncate">{module.title}</p>
                <p className="text-sm text-text-muted dark:text-gray-400 truncate">{module.subtitle}</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex-1 h-1.5 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${module.progress}%` }}></div>
                  </div>
                  <span className="text-xs font-bold text-gray-400">{module.progress}%</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-gray-300 dark:text-gray-600">chevron_right</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Modules;
