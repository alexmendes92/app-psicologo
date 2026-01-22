import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MODULES } from '../constants';

// --- Sub-components for specific lessons ---

const Lesson1_1 = () => (
  <div className="space-y-6">
    <p className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
      Muitos psicólogos iniciam suas carreiras com uma sensação de segurança proporcionada pelos convênios. Parece um fluxo constante de pacientes sem o incômodo do marketing. Mas existe um custo oculto nesse modelo baseado em volume.
    </p>
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-background-light to-white dark:from-surface-dark dark:to-background-dark border border-gray-200 dark:border-gray-700 shadow-sm my-6">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
      <div class="p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-primary/20 rounded-lg text-primary-dark dark:text-primary flex items-center justify-center">
            <span className="material-symbols-outlined">calculate</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">A Matemática que Ninguém Te Conta</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          Considere o tempo administrativo não remunerado. Se você recebe R$ 50 por sessão, mas gasta 20 minutos em papelada por paciente, sua taxa horária não é R$ 50. Ela cai drasticamente.
        </p>
        <div className="bg-gray-50 dark:bg-black/20 rounded-lg p-3 text-sm font-mono text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800">
          <div className="flex justify-between mb-1">
            <span>Pagamento:</span>
            <span className="font-bold text-gray-900 dark:text-gray-200">R$ 50,00</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Tempo Real:</span>
            <span className="text-red-500">1,33 hrs</span>
          </div>
          <div className="w-full h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
          <div className="flex justify-between text-primary-dark dark:text-primary font-bold">
            <span>Valor Real:</span>
            <span>R$ 37,59/h</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700 mt-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">edit_note</span>
          Exercício Prático
        </h3>
        <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 uppercase tracking-wide">Interativo</span>
      </div>
      <div className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Valor por sessão</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">R$</span>
            <input className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-gray-900 dark:text-white placeholder-gray-400 font-medium" placeholder="50,00" type="number"/>
          </div>
        </div>
        <div className="pt-2">
          <button className="w-full py-2.5 rounded-lg border-2 border-primary/20 hover:border-primary text-primary-dark dark:text-primary font-semibold text-sm transition-all hover:bg-primary/5 flex items-center justify-center gap-2">
            Calcular Meu Valor Real
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Lesson2_1 = () => (
  <div className="space-y-6">
    <section class="rounded-xl border border-red-200 bg-red-50 dark:bg-red-950/30 dark:border-red-900/50 overflow-hidden">
      <div className="flex items-start gap-4 p-5">
        <div className="flex-shrink-0 mt-1">
          <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-[28px]">warning</span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-red-900 dark:text-red-100 text-lg font-bold leading-tight">3 Erros Fatais</h3>
          <p className="text-red-800 dark:text-red-200 text-sm font-medium leading-normal mb-2">Evite estes deslizes comuns que podem comprometer sua transição:</p>
          <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-red-700 dark:text-red-300">
            <li>Sair sem aviso prévio de 30 dias.</li>
            <li>Ignorar cláusulas contratuais.</li>
            <li>Não preparar reserva financeira.</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="flex flex-col gap-3 mt-2">
      <div className="flex items-center gap-2 mb-1 px-1">
        <span className="material-symbols-outlined text-primary text-[20px]">calendar_month</span>
        <h3 className="text-slate-900 dark:text-white text-lg font-bold">O Plano de 90 Dias</h3>
      </div>
      <details className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark shadow-sm group overflow-hidden" open>
        <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors select-none">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">1</div>
            <p className="text-slate-900 dark:text-white text-base font-semibold">Dias 1-30: Preparação</p>
          </div>
          <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform duration-300">expand_more</span>
        </summary>
        <div className="px-4 pb-4 pl-[3.75rem] text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-3">
          <ul className="list-disc ml-4 space-y-1 text-slate-500 dark:text-slate-400">
            <li>Revise todos os contratos atuais.</li>
            <li>Calcule o valor da sua hora clínica ideal.</li>
            <li>Inicie sua reserva de emergência (3-6 meses).</li>
          </ul>
        </div>
      </details>
      <details className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark shadow-sm group overflow-hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors select-none">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 font-bold text-sm group-open:bg-primary/10 group-open:text-primary">2</div>
            <p className="text-slate-900 dark:text-white text-base font-semibold">Dias 31-60: Comunicação</p>
          </div>
          <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform duration-300">expand_more</span>
        </summary>
      </details>
    </section>
  </div>
);

const Lesson2_3 = () => (
  <div className="space-y-4">
    <div className="flex flex-col sm:flex-row items-stretch justify-between gap-4 rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-2 flex-[2_2_0px] justify-center">
        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-primary text-[20px]">gavel</span>
          <p className="text-text-main dark:text-white text-base font-bold leading-tight">Código de Ética (CFP)</p>
        </div>
        <p className="text-text-muted dark:text-gray-400 text-sm font-normal leading-normal">
          Resumo dos principais deveres, vedações e as regras inegociáveis sobre o sigilo profissional.
        </p>
      </div>
    </div>
    <div className="mt-2 rounded-xl bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-full bg-amber-100 dark:bg-amber-900/50 p-2 shrink-0">
          <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-2xl">lightbulb</span>
        </div>
        <div>
          <h3 className="text-amber-800 dark:text-amber-200 text-base font-bold mb-1">Dica de Ouro</h3>
          <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
            Atenção à Contabilidade: O enquadramento correto no <strong>Simples Nacional</strong> pode reduzir significativamente seus impostos. Sempre consulte um contador especializado.
          </p>
        </div>
      </div>
    </div>
    <div className="mt-6">
      <h3 className="text-text-main dark:text-white text-lg font-bold mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">checklist</span>
        Exercício Prático
      </h3>
      <div className="space-y-3">
        {['Relendo o Código de Ética', 'Verificando LGPD', 'Consulta Contábil'].map((item, idx) => (
          <label key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700" />
            <span className="text-sm font-medium text-text-main dark:text-white">{item}</span>
          </label>
        ))}
      </div>
    </div>
  </div>
);

const Lesson3_1 = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary" style={{fontSize: '24px'}}>foundation</span>
      <h3 className="text-lg font-bold text-text-main dark:text-white">Os 3 Pilares da Autoridade</h3>
    </div>
    <div className="space-y-3">
      <details className="group rounded-xl border border-gray-200 bg-surface-light dark:border-gray-700 dark:bg-surface-dark open" open>
        <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-text-main dark:text-white">
          <span className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">1</div>
            Posicionamento e Bio
          </span>
          <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-gray-400">expand_more</span>
        </summary>
        <div className="px-4 pb-4 pt-0">
          <div className="rounded-lg bg-gray-50 dark:bg-gray-800/50 p-3 border border-gray-100 dark:border-gray-700">
            <div className="flex items-start gap-3">
              <div className="h-12 w-12 rounded-full bg-gray-300 flex-shrink-0 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaK1Dq0myTbOrsAJJlybQwuUFxgsxLb0dhg-OHZg1g2o_W0K612MdkHtJhK0pfCY29RPTvrUxYYVUdb3LQdj_ixpH4QtV4vZIDzfmk0LhYtUnjU6UpZGjH0-oFg4iAhSrHfD1rGSbPq5t478zsBHGC1RQ8VGbibu0cahH_pfYPQyppisLoaV8xjVJlIDo1e1VAdtUzWwbpTCfiq8NWtJ20EbK9xF5oqhciJSgdD1tP4eFyrHdBipBkrnAfXkEZNdSywYgYMGoAxA")'}}></div>
              <div className="flex-1 space-y-1">
                <div className="font-bold text-sm text-text-main dark:text-white">Psi. Ana Silva <span className="material-symbols-outlined text-primary align-middle ml-1" style={{fontSize: '14px'}}>verified</span></div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Psicóloga Clínica • CRP 06/12345</div>
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>
    <section className="rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="material-symbols-outlined text-red-600 dark:text-red-400" style={{fontSize: '24px'}}>gavel</span>
        <h3 className="text-base font-bold text-red-700 dark:text-red-400">Alertas Éticos</h3>
      </div>
      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <span className="material-symbols-outlined text-red-500 mt-0.5 shrink-0" style={{fontSize: '18px'}}>cancel</span>
          <span className="text-sm text-red-800 dark:text-red-200">Jamais divulgar preço de consulta como promoção.</span>
        </li>
      </ul>
    </section>
  </div>
);

