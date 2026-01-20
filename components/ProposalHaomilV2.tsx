
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, TrendingUp, Target, Layers, 
  Search, Users, BarChart3, Database, MessageCircle, 
  Rocket, Calendar, ShieldCheck, Briefcase, Info, ChevronRight,
  UserCheck, Map, Smartphone, Building2, Package, Globe,
  GitFork, ArrowDown, Download, Loader2, Zap, FileText, AlertCircle,
  HelpCircle, ThumbsUp, ThumbsDown, Clock, Activity, Settings,
  Layout, Plus, XCircle, BarChart, ExternalLink, List, Microscope,
  UserPlus, Gauge, HeartHandshake, History, Megaphone, Minus,
  Quote, GraduationCap, Award, Stethoscope, BriefcaseBusiness,
  DollarSign, FileSearch, PieChart, ShieldAlert, Filter, Share2,
  Table as TableIcon, FileCheck, ClipboardList, Star, GraduationCap as GradIcon,
  Lock, BookOpen, Fingerprint, Lightbulb, Compass, Eye, TrendingDown,
  ArrowRightCircle, FileEdit, Monitor, Users2, Trophy, ArrowUpRight,
  Circle, X, Wallet
} from 'lucide-react';

const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <th className="p-4 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest text-left border-b border-slate-800">
    {children}
  </th>
);

const TableCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <td className={`p-4 text-sm text-slate-500 border-b border-slate-100 ${className}`}>
    {children}
  </td>
);

const ProposalSection: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <div id={id} className="py-24 border-b border-slate-100 scroll-mt-20">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-[2px] bg-rose-500"></div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  </div>
);

const SubTitle: React.FC<{ children: React.ReactNode; icon?: React.ReactNode }> = ({ children, icon }) => (
  <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3 border-l-4 border-rose-600 pl-5">
    {icon && <span className="text-rose-600">{icon}</span>}
    {children}
  </h3>
);

