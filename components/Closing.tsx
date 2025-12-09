import React, { useState } from 'react';
import { Section, SectionTitle } from './ui/Section';
import { Plus, Minus, CheckCircle2, XCircle, HelpCircle, TrendingUp, Users, Building2, Wallet, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TicketCard: React.FC<{
  name: string;
  price: string;
  desc: string;
  features: string[];
  recommended?: boolean;
}> = ({ name, price, desc, features, recommended }) => (
  <div className={`relative flex flex-col p-8 rounded-2xl border transition-transform duration-300 hover:-translate-y-1 ${
    recommended 
    ? 'bg-slate-900 border-rose-500 shadow-2xl shadow-rose-900/20 z-10' 
    : 'bg-white border-slate-200'
  }`}>
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
        Best Value
      </div>
    )}
    
    <div className="mb-6">
      <h3 className={`text-sm font-bold tracking-widest uppercase mb-2 ${recommended ? 'text-rose-400' : 'text-slate-500'}`}>{name}</h3>
      <div className={`text-3xl font-serif font-medium ${recommended ? 'text-white' : 'text-slate-900'}`}>{price}<span className="text-sm font-sans font-normal opacity-60">/月</span></div>
    </div>
    
    <p className={`text-sm mb-8 leading-relaxed ${recommended ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
    
    <div className={`w-full h-px mb-8 ${recommended ? 'bg-slate-800' : 'bg-slate-100'}`}></div>
    
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm">
          <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${recommended ? 'text-rose-500' : 'text-slate-400'}`} />
          <span className={recommended ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
        </li>
      ))}
    </ul>
    
    <button 
      onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
      className={`w-full py-3 rounded-lg text-sm font-bold transition-colors ${
      recommended 
      ? 'bg-rose-600 hover:bg-rose-700 text-white' 
      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
    }`}>
      相談する
    </button>
  </div>
);

// --- Value Analysis Components ---

