
import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageType } from '../App';

interface HeaderProps {
  activePage: PageType;
  onPageChange: (page: PageType) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onPageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePageTransition = (page: PageType) => {
    onPageChange(page);
    setIsDropdownOpen(false);
  };

  const isMain = activePage === 'main';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border ${
          isScrolled 
            ? (isMain ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200 shadow-lg') 
            : 'bg-transparent border-transparent'
          } backdrop-blur-md`}>
          
          <div 
            onClick={() => handlePageTransition('main')}
            className={`font-serif font-bold text-xl tracking-tight cursor-pointer flex items-center gap-2 ${isMain ? 'text-white' : 'text-slate-900'}`}
          >
            AsetZ <span className={`text-[10px] font-sans font-normal border-l pl-2 hidden sm:block tracking-wider ${isMain ? 'text-slate-400 border-slate-700' : 'text-slate-500 border-slate-300'}`}>MARKETING PARTNER</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {/* Service Dropdown */}
            <div className="relative">
              <button 
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors ${isMain ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-rose-600'}`}
              >
                Service <ChevronDown className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className={`absolute top-full right-0 mt-4 w-64 rounded-2xl border shadow-2xl p-2 overflow-hidden ${isMain ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
                  >
                    <button 
                      onClick={() => handlePageTransition('main')}
                      className={`w-full text-left p-4 rounded-xl transition-all flex flex-col gap-1 ${activePage === 'main' ? (isMain ? 'bg-slate-800' : 'bg-slate-50') : (isMain ? 'hover:bg-slate-800' : 'hover:bg-slate-50')}`}
                    >
                      <span className={`text-xs font-bold ${isMain ? 'text-white' : 'text-slate-900'}`}>マーケティング伴走支援</span>
                      <span className="text-[10px] text-slate-500">戦略設計から実行・DXまで統合支援</span>
                    </button>
                    <button 
                      onClick={() => handlePageTransition('lp-production')}
                      className={`w-full text-left p-4 rounded-xl transition-all flex flex-col gap-1 ${activePage === 'lp-production' ? (isMain ? 'bg-slate-800 text-rose-400' : 'bg-rose-50 text-rose-600') : (isMain ? 'hover:bg-slate-800' : 'hover:bg-slate-50')}`}
                    >
                      <span className={`text-xs font-bold ${activePage === 'lp-production' ? '' : (isMain ? 'text-slate-300' : 'text-slate-700')}`}>LP制作 / 継続改善</span>
                      <span className="text-[10px] text-slate-500">市場調査から始まる本質のLP制作</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {isMain && ['process', 'case', 'pricing'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item)} 
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${isMain ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {item}
              </button>
            ))}

            <button 
              onClick={() => scrollTo('booking')}
              className={`text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full transition-all ${isMain ? 'bg-white text-black hover:bg-rose-500 hover:text-white' : 'bg-slate-900 text-white hover:bg-rose-600'}`}
            >
              Contact
            </button>
          </nav>

          <button onClick={() => scrollTo('booking')} className={`md:hidden text-xs font-bold px-4 py-2 rounded-full ${isMain ? 'bg-white text-black' : 'bg-slate-900 text-white'}`}>
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export const Footer: React.FC<{ onPageChange?: (page: PageType) => void }> = ({ onPageChange }) => {
  return (
    <footer className="bg-black text-slate-500 py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start md:items-end">
          <div className="md:col-span-4">
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
          
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-12 text-sm">
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold mb-2">Service Cases</span>
              <button 
                onClick={() => onPageChange?.('proposal-haomil')}
                className="text-left hover:text-rose-400 transition-colors flex items-center gap-2 group"
              >
                <FileText className="w-3 h-3 text-slate-600 group-hover:text-rose-500" />
                ハオミル様 支援提案書 v01
              </button>
              <button 
                onClick={() => onPageChange?.('proposal-haomil-v2')}
                className="text-left hover:text-rose-400 transition-colors flex items-center gap-2 group"
              >
                <FileText className="w-3 h-3 text-slate-600 group-hover:text-rose-500" />
                ハオミル様 支援提案書 v02
              </button>
              <button 
                onClick={() => onPageChange?.('lp-production')}
                className="text-left hover:text-white transition-colors"
              >
                LP制作事例
              </button>
            </div>
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
