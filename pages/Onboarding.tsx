import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Valorização Profissional",
      description: "Aprenda a valorizar seu trabalho e atrair pacientes particulares que respeitam sua hora-clínica.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKS0DHX9wqD4RtjdUfXIUzFBOzej4RLSKHOLmtLUF5r8mYGrJRXutdNwq4RqhjuklIW-hbVCZunq2mAWsAEEUKtlzvWm_o3RiflcrqsNkXe9VQFKsWDaK00t6wQP1eH1f3f2m54myH-GwBi918qanpsNAfcjxvU3jDkfFJBuXOTFIGrRbPk7Yoi3sSdSIYFtGC5Po_ZObgG2M-Hy2Aj7awtLaLtZcEbjRBQEBjH4mNzEoJfve9kVGOl_yExapjtjCEbEGndFfKYw"
    },
    {
      title: "Liberdade Psi",
      description: "Sua jornada para a liberdade clínica começa aqui. Quebre as correntes da insegurança.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPFGwX2E11GYfCAIkvyk5TZ1fh9-gP9nrvDQizToKI966FhY9A8RtW4qac8WZnya-nfYTZWDfRUIZlBA0sxSou4GhK_RTraKal_DmUyf3P3NHCsV8LIKpTkWmDnbosM8QCFWZ5M7F27AHic4O_cbnbN85l1JRohUC2Tq6oxWkNjuWK9PKXAEi6MUxe7vE_V6zKXyo1fuonzL3xEf2bTWwGucLEl499vDhc7u9D7FtFC6e57lGub6x2mO6y7JLnAEY7zUKBF7VhXQ"
    },
    {
      title: "Tudo pronto para transformar sua carreira?",
      description: "Vamos começar agora a construir o futuro da sua clínica.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVt4KtUpgiqSzUg6zoP6s-Gf6iE2OS8KzQnTFMAN6P9MFebCKqntg-t5tH43_79UJHPdHUQVHCzO8cnMCxs_JkeMfHUYdYjzQl7k9dJjISRje9H9q9VUaZEyBPrD2lN4jeg3EZIdVaZSVys9LfG17Cq4aJTTM3XfblFLbTiQK-tasuKbviIu2BzQK-TPCOCe4h1CjhUu2nC0lSxWR91ujvqVQQk4ZFdfZqI92CmZQ4ApUtoFvDvgXOPqQul956UncDHp55-oLmYQ"
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="relative flex flex-col h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Top Nav */}
      <div className="flex items-center justify-between p-4 pt-12 pb-2 z-20">
        {step > 0 ? (
          <button onClick={() => setStep(step - 1)} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-text-main dark:text-white">arrow_back</span>
          </button>
        ) : (
          <div className="w-10" />
        )}
        <button onClick={() => navigate('/home')} className="text-text-muted dark:text-primary text-base font-bold leading-normal tracking-[0.015em] hover:opacity-80 transition-opacity">
          Pular
        </button>
      </div>

      <div className="flex-1 w-full flex flex-col items-center justify-center px-6 relative">
        {/* Decorative Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        
        {/* Main Image */}
        <div className="w-full flex flex-col gap-3 py-6 items-center">
          <div className="w-full aspect-square max-h-[400px] relative">
             <img 
              src={steps[step].image}
              alt={steps[step].title}
              className="w-full h-full object-contain drop-shadow-xl transition-all duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Indicators */}
        <div className="flex w-full flex-row items-center justify-center gap-3 py-6">
          {steps.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === step 
                  ? 'w-8 bg-primary shadow-[0_0_12px_rgba(19,236,236,0.5)]' 
                  : 'w-2 bg-[#cfe7e7] dark:bg-gray-700'
              }`}
            ></div>
          ))}
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center text-center space-y-3 mb-4 max-w-sm">
          <h1 className="text-text-main dark:text-white tracking-tight text-[32px] font-extrabold leading-tight">
            {steps[step].title}
          </h1>
          <p className="text-text-muted dark:text-gray-400 text-base font-medium leading-relaxed">
            {steps[step].description}
          </p>
        </div>

        {/* Action Button */}
        <div className="w-full max-w-sm mt-auto mb-8 pt-4">
          <button 
            onClick={handleNext}
            className="w-full h-14 bg-primary text-[#0d1b1b] text-lg font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
          >
            {step === steps.length - 1 ? 'Entrar no Curso' : 'Próximo'}
            <span className="material-symbols-outlined text-[20px] font-bold group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          
          {step === steps.length - 1 && (
             <button onClick={() => navigate('/home')} className="w-full mt-4 flex items-center justify-center gap-1 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors">
              <span>Já tenho conta</span>
              <span className="text-primary">Entrar</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
