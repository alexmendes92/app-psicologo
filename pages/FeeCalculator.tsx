import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeeCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [currentFee, setCurrentFee] = useState('');
  const [inflation, setInflation] = useState('4.5'); // IPCA aprox
  const [years, setYears] = useState('1');
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const fee = parseFloat(currentFee);
    const inf = parseFloat(inflation) / 100;
    const y = parseInt(years);
    
    if (isNaN(fee)) return;

    // Juros compostos simples para reajuste
    const newFee = fee * Math.pow((1 + inf), y);
    // Arredondar para múltiplo de 5 mais próximo para ficar bonito
    const roundedFee = Math.ceil(newFee / 5) * 5;
    
    setResult(roundedFee.toString());
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-8">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 border-b border-gray-100 dark:border-gray-800 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-bold">Reajuste de Honorários</h1>
      </header>

      <div className="p-4 max-w-lg mx-auto w-full flex flex-col gap-6">
        <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl border border-teal-100 dark:border-teal-900/30 flex items-start gap-3">
          <span className="material-symbols-outlined text-teal-600 dark:text-teal-400 mt-1">info</span>
          <p className="text-sm text-teal-800 dark:text-teal-200 leading-relaxed">
            Reajustar é ético e necessário. Utilize o IPCA acumulado como base para manter o valor do seu trabalho.
          </p>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase">Valor Atual da Sessão (R$)</label>
            <input 
              type="number" 
              value={currentFee}
              onChange={(e) => setCurrentFee(e.target.value)}
              className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 outline-none focus:border-teal-500 font-bold text-lg"
              placeholder="0,00"
            />
          </div>
          
          <div className="flex gap-4">
             <div className="space-y-1.5 flex-1">
              <label className="text-xs font-bold text-gray-500 uppercase">Inflação (%)</label>
              <input 
                type="number" 
                value={inflation}
                onChange={(e) => setInflation(e.target.value)}
                className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 outline-none focus:border-teal-500"
              />
            </div>
             <div className="space-y-1.5 flex-1">
              <label className="text-xs font-bold text-gray-500 uppercase">Anos sem reajuste</label>
              <input 
                type="number" 
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 outline-none focus:border-teal-500"
              />
            </div>
          </div>

          <button 
            onClick={calculate}
            className="w-full h-12 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-teal-500/20"
          >
            Calcular Novo Valor
          </button>
        </div>

        {result && (
          <div className="animate-fade-in space-y-6">
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-[80px]">payments</span>
              </div>
              <p className="text-teal-100 text-xs font-bold uppercase mb-2">Valor Sugerido (Arredondado)</p>
              <h2 className="text-5xl font-bold tracking-tighter">R$ {result},00</h2>
              <p className="text-teal-100 text-sm mt-2">Por sessão</p>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-5">
              <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-500">chat</span>
                Script para WhatsApp
              </h3>
              <div className="bg-gray-50 dark:bg-black/20 p-3 rounded-lg text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                "Olá! Tudo bem? Estou escrevendo para avisar que, a partir do próximo mês, farei o reajuste anual dos honorários com base na inflação do período. O novo valor da sessão será de R$ {result},00. Seguimos juntos no seu processo!"
              </div>
              <button 
                onClick={() => navigator.clipboard.writeText(`Olá! Tudo bem? Estou escrevendo para avisar que, a partir do próximo mês, farei o reajuste anual dos honorários com base na inflação do período. O novo valor da sessão será de R$ ${result},00. Seguimos juntos no seu processo!`)}
                className="w-full py-2 rounded-lg border border-gray-300 dark:border-gray-600 font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Copiar Mensagem
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeeCalculator;