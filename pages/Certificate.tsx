import React from 'react';
import { useNavigate } from 'react-router-dom';

const Certificate: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm">
        <button onClick={() => navigate('/profile')} className="flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
        <h2 className="text-lg font-bold leading-tight flex-1 text-center pr-12">Conclusão</h2>
      </div>

      <div className="relative w-full pt-4 pb-6 px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary animate-pulse">
            <span className="material-symbols-outlined text-[40px]">celebration</span>
          </div>
          <h1 className="tracking-tight text-[32px] font-extrabold leading-tight mb-2">Parabéns, Psicólogo(a)!</h1>
          <p className="text-text-muted dark:text-gray-300 text-base font-normal leading-relaxed max-w-sm mx-auto">
            Você concluiu com sucesso a jornada do curso <span className="font-bold text-green-700 dark:text-primary">Liberdade Psi</span>.
          </p>
        </div>
      </div>

      <div className="px-4 py-2 w-full flex justify-center">
        <div className="relative w-full max-w-md aspect-[1.414/1] bg-white dark:bg-surface-dark shadow-2xl rounded-xl border-4 border-double border-yellow-500/40 p-6 flex flex-col items-center justify-between text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-yellow-500 rounded-tl-lg opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-yellow-500 rounded-br-lg opacity-50"></div>
          
          <div className="relative z-10 w-full flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2 opacity-80">
                <span className="material-symbols-outlined text-green-700 dark:text-green-400 text-xl">workspace_premium</span>
                <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-green-800 dark:text-green-300">Certificado de Conclusão</span>
                <span className="material-symbols-outlined text-green-700 dark:text-green-400 text-xl">workspace_premium</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-1">Liberdade Psi</h3>
              <div className="w-16 h-0.5 bg-yellow-500 mx-auto mb-4"></div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">Certificamos que</p>
              <p className="text-xl md:text-2xl font-bold text-green-900 dark:text-primary italic mb-2">Dra. Ana Silva</p>
            </div>
            
            <div className="flex justify-between items-end w-full mt-4 px-2">
              <div className="text-left">
                <div className="h-px w-20 bg-gray-400 mb-1"></div>
                <p className="text-[9px] font-bold text-gray-600 dark:text-gray-400">Dr. Instrutor</p>
              </div>
              <div className="size-12 rounded-full border-2 border-yellow-500 flex items-center justify-center bg-yellow-500/10 text-yellow-500">
                <span className="material-symbols-outlined text-2xl">verified</span>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-bold text-gray-600 dark:text-gray-400 mb-1">24 Out, 2023</p>
                <div className="h-px w-20 bg-gray-400 ml-auto"></div>
                <p className="text-[8px] text-gray-500 mt-0.5">Data de emissão</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 px-4 pt-8 pb-4">
        <button className="flex w-full items-center justify-center overflow-hidden rounded-xl h-14 bg-primary hover:bg-primary-dark text-black gap-3 px-5 text-base font-bold shadow-lg shadow-primary/20 active:scale-[0.98]">
          <span className="material-symbols-outlined text-[24px]">download</span>
          <span className="truncate">Baixar PDF</span>
        </button>
      </div>
    </div>
  );
};

export default Certificate;
