import React from 'react';
import { COMMUNITY_POSTS } from '../constants';

const Community: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen pb-28"> {/* Increased bottom padding for nav + FAB */}
      <header className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 p-4 flex justify-between items-center shadow-sm">
        <h2 className="text-xl font-bold tracking-tight">Comunidade</h2>
        <div className="flex items-center gap-4">
          <button className="p-2 -mr-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors active:scale-95">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-2lOwMvwucAqi4du3XSPzBRRtz7OsiBlLHGV1s71L2-X4mLLfmch_woklml8gn1J5Fsb-49WcP0ZDsiBvL_YK4AvD_2pWGs6UPiuEGQV5PMjPK6EFsuejBySiG1UZCh9jO0Om-dOOP_gVApK5NS3cVISk55BZJZjU6Pb7MNE2de-ZULumRrbdUQ2c2k0ZEPpWMiFbUXg24GTMgD-JplEUl_mFHv8R6oUWZ2wTVWJW0B5S7gamMgSrKUpwdBt11Gpbc09fdgY-GA" 
            alt="User" 
            className="size-9 rounded-full object-cover border border-gray-200 dark:border-gray-700"
          />
        </div>
      </header>

      {/* Filters - Optimized touch targets */}
      <div className="flex gap-3 px-4 py-4 overflow-x-auto no-scrollbar scroll-smooth">
        {['Todos', 'Dúvidas Técnicas', 'Casos de Sucesso', 'Networking'].map((filter, idx) => (
          <button 
            key={filter}
            className={`flex h-10 shrink-0 items-center justify-center px-5 rounded-full text-sm font-medium transition-all active:scale-95 whitespace-nowrap ${
              idx === 0 
                ? 'bg-primary text-black font-bold shadow-md shadow-primary/20' 
                : 'bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-main dark:text-gray-300'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Composer */}
      <div className="px-4 pb-6">
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="flex gap-3">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-2lOwMvwucAqi4du3XSPzBRRtz7OsiBlLHGV1s71L2-X4mLLfmch_woklml8gn1J5Fsb-49WcP0ZDsiBvL_YK4AvD_2pWGs6UPiuEGQV5PMjPK6EFsuejBySiG1UZCh9jO0Om-dOOP_gVApK5NS3cVISk55BZJZjU6Pb7MNE2de-ZULumRrbdUQ2c2k0ZEPpWMiFbUXg24GTMgD-JplEUl_mFHv8R6oUWZ2wTVWJW0B5S7gamMgSrKUpwdBt11Gpbc09fdgY-GA" 
              alt="User" 
              className="size-10 rounded-full object-cover shrink-0"
            />
            <textarea className="flex-1 bg-transparent border-none resize-none p-2 text-base placeholder-gray-400 focus:ring-0 min-h-[60px]" placeholder="Compartilhe algo com a turma..."></textarea>
          </div>
          <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100 dark:border-gray-800">
            <div className="flex gap-1 text-gray-400">
              <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors active:bg-black/10"><span className="material-symbols-outlined text-[22px]">image</span></button>
              <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors active:bg-black/10"><span className="material-symbols-outlined text-[22px]">link</span></button>
            </div>
            <button className="px-5 py-2 bg-primary hover:bg-primary-dark text-black text-sm font-bold rounded-xl transition-transform active:scale-95 shadow-sm">Publicar</button>
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="flex flex-col gap-4 px-4">
        {COMMUNITY_POSTS.map((post) => (
          <article key={post.id} className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="p-4 flex gap-3">
              <img 
                src={post.user.avatar} 
                alt={post.user.name} 
                className="size-12 rounded-full object-cover shrink-0 border-2 border-primary/20"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <div className="truncate">
                    <h3 className="font-bold leading-tight truncate">{post.user.name}</h3>
                    <p className="text-xs text-text-muted dark:text-gray-400">{post.user.role} • {post.time}</p>
                  </div>
                  <span className={`shrink-0 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide ${post.type === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'}`}>
                    {post.type === 'success' ? 'Caso de Sucesso' : 'Dúvida'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="px-4 pb-3">
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{post.content}</p>
              {post.image && (
                <div className="mt-3 rounded-xl overflow-hidden h-52 w-full bg-gray-100 dark:bg-gray-800">
                  <img src={post.image} alt="Post attachment" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            {/* Action Bar with larger touch targets */}
            <div className="px-2 py-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between mt-1">
              <div className="flex gap-4">
                <button className="flex items-center gap-2 group text-gray-500 hover:text-red-500 transition-colors p-2 rounded-lg active:bg-gray-100 dark:active:bg-gray-800">
                  <span className="material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform">favorite</span>
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 group text-gray-500 hover:text-primary transition-colors p-2 rounded-lg active:bg-gray-100 dark:active:bg-gray-800">
                  <span className="material-symbols-outlined text-[22px]">chat_bubble</span>
                  <span className="text-sm font-medium">{post.comments}</span>
                </button>
              </div>
              <button className="text-gray-400 hover:text-primary transition-colors p-2 rounded-lg active:bg-gray-100 dark:active:bg-gray-800">
                <span className="material-symbols-outlined text-[22px]">bookmark</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* FAB - Positioned above Bottom Nav */}
      <div className="fixed bottom-20 right-4 z-40 md:hidden">
        <button className="bg-primary text-black shadow-lg shadow-primary/30 rounded-full w-14 h-14 flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-[28px]">add</span>
        </button>
      </div>
    </div>
  );
};

export default Community;
