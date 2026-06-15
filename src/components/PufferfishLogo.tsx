/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface PufferfishLogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export default function PufferfishLogo({ className = '', size = 120, animated = true }: PufferfishLogoProps) {
  // If we want static rendering we disable animations
  const fishAnimate = animated
    ? {
        y: [0, -3, 0],
        rotate: [0, 0.5, -0.5, 0],
      }
    : {};

  const balloonAnimate = animated
    ? {
        y: [0, -7, 0],
        rotate: [0, 3, -3, 0],
      }
    : {};

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }} id="pufferfish-logo-container">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="pufferfish-logo-svg"
      >
        {/* Balloon with String and Little Sparkly Vibe Lines (Gently floats and sways) */}
        <motion.g
          animate={balloonAnimate}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '45px 110px' }}
        >
          {/* Balloon String connecting knot to pufferfish cheek */}
          <path
            d="M 45,63 Q 39,83 51,96 T 64,111"
            stroke="#1E293B"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Balloon Knot */}
          <polygon
            points="42,59 48,59 45,64"
            fill="#FFFFFF"
            stroke="#1E293B"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Hand Balloon Palm Circle */}
          <circle
            cx="45"
            cy="41"
            r="14"
            fill="#FFFFFF"
            stroke="#1E293B"
            strokeWidth="3.2"
          />

          {/* Thumb Up sticking up-right */}
          <path
            d="M 49,32 C 49,15 58,15 58,32"
            stroke="#1E293B"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="#FFFFFF"
          />

          {/* Curled Fingers on the left of the palm */}
          {/* Index */}
          <path
            d="M 32,32 C 27,32 27,37 32,37"
            stroke="#1E293B"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="#FFFFFF"
          />
          {/* Middle */}
          <path
            d="M 31,37 C 26,37 26,42 31,42"
            stroke="#1E293B"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="#FFFFFF"
          />
          {/* Ring */}
          <path
            d="M 32,42 C 27,42 27,47 32,47"
            stroke="#1E293B"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="#FFFFFF"
          />
          {/* Pinky */}
          <path
            d="M 34,47 C 30,47 30,52 34,52"
            stroke="#1E293B"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="#FFFFFF"
          />

          {/* Smiley Face on the balloon palm space */}
          <circle cx="41" cy="37" r="1.2" fill="#1E293B" />
          <circle cx="47" cy="37" r="1.2" fill="#1E293B" />
          <path
            d="M 41,42 Q 44,45 47,42"
            stroke="#1E293B"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Radiating High-Vibe lines around the thumb balloon (Sparkly/doodle lines) */}
          <line
            x1="43"
            y1="13"
            x2="38"
            y2="11"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="53"
            y1="9"
            x2="53"
            y2="4"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="63"
            y1="14"
            x2="68"
            y2="12"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Pufferfish (Gently floats and breathes) */}
        <motion.g
          animate={fishAnimate}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: 'easeInOut',
            delay: 0.2,
          }}
        >
          {/* Tail Fin */}
          <path
            d="M 135,115 C 145,110 152,106 156,108 C 155,112 148,115 149,115 C 148,115 155,118 156,122 C 152,124 145,120 135,115 Z"
            fill="#9BB0C1"
            stroke="#1E293B"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />

          {/* Pufferfish solid white belly/body backing */}
          <ellipse
            cx="95"
            cy="115"
            rx="40"
            ry="25"
            fill="#FFFFFF"
            stroke="#1E293B"
            strokeWidth="3.2"
          />

          {/* Grayish-Blue Pufferfish Top Half overlay */}
          <path
            d="M 55,115 C 55,90 135,90 135,115 C 115,117 75,117 55,115 Z"
            fill="#9BB0C1"
            stroke="#1E293B"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />

          {/* Front Left Eye */}
          <circle
            cx="70"
            cy="111"
            r="10"
            fill="#FFFFFF"
            stroke="#1E293B"
            strokeWidth="3.2"
          />
          {/* Left Eye pupil */}
          <circle cx="70" cy="111" r="4.2" fill="#1E293B" />
          <circle cx="71.5" cy="109.2" r="1.2" fill="#FFFFFF" />

          {/* Back Right Eye */}
          <circle
            cx="105"
            cy="108"
            r="8"
            fill="#FFFFFF"
            stroke="#1E293B"
            strokeWidth="3.2"
          />
          {/* Right Eye pupil */}
          <circle cx="105" cy="108" r="3.4" fill="#1E293B" />
          <circle cx="106.2" cy="106.5" r="1" fill="#FFFFFF" />

          {/* Two Cute Nostrils/Eyebrow wrinkles between the eyes */}
          <line
            x1="86"
            y1="104"
            x2="86"
            y2="108"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="89"
            y1="104"
            x2="89"
            y2="108"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Cute Downturned Beak Mouth */}
          <polygon
            points="84,115 91,115 87.5,121"
            fill="#1E293B"
            stroke="#1E293B"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </motion.g>
      </svg>
    </div>
  );
}
