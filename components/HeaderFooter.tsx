import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-lg' : 'bg-transparent border border-transparent'}`}>
          <div className="font-serif font-bold text-xl tracking-tight text-white flex items-center gap-2">
            AsetZ <span className="text-[10px] font-sans font-normal text-slate-400 border-l border-slate-700 pl-2 hidden sm:block tracking-wider">MARKETING PARTNER</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {['process', 'case', 'pricing'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item)} 
                className="text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('booking')}
              className="text-xs font-bold uppercase tracking-widest bg-white text-black px-5 py-2 rounded-full hover:bg-rose-500 hover:text-white transition-all"
            >
              Contact
            </button>
          </nav>
          {/* Mobile Menu Button Placeholder */}
          <button onClick={() => scrollTo('booking')} className="md:hidden text-xs font-bold bg-white text-black px-4 py-2 rounded-full">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-500 py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <h2 className="text-white text-3xl font-serif font-bold mb-6">AsetZ</h2>
            <p className="text-sm max-w-xs leading-relaxed mb-8">
              AsetZ株式会社<br/>
              マーケティング × DX × AI 伴走支援<br/>
              2024年5月設立
            </p>
            <div className="text-xs">
              &copy; {new Date().getFullYear()} AsetZ Inc. All rights reserved.
            </div>
          </div>
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold mb-2">Social</span>
              <a href="#" className="hover:text-white transition-colors">X (Twitter)</a>
              <a href="#" className="hover:text-white transition-colors">Note</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold mb-2">Legal</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};