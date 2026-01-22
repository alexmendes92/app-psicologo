import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import Modules from './pages/Modules';
import ModuleDetail from './pages/ModuleDetail';
import LessonDetail from './pages/LessonDetail';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Materials from './pages/Materials';
import Calculator from './pages/Calculator';
import Tools from './pages/Tools';
import Certificate from './pages/Certificate';
import Upgrade from './pages/Upgrade';
import Mentoring from './pages/Mentoring';
import Notifications from './pages/Notifications';
import Saved from './pages/Saved';
import Support from './pages/Support';
import AdCreator from './pages/AdCreator';
import PostCreator from './pages/PostCreator';
import SessionNotes from './pages/SessionNotes';
import FeeCalculator from './pages/FeeCalculator';
import ContractGenerator from './pages/ContractGenerator';
import BottomNav from './components/BottomNav';

const AppContent: React.FC = () => {
  const location = useLocation();
  const hideNavRoutes = [
    '/', 
    '/onboarding', 
    '/certificate', 
    '/upgrade', 
    '/tools/ad-creator',
    '/tools/post-creator',
    '/tools/session-notes',
    '/tools/fee-calculator',
    '/tools/contract-generator'
  ];
  const showNav = !hideNavRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-white font-sans">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/module/:id" element={<ModuleDetail />} />
        <Route path="/lesson/:id" element={<LessonDetail />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/calculator" element={<Calculator />} />
        <Route path="/tools/ad-creator" element={<AdCreator />} />
        <Route path="/tools/post-creator" element={<PostCreator />} />
        <Route path="/tools/session-notes" element={<SessionNotes />} />
        <Route path="/tools/fee-calculator" element={<FeeCalculator />} />
        <Route path="/tools/contract-generator" element={<ContractGenerator />} />
        <Route path="/certificate" element={<Certificate />} />
        
        {/* Páginas Estratégicas */}
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/mentoring" element={<Mentoring />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      {showNav && <BottomNav />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;