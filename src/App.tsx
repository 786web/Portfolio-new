/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, Project } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ProjectModal } from './components/ProjectModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { FreeDemoPage } from './pages/FreeDemoPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const getInitialPage = (): PageId => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash === 'services') return 'services';
    if (hash === 'portfolio') return 'portfolio';
    if (hash === 'about' || hash === 'why-me') return 'about';
    if (hash === 'free-demo' || hash === 'special-offer') return 'free-demo';
    if (hash === 'contact') return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Handle browser back/forward and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreselectService = (serviceName: string) => {
    setPreselectedService(serviceName);
    navigateTo('free-demo');
  };

  return (
    <div className="min-h-screen bg-[#0A192F] text-slate-100 flex flex-col font-sans selection:bg-cyan-400 selection:text-slate-950">
      
      {/* Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Dynamic Page Views */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onPreselectService={handlePreselectService}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onNavigate={navigateTo}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentPage === 'free-demo' && (
          <FreeDemoPage
            onNavigate={navigateTo}
            initialServiceScope={preselectedService}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={navigateTo} />
        )}
      </main>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNavigate={navigateTo}
        />
      )}

      {/* Floating Action Dock for WhatsApp and Email */}
      <FloatingActions onNavigate={navigateTo} />

      {/* Comprehensive Site Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
