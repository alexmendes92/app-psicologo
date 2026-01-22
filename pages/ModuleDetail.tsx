import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MODULES } from '../constants';

const ModuleDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const module = MODULES.find(m => m.id === id) || MODULES[0];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-20 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center pr-10">Módulo {id?.replace('m', '')}</h2>
      </header>

      {/* Hero Section */}
      {module.heroImage ? (
        <div className="px-4 py-4 w-full">
          <div className="group relative overflow-hidden rounded-2xl bg-cover bg-center min-h-[240px] shadow-lg" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%), url("${module.heroImage}")` }}>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
              <p className="text-white text-xs font-semibold tracking-wide uppercase">Em Andamento</p>
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end h-full">
              <p className="text-primary font-bold text-sm tracking-widest uppercase mb-1">Planejamento</p>
              <h1 className="text-white text-3xl font-bold leading-tight mb-2">{module.title}</h1>
              <p className="text-gray-200 text-sm font-medium leading-normal line-clamp-2">{module.subtitle}</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${module.progress}%` }}></div>
                </div>
                <span className="text-white text-xs font-bold">{module.progress}%</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="px-4 pt-6 pb-2">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-1">Gestão Clínica</span>
            <h1 className="text-text-main dark:text-white tracking-tight text-3xl font-extrabold leading-tight text-left mb-2">
              {module.title}
            </h1>
            <p className="text-text-main/80 dark:text-gray-400 text-base font-normal leading-relaxed">
              {module.subtitle}
            </p>
          </div>
          <div className="px-4 py-6">
            <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800">
              <div className="flex gap-6 justify-between items-end mb-3">
                <div>
                  <p className="text-text-main dark:text-white text-lg font-bold leading-normal">Seu Progresso</p>
                  <p className="text-text-muted dark:text-gray-400 text-sm">Continue de onde parou</p>
                </div>
                <p className="text-text-main dark:text-white text-2xl font-bold leading-none">{module.progress}%</p>
              </div>
              <div className="relative h-3 w-full rounded-full bg-gray-200 dark:bg-black/40 overflow-hidden">
                <div className="absolute top-0 left-0 h-full rounded-full bg-primary shadow-[0_0_10px_rgba(19,236,91,0.4)]" style={{ width: `${module.progress}%` }}></div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="px-4 pb-2 pt-2">
        <h3 className="text-text-main dark:text-white text-lg font-bold">Aulas do Módulo</h3>
      </div>

      <div className="flex flex-col gap-3 px-4">
        {module.lessons.map((lesson) => (
          <Link key={lesson.id} to={`/lesson/${lesson.id}`} className="group flex items-center gap-4 bg-surface-light dark:bg-surface-dark px-4 py-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 active:scale-[0.98] transition-all cursor-pointer">
            <div className="relative shrink-0">
              <div className={`flex items-center justify-center rounded-xl size-14 ${lesson.completed ? 'bg-primary/20 text-primary-dark dark:text-primary' : 'bg-gray-100 dark:bg-slate-800 text-gray-400'}`}>
                <span className="material-symbols-outlined text-[28px]">
                  {lesson.type === 'video' ? 'play_circle' : lesson.type === 'tool' ? 'build' : 'article'}
                </span>
              </div>
              {lesson.completed && (
                <div className="absolute -bottom-1 -right-1 bg-primary text-background-dark rounded-full p-0.5 border-2 border-surface-light dark:border-surface-dark flex items-center justify-center">
                  <span className="material-symbols-outlined text-[10px] font-bold">check</span>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <p className="text-text-main dark:text-white text-base font-bold leading-tight line-clamp-1 mb-1 group-hover:text-primary transition-colors">
                {lesson.id} {lesson.title}
              </p>
              <div className="flex items-center gap-2 text-text-muted dark:text-gray-400 text-sm">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span>{lesson.duration}</span>
                <span className="text-[8px] opacity-50">●</span>
                <span className="capitalize">{lesson.type === 'video' ? 'Vídeo' : 'Leitura'}</span>
              </div>
            </div>
            <div className="shrink-0">
              <button className={`flex size-10 items-center justify-center rounded-full bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${lesson.completed ? 'text-primary' : 'text-gray-400 dark:text-gray-500'}`}>
                <span className={`material-symbols-outlined text-[28px] ${lesson.completed ? 'icon-filled' : ''}`}>play_arrow</span>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ModuleDetail;
