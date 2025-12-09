import React from 'react';
import { Section, SectionTitle } from './ui/Section';

export const Stance: React.FC = () => {
  return (
    <Section background="light" className="!py-0">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left: Sticky Manifesto */}
        <div className="lg:w-5/12 py-24 lg:py-32 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center bg-slate-50 border-r border-slate-200">
          <div className="px-8 lg:px-12 xl:px-16">
            <SectionTitle 
              title="代理店ではなく、事業部の一員として" 
              subtitle="OUR STANCE" 
              light
            />
            <div className="prose prose-lg text-slate-600 font-light leading-relaxed space-y-6">
              <p>
                事業者として代理店とやりとりする中で、<br/>
                まさにこれらの課題を感じてきました。
              </p>
              <p>
                PDCAを適切に回さない、すぐに担当が変わる、<br/>
                教科書的な流れを伝えるだけ、事業理解が浅い——<br/>
                これでは施策効果が出ないのは明白でした。
              </p>
              <p>
                だからのこそ、本質的に事業に寄り添い<br/>
                伴走して成果を出しに行く。<br/>
                共に成長したい。<br/>
                そういう思いでやっています。
              </p>
            </div>
          </div>
        </div>

        {/* Right: Scrollable Details */}
        <div className="lg:w-7/12 bg-white">
          <div className="divide-y divide-slate-100">
            {[
              {
                num: "01",
                title: "事業構造から理解する",
                sub: "Business Understanding",
                desc: "施策の前に、ビジネスモデル・収益構造・顧客を深く理解。表面的な施策提案ではなく、事業の本質から逆算した戦略を設計します。"
              },
              {
                num: "02",
                title: "週次で対話し、共に判断",
                sub: "Weekly Sync",
                desc: "月1回の報告ではなく、週次で状況を共有し一緒に意思決定。変化の速い市場でPDCAを高速で回します。"
              },
              {
                num: "03",
                title: "マーケからDX・AIまで一貫",
                sub: "Full Stack Support",
                desc: "広告・SEO・SNSに留まらず、業務改善・AI活用・財務まで対応。複数の専門業者に依頼する必要がありません。"
              },
              {
                num: "04",
                title: "最終ゴールは御社の自走",
                sub: "Empowerment",
                desc: "依存関係を作らず、ナレッジ移管し自走できる体制構築を支援します。社内に資産を残すことが私たちのゴールです。"
              }
            ].map((item, idx) => (
              <div key={idx} className="p-12 lg:p-20 group hover:bg-slate-50 transition-colors">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-sm font-bold text-rose-500 tracking-widest">STANCE {item.num}</span>
                  <span className="text-xs text-slate-400 uppercase tracking-wide">{item.sub}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-slate-900 mb-6">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-base md:text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};