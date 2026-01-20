
import React, { useState, useEffect } from 'react';
import { Header, Footer } from './components/HeaderFooter';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Stance } from './components/Stance';
import { WhyInHouse } from './components/WhyInHouse';
import { Frameworks } from './components/Frameworks';
import { Approach } from './components/Approach';
import { Evidence } from './components/Evidence';
import { Closing } from './components/Closing';
import { BookingSection } from './components/BookingSection';
import { LPProduction } from './components/LPProduction';
import { ProposalHaomil } from './components/ProposalHaomil';
import { ProposalHaomilV2 } from './components/ProposalHaomilV2';

export type PageType = 'main' | 'lp-production' | 'proposal-haomil' | 'proposal-haomil-v2';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageType>('main');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const showGlobalNav = activePage !== 'proposal-haomil' && activePage !== 'proposal-haomil-v2';

  const renderContent = () => {
    switch (activePage) {
      case 'main':
        return (
          <>
            <Hero />
            <Problem />
            <Stance />
            <WhyInHouse />
            <Frameworks />
            <Approach />
            <Evidence />
            <Closing />
            <BookingSection />
          </>
        );
      case 'lp-production':
        return <LPProduction />;
      case 'proposal-haomil':
        return <ProposalHaomil />;
      case 'proposal-haomil-v2':
        return <ProposalHaomilV2 />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className={`font-sans antialiased selection:bg-rose-500 selection:text-white ${activePage === 'main' ? 'text-slate-200 bg-brand-black' : 'text-slate-900 bg-white'}`}>
      {showGlobalNav && <Header activePage={activePage} onPageChange={setActivePage} />}
      <main>
        {renderContent()}
      </main>
      {showGlobalNav && <Footer onPageChange={setActivePage} />}
    </div>
  );
};

export default App;
