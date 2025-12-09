import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-slate-800 bg-brand-black selection:bg-rose-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Stance />
        <WhyInHouse />
        <Frameworks />
        <Approach />
        <Evidence />
        <Closing />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;