const Lesson3_2 = () => (
  <div className="space-y-6">
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
      <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight mb-2">O Diagrama do Nicho Ideal</h2>
      <div className="relative w-full aspect-square max-w-[300px] mx-auto flex items-center justify-center py-4">
        {/* Simplified SVG representation of Venn Diagram */}
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="70" cy="70" r="60" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" strokeWidth="2" />
          <text x="40" y="75" fontSize="10" className="fill-rose-600 dark:fill-rose-300 font-bold">MOTIVAÇÃO</text>
          
          <circle cx="130" cy="70" r="60" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
          <text x="135" y="75" fontSize="10" className="fill-blue-600 dark:fill-blue-300 font-bold">COMPETÊNCIA</text>
          
          <circle cx="100" cy="120" r="60" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
          <text x="70" y="145" fontSize="10" className="fill-emerald-600 dark:fill-emerald-300 font-bold">DEMANDA</text>
          
          <text x="85" y="95" fontSize="8" className="fill-slate-900 dark:fill-white font-bold">NICHO</text>
        </svg>
      </div>
    </div>
    <section>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-text-main dark:text-white text-lg font-bold">Exemplos Lucrativos</h3>
        <span className="text-xs text-primary font-medium">Ver todos</span>
      </div>
      <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar snap-x">
        <div className="min-w-[160px] bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm snap-start flex flex-col items-start gap-3">
          <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <span className="material-symbols-outlined">psychology</span>
          </div>
          <div>
            <h4 className="text-text-main dark:text-white font-semibold text-sm">Ansiedade em Executivos</h4>
            <p className="text-text-secondary dark:text-gray-400 text-xs mt-1">Alta demanda corporativa.</p>
          </div>
        </div>
        <div className="min-w-[160px] bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm snap-start flex flex-col items-start gap-3">
          <div className="size-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <span className="material-symbols-outlined">favorite</span>
          </div>
          <div>
            <h4 className="text-text-main dark:text-white font-semibold text-sm">Luto e Perda</h4>
            <p className="text-text-secondary dark:text-gray-400 text-xs mt-1">Nicho clínico sensível.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const Lesson3_3 = () => (
  <div className="space-y-6">
    <div className="space-y-4">
      {['Criar Conta', 'Categoria Correta', 'Validação', 'Horários e Fotos'].map((step, idx) => (
        <div key={idx} className="flex gap-4 p-4 rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">{idx + 1}</div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white">{step}</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Passo essencial para o SEO local.</p>
          </div>
        </div>
      ))}
    </div>
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark overflow-hidden shadow-lg mx-auto max-w-sm">
      <div className="h-32 w-full bg-slate-200 dark:bg-slate-700 relative">
        <img alt="Map placeholder" className="w-full h-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjcZP9qpzCgTrf-XoEiV1Hk1fN2Q253bQe3Cqbt4KNIcDFpxYFhIjYpqBjs_DKghfSf67ZXck1RplpIjwXINj2llIFpAJZe8kU3nfBruYxUisLjUUx0_wjHkYR58fAGmfcXX5xR4ytZZk6cIBPY8HPkAY1zFRBCSOkKJSi8Q7-5-536FkpzhaRBp6IhIS7by8gTVDnEL4ZgV1gElFcL6kPKxKm_QFHlcFJDl9ZEnYIYdxCEtxqWd2E4oElr0mPhPu1gSmgGJGnAw"/>
      </div>
      <div className="pt-4 px-4 pb-4">
        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Dra. Ana Silva - Psicóloga Clínica</h4>
        <div className="flex items-center gap-1 mt-1 text-yellow-400 text-sm">
          <span className="font-bold">5.0</span>
          <span className="material-symbols-outlined icon-filled text-[16px]">star</span>
          <span className="material-symbols-outlined icon-filled text-[16px]">star</span>
          <span className="material-symbols-outlined icon-filled text-[16px]">star</span>
          <span className="material-symbols-outlined icon-filled text-[16px]">star</span>
          <span className="material-symbols-outlined icon-filled text-[16px]">star</span>
          <span className="text-slate-400 text-xs ml-1">(42 avaliações)</span>
        </div>
      </div>
    </div>
  </div>
);

const Lesson4_1 = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center text-center">
        <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2">
          <span className="material-symbols-outlined">search</span>
        </div>
        <h3 className="font-bold text-sm mb-1">Pesquisa</h3>
        <p className="text-xs text-text-secondary dark:text-gray-400">Demanda Ativa</p>
      </div>
      <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center text-center">
        <div className="size-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2">
          <span className="material-symbols-outlined">image</span>
        </div>
        <h3 className="font-bold text-sm mb-1">Display</h3>
        <p className="text-xs text-text-secondary dark:text-gray-400">Interesse Visual</p>
      </div>
    </div>
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <span className="bg-primary text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">Exemplo</span>
        <span className="text-xs text-text-secondary dark:text-gray-400">Anúncio de Pesquisa</span>
      </div>
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center gap-1 mb-1">
          <span className="font-bold text-black text-xs">Patrocinado</span>
          <span className="text-gray-500 text-xs truncate">www.dramariasilva.com.br/terapia</span>
        </div>
        <h4 className="text-[#1a0dab] text-lg font-normal leading-snug hover:underline cursor-pointer">
          Psicóloga Especialista em Ansiedade | Terapia Online
        </h4>
        <p className="text-[#4d5156] text-sm mt-1 leading-snug">
          Agende sua sessão hoje mesmo. Atendimento humanizado e focado em resultados.
        </p>
      </div>
    </div>
  </div>
);