const ComparisonCard: React.FC<{
  title: string;
  cost: string;
  icon: React.ReactNode;
  features: { label: string; status: 'good' | 'bad' | 'neutral' }[];
  isHighlight?: boolean;
}> = ({ title, cost, icon, features, isHighlight }) => (
  <div className={`p-6 rounded-2xl border flex flex-col h-full ${
    isHighlight 
    ? 'bg-slate-900 border-rose-500 shadow-xl relative overflow-hidden' 
    : 'bg-slate-50 border-slate-200'
  }`}>
    {isHighlight && <div className="absolute top-0 right-0 w-20 h-20 bg-rose-500/10 rounded-bl-full -mr-4 -mt-4"></div>}
    
    <div className="flex items-center gap-4 mb-6 relative z-10">
      <div className={`p-3 rounded-xl ${isHighlight ? 'bg-rose-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
        {icon}
      </div>
      <div>
        <h4 className={`text-sm font-bold ${isHighlight ? 'text-rose-400' : 'text-slate-500'}`}>{title}</h4>
        <div className={`text-lg font-serif font-bold ${isHighlight ? 'text-white' : 'text-slate-800'}`}>{cost}<span className="text-xs font-sans font-normal opacity-60">/年</span></div>
      </div>
    </div>

    <div className="space-y-4 flex-grow relative z-10">
      {features.map((f, i) => (
        <div key={i} className="flex items-start gap-3">
          {f.status === 'good' && <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />}
          {f.status === 'bad' && <XCircle className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />}
          {f.status === 'neutral' && <HelpCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />}
          <span className={`text-sm ${isHighlight ? 'text-slate-300' : 'text-slate-600'}`}>{f.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const HiringCostChart: React.FC = () => {
  return (
    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
       <h4 className="text-white font-bold mb-6 flex items-center gap-2">
         <Wallet className="w-5 h-5 text-rose-500" />
         正社員雇用の<span className="text-rose-400">隠れたコスト</span>
       </h4>
       
       <div className="flex items-end gap-2 h-64 relative ml-8">
          {/* Y-Axis Label */}
          <div className="absolute -left-8 top-0 h-full flex flex-col justify-between text-[10px] text-slate-500 py-1">
             <span>800万</span>
             <span>600万</span>
             <span>400万</span>
             <span>200万</span>
             <span>0</span>
          </div>
          
          {/* Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
             {[1,2,3,4,5].map(i => <div key={i} className="w-full h-px bg-slate-800/50"></div>)}
          </div>

          {/* Bar: Salary Only */}
          <div className="w-1/2 flex flex-col justify-end items-center h-full relative group">
             <div className="w-full bg-slate-700 rounded-t h-[60%] flex items-center justify-center text-xs text-white font-bold opacity-50 group-hover:opacity-100 transition-opacity">
                給与
             </div>
             <div className="mt-2 text-xs text-slate-500">表面コスト</div>
          </div>

          {/* Bar: Actual Cost */}
          <div className="w-1/2 flex flex-col justify-end items-center h-full relative">
             <div className="w-full bg-rose-400 rounded-t-sm h-[15%] flex items-center justify-center text-[10px] text-white animate-pulse">
                採用/教育
             </div>
             <div className="w-full bg-rose-500 rounded-sm h-[10%] flex items-center justify-center text-[10px] text-white">
                社保
             </div>
             <div className="w-full bg-rose-600 rounded-b h-[60%] flex items-center justify-center text-xs text-white font-bold shadow-[0_0_20px_rgba(225,29,72,0.3)]">
                給与
             </div>
             <div className="mt-2 text-xs text-rose-400 font-bold">実質コスト</div>
             
             {/* Total Label */}
             <div className="absolute -top-8 text-sm font-bold text-white bg-slate-800 px-2 py-1 rounded border border-slate-700">
                約830万円
             </div>
          </div>
       </div>
       <p className="mt-6 text-xs text-slate-400 leading-relaxed">
         ※1人の社員がカバーできる領域は限定的です。広告・SEO・分析・制作...全てを1人でこなせるスーパーマンは市場にほぼ存在しません。
       </p>
    </div>
  );
};

const ROISimulation: React.FC = () => {
  return (
    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
      <h4 className="text-white font-bold mb-6 flex items-center gap-2">
         <TrendingUp className="w-5 h-5 text-rose-500" />
         投資回収シミュレーション
       </h4>
       
       <div className="space-y-6">
          <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700">
             <div className="text-sm font-bold text-slate-300 w-24">投資額</div>
             <div className="text-xl font-serif text-white">¥500,000<span className="text-xs text-slate-500 font-sans"> / 月</span></div>
          </div>

          <div className="relative pl-8 border-l-2 border-slate-700 space-y-6">
             {[
               { price: "5万円", count: "10件", color: "text-blue-400" },
               { price: "10万円", count: "5件", color: "text-emerald-400" },
               { price: "50万円", count: "1件", color: "text-rose-400" },
             ].map((item, i) => (
               <div key={i} className="relative">
                  <div className="absolute -left-[39px] top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-900 border-2 border-slate-600 rounded-full"></div>
                  <div className="absolute -left-[33px] top-1/2 -translate-y-1/2 w-6 h-[2px] bg-slate-700"></div>
                  
                  <div className="flex justify-between items-center bg-slate-950 p-3 rounded border border-slate-800">
                     <div className="text-xs text-slate-400">商材単価 <span className="text-white font-bold text-sm ml-1">{item.price}</span></div>
                     <ArrowRight className="w-4 h-4 text-slate-600" />
                     <div className="text-xs text-slate-400">必要受注 <span className={`font-bold text-lg ml-1 ${item.color}`}>{item.count}</span></div>
                  </div>
               </div>
             ))}
          </div>
       </div>
       <p className="mt-6 text-xs text-slate-400 leading-relaxed">
         「月50万円のコスト」ではなく「月1件の受注で元が取れる投資」と捉えてみてください。私たちの実績では、投資額の3〜6倍のリターンを実現しています。
       </p>
    </div>
  );
};

const PerformanceChart: React.FC = () => {
  const cases = [
    { label: "インバウンド", invest: 50, return: 250, color: "bg-blue-500" },
    { label: "旅行メディア", invest: 60, return: 300, color: "bg-emerald-500" },
    { label: "IT支援", invest: 40, return: 160, color: "bg-orange-500" },
  ];

  return (
    <div className="mt-12 bg-slate-50 p-8 rounded-2xl border border-slate-200">
      <h4 className="text-slate-800 font-bold mb-6 text-center">実績：投資に対してどれだけのリターンがあったか</h4>
      
      <div className="space-y-6">
        {cases.map((c, i) => (
          <div key={i} className="relative">
            <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
              <span>{c.label}</span>
              <span>ROI: {c.return / c.invest * 100}%</span>
            </div>
            <div className="h-8 bg-slate-200 rounded-full overflow-hidden flex relative">
              {/* Investment Bar */}
              <div 
                className="h-full bg-slate-400 flex items-center justify-center text-[10px] text-white font-bold relative z-10"
                style={{ width: `${(c.invest / 350) * 100}%` }}
              >
                投資
              </div>
              {/* Return Bar */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${(c.return / 350) * 100}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`h-full ${c.color} flex items-center justify-end pr-2 text-xs text-white font-bold`}
              >
                回収: {c.return}万
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-rose-50 border border-rose-100 rounded-lg text-sm text-rose-800 leading-relaxed">
        <p className="font-bold mb-1">判断の補助線</p>
        「この投資で、月にいくらの売上増・コスト削減が実現できれば元が取れるか？」<br/>
        月額50万円なら、月50万円以上の成果で黒字です。まずは3ヶ月、一緒に取り組んでみませんか？
      </div>
    </div>
  );
};


// --- Main Component ---

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-800">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base md:text-lg font-medium text-slate-200 group-hover:text-white transition-colors pr-8 leading-snug">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-rose-500 flex-shrink-0" /> : <Plus className="w-5 h-5 text-slate-500 flex-shrink-0" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-400 text-sm leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
};

const FlowStep: React.FC<{ num: string; title: string; desc: string }> = ({ num, title, desc }) => (
  <div className="relative flex flex-col items-center text-center p-6">
    <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-rose-500 font-bold mb-4 font-serif relative z-10">
      {num}
    </div>
    <h4 className="text-white font-bold mb-2">{title}</h4>
    <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
  </div>
);

export const Closing: React.FC = () => {
  return (
    <>
      <Section background="light" id="pricing">
        <SectionTitle title="料金プラン" subtitle="PRICING" />
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          <TicketCard 
            name="戦略伴走パートナー"
            price="30-40万"
            desc="既存代理店がいるが、全体を俯瞰できる人が不在の企業向け。"
            features={["戦略ロードマップ策定", "週次〜隔週MTG", "KPI/KGI設計", "施策ディレクション"]}
          />
          <TicketCard 
            name="戦略＋実務統合支援"
            price="50-80万"
            desc="戦略から実務まで一気通貫。代理店を一本化し、内製化を目指すプラン。"
            recommended
            features={["戦略パートナー全内容", "広告運用代行", "SEOコンサルティング", "データ分析基盤構築", "DX/AI導入支援", "週次MTG"]}
          />
          <TicketCard 
            name="スポット戦略設計"
            price="50-100万"
            desc="現状分析と課題構造化を行い、12ヶ月のロードマップを作成する初期フェーズ。"
            features={["事業構造分析", "競合・市場調査", "データ環境診断", "12ヶ月ロードマップ作成", "改善提案書"]}
          />
        </div>

        <div className="text-center text-slate-500 text-sm mb-24 max-w-2xl mx-auto">
           <p>※広告運用を含む場合、別途広告費の15-20%が運用手数料となります。</p>
        </div>

        {/* --- New Value Analysis Section --- */}
        <div className="max-w-6xl mx-auto border-t border-slate-200 pt-20">
           <SectionTitle title="費用対効果の考え方" subtitle="VALUE ANALYSIS" center light />
           
           <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
             金額だけ見ると「高い」と感じるかもしれません。<br/>
             しかし、長期的な事業成長とコスト構造で見れば、最も合理的な投資です。
           </p>

           {/* 1. Comparison Cards */}
           <div className="grid md:grid-cols-3 gap-4 mb-12">
             <ComparisonCard 
               title="正社員を雇用する" 
               cost="600~800万" 
               icon={<Users className="w-6 h-6"/>}
               features={[
                 { label: "社会保険・採用コスト発生", status: "bad" },
                 { label: "1人分の領域しか対応不可", status: "bad" },
                 { label: "離職リスクあり", status: "bad" },
               ]}
             />
             <ComparisonCard 
               title="総合代理店に依頼" 
               cost="600~1200万" 
               icon={<Building2 className="w-6 h-6"/>}
               features={[
                 { label: "担当者はジュニアが多い", status: "neutral" },
                 { label: "社内にナレッジ残らない", status: "bad" },
                 { label: "対応が手薄になりがち", status: "bad" },
               ]}
             />
             <ComparisonCard 
               title="当社の伴走支援" 
               cost="360~600万" 
               icon={<CheckCircle2 className="w-6 h-6"/>}
               features={[
                 { label: "経験豊富な専門家が担当", status: "good" },
                 { label: "複数領域をカバー", status: "good" },
                 { label: "ナレッジが社内に蓄積", status: "good" },
               ]}
               isHighlight
             />
           </div>

           {/* 2. Hiring Cost & ROI Simulation */}
           <div className="grid lg:grid-cols-2 gap-8 mb-8">
             <HiringCostChart />
             <ROISimulation />
           </div>

           {/* 3. Performance Chart */}
           <PerformanceChart />

        </div>
      </Section>

      <Section background="black" className="border-t border-slate-900">
        <div className="max-w-4xl mx-auto mb-24">
           <h3 className="text-center text-2xl font-serif text-white mb-12">ご契約までの流れ</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 relative">
              <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-slate-800 -z-0 transform -translate-y-1/2"></div>
              <FlowStep num="01" title="無料相談" desc="Webよりご予約ください" />
              <FlowStep num="02" title="初回ヒアリング" desc="現状の課題・予算感を60分で" />
              <FlowStep num="03" title="ご提案" desc="分析結果と具体的プランを提示" />
              <FlowStep num="04" title="キックオフ" desc="詳細スケジュール策定・開始" />
           </div>
        </div>

         <div className="max-w-4xl mx-auto">
            <SectionTitle title="よくある質問" subtitle="FAQ" center/>
            <div className="max-w-3xl mx-auto">
               <FAQItem 
                 question="どの業種でも対応できますか？"
                 answer="旅行・観光、IT・SaaS、BtoCサービス業の実績が多いですが、複数の集客チャネルがありデータ分析で改善余地がある業種であれば対応可能です。"
               />
               <FAQItem 
                 question="既存の代理店がいますが、どうなりますか？"
                 answer="段階的な移行を推奨しています。新規施策から開始し、成果確認後に既存分の移管を検討するケースが多いです。"
               />
               <FAQItem 
                 question="社員を雇うのと比べてどうですか？"
                 answer="年間コストは同水準〜安価（360〜600万円/年）で、複数領域の専門性を獲得でき、採用・教育コストもゼロ。雇用リスクなく、成果が出なければ契約見直しが可能です。"
               />
               <FAQItem 
                 question="契約期間は？"
                 answer="最低3ヶ月、推奨12ヶ月としています。3ヶ月単位で成果評価を行います。"
               />
               <FAQItem 
                 question="内製化が完了したら契約終了ですか？"
                 answer="いいえ。新規事業の立ち上げ、既存事業のアップスケールなど継続的なパートナーシップの形があります。継続して価値を提供できなければ力不足なので、その場合は潔く引き下がります。"
               />
            </div>
         </div>
      </Section>
    </>
  );
};