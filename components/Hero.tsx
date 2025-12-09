import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck, PieChart } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center bg-brand-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] bg-rose-900/10 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob"></div>
        <div className="absolute top-[40%] -left-[20%] w-[70vw] h-[70vw] bg-indigo-900/10 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob animation-delay-2000"></div>
        
        {/* Abstract Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-20 md:pt-0">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Area */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/80 backdrop-blur-md mb-8 shadow-2xl shadow-rose-900/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                <span className="text-xs font-medium text-slate-300 tracking-wider font-sans">MARKETING × DX × AI</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.2] mb-8 tracking-tight">
                代理店に<span className="text-slate-500 line-through decoration-rose-500 decoration-4 mx-2">不満</span>を<br className="hidden md:block"/>
                感じているなら、<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-indigo-400">
                  別のやり方
                </span>があります。
              </h1>

              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mb-10 font-light pl-6 border-l-2 border-rose-500/30">
                共に成長する、本質を見抜いた伴走支援。<br/>
                マーケティング・DX・AIを統合し、<br className="md:hidden"/>
                「施策の実行者」ではなく「事業成長のパートナー」としてコミットします。
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={scrollToContact}
                  className="group relative px-8 py-4 bg-slate-50 text-brand-black font-bold text-lg overflow-hidden transition-all hover:bg-rose-500 hover:text-white rounded-sm"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    無料相談を予約する
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Stats / Visual Area */}
          <div className="lg:col-span-4 relative">
             {/* Vertical Text Decoration for Japanese aesthetic */}
             <div className="hidden lg:block absolute -left-12 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-slate-800 to-transparent"></div>
             <div className="hidden lg:block absolute -left-20 top-10 writing-vertical-rl text-xs font-bold tracking-[0.3em] text-slate-600 uppercase">
                Essence over superficiality
             </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-6"
            >
              {[
                { label: "Performance", value: "3倍", sub: "パフォーマンス向上", icon: <TrendingUp className="w-5 h-5"/> },
                { label: "ROAS (2 Years)", value: "500%", sub: "高水準を維持", icon: <PieChart className="w-5 h-5"/> },
                { label: "CPA vs Avg", value: "1/2", sub: "業界平均比", icon: <ShieldCheck className="w-5 h-5"/> },
              ].map((stat, i) => (
                <div key={i} className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-rose-500/50 p-6 transition-all duration-300 rounded-xl overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 group-hover:text-rose-500 transition-all">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-serif text-white mb-1 group-hover:text-rose-400 transition-colors">{stat.value}</div>
                  <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-400">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};