const Lesson4_2 = () => (
  <div className="space-y-6">
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-white/5">
        <span className="font-bold text-sm text-text-main dark:text-gray-200">Abordagem Inicial</span>
        <span className="text-xs font-medium text-text-muted dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Boas-vindas</span>
      </div>
      <div className="p-5">
        <div className="relative bg-[#ecfdfd] dark:bg-cyan-950/30 p-4 rounded-lg rounded-tl-none mb-4 text-text-main dark:text-gray-200 text-base leading-relaxed font-normal">
          <p>Olá! Tudo bem? Vi que você tem interesse na terapia. Fico feliz pelo seu contato! Gostaria de saber mais sobre como funciona o atendimento?</p>
        </div>
        <button className="w-full flex items-center justify-center gap-2 h-10 rounded-lg bg-primary text-black font-semibold text-sm hover:bg-primary-dark transition-colors active:scale-95">
          <span className="material-symbols-outlined" style={{fontSize: '18px'}}>content_copy</span>
          Copiar Script
        </button>
      </div>
    </div>
    <div className="pt-4">
      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-orange-500" style={{fontSize: '20px'}}>shield_with_heart</span>
        <h3 className="text-lg font-bold text-text-main dark:text-white">Contorno de Objeções</h3>
      </div>
      <div className="space-y-3">
        <details className="group bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-medium text-text-main dark:text-white">
            <span>"Achei o valor alto"</span>
            <span className="transition group-open:rotate-180"><span className="material-symbols-outlined">expand_more</span></span>
          </summary>
          <div className="border-t border-gray-100 dark:border-gray-800 p-4 text-text-muted dark:text-gray-400">
            <p className="text-sm">Foque no valor do tratamento, não no custo. Ofereça a possibilidade de recibo para reembolso.</p>
          </div>
        </details>
      </div>
    </div>
  </div>
);

