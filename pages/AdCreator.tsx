import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdCreator: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    specialty: 'Ansiedade',
    audience: 'Adultos (18-60 anos)',
    city: '',
    neighborhood: '',
    differentiators: [] as string[],
    customDiff: ''
  });

  // Opções para o Passo 1
  const specialties = [
    { id: 'Ansiedade', icon: 'self_improvement' },
    { id: 'TDAH', icon: 'bolt' },
    { id: 'Burnout', icon: 'battery_alert' },
    { id: 'Depressão', icon: 'cloud' },
    { id: 'Terapia de Casal', icon: 'diversity_1' },
    { id: 'Outra', icon: 'more_horiz' }
  ];

  const audiences = [
    { id: 'Adultos (18-60 anos)', icon: 'person', desc: 'Público geral para terapia individual.' },
    { id: 'Adolescentes', icon: 'skateboarding', desc: 'Foco em questões escolares e sociais.' },
    { id: 'Crianças', icon: 'toys', desc: 'Orientação aos pais e ludoterapia.' },
    { id: 'Idosos', icon: 'assist_walker', desc: 'Foco em qualidade de vida e luto.' }
  ];

  // Opções para o Passo 2
  const defaultDiffs = [
    'Atendimento Online', 'Convênios', 'Estacionamento', 
    'Próximo ao Metrô', 'Acessibilidade', 'Wi-Fi Gratuito'
  ];

  const handleDiffToggle = (diff: string) => {
    setFormData(prev => {
      if (prev.differentiators.includes(diff)) {
        return { ...prev, differentiators: prev.differentiators.filter(d => d !== diff) };
      } else {
        return { ...prev, differentiators: [...prev.differentiators, diff] };
      }
    });
  };

  const handleAddCustomDiff = () => {
    if (formData.customDiff && !formData.differentiators.includes(formData.customDiff)) {
      setFormData(prev => ({
        ...prev,
        differentiators: [...prev.differentiators, prev.customDiff],
        customDiff: ''
      }));
    }
  };

  // Lógica de navegação
  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => {
    if (step === 1) navigate(-1);
    else setStep(prev => prev - 1);
  };

  // Renderização do Passo 1
  const renderStep1 = () => (
    <>
      <div className="px-4 py-6">
        <div className="flex items-start gap-3 mb-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-2xl">target</span>
          </div>
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
            Definição de Público e Especialidade
          </h1>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mt-2">
          Selecione o foco principal da sua campanha para alcançarmos os pacientes ideais para o seu consultório.
        </p>
      </div>

      <div className="px-4 space-y-8 mb-24">
        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-xs font-bold mr-1 text-slate-600 dark:text-slate-300">1</span>
            Qual sua especialidade principal?
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {specialties.map((item) => (
              <label key={item.id} className="cursor-pointer group relative">
                <input 
                  type="radio" 
                  name="specialty" 
                  className="peer sr-only"
                  checked={formData.specialty === item.id}
                  onChange={() => setFormData({...formData, specialty: item.id})}
                />
                <div className="flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark transition-all peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:dark:bg-primary/10 peer-checked:ring-1 peer-checked:ring-primary/50 hover:border-primary/50 active:scale-[0.98]">
                  <div className={`absolute top-3 right-3 text-primary transition-opacity ${formData.specialty === item.id ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="material-symbols-outlined text-xl icon-filled">check_circle</span>
                  </div>
                  <span className={`material-symbols-outlined text-4xl mb-3 transition-colors ${formData.specialty === item.id ? 'text-primary' : 'text-slate-400 dark:text-slate-500 group-hover:text-primary'}`}>
                    {item.icon}
                  </span>
                  <span className={`font-bold text-sm text-center ${formData.specialty === item.id ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                    {item.id}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-xs font-bold mr-1 text-slate-600 dark:text-slate-300">2</span>
            Quem é seu público-alvo?
          </h3>
          <div className="space-y-3">
            {audiences.map((item) => (
              <label key={item.id} className="cursor-pointer group relative block">
                <input 
                  type="radio" 
                  name="audience" 
                  className="peer sr-only"
                  checked={formData.audience === item.id}
                  onChange={() => setFormData({...formData, audience: item.id})}
                />
                <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark transition-all peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:dark:bg-primary/10 peer-checked:ring-1 peer-checked:ring-primary/50 hover:border-primary/50">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${formData.audience === item.id ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">{item.id}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                  <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${formData.audience === item.id ? 'border-primary bg-primary' : 'border-slate-300 dark:border-slate-600'}`}>
                    <div className={`h-2.5 w-2.5 rounded-full bg-white transition-opacity ${formData.audience === item.id ? 'opacity-100' : 'opacity-0'}`}></div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  // Renderização do Passo 2
  const renderStep2 = () => (
    <>
      <div className="px-4 py-6">
        <div className="flex items-start gap-3 mb-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-xl">edit_location_alt</span>
          </div>
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
            Diferenciais e<br/>Localização
          </h1>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mt-2">
          Defina sua área de atuação e os pontos fortes do seu consultório. Essas informações ajudam a filtrar o público ideal.
        </p>
      </div>

      <div className="px-4 mb-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
          <span className="material-symbols-outlined text-primary">location_on</span>
          Localização
        </h3>
        <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-5 shadow-sm">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Cidade de Atuação</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">map</span>
              <input 
                type="text"
                className="w-full pl-10 rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm py-2.5 placeholder:text-slate-400" 
                placeholder="Ex: São Paulo"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Bairro Principal</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">home_pin</span>
              <input 
                type="text"
                className="w-full pl-10 rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm py-2.5 placeholder:text-slate-400" 
                placeholder="Ex: Vila Mariana"
                value={formData.neighborhood}
                onChange={(e) => setFormData({...formData, neighborhood: e.target.value})}
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">info</span>
              Importante para buscas "perto de mim"
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 mb-24">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
          <span className="material-symbols-outlined text-primary">stars</span>
          Diferenciais
        </h3>
        <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-medium">Selecione o que seu consultório oferece:</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {defaultDiffs.map(diff => (
              <button 
                key={diff}
                onClick={() => handleDiffToggle(diff)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all active:scale-95 flex items-center gap-1.5 ${
                  formData.differentiators.includes(diff)
                    ? 'bg-primary/10 text-primary border-primary/30 font-semibold'
                    : 'bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:text-primary'
                }`}
              >
                {formData.differentiators.includes(diff) && <span className="material-symbols-outlined text-[18px]">check</span>}
                {diff}
              </button>
            ))}
            {formData.differentiators.filter(d => !defaultDiffs.includes(d)).map(diff => (
               <button 
                key={diff}
                onClick={() => handleDiffToggle(diff)}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/30 flex items-center gap-1.5 transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">check</span>
                {diff}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Outro diferencial?</label>
            <div className="flex gap-2">
              <input 
                type="text"
                className="flex-1 rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm text-sm py-2.5 placeholder:text-slate-400" 
                placeholder="Digite..."
                value={formData.customDiff}
                onChange={(e) => setFormData({...formData, customDiff: e.target.value})}
              />
              <button 
                onClick={handleAddCustomDiff}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-bold text-sm border border-slate-200 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Renderização do Passo 3
  const renderStep3 = () => (
    <>
      <div className="px-4 py-6">
        <div className="flex items-start gap-3 mb-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-600 dark:text-green-400">
            <span className="material-symbols-outlined text-2xl">auto_awesome</span>
          </div>
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
            Geração do Texto Ideal
          </h1>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mt-2">
          Com base nas suas respostas anteriores, nossa IA gerou 3 opções de descrição otimizadas para o Google. Escolha a que melhor representa sua prática.
        </p>
      </div>

      <div className="px-4 mb-6">
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/30 rounded-xl p-4 flex gap-3 shadow-sm">
          <span className="material-symbols-outlined text-amber-600 dark:text-amber-500 shrink-0 text-xl mt-0.5">verified_user</span>
          <div>
            <h4 className="text-sm font-bold text-amber-800 dark:text-amber-200 mb-1">Nota de Ética (CFP)</h4>
            <p className="text-xs text-amber-800/80 dark:text-amber-200/80 leading-snug">
              As descrições abaixo respeitam as normas do Conselho Federal de Psicologia: sem promessas de cura, sem sensacionalismo e sem divulgação de preços no perfil público.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-6 mb-24">
        {/* Opção 1 */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              Opção 1: Profissional & Direta
            </span>
          </div>
          <div className="relative rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 p-4 mb-4 group">
            <div className="absolute right-2 top-2">
              <button className="flex items-center gap-1.5 rounded-lg bg-white dark:bg-slate-700 px-3 py-1.5 text-xs font-bold text-primary shadow-sm hover:bg-slate-50 active:scale-95 transition-all border border-slate-100 dark:border-slate-600">
                <span className="material-symbols-outlined text-sm">content_copy</span>
                Copiar
              </button>
            </div>
            <p className="font-sans text-sm text-slate-700 dark:text-slate-300 pr-2 leading-relaxed pt-6 pb-2">
              "Psicóloga clínica com foco em {formData.specialty} em {formData.city || '[Sua Cidade]'}. Atendimento acolhedor para {formData.audience.split(' ')[0].toLowerCase()} visando autoconhecimento e bem-estar. {formData.differentiators.length > 0 ? `Diferenciais: ${formData.differentiators.slice(0, 2).join(', ')}.` : 'Espaço seguro e sigiloso.'} Agende sua consulta."
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">check_circle</span>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <strong className="text-slate-700 dark:text-slate-200">Por que funciona?</strong> Vai direto ao ponto com palavras-chave fortes ({formData.specialty}) que os pacientes buscam ativamente.
            </p>
          </div>
        </div>

        {/* Opção 2 */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              Opção 2: Acolhedora & Empática
            </span>
          </div>
          <div className="relative rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 p-4 mb-4">
            <div className="absolute right-2 top-2">
              <button className="flex items-center gap-1.5 rounded-lg bg-white dark:bg-slate-700 px-3 py-1.5 text-xs font-bold text-primary shadow-sm hover:bg-slate-50 active:scale-95 transition-all border border-slate-100 dark:border-slate-600">
                <span className="material-symbols-outlined text-sm">content_copy</span>
                Copiar
              </button>
            </div>
            <p className="font-sans text-sm text-slate-700 dark:text-slate-300 pr-2 leading-relaxed pt-6 pb-2">
              "Um espaço de escuta e cuidado para sua saúde mental. Ofereço psicoterapia especializada em {formData.specialty}, auxiliando no manejo de estresse e conflitos. Localizado {formData.neighborhood ? `em ${formData.neighborhood}` : 'no centro'}, com fácil acesso. Priorize você."
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">check_circle</span>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <strong className="text-slate-700 dark:text-slate-200">Por que funciona?</strong> Usa linguagem mais humana ("escuta", "cuidado") conectando emocionalmente com quem procura ajuda.
            </p>
          </div>
        </div>

        {/* Opção 3 */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
              Opção 3: Foco em Nicho
            </span>
          </div>
          <div className="relative rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 p-4 mb-4">
            <div className="absolute right-2 top-2">
              <button className="flex items-center gap-1.5 rounded-lg bg-white dark:bg-slate-700 px-3 py-1.5 text-xs font-bold text-primary shadow-sm hover:bg-slate-50 active:scale-95 transition-all border border-slate-100 dark:border-slate-600">
                <span className="material-symbols-outlined text-sm">content_copy</span>
                Copiar
              </button>
            </div>
            <p className="font-sans text-sm text-slate-700 dark:text-slate-300 pr-2 leading-relaxed pt-6 pb-2">
              "Consultório de Psicologia especializado em {formData.specialty}. Atendimento ético e personalizado para apoiar seu desenvolvimento. {formData.differentiators.includes('Atendimento Online') ? 'Disponível também online.' : 'Atendimento presencial.'} Entre em contato pelo botão abaixo para verificar disponibilidade."
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">check_circle</span>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <strong className="text-slate-700 dark:text-slate-200">Por que funciona?</strong> Ideal para seu nicho específico ({formData.specialty}). Filtra pacientes e aumenta a percepção de autoridade.
            </p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased selection:bg-primary/30 min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 border-b border-slate-200 dark:border-slate-800">
        <div 
          onClick={prevStep}
          className="flex size-10 shrink-0 items-center justify-center rounded-full active:bg-slate-200 dark:active:bg-slate-800 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-slate-900 dark:text-white">arrow_back</span>
        </div>
        <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight flex-1 text-center">Criador de Anúncio</h2>
        <div className="flex size-10 items-center justify-center">
          {step < 3 && <p className="text-primary text-sm font-bold cursor-pointer">Ajuda</p>}
          {step === 3 && <span className="material-symbols-outlined text-slate-500 cursor-pointer">more_vert</span>}
        </div>
      </header>
      
      {/* Barra de Progresso */}
      <div className="px-4 pt-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Passo {step} de 3</p>
          <span className="text-primary text-xs font-bold">{Math.round((step / 3) * 100)}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-500 ease-out ${step === 3 ? 'bg-green-500' : 'bg-primary'}`} 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 z-40">
        {step < 3 ? (
          <button 
            onClick={nextStep}
            className="w-full rounded-xl bg-primary py-4 text-center text-lg font-bold text-white shadow-lg shadow-blue-500/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Continuar para Passo {step + 1}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        ) : (
          <button 
            onClick={() => window.open('https://business.google.com/create', '_blank')}
            className="w-full rounded-xl bg-primary py-4 text-center font-bold text-white shadow-lg shadow-blue-500/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-base"
          >
            Finalizar e Ir para o Google
            <span className="material-symbols-outlined text-lg">open_in_new</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default AdCreator;
