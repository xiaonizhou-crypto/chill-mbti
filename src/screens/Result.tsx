/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Sparkles, Share2, RefreshCw, ChevronLeft,
  AlertTriangle, ShieldCheck
} from 'lucide-react';
import { getProfile, mbtiColorSchema } from '../data/matching';
import MBTIAvatar from '../components/MBTIAvatar';

export default function Result() {
  const { type = 'INFP' } = useParams<{ type: string }>();
  const userProfile = getProfile(type);
  const userGroupColor = mbtiColorSchema[userProfile.group];

  const [copiedText, setCopiedText] = useState(false);

  // Copy share info
  const handleShare = () => {
    const textToCopy = `【职场月老测验结果】\n我是「${userProfile.type} · ${userProfile.name}」\n✨ 职场金句：${userProfile.tagline}\n💼 工作风格：${userProfile.style}\n🔗 我最合拍的灵魂老板 MBTI：${userProfile.bestBosses.join(' 和 ')}\n🤖 通过你的 MBTI 寻找高频合拍老板，快来 Chill 职场月老测一下吧！`;
    
    // Web Share API
    if (navigator.share) {
      navigator.share({
        title: '我的职场月老老板契合报告',
        text: textToCopy,
        url: window.location.href
      }).catch(console.error);
    } else {
      // Fallback: Copy to keyboard
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopiedText(true);
        setTimeout(() => setCopiedText(false), 2000);
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-neutral-800 bg-neutral-100 font-sans" id="result-container">
      {/* Top back navigation bar */}
      <div className="bg-white border-b border-neutral-200/60 px-4 py-3 flex items-center justify-between sticky top-0 z-10 shadow-3sm">
        <Link to="/" className="flex items-center gap-1.5 text-neutral-500 hover:text-neutral-800 text-sm font-medium transition-colors">
          <ChevronLeft className="w-5 h-5" />
          <span>返回首页</span>
        </Link>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-neutral-100 rounded-full">
          <Sparkles className="w-3.5 h-3.5" style={{ color: userGroupColor.color }} />
          <span className="text-[11px] font-bold text-neutral-500">{userProfile.groupName}档案</span>
        </div>
      </div>

      {/* Main body scroll view */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-7 max-w-[430px] mx-auto w-full">
        
        {/* SECTION 1: SHARING CARD */}
        <div 
          id="share-card"
          className="relative bg-neutral-900 text-white rounded-3xl overflow-hidden p-6 shadow-xl border border-neutral-800"
        >
          {/* Subtle background glow */}
          <div 
            className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[70px] pointer-events-none opacity-40 transition-all duration-500"
            style={{ backgroundColor: userGroupColor.color }}
          />
          
          <div className="flex justify-between items-center gap-4">
            <div className="flex-1">
              <span className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase font-mono">
                {userProfile.groupName} MBTI PROFILE
              </span>
              <h1 className="text-4xl font-black tracking-tighter mt-1" style={{ color: userGroupColor.accent || userGroupColor.color }}>
                {userProfile.type}
              </h1>
              <p className="text-xl font-bold tracking-wide text-neutral-100 mt-1">
                {userProfile.name}
              </p>
            </div>
            
            {/* Elegant avatar placement inside share card */}
            <div className="shrink-0 p-1.5 bg-neutral-800/85 rounded-2xl border border-neutral-700/50 shadow-md">
              <MBTIAvatar type={userProfile.type} size="xl" className="w-18 h-18 sm:w-20 sm:w-20" />
            </div>
          </div>

          <div className="mt-6 border-t border-neutral-800 pt-4">
            <p className="text-sm italic font-medium text-neutral-300/90 leading-relaxed font-sans before:content-['“'] after:content-['”']">
              {userProfile.tagline}
            </p>
          </div>

          <div className="mt-5 space-y-3 bg-neutral-800/40 p-4 rounded-2xl border border-neutral-800/85">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
              💼 职场人格剖析
            </h4>
            <p className="text-xs text-neutral-200 leading-relaxed font-sans">
              {userProfile.style}
            </p>
          </div>

          {/* Core Strengths Badges */}
          <div className="mt-5 flex flex-wrap gap-2">
            {userProfile.strengths.map((st, i) => (
              <span 
                key={i} 
                className="text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-neutral-850 text-neutral-200 border border-neutral-800 shadow-sm"
              >
                ✨ {st}
              </span>
            ))}
          </div>

          <div className="mt-6 border-t border-neutral-800 pt-4 space-y-2">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
              🤝 理想老板沟通画像
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {userProfile.needBoss}
            </p>
          </div>

          {/* card bottom banner */}
          <div className="mt-8 flex justify-between items-center text-neutral-500 border-t border-neutral-800/80 pt-4 text-[10px] font-mono">
            <span>COSMIC COMPATIBILITY REPORT</span>
            <span className="font-bold text-neutral-400">职场月老 by Chill</span>
          </div>
        </div>

        {/* Suggestion tip for user */}
        <div className="text-center text-[10px] font-medium text-neutral-400">
          📸 长按或截屏上方卡片保存至相册
        </div>

        {/* SECTION 2: MATCHING BOSSES */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold text-neutral-950">100% 灵魂最配契合老板</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3" id="match-owners">
            {userProfile.bestBosses.map((bossCode) => {
              const boss = getProfile(bossCode);
              const bossSchema = mbtiColorSchema[boss.group];
              return (
                <div 
                  key={bossCode}
                  className="bg-white p-4.5 rounded-2xl border border-neutral-200 shadow-sm flex flex-col justify-between relative"
                  style={{ borderLeftWidth: '5px', borderLeftColor: bossSchema.color }}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold tracking-wider uppercase opacity-80" style={{ color: bossSchema.color }}>
                        {bossSchema.groupName}
                      </span>
                      <span className="text-lg font-black tracking-tight" style={{ color: bossSchema.color }}>
                        {bossCode}
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-neutral-50 rounded-xl border border-neutral-150 shrink-0">
                        <MBTIAvatar type={bossCode} size="md" className="w-11 h-11" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <h4 className="text-sm font-bold text-neutral-900 leading-none">
                          {boss.name}
                        </h4>
                        <p className="text-[10.5px] italic text-neutral-400 font-sans leading-normal">
                          “{boss.tagline}”
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                      {boss.style}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[10px] font-bold text-neutral-400">
                    <span>MATCH RATING</span>
                    <span style={{ color: bossSchema.color }}>99.8% READY</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chemistry Match explain text */}
          <div className="bg-white border border-neutral-200 p-4 rounded-2xl shadow-3sm text-xs leading-relaxed text-neutral-600 font-sans">
            <div className="font-bold text-neutral-800 mb-1 flex items-center gap-1.5">
              <span>🧬 Chemistry 匹配解析:</span>
            </div>
            {userProfile.matchExplanation}
          </div>
        </div>

        {/* SECTION 3: WARNING SIGNAL */}
        <div className="bg-rose-50 border border-rose-200 p-5 rounded-2xl space-y-3 shadow-3sm" id="dangerzone-card">
          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-rose-100 text-rose-600 rounded-lg shrink-0 mt-0.5">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-rose-800">
                🚨 面试避雷与窒息信号
              </h4>
              <p className="text-xs text-rose-700/90 leading-relaxed font-sans">
                {userProfile.alertMessage}
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-rose-200/50 flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] uppercase font-bold text-rose-500 bg-rose-100 px-2 py-0.5 rounded-md">
              高危人格老板:
            </span>
            {userProfile.worstBosses.map((wb) => (
              <span key={wb} className="inline-flex items-center gap-1 text-[11px] font-extrabold text-neutral-850 px-2.5 py-0.5 bg-rose-200/55 border border-rose-350 rounded-full">
                <MBTIAvatar type={wb} className="w-4 h-4 rounded-full" />
                <span>{wb}</span>
              </span>
            ))}
          </div>
        </div>

        {/* SECTION 4: ACTIONS */}
        <div className="space-y-3 pt-4">
          <a
            href={`https://claw-h5-production-2e3c.up.railway.app/#/c/onboard?mbti=${encodeURIComponent(userProfile.type)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full gap-2 px-6 py-4 text-sm font-semibold text-white bg-neutral-900 rounded-xl shadow-md hover:bg-neutral-800 transition-colors no-underline"
            id="btn-get-agent"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            领取你的专属求职 Agent
          </a>

          <a
            href={`https://claw-h5-production-2e3c.up.railway.app/#/c/onboard?mbti=${encodeURIComponent(userProfile.type)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full gap-2 px-6 py-4 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-xl hover:bg-neutral-50 transition-colors no-underline"
            id="btn-chat-advisor"
          >
            <Sparkles className="w-4 h-4 text-violet-500" />
            先和 Chill 聊聊看
          </a>

          <button
            onClick={handleShare}
            className="flex items-center justify-center w-full gap-2 px-6 py-4 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-xl hover:bg-neutral-50 transition-colors"
            id="btn-quick-share"
          >
            <Share2 className="w-4 h-4 text-neutral-500" />
            {copiedText ? '已复制分享文本！' : '分享报告给朋友'}
          </button>

          <div className="flex justify-center pt-2">
            <Link 
              to="/test"
              className="flex items-center gap-1 text-xs font-semibold text-neutral-500 hover:text-neutral-800 hover:underline py-2"
              id="link-retest"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>不准？重新测试一下</span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
