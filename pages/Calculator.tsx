import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Calculator: React.FC = () => {
  const navigate = useNavigate();
  const [fixedCosts, setFixedCosts] = useState(2500);
  const [salary, setSalary] = useState(8000);
  const [sessions, setSessions] = useState(20);
  const [reserve, setReserve] = useState(10);
  const [profit, setProfit] = useState(15);

  const calculateHourlyRate = () => {
    const monthlyTotal = fixedCosts + salary;
    const monthlyRevenueNeeded = monthlyTotal / (1 - (reserve + profit) / 100);
    const sessionsPerMonth = sessions * 4;
    return (monthlyRevenueNeeded / sessionsPerMonth).toFixed(2);
  };

  const hourlyRate = calculateHourlyRate();
  const monthlyRevenue = (parseFloat(hourlyRate) * sessions * 4).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-8">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold">Calculadora</h1>
        <button className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-text-muted">
          <span className="material-symbols-outlined">restart_alt</span>
        </button>
      </header>

      <div className="p-4 space-y-6 max-w-lg mx-auto w-full">
        <div>
          <h2 className="text-2xl font-bold leading-tight">Hora-Clínica Ideal</h2>
          <p className="text-sm text-text-muted dark:text-gray-400">Defina suas metas financeiras.</p>
        </div>

        {/* Inputs */}
        <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-5 space-y-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
            <h3 className="font-bold">Custos & Metas</h3>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-text-muted dark:text-gray-400 uppercase tracking-wide">Custos Fixos Mensais</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">R$</span>
                <input 
                  type="number" 
                  value={fixedCosts} 
                  onChange={(e) => setFixedCosts(Number(e.target.value))}
                  className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg py-3 pl-10 pr-4 font-semibold focus:ring-2 focus:ring-primary/50 outline-none" 
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-text-muted dark:text-gray-400 uppercase tracking-wide">Pró-labore (Desejado)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">R$</span>
                <input 
                  type="number" 
                  value={salary} 
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg py-3 pl-10 pr-4 font-semibold focus:ring-2 focus:ring-primary/50 outline-none" 
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-text-muted dark:text-gray-400 uppercase tracking-wide">Reserva %</label>
                <input 
                  type="number" 
                  value={reserve} 
                  onChange={(e) => setReserve(Number(e.target.value))}
                  className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg py-3 px-4 font-semibold focus:ring-2 focus:ring-primary/50 outline-none" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-text-muted dark:text-gray-400 uppercase tracking-wide">Lucro %</label>
                <input 
                  type="number" 
                  value={profit} 
                  onChange={(e) => setProfit(Number(e.target.value))}
                  className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg py-3 px-4 font-semibold focus:ring-2 focus:ring-primary/50 outline-none" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sessions Slider */}
        <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-5">
          <div className="flex items-center justify-between mb-4">
            <label className="font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">calendar_month</span>
              Sessões por Semana
            </label>
            <div className="bg-primary/10 text-primary-dark dark:text-primary px-3 py-1 rounded-md font-bold text-sm">
              {sessions} sessões
            </div>
          </div>
          <input 
            type="range" 
            min="1" 
            max="40" 
            value={sessions} 
            onChange={(e) => setSessions(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary" 
          />
          <div className="flex justify-between text-[10px] text-gray-400 font-medium uppercase tracking-wide mt-2">
            <span>5 / sem</span>
            <span>40 / sem</span>
          </div>
        </section>

        {/* Result */}
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-lg shadow-primary/30 p-6 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-6xl">payments</span>
          </div>
          <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">Valor Ideal da Sessão</p>
          <div className="text-5xl font-bold tracking-tight mb-2">
            R$ {hourlyRate.split('.')[0]}<span className="text-2xl opacity-60">,{hourlyRate.split('.')[1]}</span>
          </div>
          <p className="text-white/70 text-sm">Faturamento mensal: {monthlyRevenue}</p>
          
          <div className="mt-6 flex justify-center gap-4">
            <button className="flex items-center gap-1 text-xs font-medium bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors">
              <span className="material-symbols-outlined text-[16px]">save</span>
              Salvar
            </button>
            <button className="flex items-center gap-1 text-xs font-medium bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors">
              <span className="material-symbols-outlined text-[16px]">share</span>
              Compartilhar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
