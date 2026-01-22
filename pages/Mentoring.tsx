import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mentoring: React.FC = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      day: '15',
      month: 'OUT',
      title: 'Mentoria Q&A: Gestão Financeira',
      time: '19:00 - 20:30',
      status: 'upcoming', // upcoming, live, past
      platform: 'Zoom'
    },
    {
      id: 2,
      day: '22',
      month: 'OUT',
      title: 'Aula Inaugural: Módulo 4',
      time: '20:00 - 21:00',
      status: 'upcoming',
      platform: 'Youtube'
    },
    {
      id: 3,
      day: '08',
      month: 'OUT',
      title: 'Análise de Perfis ao Vivo',
      time: '19:00 - 20:30',
      status: 'past',
      platform: 'Zoom'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 border-b border-gray-100 dark:border-gray-800 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-bold flex-1">Mentoria ao Vivo</h1>
      </header>

      <div className="p-4 flex flex-col gap-6">
        {/* Banner */}
        <div className="bg-primary/10 dark:bg-primary/5 rounded-xl p-5 border border-primary/20 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-lg text-primary-dark dark:text-primary">Próximo Encontro</h2>
            <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">Hoje às 19:00h</p>
          </div>
          <button className="bg-primary text-black px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-primary-dark transition-colors">
            Entrar Agora
          </button>
        </div>

        {/* Agenda */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-text-main dark:text-white">Agenda do Mês</h3>
          <div className="flex flex-col gap-3">
            {events.map((event) => (
              <div key={event.id} className={`flex items-center p-4 rounded-xl border ${event.status === 'past' ? 'bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-gray-800 opacity-60' : 'bg-surface-light dark:bg-surface-dark border-gray-200 dark:border-gray-700 shadow-sm'}`}>
                <div className={`flex flex-col items-center justify-center w-14 h-14 rounded-xl mr-4 shrink-0 ${event.status === 'past' ? 'bg-gray-200 dark:bg-gray-700 text-gray-500' : 'bg-primary/10 text-primary'}`}>
                  <span className="text-[10px] font-bold uppercase">{event.month}</span>
                  <span className="text-xl font-bold leading-none">{event.day}</span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm text-text-main dark:text-white truncate">{event.title}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center gap-1 text-xs text-text-muted dark:text-gray-400">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-text-muted dark:text-gray-400">
                      <span className="material-symbols-outlined text-[14px]">videocam</span>
                      {event.platform}
                    </div>
                  </div>
                </div>

                <div className="ml-2">
                  {event.status === 'upcoming' ? (
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-primary">
                      <span className="material-symbols-outlined">notifications_none</span>
                    </button>
                  ) : event.status === 'past' ? (
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400">
                      <span className="material-symbols-outlined">play_circle</span>
                    </button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentoring;