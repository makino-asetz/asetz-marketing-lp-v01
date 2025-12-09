import React, { useState } from 'react';
import { Section, SectionTitle } from './ui/Section';
import { FileSpreadsheet } from 'lucide-react';

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

// --- Gantt Chart Logic ---

type Task = {
  id: string;
  label: string;
  start: number; // Week number 1-26
  end: number;
  color: string; // Tailwind class
};

type TaskRowData = {
  category: string;
  tasks: Task[];
};

type ProcessPhase = {
  name: string;
  color: string;
  textColor: string;
  borderColor: string;
  rows: TaskRowData[];
};

const phasesData: ProcessPhase[] = [
  {
    name: "Phase 1: 基盤構築期",
    color: "bg-blue-900/20",
    textColor: "text-blue-400",
    borderColor: "border-blue-900/30",
    rows: [
      {
        category: "戦略設計",
        tasks: [
          { id: "p1-1", label: "現状分析・課題ヒアリング", start: 1, end: 2, color: "bg-blue-600" },
          { id: "p1-2", label: "カスタマージャーニー設計", start: 2, end: 4, color: "bg-blue-600" },
          { id: "p1-3", label: "KPI設計・目標設定", start: 3, end: 4, color: "bg-blue-600" },
          { id: "p1-4", label: "施策優先順位・ロードマップ", start: 4, end: 5, color: "bg-blue-500" },
        ]
      },
      {
        category: "データ基盤構築",
        tasks: [
          { id: "p1-5", label: "GTM設計・実装", start: 1, end: 3, color: "bg-indigo-600" },
          { id: "p1-6", label: "GA4計測設計・イベント実装", start: 2, end: 4, color: "bg-indigo-600" },
          { id: "p1-7", label: "MAツール初期設定", start: 3, end: 6, color: "bg-indigo-500" },
          { id: "p1-8", label: "KPIモニタリングダッシュボード", start: 5, end: 8, color: "bg-indigo-500" },
        ]
      },
      {
        category: "検証",
        tasks: [
          { id: "p1-9", label: "月次レビュー①", start: 4, end: 4.9, color: "bg-slate-600" },
        ]
      }
    ]
  },
  {
    name: "Phase 2: 施策実行・検証期",
    color: "bg-emerald-900/20",
    textColor: "text-emerald-400",
    borderColor: "border-emerald-900/30",
    rows: [
      {
        category: "リード獲得(ブログ)",
        tasks: [
          { id: "p2-1", label: "ポップアップ施策設計", start: 9, end: 10, color: "bg-emerald-600" },
          { id: "p2-2", label: "ポップアップ実装", start: 10, end: 11, color: "bg-emerald-600" },
          { id: "p2-3", label: "登録フォーム最適化", start: 11, end: 12, color: "bg-emerald-600" },
          { id: "p2-4", label: "効果測定・改善", start: 12, end: 16, color: "bg-emerald-500" },
        ]
      },
      {
        category: "メールマーケ構築",
        tasks: [
          { id: "p2-5", label: "メルマガテンプレート設計", start: 11, end: 13, color: "bg-emerald-600" },
          { id: "p2-6", label: "ウェルカムシリーズ設計", start: 12, end: 14, color: "bg-emerald-600" },
          { id: "p2-7", label: "コンテンツ作成", start: 13, end: 16, color: "bg-emerald-500" },
          { id: "p2-8", label: "配信設定・テスト", start: 14, end: 15, color: "bg-emerald-500" },
          { id: "p2-9", label: "効果測定", start: 15, end: 18, color: "bg-emerald-500" },
          { id: "p2-10", label: "製品別コンテンツ企画", start: 16, end: 20, color: "bg-emerald-500" },
        ]
      },
      {
        category: "リード獲得(メルマガ)",
        tasks: [
          { id: "p2-11", label: "誘導ポップアップ設計", start: 14, end: 15, color: "bg-emerald-600" },
          { id: "p2-12", label: "実装", start: 15, end: 16, color: "bg-emerald-600" },
          { id: "p2-13", label: "効果測定・改善", start: 16, end: 20, color: "bg-emerald-500" },
        ]
      },
      {
        category: "検証",
        tasks: [
          { id: "p2-14", label: "月次レビュー②", start: 8, end: 8.9, color: "bg-slate-600" },
          { id: "p2-15", label: "月次レビュー③", start: 12, end: 12.9, color: "bg-slate-600" },
          { id: "p2-16", label: "月次レビュー④", start: 16, end: 16.9, color: "bg-slate-600" },
        ]
      }
    ]
  },
  {
    name: "Phase 3: 最適化・自走化期",
    color: "bg-orange-900/20",
    textColor: "text-orange-400",
    borderColor: "border-orange-900/30",
    rows: [
      {
        category: "高度な最適化",
        tasks: [
          { id: "p3-1", label: "ABテスト設計・実装", start: 17, end: 20, color: "bg-orange-600" },
          { id: "p3-2", label: "パーソナライズ配信設定", start: 18, end: 21, color: "bg-orange-600" },
          { id: "p3-3", label: "リードスコアリング設計", start: 20, end: 23, color: "bg-orange-500" },
          { id: "p3-4", label: "顧客セグメント分析", start: 21, end: 24, color: "bg-orange-500" },
        ]
      },
      {
        category: "営業連携・CRM",
        tasks: [
          { id: "p3-5", label: "CRM連携設定", start: 21, end: 23, color: "bg-orange-600" },
          { id: "p3-6", label: "リード管理フロー構築", start: 22, end: 24, color: "bg-orange-600" },
          { id: "p3-7", label: "営業引き渡しルール", start: 23, end: 25, color: "bg-orange-500" },
          { id: "p3-8", label: "ROI検証", start: 24, end: 26, color: "bg-orange-500" },
        ]
      },
      {
        category: "自走化支援",
        tasks: [
          { id: "p3-9", label: "基盤改修・最終調整", start: 23, end: 25, color: "bg-rose-600" },
          { id: "p3-10", label: "運用マニュアル整備", start: 24, end: 26, color: "bg-rose-600" },
          { id: "p3-11", label: "ナレッジ移管", start: 24, end: 26, color: "bg-rose-500" },
          { id: "p3-12", label: "引き継ぎ", start: 25, end: 26, color: "bg-rose-500" },
        ]
      },
      {
        category: "検証",
        tasks: [
          { id: "p3-13", label: "月次レビュー⑤", start: 20, end: 20.9, color: "bg-slate-600" },
          { id: "p3-14", label: "最終レビュー", start: 24, end: 26, color: "bg-slate-500" },
        ]
      }
    ]
  }
];

const GanttChart: React.FC = () => {
  const months = [1, 2, 3, 4, 5, 6];
  const weeks = Array.from({ length: 26 }, (_, i) => i + 1);

  // Helper to calculate layout lanes for overlapping tasks
  const calculateLanes = (tasks: Task[]) => {
    // Sort by start time, then duration (longest first)
    const sortedTasks = [...tasks].sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));
    const lanes: Task[][] = [];

    sortedTasks.forEach(task => {
      let placed = false;
      for (let i = 0; i < lanes.length; i++) {
        const lane = lanes[i];
        const lastTask = lane[lane.length - 1];
        // Check if this lane is free (end of last task < start of current task)
        if (lastTask.end < task.start) {
          lane.push(task);
          placed = true;
          break;
        }
      }
      if (!placed) {
        lanes.push([task]);
      }
    });

    return lanes;
  };

  const RenderRow: React.FC<{ rowData: TaskRowData }> = ({ rowData }) => {
    const lanes = calculateLanes(rowData.tasks);
    const rowHeight = Math.max(lanes.length * 32 + 16, 56); // 32px per bar + gaps, min height 56

    return (
      <div 
        className="relative border-b border-slate-800/50 flex group hover:bg-slate-800/30 transition-colors"
        style={{ height: `${rowHeight}px` }}
      >
        {/* Row Header (Sticky) */}
        <div className="sticky left-0 w-48 text-xs text-slate-400 font-medium pl-4 pr-2 truncate z-20 bg-slate-900/95 flex items-center border-r border-slate-800 shadow-[4px_0_10px_-2px_rgba(0,0,0,0.5)] flex-shrink-0">
          {rowData.category}
        </div>

        {/* Timeline Area */}
        <div className="flex-grow relative h-full">
          {/* Grid Lines */}
          {weeks.map(w => (
            <div key={w} className="absolute h-full w-[1px] bg-slate-800/30 pointer-events-none" style={{ left: `${(w - 1) * (100/26)}%` }}></div>
          ))}

          {/* Tasks */}
          {lanes.map((lane, laneIndex) => (
            lane.map(task => {
              const left = (task.start - 1) * (100 / 26);
              const width = (task.end - task.start + 1) * (100 / 26);
              const top = 8 + laneIndex * 32;

              return (
                <div
                  key={task.id}
                  className={`absolute h-6 rounded text-[10px] flex items-center px-2 text-white shadow-sm ${task.color} border border-white/10 group/task transition-all hover:z-30 cursor-help`}
                  style={{
                    left: `${left}%`,
                    width: `${width}%`,
                    top: `${top}px`
                  }}
                >
                  <span className="truncate w-full">{task.label}</span>
                  
                  {/* Tooltip on Hover */}
                  <div className="absolute left-0 bottom-full mb-2 hidden group-hover/task:block bg-slate-900 text-white text-xs px-3 py-2 rounded shadow-xl border border-slate-700 whitespace-nowrap z-50">
                    <div className="font-bold mb-1">{task.label}</div>
                    <div className="text-[10px] text-slate-400">Week {task.start} - {task.end}</div>
                    {/* Little arrow */}
                    <div className="absolute left-4 top-full w-2 h-2 bg-slate-900 border-r border-b border-slate-700 transform rotate-45 -mt-1"></div>
                  </div>
                </div>
              );
            })
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="mt-24 pt-16 border-t border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <div className="text-rose-500 text-xs font-bold tracking-widest uppercase mb-2">PROJECT EXAMPLE</div>
          <h3 className="text-2xl font-serif text-white">MAツール導入・伴走支援（6ヶ月）</h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
          <FileSpreadsheet className="w-4 h-4" />
          <span>Notion / Spreadsheet等で詳細な計画を管理します</span>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden overflow-x-auto relative">
        <div className="min-w-[1000px]">
          {/* Header Months */}
          <div className="flex border-b border-slate-800 bg-slate-950 sticky top-0 z-30">
            <div className="w-48 flex-shrink-0 border-r border-slate-800 p-3 text-xs font-bold text-slate-500 sticky left-0 bg-slate-950 z-40 shadow-[4px_0_10px_-2px_rgba(0,0,0,0.5)]">
              Task Category
            </div>
            <div className="flex-grow flex">
              {months.map(m => (
                <div key={m} className="flex-1 border-r border-slate-800/50 p-2 text-center text-xs font-bold text-slate-400 bg-slate-900/50">
                  Month {m}
                </div>
              ))}
            </div>
          </div>
          
          {phasesData.map((phase, idx) => (
            <div key={idx} className="bg-slate-900/30">
              <div className={`px-4 py-2 text-[10px] font-bold ${phase.textColor} ${phase.color} ${phase.borderColor} border-y sticky left-0 z-10 w-full`}>
                {phase.name}
              </div>
              
              {phase.rows.map((row, rIdx) => (
                <RenderRow key={rIdx} rowData={row} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Deliverables Table */}
      <div className="mt-12 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50">
         <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-400 uppercase bg-slate-900 border-b border-slate-800">
               <tr>
                  <th className="px-6 py-3 font-bold w-32">Phase</th>
                  <th className="px-6 py-3 font-bold">主な成果物</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
               <tr className="hover:bg-slate-800/30">
                  <td className="px-6 py-4 font-bold text-blue-400">Phase 1</td>
                  <td className="px-6 py-4 text-slate-300">カスタマージャーニーマップ、KPI設計書、GA4/GTM設定、MAツール初期設定完了、モニタリングダッシュボード</td>
               </tr>
               <tr className="hover:bg-slate-800/30">
                  <td className="px-6 py-4 font-bold text-emerald-400">Phase 2</td>
                  <td className="px-6 py-4 text-slate-300">ポップアップ施策稼働、メルマガ配信開始、月次レポート、改善提案書</td>
               </tr>
               <tr className="hover:bg-slate-800/30">
                  <td className="px-6 py-4 font-bold text-orange-400">Phase 3</td>
                  <td className="px-6 py-4 text-slate-300">パーソナライズ配信稼働、スコアリング稼働、CRM連携完了、運用マニュアル、ナレッジ移管資料</td>
               </tr>
            </tbody>
         </table>
      </div>

      <div className="mt-8 bg-slate-900/30 border border-slate-800 rounded-xl p-6 text-sm text-slate-400 leading-relaxed italic">
         <p className="mb-2">※ これは一例です。御社の現状・課題・目標に合わせて、最適なプロジェクト計画を設計します。</p>
         <p>重要なのは「何をやるか」だけでなく、<strong className="text-rose-400 not-italic">「なぜその順序でやるか」「各施策がどう連動するか」</strong>を明確にすること。週次の定例MTGで進捗を確認しながら、柔軟に軌道修正していきます。</p>
      </div>
    </div>
  );
};

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

          <GanttChart />
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