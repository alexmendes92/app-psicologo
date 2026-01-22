import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen pb-24">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
        <h1 className="text-xl font-bold">Meu Perfil</h1>
        <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <div className="p-4 flex flex-col gap-6">
        <div className="flex flex-col items-center gap-4">
          <div className="relative group">
            <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-primary to-blue-400">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtea1QD_4ibgAtt-25r2nb-B58U30q1-s6MSLhNaybf976pqEw34TkcXfgsgKnmg58h-4g9GP3w4G06XS6y6M12RzoIRQvN6Z5rzmupp9dP3MFiNjqEly_gkXCZ72e1T7HaN7_tHu23ThQ_XMCBi0qBSudOvzz-rgay9Ntk_FtR5DOXEDdnst7l4zu1IblZrux__SY0JXlkbjrOk1-vrEq31rr8KoJHw1igjaU6Nu3FoarFYNmhKn7QjT_5I84YXTPUmf_OGWWsw" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover border-4 border-background-light dark:border-background-dark"
              />
            </div>
            <div className="absolute bottom-1 right-1 bg-primary text-black rounded-full p-1.5 border-2 border-background-light dark:border-background-dark shadow-sm">
              <span className="material-symbols-outlined text-[16px] font-bold block">edit</span>
            </div>
          </div>
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-bold">Dra. Ana Silva</h2>
            <p className="text-primary font-medium text-sm tracking-wide">Psicóloga Clínica</p>
            <p className="text-text-muted dark:text-gray-400 text-sm">CRP 06/12345</p>
          </div>
        </div>

        {/* Upgrade Banner (Mini) */}
        <Link to="/upgrade" className="flex items-center justify-between p-3 bg-gradient-to-r from-primary to-blue-500 rounded-xl text-white shadow-lg shadow-primary/20">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined">diamond</span>
            <span className="font-bold text-sm">Seja Premium</span>
          </div>
          <span className="text-xs bg-white/20 px-2 py-1 rounded">Upgrade</span>
        </Link>

        {/* Progress */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">school</span>
              <h3 className="font-bold">Progresso do Curso</h3>
            </div>
            <span className="text-xs font-semibold bg-primary/10 text-primary-dark dark:text-primary px-2 py-1 rounded-full">Módulo Atual: Marketing</span>
          </div>
          <div className="flex items-end justify-between mb-2">
            <span className="text-3xl font-bold">75%</span>
            <span className="text-sm text-text-muted dark:text-gray-400 mb-1">Concluído</span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
            <div className="bg-primary h-3 rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Galeria de Conquistas</h3>
            <button className="text-sm text-primary font-medium hover:underline">Ver todas</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center gap-2 text-center group">
              <div className="w-full aspect-square bg-surface-light dark:bg-surface-dark rounded-xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                <img alt="Metal dumbbell" className="w-12 h-12 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1dYbz9M9QhjqdQjUw9gD91QQaq7nbkYdVV8KDHl1fgaSB6hY5k-DVUcEMYNhKg1whlFP3mVxfbT7NDDh9GmD-acYHy7kCvoX3Sb2lRuP1Vc3FKlGDTm1fXzCBPMnSqerOfwPN_EVHMO1qYT0FCzw3Er-HmK38g-i5LPlFpchT7mGWd8NQjQ3LtUrczstgsDgWMwS-jmrHFqBKELaidlcK1rkO9D2Ubw5L61rXkV7m3z7Sd9IIdcCG8ZrUMuNXTVpae3qqDPR3cA"/>
              </div>
              <div>
                <p className="text-xs font-bold leading-tight">Mentalidade de Ferro</p>
                <p className="text-[10px] text-primary mt-0.5 font-medium">Conquistado</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 text-center group">
              <div className="w-full aspect-square bg-surface-light dark:bg-surface-dark rounded-xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                <img alt="Instagram camera" className="w-12 h-12 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCn9uU6wiotTjTMhbDeeIhVfzgypjy6yvIMLouLQIX_dwVLYIiW_CR4lDfLy3uTzgqt2mjnIJU4g2yM3Hlz6icgiT-yHxfRW0w2GCEhRpZcGu74kOzWvge6-uCMJLXINV8cN7SJijQU3GrIjeACP_b5LGBh2tT8vlMcZaV8NH-dBi3O3nYMPvSXj1Q6JBpGRqgAUMTJBG8BaJjLH5S7As1Td-HCmAb-6Af0V2Fqs8oPaFmIPc9WQn0xXkABzdYHcGFwcG5WCrauA"/>
              </div>
              <div>
                <p className="text-xs font-bold leading-tight">Expert em Instagram</p>
                <p className="text-[10px] text-primary mt-0.5 font-medium">Conquistado</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-full aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700 relative opacity-70">
                <img alt="Chart icon" className="w-12 h-12 object-contain grayscale opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ7WJLFCKOsTWVu6JI8AOyyHAB6aSSZ9mcVzFKD-LWJFgnpT05S01NWkYsyStYEVPLHL69cEwkyvi9ed6HmsyXws-eHuamD528xvJFaqx128wh1WL1mN-4DDxCSZteKxyI2tTOozrsXyiOUvjS_xYQti6imYy5ZoD6LszC61c08LBlqZQyRplNWV-XpP7w92Zdw5BAdb9JyrzraWd_gzg3f2lGmdwGoG-9Y4pK0jNGP2xrlz8ICLiYcaAmuS_Nx2FkYdqz-YcfCw"/>
                <div className="absolute bottom-2 right-2 bg-gray-500 rounded-full p-0.5">
                  <span className="material-symbols-outlined text-[10px] text-white block">lock</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 leading-tight">Mestre da Gestão</p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">Em andamento</p>
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <Link to="/saved" className="flex items-center justify-between w-full p-4 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 group active:scale-[0.98] transition-all">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400">
                <span className="material-symbols-outlined">bookmark</span>
              </div>
              <span className="font-semibold">Itens Salvos</span>
            </div>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </Link>

          <Link to="/certificate" className="flex items-center justify-between w-full p-4 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 group active:scale-[0.98] transition-all">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                <span className="material-symbols-outlined">workspace_premium</span>
              </div>
              <span className="font-semibold">Meus Certificados</span>
            </div>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </Link>
          
          <Link to="/support" className="flex items-center justify-between w-full p-4 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 group active:scale-[0.98] transition-all">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <span className="font-semibold">Ajuda e Suporte</span>
            </div>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </Link>
          
          <button className="w-full py-3 text-red-500 font-medium text-sm hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors mt-2">
            Sair da conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;