import React from 'react';
import { Section, SectionTitle } from './ui/Section';
import { Target, TrendingUp, Layers, Smartphone, Database } from 'lucide-react';

const StructureDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200 mb-12">
      <h4 className="text-center text-slate-500 text-sm font-bold tracking-widest uppercase mb-8">Service Structure</h4>
      
      <div className="flex flex-col gap-4 max-w-3xl mx-auto">
        {/* Base Layer */}
        <div className="bg-slate-900 text-white p-6 rounded-xl text-center relative overflow-hidden shadow-lg">
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 opacity-50"></div>
           <div className="relative z-10">
             <h5 className="font-serif text-xl mb-2">【ベースレイヤー】戦略・推進伴走支援</h5>
             <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-slate-300 mt-4">
               <span className="bg-slate-800 px-3 py-1 rounded-full border border-slate-700">事業理解</span>
               <span className="text-slate-600">→</span>
               <span className="bg-slate-800 px-3 py-1 rounded-full border border-slate-700">課題構造化</span>
               <span className="text-slate-600">→</span>
               <span className="bg-slate-800 px-3 py-1 rounded-full border border-slate-700">優先順位設定</span>
               <span className="text-slate-600">→</span>
               <span className="bg-slate-800 px-3 py-1 rounded-full border border-slate-700">PDCA推進</span>
             </div>
           </div>
        </div>

        {/* Connector */}
        <div className="h-8 flex justify-center">
           <div className="w-[2px] h-full bg-slate-300 relative">
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 border-r-2 border-b-2 border-slate-300 rotate-45"></div>
           </div>
        </div>

        {/* Execution Layer */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
           {["広告運用", "SEO対策", "SNS運用", "データ基盤", "DX・AI活用"].map((item, i) => (
             <div key={i} className="bg-white border border-slate-200 p-3 rounded-lg text-center text-sm font-bold text-slate-700 shadow-sm hover:border-rose-500 hover:text-rose-500 transition-colors cursor-default">
               {item}
             </div>
           ))}
        </div>
        <div className="text-center text-xs text-slate-400 mt-2">【実行レイヤー】必要に応じてモジュール選択</div>
      </div>
    </div>
  );
};

const BentoCard: React.FC<{
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}> = ({ title, subtitle, icon, children, className = "", dark = false }) => (
  <div className={`p-8 rounded-3xl flex flex-col h-full border ${
    dark 
    ? 'bg-slate-900 border-slate-800 text-white' 
    : 'bg-white border-slate-200 text-slate-800'
  } ${className} relative overflow-hidden group hover:shadow-xl transition-shadow duration-300`}>
    
    <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full transition-transform duration-500 group-hover:scale-150 opacity-10 ${dark ? 'bg-rose-500' : 'bg-slate-900'}`}></div>

    <div className="relative z-10 flex items-start justify-between mb-6">
      <div>
        <h3 className="text-2xl font-serif font-medium mb-1">{title}</h3>
        <p className={`text-xs font-bold tracking-widest uppercase ${dark ? 'text-rose-400' : 'text-rose-600'}`}>{subtitle}</p>
      </div>
      <div className={`p-3 rounded-xl ${dark ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900'}`}>
        {icon}
      </div>
    </div>
    <div className={`relative z-10 text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
      {children}
    </div>
  </div>
);

export const Approach: React.FC = () => {
  return (
    <Section background="navy">
      <SectionTitle 
        title="成果が出る理由は、本質を見抜いたプロセスにある" 
        subtitle="ESSENTIAL APPROACH" 
        center
      />

      <div className="max-w-6xl mx-auto">
        <StructureDiagram />
        
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          
          {/* 1. Strategy - Large */}
          <div className="md:col-span-6 lg:col-span-8">
            <BentoCard 
              title="Strategic Design" 
              subtitle="戦略設計の本質" 
              icon={<Target className="w-6 h-6" />}
              dark
              className="h-full min-h-[300px]"
            >
              <p className="mb-4 text-lg font-medium">戦略とは「何をやるか」ではなく「何をやらないか」を決めること。</p>
              <ul className="grid sm:grid-cols-2 gap-4 mt-6">
                <li className="space-y-2">
                  <strong className="block text-white">収益構造の可視化</strong>
                  <span className="block text-xs text-slate-400">SEO経由 1CV=¥25,650 vs リスティング経由 1CV=¥18,000。この差分を数値化し、正しい投資判断を行います。</span>
                </li>
                <li className="space-y-2">
                  <strong className="block text-white">「勝てる領域」の特定</strong>
                  <span className="block text-xs text-slate-400">競合が取っていない価値の高いニッチを発見。市場に落ちていない独自情報をもとに、1位ポジション獲得を目指します。</span>
                </li>
              </ul>
            </BentoCard>
          </div>

          {/* 2. Ads - Medium */}
          <div className="md:col-span-6 lg:col-span-4">
            <BentoCard 
              title="Ads Optimization" 
              subtitle="広告運用の本質" 
              icon={<TrendingUp className="w-6 h-6" />}
            >
              <p className="mb-4 font-bold">CPA最適化ではなく、ROAS最適化へ。</p>
              <p className="text-xs mb-4">予約数最大化だけでなく、客単価やキャンセル率を考慮した売上最大化を目指します。</p>
              <div className="p-3 bg-slate-50 rounded border border-slate-100 text-xs">
                 <div className="flex justify-between mb-1">
                   <span>CPA最適</span>
                   <span className="text-slate-400">ROAS 160%</span>
                 </div>
                 <div className="flex justify-between font-bold text-rose-600">
                   <span>ROAS最適</span>
                   <span>ROAS 400%</span>
                 </div>
              </div>
            </BentoCard>
          </div>

          {/* 3. SEO - Medium */}
          <div className="md:col-span-3 lg:col-span-4">
            <BentoCard 
              title="SEO / SGE" 
              subtitle="検索エンジン対策" 
              icon={<Layers className="w-6 h-6" />}
            >
              <p className="font-bold mb-2">テクニカル基盤 × コンテンツ × AI対策の三位一体。</p>
              <p className="text-xs">サイト速度や構造化データなどの基盤整備なしに、コンテンツは評価されません。AI検索(SGE)時代の信頼性シグナルを構築します。</p>
            </BentoCard>
          </div>

          {/* 4. SNS - Medium */}
          <div className="md:col-span-3 lg:col-span-4">
            <BentoCard 
              title="Social Media" 
              subtitle="SNS運用" 
              icon={<Smartphone className="w-6 h-6" />}
            >
               <p className="font-bold mb-2">フォロワー数ではなく、事業成果への貢献度。</p>
               <p className="text-xs">運用代行ではなく「コンテンツ提供」。御社のブランド価値を正しく伝え、将来的に自走できる体制を作ります。</p>
            </BentoCard>
          </div>

          {/* 5. Data - Large */}
          <div className="md:col-span-6 lg:col-span-4">
            <BentoCard 
              title="Data Infrastructure" 
              subtitle="データ基盤" 
              icon={<Database className="w-6 h-6" />}
              dark
              className="bg-gradient-to-br from-slate-900 to-slate-800"
            >
              <p className="mb-4 font-bold text-white">感覚ではなく、データに基づく意思決定を。</p>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1"></div>
                  <span>GA4 × BigQuery環境構築で集客チャネル別売上を可視化</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1"></div>
                  <span>Looker Studioでのリアルタイムダッシュボード</span>
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </Section>
  );
};