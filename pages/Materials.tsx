import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MATERIALS } from '../constants';

const Materials: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen pb-24">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 border-b border-gray-100 dark:border-gray-800 flex items-center shadow-sm">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors active:scale-95">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-bold flex-1 text-center pr-10">Materiais de Apoio</h1>
      </header>

      {/* Search - Taller for easier tapping */}
      <div className="px-4 py-4 sticky top-[72px] z-10 bg-background-light dark:bg-background-dark">
        <label className="relative flex items-center w-full h-14 rounded-2xl bg-surface-light dark:bg-surface-dark shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus-within:ring-2 focus-within:ring-primary transition-all overflow-hidden">
          <div className="flex items-center justify-center pl-4 pr-3">
            <span className="material-symbols-outlined text-gray-400 text-[24px]">search</span>
          </div>
          <input className="w-full h-full bg-transparent border-none outline-none placeholder:text-gray-400 text-base font-medium" placeholder="Buscar planilha, PDF..." type="text"/>
        </label>
      </div>

      <div className="px-4 flex flex-col gap-8 pb-4">
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Gestão Financeira</h2>
            <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">2 arquivos</span>
          </div>
          <div className="flex flex-col gap-4">
            {MATERIALS.filter(m => m.type === 'xlsx' || m.type === 'pdf').slice(0, 2).map((item) => (
              <div key={item.id} className="group flex items-center gap-4 bg-surface-light dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 active:scale-[0.99] transition-transform">
                <div className={`flex items-center justify-center rounded-2xl shrink-0 w-14 h-14 ${item.type === 'xlsx' ? 'bg-green-100 text-green-600 dark:bg-green-900/30' : 'bg-red-100 text-red-600 dark:bg-red-900/30'}`}>
                  <span className="material-symbols-outlined icon-filled text-[28px]">{item.type === 'xlsx' ? 'table_view' : 'picture_as_pdf'}</span>
                </div>
                <div className="flex-1 min-w-0 py-1">
                  <h3 className="font-bold truncate text-base mb-0.5">{item.title}</h3>
                  <p className="text-sm text-text-muted dark:text-gray-400 truncate">{item.description}</p>
                  <p className="text-[10px] text-gray-400 mt-1.5 uppercase font-bold tracking-wider">{item.type} • {item.size}</p>
                </div>
                <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 dark:bg-white/5 text-primary hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all">
                  <span className="material-symbols-outlined icon-filled text-[24px]">download</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Documentação Clínica</h2>
            <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">3 arquivos</span>
          </div>
          <div className="flex flex-col gap-4">
             {MATERIALS.filter(m => m.type === 'doc' || m.id === '4' || m.id === '5').map((item) => (
              <div key={item.id} className="group flex items-center gap-4 bg-surface-light dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 active:scale-[0.99] transition-transform">
                <div className={`flex items-center justify-center rounded-2xl shrink-0 w-14 h-14 ${item.type === 'doc' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30' : 'bg-red-100 text-red-600 dark:bg-red-900/30'}`}>
                  <span className="material-symbols-outlined icon-filled text-[28px]">{item.type === 'doc' ? 'article' : 'picture_as_pdf'}</span>
                </div>
                <div className="flex-1 min-w-0 py-1">
                  <h3 className="font-bold truncate text-base mb-0.5">{item.title}</h3>
                  <p className="text-sm text-text-muted dark:text-gray-400 truncate">{item.description}</p>
                  <p className="text-[10px] text-gray-400 mt-1.5 uppercase font-bold tracking-wider">{item.type} • {item.size}</p>
                </div>
                <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 dark:bg-white/5 text-primary hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all">
                  <span className="material-symbols-outlined icon-filled text-[24px]">download</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Materials;
