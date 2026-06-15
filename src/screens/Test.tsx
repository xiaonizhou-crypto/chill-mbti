/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Sparkles, HelpCircle } from 'lucide-react';
import { questions, calculateMBTI } from '../data/questions';
import QuestionIllustration from '../components/QuestionIllustration';

export default function Test() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<('A' | 'B' | 'C')[]>([]);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  // Sparkly "Either is fine / Hard to decide" choice shuffler states
  const [isSpawningSpirit, setIsSpawningSpirit] = useState(false);
  const [spiritChosenVal, setSpiritChosenVal] = useState<'A' | 'B' | 'C' | null>(null);

  const progress = ((currentIndex + 1) / questions.length) * 100;
  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (value: 'A' | 'B' | 'C') => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = value;
    setAnswers(updatedAnswers);

    if (currentIndex < questions.length - 1) {
      setDirection('forward');
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Completed! Calculate MBTI and navigate to Result page
      const resultMBTI = calculateMBTI(updatedAnswers);
      navigate(`/result/${resultMBTI}`);
    }
  };

  const handleMagicDecision = () => {
    if (isSpawningSpirit) return;
    setIsSpawningSpirit(true);
    setSpiritChosenVal(null);

    // Dynamic high-speed Ghibli spirit choosing shuffle cycle
    const optionsArray: ('A' | 'B' | 'C')[] = ['A', 'B', 'C'];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % optionsArray.length;
      setSpiritChosenVal(optionsArray[idx]);
    }, 90);

    setTimeout(() => {
      clearInterval(interval);
      // Determine final randomized selection
      const rand = Math.random();
      const finalChoice: 'A' | 'B' | 'C' = rand < 0.33 ? 'A' : rand < 0.66 ? 'B' : 'C';
      setSpiritChosenVal(finalChoice);

      // Play soft transition wait before selection auto-confirms
      setTimeout(() => {
        handleSelectOption(finalChoice);
        setIsSpawningSpirit(false);
        setSpiritChosenVal(null);
      }, 750);
    }, 1200);
  };

  const handleBack = () => {
    if (isSpawningSpirit) return; // Prevent navigation during magic shuffling
    if (currentIndex > 0) {
      setDirection('backward');
      setCurrentIndex((prev) => prev - 1);
    } else {
      navigate('/');
    }
  };

  // Motion variants for sliding question blocks
  const slideVariants: any = {
    enter: (dir: 'forward' | 'backward') => ({
      x: dir === 'forward' ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (dir: 'forward' | 'backward') => ({
      x: dir === 'forward' ? -120 : 120,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 350, damping: 30 },
        opacity: { duration: 0.15 },
      },
    }),
  };

  return (
    <div className="flex flex-col min-h-screen justify-between text-neutral-800 bg-neutral-50" id="test-container">
      {/* Dynamic Header */}
      <div className="px-6 pt-6">
        <div className="flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center justify-center p-2 text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 rounded-full transition-colors"
            aria-label="返回"
            id="test-back-btn"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-1 text-xs font-bold text-neutral-400 font-mono tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span>PROGRESS: {currentIndex + 1} / {questions.length}</span>
          </div>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="h-1.5 w-full bg-neutral-200 rounded-full overflow-hidden mt-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-violet-500 via-teal-500 to-amber-500"
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col justify-center px-6 py-6 overflow-hidden relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full flex flex-col space-y-6"
          >
            {/* Question Text */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-violet-500 uppercase">
                QUESTION 0{currentIndex + 1}
              </span>
              <h2 className="text-lg md:text-xl font-extrabold tracking-tight text-neutral-950 leading-snug">
                {currentQuestion.text}
              </h2>
            </div>

            {/* Premium Animated Ghibli-themed Illustration Block */}
            <div className="my-1">
              <QuestionIllustration id={currentQuestion.id} />
            </div>

            {/* Answer Options */}
            <div className="flex flex-col gap-3">
              {currentQuestion.options.map((opt) => {
                const isSelected = answers[currentIndex] === opt.value;
                const isHighlighted = isSpawningSpirit && spiritChosenVal === opt.value;

                return (
                  <motion.button
                    key={opt.value}
                    onClick={() => !isSpawningSpirit && handleSelectOption(opt.value)}
                    disabled={isSpawningSpirit}
                    animate={isHighlighted ? { scale: [1, 1.02, 1], y: [0, -1, 0] } : { scale: 1, y: 0 }}
                    transition={isHighlighted ? { repeat: Infinity, duration: 0.16, ease: "easeInOut" } : {}}
                    className={`relative w-full p-4 text-left rounded-xl border transition-all duration-300 group shadow-sm hover:shadow-md hover:border-neutral-400 active:scale-[0.99] ${
                      isHighlighted
                        ? 'border-amber-400 bg-amber-50/80 shadow-amber-100 ring-2 ring-amber-400/50 text-neutral-900'
                        : isSelected
                        ? 'border-neutral-900 bg-neutral-900 text-white shadow-md'
                        : 'border-neutral-200/80 bg-white text-neutral-800'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Badge indicator */}
                      <span
                        className={`flex items-center justify-center font-mono font-bold text-xs h-6 w-6 rounded-full border shrink-0 transition-colors mt-0.5 ${
                          isHighlighted
                            ? 'border-amber-500 bg-amber-300 text-amber-950 font-bold'
                            : isSelected
                            ? 'border-neutral-700 bg-neutral-800 text-amber-300'
                            : 'border-neutral-200 text-neutral-400 group-hover:border-neutral-300'
                        }`}
                      >
                        {opt.value}
                      </span>
                      <p className="text-sm font-medium leading-relaxed font-sans">{opt.text}</p>
                    </div>
                  </motion.button>
                );
              })}

              {/* Option C: 都可以 / 视具体场景而定 */}
              {(() => {
                const isSelected = answers[currentIndex] === 'C';
                const isHighlighted = isSpawningSpirit && spiritChosenVal === 'C';

                return (
                  <motion.button
                    key="C"
                    onClick={() => !isSpawningSpirit && handleSelectOption('C')}
                    disabled={isSpawningSpirit}
                    animate={isHighlighted ? { scale: [1, 1.02, 1], y: [0, -1, 0] } : { scale: 1, y: 0 }}
                    transition={isHighlighted ? { repeat: Infinity, duration: 0.16, ease: "easeInOut" } : {}}
                    className={`relative w-full p-4 text-left rounded-xl border transition-all duration-300 group shadow-sm hover:shadow-md hover:border-neutral-400 active:scale-[0.99] ${
                      isHighlighted
                        ? 'border-amber-400 bg-amber-50/80 shadow-amber-100 ring-2 ring-amber-400/50 text-neutral-900'
                        : isSelected
                        ? 'border-neutral-950 bg-neutral-900 text-white shadow-md'
                        : 'border-neutral-200/80 bg-white text-neutral-800'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Badge indicator */}
                      <span
                        className={`flex items-center justify-center font-mono font-bold text-xs h-6 w-6 rounded-full border shrink-0 transition-colors mt-0.5 ${
                          isHighlighted
                            ? 'border-amber-500 bg-amber-300 text-amber-950 font-bold'
                            : isSelected
                            ? 'border-neutral-700 bg-neutral-800 text-amber-300'
                            : 'border-neutral-200 text-neutral-400 group-hover:border-neutral-300'
                        }`}
                      >
                        C
                      </span>
                      <p className="text-sm font-medium leading-relaxed font-sans">我都可以 / 视具体场景和情况而定</p>
                    </div>
                  </motion.button>
                );
              })()}
            </div>

            {/* "都可以" Magical Helper Option */}
            <div className="flex justify-center pt-1">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleMagicDecision}
                disabled={isSpawningSpirit}
                className={`flex items-center gap-2 px-5 py-2 text-xs font-bold rounded-full border shadow-sm transition-all duration-300 ${
                  isSpawningSpirit
                    ? 'bg-amber-100/90 text-amber-700 border-amber-300 animate-pulse'
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200/80 hover:bg-emerald-100 hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-100/50'
                }`}
                id="sum-spirit-btn"
              >
                <div className="relative flex items-center justify-center">
                  <Sparkles className={`w-3.5 h-3.5 ${isSpawningSpirit ? 'text-amber-600 animate-spin' : 'text-emerald-600'}`} />
                </div>
                <span>
                  {isSpawningSpirit ? '🔮 治愈精灵闭眼帮推算中...' : '纠结不知道选啥？召唤精灵帮你选'}
                </span>
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Helper Context Subtitle */}
      <div className="px-6 pb-6 text-center text-[10px] text-neutral-300 font-medium font-sans select-none tracking-tight">
        点击符合你第一反应的选项，系统将自动记录并切题
      </div>
    </div>
  );
}
