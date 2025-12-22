
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Search, BarChart, Layout, Code, RefreshCcw, 
  CheckCircle2, XCircle, HelpCircle, Plus, Minus, Users, Target, Rocket
} from 'lucide-react';
import { Section, SectionTitle } from './ui/Section';

const ProblemCard: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mb-6">
      <XCircle className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

const ProcessStep: React.FC<{ 
  num: string; 
  title: string; 
  items: string[]; 
  output: string[]; 
  isLast?: boolean 
}> = ({ num, title, items, output, isLast }) => (
  <div className="relative pl-12 pb-16">
    {!isLast && <div className="absolute left-5 top-10 bottom-0 w-[1px] bg-slate-200"></div>}
    <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-lg z-10">
      {num}
    </div>
    <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
      <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">実施内容</div>
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
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
              <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
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
        <p className="text-slate-500 text-sm leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
};

export const LPProduction: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
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
              <p className="text-lg md:text-2xl text-slate-500 leading-relaxed max-w-2xl mb-12 font-light">
                デザイン先行ではなく、ユーザーの深層心理から設計する。<br className="hidden md:block"/>
                市場調査・競合分析から、継続的な改善サイクルまで。<br className="hidden md:block"/>
                「作って終わり」ではない、本気のLP制作。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
          <p className="text-slate-500 text-lg">
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
          <div className="p-8 bg-slate-900 rounded-2xl flex flex-col justify-center items-center text-center">
             <HelpCircle className="w-12 h-12 text-rose-500 mb-6" />
             <p className="text-white font-serif text-lg">その不安、<br/>解決できます。</p>
          </div>
        </div>
      </Section>

      {/* Approach Section */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionTitle title="デザインは手段。ユーザー理解が目的。" subtitle="PHILOSOPHY" light />
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light">
              <p>私たちのLP制作は、いきなりデザインを作りません。まず、徹底的な<strong className="text-slate-900">市場調査</strong>から始めます。</p>
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
              <p>これらを分析し、競合が見落としている"穴"を特定。デザインは、その構成を最も効果的に伝えるための手段です。</p>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center p-12">
                <div className="w-full h-full relative">
                   {/* Abstract Diagram */}
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
        <SectionTitle title="5つのステップで、成果の出るLPを作る" subtitle="PROCESS" center light />
        <div className="max-w-4xl mx-auto mt-20">
          <ProcessStep 
            num="01" 
            title="市場調査" 
            items={[
              "ターゲットユーザーの声を収集（SNS、レビューサイト等）",
              "ユーザーの顕在ニーズと潜在ニーズを分析",
              "購買/申込の意思決定に影響する要素を特定"
            ]} 
            output={["市場調査レポート", "ユーザーインサイトマップ", "訴求軸の仮説リスト"]} 
          />
          <ProcessStep 
            num="02" 
            title="競合LP分析" 
            items={[
              "競合のLP構成を詳細分析（セクション、訴求順序）",
              "競合が「言っていること」と「言っていないこと」の整理",
              "差別化ポイントの特定"
            ]} 
            output={["競合分析レポート", "差別化ポイント定義書"]} 
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
              "レスポンシブデザイン（PC/スマホ）"
            ]} 
            output={["デザインカンプ（Figma）", "デザインガイドライン"]} 
          />
          <ProcessStep 
            num="05" 
            title="実装・公開・改善" 
            items={[
              "高速表示に最適化したコーディング",
              "計測タグ・フォームの完全設定",
              "公開後のデータモニタリングと改善案作成"
            ]} 
            output={["本番LP", "計測環境設定", "改善レポート（オプション）"]} 
            isLast
          />
        </div>
      </Section>

      {/* Why Us Section */}
      <Section background="white">
        <SectionTitle title="選ばれる3つの理由" subtitle="WHY US" center light />
        <div className="grid md:grid-cols-3 gap-12 mt-16">
          <div className="text-center">
             <div className="w-20 h-20 bg-rose-50 rounded-3xl flex items-center justify-center text-rose-500 mx-auto mb-8 shadow-inner">
                <BarChart className="w-10 h-10" />
             </div>
             <h4 className="text-xl font-bold text-slate-900 mb-4">データに基づく設計</h4>
             <p className="text-slate-500 text-sm leading-relaxed">「なんとなく」ではなく、市場の声に基づいた論理的な構成。成果が出る理由も、改善すべき点も明確になります。</p>
          </div>
          <div className="text-center">
             <div className="w-20 h-20 bg-rose-50 rounded-3xl flex items-center justify-center text-rose-500 mx-auto mb-8 shadow-inner">
                <Target className="w-10 h-10" />
             </div>
             <h4 className="text-xl font-bold text-slate-900 mb-4">競合が見落とす"穴"を突く</h4>
             <p className="text-slate-500 text-sm leading-relaxed">競合分析で「言われていない訴求」を発見。「どこも同じ」から脱却し、ユーザーに選ばれる理由を作ります。</p>
          </div>
          <div className="text-center">
             <div className="w-20 h-20 bg-rose-50 rounded-3xl flex items-center justify-center text-rose-500 mx-auto mb-8 shadow-inner">
                <RefreshCcw className="w-10 h-10" />
             </div>
             <h4 className="text-xl font-bold text-slate-900 mb-4">作って終わりではない継続改善</h4>
             <p className="text-slate-500 text-sm leading-relaxed">公開は通過点。定期的なデータ分析とA/Bテストで、常に市場の期待に合わせた最適な状態を維持します。</p>
          </div>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section background="light" id="pricing">
        <SectionTitle title="料金プラン" subtitle="PRICING" center light />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
           <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col h-full">
              <div className="mb-8">
                <h4 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-2">Standard Plan</h4>
                <div className="text-4xl font-serif font-bold text-slate-900">¥200,000〜<span className="text-sm font-sans font-normal opacity-60">（税別）</span></div>
                <p className="text-sm text-slate-500 mt-4">LP制作の全てをカバーする基本プラン</p>
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
                   <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                      {item}
                   </li>
                 ))}
              </ul>
              <button onClick={scrollToContact} className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-rose-600 transition-colors shadow-lg">相談・お見積り</button>
           </div>

           <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-2xl flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                 <Rocket className="w-20 h-20 text-rose-500" />
              </div>
              <div className="mb-8 relative z-10">
                <h4 className="text-rose-400 font-bold text-xs uppercase tracking-widest mb-2">Growth Option</h4>
                <div className="text-4xl font-serif font-bold text-white">¥50,000〜<span className="text-sm font-sans font-normal opacity-60">/月</span></div>
                <p className="text-sm text-slate-400 mt-4">成果を最大化し続けるための継続改善</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow relative z-10">
                 {[
                   "月次データ分析レポート",
                   "A/Bテストの設計・実行",
                   "改善施策の継続的な実装",
                   "市場・競合の定点観測",
                   "CVR向上のための戦略会議"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-rose-500 mt-0.5" />
                      {item}
                   </li>
                 ))}
              </ul>
              <button onClick={scrollToContact} className="w-full py-4 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 transition-colors shadow-lg shadow-rose-900/20 relative z-10">プランを検討する</button>
           </div>
        </div>
        <div className="mt-12 text-center text-slate-400 text-sm">
           <p>※ ページボリューム、機能要件により変動します。詳細はヒアリング後にお見積りいたします。</p>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
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
            <FAQItem 
              question="広告運用もお願いできますか？" 
              answer="はい、ご支援可能です。LP制作と広告運用をセットでご依頼いただくことで、より一貫性のあるメッセージ設計と、データに基づいた高速なPDCAサイクルを回すことができます。" 
            />
            <FAQItem 
              question="地方からでも依頼できますか？" 
              answer="はい、全国対応しています。打ち合わせはZoom等のオンラインツールで実施しますので、場所を問わずご依頼いただけます。" 
            />
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-500/5 blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">まずは、無料相談から。</h2>
          <p className="text-lg text-slate-400 mb-12 leading-relaxed">
            現状のLPの課題をヒアリングし、改善の方向性をご提案します。<br/>
            「競合と差別化したい」「CPAを下げたい」そんなお悩みがあれば、<br/>
            お気軽にご相談ください。
          </p>
          <button 
            onClick={scrollToContact}
            className="px-12 py-6 bg-white text-slate-900 font-bold text-xl rounded-full hover:bg-rose-500 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-3 mx-auto group"
          >
            無料相談を予約する
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500"/> オンライン対応可</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500"/> 最短翌営業日対応</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500"/> 相談だけでもOK</span>
          </div>
        </div>
      </section>

      {/* Inherit Booking Section from main page at the very bottom */}
      <div id="booking">
        {/* The shared booking section will be used if integrated via common components */}
      </div>
    </div>
  );
};
