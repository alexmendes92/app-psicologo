import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostCreator: React.FC = () => {
  const navigate = useNavigate();
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Empático');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<{caption: string, imageIdea: string} | null>(null);

  const handleGenerate = () => {
    if (!topic) return;
    setIsGenerating(true);
    
    // Simulating AI generation delay
    setTimeout(() => {
      setResult({
        caption: `🧠 **${topic}**: Você não está sozinho(a).\n\nMuitas vezes sentimos que ${topic.toLowerCase()} é algo que só acontece conosco, mas a verdade é que isso é uma resposta comum a situações de estresse.\n\n✨ Dica da Psi: Respire fundo e tente identificar o gatilho. O primeiro passo para a mudança é a consciência.\n\n💬 Você já se sentiu assim? Me conta nos comentários 👇\n\n#Psicologia #${topic.replace(/\s/g, '')} #SaudeMental #Autocuidado`,
        imageIdea: "Uma foto sua em ambiente acolhedor segurando uma xícara de chá, ou uma arte minimalista com tons pastéis mostrando uma pessoa respirando fundo."
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-8">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 border-b border-gray-100 dark:border-gray-800 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-bold">Gerador de Posts</h1>
      </header>

      <div className="p-4 flex flex-col gap-6 max-w-lg mx-auto w-full">
        {!result ? (
          <>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg">
              <h2 className="text-xl font-bold mb-2">Ideias infinitas</h2>
              <p className="opacity-90 text-sm">Digite um tema e deixe nossa IA criar a legenda e a ideia visual para o seu Instagram.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-text-main dark:text-white ml-1">Sobre o que você quer falar?</label>
                <input 
                  type="text" 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Ex: Ansiedade no trabalho, Luto, Autoestima..."
                  className="w-full h-14 px-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-text-main dark:text-white ml-1">Qual o tom da mensagem?</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Empático', 'Educativo', 'Motivacional'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTone(t)}
                      className={`py-3 rounded-xl text-sm font-semibold border transition-all ${
                        tone === t 
                          ? 'bg-purple-100 border-purple-500 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' 
                          : 'bg-surface-light dark:bg-surface-dark border-gray-200 dark:border-gray-700 text-gray-500'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={!topic || isGenerating}
                className={`w-full h-14 rounded-xl font-bold text-white shadow-lg flex items-center justify-center gap-2 transition-all mt-4 ${
                  !topic || isGenerating 
                    ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed' 
                    : 'bg-purple-600 hover:bg-purple-700 active:scale-[0.98] shadow-purple-500/30'
                }`}
              >
                {isGenerating ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                    Criando Mágica...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">auto_awesome</span>
                    Gerar Conteúdo
                  </>
                )}
              </button>
            </div>
          </>
        ) : (
          <div className="animate-fade-in space-y-6">
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 border-b border-purple-100 dark:border-purple-900/30 flex items-center gap-2">
                <span className="material-symbols-outlined text-purple-600 dark:text-purple-400">description</span>
                <h3 className="font-bold text-purple-900 dark:text-purple-100">Legenda Sugerida</h3>
              </div>
              <div className="p-4 relative">
                <textarea 
                  readOnly 
                  value={result.caption}
                  className="w-full h-48 bg-transparent border-none resize-none focus:ring-0 text-sm leading-relaxed text-text-main dark:text-gray-200"
                />
                <button 
                  onClick={() => navigator.clipboard.writeText(result.caption)}
                  className="absolute bottom-4 right-4 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                  Copiar
                </button>
              </div>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 border-b border-blue-100 dark:border-blue-900/30 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">image</span>
                <h3 className="font-bold text-blue-900 dark:text-blue-100">Ideia Visual</h3>
              </div>
              <div className="p-4 text-sm text-text-main dark:text-gray-200 leading-relaxed">
                {result.imageIdea}
              </div>
            </div>

            <button 
              onClick={() => setResult(null)}
              className="w-full h-12 rounded-xl border-2 border-gray-200 dark:border-gray-700 font-bold text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Criar Novo Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCreator;