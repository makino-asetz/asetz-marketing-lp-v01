
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Search, BarChart, Layout, Code, RefreshCcw, 
  CheckCircle2, XCircle, HelpCircle, Plus, Minus, Users, Target, Rocket,
  FileText, ChevronDown, Eye, Info, AlertCircle, TrendingUp, Map,
  ChevronRight, Smile, Zap, CreditCard, MessageCircle, ShieldCheck,
  MousePointer2, Smartphone, Type, Image as ImageIcon,
  ThumbsUp, ThumbsDown, Layers, Bell, Calendar as CalendarIcon, Ticket, ArrowDown,
  BarChart3
} from 'lucide-react';
import { Section, SectionTitle } from './ui/Section';

const ProblemCard: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mb-6">
      <XCircle className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-sm text-slate-700 leading-relaxed">{desc}</p>
  </div>
);

const SampleToggle: React.FC<{ 
  label: string; 
  title: string;
  children: React.ReactNode;
}> = ({ label, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mt-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 px-8 py-4 rounded-full border text-sm font-bold transition-all ${
          isOpen 
            ? 'bg-slate-900 text-white border-slate-900 shadow-xl' 
            : 'bg-white text-rose-600 border-rose-200 hover:bg-rose-50 shadow-sm'
        }`}
      >
        <FileText className={`w-4 h-4 ${isOpen ? 'text-rose-400' : 'text-rose-600'}`} />
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-8 p-6 md:p-10 bg-slate-50 border border-slate-200 rounded-[2rem] shadow-inner relative">
              <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-6">
                <div>
                  <div className="text-[10px] font-bold text-rose-500 tracking-[0.3em] uppercase mb-1">Deliverable Sample</div>
                  <h4 className="text-xl md:text-2xl font-serif font-bold text-slate-900">{title}</h4>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Case Study: Whitening Salon</div>
                  <div className="text-[10px] text-slate-500">浜松エリア市場分析・戦略レポート</div>
                </div>
              </div>
              
              <div className="overflow-x-auto pb-6">
                <div className="min-w-[800px] lg:min-w-0">
                  {children}
                </div>
              </div>

              {/* Mobile Swipe Hint */}
              <div className="md:hidden flex items-center justify-center gap-2 mt-4 text-slate-400 animate-pulse">
                <ChevronRight className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Swipe to view more</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WireframeSection: React.FC<{ 
  label: string; 
  children: React.ReactNode; 
  className?: string;
  note?: string;
}> = ({ label, children, className = "", note }) => (
  <div className={`relative border-2 border-dashed border-slate-200 rounded-xl p-6 mb-4 bg-white/50 group hover:border-rose-300 transition-colors ${className}`}>
    <div className="absolute -top-3 left-4 bg-slate-900 text-white text-[9px] font-bold px-2 py-0.5 rounded tracking-widest uppercase z-10">
      {label}
    </div>
    {children}
    {note && (
      <div className="mt-4 pt-4 border-t border-slate-100 flex gap-2">
        <Info className="w-3 h-3 text-rose-500 shrink-0 mt-0.5" />
        <p className="text-[10px] text-slate-600 leading-tight italic font-medium">{note}</p>
      </div>
    )}
  </div>
);

const ProcessStep: React.FC<{ 
  num: string; 
  title: string; 
  items: string[]; 
  output: string[]; 
  isLast?: boolean;
  sampleToggle?: React.ReactNode;
}> = ({ num, title, items, output, isLast, sampleToggle }) => (
  <div className="relative pl-12 pb-16">
    {!isLast && <div className="absolute left-5 top-10 bottom-0 w-[1px] bg-slate-200"></div>}
    <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-lg z-10">
      {num}
    </div>
    <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm transition-all hover:border-slate-200">
      <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">実施内容</div>
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">主なアウトプット</div>
          <ul className="space-y-3">
            {output.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {sampleToggle}
    </div>
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base md:text-lg font-bold text-slate-800 group-hover:text-rose-600 transition-colors pr-8 leading-snug">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-rose-500" /> : <Plus className="w-5 h-5 text-slate-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-700 text-sm leading-relaxed pr-8 font-medium">{answer}</p>
      </div>
    </div>
  );
};

export const LPProduction: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50 pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-[50vw] h-[50vw] bg-rose-100 rounded-full blur-[120px] opacity-40"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] bg-indigo-100 rounded-full blur-[120px] opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 text-rose-600 mb-8 border border-rose-100">
                <span className="text-xs font-bold tracking-widest font-sans uppercase">User Psychology Lab</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-serif font-medium text-slate-900 leading-[1.1] mb-8 tracking-tight">
                ユーザーの声を、<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">売上に変える。</span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12 font-light">
                デザイン先行ではなく、ユーザーの深層心理から設計する。<br className="hidden md:block"/>
                市場調査・競合分析から、継続的な改善サイクルまで。<br className="hidden md:block"/>
                「作って終わり」ではない、本気のLP制作。
              </p>
              <div className="flex flex-col sm:row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="px-10 py-5 bg-slate-900 text-white font-bold text-lg rounded-full hover:bg-rose-600 transition-all shadow-xl hover:shadow-rose-500/20 flex items-center justify-center gap-3 group"
                >
                  無料相談を予約する
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 bg-white text-slate-900 border border-slate-200 font-bold text-lg rounded-full hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  制作の流れを見る
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <Section background="light">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionTitle title="そのLP、本当に成果出てますか？" subtitle="PROBLEM" center light />
          <p className="text-slate-600 text-lg font-medium">
            多くの問題の根本原因は、<span className="text-slate-900 font-bold border-b-2 border-rose-500">「ユーザー理解」</span>が欠けていることです。
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProblemCard 
            title="デザインは良いのに、売れない" 
            desc="見た目はキレイだけど、ユーザーの「買いたい」という気持ちを動かせていない。デザイン先行で作ると陥りがちな罠です。" 
          />
          <ProblemCard 
            title="何を改善すればいいかわからない" 
            desc="感覚で作ったLPは、成果が出ない時にどこを直せばいいかが見えません。根拠がないと改善も博打になります。" 
          />
          <ProblemCard 
            title="競合と似たようなLPになる" 
            desc="業界の当たり前に囚われ、どこも同じに見えて選ばれる理由がありません。差別化された独自訴求が必要です。" 
          />
          <ProblemCard 
            title="作って終わり、放置されている" 
            desc="市場もユーザーも変化しているのに、LPだけが止まっていませんか？継続的なアップデートが不可欠です。" 
          />
          <ProblemCard 
            title="広告費を使い捨てている" 
            desc="LPがボトルネックになり、高い広告費が無駄に。CPA高騰の真因はLPの構成にあるケースがほとんどです。" 
          />
          <div className="p-8 bg-slate-900 rounded-2xl flex flex-col justify-center items-center text-center text-white">
             <HelpCircle className="w-12 h-12 text-rose-500 mb-6" />
             <p className="font-serif text-lg">その不安、<br/>解決できます。</p>
          </div>
        </div>
      </Section>

      {/* Approach Section */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-20 items-center text-slate-900">
          <div>
            <SectionTitle title="デザインは手段。ユーザー理解が目的。" subtitle="PHILOSOPHY" light />
            <div className="space-y-6 text-slate-700 leading-relaxed text-lg font-light">
              <p>私たちのLP制作は、いきなりデザインを作りません. まず、徹底的な<strong className="text-slate-900 font-bold">市場調査</strong>から始めます。</p>
              <ul className="space-y-4 text-sm font-bold">
                <li className="flex items-center gap-3 text-slate-800">
                  <div className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px]"><Search className="w-3 h-3"/></div>
                  ターゲットユーザーはどんな言葉で悩んでいるか
                </li>
                <li className="flex items-center gap-3 text-slate-800">
                  <div className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px]"><Users className="w-3 h-3"/></div>
                  SNSやQ&Aサイトでどんな声が上がっているか
                </li>
                <li className="flex items-center gap-3 text-slate-800">
                  <div className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px]"><Target className="w-3 h-3"/></div>
                  競合はどんな訴求をしていて、何が足りていないか
                </li>
              </ul>
              <p>これらを分析し、競合が見落としている"穴"を特定. デザインは、その構成を最も効果的に伝えるための手段です。</p>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center p-12">
                <div className="w-full h-full relative">
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 bg-white rounded-full shadow-2xl flex items-center justify-center z-30 border border-slate-100">
                         <div className="text-center">
                            <div className="text-rose-500 font-bold text-xs">GOAL</div>
                            <div className="text-slate-900 font-serif font-bold">成果</div>
                         </div>
                      </div>
                   </div>
                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center"><Search className="w-6 h-6 text-slate-400"/></div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center"><BarChart className="w-6 h-6 text-slate-400"/></div>
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center"><Layout className="w-6 h-6 text-slate-400"/></div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center"><Code className="w-6 h-6 text-slate-400"/></div>
                   </motion.div>
                </div>
             </div>
             <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-xs bg-slate-900 p-6 rounded-2xl shadow-xl text-center">
                <p className="text-rose-400 text-xs font-bold mb-1 italic">"感覚ではなく、データ。納品ではなく、継続改善。"</p>
             </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section background="light" id="process">
        <SectionTitle title="6つのステップで、成果を最大化する" subtitle="PROCESS" center light />
        <div className="max-w-4xl mx-auto mt-20 text-slate-900">
          <ProcessStep 
            num="01" 
            title="市場調査・SERP分析" 
            items={[
              "「ホワイトニング 浜松」等の検索意図の深掘り",
              "ネガティブ検索キーワードからユーザーの不安を特定",
              "痛み・費用・効果に関する実態データの収集"
            ]} 
            output={["市場調査レポート", "ユーザー心理構造マップ", "訴求軸の仮説定義"]} 
            sampleToggle={
              <SampleToggle label="市場分析・心理深掘りレポート案を見る" title="浜松エリア市場分析・ユーザー心理構造レポート">
                <div className="space-y-10 text-slate-900">
                  {/* Executive Summary */}
                  <div>
                    <h5 className="flex items-center gap-2 text-rose-600 font-bold mb-4">
                      <Zap className="w-4 h-4" />
                      エグゼクティブサマリー
                    </h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-6 rounded-2xl border border-slate-200">
                        <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">市場構造</div>
                        <p className="text-sm font-bold text-slate-800 leading-relaxed">
                          歯科医院（高価格・高効果）とセルフサロン（低価格・限定効果）の二極化。<br/>
                          <span className="text-rose-600">「医療品質 × サロン体験」という中間ポジションが空白。</span>
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-slate-200">
                        <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">推奨戦略</div>
                        <p className="text-sm font-bold text-slate-800 leading-relaxed">
                          「歯科医院提携」「痛みゼロ」「2種ジェル」を3大訴求軸とし、検討段階ユーザーの不安解消に集中。
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Analysis Detail */}
                  <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-slate-200 shadow-sm">
                    <h5 className="text-lg font-serif font-bold text-slate-900 mb-6 border-l-4 border-rose-500 pl-4">「セルフホワイトニング 効果ない」検索の分析結果</h5>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h6 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">主要な懸念と対応策</h6>
                        <div className="space-y-4">
                          {[
                            { label: "効果への疑問", desc: "「本来の白さ以上にならない」への懸念", action: "2種ジェルで差別化、歯科提携で信頼性担保" },
                            { label: "痛み・安全性", voice: "「知覚過敏が怖い」という心理", action: "過酸化水素不使用による「痛みゼロ」の医学的説明" },
                            { cat: "コスト", voice: "「何回も通うと結局高い」という疑念", action: "通い放題プランで上限提示、初回¥3,150で障壁緩和" },
                          ].map((item, i) => (
                            <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                               <div className="text-[10px] font-bold text-rose-500 mb-1">{item.label}</div>
                               <div className="text-xs text-slate-800 font-bold mb-2">{item.desc || item.voice}</div>
                               <div className="text-[10px] text-slate-600 leading-relaxed font-medium">→ {item.action}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col justify-between">
                         <div>
                            <div className="text-xs font-bold text-rose-400 mb-4 tracking-widest uppercase">Key Insights</div>
                            <p className="text-lg font-serif italic mb-6">"歯科のホワイトニングは効果あるけど痛い. セルフは安いけど不安。"</p>
                            <p className="text-xs text-slate-300 leading-relaxed">
                               ユーザーはこのジレンマの中にいます. 当サロンの役割は「痛くないのに、歯科品質で安心」という解を示すことです。
                            </p>
                         </div>
                         <div className="mt-8 flex items-center gap-4 border-t border-slate-800 pt-6">
                            <div className="text-center">
                               <div className="text-xl font-bold text-rose-500">20%</div>
                               <div className="text-[9px] uppercase">知覚過敏経験率</div>
                            </div>
                            <div className="w-px h-8 bg-slate-800"></div>
                            <div className="text-xs text-slate-400">歯科通院を躊躇する<br/>最大の心理障壁</div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SampleToggle>
            }
          />
          <ProcessStep 
            num="02" 
            title="競合LP分析 & カスタマージャーニー" 
            items={[
              "浜松エリア主要競合（歯科・セルフ）の訴求軸比較",
              "競合が「言っていないこと」から独自の勝ち筋を特定",
              "認知から継続までの5段階にわたる顧客体験設計"
            ]} 
            output={["競合分析レポート", "カスタマージャーニーマップ", "ポジショニング戦略"]} 
            sampleToggle={
              <SampleToggle label="カスタマージャーニーマップ・競合分析を見る" title="カスタマージャーニーマップ & ポジショニング戦略">
                <div className="space-y-12 text-slate-900">
                  {/* Competitor Table */}
                  <div>
                    <h5 className="flex items-center gap-2 text-rose-600 font-bold mb-4">
                      <BarChart className="w-4 h-4" />
                      浜松エリア競合サービス比較（主要5社）
                    </h5>
                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-900 text-white">
                          <tr>
                            <th className="p-4">サービス名</th>
                            <th className="p-4">価格帯</th>
                            <th className="p-4">主な訴求軸</th>
                            <th className="p-4 bg-rose-600">事例サロンの優位性</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {[
                            { name: "ホワイトエッセンス", price: "¥19,900〜", appeal: "医療品質、実績173万件", diff: "価格の安さ、予約の簡便さ" },
                            { name: "浜松デンタル", price: "¥33,000〜", appeal: "歯科医師施術、透明性", diff: "「痛みなし」の快適性、手軽さ" },
                            { name: "HAKU (セルフ)", price: "¥2,000〜", appeal: "歯科監修、とにかく低価格", diff: "歯科提携による安心感、ジェルの品質" },
                            { name: "BIANCA (セルフ)", price: "¥4,980", appeal: "歯科提携、通いやすさ", diff: "「2種ジェル」による効果の差別化" },
                          ].map((item, i) => (
                            <tr key={i} className="hover:bg-slate-50">
                              <td className="p-4 font-bold text-slate-800">{item.name}</td>
                              <td className="p-4 text-slate-700 font-serif font-bold">{item.price}</td>
                              <td className="p-4 text-slate-700 leading-tight font-medium">{item.appeal}</td>
                              <td className="p-4 text-rose-700 font-bold bg-rose-50/20">✓ {item.diff}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Real Customer Journey Map */}
                  <div>
                    <h5 className="flex items-center gap-2 text-rose-600 font-bold mb-4">
                      <Map className="w-4 h-4" />
                      カスタマージャーニーマップ
                    </h5>
                    <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto shadow-sm">
                      <table className="w-full text-left text-[11px] min-w-[1000px]">
                        <thead className="bg-slate-100 border-b border-slate-200">
                          <tr className="text-slate-700">
                            <th className="p-4 w-32 bg-slate-200 font-bold">項目</th>
                            <th className="p-4">【1】認知</th>
                            <th className="p-4">【2】検討</th>
                            <th className="p-4 bg-rose-50 text-rose-700 font-bold">【3】決断</th>
                            <th className="p-4">【4】利用</th>
                            <th className="p-4">【5】継続</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-800">
                          <tr>
                            <td className="p-4 font-bold bg-slate-50 text-slate-700">ユーザー心理</td>
                            <td className="p-4 text-slate-600 italic font-medium">"最近、歯の黄ばみが気になるな..."</td>
                            <td className="p-4 text-slate-600 italic font-medium">"浜松で安くて痛くない店はある？"</td>
                            <td className="p-4 text-rose-700 italic font-bold bg-rose-50/10">"ここなら安心そう. まず試そう"</td>
                            <td className="p-4 text-slate-600 italic font-medium">"思ったより簡単で痛くない！"</td>
                            <td className="p-4 text-slate-600 italic font-medium">"白さを定着させたい"</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-bold bg-slate-50 text-slate-700">主な行動</td>
                            <td className="p-4 text-slate-800 font-medium">SNS投稿閲覧、悩み検索</td>
                            <td className="p-4 text-slate-900 font-bold">比較サイト、HotPepper閲覧</td>
                            <td className="p-4 text-slate-900 font-bold bg-rose-50/10">公式HP閲覧、LINE登録</td>
                            <td className="p-4 text-slate-800 font-medium">来店、施術、ビフォーアフター確認</td>
                            <td className="p-4 text-slate-800 font-medium">口コミ投稿、次回予約</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </SampleToggle>
            }
          />
          <ProcessStep 
            num="03" 
            title="ワイヤーフレーム設計" 
            items={[
              "ユーザーの心理フローに沿った構成案作成",
              "各セクションの役割と掲載情報の定義",
              "コンバージョンを最大化するコピーの方向性確定"
            ]} 
            output={["ワイヤーフレーム構成案", "セクション別コピー案"]} 
          />
          <ProcessStep 
            num="04" 
            title="デザイン制作" 
            items={[
              "ブランドの世界観を反映したビジュアル設計",
              "信頼感と行動を促すUI/UXデザイン",
              "レスポンスデザイン（PC/スマホ）"
            ]} 
            output={["デザインカンプ（Figma）", "デザインガイドライン"]} 
          />
          <ProcessStep 
            num="05" 
            title="実装・公開・継続改善" 
            items={[
              "高速表示に最適化したコーディング",
              "計測タグ・フォームの完全設定",
              "公開後のデータモニタリングとA/Bテスト実行"
            ]} 
            output={["本番LP", "計測環境設定", "月次改善レポート"]} 
          />
          <ProcessStep 
            num="06" 
            title="リードナーチャリング設計・運用" 
            items={[
              "LINE公式アカウントを活用したステップ配信設計",
              "カレンダー予約機能の追加・導線最適化",
              "顧客の検討状況に合わせたクーポン・情報配信",
              "中長期的な顧客接点の創出と再来店促進"
            ]} 
            output={["LINEシナリオ設計図", "自動配信メッセージ文案", "予約システム連携設定"]} 
            isLast
          />
        </div>
      </Section>

      {/* Why Us Section */}
      <Section background="white">
        <SectionTitle title="選ばれる3つの理由" subtitle="WHY US" center light />
        <div className="grid md:grid-cols-3 gap-12 mt-16 text-slate-900">
          <div className="text-center">
             <div className="w-20 h-20 bg-rose-50 rounded-3xl flex items-center justify-center text-rose-500 mx-auto mb-8 shadow-inner">
                <BarChart className="w-10 h-10" />
             </div>
             <h4 className="text-xl font-bold text-slate-900 mb-4">データに基づく設計</h4>
             <p className="text-slate-700 text-sm leading-relaxed font-medium">「なんとなく」ではなく、市場の声に基づいた論理的な構成。成果が出る理由も、改善すべき点も明確になります。</p>
          </div>
          <div className="text-center">
             <div className="w-20 h-20 bg-rose-50 rounded-3xl flex items-center justify-center text-rose-500 mx-auto mb-8 shadow-inner">
                <Target className="w-10 h-10" />
             </div>
             <h4 className="text-xl font-bold text-slate-900 mb-4">競合が見落とす"穴"を突く</h4>
             <p className="text-slate-700 text-sm leading-relaxed font-medium">競合分析で「言われていない訴求」を発見。「どこも同じ」から脱却し、ユーザーに選ばれる理由を作ります。</p>
          </div>
          <div className="text-center">
             <div className="w-20 h-20 bg-rose-50 rounded-3xl flex items-center justify-center text-rose-500 mx-auto mb-8 shadow-inner">
                <RefreshCcw className="w-10 h-10" />
             </div>
             <h4 className="text-xl font-bold text-slate-900 mb-4">作って終わりではない継続改善</h4>
             <p className="text-slate-700 text-sm leading-relaxed font-medium">公開は通過点. 定期的なデータ分析とA/Bテストで、常に市場の期待に合わせた最適な状態を維持します。</p>
          </div>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section background="light" id="pricing">
        <SectionTitle title="料金プラン" subtitle="PRICING" center light />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16 text-slate-900">
           <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col h-full">
              <div className="mb-8">
                <h4 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-2">Standard Plan</h4>
                <div className="text-4xl font-serif font-bold text-slate-900">¥200,000〜<span className="text-sm font-sans font-normal opacity-60">（税別）</span></div>
                <p className="text-sm text-slate-700 mt-4 font-medium">LP制作の全てをカバーする基本プラン</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                 {[
                   "市場調査・競合LP分析レポート",
                   "ワイヤーフレーム構成案",
                   "デザインカンプ（2案）",
                   "レスポンシブコーディング",
                   "フォーム・計測タグ設置",
                   "公開後1ヶ月の改善サポート"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                      {item}
                   </li>
                 ))}
              </ul>
              <button onClick={scrollToContact} className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-rose-600 transition-colors shadow-lg">相談・お見積り</button>
           </div>

           <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-2xl flex flex-col h-full relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                 <Rocket className="w-20 h-20 text-rose-500" />
              </div>
              <div className="mb-8 relative z-10">
                <h4 className="text-rose-400 font-bold text-xs uppercase tracking-widest mb-2">Growth Option</h4>
                <div className="text-4xl font-serif font-bold text-white">¥50,000〜<span className="text-sm font-sans font-normal opacity-60">/月</span></div>
                <p className="text-sm text-slate-300 mt-4 font-light">成果を最大化し続けるための継続改善</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow relative z-10">
                 {[
                   "月次データ分析レポート",
                   "A/Bテストの設計・実行",
                   "改善施策の継続的な実装",
                   "市場・競合の定点観測",
                   "CVR向上のための戦略会議"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-rose-500 mt-0.5" />
                      {item}
                   </li>
                 ))}
              </ul>
              <button onClick={scrollToContact} className="w-full py-4 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 transition-colors shadow-lg shadow-rose-900/20 relative z-10">プランを検討する</button>
           </div>
        </div>
      </Section>

      {/* Target Positioning Analysis Section */}
      <Section background="white">
        <SectionTitle title="ポジショニングとターゲット適合性" subtitle="TARGET SUITABILITY" center light />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mt-16">
          {/* Positioning Map Visual */}
          <div className="relative">
            <h4 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">LPサービス比較マップ</h4>
            <div className="aspect-square bg-slate-50 rounded-[3rem] border border-slate-200 p-8 md:p-12 relative shadow-inner">
               <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <div className="w-[2px] h-full bg-slate-900 relative">
                     <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 border-l-2 border-t-2 border-slate-900 rotate-45"></div>
                  </div>
                  <div className="h-[2px] w-full bg-slate-900 relative">
                     <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 border-r-2 border-t-2 border-slate-900 rotate-45"></div>
                  </div>
               </div>

               <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-600 text-center leading-tight tracking-wider">事業基盤の構築<br/>(Foundational Growth)</div>
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-600 text-center leading-tight tracking-wider">短期的な獲得のみ<br/>(Direct Lead Gen)</div>
               <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[10px] font-bold text-slate-600 text-center leading-tight tracking-wider">深い市場分析<br/>(Deep Analysis)</div>
               <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold text-slate-600 text-center leading-tight tracking-wider">簡易制作<br/>(Quick Build)</div>

               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="absolute top-[15%] right-[15%] w-32 md:w-40 h-32 md:h-40 bg-rose-600 rounded-full flex flex-col items-center justify-center text-white text-center shadow-2xl shadow-rose-200 z-10"
               >
                  <Rocket className="w-5 h-5 mb-2" />
                  <div className="text-xs md:text-sm font-serif font-bold leading-tight">AsetZ<br/>LP伴走支援</div>
               </motion.div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
               <div className="flex items-center gap-3 text-emerald-700 font-bold mb-4">
                  <ThumbsUp className="w-5 h-5" />
                  <span>本サービスが向いている方</span>
               </div>
               <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium">
                  単なるページ制作ではなく、<strong>「なぜ売れるのか」の言語化</strong>から始めたい企業様に最適です。分析結果はLP以外にも転用可能な強固な事業基盤となります。
               </p>
               <ul className="space-y-3">
                  {[
                    "顧客理解を深め、マーケティング全体の基盤を作りたい",
                    "LPの分析結果を他チャネルや新規事業に活かしたい",
                    "「どこも同じ」に見える現状を打破し、独自性を確立したい",
                    "中長期的にLTVを最大化する戦略を構築したい"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-xs text-slate-800 font-bold">
                       <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                       {item}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-slate-900">
          <SectionTitle title="よくある質問" subtitle="FAQ" center light />
          <div className="mt-16">
            <FAQItem 
              question="制作期間はどのくらいですか？" 
              answer="LP1ページの場合、通常4〜6週間程度です。市場調査・競合分析に1〜2週間、ワイヤー・デザインに2週間、実装に1〜2週間が目安です。お急ぎの場合はご相談ください。" 
            />
            <FAQItem 
              question="デザインの修正は何回までできますか？" 
              answer="デザインカンプの段階で2案ご提示し、フィードバックをいただいて確定します。大幅な方向転換がなければ、細かな調整は柔軟に対応いたします。" 
            />
            <FAQItem 
              question="既存のLPの改善だけでもお願いできますか？" 
              answer="はい、可能です。現状のLPを分析し、課題を特定した上で改善提案をいたします。部分改修から全面リニューアルまで柔軟に対応可能です。" 
            />
          </div>
        </div>
      </Section>
    </div>
  );
};
