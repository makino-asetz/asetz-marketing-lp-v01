import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Users, BookOpen, Shield, HeartHandshake, Rocket, ArrowRight } from 'lucide-react';

// Animation variants
const barVariant = {
  hidden: { height: 0 },
  visible: (custom: number) => ({
    height: `${custom}%`,
    transition: { duration: 1.5, ease: "circOut" }
  })
};

const CostSimulationDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl overflow-hidden relative">
       <h4 className="text-center text-white font-serif mb-8 text-lg">コスト・リソース比較シミュレーション</h4>
       
       <div className="flex justify-center items-end gap-8 h-64 md:h-80 w-full max-w-lg mx-auto pb-8 relative z-10">
          {/* Hiring Bar */}
          <div className="w-1/3 flex flex-col justify-end items-center h-full group">
             <div className="text-xs text-slate-400 mb-2 text-center">正社員雇用<br/>(1名)</div>
             <motion.div 
               variants={barVariant}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               custom={85}
               className="w-full bg-slate-700 rounded-t-lg relative flex items-end justify-center pb-4 group-hover:bg-slate-600 transition-colors"
             >
                <div className="text-white font-bold text-sm md:text-lg">¥700万</div>
             </motion.div>
             <div className="mt-4 text-[10px] md:text-xs text-slate-500 text-center space-y-1">
                <p>+ 採用/教育コスト</p>
                <p>+ 離職リスク</p>
                <p>+ 専門領域の限界</p>
             </div>
          </div>

          {/* VS Badge */}
          <div className="absolute bottom-20 bg-slate-800 text-slate-500 rounded-full px-2 py-1 text-xs font-bold border border-slate-700 z-20">VS</div>

          {/* In-house Support Bar */}
          <div className="w-1/3 flex flex-col justify-end items-center h-full">
             <div className="text-xs text-rose-400 mb-2 font-bold text-center">AsetZ<br/>内製支援</div>
             <motion.div 
               variants={barVariant}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               custom={60}
               className="w-full bg-gradient-to-t from-rose-600 to-rose-400 rounded-t-lg relative flex items-end justify-center pb-4 shadow-[0_0_30px_rgba(225,29,72,0.3)]"
             >
                <div className="text-white font-bold text-sm md:text-lg">¥480万</div>
             </motion.div>
             <div className="mt-4 text-[10px] md:text-xs text-rose-200 text-center space-y-1 font-medium">
                <p>+ 複数領域の専門性</p>
                <p>+ 社内ナレッジ蓄積</p>
                <p>+ リスクゼロ</p>
             </div>
          </div>
       </div>

       {/* Grid Lines */}
       <div className="absolute inset-0 z-0 pointer-events-none opacity-20" 
         style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100% 20%' }}>
       </div>
    </div>
  );
};

export const WhyInHouse: React.FC = () => {
  return (
    <>
      <Section background="navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">なぜ私たちは<br className="md:hidden"/>"内製支援"にこだわるのか</h2>
            <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div className="prose prose-lg text-slate-300">
               <div className="bg-slate-900/50 p-8 rounded-2xl border-l-4 border-rose-500 mb-8 backdrop-blur-sm">
                 <p className="text-white font-medium text-lg italic leading-relaxed not-italic">
                   「結局、事業理解のないマーケティング施策は本質的ではありません」
                 </p>
               </div>
               <p>
                 ただ一般的な施策を回しているだけでは、効果は出ない。<br/>
                 自社のサービスをどのように競合と差別化して展開していくのか。<br/>
                 <strong>自社サービス理解、戦略設計、競合・マーケット分析</strong>が最重要です。
               </p>
               <p>
                 これがないと効果が出ないし、コスパも絶対に合いません。<br/>
                 本当に成果を出すことを目的としているからこそ、<br/>
                 事業に深く踏み込み、内製化を前提とした支援を行います。
               </p>
            </div>
            
            <CostSimulationDiagram />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
             {[
               {
                 icon: <Users className="w-8 h-8 text-rose-400" />,
                 title: "コストと専門性の両立",
                 desc: "年間で1人のマーケターを雇用するよりも安価または同水準で、Web・DX・AIなど複数領域の専門家チームを獲得できます。"
               },
               {
                 icon: <BookOpen className="w-8 h-8 text-rose-400" />,
                 title: "ナレッジの社内蓄積",
                 desc: "代理店丸投げでは残らないノウハウが、御社のチーム内に蓄積されます。ブラックボックス化を防ぎ、組織力を高めます。"
               },
               {
                 icon: <Shield className="w-8 h-8 text-rose-400" />,
                 title: "リスクのない体制",
                 desc: "正社員採用のようなミスマッチのリスクがありません。成果が出なければ契約見直しが可能で、柔軟な体制構築が可能です。"
               }
             ].map((item, i) => (
               <div key={i} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors">
                 <div className="mb-4">{item.icon}</div>
                 <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </Section>

      <Section background="black" className="relative overflow-hidden">
        {/* Background decorative flow */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-black pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-900/5 blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-2xl md:text-4xl font-serif text-white mb-12">
            内製化が完了したら、<br/>お付き合いは終わりですか？
          </h2>

          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl p-10 md:p-16 relative">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
              いいえ。むしろ、そこからが<br/>
              <strong className="text-white">本当のパートナーシップの始まり</strong>だと考えています。
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
               {["新規事業立ち上げ", "既存事業の拡大", "新チャネル挑戦", "AI・DXの深化"].map((tag, i) => (
                 <div key={i} className="flex flex-col items-center gap-2 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <Rocket className="w-5 h-5 text-rose-500" />
                    <span className="text-xs font-bold text-slate-300">{tag}</span>
                 </div>
               ))}
            </div>

            <div className="border-t border-slate-800 pt-10">
               <div className="flex flex-col items-center gap-4">
                  <HeartHandshake className="w-12 h-12 text-rose-500" />
                  <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed italic">
                    「内製化支援が完了した後、『もう頼む必要がない』と思われたなら、それは私たちの力不足です。
                    継続的に価値を提供できないのであれば、潔く引き下がる覚悟でいます。<br/>
                    だからこそ、常に御社の成長に貢献できるよう、私たち自身も進化し続けます。」
                  </p>
               </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};