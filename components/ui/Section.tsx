
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'dark' | 'light' | 'navy' | 'black' | 'white';
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, background = 'black' }) => {
  const getBgColor = () => {
    switch(background) {
      case 'white': return 'bg-white text-slate-900';
      case 'light': return 'bg-slate-50 text-slate-900';
      case 'navy': return 'bg-brand-navy text-white';
      case 'dark': return 'bg-brand-dark text-white';
      case 'black': return 'bg-brand-black text-white';
      default: return 'bg-brand-black text-white';
    }
  };

  return (
    <section 
      id={id} 
      className={`py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${getBgColor()} ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export const SectionTitle: React.FC<{ 
  title: string; 
  subtitle?: string; 
  center?: boolean;
  light?: boolean;
}> = ({ title, subtitle, center = false, light = false }) => (
  <div className={`mb-20 ${center ? 'text-center' : 'text-left'}`}>
    {subtitle && (
      <span className="block mb-4 text-xs font-bold tracking-[0.2em] uppercase text-rose-500 font-sans">
        — {subtitle}
      </span>
    )}
    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight ${light ? 'text-slate-900' : 'text-white'}`}>
      {title}
    </h2>
  </div>
);
