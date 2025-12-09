import React, { useState } from 'react';
import { Section, SectionTitle } from './ui/Section';
import { motion } from 'framer-motion';
import { FileText, BarChart3, Calendar, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const DeliverablePreview: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto mb-12 lg:mb-0">
      {/* Decorative Background Elements */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute top-20 -right-10 w-64 h-64 bg-slate-200 rounded-full blur-3xl opacity-50"></div>

      {/* Main Document: Strategic Roadmap */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white rounded-xl shadow-2xl border border-slate-200 p-6 md:p-8 rotate-[-2deg]"
      >
        <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-rose-500 rounded flex items-center justify-center text-white">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">OUTPUT 01</div>
              <div className="font-serif font-bold text-slate-800">現状分析・改善ロードマップ</div>
            </div>
          </div>
          <div className="px-2 py-1 bg-rose-50 text-rose-600 text-[10px] font-bold rounded border border-rose-100 uppercase">CONFIDENTIAL</div>
        </div>
        
        {/* Mock Content */}
        <div className="space-y-4">
          <div className="flex gap-4 items-end h-24 mb-6 px-4 border-l border-slate-200 ml-2">
            <div className="w-full bg-slate-100 rounded-t h-[40%] relative group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-400">As-Is</div>
            </div>
            <div className="w-full bg-rose-200 rounded-t h-[65%] relative group"></div>
            <div className="w-full bg-rose-500 rounded-t h-[90%] relative shadow-lg shadow-rose-200">
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-rose-600">To-Be</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-3/4 bg-slate-100 rounded-full"></div>
            <div className="h-2 w-full bg-slate-100 rounded-full"></div>
            <div className="h-2 w-5/6 bg-slate-100 rounded-full"></div>
          </div>
        </div>
      </motion.div>

      {/* Secondary Document: Proposal */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute -bottom-8 -right-4 md:-right-12 z-20 bg-slate-50 rounded-xl shadow-xl border border-slate-200 p-6 w-64 rotate-[3deg]"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center text-white">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">OUTPUT 02</div>
            <div className="font-bold text-slate-800 text-sm">具体的な施策提案書</div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
             <div className="w-4 h-4 rounded-full border border-rose-500 flex items-center justify-center">
               <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
             </div>
             <div className="h-2 w-32 bg-slate-200 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-4 h-4 rounded-full border border-slate-300"></div>
             <div className="h-2 w-24 bg-slate-100 rounded-full"></div>
          </div>
        </div>
      </motion.div>

      <div className="mt-16 text-center lg:text-left">
        <p className="text-sm text-slate-500 leading-relaxed font-medium">
          ヒアリング内容に基づき、<br/>
          御社専用の簡易分析レポートとロードマップ案を<br/>
          初回面談時にご提示いたします。
        </p>
      </div>
    </div>
  );
};

export const BookingSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <Section background="light" id="booking" className="border-t border-slate-200">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column: Context & Preview */}
        <div className="lg:col-span-5">
          <SectionTitle 
            title="無料相談のご予約" 
            subtitle="BOOKING"
            light
          />
          <p className="text-slate-600 mb-12 leading-relaxed">
            現状の課題感や体制について、可能な範囲でご記入ください。<br/>
            具体的な提案資料を作成し、初回面談にてご提示させていただきます。<br/><br/>
            無理な営業は一切いたしませんので、<br/>
            まずはお気軽にお話ししましょう。
          </p>
          <DeliverablePreview />
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-4">送信完了しました</h3>
              <p className="text-slate-500 mb-8">
                お問い合わせありがとうございます。<br/>
                担当者より1営業日以内にご連絡させていただきます。
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-sm font-bold text-slate-400 hover:text-slate-600 underline"
              >
                フォームに戻る
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="space-y-8">
                
                {/* Section 1: Basic Info */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-slate-300"></span>
                    お客様情報 (必須)
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">会社名</label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all outline-none" placeholder="AsetZ株式会社" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">お名前</label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all outline-none" placeholder="山田 太郎" />
                    </div>
                     <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">部署・役職</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all outline-none" placeholder="マーケティング部 部長" />
                    </div>
                     <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">WebサイトURL</label>
                      <input type="url" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all outline-none" placeholder="https://asetz.co.jp" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold text-slate-700">メールアドレス</label>
                      <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all outline-none" placeholder="taro.yamada@example.com" />
                    </div>
                  </div>
                </div>

                {/* Section 2: Hearing (Optional) */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-slate-300"></span>
                    詳細ヒアリング (任意)
                  </h4>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">業種・ビジネスモデル</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all outline-none" placeholder="例：BtoB SaaS, ECサイト, 店舗集客など" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">現在のマーケティング体制</label>
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all outline-none text-slate-600">
                          <option value="">選択してください</option>
                          <option value="none">専任担当なし（兼務のみ）</option>
                          <option value="one">専任担当1名</option>
                          <option value="team">2〜5名のチーム</option>
                          <option value="agency">外部代理店に委託中</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">月間の想定ご予算</label>
                          <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all outline-none text-slate-600">
                            <option value="">選択してください</option>
                            <option value="undecided">未定</option>
                            <option value="~30">〜30万円</option>
                            <option value="30-50">30〜50万円</option>
                            <option value="50-100">50〜100万円</option>
                            <option value="100+">100万円以上</option>
                          </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">導入検討時期</label>
                      <div className="flex flex-wrap gap-3">
                        {['すぐにでも', '3ヶ月以内', '半年以内', '未定・情報収集段階'].map((item, i) => (
                           <label key={i} className="flex items-center gap-2 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors bg-white">
                            <input type="radio" name="timeline" className="w-4 h-4 text-rose-600 border-slate-300 focus:ring-rose-500" />
                            <span className="text-sm text-slate-600">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">現在抱えている最も大きな課題</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {['成果が見えない・CPA高騰', '戦略・方針がない', '社内リソース不足', 'データ活用ができていない', '代理店との連携不足', 'その他'].map((item, i) => (
                          <label key={i} className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                            <input type="checkbox" className="w-4 h-4 text-rose-600 border-slate-300 rounded focus:ring-rose-500" />
                            <span className="text-sm text-slate-600">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">その他、ご相談内容・備考</label>
                      <textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 h-24 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all outline-none resize-none" placeholder="例：来期から内製化を進めたいと考えており、まずは現状分析をお願いしたいです。" ></textarea>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-brand-black text-white font-bold py-4 rounded-lg hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-rose-500/30 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    この内容で予約を申し込む
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    <a href="#" className="underline hover:text-slate-600">プライバシーポリシー</a>に同意の上、送信してください。
                  </p>
                </div>

              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};