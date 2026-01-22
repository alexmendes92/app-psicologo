import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContractGenerator: React.FC = () => {
  const navigate = useNavigate();
  const [patientName, setPatientName] = useState('');
  const [price, setPrice] = useState('');
  const [cancelTime, setCancelTime] = useState('24');

  const handleGenerate = () => {
    alert("Em uma aplicação real, isso geraria um PDF para download. Como estamos em uma demo, imagine um belo PDF sendo baixado agora! 📄✨");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-8">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 border-b border-gray-100 dark:border-gray-800 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-bold">Gerador de Contrato</h1>
      </header>

      <div className="p-4 max-w-lg mx-auto w-full flex flex-col gap-6">
        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border border-orange-100 dark:border-orange-900/30 flex items-start gap-3">
          <span className="material-symbols-outlined text-orange-600 dark:text-orange-400 mt-1">history_edu</span>
          <p className="text-sm text-orange-800 dark:text-orange-200 leading-relaxed">
            O contrato terapêutico traz segurança para o vínculo. Preencha os dados para gerar um modelo em PDF pronto para assinar.
          </p>
        </div>

        <form className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-5" onSubmit={(e) => { e.preventDefault(); handleGenerate(); }}>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase">Nome Completo do Paciente</label>
            <input 
              type="text" 
              required
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 outline-none focus:border-orange-500"
              placeholder="Ex: João da Silva"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase">Valor Sessão (R$)</label>
              <input 
                type="number" 
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 outline-none focus:border-orange-500"
                placeholder="200,00"
              />
            </div>
             <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase">Cancelamento (h)</label>
              <select 
                value={cancelTime}
                onChange={(e) => setCancelTime(e.target.value)}
                className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 outline-none focus:border-orange-500 appearance-none"
              >
                <option value="24">24 horas</option>
                <option value="48">48 horas</option>
                <option value="12">12 horas</option>
              </select>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <input type="checkbox" defaultChecked className="size-5 text-orange-500 rounded focus:ring-orange-500" />
              <span className="text-sm text-text-main dark:text-white">Incluir cláusula de sigilo</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <input type="checkbox" defaultChecked className="size-5 text-orange-500 rounded focus:ring-orange-500" />
              <span className="text-sm text-text-main dark:text-white">Incluir reajuste anual</span>
            </label>
          </div>

          <button 
            type="submit"
            className="w-full h-14 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">picture_as_pdf</span>
            Gerar PDF
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContractGenerator;