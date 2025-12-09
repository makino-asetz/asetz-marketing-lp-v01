import React, { useState } from 'react';
import { Section, SectionTitle } from './ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PieChart, Globe, ShieldAlert, TrendingUp, 
  Grid, Award, Link as LinkIcon, BarChart2, CheckSquare, HelpCircle,
  Users, UserCircle, Map, DollarSign, Clock, Heart,
  Target, Package, Briefcase, MoveUpRight,
  Filter, Megaphone, Smartphone, Repeat, Share2,
  GitFork, ChevronDown, ChevronUp
} from 'lucide-react';

type Framework = {
  id: string;
  name: string;
  purpose: string;
  advice: string;
  icon: React.ReactNode;
};

type Category = {
  id: string;
  title: string;
  count: number;
  items: Framework[];
};

const frameworksData: Category[] = [
  {
    id: 'market',
    title: '市場環境を把握する',
    count: 4,
    items: [
      { id: '3c', name: '3C分析', purpose: '顧客・競合・自社の3視点で市場構造を俯瞰', advice: '事実とデータに基づいて整理した上で、「そこからどんな示唆が得られるか」まで考え抜く。単なる情報整理で終わらせない。', icon: <PieChart className="w-5 h-5"/> },
      { id: 'pest', name: 'PEST分析', purpose: '政治・経済・社会・技術の外部環境を把握', advice: '自社がどんな制約条件の中で戦うのかを明確にする。制約を把握せずに優位性は築けない。', icon: <Globe className="w-5 h-5"/> },
      { id: '5f', name: 'ファイブフォース分析', purpose: '業界の競争構造と収益性を評価', advice: '特に「代替品の脅威」に注意。AI・新技術による業界破壊は突然やってくる。', icon: <ShieldAlert className="w-5 h-5"/> },
      { id: 'trend', name: '行動トレンド分析', purpose: '消費者の購買行動・情報収集の変化を捉える', advice: '仮説を立てるだけでなく、必ず検証する。「こうかもしれない」を「こうだった」に変えるプロセスが重要。', icon: <TrendingUp className="w-5 h-5"/> },
    ]
  },
  {
    id: 'strength',
    title: '自社の強みを見極める',
    count: 6,
    items: [
      { id: 'swot', name: 'SWOT分析', purpose: '強み・弱み・機会・脅威を整理', advice: 'クロスSWOTに展開する。「強み×機会」で攻め、「弱み×脅威」は撤退ラインとして認識する。', icon: <Grid className="w-5 h-5"/> },
      { id: 'vrio', name: 'VRIO分析', purpose: '経営資源が持続的な競争優位になるか評価', advice: '中小企業の差別化は「模倣困難性」がカギ。価値や希少性だけでは大手に勝てない。', icon: <Award className="w-5 h-5"/> },
      { id: 'valuechain', name: 'バリューチェーン分析', purpose: '価値創出プロセスを分解し、強みと改善点を特定', advice: '各プロセスのコストと付加価値を算出。同じコストでより高い価値を提供できないか検討する。', icon: <LinkIcon className="w-5 h-5"/> },
      { id: 'ppm', name: 'PPM分析', purpose: '事業・製品を成長率×シェアで分類し投資配分を決定', advice: '市場シェアが不明な場合は「自社内での売上構成比」で代用し、リソース配分の判断材料にする。', icon: <BarChart2 className="w-5 h-5"/> },
      { id: 'mece', name: 'MECE', purpose: '漏れなく・ダブりなく情報を整理', advice: '特に「漏れ」に注意。ダブりは気づきやすいが、漏れは問題自体が認識外になってしまう。', icon: <CheckSquare className="w-5 h-5"/> },
      { id: 'why', name: 'なぜなぜ分析', purpose: '表面的な原因ではなく根本原因を特定', advice: '途中で主観や思い込みが入ると精度が落ちる。事実ベースで掘り続けることが重要。', icon: <HelpCircle className="w-5 h-5"/> },
    ]
  },
  {
    id: 'customer',
    title: '顧客を深く理解する',
    count: 7,
    items: [
      { id: '4c', name: '4C分析', purpose: '顧客視点で価値・コスト・利便性・関係性を評価', advice: '「顧客価値」の言語化が最も難しい。顧客にとって具体的に何がどう良くなるのかを明確にする。', icon: <Users className="w-5 h-5"/> },
      { id: 'persona', name: 'ペルソナ設計', purpose: '理想的な顧客像を具体的に定義', advice: '属性（年齢・年収）より感情（ポジティブ/ネガティブな気持ち）を重視。思い込みでなく実際の顧客データから作る。', icon: <UserCircle className="w-5 h-5"/> },
      { id: 'journey', name: 'カスタマージャーニー', purpose: '認知から購入・ファン化までの顧客体験を可視化', advice: '各フェーズで顧客が抱えるポジティブ/ネガティブな感情を言語化。行動の裏にある心理を捉える。', icon: <Map className="w-5 h-5"/> },
      { id: 'decile', name: 'デシル分析', purpose: '購入金額順に顧客を10グループ化し収益構造を把握', advice: '上位顧客が売上の大半を支えていることが多い。新規獲得コストは既存顧客維持の5倍かかることを意識する。', icon: <DollarSign className="w-5 h-5"/> },
      { id: 'ltv', name: 'LTV分析', purpose: '顧客生涯価値を算出し長期的な投資判断に活用', advice: '中小企業のマーケティングで最重要。LTVが低い事業設計では、いくら集客しても利益が出ない。', icon: <Clock className="w-5 h-5"/> },
      { id: 'cohort', name: 'コホート分析', purpose: '同時期に獲得した顧客グループごとの行動を追跡', advice: 'サブスク型ビジネスでは生命線。どのタイミングで解約されているかを特定し対策を打つ。', icon: <Users className="w-5 h-5"/> },
      { id: 'ctb', name: 'CTB分析', purpose: 'カテゴリ・嗜好・ブランドの3軸で顧客を分類', advice: '定性・定量両方の情報を集める。担当者の「〇〇だと思う」ではなく、実データや顧客の声で判断する。', icon: <Heart className="w-5 h-5"/> },
    ]
  },
  {
    id: 'strategy',
    title: '戦略とポジションを設計する',
    count: 4,
    items: [
      { id: 'stp', name: 'STP分析', purpose: '市場細分化→ターゲット選定→ポジショニング', advice: '「あれもこれも」は誰にも刺さらない。「この領域なら負けない」と言い切れる一点を作る。', icon: <Target className="w-5 h-5"/> },
      { id: '4p', name: '4P分析', purpose: '製品・価格・流通・販促の4要素で戦略設計', advice: 'プロモーションばかり考えがち。製品設計・価格設定の磨き込みを怠らないこと。', icon: <Package className="w-5 h-5"/> },
      { id: '7p', name: '7P分析', purpose: '4Pに人材・プロセス・物的証拠を追加（サービス業向け）', advice: 'サービス業では「誰が」「どのように」提供するかも商品価値の一部となる。', icon: <Briefcase className="w-5 h-5"/> },
      { id: 'ansoff', name: 'アンゾフの成長マトリクス', purpose: '製品×市場の4象限で成長戦略を策定', advice: '既存市場×既存製品の深掘りが最も低リスク。飛び地に行く前に足元を固める。', icon: <MoveUpRight className="w-5 h-5"/> },
    ]
  },
  {
    id: 'purchase',
    title: '購買行動を理解する',
    count: 5,
    items: [
      { id: 'funnel', name: 'マーケティングファネル', purpose: '各段階での離脱を可視化', advice: '「すぐ買う人」だけを追うと枯渇する。意図的に「すぐ買う人の数」を増やす仕組みを作る。', icon: <Filter className="w-5 h-5"/> },
      { id: 'aidma', name: 'AIDMA', purpose: '注意→興味→欲求→記憶→行動の購買心理モデル', advice: 'マス広告時代のモデルだが基本として重要。現在はデジタル行動に対応したモデルとの併用が必要。', icon: <Megaphone className="w-5 h-5"/> },
      { id: 'aisas', name: 'AISAS', purpose: '注意→興味→検索→行動→共有（デジタル時代版）', advice: '「検索」部分が生成AIにより変化中。従来のSEOだけでは不十分になりつつあることを認識する。', icon: <Smartphone className="w-5 h-5"/> },
      { id: 'aisare', name: 'AISARE', purpose: 'AISASにリピート・推奨を追加しファン化を重視', advice: '口コミを能動的に生み出す仕掛けを設計するなら有効。推奨者を増やすことが最強のマーケティング。', icon: <Repeat className="w-5 h-5"/> },
      { id: 'ulssas', name: 'ULSSAS', purpose: 'SNS時代の認知→共感→拡散モデル', advice: 'まず「共感」を獲得しないと次に進めない。広告的な押し付けではなく、ユーザー目線のコンテンツが必須。', icon: <Share2 className="w-5 h-5"/> },
    ]
  },
  {
    id: 'structuring',
    title: '課題を構造化する',
    count: 1,
    items: [
      { id: 'tree', name: 'ロジックツリー', purpose: '課題を原因別・手段別に分解し解決策を導出', advice: 'AIで作成しても「そのまま受け入れる」のはNG。自分でも組み立てられるようにし、AIの出力を検証する。', icon: <GitFork className="w-5 h-5"/> },
    ]
  }
];

const FrameworkDiagram: React.FC<{ id: string }> = ({ id }) => {
  const SvgWrapper: React.FC<{ children: React.ReactNode, viewBox?: string }> = ({ children, viewBox = "0 0 100 80" }) => (
    <svg viewBox={viewBox} className="w-full h-full drop-shadow-lg">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {children}
    </svg>
  );

  const colors = {
    slate: "#475569", // slate-600
    rose: "#e11d48", // brand-rose
    roseLight: "#fda4af", // rose-300
    white: "#e2e8f0", // slate-200
  };

  switch (id) {
    // Market
    case '3c':
      return (
        <SvgWrapper>
          <circle cx="35" cy="30" r="20" fill="none" stroke={colors.slate} strokeWidth="1.5" />
          <circle cx="65" cy="30" r="20" fill="none" stroke={colors.slate} strokeWidth="1.5" />
          <circle cx="50" cy="55" r="20" fill="none" stroke={colors.slate} strokeWidth="1.5" />
          <path d="M 50 35 L 50 35" stroke={colors.rose} strokeWidth="4" strokeLinecap="round" filter="url(#glow)"/>
          <text x="50" y="80" textAnchor="middle" fontSize="6" fill={colors.white} className="font-sans">Strategic Triangle</text>
        </SvgWrapper>
      );
    case 'pest':
      return (
        <SvgWrapper>
          <line x1="50" y1="10" x2="50" y2="70" stroke={colors.slate} strokeWidth="1" />
          <line x1="20" y1="40" x2="80" y2="40" stroke={colors.slate} strokeWidth="1" />
          <circle cx="50" cy="40" r="5" fill={colors.rose} filter="url(#glow)" />
          <text x="25" y="25" textAnchor="middle" fontSize="8" fill={colors.slate}>P</text>
          <text x="75" y="25" textAnchor="middle" fontSize="8" fill={colors.slate}>E</text>
          <text x="25" y="60" textAnchor="middle" fontSize="8" fill={colors.slate}>S</text>
          <text x="75" y="60" textAnchor="middle" fontSize="8" fill={colors.slate}>T</text>
        </SvgWrapper>
      );
    case '5f':
      return (
        <SvgWrapper>
          <rect x="35" y="30" width="30" height="20" rx="2" fill="none" stroke={colors.rose} strokeWidth="1.5" />
          <path d="M 50 10 L 50 25 M 50 70 L 50 55 M 10 40 L 30 40 M 90 40 L 70 40" stroke={colors.slate} strokeWidth="1.5" markerEnd="url(#arrow)" />
          <text x="50" y="43" textAnchor="middle" fontSize="6" fill={colors.white}>Rivalry</text>
        </SvgWrapper>
      );
    case 'trend':
      return (
        <SvgWrapper>
          <path d="M 10 70 L 30 50 L 50 60 L 90 20" fill="none" stroke={colors.rose} strokeWidth="2" filter="url(#glow)" />
          <line x1="10" y1="70" x2="90" y2="70" stroke={colors.slate} strokeWidth="1" />
          <line x1="10" y1="70" x2="10" y2="10" stroke={colors.slate} strokeWidth="1" />
        </SvgWrapper>
      );
    
    // Strength
    case 'swot':
      return (
        <SvgWrapper>
          <rect x="20" y="10" width="28" height="28" fill="none" stroke={colors.rose} strokeWidth="1.5" />
          <rect x="52" y="10" width="28" height="28" fill="none" stroke={colors.slate} strokeWidth="1.5" />
          <rect x="20" y="42" width="28" height="28" fill="none" stroke={colors.slate} strokeWidth="1.5" />
          <rect x="52" y="42" width="28" height="28" fill="none" stroke={colors.slate} strokeWidth="1.5" />
          <text x="34" y="28" textAnchor="middle" fontSize="8" fill={colors.rose} fontWeight="bold">S</text>
        </SvgWrapper>
      );
    case 'vrio':
      return (
        <SvgWrapper>
          <path d="M 50 10 L 90 70 L 10 70 Z" fill="none" stroke={colors.slate} strokeWidth="1.5" />
          <line x1="42" y1="22" x2="58" y2="22" stroke={colors.rose} strokeWidth="2" filter="url(#glow)" />
          <line x1="35" y1="38" x2="65" y2="38" stroke={colors.slate} strokeWidth="1" />
          <line x1="28" y1="54" x2="72" y2="54" stroke={colors.slate} strokeWidth="1" />
          <text x="50" y="18" textAnchor="middle" fontSize="6" fill={colors.white}>Resource</text>
        </SvgWrapper>
      );
    case 'valuechain':
      return (
        <SvgWrapper>
          <path d="M 10 30 L 30 30 L 35 40 L 30 50 L 10 50 L 15 40 Z" fill="none" stroke={colors.slate} strokeWidth="1" />
          <path d="M 35 30 L 55 30 L 60 40 L 55 50 L 35 50 L 40 40 Z" fill="none" stroke={colors.slate} strokeWidth="1" />
          <path d="M 60 30 L 80 30 L 85 40 L 80 50 L 60 50 L 65 40 Z" fill="none" stroke={colors.rose} strokeWidth="1.5" filter="url(#glow)" />
        </SvgWrapper>
      );
    case 'ppm':
      return (
        <SvgWrapper>
          <line x1="50" y1="10" x2="50" y2="70" stroke={colors.slate} strokeWidth="1" />
          <line x1="20" y1="40" x2="80" y2="40" stroke={colors.slate} strokeWidth="1" />
          <circle cx="35" cy="25" r="5" fill={colors.rose} filter="url(#glow)" />
          <text x="65" y="28" textAnchor="middle" fontSize="10" fill={colors.slate}>?</text>
          <text x="35" y="60" textAnchor="middle" fontSize="10" fill={colors.slate}>$</text>
        </SvgWrapper>
      );
    case 'mece':
      return (
        <SvgWrapper>
          <rect x="40" y="10" width="20" height="10" rx="2" fill="none" stroke={colors.white} strokeWidth="1" />
          <line x1="50" y1="20" x2="50" y2="30" stroke={colors.slate} strokeWidth="1" />
          <line x1="30" y1="30" x2="70" y2="30" stroke={colors.slate} strokeWidth="1" />
          <line x1="30" y1="30" x2="30" y2="40" stroke={colors.slate} strokeWidth="1" />
          <line x1="70" y1="30" x2="70" y2="40" stroke={colors.slate} strokeWidth="1" />
          <rect x="20" y="40" width="20" height="10" rx="2" fill="none" stroke={colors.rose} strokeWidth="1" />
          <rect x="60" y="40" width="20" height="10" rx="2" fill="none" stroke={colors.rose} strokeWidth="1" />
        </SvgWrapper>
      );
    case 'why':
      return (
        <SvgWrapper>
          <circle cx="50" cy="15" r="5" fill="none" stroke={colors.slate} strokeWidth="1" />
          <line x1="50" y1="20" x2="50" y2="30" stroke={colors.slate} strokeWidth="1" />
          <circle cx="50" cy="35" r="5" fill="none" stroke={colors.slate} strokeWidth="1" />
          <line x1="50" y1="40" x2="50" y2="50" stroke={colors.slate} strokeWidth="1" />
          <circle cx="50" cy="55" r="5" fill="none" stroke={colors.rose} strokeWidth="1.5" />
          <text x="70" y="58" fontSize="8" fill={colors.rose}>Root</text>
        </SvgWrapper>
      );

    // Customer
    case '4c':
      return (
        <SvgWrapper>
          <circle cx="50" cy="40" r="25" fill="none" stroke={colors.slate} strokeWidth="1" strokeDasharray="4 2" />
          <circle cx="50" cy="15" r="6" fill={colors.rose} />
          <circle cx="75" cy="40" r="6" fill={colors.slate} />
          <circle cx="50" cy="65" r="6" fill={colors.slate} />
          <circle cx="25" cy="40" r="6" fill={colors.slate} />
          <text x="50" y="43" textAnchor="middle" fontSize="6" fill={colors.white}>Customer</text>
        </SvgWrapper>
      );
    case 'persona':
      return (
        <SvgWrapper>
          <circle cx="50" cy="30" r="10" fill="none" stroke={colors.rose} strokeWidth="1.5" />
          <path d="M 30 60 Q 50 70 70 60 L 70 70 L 30 70 Z" fill="none" stroke={colors.rose} strokeWidth="1.5" />
          <text x="85" y="30" fontSize="6" fill={colors.slate}>Age</text>
          <text x="85" y="40" fontSize="6" fill={colors.slate}>Job</text>
          <text x="15" y="30" fontSize="6" fill={colors.rose} textAnchor="end">Pain</text>
        </SvgWrapper>
      );
    case 'journey':
      return (
        <SvgWrapper>
          <path d="M 10 40 C 30 20, 50 60, 90 30" fill="none" stroke={colors.rose} strokeWidth="2" filter="url(#glow)" />
          <circle cx="10" cy="40" r="2" fill={colors.white} />
          <circle cx="50" cy="50" r="2" fill={colors.white} />
          <circle cx="90" cy="30" r="2" fill={colors.white} />
          <line x1="10" y1="70" x2="90" y2="70" stroke={colors.slate} strokeWidth="1" />
        </SvgWrapper>
      );
    case 'decile':
      return (
        <SvgWrapper>
          <rect x="10" y="20" width="8" height="50" fill={colors.rose} />
          <rect x="20" y="30" width="8" height="40" fill={colors.slate} opacity="0.8" />
          <rect x="30" y="40" width="8" height="30" fill={colors.slate} opacity="0.6" />
          <rect x="40" y="50" width="8" height="20" fill={colors.slate} opacity="0.4" />
          <rect x="50" y="60" width="8" height="10" fill={colors.slate} opacity="0.2" />
        </SvgWrapper>
      );
    case 'ltv':
      return (
        <SvgWrapper>
          <path d="M 10 60 L 90 20" fill="none" stroke={colors.rose} strokeWidth="2" strokeDasharray="4 2" />
          <path d="M 10 60 L 30 55 L 50 45 L 70 35 L 90 20" fill="none" stroke={colors.rose} strokeWidth="1" />
          <circle cx="10" cy="60" r="2" fill={colors.white} />
          <circle cx="90" cy="20" r="2" fill={colors.white} />
          <text x="50" y="75" textAnchor="middle" fontSize="6" fill={colors.slate}>Time</text>
        </SvgWrapper>
      );
    case 'cohort':
      return (
        <SvgWrapper>
          <rect x="10" y="10" width="80" height="10" fill={colors.slate} opacity="0.2" />
          <rect x="10" y="25" width="60" height="10" fill={colors.slate} opacity="0.4" />
          <rect x="10" y="40" width="40" height="10" fill={colors.rose} opacity="0.6" />
          <rect x="10" y="55" width="20" height="10" fill={colors.rose} opacity="0.8" />
        </SvgWrapper>
      );
    case 'ctb':
      return (
        <SvgWrapper>
          <circle cx="50" cy="30" r="15" fill="none" stroke={colors.slate} strokeWidth="1" />
          <circle cx="35" cy="55" r="15" fill="none" stroke={colors.slate} strokeWidth="1" />
          <circle cx="65" cy="55" r="15" fill="none" stroke={colors.slate} strokeWidth="1" />
          <path d="M 50 45 L 50 45" stroke={colors.rose} strokeWidth="4" strokeLinecap="round" filter="url(#glow)"/>
        </SvgWrapper>
      );

    // Strategy
    case 'stp':
      return (
        <SvgWrapper>
           <rect x="10" y="20" width="20" height="40" rx="2" fill="none" stroke={colors.slate} strokeWidth="1" />
           <line x1="30" y1="40" x2="40" y2="40" stroke={colors.slate} strokeWidth="1" />
           <rect x="40" y="30" width="20" height="20" rx="2" fill="none" stroke={colors.slate} strokeWidth="1" />
           <line x1="60" y1="40" x2="70" y2="40" stroke={colors.slate} strokeWidth="1" />
           <circle cx="80" cy="40" r="10" fill="none" stroke={colors.rose} strokeWidth="1.5" />
           <circle cx="80" cy="40" r="3" fill={colors.rose} />
        </SvgWrapper>
      );
    case '4p':
      return (
        <SvgWrapper>
          <circle cx="50" cy="40" r="10" fill={colors.rose} opacity="0.2" />
          <text x="50" y="43" textAnchor="middle" fontSize="6" fill={colors.rose} fontWeight="bold">Value</text>
          <line x1="50" y1="10" x2="50" y2="30" stroke={colors.slate} strokeWidth="1" />
          <line x1="50" y1="50" x2="50" y2="70" stroke={colors.slate} strokeWidth="1" />
          <line x1="20" y1="40" x2="40" y2="40" stroke={colors.slate} strokeWidth="1" />
          <line x1="60" y1="40" x2="80" y2="40" stroke={colors.slate} strokeWidth="1" />
          <circle cx="50" cy="10" r="2" fill={colors.white} />
          <circle cx="50" cy="70" r="2" fill={colors.white} />
          <circle cx="20" cy="40" r="2" fill={colors.white} />
          <circle cx="80" cy="40" r="2" fill={colors.white} />
        </SvgWrapper>
      );
    case '7p':
      return (
        <SvgWrapper>
          <circle cx="50" cy="40" r="25" fill="none" stroke={colors.slate} strokeWidth="1" strokeDasharray="2 2" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
             <circle key={i} cx={50 + 25 * Math.cos(i * 2 * Math.PI / 7)} cy={40 + 25 * Math.sin(i * 2 * Math.PI / 7)} r="3" fill={i < 4 ? colors.slate : colors.rose} />
          ))}
          <text x="50" y="42" textAnchor="middle" fontSize="6" fill={colors.white}>Service</text>
        </SvgWrapper>
      );
    case 'ansoff':
      return (
        <SvgWrapper>
           <rect x="20" y="10" width="28" height="28" fill="none" stroke={colors.rose} strokeWidth="1.5" />
           <rect x="52" y="10" width="28" height="28" fill="none" stroke={colors.slate} strokeWidth="1.5" />
           <rect x="20" y="42" width="28" height="28" fill="none" stroke={colors.slate} strokeWidth="1.5" />
           <rect x="52" y="42" width="28" height="28" fill="none" stroke={colors.slate} strokeWidth="1.5" />
           <text x="34" y="60" textAnchor="middle" fontSize="6" fill={colors.slate} opacity="0.5">Risk</text>
        </SvgWrapper>
      );

    // Purchase
    case 'funnel':
      return (
        <SvgWrapper>
          <path d="M 10 10 L 90 10 L 60 70 L 40 70 L 10 10" fill="none" stroke={colors.slate} strokeWidth="1" />
          <line x1="25" y1="30" x2="75" y2="30" stroke={colors.slate} strokeWidth="0.5" />
          <line x1="33" y1="50" x2="67" y2="50" stroke={colors.slate} strokeWidth="0.5" />
          <path d="M 40 70 L 60 70 L 60 75 L 40 75 Z" fill={colors.rose} filter="url(#glow)" />
        </SvgWrapper>
      );
    case 'aidma':
      return (
        <SvgWrapper>
           <rect x="10" y="30" width="12" height="20" stroke={colors.slate} fill="none" />
           <rect x="26" y="30" width="12" height="20" stroke={colors.slate} fill="none" />
           <rect x="42" y="30" width="12" height="20" stroke={colors.slate} fill="none" />
           <rect x="58" y="30" width="12" height="20" stroke={colors.slate} fill="none" />
           <rect x="74" y="30" width="16" height="20" stroke={colors.rose} fill={colors.rose} fillOpacity="0.2" />
           <line x1="10" y1="40" x2="90" y2="40" stroke={colors.slate} strokeWidth="0.5" strokeDasharray="2 2" />
        </SvgWrapper>
      );
    case 'aisas':
      return (
        <SvgWrapper>
           <path d="M 10 40 L 90 40" stroke={colors.slate} strokeWidth="1" />
           <circle cx="50" cy="40" r="5" fill="none" stroke={colors.rose} strokeWidth="1.5" />
           <path d="M 50 35 L 53 32 L 56 35" fill="none" stroke={colors.rose} strokeWidth="1" />
           <text x="50" y="60" textAnchor="middle" fontSize="6" fill={colors.white}>Search</text>
        </SvgWrapper>
      );
    case 'aisare':
      return (
        <SvgWrapper>
           <path d="M 10 40 L 70 40" stroke={colors.slate} strokeWidth="1" />
           <path d="M 70 40 Q 90 20 70 10 Q 50 20 70 40" fill="none" stroke={colors.rose} strokeWidth="1.5" />
           <text x="80" y="25" textAnchor="middle" fontSize="6" fill={colors.rose}>Share</text>
        </SvgWrapper>
      );
    case 'ulssas':
      return (
        <SvgWrapper>
           <circle cx="50" cy="40" r="30" fill="none" stroke={colors.slate} strokeWidth="0.5" strokeDasharray="2 2" />
           <path d="M 50 10 A 30 30 0 0 1 80 40" stroke={colors.rose} strokeWidth="2" fill="none" />
           <circle cx="50" cy="10" r="3" fill={colors.white} />
           <circle cx="80" cy="40" r="3" fill={colors.rose} />
           <text x="50" y="43" textAnchor="middle" fontSize="6" fill={colors.white}>UGC</text>
        </SvgWrapper>
      );
    
    // Structure
    case 'tree':
      return (
        <SvgWrapper>
           <rect x="10" y="35" width="20" height="10" fill={colors.rose} opacity="0.2" stroke={colors.rose} />
           <path d="M 30 40 L 40 40 L 40 20 L 50 20" stroke={colors.slate} fill="none" />
           <path d="M 30 40 L 40 40 L 40 60 L 50 60" stroke={colors.slate} fill="none" />
           <rect x="50" y="15" width="20" height="10" stroke={colors.slate} fill="none" />
           <rect x="50" y="55" width="20" height="10" stroke={colors.slate} fill="none" />
           <path d="M 70 20 L 80 20" stroke={colors.slate} fill="none" />
           <rect x="80" y="15" width="10" height="10" stroke={colors.slate} fill="none" />
        </SvgWrapper>
      );

    default:
      return (
        <SvgWrapper>
          <rect x="10" y="10" width="80" height="60" stroke={colors.slate} fill="none" />
        </SvgWrapper>
      );
  }
};

const FrameworkCard: React.FC<{ framework: Framework }> = ({ framework }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout="position"
      className={`rounded-xl border transition-all duration-300 overflow-hidden ${
        isOpen 
          ? 'bg-slate-800 border-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.15)] col-span-1 md:col-span-2 lg:col-span-3' 
          : 'bg-slate-900 border-slate-800 hover:border-slate-600 cursor-pointer'
      }`}
    >
      <div onClick={() => setIsOpen(!isOpen)} className="p-5 flex items-start gap-4 cursor-pointer">
        <div className={`p-2 rounded-lg flex-shrink-0 transition-colors ${
          isOpen ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
        }`}>
          {framework.icon}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <h4 className={`font-bold text-base mb-1 ${isOpen ? 'text-white' : 'text-slate-200'}`}>
              {framework.name}
            </h4>
            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
               {isOpen ? <ChevronUp className="w-4 h-4 text-rose-500"/> : <ChevronDown className="w-4 h-4 text-slate-600"/>}
            </div>
          </div>
          <p className="text-xs text-slate-500 leading-tight">{framework.purpose}</p>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-8 pt-2">
              <div className="h-px w-full bg-slate-700/50 mb-6"></div>
              
              <div className="flex flex-col md:flex-row gap-8">
                 {/* Left: Diagram */}
                 <div className="w-full md:w-1/3 aspect-video bg-slate-950 rounded-xl border border-slate-700/50 p-4 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                    <div className="w-full h-full relative z-10 p-2">
                       <FrameworkDiagram id={framework.id} />
                    </div>
                 </div>

                 {/* Right: Advice */}
                 <div className="w-full md:w-2/3 flex flex-col justify-center">
                   <div className="mb-4">
                      <p className="text-[10px] font-bold text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                        Strategic Point
                      </p>
                      <h5 className="text-lg font-serif text-white mb-2">{framework.name}の実践活用法</h5>
                      <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-rose-500/30 pl-4">
                        {framework.advice}
                      </p>
                   </div>
                   <div className="flex gap-2">
                      <span className="text-[10px] px-2 py-1 rounded bg-slate-700 text-slate-300 border border-slate-600">Framework</span>
                      <span className="text-[10px] px-2 py-1 rounded bg-slate-700 text-slate-300 border border-slate-600">Analysis</span>
                   </div>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Frameworks: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(frameworksData[0].id);

  const activeCategory = frameworksData.find(c => c.id === activeTabId) || frameworksData[0];

  return (
    <Section background="dark" className="border-t border-slate-900">
      <SectionTitle 
        title="戦略の精度を高める、27の分析フレームワーク" 
        subtitle="FRAMEWORKS" 
        center
      />

      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-slate-400 text-lg leading-relaxed">
            「なんとなく」の施策は打ちません。<br/>
            市場・競合・顧客・自社——あらゆる角度から事業を分析し、根拠のある戦略を設計します。<br/>
            以下は私たちが実際に使用するフレームワークの一部です。
          </p>
        </div>

        {/* Tabs - Desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-2 mb-12">
          {frameworksData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTabId(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeTabId === category.id
                  ? 'bg-rose-600 text-white border-rose-600 shadow-lg shadow-rose-900/20'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-white'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Tabs - Mobile (Select) */}
        <div className="md:hidden mb-8">
          <select 
            value={activeTabId}
            onChange={(e) => setActiveTabId(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg p-4 focus:ring-2 focus:ring-rose-500 outline-none"
          >
            {frameworksData.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title} ({category.count})
              </option>
            ))}
          </select>
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          <motion.div
            layout="position"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min"
          >
            <AnimatePresence mode='popLayout'>
            {activeCategory.items.map((framework) => (
              <FrameworkCard key={framework.id} framework={framework} />
            ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Footer Message */}
        <div className="mt-20 bg-slate-900/50 rounded-2xl p-8 md:p-12 border border-slate-800 text-center max-w-4xl mx-auto backdrop-blur-sm">
           <h3 className="text-xl font-serif text-white mb-6">フレームワークは「使うこと」が目的ではありません</h3>
           <p className="text-slate-400 leading-relaxed mb-0">
             分析で得た示唆を施策に落とし込み、実行し、検証し、改善する。<br/>
             この<strong>PDCAサイクルを高速で回すこと</strong>で、初めて成果につながります。<br/>
             私たちは御社と週次で対話しながら、これらの分析を適切に組み合わせ、<br className="hidden md:block"/>
             根拠のある意思決定を支援します。
           </p>
        </div>
      </div>
    </Section>
  );
};