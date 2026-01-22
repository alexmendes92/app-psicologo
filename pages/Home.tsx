import React from 'react';
import { Link } from 'react-router-dom';
import { MODULES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col pb-24">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm pt-4 px-4 pb-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Link to="/profile" className="relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-2lOwMvwucAqi4du3XSPzBRRtz7OsiBlLHGV1s71L2-X4mLLfmch_woklml8gn1J5Fsb-49WcP0ZDsiBvL_YK4AvD_2pWGs6UPiuEGQV5PMjPK6EFsuejBySiG1UZCh9jO0Om-dOOP_gVApK5NS3cVISk55BZJZjU6Pb7MNE2de-ZULumRrbdUQ2c2k0ZEPpWMiFbUXg24GTMgD-JplEUl_mFHv8R6oUWZ2wTVWJW0B5S7gamMgSrKUpwdBt11Gpbc09fdgY-GA" 
                alt="Profile" 
                className="size-12 rounded-full object-cover border-2 border-primary"
              />
              <div className="absolute bottom-0 right-0 size-3 bg-primary rounded-full border-2 border-background-light dark:border-background-dark"></div>
            </Link>
            <div>
              <p className="text-sm font-medium text-text-muted dark:text-gray-400">Bom dia,</p>
              <h2 className="text-xl font-bold leading-tight">Dra. Ana</h2>
            </div>
          </div>
          <Link to="/notifications" className="flex items-center justify-center p-2 rounded-full bg-surface-light dark:bg-surface-dark shadow-sm text-text-main dark:text-white relative hover:scale-105 transition-transform">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-surface-light dark:border-surface-dark"></span>
          </Link>
        </div>
        
        {/* Overall Progress */}
        <div className="w-full bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-text-muted dark:text-gray-400 text-sm font-medium mb-1">Progresso Geral</p>
            <p className="text-2xl font-bold">42% <span className="text-sm font-normal text-text-muted dark:text-gray-400">concluído</span></p>
          </div>
          <div className="relative size-14 rounded-full flex items-center justify-center" style={{ background: 'conic-gradient(#13ecec 42%, #e5e7eb 0)' }}>
            <div className="size-11 bg-surface-light dark:bg-surface-dark rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-xl">trending_up</span>
            </div>
          </div>
        </div>
      </header>

      {/* Events / Mentoring Banner (New) */}
      <section className="mt-4 px-4">
        <Link to="/mentoring" className="block bg-gradient-to-r from-primary/20 to-blue-500/10 rounded-xl p-4 border border-primary/20 relative overflow-hidden group">
          <div className="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4">
            <span className="material-symbols-outlined text-8xl text-primary">event_upcoming</span>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block size-2 rounded-full bg-red-500 animate-pulse"></span>
              <p className="text-xs font-bold uppercase tracking-wide text-primary-dark dark:text-primary">Ao Vivo Hoje</p>
            </div>
            <h3 className="font-bold text-lg text-text-main dark:text-white">Mentoria Q&A: Finanças</h3>
            <div className="flex items-center gap-2 mt-2 text-sm text-text-muted dark:text-gray-300">
              <span className="material-symbols-outlined text-base">schedule</span>
              <span>19:00h</span>
              <span className="bg-surface-light dark:bg-black/30 px-2 py-0.5 rounded text-xs font-semibold ml-1">Zoom</span>
            </div>
          </div>
        </Link>
      </section>

      {/* Continue Watching */}
      <section className="mt-6 px-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold">Continuar Assistindo</h3>
          <Link to="/modules" className="text-xs font-bold text-primary">Ver tudo</Link>
        </div>
        <Link to="/lesson/3.2" className="flex flex-col rounded-xl overflow-hidden shadow-sm bg-surface-light dark:bg-surface-dark border border-slate-100 dark:border-slate-800 group">
          <div className="relative w-full aspect-video">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhzgD0U5X-XMgmZf3X2qT8vk5EaxhkPJ_S763DVhAOlshTEm8_Xej1wIu_VWdKGG0_gD8Q2qbMKCyD4lnDHJ2Cn-HASSOXknghZxTTHpySRBq0Uo7Dlg9nZ_O1CpY7GkN4xf88PNaBkIMlSTi26QxACvh1yQD63BbKM5-FhX9zE2ylnYc-HYowCGXHK1QT6NFsxux9XfC7SZqIO2IEqk5Wc58C2wr6psx7tJH09pgXAu1Bl_ipCeKsGfPY_qrUkQmlV3a6XyZoJA" 
              alt="Lesson Thumbnail" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
              <div className="bg-primary/90 rounded-full p-3 backdrop-blur-sm cursor-pointer group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-text-main icon-filled">play_arrow</span>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-0.5 rounded text-white text-xs font-medium">12:30 left</div>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Módulo 3</span>
            <h4 className="text-lg font-bold leading-tight mt-0.5">Nichagem Estratégica</h4>
            <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-1">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <p className="text-xs text-text-muted dark:text-gray-400 mt-1">Aula 3.2</p>
          </div>
        </Link>
      </section>

      {/* Tools Shortcut */}
      <section className="mt-8 px-4">
        <h3 className="text-lg font-bold mb-3">Ferramentas Úteis</h3>
        <div className="grid grid-cols-3 gap-3">
          <Link to="/tools/calculator" className="flex flex-col items-center gap-2 p-3 rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-colors active:scale-95">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">calculate</span>
            </div>
            <span className="text-xs font-semibold text-center leading-tight">Calc. Hora Clínica</span>
          </Link>
          <Link to="/tools" className="flex flex-col items-center gap-2 p-3 rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-colors active:scale-95">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">gavel</span>
            </div>
            <span className="text-xs font-semibold text-center leading-tight">Carta Descred.</span>
          </Link>
          <Link to="/tools" className="flex flex-col items-center gap-2 p-3 rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-colors active:scale-95">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">edit_calendar</span>
            </div>
            <span className="text-xs font-semibold text-center leading-tight">Planejador Conteúdo</span>
          </Link>
        </div>
      </section>

      {/* Upgrade Banner (New) */}
      <section className="mt-8 px-4">
        <Link to="/upgrade" className="flex items-center justify-between p-4 bg-surface-light dark:bg-surface-dark rounded-xl border border-primary/30 shadow-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="size-10 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white shadow-md">
              <span className="material-symbols-outlined">diamond</span>
            </div>
            <div>
              <h4 className="font-bold text-sm">Seja Premium</h4>
              <p className="text-xs text-text-muted dark:text-gray-400">Acesse mentorias exclusivas.</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-primary relative z-10">chevron_right</span>
        </Link>
      </section>

      {/* Materials Shortcut */}
      <section className="mt-8 px-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold">Materiais Recentes</h3>
          <Link to="/materials" className="text-xs font-bold text-primary">Ver todos</Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between p-3 rounded-lg bg-surface-light dark:bg-surface-dark border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">table_chart</span>
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-bold">Planilha Financeira 2024.xlsx</p>
                <p className="text-xs text-text-muted dark:text-gray-400">1.1 MB • Módulo Financeiro</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-400">download</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;