const Card: React.FC<{ title: string; children: React.ReactNode; icon?: React.ReactNode; className?: string; color?: 'rose' | 'slate' | 'emerald' | 'blue' | 'amber' }> = ({ title, children, icon, className = "", color = 'rose' }) => {
  const colorMap = {
    rose: 'bg-rose-50 text-rose-600 border-rose-100',
    slate: 'bg-slate-50 text-slate-600 border-slate-200',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    amber: 'bg-amber-50 text-amber-600 border-amber-100'
  };

  return (
    <div className={`p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition-all ${className}`}>
      {icon && <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${colorMap[color]}`}>{icon}</div>}
      <h4 className="text-lg font-bold text-slate-900 mb-4">{title}</h4>
      <div className="text-sm text-slate-600 leading-relaxed font-medium">{children}</div>
    </div>
  );
};

export const ProposalHaomilV2: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = async () => {
    const element = document.getElementById('proposal-full-content-v2');
    if (!element || isGenerating) return;
    setIsGenerating(true);
    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'HAOMIL様_MOCマーケティング戦略ご提案書_v02.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, logging: false },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    try {
      // @ts-ignore
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('PDF Generation failed:', error);
      alert('PDFの生成に失敗しました。');
    } finally {
      setIsGenerating(false);
    }
  };

  const menuItems = [
    { id: 1, label: "Summary", title: "1. エグゼクティブサマリー" },
    { id: 2, label: "Issues", title: "2. 現状認識と課題" },
    { id: 3, label: "Market", title: "3. 競合動向分析" },
    { id: 4, label: "Strategy", title: "4. 戦略方針" },
    { id: 5, label: "Roadmap", title: "5. 12ヶ月ロードマップ" },
    { id: 6, label: "Action", title: "6. 具体的施策内容" },
    { id: 7, label: "Support", title: "7. 支援体制" },
    { id: 8, label: "Pricing", title: "8. 料金プラン" },
    { id: 9, label: "Strength", title: "9. 弊社の強みと実績" },
    { id: 10, label: "Next", title: "10. 次のステップ" },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans">
      <div id="proposal-full-content-v2" className="w-full">
        
        {/* --- 0. Main Visual (Cover) --- */}
        <section className="relative min-h-[90vh] py-24 flex flex-col justify-center overflow-hidden bg-white border-b border-slate-100">
          <div className="absolute top-0 right-0 w-2/5 h-full bg-slate-50 -skew-x-6 transform translate-x-1/4 pointer-events-none border-l border-slate-100"></div>
          <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-24">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-slate-900 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.3em]">
                Strategic Partnership Proposal v02
              </div>
              <button 
                onClick={handleDownloadPDF}
                disabled={isGenerating}
                className="no-print self-start inline-flex items-center gap-2 px-6 py-2.5 bg-rose-600 text-white rounded-full text-xs font-bold hover:bg-rose-700 transition-all shadow-lg active:scale-95 disabled:opacity-50"
              >
                {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                提案書を保存
              </button>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-500 font-bold mb-4">HAOMIL株式会社 御中</h2>
              <div className="w-24 h-1.5 bg-rose-600"></div>
            </div>

            <h1 className="text-5xl md:text-8xl font-serif font-bold text-slate-900 leading-[1.05] mb-12 tracking-tight">
              MOCマーケティング戦略<br/>
              <span className="text-rose-600 text-6xl md:text-7xl">ご提案書</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-serif italic mb-20 max-w-3xl">
              〜 データ分析に基づく既存加盟店の成長支援と新規獲得基盤の構築 〜
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-slate-200">
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase mb-2 tracking-widest">Submission Date</div>
                <div className="text-lg font-bold text-slate-800">2026年1月</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase mb-2 tracking-widest">Submitted by</div>
                <div className="text-lg font-bold text-slate-800 font-serif">マーケティング伴走支援チーム</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 1. Executive Summary --- */}
        <ProposalSection id="section-1" title="1. エグゼクティブサマリー">
          <SubTitle icon={<CheckCircle2 className="w-6 h-6"/>}>結論：既存加盟店の収益性を最大化し、強力な営業資産へと転換する</SubTitle>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5"><BarChart3 className="w-40 h-40" /></div>
               <h4 className="text-rose-500 text-[10px] font-bold mb-6 uppercase tracking-widest border-b border-white/10 pb-2">支援計画の骨子</h4>
               <div className="overflow-x-auto">
                 <table className="w-full text-left mb-6">
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <td className="py-3 text-[10px] text-slate-400 font-bold uppercase">ご支援対象</td>
                        <td className="py-3 text-sm font-bold text-right">MOC事業の成長支援</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-[10px] text-slate-400 font-bold uppercase">現状</td>
                        <td className="py-3 text-sm font-bold text-right text-rose-400">加盟店 約1,000店舗（実態把握に課題）</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-[10px] text-slate-400 font-bold uppercase">目標</td>
                        <td className="py-3 text-sm font-bold text-right">成功モデルの確立 ＆ 新規獲得の加速</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-[10px] text-slate-400 font-bold uppercase">期間</td>
                        <td className="py-3 text-sm font-bold text-right">12ヶ月（3ヶ月毎に成果を検証）</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-[10px] text-slate-400 font-bold uppercase">推奨プラン</td>
                        <td className="py-3 text-sm font-bold text-right">月額30〜50万円（竹プラン推奨）</td>
                      </tr>
                    </tbody>
                 </table>
               </div>
               <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <p className="text-[10px] text-slate-400 leading-relaxed font-medium italic">
                    ※ 既存加盟店1,000店舗という圧倒的リソースを、単なる「顧客」から「成功の証明（営業資産）」へと昇華させるための12ヶ月です。
                  </p>
               </div>
            </div>
            
            <div className="flex flex-col justify-center bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
               <h4 className="text-slate-900 font-bold mb-8 flex items-center gap-2">
                 <Search className="w-5 h-5 text-rose-600" />
                 ご提案の背景：3つの視点
               </h4>
               <ul className="space-y-6">
                  <li className="flex gap-4">
                     <div className="shrink-0 w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm italic">1</div>
                     <div>
                        <div className="font-bold text-sm mb-1">MOCには「認知施策」が欠けている</div>
                        <p className="text-xs text-slate-600 leading-relaxed">成長競合は経営者自身がインフルエンサー化。医療提携という強みを市場に届ける「声」が必要です。</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <div className="shrink-0 w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm italic">2</div>
                     <div>
                        <div className="font-bold text-sm mb-1">「加盟店を増やす」前に「儲けさせる」</div>
                        <p className="text-xs text-slate-600 leading-relaxed">成功加盟店の共通要因（エリア・人口・運営スキル）を特定し、横展開可能なモデルを構築します。</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <div className="shrink-0 w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm italic">3</div>
                     <div>
                        <div className="font-bold text-sm mb-1">加盟店が求めているのは「集客支援」</div>
                        <p className="text-xs text-slate-600 leading-relaxed">マーケ知識が不足している加盟店に対し、集客代行・研修を提供することが最強の価値提案になります。</p>
                     </div>
                  </li>
               </ul>
            </div>
          </div>

          <SubTitle icon={<List className="w-6 h-6"/>}>3つのご提案ポイント</SubTitle>
          <div className="grid md:grid-cols-3 gap-6">
             <Card title="競合成長要因の整理と適用" icon={<Microscope className="w-8 h-8" />} color="slate">
                経営者インフルエンサー化、Instagram広告のCPA管理など、成長企業が秘匿するロジックをMOCに適用します。
             </Card>
             <Card title="既存店成功パターンの特定" icon={<PieChart className="w-8 h-8" />} color="blue">
                「どのエリア・人口規模なら儲かるのか」をデータ化。根拠ある開業提案で獲得精度を劇的に高めます。
             </Card>
             <Card title="攻めと守りの統合支援" icon={<ShieldCheck className="w-8 h-8" />} color="emerald">
                Growth（Instagram/SEO）とOps（データ分析/DX）を分担。短期成果 and 中長期基盤を同時に構築します。
             </Card>
          </div>
        </ProposalSection>

        {/* --- 2. Current Recognition & Issues --- */}
        <ProposalSection id="section-2" title="2. 貴社の現状認識と課題">
          <SubTitle icon={<GitFork className="w-6 h-6"/>}>2-1. ミーティングで把握した課題の構造化</SubTitle>
          <div className="bg-slate-900 p-12 rounded-[3rem] text-white relative overflow-hidden mb-20 shadow-2xl">
            <div className="absolute top-0 right-0 p-12 opacity-5"><Layers className="w-64 h-64" /></div>
            
            <div className="max-w-2xl mx-auto text-center mb-16 relative z-10">
               <div className="text-rose-500 font-bold text-[11px] tracking-[0.5em] uppercase mb-6">Core Fundamental Issue</div>
               <h4 className="text-2xl md:text-3xl font-serif font-bold italic text-rose-100 leading-relaxed">
                 本部が各加盟店の稼働状況・収益性を把握できておらず、<br/>
                 「勝てるロジック」を言語化できていない
               </h4>
            </div>

            <div className="grid md:grid-cols-3 gap-10 relative z-10">
               {[
                 { t: "認知施策の不在", d: "競合は経営者がSNSで積極的に発信。MOCは医療提携の強みが市場に認知されていない。" },
                 { t: "加盟店支援の不足", d: "ジェル提供に留まり、集客支援や加盟店同士のコミュニティ、成功事例の共有が未実施。" },
                 { t: "データ基盤の未整備", d: "LINE診察や電子カルテのデータが散在。顧客データをターゲティングに活用できていない。" }
               ].map((it, i) => (
                 <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-rose-500 mb-6 font-bold font-serif italic text-lg shadow-xl">{i+1}</div>
                    <h5 className="font-bold mb-4">{it.t}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">{it.d}</p>
                 </div>
               ))}
            </div>

            <div className="mt-16 pt-10 border-t border-white/10 text-center relative z-10">
               <p className="text-sm font-bold text-rose-400 italic">Result: 新規加盟店に「この通りやれば儲かる」という根拠ある提案ができていない</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <TableHeader>優先度</TableHeader>
                    <TableHeader>課題項目</TableHeader>
                    <TableHeader>対応時期</TableHeader>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-bold">
                  <tr>
                    <TableCell className="text-rose-600 font-serif italic text-sm">Priority 1</TableCell>
                    <TableCell>既存加盟店の実態把握・成功パターンの特定</TableCell>
                    <TableCell><span className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-[10px]">Phase 1</span></TableCell>
                  </tr>
                  <tr>
                    <TableCell className="text-slate-400 font-serif italic text-sm">Priority 2</TableCell>
                    <TableCell>データ基盤（分析ダッシュボード）の整備</TableCell>
                    <TableCell><span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px]">Phase 1</span></TableCell>
                  </tr>
                  <tr>
                    <TableCell className="text-slate-400 font-serif italic text-sm">Priority 3</TableCell>
                    <TableCell>加盟店向け集客支援（Instagram広告）の設計</TableCell>
                    <TableCell><span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px]">Phase 2</span></TableCell>
                  </tr>
                  <tr>
                    <TableCell className="text-slate-400 font-serif italic text-sm">Priority 4</TableCell>
                    <TableCell>MOCブランド全体の認知向上（SNS/SEO）</TableCell>
                    <TableCell><span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px]">Phase 2-3</span></TableCell>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <Card title="収益構造の課題へのアプローチ" icon={<DollarSign className="w-8 h-8" />} color="slate">
                <p className="mb-4 text-sm text-slate-500 font-bold">「医療提携による過酸化水素使用」の優位性低下への対策</p>
                <p className="text-sm font-medium leading-relaxed">
                  差別化要因がコモディティ化しつつある現状、ジェル販売モデルから「集客・成功支援モデル」へのシフトが不可欠です。加盟店が「MOCなら儲かる」という確信を持てる仕組みこそが、最大の継続理由となります。
                </p>
              </Card>
            </div>
          </div>
        </ProposalSection>

        {/* --- 3. Competitor Analysis --- */}
        <ProposalSection id="section-3" title="3. 競合動向分析：成長の黄金律を抽出">
          <SubTitle icon={<Target className="w-6 h-6"/>}>3-1. 成長企業に見られる3つのパターン</SubTitle>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
             {[
               { t: "経営者インフルエンサー型", d: "経営者自身がSNSで発信し、ブランド認知を獲得。属人的な信頼がエンド顧客と加盟店獲得の両輪を回す。", i: <Smartphone className="w-6 h-6"/> },
               { t: "既存システム活用型FC展開", d: "他社システムを活用しつつ、本部機能を「集客支援」に特化。ジェル提供ではなく「成功支援」を価値として売る。", i: <Layers className="w-6 h-6"/> },
               { t: "店舗ブランド確立型", d: "特定エリアで圧倒的な地域No.1を獲得。成功モデル（内装・接客・広告）を完全にマニュアル化した後に全国展開。", i: <Building2 className="w-6 h-6"/> }
             ].map((it, i) => (
               <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-3xl group hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform shadow-sm">{it.i}</div>
                  <h5 className="font-bold text-slate-900 mb-4 text-sm">{it.t}</h5>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{it.d}</p>
               </div>
             ))}
          </div>

          <div className="bg-slate-900 p-12 rounded-[3rem] text-white relative overflow-hidden mb-20 shadow-2xl">
             <div className="absolute top-0 right-0 p-12 opacity-5"><Zap className="w-64 h-64" /></div>
             <h5 className="text-rose-500 font-bold text-xs uppercase tracking-widest mb-8">Industry Reality: Instagram is Key</h5>
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                   <h4 className="text-2xl font-serif font-bold italic text-rose-100 leading-relaxed">
                     検索エンジンよりも、<br/>Instagramが主戦場である事実
                   </h4>
                   <ul className="space-y-4 text-sm font-medium text-slate-300">
                      <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 主要顧客層（女性）はInstagramで情報収集</li>
                      <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> ホットペッパーや検索経由の獲得効率は低下傾向</li>
                      <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instagram広告こそが最もCPA（顧客獲得単価）が良い</li>
                   </ul>
                </div>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                   <h6 className="text-[10px] font-bold text-slate-400 mb-4 uppercase">成長競合との比較</h6>
                   <table className="w-full text-left text-xs">
                      <thead className="border-b border-white/10 text-rose-400">
                         <tr>
                            <th className="py-2">項目</th>
                            <th className="py-2">成長競合</th>
                            <th className="py-2">MOC（現状）</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                         <tr><td className="py-3">経営者の認知</td><td className="py-3">インフルエンサー化</td><td className="py-3 text-slate-500">ほぼなし</td></tr>
                         <tr><td className="py-3">集客支援</td><td className="py-3">Instagram広告本部管理</td><td className="py-3 text-slate-500">加盟店任せ</td></tr>
                         <tr><td className="py-3">データ活用</td><td className="py-3">統合データでターゲティング</td><td className="py-3 text-slate-500">散在・未活用</td></tr>
                      </tbody>
                   </table>
                </div>
             </div>
          </div>
        </ProposalSection>

        {/* --- 4. Strategic Direction --- */}
        <ProposalSection id="section-4" title="4. 戦略方針：HAOMILが取るべきアプローチ">
          <SubTitle icon={<Target className="w-6 h-6"/>}>基本方針：「加盟店を増やす」前に「既存加盟店を儲けさせる」</SubTitle>
          <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 mb-16">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                   <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                      <h6 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">目指す好循環モデル</h6>
                      <div className="flex flex-col gap-4 text-sm font-bold text-slate-700">
                         <div className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs italic">1</span> 既存店の成功パターンを特定</div>
                         <div className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs italic">2</span> 「この通りやれば儲かる」を型化</div>
                         <div className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs italic">3</span> 成功事例を武器に新規獲得を加速</div>
                      </div>
                   </div>
                </div>
                <div>
                   <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      人口規模や競合状況と売上の相関を分析します。
                      例えば、「地方都市の方が競合が少なく、商圏が広いため安定して儲けられる」といった、
                      <strong className="text-slate-900">経験則ではなくデータに基づいた出店・運営のアドバイス</strong>ができる状態を作ります。
                   </p>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
             {[
               { t: "既存店成功パターンの分析", d: "エリア特性、人口規模、運営者のスキルと売上の相関を分析。横展開可能な「勝ちパターン」を特定します。", i: <PieChart className="w-6 h-6"/> },
               { t: "加盟店向けマーケ支援体制", d: "Instagram広告のテンプレート化や動画制作支援を提供。本部が加盟店の集客を支える仕組みを構築します。", i: <Megaphone className="w-6 h-6"/> },
               { t: "MOCブランドの認知向上", d: "「ホワイトニングサロン 開業」等のSEOや、成功事例のコンテンツ化により、新規獲得の基盤を作ります。", i: <Compass className="w-6 h-6"/> }
             ].map((it, i) => (
               <div key={i} className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 shadow-inner">{it.i}</div>
                  <h5 className="font-bold text-slate-900 mb-4">{it.t}</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{it.d}</p>
               </div>
             ))}
          </div>
        </ProposalSection>

        {/* --- 5. Roadmap --- */}
        <ProposalSection id="section-5" title="5. 12ヶ月ロードマップ【全体像】">
          <div className="bg-slate-900 p-12 rounded-[4rem] text-white relative overflow-hidden mb-16 shadow-2xl">
             <div className="absolute top-0 right-0 p-12 opacity-5"><Calendar className="w-64 h-64" /></div>
             <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {[
                  { n: "PHASE 1", t: "現状把握・基盤構築", d: "加盟店実態調査 / データ基盤構築 / 競合分析 / 成功要因特定", c: "1-3ヶ月目", s: "★3ヶ月目：方向性確認" },
                  { n: "PHASE 2", t: "施策実行・検証", d: "成功パターンの横展開開始 / Instagram広告テスト / SEO基盤構築", c: "4-6ヶ月目", s: "★6ヶ月目：拡大判断" },
                  { n: "PHASE 3", t: "拡大・最適化", d: "加盟店支援の本格展開 / 新規獲得施策の加速 / 認知施策の拡大", c: "7-12ヶ月目" }
                ].map((ph, i) => (
                  <div key={i} className="flex flex-col h-full bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                     <div className="text-rose-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">{ph.n}</div>
                     <h5 className="text-xl font-bold mb-4">{ph.t}</h5>
                     <p className="text-xs text-slate-400 leading-relaxed mb-8 flex-grow">{ph.d}</p>
                     <div className="mt-auto">
                        <div className="text-sm font-serif italic text-white mb-2">{ph.c}</div>
                        {ph.s && <div className="text-[10px] text-rose-400 font-bold">{ph.s}</div>}
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <SubTitle icon={<Compass className="w-6 h-6"/>}>Phase 1：詳細（1〜3ヶ月目）</SubTitle>
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm mb-20">
             <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-white uppercase tracking-widest text-[10px]">
                   <tr>
                      <th className="p-5 w-20">月</th>
                      <th className="p-5">主要タスク</th>
                      <th className="p-5">主要アウトプット</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-bold text-slate-500">
                   <tr>
                      <td className="p-5 bg-slate-50 border-r border-slate-100 text-slate-900">1ヶ月目</td>
                      <td className="p-5">キックオフ、加盟店データ収集開始、既存データ（LINE等）棚卸し</td>
                      <td className="p-5 italic text-slate-900 text-sm">✅ 競合分析レポート（初版） / データ棚卸しレポート</td>
                   </tr>
                   <tr>
                      <td className="p-5 bg-slate-50 border-r border-slate-100 text-slate-900">2ヶ月目</td>
                      <td className="p-5">加盟店ヒアリング（成功店中心）、エリア×人口×売上の相関分析</td>
                      <td className="p-5 italic text-slate-900 text-sm">✅ 加盟店分析レポート / 成功要因仮説シート</td>
                   </tr>
                   <tr>
                      <td className="p-5 bg-slate-50 border-r border-slate-100 text-slate-900">3ヶ月目</td>
                      <td className="p-5">成功パターンの言語化、広告テスト準備、Phase 2計画策定</td>
                      <td className="p-5 italic text-rose-600 text-sm underline">✅ 成功パターンドキュメント / 完了レポート</td>
                   </tr>
                </tbody>
             </table>
          </div>
        </ProposalSection>

        {/* --- 6. Specific Measures --- */}
        <ProposalSection id="section-6" title="6. 具体的施策内容">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
             <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
                <h5 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                   {/* Fix: Wallet icon was missing in imports */}
                   <Wallet className="w-5 h-5 text-rose-600" />
                   加盟店分析・DX施策
                </h5>
                <ul className="space-y-4">
                   <li className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <div>
                         <div className="text-sm font-bold text-slate-800">加盟店実態調査</div>
                         <p className="text-xs text-slate-500">売上・利益・商圏人口・運営スキル等の多角的な実態把握。</p>
                      </div>
                   </li>
                   <li className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <div>
                         <div className="text-sm font-bold text-slate-800">データ基盤構築</div>
                         <p className="text-xs text-slate-500">加盟店売上・稼働データの可視化ダッシュボードの整備。</p>
                      </div>
                   </li>
                </ul>
             </div>
             <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200">
                <h5 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                   <Smartphone className="w-5 h-5 text-rose-600" />
                   加盟店向けマーケ支援
                </h5>
                <ul className="space-y-4">
                   <li className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <div>
                         <div className="text-sm font-bold text-slate-800">Instagram広告支援</div>
                         <p className="text-xs text-slate-500">広告テンプレート提供、素材制作支援、運用ノウハウの共有。</p>
                      </div>
                   </li>
                   <li className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <div>
                         <div className="text-sm font-bold text-slate-800">MEO・運用研修</div>
                         <p className="text-xs text-slate-500">Googleビジネスプロフィールの最適化、SNS投稿の型化研修。</p>
                      </div>
                   </li>
                </ul>
             </div>
          </div>
          <Card title="MOCブランド全体の認知施策" icon={<Globe className="w-8 h-8" />} color="blue">
             <div className="grid md:grid-cols-2 gap-8 mt-4">
                <div>
                   <h6 className="font-bold text-slate-900 mb-2">SEO戦略</h6>
                   <p className="text-xs text-slate-600">「ホワイトニングサロン 開業」「歯科衛生士 独立」等のキーワードをSEOで独占。開業検討ユーザーとの接点を強化します。</p>
                </div>
                <div>
                   <h6 className="font-bold text-slate-900 mb-2">経営者認知向上</h6>
                   <p className="text-xs text-slate-600">三木社長のSNS発信（経営者インフルエンサー戦略）を支援。業界内での権威性と信頼性を圧倒的に高めます。</p>
                </div>
             </div>
          </Card>
        </ProposalSection>

        {/* --- 7. Support Structure --- */}
        <ProposalSection id="section-7" title="7. 支援体制と役割分担">
          <SubTitle icon={<Users2 className="w-6 h-6"/>}>専門家2名体制による「攻め」と「守り」の統合支援</SubTitle>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
             <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5"><TrendingUp className="w-32 h-32" /></div>
                <h5 className="text-rose-600 font-bold text-xs uppercase tracking-widest mb-6">Growth Lead（攻め）</h5>
                <p className="text-sm font-bold text-slate-900 mb-6">主な担当：Instagram広告の企画・運用、SEO施策、クリエイティブ制作管理、エンド顧客獲得</p>
                <div className="flex gap-2">
                   {["SNS広告", "SEO", "Creative"].map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-[10px] font-bold">{t}</span>
                   ))}
                </div>
             </div>
             <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5"><ShieldCheck className="w-32 h-32" /></div>
                <h5 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-6">Ops Lead（守り）</h5>
                <p className="text-sm font-bold text-slate-900 mb-6">主な担当：データ分析・可視化、加盟店管理基盤の構築、DX推進、レポーティング、戦略設計</p>
                <div className="flex gap-2">
                   {["Data", "DX", "Strategy"].map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px] font-bold">{t}</span>
                   ))}
                </div>
             </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center justify-between">
             <div className="flex gap-8">
                <div className="text-center">
                   <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Weekly</div>
                   <div className="text-sm font-bold text-slate-900">進捗確認MTG</div>
                </div>
                <div className="text-center">
                   <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Monthly</div>
                   <div className="text-sm font-bold text-slate-900">成果レビュー</div>
                </div>
                <div className="text-center">
                   <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Quarterly</div>
                   <div className="text-sm font-bold text-slate-900">方向性確認</div>
                </div>
             </div>
             <p className="text-xs text-slate-500 italic font-medium hidden md:block">※ 常にコミュニケーションを絶やさず、変化に迅速に対応します。</p>
          </div>
        </ProposalSection>

        {/* --- 8. Pricing --- */}
        <ProposalSection id="section-8" title="8. 料金プラン">
          <SubTitle icon={<Layers className="w-6 h-6"/>}>8-1. プラン比較</SubTitle>
          <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl mb-16 overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
              <thead className="bg-slate-900 text-white uppercase tracking-widest text-[10px]">
                <tr>
                  <th className="p-5 border-r border-slate-800">項目</th>
                  <th className="p-5 border-r border-slate-800">【梅】ライト</th>
                  <th className="p-5 border-r border-slate-800 bg-rose-600">【竹】スタンダード（推奨）</th>
                  <th className="p-5">【松】フルサポート</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[13px] font-medium text-slate-500">
                <tr>
                  <td className="p-5 bg-slate-50 border-r border-slate-200 font-bold text-slate-900">月額料金</td>
                  <td className="p-5 border-r border-slate-100">¥300,000</td>
                  <td className="p-5 border-r border-slate-100 bg-rose-50/20 font-bold text-slate-900 text-lg italic">¥500,000</td>
                  <td className="p-5">¥700,000</td>
                </tr>
                <tr>
                  <td className="p-5 bg-slate-50 border-r border-slate-200 font-bold">定例MTG</td>
                  <td className="p-5 border-r border-slate-100 text-center">月2回</td>
                  <td className="p-5 border-r border-slate-100 text-center">隔週</td>
                  <td className="p-5 text-center">週次</td>
                </tr>
                <tr>
                  <td className="p-5 bg-slate-50 border-r border-slate-200 font-bold">加盟店分析・DX</td>
                  <td className="p-5 border-r border-slate-100 text-center"><span className="text-slate-300">△</span> 設計のみ</td>
                  <td className="p-5 border-r border-slate-100 text-center text-emerald-500 font-bold"><span className="text-emerald-500">○</span> 基本対応</td>
                  <td className="p-5 text-center text-emerald-500 font-bold"><span className="text-emerald-500">◎</span> フル対応</td>
                </tr>
                <tr>
                  <td className="p-5 bg-slate-50 border-r border-slate-200 font-bold">Instagram広告支援</td>
                  <td className="p-5 border-r border-slate-100 text-center"><span className="text-slate-300">△</span> アドバイス</td>
                  <td className="p-5 border-r border-slate-100 text-center text-emerald-500 font-bold"><span className="text-emerald-500">○</span> コンサル</td>
                  <td className="p-5 text-center text-emerald-500 font-bold"><span className="text-emerald-500">◎</span> 運用代行込</td>
                </tr>
                <tr>
                  <td className="p-5 bg-slate-50 border-r border-slate-200 font-bold">SEO/SNS施策</td>
                  <td className="p-5 border-r border-slate-100 text-center"><span className="text-slate-300">△</span> 戦略立案のみ</td>
                  <td className="p-5 border-r border-slate-100 text-center text-emerald-500 font-bold"><span className="text-emerald-500">○</span> 進行管理</td>
                  <td className="p-5 text-center text-emerald-500 font-bold"><span className="text-emerald-500">◎</span> 実務フル</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-5 border-r border-slate-200 font-bold">推奨対象</td>
                  <td className="p-5 border-r border-slate-100 leading-tight">まず分析から始めたい</td>
                  <td className="p-5 border-r border-slate-100 leading-tight bg-rose-50/20 font-bold text-rose-600">バランス重視、1-3ヶ月で成果へ</td>
                  <td className="p-5 leading-tight">全施策を一気に推進</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
             <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
                <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                   <Wallet className="w-5 h-5 text-rose-600" />
                   広告費について
                </h5>
                <ul className="space-y-3 text-xs text-slate-600 font-medium">
                   <li className="flex gap-2"><ArrowRight className="w-3 h-3 mt-1 text-rose-500" /> 広告費は月額支援料とは別途実費となります。</li>
                   <li className="flex gap-2"><ArrowRight className="w-3 h-3 mt-1 text-rose-500" /> Phase 1（分析期）では広告費は発生しません。</li>
                   <li className="flex gap-2"><ArrowRight className="w-3 h-3 mt-1 text-rose-500" /> 予算に応じて都度最適な運用プランを提示します。</li>
                </ul>
             </div>
             <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl">
                <h5 className="font-bold text-rose-500 mb-6 flex items-center gap-2">
                   <TrendingUp className="w-5 h-5" />
                   投資対効果のシナリオ
                </h5>
                <div className="space-y-4">
                   <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-xs text-slate-400">既存店改善</span>
                      <span className="text-sm font-bold text-emerald-400">10店舗改善で月100万増</span>
                   </div>
                   <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-xs text-slate-400">新規獲得</span>
                      <span className="text-sm font-bold text-emerald-400">年間10店舗増 × LTV</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-xs text-slate-400">離脱防止</span>
                      <span className="text-sm font-bold text-emerald-400">離脱率5%減 × LTV</span>
                   </div>
                </div>
             </div>
          </div>
        </ProposalSection>

        {/* --- 9. Achievements --- */}
        <ProposalSection id="section-9" title="9. 弊社の強みと実績">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { t: "パフォーマンス向上実績", v: "3倍", d: "インバウンド事業にてCPA維持のまま売上規模を3倍へ拡大。" },
              { t: "安定リード獲得", v: "200件+", d: "IT支援サービスにて業界平均の半額で月200件以上獲得。" },
              { t: "広告運用ROAS", v: "500%", d: "旅行メディアにてROAS 500%を2年以上継続して維持。" }
            ].map((it, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-200 rounded-3xl text-center">
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{it.t}</div>
                 <div className="text-4xl font-serif font-bold text-rose-600 mb-4">{it.v}</div>
                 <p className="text-xs text-slate-600 leading-relaxed font-medium">{it.d}</p>
              </div>
            ))}
          </div>
          <Card title="一般的な代理店との決定的な違い" icon={<Users2 className="w-8 h-8" />} color="slate">
             <ul className="grid md:grid-cols-2 gap-6 text-sm font-bold text-slate-700">
                <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-rose-500 mt-0.5" />
                   経験豊富な専門家が直接担当。ジュニアスタッフへの丸投げなし。
                </li>
                <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-rose-500 mt-0.5" />
                   事業KPI（売上・利益）に直接コミット。媒体指標に終始しません。
                </li>
                <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-rose-500 mt-0.5" />
                   段階的な内製化支援により、自社で戦える体制構築をゴールとします。
                </li>
                <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-rose-500 mt-0.5" />
                   金融・IT・マーケの融合。単なる「プロモーション屋」ではありません。
                </li>
             </ul>
          </Card>
        </ProposalSection>

        {/* --- 10. Next Steps --- */}
        <ProposalSection id="section-10" title="10. 次のステップ">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
             <div className="bg-rose-600 p-12 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10"><Rocket className="w-32 h-32" /></div>
                <h5 className="text-2xl font-serif font-bold mb-10 italic">Action Timeline</h5>
                <div className="space-y-6 relative z-10 text-sm font-bold">
                   <div className="flex items-center gap-4">
                      <div className="w-20 text-[10px] text-rose-200">1月第4週</div>
                      <div className="flex-grow h-px bg-white/20"></div>
                      <div>本提案の確認・回答</div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-20 text-[10px] text-rose-200">2月第1週</div>
                      <div className="flex-grow h-px bg-white/20"></div>
                      <div>追加ヒアリング</div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-20 text-[10px] text-rose-200">2月中旬</div>
                      <div className="flex-grow h-px bg-white/20"></div>
                      <div>契約締結</div>
                   </div>
                   <div className="flex items-center gap-4 text-white">
                      <div className="w-20 text-[10px] text-rose-200">2月下旬〜</div>
                      <div className="flex-grow h-px bg-white/40"></div>
                      <div className="text-lg">キックオフ / Phase 1開始</div>
                   </div>
                </div>
             </div>
             <div className="p-8 border border-slate-200 rounded-[3rem] bg-slate-50 flex flex-col justify-center">
                <h5 className="font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">ご回答・確認事項</h5>
                <ul className="space-y-4 text-xs font-bold text-slate-700">
                   <li className="flex gap-4"><HelpCircle className="w-4 h-4 text-rose-500 shrink-0"/> 現在の加盟店数と正確な稼働状況</li>
                   <li className="flex gap-4"><HelpCircle className="w-4 h-4 text-rose-500 shrink-0"/> 売上上位加盟店のリスト（成功店ヒアリング用）</li>
                   <li className="flex gap-4"><HelpCircle className="w-4 h-4 text-rose-500 shrink-0"/> 各加盟店の売上データの取得・閲覧可否</li>
                   <li className="flex gap-4"><HelpCircle className="w-4 h-4 text-rose-500 shrink-0"/> 過去に実施したマーケ施策の結果データ</li>
                </ul>
             </div>
          </div>
          <div className="text-center py-12">
             <p className="text-slate-500 text-sm leading-relaxed mb-8">
               ハオミル株式会社様の「加盟店成功」を全ての起点とし、<br/>
               持続可能で圧倒的なNo.1ブランドを共に構築させてください。
             </p>
             <div className="inline-flex flex-col items-center">
                <div className="font-serif font-bold text-3xl text-slate-900 mb-1">マーケティング伴走支援チーム</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-[0.5em] font-bold">Strategic Partnership for HAOMIL</div>
             </div>
          </div>
        </ProposalSection>

      </div>

      {/* --- Floating Navigation --- */}
      <div className="hidden xl:block fixed top-1/2 left-8 -translate-y-1/2 w-48 space-y-1 text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] no-print z-50">
        <div className="mb-4 border-b border-slate-100 pb-2 text-slate-300 uppercase">Section Outline v02</div>
        {menuItems.map(it => (
          <a key={it.id} href={`#section-${it.id}`} className="block hover:text-rose-500 transition-colors py-1 flex items-center gap-3 group">
            <span className="w-4 h-px bg-slate-200 group-hover:bg-rose-400 group-hover:w-8 transition-all"></span>
            {it.label}
          </a>
        ))}
      </div>
    </div>
  );
};
