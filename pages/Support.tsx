import React from 'react';
import { useNavigate } from 'react-router-dom';

const Support: React.FC = () => {
  const navigate = useNavigate();

  const faqs = [
    { q: 'Como emito meu certificado?', a: 'Ao completar 100% das aulas, o certificado é liberado automaticamente na aba Perfil > Meus Certificados.' },
    { q: 'Posso assistir offline?', a: 'Sim, no aplicativo mobile você pode baixar as aulas para assistir sem internet.' },
    { q: 'Como funciona a garantia?', a: 'Você tem 7 dias de garantia incondicional após a compra para solicitar reembolso total.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 border-b border-gray-100 dark:border-gray-800 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-bold">Ajuda e Suporte</h1>
      </header>

      <div className="p-4 flex flex-col gap-6">
        {/* Contact Options */}
        <section className="grid grid-cols-2 gap-3">
          <button className="flex flex-col items-center justify-center gap-2 p-4 bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:border-primary/50 transition-colors">
            <div className="size-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
              <span className="material-symbols-outlined">chat</span>
            </div>
            <span className="text-sm font-bold">WhatsApp</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-2 p-4 bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:border-primary/50 transition-colors">
            <div className="size-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <span className="text-sm font-bold">E-mail</span>
          </button>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="font-bold text-lg mb-4 text-text-main dark:text-white">Perguntas Frequentes</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-sm text-text-main dark:text-gray-200">
                  {faq.q}
                  <span className="material-symbols-outlined text-gray-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-4 pb-4 pt-0 text-sm text-text-muted dark:text-gray-400 leading-relaxed border-t border-transparent group-open:border-gray-100 dark:group-open:border-gray-800 group-open:pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Footer info */}
        <div className="text-center mt-8 text-xs text-gray-400">
          <p>Versão do App: 1.0.4</p>
          <p className="mt-1">© 2024 Liberdade Psi. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Support;