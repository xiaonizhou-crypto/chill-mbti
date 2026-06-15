/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

interface IllustrationProps {
  id: number;
}

export default function QuestionIllustration({ id }: IllustrationProps) {
  switch (id) {
    case 1: // Question 1: Lunch with friends vs alone
      return (
        <div className="w-full h-32 flex items-center justify-center bg-gradient-to-b from-amber-50/50 to-orange-50/30 rounded-2xl border border-orange-100/50 overflow-hidden relative" id="illust-q1">
          {/* Cozy checkered table background */}
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Wooden Table surface */}
            <path d="M10 75 h80 v4 H10 z" fill="#D97706" rx="2" />
            
            {/* Cozy red plaid tablecloth */}
            <path d="M20 75 Q25 78 30 75 T40 75 T50 75 T60 75 T70 75 T80 75" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            
            {/* Ghibli style steaming hot tea cup */}
            <rect x="25" y="48" width="16" height="18" rx="4" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            <path d="M41 53 C44 53, 46 56, 46 58 C46 60, 44 63, 41 63" stroke="#CA8A04" strokeWidth="2" fill="none" strokeLinecap="round" />
            
            {/* Floating animated tea steam dots */}
            <motion.path
              d="M30 42 Q32 35 29 28"
              stroke="#F59E0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              animate={{ y: [0, -6, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M36 40 Q34 33 37 26"
              stroke="#F59E0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              animate={{ y: [2, -4, 2], opacity: [0.2, 0.8, 0.2] }}
              transition={{ repeat: Infinity, duration: 2.3, ease: "easeInOut", delay: 0.5 }}
            />

            {/* A warm golden-brown baked Ghibli croissant */}
            <path d="M54 62 Q64 42 74 62 Z" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
            <path d="M58 62 Q64 48 70 62" fill="#F59E0B" stroke="#92400E" strokeWidth="1" />
            <path d="M62 62 Q64 54 66 62" fill="#FEF08A" stroke="#92400E" strokeWidth="1" />

            {/* Sweet little strawberry berry sitting on the side */}
            <circle cx="50" cy="69" r="3.5" fill="#EF4444" />
            <circle cx="49" cy="68" r="0.6" fill="#FFF" />
            <path d="M50 66 L50 63" stroke="#15803D" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 2: // Question 2: Ideas discussions (floating paper airplanes & clouds)
      return (
        <div className="w-full h-32 flex items-center justify-center bg-gradient-to-b from-sky-50/50 to-indigo-50/30 rounded-2xl border border-sky-100/50 overflow-hidden relative" id="illust-q2">
          {/* Wind gusts in the background */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M-20 30 Q30 20 80 40 T180 30"
              stroke="#E0F2FE"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              animate={{ x: [-20, 200] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
            <motion.path
              d="M20 80 Q70 70 120 90 T220 80"
              stroke="#E0F2FE"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              animate={{ x: [-50, 200] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear", delay: 1 }}
            />
          </svg>

          <svg className="w-24 h-24 relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Fluffy Ghibli clouds */}
            <path d="M15 65 C15 58, 25 55, 30 60 C35 55, 45 55, 48 65 Z" fill="#FFF" stroke="#BAE6FD" strokeWidth="1.5" />
            <path d="M50 72 C50 64, 62 60, 68 66 C74 60, 85 64, 85 72 Z" fill="#FFF" opacity="0.8" stroke="#BAE6FD" strokeWidth="1.5" />

            {/* Floating Paper Airplane representing flying opinions */}
            <motion.g
              animate={{
                y: [0, -8, 0],
                rotate: [0, 4, -4, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <polygon points="35,38 72,24 64,48 50,44" fill="#F1F5F9" stroke="#38BDF8" strokeWidth="1.5" />
              <polygon points="50,44 72,24 60,40" fill="#E2E8F0" stroke="#38BDF8" strokeWidth="1" />
              <line x1="50" y1="44" x2="44" y2="48" stroke="#38BDF8" strokeWidth="1" />
            </motion.g>

            {/* Glowing idea sparkle star */}
            <motion.polygon
              points="78,42 80,45 84,45 81,47 82,51 78,49 74,51 75,47 72,45 76,45"
              fill="#FCD34D"
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </div>
      );

    case 3: // Question 3: Magnifying glass VS Telescope
      return (
        <div className="w-full h-32 flex items-center justify-center bg-gradient-to-b from-purple-50/50 to-pink-50/30 rounded-2xl border border-purple-100/50 overflow-hidden relative" id="illust-q3">
          <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Starry night sky circular background within illustration */}
            <circle cx="50" cy="50" r="38" fill="#1E1B4B" />
            
            {/* Floating animated yellow stars */}
            <motion.circle cx="35" cy="30" r="1.5" fill="#FDE047" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2 }} />
            <motion.circle cx="65" cy="35" r="1.2" fill="#FDE047" animate={{ opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 1.8 }} />
            <motion.circle cx="48" cy="22" r="2" fill="#FBC02D" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }} />

            {/* Constellation lines */}
            <line x1="35" y1="30" x2="48" y2="22" stroke="#4338CA" strokeWidth="0.75" />
            <line x1="48" y1="22" x2="65" y2="35" stroke="#4338CA" strokeWidth="0.75" />

            {/* Cute Ghibli Telescope looking at the stars */}
            <motion.g
              animate={{ rotate: [0, -3, 3, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{ transformOrigin: "30px 70px" }}
            >
              {/* Wooden stand */}
              <line x1="30" y1="70" x2="22" y2="84" stroke="#D97706" strokeWidth="2.5" />
              <line x1="30" y1="70" x2="38" y2="84" stroke="#D97706" strokeWidth="2.5" />
              <circle cx="30" cy="70" r="2.5" fill="#9CA3AF" />

              {/* Telescope brass cylinders */}
              <rect x="26" y="44" width="32" height="12" rx="1.5" fill="#B45309" stroke="#F59E0B" strokeWidth="1.5" transform="rotate(-30 26 44)" />
              <rect x="52" y="38" width="16" height="8" rx="1" fill="#D97706" stroke="#F59E0B" strokeWidth="1" transform="rotate(-30 52 38)" />
              
              {/* Bright magical glass ring */}
              <ellipse cx="66" cy="29" rx="2" ry="4" fill="#67E8F9" opacity="0.8" transform="rotate(-30 66 29)" />
            </motion.g>
          </svg>
        </div>
      );

    case 4: // Question 4: Sprout VS solid house
      return (
        <div className="w-full h-32 flex items-center justify-center bg-gradient-to-b from-green-50/50 to-emerald-50/30 rounded-2xl border border-green-100/50 overflow-hidden relative" id="illust-q4">
          <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Green hill */}
            <path d="M5 80 Q50 64 95 80 L95 95 L5 95 Z" fill="#059669" />
            <path d="M5 80 Q35 70 70 82" stroke="#10B981" strokeWidth="1.5" />

            {/* Little Ghibli cottage (representing classic safety and foundations) */}
            <rect x="18" y="55" width="22" height="18" rx="2" fill="#F1F5F9" stroke="#334155" strokeWidth="1.5" />
            {/* Red tile roof */}
            <polygon points="15,55 29,40 43,55" fill="#EF4444" stroke="#334155" strokeWidth="1.5" strokeLinejoin="round" />
            {/* Yellow windows */}
            <rect x="23" y="60" width="4" height="4" rx="1" fill="#FDE047" />
            <rect x="31" y="60" width="4" height="4" rx="1" fill="#FDE047" />

            {/* A small growing seed sprout with dual bright green leaves (representing future potential) */}
            <motion.g
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ transformOrigin: "70px 75px" }}
            >
              {/* Sprout stem */}
              <path d="M70 75 Q68 62 70 52" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Cute green leaves */}
              <path d="M70 52 Q60 44 56 48 C54 52, 64 54, 70 52Z" fill="#10B981" stroke="#047857" strokeWidth="1.25" />
              <path d="M70 52 Q82 46 84 51 C84 56, 74 56, 70 52Z" fill="#10B981" stroke="#047857" strokeWidth="1.25" />
              
              {/* Sparkle drops above sprout */}
              <motion.circle
                cx="70"
                cy="42"
                r="1.5"
                fill="#38BDF8"
                animate={{ y: [-5, 5], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </motion.g>
          </svg>
        </div>
      );

    case 5: // Question 5: Direct blunt vs Sweet cozy empathy
      return (
        <div className="w-full h-32 flex items-center justify-center bg-gradient-to-b from-rose-50/50 to-pink-50/30 rounded-2xl border border-rose-100/50 overflow-hidden relative" id="illust-q5">
          <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Two hands meeting in the air horizontally (Simplified graphic) */}
            <path d="M10 50 Q30 45 42 48" stroke="#FDA4AF" strokeWidth="4" strokeLinecap="round" />
            <path d="M90 50 Q70 45 58 48" stroke="#FDA4AF" strokeWidth="4" strokeLinecap="round" />

            {/* Centered blinking glowing heart representing care & empathy */}
            <motion.g
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              style={{ transformOrigin: "50px 48px" }}
            >
              <path
                d="M50 63 C48 60, 36 52, 36 41 C36 34, 42 29, 48 31 C50 32, 50 33, 50 33 C50 33, 50 32, 52 31 C58 29, 64 34, 64 41 C64 52, 52 60, 50 63Z"
                fill="#F43F5E"
                stroke="#FFE4E6"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path d="M42 37 C40 37, 39 39, 39 41" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" />
            </motion.g>

            {/* Little clover leaf floating beside the heart */}
            <motion.path
              d="M26 28 Q23 20 28 22 C32 20, 31 28, 26 28Z"
              fill="#10B981"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            />
            <motion.path
              d="M74 28 Q71 20 76 22 C80 20, 79 28, 74 28Z"
              fill="#10B981"
              animate={{ rotate: [360, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />
          </svg>
        </div>
      );

    case 6: // Question 6: Gold vs Good team vibes (Campfire / Calcifer style!)
      return (
        <div className="w-full h-32 flex items-center justify-center bg-gradient-to-b from-amber-50/50 to-red-50/30 rounded-2xl border border-red-100/50 overflow-hidden relative" id="illust-q6">
          <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Wooden logs crossed on the bottom */}
            <line x1="25" y1="75" x2="75" y2="65" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
            <line x1="75" y1="75" x2="25" y2="65" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
            
            {/* Wood ring details */}
            <circle cx="26" cy="74" r="2.5" fill="#B45309" />
            <circle cx="74" cy="74" r="2.5" fill="#B45309" />

            {/* Warm dancing Ghibli fire spirit on logs (Calcifer-esque!) */}
            <motion.g
              animate={{
                y: [0, -4, 2, -1, 0],
                scaleY: [1, 1.1, 0.95, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "50px 65px" }}
            >
              {/* Outer bright red flame */}
              <path d="M32 65 C26 48, 40 28, 50 20 C60 28, 74 48, 68 65 Z" fill="#EF4444" stroke="#FEE2E2" strokeWidth="1" />
              
              {/* Inner energetic yellow flame */}
              <path d="M38 65 C34 52, 44 38, 50 32 C56 38, 66 52, 62 65 Z" fill="#FBBF24" />
              
              {/* Cute little eyes for the fire spirit */}
              <ellipse cx="45" cy="48" rx="2" ry="3" fill="#FFF" />
              <circle cx="45" cy="48" r="1.2" fill="#000" />
              
              <ellipse cx="55" cy="48" rx="2" ry="3" fill="#FFF" />
              <circle cx="55" cy="48" r="1.2" fill="#000" />
              
              {/* Tiny smiley mouth */}
              <path d="M48 56 Q50 58 52 56" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </motion.g>

            {/* Little floating hot air amber particles */}
            <motion.circle cx="34" cy="30" r="1.5" fill="#F97316" animate={{ y: [0, -15], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} />
            <motion.circle cx="66" cy="24" r="2" fill="#FBBF24" animate={{ y: [0, -20], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1.8, delay: 0.4 }} />
          </svg>
        </div>
      );

    case 7: // Question 7: Rigorous schedule notebook vs sailing wild sea
      return (
        <div className="w-full h-32 flex items-center justify-center bg-gradient-to-b from-blue-50/50 to-teal-50/30 rounded-2xl border border-blue-100/50 overflow-hidden relative" id="illust-q7">
          <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Steer Ship Wheel representing sailing into open possibilities */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
              style={{ transformOrigin: "50px 50px" }}
            >
              {/* Outer wheel ring */}
              <circle cx="50" cy="50" r="24" stroke="#B45309" strokeWidth="4" fill="none" />
              <circle cx="50" cy="50" r="18" stroke="#D97706" strokeWidth="1.5" fill="none" />
              
              {/* Dynamic handles */}
              <line x1="50" y1="14" x2="50" y2="86" stroke="#B45309" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="14" y1="50" x2="86" y2="50" stroke="#B45309" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="24" y1="24" x2="76" y2="76" stroke="#B45309" strokeWidth="3" strokeLinecap="round" />
              <line x1="76" y1="24" x2="24" y2="76" stroke="#B45309" strokeWidth="3" strokeLinecap="round" />

              {/* Center shiny brass coin piece */}
              <circle cx="50" cy="50" r="7" fill="#FBBF24" stroke="#B45309" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="2" fill="#78350F" />
            </motion.g>

            {/* Little ocean wave vectors below */}
            <path d="M10 82 Q30 76 50 82 T90 82" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M15 88 Q35 84 55 88 T85 88" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 8: // Question 8: Deadline high-energy burst vs ahead step-by-step
      return (
        <div className="w-full h-32 flex items-center justify-center bg-gradient-to-b from-yellow-50/50 to-amber-50/30 rounded-2xl border border-yellow-105/50 overflow-hidden relative" id="illust-q8">
          <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ghibli magical wooden flying propeller machine (representing high-speed soaring bursts) */}
            <motion.g
              animate={{
                y: [0, -6, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "50px 52px" }}
            >
              {/* Flying machine cabin body (Ghibli wooden bucket/egg design) */}
              <rect x="36" y="44" width="28" height="24" rx="10" fill="#D97706" stroke="#78350F" strokeWidth="2" />
              <rect x="42" y="50" width="16" height="12" rx="4" fill="#E2E8F0" stroke="#475569" strokeWidth="1.5" /> {/* Windows */}
              
              {/* Propeller shaft */}
              <line x1="50" y1="44" x2="50" y2="30" stroke="#78350F" strokeWidth="3" />
              
              {/* Spin-animated wooden propeller blade on top */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.4, ease: "linear" }}
                style={{ transformOrigin: "50px 30px" }}
              >
                <ellipse cx="50" cy="30" rx="22" ry="3" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.2" />
                <circle cx="50" cy="30" r="3.5" fill="#92400E" />
              </motion.g>

              {/* Little cute metal exhaust pipe at the bottom */}
              <path d="M38 68 L34 76" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
              {/* Smoke puff */}
              <motion.circle
                cx="31"
                cy="79"
                r="3"
                fill="#CBD5E1"
                animate={{ scale: [0.5, 1.5, 0.5], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              />
            </motion.g>

            {/* Glowing magic star sparkles around it */}
            <motion.polygon
              points="14,24 16,27 20,27 17,29 18,33 14,31 10,33 11,29 8,27 12,27"
              fill="#F59E0B"
              animate={{ scale: [0.7, 1.3, 0.7] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
            />
            <motion.polygon
              points="84,52 86,55 90,55 87,57 88,61 84,59 80,61 81,57 78,55 82,55"
              fill="#F59E0B"
              animate={{ scale: [1.2, 0.7, 1.2] }}
              transition={{ repeat: Infinity, duration: 1.9, delay: 0.3 }}
            />
          </svg>
        </div>
      );

    default:
      return null;
  }
}
