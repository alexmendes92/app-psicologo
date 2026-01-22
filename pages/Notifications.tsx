import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notifications: React.FC = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: 'system',
      title: 'Módulo 4 Liberado!',
      message: 'O módulo de Funil de Atração já está disponível para você assistir.',
      time: '2h atrás',
      read: false,
      icon: 'rocket_launch',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 2,
      type: 'social',
      title: 'Dr. Roberto curtiu seu post',
      message: '"Consegui meu primeiro paciente particular..."',
      time: '5h atrás',
      read: true,
      icon: 'favorite',
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Mentoria começa em 1h',
      message: 'Prepare suas dúvidas para o encontro ao vivo de hoje.',
      time: '6h atrás',
      read: true,
      icon: 'alarm',
      color: 'bg-primary/20 text-primary-dark'
    },
    {
      id: 4,
      type: 'system',
      title: 'Nova Conquista Desbloqueada',
      message: 'Parabéns! Você completou 50% do curso.',
      time: '1d atrás',
      read: true,
      icon: 'emoji_events',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold">Notificações</h1>
        </div>
        <button className="text-xs font-bold text-primary hover:text-primary-dark">Marcar lidas</button>
      </header>

      <div className="flex flex-col">
        {notifications.map((notif) => (
          <div 
            key={notif.id} 
            className={`flex gap-4 p-4 border-b border-gray-100 dark:border-gray-800 transition-colors hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer ${!notif.read ? 'bg-primary/5 dark:bg-primary/5' : ''}`}
          >
            <div className={`size-10 rounded-full flex items-center justify-center shrink-0 ${notif.color} dark:bg-opacity-20`}>
              <span className="material-symbols-outlined text-[20px] icon-filled">{notif.icon}</span>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className={`text-sm ${!notif.read ? 'font-bold text-text-main dark:text-white' : 'font-medium text-gray-600 dark:text-gray-300'}`}>
                  {notif.title}
                </h4>
                <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">{notif.time}</span>
              </div>
              <p className="text-xs text-text-muted dark:text-gray-400 line-clamp-2">
                {notif.message}
              </p>
            </div>
            
            {!notif.read && (
              <div className="self-center">
                <div className="size-2 rounded-full bg-primary"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {notifications.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center px-6">
          <div className="size-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-300 dark:text-gray-600 mb-4">
            <span className="material-symbols-outlined text-4xl">notifications_off</span>
          </div>
          <p className="text-gray-500 font-medium">Nenhuma notificação por enquanto</p>
        </div>
      )}
    </div>
  );
};

export default Notifications;