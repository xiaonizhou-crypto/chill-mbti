/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Briefcase, ChevronDown, ChevronRight, HelpCircle } from 'lucide-react';
import { mbtiProfiles, mbtiColorSchema } from '../data/matching';
import MBTIAvatar from '../components/MBTIAvatar';
import PufferfishLogo from '../components/PufferfishLogo';

export default function Landing() {
  const navigate = useNavigate();
  const [showGrid, setShowGrid] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  // Group MBTI for grid layout
  const profilesArray = Object.values(mbtiProfiles);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col min-h-screen px-6 py-8 justify-between text-neutral-800 bg-neutral-50"
      id="landing-container"
    >
      {/* Header */}
      <div className="flex flex-col items-center pt-6 text-center">
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-1.5 px-3 py-1 bg-white border border-neutral-200 rounded-full shadow-2sm"
        >
          <Sparkles className="w-4 h-4 text-violet-600 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-neutral-600 uppercase">Chill / 职场月老</span>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-6 flex justify-center"
        >
          <PufferfishLogo size={135} />
        </motion.div>

        <motion.h1 
          variants={itemVariants} 
          className="mt-6 text-4xl font-extrabold tracking-tight text-neutral-900 font-sans"
        >
          找到最配你的老板
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="mt-3 text-sm font-medium text-neutral-500 font-sans"
        >
          以前企业挑你，现在你挑老板
        </motion.p>
      </div>

      {/* Visual Center Graphic / Intro card */}
      <motion.div 
        variants={itemVariants}
        className="my-8 overflow-hidden rounded-2xl border border-neutral-200/65 bg-white p-6 shadow-sm"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-neutral-100 rounded-xl">
            <Briefcase className="w-5 h-5 text-neutral-700" />
          </div>
          <div className="text-left">
            <h3 className="text-sm font-semibold text-neutral-800">100% 独立人格契合度匹配</h3>
            <p className="text-xs text-neutral-400 mt-0.5">基于 MBTI 经典管理沟通学矩阵</p>
          </div>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-neutral-500">
          你是注重意义、拒绝无用内卷的“外交官”？还是崇尚数据、追求极速决策的“守卫者”？寻找对等、合拍的管理模式，职场月老为你一键牵线。
        </p>
      </motion.div>

      {/* Primary Actions */}
      <div className="space-y-4">
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => navigate('/test')}
          className="flex items-center justify-center w-full gap-2 px-6 py-4 text-sm font-semibold text-white transition-shadow bg-neutral-900 rounded-xl shadow-md hover:shadow-lg active:bg-neutral-800"
          id="btn-start-test"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          帮我测一下 (8道黄金精简题)
          <ChevronRight className="w-4 h-4" />
        </motion.button>

        <motion.button
          variants={itemVariants}
          onClick={() => setShowGrid(!showGrid)}
          className="flex items-center justify-center w-full gap-2 px-6 py-4 text-sm font-medium text-neutral-700 transition-colors bg-white border border-neutral-300 rounded-xl hover:bg-neutral-50"
          id="btn-toggle-grid"
        >
          <HelpCircle className="w-4 h-4 text-neutral-500" />
          我知道我的 MBTI
          <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${showGrid ? 'rotate-180' : ''}`} />
        </motion.button>

        {/* MBTI Grid Expansion */}
        <AnimatePresence>
          {showGrid && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-4 gap-2.5 pt-2 pb-4" id="mbti-grid">
                {profilesArray.map((p) => {
                  const schema = mbtiColorSchema[p.group];
                  return (
                    <button
                      key={p.type}
                      onClick={() => navigate(`/result/${p.type}`)}
                      className="flex flex-col items-center justify-center p-2.5 transition-all rounded-xl border bg-white shadow-2sm hover:shadow-md hover:scale-[1.03] active:scale-[0.98]"
                      style={{ borderColor: schema.color + '40' }}
                    >
                      <MBTIAvatar type={p.type} size="sm" className="mb-1 w-9 h-9" />
                      <span className="text-xs font-extrabold tracking-tight mt-0.5" style={{ color: p.color }}>
                        {p.type}
                      </span>
                      <span className="text-[9px] text-neutral-400 font-medium truncate w-full text-center mt-0.5">
                        {p.name.slice(0, 4)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <motion.div 
        variants={itemVariants}
        className="pt-10 pb-2 text-center text-xs text-neutral-400"
      >
        by <span className="font-semibold text-neutral-600">Chill</span> · 你的 AI 职业顾问
      </motion.div>
    </motion.div>
  );
}
