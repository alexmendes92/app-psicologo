import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SessionNotes: React.FC = () => {
  const navigate = useNavigate();
  const [patient, setPatient] = useState('');
  const [mood, setMood] = useState('Neutro');
  const [summary, setSummary] = useState('');
  const [generated, setGenerated] = useState('');

  const handleGenerate = () => {
    const date = new Date().toLocaleDateString('pt-BR');
    const note = `DATA: ${date}\nPACIENTE: ${patient}\n\nESTADO EMOCIONAL: ${mood}\n\nRESUMO DO ATENDIMENTO:\n${summary}\n\nINTERVENÇÕES:\n- Escuta ativa e acolhimento.\n- Psicoeducação sobre regulação emocional.\n\nENCAMINHAMENTOS/TAREFAS:\n- Observar gatilhos durante a semana.`;
    setGenerated(note);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-8">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 border-b border-gray-100 dark:border-gray-800 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-bold">Notas de Sessão</h1>
      </header>

      <div className="p-4 max-w-lg mx-auto w-full flex flex-col gap-6">
        {!generated ? (
          <>
            <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Nome do Paciente</label>
              <input 
                value={patient}
                onChange={(e) => setPatient(e.target.value)}
                placeholder="Ex: Maria Souza"
                className="w-full bg-gray-50 dark:bg-black/20 border-b border-gray-200 dark:border-gray-700 px-2 py-2 outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase text-gray-500 ml-1">Humor Inicial</label>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {['Ansioso', 'Deprimido', 'Neutro', 'Alegre', 'Irritado'].map(m => (
                  <button 
                    key={m}
                    onClick={() => setMood(m)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border whitespace-nowrap transition-colors ${mood === m ? 'bg-green-100 border-green-500 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-surface-light dark:bg-surface-dark border-gray-200 dark:border-gray-700'}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex-1">
              <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Resumo da Sessão (Tópicos)</label>
              <textarea 
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="- Relatou conflito familiar...&#10;- Apresentou melhora no sono..."
                className="w-full h-40 bg-transparent resize-none outline-none text-sm leading-relaxed"
              ></textarea>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={!patient || !summary}
              className="w-full h-14 bg-primary hover:bg-primary-dark text-black font-bold rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined">clinical_notes</span>
              Gerar Prontuário
            </button>
          </>
        ) : (
          <div className="animate-fade-in flex flex-col h-full">
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex-1 p-5 relative">
              <textarea 
                readOnly
                value={generated}
                className="w-full h-[60vh] bg-transparent resize-none outline-none text-sm font-mono leading-relaxed text-slate-700 dark:text-slate-300"
              />
            </div>
            <div className="flex gap-3 mt-4">
              <button 
                onClick={() => setGenerated('')}
                className="flex-1 h-12 rounded-xl border-2 border-gray-200 dark:border-gray-700 font-bold text-gray-500"
              >
                Voltar
              </button>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(generated);
                  alert('Copiado!');
                }}
                className="flex-1 h-12 rounded-xl bg-primary text-black font-bold shadow-lg shadow-primary/20"
              >
                Copiar Texto
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SessionNotes;