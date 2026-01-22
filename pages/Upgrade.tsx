import React from 'react';
import { useNavigate } from 'react-router-dom';

const Upgrade: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-surface-dark text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/20 to-transparent pointer-events-none"></div>
      
      <header className="relative z-10 flex items-center justify-between p-4">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Plano VIP</span>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 flex flex-col items-center px-6 pt-4 pb-24 relative z-10">
        <div className="size-20 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
          <span className="material-symbols-outlined text-4xl text-white">diamond</span>
        </div>

        <h1 className="text-3xl font-extrabold text-center mb-2 leading-tight">
          Acelere seus resultados com a <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Mentoria Premium</span>
        </h1>

        <p className="text-gray-300 text-center text-sm mb-8 max-w-xs leading-relaxed">
          Desbloqueie acesso direto aos especialistas, análises de perfil e grupo exclusivo de networking.
        </p>

        {/* Benefits List */}
        <div className="w-full space-y-4 mb-8">
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">group</span>
            </div>
            <div>
              <h3 className="font-bold text-sm">Grupo de Networking</h3>
              <p className="text-xs text-gray-400">Conexão com psicólogos experientes.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="size-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <span className="material-symbols-outlined">rate_review</span>
            </div>
            <div>
              <h3 className="font-bold text-sm">Análise de Perfil</h3>
              <p className="text-xs text-gray-400">Feedback personalizado do seu Instagram.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="size-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <span className="material-symbols-outlined">live_tv</span>
            </div>
            <div>
              <h3 className="font-bold text-sm">Encontros Quinzenais</h3>
              <p className="text-xs text-gray-400">Tira-dúvidas ao vivo via Zoom.</p>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="w-full bg-gradient-to-b from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 text-center mb-4">
          <p className="text-gray-400 text-sm mb-1 line-through">De R$ 97,00/mês</p>
          <div className="flex items-end justify-center gap-1 mb-2">
            <span className="text-4xl font-bold text-white">R$ 47</span>
            <span className="text-lg font-medium text-gray-300 mb-1">,90</span>
            <span className="text-sm text-gray-400 mb-1">/mês</span>
          </div>
          <p className="text-xs text-primary font-bold bg-primary/10 inline-block px-3 py-1 rounded-full">Oferta válida por 24h</p>
        </div>

        <button className="w-full py-4 bg-primary hover:bg-primary-dark text-black font-extrabold text-lg rounded-xl shadow-lg shadow-primary/20 transition-transform active:scale-[0.98] flex items-center justify-center gap-2">
          Quero ser Premium
          <span className="material-symbols-outlined font-bold">arrow_forward</span>
        </button>
        
        <p className="text-[10px] text-gray-500 mt-4 text-center">
          Cancelamento gratuito a qualquer momento. Garantia de 7 dias.
        </p>
      </main>
    </div>
  );
};

export default Upgrade;