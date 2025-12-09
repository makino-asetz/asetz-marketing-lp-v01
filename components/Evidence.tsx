import React from 'react';
import { Section, SectionTitle } from './ui/Section';

const ProcessStep: React.FC<{
  phase: string;
  title: string;
  duration: string;
  desc: string;
  isLast?: boolean;
}> = ({ phase, title, duration, desc, isLast }) => (
  <div className="relative pl-8 pb-12 md:pl-0 md:pb-0 md:flex md:gap-12 group">
    {/* Mobile Vertical Line */}
    <div className={`absolute top-0 left-[11px] w-[2px] h-full bg-slate-800 md:hidden ${isLast ? 'h-0' : ''}`}></div>
    
    {/* Left Side (Title & Duration) */}
    <div className="md:w-1/2 md:text-right md:pr-16 md:relative">
      <div className="text-rose-500 text-xs font-bold tracking-widest mb-2 font-sans">{phase}</div>
      <h3 className="text-xl md:text-2xl font-serif text-white mb-2">{title}</h3>
      <span className="inline-block px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700 font-sans">{duration}</span>
    </div>
    
    {/* Center Dot (Desktop) */}
    <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 flex-col items-center h-full">
       <div className="w-6 h-6 rounded-full bg-slate-900 border-2 border-rose-500 z-10 relative flex items-center justify-center">
         <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
       </div>
       {!isLast && <div className="w-[1px] h-full bg-slate-800 mt-2"></div>}
    </div>
    
    {/* Mobile Dot */}
    <div className="absolute left-0 top-1 md:hidden w-6 h-6 rounded-full bg-slate-900 border-2 border-rose-500 z-10"></div>
    
    {/* Right Side (Description) */}
    <div className="mt-4 md:mt-0 md:w-1/2 md:pl-16">
      <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
    </div>
  </div>
);

const CaseStat: React.FC<{ value: string; label: string; sub?: string }> = ({ value, label, sub }) => (
  <div className="border-l-2 border-rose-500 pl-4">
    <div className="text-2xl md:text-4xl font-serif text-white mb-1 tracking-tight">{value}</div>
    <div className="text-[10px] md:text-xs font-bold text-rose-400 uppercase tracking-wider mb-1 font-sans">{label}</div>
    {sub && <div className="text-xs text-slate-500">{sub}</div>}
  </div>
);

export const Evidence: React.FC = () => {
  return (
    <>
      <Section background="black" id="process">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="支援の進め方" subtitle="PROCESS" center />
          
          <div className="space-y-8 md:space-y-0 relative mt-16 md:mt-24">
            <ProcessStep 
              phase="PHASE 01"
              title="基盤構築"
              duration="1-3ヶ月"
              desc="事業・収益構造の理解、現状分析（広告、SEO、データ環境）、課題の構造化と優先順位設定。まずは正しいデータが取れるデータ基盤を整備します。"
            />
            <ProcessStep 
              phase="PHASE 02"
              title="運用改善"
              duration="4-6ヶ月"
              desc="優先施策の実行、週次での振り返りと調整。CPA最適化からROAS最適化への転換を行い、確実な成果を作っていきます。"
            />
            <ProcessStep 
              phase="PHASE 03"
              title="拡大・自走化"
              duration="7ヶ月〜"
              desc="新規施策へのチャレンジ、社内へのナレッジ移管、自走体制構築支援。私たちが抜けても回る「強い組織」を作ります。"
              isLast
            />
          </div>
        </div>
      </Section>

      <Section background="dark" id="case">
        <SectionTitle title="実績・事例" subtitle="CASE STUDY" />
        
        <div className="grid gap-8">
          {/* Case 1 */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 md:p-12 rounded-3xl hover:bg-slate-900 transition-colors">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-rose-500 text-xs font-bold tracking-widest uppercase mb-4 block">Case 01 — Inbound Tourism</span>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">インバウンドレンタカー事業</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  CPA最適だけでは売上最大化できていない課題に対し、ROAS最適化へ転換。季節性・地域性を考慮した動的予算配分を実施。
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">GA4×BigQuery</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">ROAS最適化</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 md:gap-8 bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-800">
                <CaseStat value="3倍" label="Performance" sub="CPA維持で売上規模拡大" />
                <CaseStat value="2-3倍" label="Seasonal Growth" sub="季節変動に合わせた予算配分" />
              </div>
            </div>
          </div>

          {/* Case 2 & 3 */}
          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:bg-slate-900 transition-colors flex flex-col justify-between">
                <div>
                  <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 block">Case 02 — Travel Media</span>
                  <h3 className="text-2xl font-serif text-white mb-4">旅行関連メディア（250万UU）</h3>
                  <div className="mt-8 space-y-6">
                    <CaseStat value="200%" label="YoY Sales" sub="前年比売上" />
                    <CaseStat value="500%" label="ROAS" sub="2年間維持" />
                  </div>
                </div>
             </div>

             <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:bg-slate-900 transition-colors flex flex-col justify-between">
                <div>
                  <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4 block">Case 03 — SaaS / B2B</span>
                  <h3 className="text-2xl font-serif text-white mb-4">IT起業支援サービス</h3>
                  <div className="mt-8 space-y-6">
                    <CaseStat value="¥3,000" label="CPA" sub="業界平均の半額" />
                    <CaseStat value="200+" label="Monthly Leads" sub="安定リード獲得" />
                  </div>
                </div>
             </div>
          </div>

          {/* SEO Highlight */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
             <div>
               <h4 className="text-white font-bold mb-2">SEO実績ハイライト</h4>
               <p className="text-slate-400 text-sm">テクニカルSEO × 高品質コンテンツ</p>
             </div>
             <div className="flex gap-8">
               <div className="text-center">
                  <div className="text-2xl font-serif text-white">13.5<span className="text-sm">倍</span></div>
                  <div className="text-[10px] text-slate-500 uppercase">PV Growth (8 months)</div>
               </div>
               <div className="text-center">
                  <div className="text-2xl font-serif text-white">top 5</div>
                  <div className="text-[10px] text-slate-500 uppercase">Big Keyword Rank</div>
               </div>
             </div>
          </div>
        </div>
      </Section>
    </>
  );
};