import React, { useState } from 'react';
import { Section, SectionTitle } from './ui/Section';
import { Plus, Minus, ArrowRight, CheckCircle2 } from 'lucide-react';

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
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
        <div className="mt-8 text-center text-slate-500 text-sm">
           <p>※広告運用を含む場合、別途広告費の15-20%が運用手数料となります。</p>
           <p className="mt-2">「月額50万円でも、月間売上を250万円改善できればペイする」——私たちは常に投資対効果で考えます。</p>
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
