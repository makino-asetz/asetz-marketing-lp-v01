
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

export type PageType = 'main' | 'lp-production';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageType>('main');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className={`font-sans antialiased selection:bg-rose-500 selection:text-white ${activePage === 'main' ? 'text-slate-200 bg-brand-black' : 'text-slate-900 bg-white'}`}>
      <Header activePage={activePage} onPageChange={setActivePage} />
      <main>
        {activePage === 'main' ? (
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
        ) : (
          <LPProduction />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