const Lesson4_3 = () => (
  <div className="space-y-6">
    <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-bold text-base">Curva de Retenção</h3>
          <p className="text-xs text-text-muted dark:text-gray-400">Impacto da fidelização no valor acumulado</p>
        </div>
        <span className="material-symbols-outlined text-primary">trending_up</span>
      </div>
      <div className="relative h-40 w-full flex items-end justify-between px-2 gap-2">
        <div className="relative z-10 w-full bg-primary/20 hover:bg-primary/30 transition-colors h-[25%] rounded-t-lg"></div>
        <div className="relative z-10 w-full bg-primary/40 hover:bg-primary/50 transition-colors h-[45%] rounded-t-lg"></div>
        <div className="relative z-10 w-full bg-primary/70 hover:bg-primary/80 transition-colors h-[70%] rounded-t-lg"></div>
        <div className="relative z-10 w-full bg-primary hover:bg-primary/90 transition-colors h-[90%] rounded-t-lg"></div>
      </div>
      <div className="flex justify-between mt-3 text-xs font-medium text-text-muted dark:text-gray-400">
        <span>Inicial</span>
        <span>1 Mês</span>
        <span>6 Meses</span>
        <span>1 Ano+</span>
      </div>
    </div>
    <div>
      <h3 className="text-lg font-bold mb-4 px-1">Dicas de Pós-atendimento</h3>
      <div className="flex flex-col gap-3">
        <div className="flex gap-4 p-4 rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 items-start">
          <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400">
            <span className="material-symbols-outlined text-xl">cached</span>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-1">Feedback Contínuo</h4>
            <p className="text-sm text-text-muted dark:text-gray-400 leading-snug">Realize check-ins periódicos sobre o progresso dos objetivos terapêuticos.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Lesson5_1 = () => (
  <div className="space-y-6">
    <div className="px-4 pb-2 pt-2">
      <h3 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">4 Pilares da Gestão Clínica</h3>
    </div>
    <div className="flex flex-col p-4 gap-3 pt-0">
      <details className="flex flex-col rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark shadow-sm group overflow-hidden transition-all duration-300 open:pb-2">
        <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors list-none">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 text-primary p-2 rounded-lg flex items-center justify-center"><span className="material-symbols-outlined">account_balance_wallet</span></div>
            <p className="text-text-main dark:text-white text-sm font-semibold leading-normal">1. Organização Financeira</p>
          </div>
          <span className="material-symbols-outlined text-gray-400 transition-transform duration-300 group-open:-rotate-180">expand_more</span>
        </summary>
        <div className="px-4 pb-2 pl-[4.5rem]">
          <p className="text-text-muted dark:text-gray-300 text-sm font-normal leading-relaxed">Controle rigoroso de fluxo de caixa, separação de contas PF/PJ.</p>
        </div>
      </details>
    </div>
    <div className="flex flex-col p-4 pt-0 gap-3">
      <h3 className="text-text-main dark:text-white text-lg font-bold leading-tight">Ferramentas Recomendadas</h3>
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="px-4 py-3 font-semibold text-text-main dark:text-white">Categoria</th>
              <th className="px-4 py-3 font-semibold text-text-main dark:text-white">Nome</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            <tr className="hover:bg-gray-50 dark:hover:bg-slate-800/50">
              <td className="px-4 py-3 text-text-muted dark:text-gray-400">Agendamento</td>
              <td className="px-4 py-3 font-medium text-text-main dark:text-white">Google Calendar</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-slate-800/50">
              <td className="px-4 py-3 text-text-muted dark:text-gray-400">Prontuário</td>
              <td className="px-4 py-3 font-medium text-text-main dark:text-white">PsicoManager</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const Lesson5_2 = () => (
  <div className="space-y-6">
    <section className="mt-6 px-4">
      <h3 className="text-sm font-bold text-text-main dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-[20px]">compare_arrows</span>
        Comparativo Tributário
      </h3>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center mb-3">
            <span className="material-symbols-outlined text-gray-500">person</span>
          </div>
          <h4 className="font-semibold text-sm text-text-main dark:text-white mb-1">Pessoa Física</h4>
          <p className="text-xs text-text-muted mb-2">Tabela Progressiva</p>
          <div className="mt-auto pt-2 border-t border-gray-100 dark:border-gray-700 w-full">
            <p className="text-xs text-text-muted">Até</p>
            <p className="text-lg font-bold text-red-500">27,5%</p>
          </div>
        </div>
        <div className="relative bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border-2 border-primary/20 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">RECOMENDADO</div>
          <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-3 text-primary">
            <span className="material-symbols-outlined">domain</span>
          </div>
          <h4 className="font-semibold text-sm text-text-main dark:text-white mb-1">Pessoa Jurídica</h4>
          <p className="text-xs text-text-muted mb-2">Simples Nacional</p>
          <div className="mt-auto pt-2 border-t border-gray-100 dark:border-gray-700 w-full">
            <p className="text-xs text-text-muted">A partir de</p>
            <p className="text-lg font-bold text-primary">6%</p>
          </div>
        </div>
      </div>
    </section>
    <section className="px-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-text-main dark:text-white">Despesas Dedutíveis</h3>
        <span className="text-xs font-medium text-primary bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">Essencial</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-surface-light dark:bg-surface-dark p-3 rounded-lg border border-gray-100 dark:border-gray-800 flex flex-col gap-2">
          <div className="size-8 rounded-md bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">real_estate_agent</span>
          </div>
          <span className="text-sm font-medium text-text-main dark:text-white">Aluguel</span>
        </div>
        <div className="bg-surface-light dark:bg-surface-dark p-3 rounded-lg border border-gray-100 dark:border-gray-800 flex flex-col gap-2">
          <div className="size-8 rounded-md bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">badge</span>
          </div>
          <span className="text-sm font-medium text-text-main dark:text-white">CRP</span>
        </div>
      </div>
    </section>
  </div>
);

const Lesson5_3 = () => (
  <div className="space-y-6">
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-surface-dark shadow-sm border border-orange-100 dark:border-orange-900/30">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-400"></div>
      <div className="p-5 pl-7">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-orange-500 icon-filled">warning</span>
          <h3 className="text-text-main dark:text-white font-bold text-lg">Alerta: Fadiga por Compaixão</h3>
        </div>
        <p className="text-text-main dark:text-white text-base leading-relaxed">
          Fique atento aos sinais de exaustão emocional decorrentes da exposição contínua ao sofrimento.
        </p>
      </div>
    </div>
    <div>
      <h3 className="text-text-main dark:text-white text-xl font-bold mb-4 flex items-center gap-2">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm"><span className="material-symbols-outlined text-sm">shield</span></span>
        Estratégias de Proteção
      </h3>
      <div className="flex flex-col gap-3">
        <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 items-start">
          <div className="shrink-0 flex items-center justify-center size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"><span className="material-symbols-outlined">supervisor_account</span></div>
          <div><h4 className="text-text-main dark:text-white font-bold text-base">Supervisão Clínica</h4><p className="text-text-muted dark:text-gray-400 text-sm mt-1">Discutir casos difíceis.</p></div>
        </div>
        <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 items-start">
          <div className="shrink-0 flex items-center justify-center size-10 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"><span className="material-symbols-outlined">self_improvement</span></div>
          <div><h4 className="text-text-main dark:text-white font-bold text-base">Psicoterapia Pessoal</h4><p className="text-text-muted dark:text-gray-400 text-sm mt-1">Manter a sanidade.</p></div>
        </div>
      </div>
    </div>
    <div className="relative py-8 px-6 my-2 text-center rounded-2xl bg-gradient-to-br from-primary/5 to-primary/20 border border-primary/10">
      <p className="text-text-main dark:text-white text-xl font-bold italic leading-relaxed relative z-10">"Não preciso carregar o mundo. Preciso apenas ser uma ponte segura."</p>
      <p className="text-primary font-semibold text-sm mt-4 uppercase tracking-wide">Mantra do Psicólogo</p>
    </div>
  </div>
);

const LessonDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  let lesson: any = null;
  let module: any = null;
  
  for (const m of MODULES) {
    const l = m.lessons.find(l => l.id === id);
    if (l) {
      lesson = l;
      module = m;
      break;
    }
  }

  if (!lesson) return <div>Lesson not found</div>;

  const renderContent = () => {
    switch(id) {
      case '1.1': return <Lesson1_1 />;
      case '2.1': return <Lesson2_1 />;
      case '2.3': return <Lesson2_3 />;
      case '3.1': return <Lesson3_1 />;
      case '3.2': return <Lesson3_2 />;
      case '3.3': return <Lesson3_3 />;
      case '4.1': return <Lesson4_1 />;
      case '4.2': return <Lesson4_2 />;
      case '4.3': return <Lesson4_3 />;
      case '5.1': return <Lesson5_1 />;
      case '5.2': return <Lesson5_2 />;
      case '5.3': return <Lesson5_3 />;
      default: return (
        <div className="prose dark:prose-invert max-w-none">
          <h3 className="text-lg font-bold mb-2">Resumo da Aula</h3>
          <p className="text-sm text-text-muted dark:text-gray-300 leading-relaxed mb-4">
            Nesta aula, abordamos os fundamentos essenciais para {lesson.title.toLowerCase()}. 
            É crucial entender como aplicar estes conceitos no seu dia a dia clínico para obter melhores resultados.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-6">
            <div className="flex gap-2 items-start">
              <span className="material-symbols-outlined text-primary">lightbulb</span>
              <div>
                <h4 className="font-bold text-sm text-blue-900 dark:text-blue-100">Dica Prática</h4>
                <p className="text-xs text-blue-800 dark:text-blue-200 mt-1">
                  Aplique o exercício prático ao final desta aula para fixar o conhecimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-20 flex items-center bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm p-4 border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex-1 px-4 text-center">
          <p className="text-xs font-medium text-primary uppercase tracking-wide">Módulo {module.id.replace('m', '')}</p>
          <h1 className="text-base font-bold truncate">Aula {lesson.id}</h1>
        </div>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </header>

      {lesson.type === 'video' && (
        <div className="w-full aspect-video bg-black relative group cursor-pointer">
          <img 
            src={lesson.thumbnail || `https://picsum.photos/800/450?random=${lesson.id}`} 
            alt="Video Thumbnail" 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary/90 text-white rounded-full p-4 shadow-xl backdrop-blur-sm group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl icon-filled">play_arrow</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
            <div className="h-full bg-primary w-1/3 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 size-3 bg-primary rounded-full shadow"></div>
            </div>
          </div>
        </div>
      )}

      <div className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${lesson.type === 'video' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'}`}>
            {lesson.type === 'video' ? 'Vídeo Aula' : 'Leitura'}
          </span>
          <span className="text-xs text-text-muted dark:text-gray-400">{lesson.duration}</span>
        </div>

        <h1 className="text-2xl font-bold mb-2">{lesson.title}</h1>
        <p className="text-text-muted dark:text-gray-300 mb-6">{lesson.description}</p>

        <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mb-6"></div>

        {renderContent()}
      </div>

      <div className="mt-auto p-4 border-t border-gray-100 dark:border-gray-800">
        <button className="w-full bg-primary hover:bg-primary-dark text-black font-bold py-3.5 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-xl">check_circle</span>
          Concluir Aula
        </button>
      </div>
    </div>
  );
};

export default LessonDetail;
