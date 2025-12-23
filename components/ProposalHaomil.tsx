
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
  Circle, X
} from 'lucide-react';

const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <th className="p-4 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest text-left border-b border-slate-800">
    {children}
  </th>
);

const TableCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <td className={`p-4 text-sm text-slate-700 border-b border-slate-100 ${className}`}>
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

export const ProposalHaomil: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = async () => {
    const element = document.getElementById('proposal-full-content');
    if (!element || isGenerating) return;
    setIsGenerating(true);
    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'HAOMIL様_MOCマーケティング戦略ご提案書.pdf',
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
    { id: 3, label: "Environ", title: "3. エンビロン分析" },
    { id: 4, label: "Target", title: "4. ターゲット戦略" },
    { id: 5, label: "Roadmap", title: "5. 12ヶ月ロードマップ" },
    { id: 6, label: "Evaluation", title: "6. 判断基準" },
    { id: 7, label: "Strength", title: "7. 弊社の強みと実績" },
    { id: 8, label: "Pricing", title: "8. 料金プラン" },
    { id: 9, label: "Next", title: "9. 次のステップ" },
    { id: 10, label: "Appendix", title: "10. 確認事項" },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans">
      <div id="proposal-full-content" className="w-full">
        
        {/* --- 0. Main Visual (Cover) --- */}
        <section className="relative min-h-[90vh] py-24 flex flex-col justify-center overflow-hidden bg-white border-b border-slate-100">
          <div className="absolute top-0 right-0 w-2/5 h-full bg-slate-50 -skew-x-6 transform translate-x-1/4 pointer-events-none border-l border-slate-100"></div>
          <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-24">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-slate-900 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.3em]">
                Strategic Partnership Proposal
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
              〜 エンビロンモデルに学ぶ「探してでも行きたい」ブランドの構築 〜
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-slate-200">
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase mb-2 tracking-widest">Submission Date</div>
                <div className="text-lg font-bold text-slate-800">2025年1月</div>
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
          <SubTitle icon={<CheckCircle2 className="w-6 h-6"/>}>結論：MOC事業の基盤を固め、再現性のある獲得モデルの構築を目指す</SubTitle>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5"><BarChart3 className="w-40 h-40" /></div>
               <h4 className="text-rose-500 text-[10px] font-bold mb-6 uppercase tracking-widest border-b border-white/10 pb-2">支援計画の骨子</h4>
               <div className="space-y-4">
                 {[
                   { l: "ご支援対象", v: "MOC（代理店サービス）" },
                   { l: "期間", v: "12ヶ月（3ヶ月毎に成果を検証）" },
                   { l: "推奨プラン", v: "月額50万円（戦略・基盤構築）" },
                   { l: "期待成果", v: "年間新規100〜200店舗（暫定シミュレーション）" },
                 ].map((it, i) => (
                   <div key={i} className="flex justify-between items-baseline py-1">
                      <span className="text-xs text-slate-400 font-bold">{it.l}</span>
                      <span className="text-base font-bold text-right">{it.v}</span>
                   </div>
                 ))}
                 <div className="pt-4 space-y-4">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <p className="text-[10px] text-rose-400 leading-relaxed font-bold">
                        期待成果は現時点での暫定シミュレーションです。
                        実際に広告を運用し、その実測値から「獲得期待件数」を精緻に見積もった上で、広告費用を本格的に投入するかをHAOMIL様と共に判断してまいります。
                      </p>
                    </div>
                    <p className="text-[9px] text-slate-500 italic">
                      ※ 本提案内の店舗数等はシミュレーション用の仮設定値（既存100店舗想定）です。
                    </p>
                 </div>
               </div>
            </div>
            
            <div className="flex flex-col justify-center bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
               <h4 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                 <Search className="w-5 h-5 text-rose-600" />
                 ご提案の背景：3つの視点
               </h4>
               <div className="mb-6 p-3 bg-amber-50 border border-amber-100 rounded-lg">
                 <p className="text-[10px] text-amber-800 leading-relaxed font-medium">
                   ※ 本提案はベンチマークとして「エンビロン」を詳細に調査した結果に基づいた、戦略構築の一例です。
                 </p>
               </div>
               <ul className="space-y-6">
                  <li className="flex gap-4">
                     <div className="shrink-0 w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm italic">1</div>
                     <div>
                        <div className="font-bold text-sm mb-1">「医療提携型」ポジションの可能性</div>
                        <p className="text-xs text-slate-600 leading-relaxed">過酸化水素使用可能×代理店モデル。この独自の強みを活かした「空白地帯」の独占を狙います。</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <div className="shrink-0 w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm italic">2</div>
                     <div>
                        <div className="font-bold text-sm mb-1">エンビロンモデルからの学び</div>
                        <p className="text-xs text-slate-600 leading-relaxed">35年で2,000店舗を構築した成功要因（参入障壁・サポート・継続の仕組み）をMOCに適用します。</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <div className="shrink-0 w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm italic">3</div>
                     <div>
                        <div className="font-bold text-sm mb-1">サロンオーナーの課題解決</div>
                        <p className="text-xs text-slate-600 leading-relaxed">「費用対効果への不満」という市場のペインに対し、医療提携型の確かな効果を回答として提示します。</p>
                     </div>
                  </li>
               </ul>
            </div>
          </div>

          <SubTitle icon={<List className="w-6 h-6"/>}>3つのご提案ポイント</SubTitle>
          <div className="mb-8 p-6 bg-rose-50 border-l-4 border-rose-500 rounded-r-xl">
            <p className="text-sm text-rose-900 leading-relaxed font-bold">
              3ヶ月ごとの意思決定を行うため、年間投資を一気に決める必要はありません。
              フェーズごと（3ヶ月ごと）に、その予算を投じるに値する戦略が十分に練られているかを、実数値と市場の反応に基づき判断して進行します。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
             <Card title="事前調査に基づく戦略設計" icon={<Microscope className="w-8 h-8" />} color="slate">
                エンビロンの成長軌跡を詳細に分析。1サービスの調査深度を本提案を通してご確認ください。
             </Card>
             <Card title="3ヶ月毎の意思決定フロー" icon={<Gauge className="w-8 h-8" />} color="blue">
                「方向転換判断」のタイミングを明確に設定。投資対効果を常に検証しながら進行します。
             </Card>
             <Card title="進捗と成果物の完全透明化" icon={<FileCheck className="w-8 h-8" />} color="emerald">
                月次タスクと納品物をすべて明記。いつまでに何が完了するかを一目で把握いただけます。
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
                 「MOC」ブランドとしての統一情報がWeb上に存在せず、<br/>
                 指名検索で「正解」に辿り着けない
               </h4>
            </div>

            <div className="grid md:grid-cols-3 gap-10 relative z-10">
               {[
                 { t: "ブランド統一性の欠如", d: "価格・施術・見せ方がバラバラで、「MOCなら安心」という共通認識が構築されていない。" },
                 { t: "Web戦略の不在", d: "SEO・MEO未対策. 広告戦略もなく、せっかくの指名ニーズが他社や個店に流出している。" },
                 { t: "社内体制の不足", d: "施策が属人化しており、将来的に自社でマーケティングを回すための基盤が未構築。" }
               ].map((it, i) => (
                 <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-rose-500 mb-6 font-bold font-serif italic text-lg shadow-xl">{i+1}</div>
                    <h5 className="font-bold mb-4">{it.t}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">{it.d}</p>
                 </div>
               ))}
            </div>

            <div className="mt-16 pt-10 border-t border-white/10 text-center relative z-10">
               <p className="text-sm font-bold text-rose-400 italic">Result: どのサロンに行っても「MOCなら歯が綺麗になる」認知が構築できていない</p>
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
                    <TableCell className="text-rose-600 font-serif italic">Priority 1</TableCell>
                    <TableCell>ブランドポジショニングの確立</TableCell>
                    <TableCell><span className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-[10px]">Phase 1</span></TableCell>
                  </tr>
                  <tr>
                    <TableCell className="text-slate-400 font-serif italic">Priority 2</TableCell>
                    <TableCell>Web情報基盤の構築</TableCell>
                    <TableCell><span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px]">Phase 1-2</span></TableCell>
                  </tr>
                  <tr>
                    <TableCell className="text-slate-400 font-serif italic">Priority 3</TableCell>
                    <TableCell>広告運用の開始</TableCell>
                    <TableCell><span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px]">Phase 2</span></TableCell>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <Card title="「世界観 vs 獲得」の両立について" icon={<Quote className="w-8 h-8" />} color="slate">
                <p className="mb-4 italic text-sm text-slate-500">「営業色の強いLPは避けたいが、数字も伸ばしたい」</p>
                <p className="text-sm font-medium leading-relaxed">
                  私たちの見解としては、両立は十分に可能です。ブランドサイト（世界観）と専用LP（獲得）を役割分担させることで、「探してでも行きたい」と思わせる信頼構築と, 効率的なリード獲得を同時に実現します。
                </p>
              </Card>
              <div className="mt-6 p-6 bg-slate-50 border border-slate-100 rounded-2xl flex gap-3 items-start shadow-inner">
                <Info className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 font-bold leading-relaxed">
                  ※弊社にて、獲得に特化したLP制作、およびブランドの世界観をしっかり作り込んだサービスサイト制作のいずれも高いクオリティで対応可能です。戦略に応じて最適な形態をご提案します。
                </p>
              </div>
            </div>
          </div>
        </ProposalSection>

        {/* --- 3. Benchmark Analysis: Environ --- */}
        <ProposalSection id="section-3" title="3. ベンチマーク分析：エンビロンの成功モデル">
          <SubTitle icon={<History className="w-6 h-6"/>}>3-1. 日本市場における成長軌跡</SubTitle>
          <div className="relative pl-12 border-l-2 border-slate-100 ml-4 space-y-10 mb-20">
             {[
               { y: "1987年", t: "研究開発開始", d: "Dr.デス・フェルナンデスによるビタミンA理論の確立。", sub: ["科学的根拠の確立"] },
               { y: "1988年", t: "最初の製品開発", d: "自宅キッチンで2つのクリームを開発。", sub: ["原点：少量生産・高品質"] },
               { y: "1990年", t: "Environ Skin Care社 設立", d: "南アフリカでの事業化スタート。", sub: ["グローバル展開の礎"] },
               { y: "1991年10月", t: "日本市場参入", d: "株式会社プロティア・ジャパン設立。", sub: ["日本展開の開始"] },
               { y: "1995年", t: "エンビロン・スキンセンター開設", d: "東京に研修・教育拠点を確立。", sub: ["教育体制の土台構築"] },
               { y: "1997年", t: "トリートメント開始", d: "日本初のフェイシャルトリートメント提供。", sub: ["サロンビジネスの本格化"] },
               { y: "1998年", t: "医学的エビデンスの蓄積", d: "戸澤医師による400人以上の臨床試験実施。", sub: ["信頼性の証明"] },
               { y: "2007年", t: "事業多角化", d: "パワープレート事業の開始。", sub: ["トータルライフケアへの拡張"] },
               { y: "2010年頃", t: "成長期の到達点", d: "取扱店が約600ヵ所に拡大。", sub: ["市場での存在感確立"] },
               { y: "2011年", t: "戦略転換点", d: "マーケティング部を新設。", sub: ["ブランディング戦略の刷新"] },
               { y: "2015年", t: "国際的品質保証", d: "スイスビタミンインスティテュート認証取得。", sub: ["日本初の快挙"] },
               { y: "2016年", t: "代理店ランク制度導入", d: "ゴールド・オフィシャルパートナー制度開始。", sub: ["代理店ロイヤリティの設計"] },
               { y: "2018-2024年", t: "国際的ブランド地位の確立", d: "米国Aesthetic Everything® Awards 7年連続受賞。", sub: ["世界的評価の継続"] },
               { y: "2019年", t: "オムニチャネル化", d: "会員制EC「LiveActive STORE」開設。", sub: ["デジタルトランスフォーメーション"] },
               { y: "2022年", t: "成長の継続", d: "取扱店1,500ヵ所を突破。", sub: ["加速する店舗網"] },
               { y: "2024年", t: "35年目の到達点", d: "取扱店2,000店舗以上を達成。", sub: ["圧倒的なブランド基盤"] }
             ].map((it, i) => (
               <div key={i} className="relative group">
                  <div className="absolute -left-[53px] top-1 w-6 h-6 rounded-full bg-white border-2 border-rose-500 flex items-center justify-center">
                     <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:shadow-lg transition-all">
                     <div className="text-xs font-bold text-rose-500 mb-1 font-serif italic">{it.y}</div>
                     <h5 className="font-bold text-slate-900 mb-1">{it.t}</h5>
                     <p className="text-xs text-slate-600 leading-relaxed font-medium">{it.d}</p>
                     {it.sub && (
                       <div className="mt-2 flex flex-wrap gap-2">
                         {it.sub.map((s, si) => (
                           <span key={si} className="text-[9px] px-2 py-0.5 bg-rose-50 text-rose-600 rounded font-bold uppercase tracking-wider">{s}</span>
                         ))}
                       </div>
                     )}
                  </div>
               </div>
             ))}
          </div>

          <SubTitle icon={<Award className="w-6 h-6"/>}>3-2. 成功要因の1つ：厳格な「ディプロマ制度」</SubTitle>
          <div className="grid md:grid-cols-2 gap-8 mb-20">
             <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5"><GraduationCap className="w-40 h-40" /></div>
                <h5 className="text-rose-500 font-bold text-xs uppercase tracking-widest mb-8">Case: Environ's Strategy</h5>
                <div className="space-y-6">
                   <div className="bg-white/5 p-6 rounded-2xl">
                      <div className="text-xs font-bold text-slate-400 mb-2">上級試験 合格率</div>
                      <div className="text-3xl font-serif italic text-rose-400">約 50% <span className="text-xs font-sans text-slate-500 not-italic">（質の担保を優先した審査）</span></div>
                   </div>
                   <p className="text-xs text-slate-400 leading-relaxed font-medium">
                      あえてハードルの高い制度を設けることで、取扱店の質を担保。
                      「苦労して取得した資格」という心理的投資が、代理店の誇りと強い帰属意識を生んでいます。
                   </p>
                </div>
             </div>
             <div className="p-8 border border-slate-200 rounded-[2.5rem] flex flex-col justify-center">
                <h5 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                   <ArrowDown className="w-4 h-4 text-rose-600" />
                   MOCでの具体的適用検討
                </h5>
                <ul className="space-y-4 text-sm font-bold text-slate-700">
                   <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                      HAOMIL創業者の事業への原体験を言語化し、研修で想いを共有する
                   </li>
                   <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                      合格証の価値を高め、加盟店が「MOCブランドの一員」である誇りを持てる設計
                   </li>
                   <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                      「誰でもできる」ではなく「選ばれたサロンのみ」という希少性の構築
                   </li>
                </ul>
             </div>
          </div>

          <SubTitle icon={<Settings className="w-6 h-6"/>}>3-7. 成功要因の1つ：代理店・取扱店向け制度の全体像</SubTitle>
          
          {/* Partner Onboarding Process */}
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 mb-16">
             <h5 className="text-slate-900 font-bold mb-10 flex items-center gap-2">
                <GitFork className="w-5 h-5 text-rose-600" />
                取扱店になるためのプロセス
             </h5>
             <div className="grid md:grid-cols-6 gap-4 relative">
                {[
                  { n: "01", t: "問い合わせ", d: "プロティアへ連絡" },
                  { n: "02", t: "無料セミナー", d: "経営者向け説明" },
                  { n: "03", t: "研修参加", d: "3日間の集中講座", h: true },
                  { n: "04", t: "試験合格", d: "筆記＋実技審査" },
                  { n: "05", t: "正規登録", d: "取扱店として認定" },
                  { n: "06", t: "初回導入", d: "約50万円〜の発注" }
                ].map((step, i) => (
                  <div key={i} className={`relative p-6 rounded-2xl border text-center flex flex-col items-center group transition-all hover:shadow-lg ${step.h ? 'bg-slate-900 text-white border-rose-500 shadow-xl' : 'bg-white border-slate-100 text-slate-800'}`}>
                     <div className={`text-[10px] font-bold mb-3 ${step.h ? 'text-rose-500' : 'text-slate-400'}`}>STEP {step.n}</div>
                     <div className="text-sm font-bold mb-2">{step.t}</div>
                     <div className={`text-[10px] leading-relaxed ${step.h ? 'text-slate-400' : 'text-slate-500'}`}>{step.d}</div>
                     {step.h && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase">篩にかける</div>}
                     {i < 5 && <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-slate-300"><ChevronRight className="w-4 h-4" /></div>}
                  </div>
                ))}
             </div>
             <div className="mt-8 p-4 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-500 italic flex gap-3 items-center">
                <Info className="w-4 h-4 text-rose-500 shrink-0" />
                ※初期導入セット（約50万円〜）には、イオン導入機、主要業務用製品、店頭販売用主力製品が含まれます。
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Rank System */}
            <div>
              <h5 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-rose-600" />
                認定ランク制度
              </h5>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-4 w-1/3">ランク</th>
                      <th className="p-4">条件・特典</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    <tr>
                      <td className="p-4 bg-slate-50 font-bold text-rose-600 flex items-center gap-1"><Star className="w-3 h-3 fill-rose-600" /> 5つ星サロン</td>
                      <td className="p-4 text-slate-700">8項目の基準を全クリア（全国約10店のみ）。公式サイト優先掲載、本部密接連携。</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-800">ゴールド・パートナー</td>
                      <td className="p-4 text-slate-600">特に優れた専門店（2016年開始）。本社イベント招待、先行情報提供。</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-800">オフィシャル・パートナー</td>
                      <td className="p-4 text-slate-600">本部と「運命共同体」として取り組むサロン。セミナー・アカデミー参加権。</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-800">一般取扱店</td>
                      <td className="p-4 text-slate-600">ディプロマ取得者在籍店。基本サポート対象。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[10px] text-slate-500 leading-relaxed font-medium bg-slate-50 p-4 rounded-xl">
                 スタッフ個人にも「4つ星カウンセラー」等の認定があり、<strong className="text-slate-800">数年毎の更新講習</strong>で技術と知識を維持・向上させる仕組みです。
              </p>
            </div>

            {/* Support System */}
            <div>
              <h5 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-rose-600" />
                本部からのサポート内容
              </h5>
              <div className="space-y-4">
                {[
                  { c: "継続研修", d: "レベルアップ研修、症例発表会、イブニングセミナー", i: <GradIcon className="w-5 h-5" /> },
                  { c: "マーケティング支援", d: "販促物提供、経営ノウハウセミナーの定期開催", i: <TrendingUp className="w-5 h-5" /> },
                  { c: "コミュニケーション", d: "担当営業による個別伴走、パートナーの集い開催", i: <MessageCircle className="w-5 h-5" /> },
                  { c: "オンライン学習", d: "eラーニング「エンビロン オンライントレーニング」", i: <Smartphone className="w-5 h-5" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white border border-slate-100 rounded-2xl hover:border-rose-200 transition-all shadow-sm">
                     <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-rose-600">{item.i}</div>
                     <div>
                        <div className="text-xs font-bold text-slate-900 mb-1">{item.c}</div>
                        <div className="text-[10px] text-slate-500 leading-relaxed font-medium">{item.d}</div>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <SubTitle icon={<Search className="w-6 h-6"/>}>3-8. 成功要因の分析：なぜ35年成長し続けられたのか</SubTitle>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
             {[
               { t: "科学的根拠という揺るがない土台", d: "形成外科医としての医学的知見と400人以上の臨床試験が製品の信頼性を担保。他社との決定的な差別化要因。", i: <Stethoscope className="w-6 h-6"/> },
               { t: "「参入障壁」と「サポート」のバランス", d: "高い難易度の資格制度で質を担保し、一方で手厚い本部サポートで孤独に戦わせない離脱防止の仕組み。", i: <ShieldAlert className="w-6 h-6"/> },
               { t: "ステップアップシステム", d: "ビタミンA濃度を段階的に上げる設計。顧客の継続購入動機が自然に生まれるリピート率向上の仕組み。", i: <TrendingUp className="w-6 h-6"/> },
               { t: "一般流通の完全排除", d: "ドラッグストア等での販売を一切行わず「カウンセリング販売」を徹底。希少価値とサロンの存在意義を構築。", i: <Lock className="w-6 h-6"/> },
               { t: "ダブルケアシステム", d: "ホームケア＋プロフェッショナルケアの2本柱。独自機器（イオン導入等）が真似できない差別化ポイント。", i: <Layers className="w-6 h-6"/> }
             ].map((it, i) => (
               <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-3xl group hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform shadow-sm">{it.i}</div>
                  <h5 className="font-bold text-slate-900 mb-4 text-sm leading-snug">{it.t}</h5>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{it.d}</p>
               </div>
             ))}
          </div>

          <SubTitle icon={<Lightbulb className="w-6 h-6"/>}>3-9. MOC（ホワイトニングサロン代理店ビジネス）への示唆</SubTitle>
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 mb-20 relative overflow-hidden">
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl"></div>
             <div className="grid md:grid-cols-2 gap-12 relative z-10">
                {[
                  { t: "創業者ストーリーの言語化と浸透", d: "エンビロンの「想い」に倣い、MOC創業の原体験を言語化。研修冒頭で伝え、代理店との理念共有を徹底すべき。", i: <Fingerprint className="w-5 h-5"/> },
                  { t: "厳格なディプロマ制度の構築", d: "「誰でも」ではなく「合格者だけ」が参入できる制度。合格率50%程度の難易度は、代理店の誇りとロイヤリティを醸成する。", i: <GraduationCap className="w-5 h-5"/> },
                  { t: "段階的なランク制度の設計", d: "5つ星〜一般店までの階層化。各ランクに明確な特典を設け、「上を目指したくなる」成長動機を仕組み化する。", i: <Award className="w-5 h-5"/> },
                  { t: "直営店（フラッグシップ）の運営", d: "本部自らが現場で成功し、最高水準を示すショーケースを持つ。この事実は代理店からの絶対的な信頼に繋がる。", i: <Building2 className="w-5 h-5"/> },
                  { t: "一般流通排除による価値維持", d: "安易なEC販売を避け、「カウンセリング販売」を徹底。代理店が「探してでも行きたい店」を運営できる環境を整備。", i: <ShieldCheck className="w-5 h-5"/> },
                  { t: "継続的な教育機会の提供", d: "症例発表会や定期セミナーなど「学びの場」を継続提供。離脱を防ぎ、ネットワーク全体の技術レベルを向上させる。", i: <BookOpen className="w-5 h-5"/> }
                ].map((it, i) => (
                  <div key={i} className="flex gap-5">
                     <div className="shrink-0 w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg">{it.i}</div>
                     <div>
                        <h6 className="font-bold text-slate-900 mb-2">{it.t}</h6>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">{it.d}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="p-12 bg-slate-900 text-white rounded-[4rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5"><Target className="w-64 h-64" /></div>
             <div className="max-w-3xl mx-auto text-center relative z-10">
                <h4 className="text-rose-500 font-bold text-[11px] uppercase tracking-[0.5em] mb-8">Conclusion: The Essence of Environ Model</h4>
                <h3 className="text-2xl md:text-3xl font-serif font-bold italic text-rose-100 mb-10 leading-relaxed">
                  「高い参入障壁」×「手厚いサポート」×「継続を前提とした仕組み」
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium mb-12">
                  エンビロンの成長は製品力だけではなく、この三位一体のビジネスモデルが代理店の質を担保している点にあります。<br/>
                  MOCにおいても、短期的な店舗数拡大より「選ばれた者だけが参入できるプロフェッショナルネットワーク」の構築こそが、長期的な成長の鍵となります。
                </p>
                <div className="h-px w-24 bg-rose-500/50 mx-auto"></div>
             </div>
          </div>
        </ProposalSection>

        {/* --- 4. Target Strategy --- */}
        <ProposalSection id="section-4" title="4. ターゲット戦略：サロンオーナーペルソナ">
          <SubTitle icon={<Users className="w-6 h-6"/>}>市場データに基づいた5つの獲得優先セグメント（仮設計）</SubTitle>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { n: "佐藤美咲 (38)", j: "安定志向の美容室オーナー", d: "地方都市 / 客単価UP目標", pr: 1, icon: <Building2 className="w-6 h-6"/> },
              { n: "田中健太 (45)", j: "拡大志向のエステオーナー", d: "都市部 / 複数店舗への展開検討", pr: 2, icon: <TrendingUp className="w-6 h-6"/> },
              { n: "山田由美 (32)", j: "副業志向の自宅サロン", d: "住宅街 / 省スペース活用", pr: 1, icon: <Smartphone className="w-6 h-6"/> },
              { n: "鈴木大輔 (28)", j: "イノベーター型若手オーナー", d: "繁華街 / SNS映え・トレンド重視", pr: 3, icon: <Zap className="w-6 h-6"/> },
              { n: "高橋正子 (52)", j: "セカンドキャリア型オーナー", d: "郊外 / 安全性・サポート重視", pr: 2, icon: <Award className="w-6 h-6"/> }
            ].map((p, i) => (
              <div key={i} className={`p-8 rounded-3xl border transition-all ${p.pr === 1 ? 'bg-slate-900 text-white border-rose-500 shadow-2xl' : 'bg-white border-slate-200'}`}>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-2.5 rounded-2xl ${p.pr === 1 ? 'bg-rose-600 text-white' : 'bg-slate-50 text-slate-400'}`}>{p.icon}</div>
                  <div className={`text-[10px] font-bold px-3 py-1 rounded-full ${p.pr === 1 ? 'bg-rose-500 text-white' : 'bg-slate-50 text-slate-400'}`}>PRIORITY {p.pr}</div>
                </div>
                <h5 className="font-bold text-lg mb-1">{p.n}</h5>
                <div className={`text-[10px] font-bold uppercase tracking-widest mb-6 ${p.pr === 1 ? 'text-rose-400' : 'text-slate-400'}`}>{p.j}</div>
                <p className={`text-xs leading-relaxed font-medium ${p.pr === 1 ? 'text-slate-400' : 'text-slate-600'}`}>{p.d}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-slate-50 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 border border-slate-100">
             <div className="w-16 h-16 rounded-full bg-rose-600 flex items-center justify-center shrink-0 shadow-lg text-white font-serif italic text-2xl">A</div>
             <div>
                <h4 className="font-bold text-slate-900 mb-2">アプローチ優先順位の考え方</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                   まずは獲得コストが低く母数が多い「③自宅サロン」と「①美容室」を優先チャネルとし、Instagram広告で急速な刈り取りを行います。
                   その後、実績をコンテンツ化して「②拡大志向オーナー」への提案へと広げていく2段構えの戦略をとります。
                </p>
             </div>
          </div>
        </ProposalSection>

        {/* --- 5. Roadmap --- */}
        <ProposalSection id="section-5" title="5. 12ヶ月ロードマップ【詳細計画案】">
          
          {/* Phase 1: Strategy */}
          <SubTitle icon={<Compass className="w-6 h-6"/>}>Phase 1：戦略策定期（1〜3ヶ月目）</SubTitle>
          <p className="text-sm text-slate-500 mb-8 font-medium">目的：エンビロン等のベンチマーク分析を通じて、MOCの最適なマーケティング戦略を策定</p>
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm mb-12">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-5 w-20">月</th>
                  <th className="p-5 w-2/5">主要タスク</th>
                  <th className="p-5">アウトプット</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-bold text-slate-700">
                <tr className="bg-rose-50/5">
                  <td className="p-5 border-r border-slate-100">1ヶ月目</td>
                  <td className="p-5 font-normal leading-relaxed">
                    ・エンビロンの徹底調査（Web、SNS、広告、代理店網）<br/>
                    ・類似代理店モデル（美容商材系）の調査<br/>
                    ・ホワイトニング業界の市場規模・トレンド調査
                  </td>
                  <td className="p-5 font-serif italic text-slate-900 text-sm">✅ ベンチマーク調査レポート</td>
                </tr>
                <tr>
                  <td className="p-5 border-r border-slate-100">2ヶ月目</td>
                  <td className="p-5 font-normal leading-relaxed">
                    ・MOCの強み・差別化ポイント整理<br/>
                    ・ターゲットペルソナ設計（サロンオーナー詳細定義）<br/>
                    ・カスタマージャーニーマップ作成
                  </td>
                  <td className="p-5 font-serif italic text-slate-900 text-sm">✅ ポジショニング戦略書<br/>✅ ペルソナ設計書</td>
                </tr>
                <tr className="bg-rose-50/5">
                  <td className="p-5 border-r border-slate-100">3ヶ月目</td>
                  <td className="p-5 font-normal leading-relaxed">
                    ・年間ロードマップ確定<br/>
                    ・KPI設計（CPA目標、獲得数目標）<br/>
                    ・4ヶ月目以降の施策決定（広告 / インフルエンサー等）
                  </td>
                  <td className="p-5 font-serif italic text-rose-600 text-sm underline underline-offset-4">✅ 年間マーケティング計画<br/>✅ KPI設計書</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
             <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200">
                <h5 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                   <Microscope className="w-5 h-5 text-rose-600" />
                   調査項目例：エンビロン分析
                </h5>
                <ul className="space-y-3">
                   {[
                     "どのようなチャネルで代理店を募集しているか",
                     "Web広告の出稿状況とクリエイティブ分析",
                     "インフルエンサー・口コミの活用状況",
                     "代理店向けの情報発信（ブログ、セミナー等）",
                     "代理店になるまでのステップ・条件",
                     "代理店向けサポート体制の詳細"
                   ].map((it, i) => (
                     <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                        {it}
                     </li>
                   ))}
                </ul>
             </div>
             <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center">
                <p className="text-sm font-serif italic text-rose-200 leading-relaxed">
                   "このフェーズで最も重要なのは、『エンビロンがなぜ勝っているか』のロジックをMOCの商流に正しく接ぎ木することです。単なる真似ではなく、MOC独自の原体験に基づいたブランド構築を行います。"
                </p>
             </div>
          </div>

          {/* Phase 2: Test */}
          <SubTitle icon={<Zap className="w-6 h-6"/>}>Phase 2：テスト期（4〜6ヶ月目）</SubTitle>
          <p className="text-sm text-slate-500 mb-8 font-medium">目的：Phase 1で策定した戦略に基づき、小規模テストで効果検証</p>
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm mb-12">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-5 w-20">月</th>
                  <th className="p-5 w-2/5">主要タスク</th>
                  <th className="p-5">アウトプット</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-bold text-slate-700">
                <tr className="bg-rose-50/5">
                  <td className="p-5 border-r border-slate-100">4ヶ月目</td>
                  <td className="p-5 font-normal leading-relaxed">
                    ・加盟店募集LP制作（獲得特化型）<br/>
                    ・広告アカウント開設・設計<br/>
                    ・kintone等でのリード管理体制構築
                  </td>
                  <td className="p-5 font-serif italic text-slate-900 text-sm">✅ 募集専用LP公開<br/>✅ 広告配信開始</td>
                </tr>
                <tr>
                  <td className="p-5 border-r border-slate-100">5ヶ月目</td>
                  <td className="p-5 font-normal leading-relaxed">
                    ・広告テスト配信（Meta/Google各30万円目安）<br/>
                    ・A/Bテスト（クリエイティブ、ターゲティング）<br/>
                    ・初期リードの対応フロー確立
                  </td>
                  <td className="p-5 font-serif italic text-slate-900 text-sm">✅ CPA基準値の確立<br/>✅ 初期リード獲得データ</td>
                </tr>
                <tr className="bg-rose-50/5">
                  <td className="p-5 border-r border-slate-100">6ヶ月目</td>
                  <td className="p-5 font-normal leading-relaxed">
                    ・テスト結果の分析・評価<br/>
                    ・効率の良い媒体/訴求の特定<br/>
                    ・7ヶ月目以降の予算配分・エリア拡大決定
                  </td>
                  <td className="p-5 font-serif italic text-rose-600 text-sm underline underline-offset-4">✅ テスト結果レポート<br/>✅ 施策優先度マトリクス</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
             {[
               { t: "エリア限定テスト", d: "まずは特定エリア（例：関東圏）でテストし、確実な勝ちパターンを構築。", i: <Map className="w-6 h-6"/> },
               { t: "小規模予算スタート", d: "月30〜50万円程度で開始し、ROASの見込みを精査。無駄打ちを排除。", i: <DollarSign className="w-6 h-6"/> },
               { t: "複数媒体比較", d: "Meta（SNS）とGoogle（検索）の両軸を検証し、ターゲットとの相性を確認。", i: <TrendingUp className="w-6 h-6"/> }
             ].map((it, i) => (
               <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                  <div className="text-rose-600 mb-4">{it.i}</div>
                  <div className="text-xs font-bold text-slate-900 mb-2">{it.t}</div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{it.d}</p>
               </div>
             ))}
          </div>

          {/* Phase 3: Scaling */}
          <SubTitle icon={<Rocket className="w-6 h-6"/>}>Phase 3：拡大期（7〜12ヶ月目）</SubTitle>
          <p className="text-sm text-slate-500 mb-8 font-medium">目的：効果が検証された施策を横展開し、獲得数を拡大</p>
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm mb-12">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-5 w-32">期間</th>
                  <th className="p-5 w-2/5">主要タスク</th>
                  <th className="p-5">期待成果</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-bold text-slate-700">
                <tr className="bg-rose-50/5">
                  <td className="p-5 border-r border-slate-100 font-serif italic text-sm">7-9ヶ月目</td>
                  <td className="p-5 font-normal leading-relaxed">
                    ・効率の良い媒体に予算を集中投下<br/>
                    ・クリエイティブ・LPの継続的なABテスト改善<br/>
                    ・成功事例サロンの収集とコンテンツ化
                  </td>
                  <td className="p-5 font-serif italic text-slate-900 text-sm">✅ CPA 20%削減（目標）<br/>✅ 獲得数の安定拡大</td>
                </tr>
                <tr>
                  <td className="p-5 border-r border-slate-100 font-serif italic text-sm">10-12ヶ月目</td>
                  <td className="p-5 font-normal leading-relaxed">
                    ・対応エリアの全国拡大（47都道府県）<br/>
                    ・加盟店の成功事例を横展開するセミナー開催<br/>
                    ・2年目のマーケティング計画策定
                  </td>
                  <td className="p-5 font-serif italic text-rose-600 text-sm underline underline-offset-4">✅ 安定的な獲得体制の確立<br/>✅ 内製化（自走）の準備開始</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Future Outlook */}
          <div className="p-8 md:p-12 bg-slate-900 text-white rounded-[4rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5"><Eye className="w-64 h-64" /></div>
             <div className="max-w-3xl relative z-10">
                <h5 className="text-rose-500 font-bold text-[10px] uppercase tracking-[0.5em] mb-8">Year 2 & Beyond Outlook</h5>
                <h4 className="text-2xl md:text-3xl font-serif font-bold italic text-rose-100 mb-8 leading-relaxed">
                  1年目は「獲得数」を重視。<br/>
                  2年目以降は「質の最適化」へ。
                </h4>
                <div className="grid md:grid-cols-2 gap-10">
                   <div>
                      <div className="flex items-center gap-2 text-rose-400 font-bold mb-4">
                         <TrendingUp className="w-5 h-5" />
                         <span>Year 1: Quantity Focus</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-medium">
                         まずは市場シェアを確保するため、獲得数（店舗数）を最優先。MOCブランドの露出を最大化させ、「浜松から全国へ」の勢いを作ります。
                      </p>
                   </div>
                   <div>
                      <div className="flex items-center gap-2 text-rose-400 font-bold mb-4">
                         <BarChart3 className="w-5 h-5" />
                         <span>Year 2: Quality & Profit</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-medium">
                         蓄積されたデータを分析し、「どの属性・エリアの加盟店が最もLTVが高いか」を特定。高利益なセグメントに絞り、投資対効果（ROI）を極限まで高めます。
                      </p>
                   </div>
                </div>
                <div className="mt-12 pt-10 border-t border-white/10 text-center">
                   <p className="text-sm font-bold text-rose-400 italic">「一時的な流行ではなく、35年成長し続けるエンビロンのような強固なブランドへ」</p>
                </div>
             </div>
          </div>
        </ProposalSection>

        {/* --- 6. Evaluation Framework --- */}
        <ProposalSection id="section-6" title="6. 3ヶ月単位の評価基準・判断フレームワーク">
          <SubTitle icon={<Gauge className="w-6 h-6"/>}>「なんとなく継続」を排除する意思決定体制</SubTitle>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-6">
                <p className="text-sm font-bold text-slate-600 leading-relaxed border-l-4 border-rose-500 pl-6 mb-10">
                   各フェーズ終了時に必ず「判断会議」を実施します。KPIの目標達成率に基づき、あらかじめ合意したロジックに従って次の方針を決定します。
                </p>
                <div className="grid gap-4">
                   {[
                     { v: "CPA ≦ 8万円", a: "【拡大】予算を1.5〜2倍に増額し勝機を掴む", c: "bg-emerald-50 text-emerald-700 border-emerald-100" },
                     { v: "8万 < CPA ≦ 12万", a: "【継続】施策のABテスト継続・構成刷新", c: "bg-slate-50 text-slate-700 border-slate-200" },
                     { v: "12万 < CPA ≦ 15万", a: "【変更】媒体配分または訴求軸を抜本的に見直す", c: "bg-amber-50 text-amber-700 border-amber-100" },
                     { v: "CPA > 15万円", a: "【撤退検討】ビジネスモデル自体の再定義を協議", c: "bg-rose-50 text-rose-700 border-rose-100" }
                   ].map((it, i) => (
                     <div key={i} className={`p-6 rounded-2xl border flex items-center justify-between gap-6 shadow-sm transition-transform hover:scale-[1.02] ${it.c}`}>
                        <div className="shrink-0 font-serif font-bold italic text-xl">{it.v}</div>
                        <div className="flex-grow font-bold text-[11px] text-right uppercase tracking-wider">→ {it.a}</div>
                     </div>
                   ))}
                </div>
             </div>
             <div className="bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl relative">
                <div className="absolute top-0 right-0 p-10 opacity-10"><ShieldCheck className="w-40 h-40" /></div>
                <h5 className="font-bold text-rose-500 mb-10 border-b border-white/10 pb-4 text-[11px] uppercase tracking-widest">Decision Meeting Rule</h5>
                <ul className="space-y-10">
                   <li className="flex gap-6 items-start">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center font-bold text-white shadow-lg">1</div>
                      <div>
                         <h6 className="font-bold text-base mb-2">会議1週間前のレポート共有</h6>
                         <p className="text-xs text-slate-400 font-medium leading-relaxed">事前に詳細な判断レポート（KPI達成率、改善提案）を共有し、検討の時間を確保します。</p>
                      </div>
                   </li>
                   <li className="flex gap-6 items-start">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center font-bold text-white shadow-lg">2</div>
                      <div>
                         <h6 className="font-bold text-base mb-2">LTV・ROIの逆算管理</h6>
                         <p className="text-xs text-slate-400 font-medium leading-relaxed">リード単価だけでなく、成約率と継続期間（LTV）を考慮した本質的な投資対効果を検証します。</p>
                      </div>
                   </li>
                </ul>
             </div>
          </div>
        </ProposalSection>

        {/* --- 7. Strength & Achievements --- */}
        <ProposalSection id="section-7" title="7. 弊社の強みと実績">
          <SubTitle icon={<Trophy className="w-6 h-6"/>}>7-1. 代表実績</SubTitle>
          <div className="space-y-12 mb-20">
            {[
              {
                title: "事例①：インバウンドレンタカー事業",
                rows: [
                  { k: "項目", v: "内容" },
                  { k: "課題", v: "集客チャネル別の売上が見えない、CPA最適に偏り売上最大化できていない" },
                  { k: "対策", v: "GA4×BigQuery環境構築、ROAS最適化への転換、季節・エリア別の予算配分最適化" },
                  { k: "成果", v: "パフォーマンス3倍向上（CPA維持で予算消化2-3倍＝売上2-3倍）" },
                ]
              },
              {
                title: "事例②：旅行関連メディア（月間250万UU）",
                rows: [
                  { k: "項目", v: "内容" },
                  { k: "課題", v: "短期売上向上と中長期成長基盤構築の両立" },
                  { k: "対策", v: "広告戦略刷新、データ分析基盤構築、SEO戦略再構築" },
                  { k: "成果", v: "参入後3ヶ月で前年同月比売上200%達成、ROAS 500%を2年間維持" },
                ]
              },
              {
                title: "事例③：IT起業支援",
                rows: [
                  { k: "項目", v: "内容" },
                  { k: "課題", v: "Web広告運用経験なし、インサイドセールス体制が未確立" },
                  { k: "対策", v: "kintone環境構築、MAツール導入、広告運用改善" },
                  { k: "成果", v: "CPA ¥3,000（業界平均の半額）、月間200〜300件の安定リード獲得、3年以上継続" },
                ]
              }
            ].map((caseStudy, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-slate-900 px-8 py-4 flex justify-between items-center">
                  <h5 className="text-white font-bold text-lg">{caseStudy.title}</h5>
                  <ArrowUpRight className="text-rose-500 w-5 h-5" />
                </div>
                <table className="w-full text-left">
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {caseStudy.rows.map((row, ri) => (
                      <tr key={ri} className={ri === 0 ? 'bg-slate-50' : ''}>
                        <td className={`p-5 w-1/4 border-r border-slate-100 text-xs uppercase tracking-widest ${ri === 0 ? 'font-bold text-slate-500' : 'font-bold text-rose-600 italic'}`}>{row.k}</td>
                        <td className={`p-5 text-sm ${ri === 0 ? 'font-bold text-slate-500 uppercase tracking-widest' : 'text-slate-700'}`}>{row.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <SubTitle icon={<Users2 className="w-6 h-6"/>}>7-2. 弊社の強み（一般的な代理店との違い）</SubTitle>
          <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl mb-20">
            <table className="w-full text-left">
              <thead className="bg-slate-900 text-white font-bold uppercase tracking-widest text-[10px]">
                <tr>
                  <th className="p-6 w-1/4 border-r border-slate-800">比較観点</th>
                  <th className="p-6 border-r border-slate-800">一般的な代理店</th>
                  <th className="p-6 bg-rose-600">弊社</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-bold text-sm">
                <tr>
                  <td className="p-6 bg-slate-50 border-r border-slate-100 text-slate-500 uppercase text-[10px] tracking-widest">人材配置</td>
                  <td className="p-6 text-slate-400 font-normal">経験の浅いジュニアスタッフが複数案件を掛け持ち</td>
                  <td className="p-6 text-slate-900 italic font-serif">経験豊富な専門家が直接担当（金融・IT・マーケ経験の融合）</td>
                </tr>
                <tr>
                  <td className="p-6 bg-slate-50 border-r border-slate-100 text-slate-500 uppercase text-[10px] tracking-widest">アプローチ</td>
                  <td className="p-6 text-slate-400 font-normal">オープンソースの一般知識による教科書的対応</td>
                  <td className="p-6 text-slate-900 italic font-serif">クライアント固有の事業課題に合わせたカスタマイズ提案</td>
                </tr>
                <tr>
                  <td className="p-6 bg-slate-50 border-r border-slate-100 text-slate-500 uppercase text-[10px] tracking-widest">関与度</td>
                  <td className="p-6 text-slate-400 font-normal">月次レポートと定例会議のみ</td>
                  <td className="p-6 text-slate-900 italic font-serif">週次〜隔週での定例参加、社内関係者とのダイレクトコミュニケーション</td>
                </tr>
                <tr>
                  <td className="p-6 bg-slate-50 border-r border-slate-100 text-slate-500 uppercase text-[10px] tracking-widest">成果指標</td>
                  <td className="p-6 text-slate-400 font-normal">CPA、ROAS等の媒体指標中心</td>
                  <td className="p-6 text-rose-600 italic font-serif">事業KPIに直結した売上・利益への貢献度で評価</td>
                </tr>
                <tr>
                  <td className="p-6 bg-slate-50 border-r border-slate-100 text-slate-500 uppercase text-[10px] tracking-widest">将来展望</td>
                  <td className="p-6 text-slate-400 font-normal">継続的な外部委託前提</td>
                  <td className="p-6 text-slate-900 italic font-serif">段階的内製化支援により持続可能な成長体制構築</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ProposalSection>

        {/* --- 8. Pricing --- */}
        <ProposalSection id="section-8" title="8. 料金プラン">
          <SubTitle icon={<Layers className="w-6 h-6"/>}>8-1. プラン比較</SubTitle>
          <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl mb-16 overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
              <thead className="bg-slate-900 text-white font-bold uppercase tracking-widest text-[10px]">
                <tr>
                  <th className="p-5 border-r border-slate-800">項目</th>
                  <th className="p-5 border-r border-slate-800">月額30万円プラン</th>
                  <th className="p-5 border-r border-slate-800 bg-rose-600">月額50万円プラン【推奨】</th>
                  <th className="p-5">月額70万円プラン</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[13px] font-medium">
                <tr>
                  <td className="p-5 bg-slate-50 border-r border-slate-200 font-bold">定例MTG</td>
                  <td className="p-5 border-r border-slate-100">月2回</td>
                  <td className="p-5 border-r border-rose-100 font-bold">月2回 + スポット対応</td>
                  <td className="p-5">週1回</td>
                </tr>
                <tr>
                  <td className="p-5 bg-slate-50 border-r border-slate-200 font-bold">市場調査・分析</td>
                  <td className="p-5 border-r border-slate-100 text-center"><Circle className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                  <td className="p-5 border-r border-rose-100 text-center"><Circle className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                  <td className="p-5 text-center"><Circle className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-5 bg-slate-50 border-r border-slate-200 font-bold">戦略立案・ロードマップ</td>
                  <td className="p-5 border-r border-slate-100 text-center"><Circle className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                  <td className="p-5 border-r border-rose-100 text-center"><Circle className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                  <td className="p-5 text-center"><Circle className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-5 bg-slate-50 border-r border-slate-200 font-bold">ペルソナ・ジャーニー設計</td>
                  <td className="p-5 border-r border-slate-100 text-center"><Circle className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                  <td className="p-5 border-r border-rose-100 text-center"><Circle className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                  <td className="p-5 text-center"><Circle className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-5 bg-slate-50 border-r border-slate-200 font-bold">LP構成・クリエイティブ方向性</td>
                  <td className="p-5 border-r border-slate-100 text-center">△（案のみ）</td>
                  <td className="p-5 border-r border-rose-100 text-center font-bold">○（詳細設計）</td>
                  <td className="p-5 text-center">◎（制作ディレクション含む）</td>
                </tr>
                <tr>
                  <td className="p-5 bg-slate-50 border-r border-slate-200 font-bold">情報管理基盤構築</td>
                  <td className="p-5 border-r border-slate-100 text-center">△（設計のみ）</td>
                  <td className="p-5 border-r border-rose-100 text-center font-bold">○（設計〜構築）</td>
                  <td className="p-5 text-center">◎（構築〜運用）</td>
                </tr>
                <tr>
                  <td className="p-5 bg-slate-50 border-r border-slate-200 font-bold">リード管理自動化</td>
                  <td className="p-5 border-r border-slate-100 text-center"><X className="w-4 h-4 text-slate-300 mx-auto" /></td>
                  <td className="p-5 border-r border-rose-100 text-center">△（基本設定）</td>
                  <td className="p-5 text-center">○（カスタマイズ）</td>
                </tr>
                <tr>
                  <td className="p-5 bg-slate-50 border-r border-slate-200 font-bold">レポーティング</td>
                  <td className="p-5 border-r border-slate-100">月次</td>
                  <td className="p-5 border-r border-rose-100 font-bold">月次 + 週次速報</td>
                  <td className="p-5">週次</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-5 border-r border-slate-200 font-bold">推奨シーン</td>
                  <td className="p-5 border-r border-slate-100 text-slate-500">戦略立案のみ</td>
                  <td className="p-5 border-r border-rose-100 text-rose-600 font-bold italic">戦略＋基盤構築を並行</td>
                  <td className="p-5 text-slate-500">フルサポート</td>
                </tr>
              </tbody>
            </table>
          </div>

          <SubTitle icon={<Megaphone className="w-6 h-6"/>}>8-2. 広告運用料金</SubTitle>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="bg-slate-900 p-5 text-white font-bold text-center text-xs uppercase tracking-widest">伴走支援とセット契約</div>
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-baseline border-b border-slate-100 pb-4">
                  <span className="text-sm text-slate-500 font-bold">運用手数料</span>
                  <span className="text-2xl font-serif font-bold text-rose-600 italic">広告費の 15%</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-slate-100 pb-4">
                  <span className="text-sm text-slate-500 font-bold">最低月額料金</span>
                  <span className="text-xl font-bold text-slate-800">20万円</span>
                </div>
                <div className="pt-2">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-3">含まれる内容</div>
                  <ul className="space-y-2">
                    {["運用代行", "レポーティング", "戦略・CRM連携"].map((it, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden">
              <div className="bg-slate-800 p-5 text-white font-bold text-center text-xs uppercase tracking-widest">広告運用単体</div>
              <div className="p-8 space-y-6 opacity-80">
                <div className="flex justify-between items-baseline border-b border-slate-200 pb-4">
                  <span className="text-sm text-slate-500 font-bold">運用手数料</span>
                  <span className="text-2xl font-serif font-bold text-slate-800 italic">広告費の 20%</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-slate-200 pb-4">
                  <span className="text-sm text-slate-500 font-bold">最低月額料金</span>
                  <span className="text-xl font-bold text-slate-800">20万円</span>
                </div>
                <div className="pt-2">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-3">含まれる内容</div>
                  <ul className="space-y-2">
                    {["運用代行", "レポーティング"].map((it, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-slate-300" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <SubTitle icon={<TrendingUp className="w-6 h-6"/>}>8-3. 年間費用シミュレーション【推奨プラン】</SubTitle>
          <div className="bg-slate-900 rounded-[3rem] p-1 shadow-2xl">
            <div className="bg-slate-900 rounded-[2.8rem] overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-800 text-rose-500 font-bold uppercase tracking-widest text-[10px]">
                  <tr>
                    <th className="p-6 border-r border-slate-700">期間</th>
                    <th className="p-6 border-r border-slate-700">伴走支援</th>
                    <th className="p-6 border-r border-slate-700">広告運用</th>
                    <th className="p-6 border-r border-slate-700">広告費</th>
                    <th className="p-6 bg-slate-950">月額合計</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300 font-bold">
                  <tr>
                    <td className="p-6 bg-slate-800/50 border-r border-slate-800">Phase 1 (1-3ヶ月目)</td>
                    <td className="p-6 border-r border-slate-800">¥500,000</td>
                    <td className="p-6 border-r border-slate-800 text-slate-600">—</td>
                    <td className="p-6 border-r border-slate-800 text-slate-600">—</td>
                    <td className="p-6 bg-slate-950 font-serif italic text-lg text-white">¥500,000</td>
                  </tr>
                  <tr>
                    <td className="p-6 bg-slate-800/50 border-r border-slate-800">Phase 2 (4-6ヶ月目)</td>
                    <td className="p-6 border-r border-slate-800">¥500,000</td>
                    <td className="p-6 border-r border-slate-800">¥200,000</td>
                    <td className="p-6 border-r border-slate-800 text-slate-400 italic">¥600,000</td>
                    <td className="p-6 bg-slate-950 font-serif italic text-lg text-white">¥1,300,000</td>
                  </tr>
                  <tr>
                    <td className="p-6 bg-slate-800/50 border-r border-slate-800">Phase 3 (7-12ヶ月目)</td>
                    <td className="p-6 border-r border-slate-800">¥500,000</td>
                    <td className="p-6 border-r border-slate-800">¥200,000</td>
                    <td className="p-6 border-r border-slate-800 text-rose-400 italic">¥1,000,000</td>
                    <td className="p-6 bg-slate-950 font-serif italic text-lg text-rose-500">¥1,700,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-6 text-[11px] text-slate-400 leading-relaxed font-medium bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-inner">
             ※ 上記はシミュレーションであり、実際の広告費や運用形態はPhase 1の戦略策定結果およびHAOMIL様の意思決定に基づき柔軟に調整可能です。Phase 1のみでの契約終了も可能です。
          </p>
        </ProposalSection>

        {/* --- 9. Next Steps --- */}
        <ProposalSection id="section-9" title="9. 次のステップ">
          <div className="bg-rose-600 p-12 md:p-20 rounded-[4rem] text-white shadow-2xl relative overflow-hidden mb-20">
             <div className="absolute top-0 right-0 p-12 opacity-10"><Calendar className="w-56 h-56" /></div>
             <h4 className="text-3xl font-serif font-bold mb-16 italic">Action Timeline</h4>
             <div className="space-y-10 relative z-10">
                {[
                  { d: "1月第2週", t: "本提案書の確認・ご質問への回答" },
                  { d: "1月第2-3週", t: "社内ご検討・追加ヒアリング（必要に応じて）" },
                  { d: "1月末", t: "契約締結" },
                  { d: "2月〜", t: "キックオフ、Phase 1（戦略確定期）開始" }
                ].map((it, i) => (
                  <div key={i} className="flex gap-12 items-center">
                     <div className="w-24 text-[10px] font-bold uppercase tracking-widest text-rose-200 shrink-0">{it.d}</div>
                     <div className="h-[1px] flex-grow bg-white/20"></div>
                     <div className="text-lg md:text-xl font-bold tracking-tight">{it.t}</div>
                  </div>
                ))}
             </div>
          </div>
          <div className="text-center max-w-2xl mx-auto py-12">
             <p className="text-slate-500 text-sm leading-relaxed mb-12 font-medium">
               ハオミル株式会社様の更なる事業成長に向け、<br/>
               単なる「代行業者」ではなく「共に事業を育てるパートナー」として全力で支援させていただきます。
             </p>
             <div className="inline-flex flex-col items-center">
                <div className="font-serif font-bold text-3xl text-slate-900 mb-1 tracking-tighter">マーケティング伴走支援チーム</div>
                <div className="h-[1px] w-full bg-slate-900 mb-1 opacity-20"></div>
                <div className="text-[10px] text-slate-400 uppercase tracking-[0.5em] font-bold">Strategic Partnership for HAOMIL</div>
             </div>
          </div>
        </ProposalSection>

        {/* --- 10. Appendix --- */}
        <ProposalSection id="section-10" title="10. 【別紙】確認事項・質問リスト">
          <div className="bg-slate-50 rounded-[3.5rem] border border-slate-100 p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h5 className="font-bold text-slate-900 mb-10 flex items-center gap-3 border-b border-slate-200 pb-4">
                   <Activity className="w-5 h-5 text-rose-500" />
                   事業・数値関連の確認
                </h5>
                <ul className="space-y-6 text-sm font-bold text-slate-700">
                  <li className="flex gap-4"><HelpCircle className="w-5 h-5 text-rose-500 shrink-0"/> MOCの正確な現在店舗数と内訳</li>
                  <li className="flex gap-4"><HelpCircle className="w-5 h-5 text-rose-500 shrink-0"/> 過去の獲得チャネル別実績（紹介等）</li>
                  <li className="flex gap-4"><HelpCircle className="w-5 h-5 text-rose-500 shrink-0"/> 代理店の平均継続期間・離脱理由</li>
                  <li className="flex gap-4"><HelpCircle className="w-5 h-5 text-rose-500 shrink-0"/> GA4閲覧権限付与の可否</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-slate-900 mb-10 flex items-center gap-3 border-b border-slate-200 pb-4">
                  <Target className="w-5 h-5 text-rose-500" />
                  ブランド・戦略関連の確認
                </h5>
                <ul className="space-y-6 text-sm font-bold text-slate-700">
                  <li className="flex gap-4"><HelpCircle className="w-5 h-5 text-rose-500 shrink-0"/> HAOMIL創業者の事業への原体験</li>
                  <li className="flex gap-4"><HelpCircle className="w-5 h-5 text-rose-500 shrink-0"/> 「医療提携」の具体的な座組みの詳細</li>
                  <li className="flex gap-4"><HelpCircle className="w-5 h-5 text-rose-500 shrink-0"/> 加盟店向けガイドラインの有無</li>
                  <li className="flex gap-4"><HelpCircle className="w-5 h-5 text-rose-500 shrink-0"/> 避けたいブランドイメージの具体例</li>
                </ul>
              </div>
            </div>
            <div className="mt-16 text-center border-t border-slate-200 pt-8">
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest italic flex items-center justify-center gap-2">
                 <AlertCircle className="w-4 h-4" /> ご回答いただくことで、Phase 1 の戦略精度が飛躍的に向上します。
              </p>
            </div>
          </div>
        </ProposalSection>

      </div>

      {/* --- Floating Navigation --- */}
      <div className="hidden xl:block fixed top-1/2 left-8 -translate-y-1/2 w-48 space-y-1 text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] no-print z-50">
        <div className="mb-4 border-b border-slate-100 pb-2 text-slate-300">Section Outline</div>
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
