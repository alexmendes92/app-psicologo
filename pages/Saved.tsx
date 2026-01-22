import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Saved: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'aulas' | 'posts'>('aulas');

  const savedLessons = [
    { id: 1, title: 'Nichagem Estratégica', module: 'Módulo 3', duration: '22 min' },
    { id: 2, title: 'Fechamento no WhatsApp', module: 'Módulo 4', duration: '12 min' }
  ];

  const savedPosts = [
    { id: 1, author: 'Carlos Mendez', content: 'Bibliografia sobre TCC...', likes: 12 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold">Itens Salvos</h1>
        </div>

        <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <button 
            onClick={() => setActiveTab('aulas')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'aulas' ? 'bg-white dark:bg-surface-dark shadow-sm text-text-main dark:text-white' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
          >
            Aulas
          </button>
          <button 
            onClick={() => setActiveTab('posts')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'posts' ? 'bg-white dark:bg-surface-dark shadow-sm text-text-main dark:text-white' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
          >
            Posts
          </button>
        </div>
      </header>

      <div className="p-4 flex flex-col gap-4">
        {activeTab === 'aulas' ? (
          savedLessons.map(lesson => (
            <div key={lesson.id} className="flex items-center gap-4 p-4 bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined icon-filled">bookmark</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-primary font-bold uppercase tracking-wide mb-0.5">{lesson.module}</p>
                <h3 className="font-bold text-sm text-text-main dark:text-white truncate">{lesson.title}</h3>
                <p className="text-xs text-text-muted dark:text-gray-400 mt-1">{lesson.duration} • Vídeo</p>
              </div>
              <button className="text-gray-400 hover:text-red-500">
                <span className="material-symbols-outlined icon-filled">delete</span>
              </button>
            </div>
          ))
        ) : (
          savedPosts.map(post => (
            <div key={post.id} className="p-4 bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="size-6 rounded-full bg-gray-200"></div>
                <span className="text-xs font-bold text-text-main dark:text-white">{post.author}</span>
              </div>
              <p className="text-sm text-text-secondary dark:text-gray-300 mb-3 line-clamp-2">"{post.content}"</p>
              <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <span className="material-symbols-outlined text-[14px]">favorite</span> {post.likes}
                </div>
                <button className="text-primary text-xs font-bold">Ver post</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Saved;