import React from 'react';
import { Link } from 'react-router-dom';

const Tools: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 border-b border-gray-100 dark:border-gray-800">
        <h1 className="text-xl font-bold">Ferramentas Práticas</h1>
      </header>

      <div className="p-4 flex flex-col gap-6">
        
        {/* Seção: Marketing e Atração */}
        <section>
          <h2 className="text-sm font-bold text-text-muted dark:text-gray-400 uppercase tracking-wide mb-3 px-1">Marketing & Atração</h2>
          <div className="grid grid-cols-1 gap-4">
            {/* Criador de Anúncio */}
            <Link to="/tools/ad-creator" className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden group active:scale-[0.98] transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity">
                <span className="material-symbols-outlined text-[80px]">campaign</span>
              </div>
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">Criador de Anúncio</h3>
                  <p className="text-blue-50 text-xs mb-3 max-w-[80%]">Google Meu Negócio otimizado.</p>
                  <div className="inline-flex items-center gap-1 bg-white/20 px-3 py-1.5 rounded-lg text-xs font-bold">
                    <span className="material-symbols-outlined text-sm">auto_awesome</span>
                    Acessar
                  </div>
                </div>
              </div>
            </Link>

            {/* Criador de Posts (NOVO) */}
            <Link to="/tools/post-creator" className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden group active:scale-[0.98] transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity">
                <span className="material-symbols-outlined text-[80px]">post_add</span>
              </div>
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">Gerador de Posts</h3>
                  <p className="text-purple-50 text-xs mb-3 max-w-[80%]">Legendas e ideias para Instagram.</p>
                  <div className="inline-flex items-center gap-1 bg-white/20 px-3 py-1.5 rounded-lg text-xs font-bold">
                    <span className="material-symbols-outlined text-sm">edit_square</span>
                    Criar Conteúdo
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Seção: Gestão Clínica */}
        <section>
          <h2 className="text-sm font-bold text-text-muted dark:text-gray-400 uppercase tracking-wide mb-3 px-1">Gestão Clínica</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link to="/tools/session-notes" className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:border-primary/50 transition-all flex flex-col gap-3 group">
              <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
                <span className="material-symbols-outlined">clinical_notes</span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-text-main dark:text-white leading-tight">Notas de Sessão</h3>
                <p className="text-[10px] text-text-muted dark:text-gray-400 mt-1">Prontuário Rápido</p>
              </div>
            </Link>

            <Link to="/tools/contract-generator" className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:border-primary/50 transition-all flex flex-col gap-3 group">
              <div className="size-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                <span className="material-symbols-outlined">contract</span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-text-main dark:text-white leading-tight">Gerar Contrato</h3>
                <p className="text-[10px] text-text-muted dark:text-gray-400 mt-1">Terapêutico</p>
              </div>
            </Link>

            <Link to="/tools/calculator" className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:border-primary/50 transition-all flex flex-col gap-3 group">
              <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined">calculate</span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-text-main dark:text-white leading-tight">Calc. Hora Clínica</h3>
                <p className="text-[10px] text-text-muted dark:text-gray-400 mt-1">Financeiro</p>
              </div>
            </Link>

            <Link to="/tools/fee-calculator" className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:border-primary/50 transition-all flex flex-col gap-3 group">
              <div className="size-10 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-text-main dark:text-white leading-tight">Reajuste Anual</h3>
                <p className="text-[10px] text-text-muted dark:text-gray-400 mt-1">Honorários</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Ferramentas Rápidas */}
        <section>
          <h2 className="text-sm font-bold text-text-muted dark:text-gray-400 uppercase tracking-wide mb-3 px-1">Utilitários</h2>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 p-4">
            <h3 className="font-bold text-base mb-2">Carta de Descredenciamento</h3>
            <p className="text-xs text-text-muted dark:text-gray-400 mb-4">Gere um documento formal para sair dos convênios.</p>
            <div className="flex gap-2">
              <input placeholder="Nome do Convênio" className="flex-1 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"/>
              <button className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-text-main dark:text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors">
                Gerar
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tools;