
import React from 'react';
import { motion } from 'framer-motion';
// Added missing icon imports GitFork and ArrowDown
import { 
  ArrowRight, CheckCircle2, TrendingUp, Target, Layers, 
  Search, Users, BarChart3, Database, MessageCircle, 
  Rocket, Calendar, ShieldCheck, Briefcase, Info, ChevronRight,
  UserCheck, Map, Smartphone, Building2, Package, Globe,
  GitFork, ArrowDown
} from 'lucide-react';
import { Section, SectionTitle } from './ui/Section';

const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <th className="p-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest text-left border-b border-slate-800">
    {children}
  </th>
);

const TableCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <td className={`p-4 text-sm text-slate-600 border-b border-slate-100 ${className}`}>
    {children}
  </td>
);

const ProposalSection: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <div id={id} className="mb-24 scroll-mt-32">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-10 h-1px bg-rose-500"></div>
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">{title}</h2>
    </div>
    {children}
  </div>
);

export const ProposalHaomil: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      {/* Title Header */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase tracking-widest mb-6">
            Confidential Strategic Proposal
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight">
            ハオミル株式会社 御中<br/>
            <span className="text-rose-600">マーケティング伴走支援 ご提案書</span>
          </h1>
          <p className="text-xl text-slate-500 font-light mb-12">
            〜 MOC事業拡大に向けた戦略立案から実行までの一気通貫支援 〜
          </p>
          <div className="flex flex-wrap gap-8 py-8 border-y border-slate-100">
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Date</div>
              <div className="text-sm font-bold text-slate-800">2025年1月</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Presented by</div>
              <div className="text-sm font-bold text-slate-800 italic font-serif">AsetZ Inc.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Contents</h3>
          <nav className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              "1. エグゼクティブサマリー",
              "2. 貴社の現状認識と課題",
              "3. ご提案の全体像",
              "4. MOCマーケティング伴走支援",
              "5. 広告運用サービス",
              "6. Shiny LP制作（サブ提案）",
              "7. 弊社の強みと実績",
              "8. お見積り",
              "9. 次のステップ"
            ].map((item, i) => (
              <a key={i} href={`#section-${i+1}`} className="group flex items-center gap-3 text-sm text-slate-600 hover:text-rose-600 transition-colors">
                <span className="text-[10px] font-serif text-slate-300 group-hover:text-rose-400">0{i+1}</span>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <ProposalSection id="section-1" title="1. エグゼクティブサマリー">
             <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-12 shadow-sm">
                <table className="w-full text-left">
                   <tbody>
                      <tr>
                         <TableCell className="bg-slate-50 font-bold w-1/3">ご支援対象</TableCell>
                         <TableCell>MOC（サロンオーナー向け代理店サービス）の事業拡大</TableCell>
                      </tr>
                      <tr>
                         <TableCell className="bg-slate-50 font-bold">目標</TableCell>
                         <TableCell>1,000店舗 → 2,000店舗への拡大を見据えたマーケティング基盤構築</TableCell>
                      </tr>
                      <tr>
                         <TableCell className="bg-slate-50 font-bold">ご提案内容</TableCell>
                         <TableCell>マーケティング伴走支援（戦略立案〜実行）+ 広告運用 + LP制作</TableCell>
                      </tr>
                      <tr>
                         <TableCell className="bg-slate-50 font-bold">推奨プラン</TableCell>
                         <TableCell className="font-bold text-rose-600">月額50万円プラン + 広告運用（4ヶ月目〜）</TableCell>
                      </tr>
                   </tbody>
                </table>
             </div>

             <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "伴走型支援", icon: <Users className="w-5 h-5 text-rose-500" />, desc: "単発制作ではなく、将来的な内製化を見据えたノウハウ蓄積型の支援を行います。" },
                  { title: "他社分析", icon: <Search className="w-5 h-5 text-rose-500" />, desc: "エンビロン等の成功事例を徹底分析し、MOC独自の勝ち筋を抽出します。" },
                  { title: "データドリブン", icon: <TrendingUp className="w-5 h-5 text-rose-500" />, desc: "CPA・LTVを可視化し、投資対効果を最大化するための意思決定を支えます。" }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                     <div className="mb-4">{item.icon}</div>
                     <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                     <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </ProposalSection>

          <ProposalSection id="section-2" title="2. 貴社の現状認識と課題">
             <div className="mb-12">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Business Structure</h4>
                <div className="relative p-10 bg-slate-900 text-white rounded-[2.5rem] overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-5">
                      <Building2 className="w-40 h-40" />
                   </div>
                   <div className="grid md:grid-cols-2 gap-12 relative z-10 items-center">
                      <div className="space-y-6">
                         <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                            <div className="text-[10px] text-rose-400 font-bold mb-1 uppercase tracking-widest">HQ: MOC</div>
                            <p className="text-sm">ホワイトニング製品・ノウハウの提供</p>
                         </div>
                         <div className="flex justify-center py-2">
                            <ArrowRight className="w-6 h-6 text-slate-600 rotate-90 md:rotate-0" />
                         </div>
                         <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                            <div className="text-[10px] text-rose-400 font-bold mb-1 uppercase tracking-widest">Clients: Franchise Salons</div>
                            <p className="text-sm">加盟サロンでの施術提供</p>
                         </div>
                      </div>
                      <div className="bg-rose-600 p-6 rounded-2xl shadow-xl shadow-rose-900/40">
                         <h5 className="font-serif font-bold mb-3 italic">Vision</h5>
                         <p className="text-sm leading-relaxed">「どのサロンに行っても『MOC』を使えば歯が綺麗になる」というブランド認知の確立</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="space-y-4 mb-16">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Key Challenges</h4>
                {[
                  { label: "ブランド統一性", desc: "各サロンで価格・見せ方がバラバラ. 統一されたブランド情報がWeb上に不足。" },
                  { label: "世界観 vs 獲得", desc: "洗練された世界観を維持しつつ、加盟店数を2倍にする攻めのマーケティングが必要。" },
                  { label: "Web戦略の不在", desc: "SEO・MEO・広告戦略が体系化されておらず、社内にノウハウが蓄積されていない。" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                     <div className="w-6 h-6 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">!</div>
                     <div>
                        <div className="text-sm font-bold text-slate-900">{item.label}</div>
                        <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>

             <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Benchmark: Environ Model</h4>
                <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
                   <p className="text-sm text-indigo-900 font-medium mb-6">エンビロンの成功要因をMOCに転用するための3軸：</p>
                   <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white p-5 rounded-xl">
                         <div className="text-xs font-bold text-indigo-600 mb-2">1. ブランド力</div>
                         <p className="text-[11px] text-slate-500">「取り扱いサロンを探す」状態を作るための認知構築</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl">
                         <div className="text-xs font-bold text-indigo-600 mb-2">2. 専門性の訴求</div>
                         <p className="text-[11px] text-slate-500">広告感のない口コミ・教育型マーケティングの徹底</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl">
                         <div className="text-xs font-bold text-indigo-600 mb-2">3. 情報統制</div>
                         <p className="text-[11px] text-slate-500">加盟店への指針・メッセージの統一ガイドライン整備</p>
                      </div>
                   </div>
                </div>
             </div>
          </ProposalSection>

          <ProposalSection id="section-3" title="3. ご提案の全体像">
             <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden mb-12">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Layers className="w-32 h-32" />
                </div>
                <div className="space-y-8 relative z-10">
                   <div>
                      <h4 className="text-rose-400 text-xs font-bold mb-4 tracking-[0.2em] uppercase">Service Areas</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                         <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                            <div className="font-bold text-sm mb-2 text-white">メイン：伴走支援</div>
                            <ul className="text-[11px] text-slate-400 space-y-1">
                               <li>・市場調査 / 競合分析</li>
                               <li>・戦略ロードマップ策定</li>
                               <li>・情報管理インフラ構築</li>
                            </ul>
                         </div>
                         <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                            <div className="font-bold text-sm mb-2 text-white">オプション：広告・LP</div>
                            <ul className="text-[11px] text-slate-400 space-y-1">
                               <li>・Meta / Google広告運用</li>
                               <li>・MOC加盟店募集LP</li>
                               <li>・Shiny 既存LP刷新</li>
                            </ul>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             <div className="space-y-6">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Recommended Roadmap</h4>
                <div className="relative pl-8 space-y-12">
                   <div className="absolute left-[3px] top-4 bottom-4 w-px bg-slate-200"></div>
                   
                   <div className="relative">
                      <div className="absolute -left-[32px] top-0 w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white">1</div>
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                         <div className="text-[10px] font-bold text-rose-500 mb-1 uppercase">Phase 1 (Month 1-3)</div>
                         <h5 className="text-base font-bold mb-2">戦略策定期</h5>
                         <p className="text-xs text-slate-500">ベンチマーク調査、ポジショニング確立、年間計画の策定</p>
                      </div>
                   </div>

                   <div className="relative">
                      <div className="absolute -left-[32px] top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white">2</div>
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                         <div className="text-[10px] font-bold text-slate-400 mb-1 uppercase">Phase 2 (Month 4-6)</div>
                         <h5 className="text-base font-bold mb-2">テスト期</h5>
                         <p className="text-xs text-slate-500">LP公開、広告配信開始、CPA基準値の特定</p>
                      </div>
                   </div>

                   <div className="relative">
                      <div className="absolute -left-[32px] top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white">3</div>
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                         <div className="text-[10px] font-bold text-slate-400 mb-1 uppercase">Phase 3 (Month 7-12)</div>
                         <h5 className="text-base font-bold mb-2">拡大期</h5>
                         <p className="text-xs text-slate-500">成功パターンの横展開、エリア拡大、内製化支援</p>
                      </div>
                   </div>
                </div>
             </div>
          </ProposalSection>

          <ProposalSection id="section-4" title="4. MOCマーケティング伴走支援">
             <div className="mb-12 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr>
                         <TableHeader>支援プラン比較</TableHeader>
                         <TableHeader>30万円プラン</TableHeader>
                         <TableHeader>50万円プラン (推奨)</TableHeader>
                         <TableHeader>70万円プラン</TableHeader>
                      </tr>
                   </thead>
                   <tbody>
                      <tr>
                         <TableCell className="font-bold">定例MTG</TableCell>
                         <TableCell>月2回</TableCell>
                         <TableCell className="bg-rose-50/30">月2回 + スポット可</TableCell>
                         <TableCell>月4回</TableCell>
                      </tr>
                      <tr>
                         <TableCell className="font-bold">戦略・分析</TableCell>
                         <TableCell>○</TableCell>
                         <TableCell className="bg-rose-50/30">○</TableCell>
                         <TableCell>◎</TableCell>
                      </tr>
                      <tr>
                         <TableCell className="font-bold">基盤構築 (CRM等)</TableCell>
                         <TableCell>△</TableCell>
                         <TableCell className="bg-rose-50/30 text-rose-600 font-bold">○ (設計〜構築)</TableCell>
                         <TableCell>◎ (カスタマイズ)</TableCell>
                      </tr>
                      <tr>
                         <TableCell className="font-bold">自動化・通知</TableCell>
                         <TableCell>×</TableCell>
                         <TableCell className="bg-rose-50/30">×</TableCell>
                         <TableCell>○</TableCell>
                      </tr>
                   </tbody>
                </table>
             </div>

             <div className="p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                   <GitFork className="w-20 h-20" />
                </div>
                <h5 className="text-rose-400 text-xs font-bold mb-6 tracking-widest uppercase">Infrastructure Example</h5>
                <div className="flex flex-col items-center gap-4">
                   <div className="flex items-center gap-3 w-full max-w-md p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] font-bold">ADS</div>
                      <span className="text-xs">広告経由の問い合わせ獲得</span>
                   </div>
                   <ArrowDown className="w-4 h-4 text-slate-600" />
                   <div className="flex items-center gap-3 w-full max-w-md p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] font-bold">CRM</div>
                      <span className="text-xs">kintone等に自動登録・管理</span>
                   </div>
                   <ArrowDown className="w-4 h-4 text-slate-600" />
                   <div className="flex items-center gap-3 w-full max-w-md p-4 bg-rose-600 rounded-xl shadow-lg">
                      <MessageCircle className="w-5 h-5 ml-2" />
                      <span className="text-xs font-bold">Slackに即時通知 → 営業即レス</span>
                   </div>
                </div>
             </div>
          </ProposalSection>

          <ProposalSection id="section-5" title="5. 広告運用サービス">
             <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                   <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-rose-500" /> Meta広告 (SNS)
                   </h5>
                   <p className="text-xs text-slate-500 leading-relaxed">
                      Instagram等での視覚的訴求. サロンオーナー層の関心に基づいた高精度ターゲティング。
                   </p>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                   <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Search className="w-5 h-5 text-rose-500" /> Google検索広告
                   </h5>
                   <p className="text-xs text-slate-500 leading-relaxed">
                      「ホワイトニング 導入」等の明確な検索意図を持つユーザーへアプローチ。
                   </p>
                </div>
             </div>

             <div className="bg-slate-900 text-white p-8 rounded-3xl">
                <h5 className="text-rose-400 text-xs font-bold mb-6 tracking-widest uppercase">Simulation (¥1M budget)</h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                   <div className="text-center">
                      <div className="text-[10px] text-slate-500 uppercase mb-1">CPA ¥30k (Optimistic)</div>
                      <div className="text-3xl font-serif font-bold text-rose-500">33<span className="text-sm font-sans ml-1 text-slate-400">leads</span></div>
                   </div>
                   <div className="text-center border-x border-white/10 px-4">
                      <div className="text-[10px] text-slate-500 uppercase mb-1">CPA ¥50k (Base)</div>
                      <div className="text-3xl font-serif font-bold text-white">20<span className="text-sm font-sans ml-1 text-slate-400">leads</span></div>
                   </div>
                   <div className="text-center">
                      <div className="text-[10px] text-slate-500 uppercase mb-1">CPA ¥80k (Safe)</div>
                      <div className="text-3xl font-serif font-bold text-slate-400">12<span className="text-sm font-sans ml-1 text-slate-400">leads</span></div>
                   </div>
                </div>
             </div>
          </ProposalSection>

          <ProposalSection id="section-6" title="6. Shiny LP制作（サブ提案）">
             <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                   <div className="md:w-1/2">
                      <h5 className="font-bold text-slate-900 mb-4">現状のShiny LPリニューアル</h5>
                      <p className="text-sm text-slate-500 leading-relaxed mb-6">
                         既存LPの「情報の古さ」を解消し、洗練されたデザインと成約力の高い構成に刷新します。
                      </p>
                      <ul className="space-y-3">
                         {["デザイン刷新", "構成改善", "レスポンシブ対応", "成約導線最適化"].map((item, i) => (
                           <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                           </li>
                         ))}
                      </ul>
                   </div>
                   <div className="md:w-1/2 bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-center">
                      <div className="text-center">
                         <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Estimated Cost</div>
                         <div className="text-2xl font-serif font-bold text-slate-900">¥100,000 〜 ¥500,000</div>
                         <p className="text-[10px] text-slate-400 mt-2">※ボリュームにより変動いたします</p>
                      </div>
                   </div>
                </div>
             </div>
          </ProposalSection>

          <ProposalSection id="section-7" title="7. 弊社の強みと実績">
             <div className="grid gap-6 mb-12">
                {[
                  { title: "事例1: パフォーマンス3倍向上", desc: "インバウンドレンタカー事業にて、ROAS最適化への転換とデータ基盤構築により、売上規模を3倍に拡大。" },
                  { title: "事例2: 前年比売上200%達成", desc: "月間250万UUの旅行メディアにて、広告戦略刷新後3ヶ月で達成。ROAS500%を2年間維持。" },
                  { title: "事例3: 安定リード獲得", desc: "IT起業支援サービスにて、CPA¥3,000(業界平均の半額)を維持し、月間200件以上のリード獲得体制を3年継続。" }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-xl">
                     <h5 className="font-bold text-slate-900 mb-2">{item.title}</h5>
                     <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
             </div>
          </ProposalSection>

          <ProposalSection id="section-8" title="8. お見積り">
             <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm mb-12">
                <div className="p-6 bg-slate-900 text-white flex justify-between items-center">
                   <h5 className="font-bold">年間費用シミュレーション (推奨案)</h5>
                   <div className="text-xs text-slate-400">Unit: JPY</div>
                </div>
                <div className="overflow-x-auto">
                   <table className="w-full text-left">
                      <thead>
                         <tr className="bg-slate-50">
                            <TableCell className="font-bold">期間</TableCell>
                            <TableCell className="font-bold">伴走支援</TableCell>
                            <TableCell className="font-bold">広告運用</TableCell>
                            <TableCell className="font-bold">広告費</TableCell>
                            <TableCell className="font-bold">月額合計</TableCell>
                         </tr>
                      </thead>
                      <tbody>
                         <tr>
                            <TableCell>1-3ヶ月目</TableCell>
                            <TableCell>¥500,000</TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>-</TableCell>
                            <TableCell className="font-bold">¥500,000</TableCell>
                         </tr>
                         <tr>
                            <TableCell>4-6ヶ月目</TableCell>
                            <TableCell>¥500,000</TableCell>
                            <TableCell>¥200,000</TableCell>
                            <TableCell>¥600,000</TableCell>
                            <TableCell className="font-bold text-rose-600">¥1,300,000</TableCell>
                         </tr>
                         <tr>
                            <TableCell>7-12ヶ月目</TableCell>
                            <TableCell>¥500,000</TableCell>
                            <TableCell>¥200,000</TableCell>
                            <TableCell>¥1,000,000</TableCell>
                            <TableCell className="font-bold text-rose-600">¥1,700,000</TableCell>
                         </tr>
                      </tbody>
                      <tfoot>
                         <tr className="bg-slate-900 text-white">
                            <TableCell colSpan={4} className="text-right font-bold">年間概算合計</TableCell>
                            <TableCell className="font-serif font-bold text-lg text-rose-400">約¥19,200,000</TableCell>
                         </tr>
                      </tfoot>
                   </table>
                </div>
             </div>
             <p className="text-[10px] text-slate-400 italic">※表示価格は全て税抜きです。契約期間は3ヶ月単位となります。</p>
          </ProposalSection>

          <ProposalSection id="section-9" title="9. 次のステップ">
             <div className="bg-rose-600 text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Rocket className="w-24 h-24" />
                </div>
                <h4 className="text-white text-lg font-serif font-bold mb-8">今後のスケジュール (案)</h4>
                <div className="space-y-6 relative z-10">
                   {[
                     { date: "1月第2週", text: "本提案書の確認・ご質問対応" },
                     { date: "1月第2-3週", text: "社内ご検討・MTG実施" },
                     { date: "1月末", text: "契約締結" },
                     { date: "2月〜", text: "プロジェクト開始 (Phase 1)" }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 items-center">
                        <div className="w-24 text-[10px] font-bold uppercase tracking-widest text-rose-200 shrink-0">{item.date}</div>
                        <div className="h-px flex-grow bg-white/20"></div>
                        <div className="text-sm font-bold">{item.text}</div>
                     </div>
                   ))}
                </div>
             </div>

             <div className="mt-20 text-center">
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  本提案に関するお問い合わせは、下記までお気軽にご連絡ください。<br/>
                  御社の事業成長に全力を尽くすことをお約束いたします。
                </p>
                <div className="inline-flex flex-col items-center">
                   <div className="font-serif font-bold text-2xl text-slate-900 mb-2">AsetZ Inc.</div>
                   <div className="text-xs text-slate-400 uppercase tracking-widest">Growth Partnership Team</div>
                </div>
             </div>
          </ProposalSection>

        </div>
      </section>

      {/* Floating TOC for desktop */}
      <div className="hidden xl:block fixed top-1/2 right-8 -translate-y-1/2 w-48 space-y-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
         <div className="mb-4 border-b border-slate-100 pb-2 text-slate-300">Navigation</div>
         {[1,2,3,4,5,6,7,8,9].map(i => (
           <a key={i} href={`#section-${i}`} className="block hover:text-rose-500 transition-colors py-1">Section 0{i}</a>
         ))}
      </div>
    </div>
  );
};
