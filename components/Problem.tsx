import React from 'react';
import { Section, SectionTitle } from './ui/Section';
import { motion } from 'framer-motion';
import { UserX, DollarSign, FileQuestion, RefreshCw, AlertTriangle, Repeat, Ghost } from 'lucide-react';

const DataCard: React.FC<{
  title: string;
  percent: string;
  desc: string;
  icon: React.ReactNode;
  idx: number;
}> = ({ title, percent, desc, icon, idx }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    className="group relative p-6 md:p-8 bg-slate-900 border border-slate-800 hover:border-rose-500/50 transition-all duration-300 rounded-2xl"
  >
    <div className="absolute top-4 right-4 text-slate-700 group-hover:text-rose-500 transition-colors">
      {icon}
    </div>
    <div className="mb-4">
      <h3 className="text-lg font-bold text-slate-200 mb-2">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl md:text-5xl font-serif text-white group-hover:text-rose-400 transition-colors">{percent}</span>
      </div>
    </div>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const VoiceBubble: React.FC<{ text: string; align: 'left' | 'right' }> = ({ text, align }) => (
  <div className={`flex w-full mb-4 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
    <div className={`max-w-[85%] md:max-w-[70%] p-4 rounded-2xl text-sm leading-relaxed ${
      align === 'right' 
      ? 'bg-rose-900/20 border border-rose-900/50 text-rose-100 rounded-tr-sm' 
      : 'bg-slate-800/50 border border-slate-700 text-slate-300 rounded-tl-sm'
    }`}>
      "{text}"
    </div>
  </div>
);

export const Problem: React.FC = () => {
  return (
    <Section background="black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <div>
            <SectionTitle 
              title="こんな課題を、感じていませんか？" 
              subtitle="PAIN POINTS" 
            />
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              多くのマーケティング担当者が抱える悩み。<br/>
              それは個人の能力不足ではなく、<br/>
              <span className="text-white border-b border-rose-500">業界の構造的な歪み</span>に原因があります。
            </p>
            
            <div className="bg-slate-900/30 p-6 md:p-8 rounded-2xl border border-slate-800">
              <h3 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-6">現場のリアルな声</h3>
              <VoiceBubble text="毎月レポートは来るが、何をすべきか分からない。聞いても教科書的な答えしか返ってこない。" align="left" />
              <VoiceBubble text="担当者が半年で3回変わった。そのたびにゼロから説明し直し。" align="right" />
              <VoiceBubble text="うちの事業を理解していない提案ばかり..." align="left" />
              <VoiceBubble text="代理店に任せきりで、社内にノウハウが残らない。" align="right" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 content-center">
            <DataCard 
              idx={0}
              title="相談相手がいない" 
              percent="50.4%" 
              desc="社内にマーケティング施策について深く議論できるパートナーが不在。" 
              icon={<UserX className="w-6 h-6"/>}
            />
            <DataCard 
              idx={1}
              title="金額に見合わない" 
              percent="54.2%" 
              desc="広告代理店の費用が高いと感じているが、成果が見えない。" 
              icon={<DollarSign className="w-6 h-6"/>}
            />
            <DataCard 
              idx={2}
              title="提案がない" 
              percent="36.1%" 
              desc="毎月費用を払っているのに、新しい提案がなく現状維持。" 
              icon={<FileQuestion className="w-6 h-6"/>}
            />
            <DataCard 
              idx={3}
              title="担当がすぐ変わる" 
              percent="22.9%" 
              desc="引き継ぎのたびにゼロから説明。ナレッジが蓄積されない。" 
              icon={<RefreshCw className="w-6 h-6"/>}
            />
          </div>
        </div>

        {/* Root Cause Analysis - Diagrammatic Look */}
        <div className="relative border-t border-slate-800 pt-24">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-black px-6 text-rose-500 text-sm font-bold tracking-widest uppercase border border-slate-800 rounded-full py-1">
            WHY IT HAPPENS
          </div>

          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">なぜ、これらの問題が起きるのか</h3>
            <p className="text-slate-400">一般的な代理店モデルが抱える、構造的な限界</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Repeat className="w-8 h-8 text-rose-500" />,
                title: "構造的な担当交代",
                bg: "1人で10〜20社を担当し、離職率も高い業界構造。事業理解が深まる前に担当が変わるため、本質的な支援が困難です。"
              },
              {
                icon: <Ghost className="w-8 h-8 text-rose-500" />,
                title: "思考停止した提案",
                bg: "ルーティン運用で手一杯になり、戦略を考える時間がない。リスクを取った提案よりも「無難な現状維持」が優先されがちです。"
              },
              {
                icon: <AlertTriangle className="w-8 h-8 text-rose-500" />,
                title: "部分最適の罠",
                bg: "「CPAを下げる」ことが目的化。月1回の報告だけでは事業の本質は見えず、的外れな提案が続きます。"
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:bg-slate-800/80 transition-colors">
                <div className="mb-6 bg-slate-950 w-16 h-16 rounded-full flex items-center justify-center border border-slate-800">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.bg}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 py-12 px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-y border-slate-700 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>
             <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>
             
             <h3 className="text-xl md:text-3xl font-serif text-white leading-relaxed z-10 relative">
               「施策の実行者」と「事業成長のパートナー」は、<br className="md:hidden"/>
               <span className="text-rose-400 italic mx-2">根本的に</span>違います。
             </h3>
          </div>
        </div>
      </div>
    </Section>
  );
};