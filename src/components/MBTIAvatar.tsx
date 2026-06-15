/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


interface AvatarProps {
  type: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function MBTIAvatar({ type, className = "w-12 h-12", size = 'md' }: AvatarProps) {
  const mbti = type.toUpperCase().trim();

  // Pick responsive size classes
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  const selectedSizeClass = sizeClasses[size] || className;

  // Studio Ghibli & Japanese Anime style 16Personalities avatars.
  // Each contains characteristic warm cheeks, moist shiny eyes, flowing organic hair, and Ghibli elements (scarves, goggles, leaves, fireflies).
  switch (mbti) {
    case 'INTJ': // Architect - Quiet Ghibli Wizard
      return (
        <svg className={`${selectedSizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background: Cozy night twilight sky with cozy wind vector */}
          <circle cx="50" cy="50" r="46" fill="#EEF2FF" stroke="#A78BFA" strokeWidth="2.5" />
          <path d="M12 45 Q30 38, 48 45 T84 42" stroke="#E0E7FF" strokeWidth="2" strokeLinecap="round" />
          <circle cx="28" cy="24" r="1.5" fill="#C084FC" />
          <circle cx="76" cy="28" r="1" fill="#C084FC" />
          
          {/* Hair: Soft dark-purple flowing wizard hair */}
          <path d="M22 38 C18 22, 82 22, 78 38 C75 38, 70 34, 50 36 C30 34, 25 38, 22 38Z" fill="#5B21B6" />
          <path d="M22 38 C20 48, 28 58, 30 65 L70 65 C72 58, 80 48, 78 38 Z" fill="#6D28D9" />
          
          {/* Face */}
          <rect x="33" y="42" width="34" height="28" rx="10" fill="#FFEFEF" />
          
          {/* Ghibli Rosy Blushing Cheeks */}
          <circle cx="39" cy="58" r="3.5" fill="#FDA4AF" opacity="0.65" />
          <circle cx="61" cy="58" r="3.5" fill="#FDA4AF" opacity="0.65" />
          
          {/* Intelligent gold wire-rimmed spectacles */}
          <circle cx="41" cy="51" r="5" stroke="#D97706" strokeWidth="1.75" fill="none" />
          <circle cx="59" cy="51" r="5" stroke="#D97706" strokeWidth="1.75" fill="none" />
          <line x1="46" y1="51" x2="54" y2="51" stroke="#D97706" strokeWidth="1.75" />
          
          {/* Classic moist sparkling Ghibli eyes behind glasses */}
          <circle cx="41" cy="51" r="2.5" fill="#1F2937" />
          <circle cx="42" cy="49.5" r="0.8" fill="#FFFFFF" />
          <circle cx="59" cy="51" r="2.5" fill="#1F2937" />
          <circle cx="60" cy="49.5" r="0.8" fill="#FFFFFF" />
          
          {/* Quiet thinking mouth */}
          <path d="M46 62 Q50 64 54 62" stroke="#311042" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Soft violet traveling cape with cute wooden clasp button */}
          <path d="M26 68 C26 68, 26 95, 50 95 C74 95, 74 68, 74 68 Z" fill="#4C1D95" />
          <circle cx="50" cy="74" r="3" fill="#D97706" /> {/* Clasp button */}
          
          {/* Holding a magical celestial scroll journal */}
          <rect x="40" y="78" width="20" height="12" rx="2" fill="#FAF5FF" stroke="#A78BFA" strokeWidth="1.5" />
          <line x1="44" y1="82" x2="56" y2="82" stroke="#C084FC" strokeWidth="1.5" />
          <line x1="44" y1="86" x2="51" y2="86" stroke="#C084FC" strokeWidth="1.5" />
        </svg>
      );

    case 'INTP': // Logician - Dreamy Astrologer with glowing bottle & star pin
      return (
        <svg className={`${selectedSizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background: Starry twilight sky */}
          <circle cx="50" cy="50" r="46" fill="#EEF2FF" stroke="#A78BFA" strokeWidth="2.5" />
          <path d="M10 50 Q30 62, 50 50 T90 50" stroke="#E0E7FF" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Messy magical purple hair with gold dangling shooting star pin */}
          <path d="M22 38 C16 20, 84 20, 78 38 C74 38, 68 32, 50 34 C32 32, 26 38, 22 38Z" fill="#5B21B6" />
          <path d="M20 38 C18 46, 24 55, 26 62 L74 62 C76 55, 82 46, 80 38 Z" fill="#6D28D9" />
          {/* Dangling star accessory */}
          <line x1="72" y1="26" x2="72" y2="34" stroke="#FBBF24" strokeWidth="1.5" />
          <polygon points="72,32 74,35 77,35 75,37 76,40 72,38 68,40 69,37 67,35 70,35" fill="#FBBF24" />
          
          {/* Face */}
          <rect x="33" y="42" width="34" height="28" rx="10" fill="#FFEFEF" />
          
          {/* Rosy blushing cheeks */}
          <circle cx="39" cy="58" r="3.5" fill="#FDA4AF" opacity="0.65" />
          <circle cx="61" cy="58" r="3.5" fill="#FDA4AF" opacity="0.65" />
          
          {/* Moist sparkly eyes with thick dreamy Ghibli eyelashes */}
          <path d="M37 49 Q41 46 45 49" stroke="#1F2937" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M55 49 Q59 46 63 49" stroke="#1F2937" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="41" cy="53" r="3" fill="#1F2937" />
          <circle cx="42.5" cy="51.5" r="1.2" fill="#FFFFFF" />
          <circle cx="59" cy="53" r="3" fill="#1F2937" />
          <circle cx="60.5" cy="51.5" r="1.2" fill="#FFFFFF" />
          
          {/* Cozy soft thinking mouth */}
          <path d="M45 61 Q50 63 55 61" stroke="#311042" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Astrologer cozy warm robe jacket */}
          <path d="M26 68 C26 68, 26 95, 50 95 C74 95, 74 68, 74 68 Z" fill="#7C3AED" />
          <path d="M38 68 L50 82 L62 68 Z" fill="#F1F5F9" />
          
          {/* Holding a glowing potion bottle with magical yellow star inside */}
          <rect x="42" y="74" width="16" height="15" rx="4" fill="#67E8F9" fillOpacity="0.85" stroke="#0891B2" strokeWidth="1.5" />
          <rect x="45" y="71" width="10" height="3" rx="1" fill="#0891B2" />
          <circle cx="50" cy="81" r="3.5" fill="#FDE047" />
          <circle cx="50" cy="81" r="5" fill="#FDE047" opacity="0.4" />
        </svg>
      );

    case 'ENTJ': // Commander - Airship Pilot Captain (Captain Dola style)
      return (
        <svg className={`${selectedSizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background: Windy high sky breeze */}
          <circle cx="50" cy="50" r="46" fill="#EEF2FF" stroke="#A78BFA" strokeWidth="2.5" />
          <path d="M12 40 Q40 50, 60 30 T88 40" stroke="#E0E7FF" strokeWidth="2" strokeLinecap="round" />
          
          {/* Leather Pilot Helmet & Ears inside Ghibli Pilot cap */}
          <path d="M26 24 C26 24, 50 14, 74 24 C76 34, 76 46, 74 52 L26 52 C24 46, 24 34, 26 24Z" fill="#78350F" />
          <ellipse cx="25" cy="38" rx="3" ry="6" fill="#D97706" />
          <ellipse cx="75" cy="38" rx="3" ry="6" fill="#D97706" />
          
          {/* Retro Brass Pilot Goggles on Hat */}
          <rect x="32" y="24" width="14" height="10" rx="3" stroke="#D97706" strokeWidth="2" fill="#FFF" />
          <rect x="54" y="24" width="14" height="10" rx="3" stroke="#D97706" strokeWidth="2" fill="#FFF" />
          <line x1="46" y1="29" x2="54" y2="29" stroke="#78350F" strokeWidth="3.5" />
          
          {/* Face */}
          <rect x="33" y="42" width="34" height="28" rx="8" fill="#FFEFEF" />
          
          {/* Blushing warm cheeks */}
          <circle cx="39" cy="58" r="3.5" fill="#FDA4AF" opacity="0.65" />
          <circle cx="61" cy="58" r="3.5" fill="#FDA4AF" opacity="0.65" />
          
          {/* Bold, bright sparkling anime pilot eyes with bold brow */}
          <path d="M36 47 H44" stroke="#4C1D95" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M64 47 H56" stroke="#4C1D95" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="41" cy="53" r="3" fill="#1F2937" />
          <circle cx="42" cy="51.5" r="1" fill="#FFFFFF" />
          <circle cx="59" cy="53" r="3" fill="#1F2937" />
          <circle cx="60" cy="51.5" r="1" fill="#FFFFFF" />
          
          {/* Determined courageous smile */}
          <path d="M43 62 Q50 67 57 62" stroke="#4C1D95" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          
          {/* Blowing Red Flight Scarf & Navy Coat */}
          <path d="M26 68 L74 68 L70 95 L30 95 Z" fill="#4C1D95" />
          {/* Dynamic Scarf tails (extremely Studio Ghibli style) */}
          <path d="M46 68 Q34 76, 18 72 Q30 84, 48 74Z" fill="#EF4444" />
          <circle cx="48" cy="72" r="4.5" fill="#EF4444" />
          <rect x="23" y="70" width="8" height="4" fill="#FBBF24" rx="1" /> {/* Gold Badge */}
          <rect x="69" y="70" width="8" height="4" fill="#FBBF24" rx="1" />
        </svg>
      );

    case 'ENTP': // Debater - Tombo style Invention Boy with striped shirt and dynamic wink
      return (
        <svg className={`${selectedSizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background: Sunny active sky */}
          <circle cx="50" cy="50" r="46" fill="#EEF2FF" stroke="#A78BFA" strokeWidth="2.5" />
          {/* Wind line */}
          <path d="M12 45 Q36 32, 60 48 T88 40" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
          
          {/* Short spiky dynamic Ghibli messy hair */}
          <path d="M22 38 Q32 20, 50 22 T78 35 Q82 44, 70 42 C64 42, 60 36, 50 36 C40 36, 30 42, 22 38Z" fill="#5B21B6" />
          <path d="M22 38 C20 45, 26 53, 28 60 L72 60 C74 53, 80 45, 78 38 Z" fill="#6D28D9" />
          
          {/* Face */}
          <rect x="33" y="41" width="34" height="28" rx="8" fill="#FFEFEF" />
          
          {/* Rosy blushing cheeks */}
          <circle cx="39" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          <circle cx="61" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          
          {/* Round wire spectacles */}
          <circle cx="41" cy="49" r="6" stroke="#4C1D95" strokeWidth="1.5" fill="none" />
          <circle cx="59" cy="49" r="6" stroke="#4C1D95" strokeWidth="1.5" fill="none" />
          <line x1="47" y1="49" x2="53" y2="49" stroke="#4C1D95" strokeWidth="1.5" />
          
          {/* Playful wink inside glasses */}
          <path d="M37 50 Q41 52 45 49" stroke="#1F2937" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="59" cy="49" r="2.5" fill="#1F2937" />
          <circle cx="60" cy="47.5" r="0.8" fill="#FFFFFF" />
          
          {/* Confident, talkative wide smile */}
          <path d="M43 60 Q50 67 57 60" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" fill="none" />
          
          {/* Warm vintage striped Ghibli adventure sweater (Tombo style!) */}
          <path d="M26 66 L74 66 L68 95 L32 95 Z" fill="#F3F4F6" />
          {/* Orange stripes */}
          <path d="M27 72 L73 72 L71 78 L29 78 Z" fill="#F97316" />
          <path d="M28 84 L72 84 L70 90 L30 90 Z" fill="#F97316" />
          
          {/* Holding a tiny mechanical brass cogwheel close to chest */}
          <circle cx="50" cy="74" r="5" fill="#D97706" />
          <circle cx="50" cy="74" r="2" fill="#F3F4F6" />
          <line x1="50" y1="67" x2="50" y2="81" stroke="#D97706" strokeWidth="1.5" />
          <line x1="43" y1="74" x2="57" y2="74" stroke="#D97706" strokeWidth="1.5" />
        </svg>
      );

    case 'INFJ': // Advocate - Woodland Sage with cozy leaf-cloak & little glowing lantern staff
      return (
        <svg className={`${selectedSizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background: Whispering forest breeze with floating leaf particles */}
          <circle cx="50" cy="50" r="46" fill="#ECFDF5" stroke="#34D399" strokeWidth="2.5" />
          <path d="M12 48 Q35 55, 55 42 T88 48" stroke="#D1FAE5" strokeWidth="2" strokeLinecap="round" />
          <circle cx="76" cy="30" r="1.5" fill="#34D399" />
          <circle cx="24" cy="25" r="1" fill="#34D399" />
          
          {/* Wise deep forest organic hood & trailing cape cloak */}
          <path d="M22 42 C22 18, 78 18, 78 42 C78 54, 74 66, 70 95 L30 95 C26 66, 22 54, 22 42Z" fill="#047857" />
          {/* Hood leaf fold structure */}
          <path d="M50 16 L36 38 H64 Z" fill="#059669" />
          <path d="M50 16 L44 38 H56 Z" fill="#10B981" />
          
          {/* Face */}
          <rect x="34" y="42" width="32" height="28" rx="8" fill="#FFFBF0" />
          
          {/* Rosy blushing cheeks */}
          <circle cx="39" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          <circle cx="61" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          
          {/* Wise gentle Ghibli bead eyes */}
          <line x1="39" y1="49" x2="44" y2="49" stroke="#064E3B" strokeWidth="2" strokeLinecap="round" />
          <line x1="56" y1="49" x2="61" y2="49" stroke="#064E3B" strokeWidth="2" strokeLinecap="round" />
          <circle cx="41.5" cy="52.5" r="2.5" fill="#1F2937" />
          <circle cx="42.5" cy="51.2" r="0.8" fill="#FFFFFF" />
          <circle cx="58.5" cy="52.5" r="2.5" fill="#1F2937" />
          <circle cx="59.5" cy="51.2" r="0.8" fill="#FFFFFF" />
          
          {/* Warm peaceful smile */}
          <path d="M45 61 Q50 64 55 61" stroke="#B45309" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          
          {/* Wise sage flowing beard */}
          <path d="M42 66 L50 92 L58 66 Z" fill="#F9FAFB" />
          <path d="M45 66 L50 83 L55 66 Z" fill="#E5E7EB" />
          
          {/* Flowing branch healing staff with a miniature glowing lantern */}
          <line x1="22" y1="45" x2="22" y2="95" stroke="#78350F" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M16 45 Q22 36 25 45" stroke="#047857" strokeWidth="2.5" fill="none" />
          <circle cx="22" cy="41" r="3" fill="#10B981" />
          {/* Tiny copper lantern */}
          <rect x="11" y="52" width="6" height="8" rx="1" fill="#B45309" />
          <circle cx="14" cy="56" r="2" fill="#FDE047" />
          <line x1="14" y1="48" x2="14" y2="52" stroke="#78350F" strokeWidth="1" />
        </svg>
      );

    case 'INFP': // Mediator - Dreamy Girl with dandelion seed & crown of blooms (Arrietty/Sheeta style)
      return (
        <svg className={`${selectedSizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background: Cozy meadow breeze with tiny floating dandelions */}
          <circle cx="50" cy="50" r="46" fill="#ECFDF5" stroke="#34D399" strokeWidth="2.5" />
          <path d="M12 45 Q38 52, 54 40 T88 45" stroke="#D1FAE5" strokeWidth="2" strokeLinecap="round" />
          
          {/* Beautiful flowing long forest-green anime hair with back braid */}
          <path d="M26 44 C20 18, 80 18, 74 44 C72 52, 78 76, 75 95 L25 95 C22 76, 28 52, 26 44Z" fill="#10B981" />
          <path d="M24 44 C26 48, 30 38, 50 40 C70 38, 74 48, 76 44" fill="#059669" />
          {/* Braid hair loops */}
          <circle cx="75" cy="52" r="4.5" fill="#047857" />
          <circle cx="77" cy="62" r="3.5" fill="#047857" />
          
          {/* Garland crown of round orange/yellow marigold flowers */}
          <circle cx="35" cy="27" r="4" fill="#F57C00" />
          <circle cx="43" cy="24" r="3.5" fill="#FBC02D" />
          <circle cx="50" cy="23" r="4" fill="#F57C00" />
          <circle cx="57" cy="24" r="3.5" fill="#FBC02D" />
          <circle cx="65" cy="27" r="4" fill="#F57C00" />
          <line x1="32" y1="28" x2="68" y2="28" stroke="#059669" strokeWidth="1.5" />
          
          {/* Face */}
          <rect x="33" y="42" width="34" height="28" rx="8" fill="#FFF1F2" />
          
          {/* Rosy blushing Ghibli cheeks */}
          <circle cx="39" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          <circle cx="61" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          
          {/* Deep loving, moist sparkling emerald eyes with long lashes */}
          <path d="M37 50 Q41 47 45 49" stroke="#047857" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M55 50 Q59 47 63 49" stroke="#047857" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="41" cy="53.5" r="3.2" fill="#1F2937" />
          <circle cx="42.5" cy="51.8" r="1.1" fill="#FFFFFF" />
          <circle cx="59" cy="53.5" r="3.2" fill="#1F2937" />
          <circle cx="60.5" cy="51.8" r="1.1" fill="#FFFFFF" />
          
          {/* Happy, dreamy mini Ghibli smile */}
          <path d="M46 62 Q50 65 54 62" stroke="#DB2777" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* Yellow country overall style dress */}
          <path d="M28 72 L72 72 L68 95 L32 95 Z" fill="#047857" />
          <path d="M34 72 L50 86 L66 72 Z" fill="#FBBF24" />
          
          {/* Dynamic adorable Ghibli orange butterfly sitting near her face */}
          <path d="M20 54 L25 50 L24 56 Z" fill="#F59E0B" />
          <path d="M23 53 L26 51 L25 55 Z" fill="#EF4444" />
        </svg>
      );

    case 'ENFJ': // Protagonist - Inspired prince with leaf banner (Ashitaka style)
      return (
        <svg className={`${selectedSizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background: Majestic high mountains sunset */}
          <circle cx="50" cy="50" r="46" fill="#ECFDF5" stroke="#34D399" strokeWidth="2.5" />
          <path d="M12 46 L38 32 L60 52 L88 38" stroke="#D1FAE5" strokeWidth="2" strokeLinecap="round" />
          
          {/* Noble Ashitaka-style wind-blown flowing emerald green hair */}
          <circle cx="28" cy="35" r="10" fill="#059669" />
          <circle cx="72" cy="35" r="10" fill="#059669" />
          <path d="M20 38 Q32 18, 50 20 T80 38 Q84 46, 74 44 C68 44, 60 34, 50 36 C40 34, 32 44, 26 44Z" fill="#10B981" />
          <rect x="33" y="30" width="34" height="2.5" fill="#D97706" /> {/* Headband */}
          
          {/* Face */}
          <rect x="33" y="42" width="34" height="30" rx="4" fill="#FEF3C7" />
          
          {/* Blushing honest rosy cheeks */}
          <circle cx="39" cy="58" r="3.5" fill="#FDA4AF" opacity="0.65" />
          <circle cx="61" cy="58" r="3.5" fill="#FDA4AF" opacity="0.65" />
          
          {/* Inspired, determined sparkling leader eyes */}
          <circle cx="41" cy="53" r="3" fill="#1F2937" />
          <circle cx="42" cy="51.5" r="1" fill="#FFFFFF" />
          <circle cx="59" cy="53" r="3" fill="#1F2937" />
          <circle cx="60" cy="51.5" r="1" fill="#FFFFFF" />
          <path d="M37 47 L44 47" stroke="#047857" strokeWidth="1.75" />
          <path d="M56 47 L63 47" stroke="#047857" strokeWidth="1.75" />
          
          {/* Heroic confident grin */}
          <path d="M43 64 Q50 69 57 64" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          
          {/* Active travel tunic with protective leather guard plates */}
          <path d="M26 72 L74 72 L68 95 L32 95 Z" fill="#047857" />
          <polygon points="50,75 56,82 50,91 44,82" fill="#F59E0B" />
          <circle cx="50" cy="82" r="2.5" fill="#10B981" />
          
          {/* Long branch banner/staff held behind him */}
          <line x1="18" y1="42" x2="18" y2="92" stroke="#78350F" strokeWidth="3" />
          <path d="M12 42 Q18 32, 22 42" fill="#34D399" />
        </svg>
      );

    case 'ENFP': // Campaigner - Kiki/Mei style high-spirited explorer with massive head bow
      return (
        <svg className={`${selectedSizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background: Radiant sunny breeze with star sparkle symbols */}
          <circle cx="50" cy="50" r="46" fill="#ECFDF5" stroke="#34D399" strokeWidth="2.5" />
          <path d="M12 45 Q36 34, 52 48 T88 42" stroke="#D1FAE5" strokeWidth="2" strokeLinecap="round" />
          
          {/* High energetic volume locks hair with iconic massive Ghibli red head bow */}
          <path d="M20 44 C15 20, 85 20, 80 44 C72 46, 68 36, 50 38 C32 36, 28 46, 20 44Z" fill="#10B981" />
          {/* Big floppy red travel ribbon/bow on head */}
          <path d="M22 28 Q34 14, 50 25 T78 28 Q50 35, 22 28Z" fill="#EF4444" />
          <circle cx="50" cy="27" r="4.5" fill="#B91C1C" />
          
          {/* Face */}
          <rect x="33" y="42" width="34" height="28" rx="8" fill="#FFFDF5" />
          
          {/* Rosy glowing cheeks */}
          <circle cx="39" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          <circle cx="61" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          
          {/* Excited anime sparkling smiley eyes */}
          <path d="M36 50 Q41 46 45 49" stroke="#047857" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M55 50 Q59 46 63 49" stroke="#047857" strokeWidth="2" fill="none" strokeLinecap="round" />
          <line x1="39" y1="52" x2="43" y2="55" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="43" y1="52" x2="39" y2="55" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="57" y1="52" x2="61" y2="55" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="61" y1="52" x2="57" y2="55" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Absolute classic Ghibli giant laughing open mouth */}
          <path d="M42 60 Q50 71 58 60 Z" fill="#EF4444" />
          <path d="M44 60 Q50 66 56 60 Z" fill="#FFFFFF" /> {/* Cute teeth */}
          
          {/* Adventure straps matching dress */}
          <path d="M26 70 L74 70 L68 95 L32 95 Z" fill="#059669" />
          <line x1="32" y1="70" x2="44" y2="95" stroke="#FBBF24" strokeWidth="3" />
          <line x1="68" y1="70" x2="56" y2="95" stroke="#FBBF24" strokeWidth="3" />
          
          {/* Cozy wind wheel/pinwheel in hand */}
          <line x1="78" y1="58" x2="78" y2="85" stroke="#78350F" strokeWidth="1.5" />
          <polygon points="78,58 82,54 78,50 74,54" fill="#F59E0B" />
        </svg>
      );

    case 'ISTJ': // Logistician - Safe train technician with neat clockwork pocket-watch
      return (
        <svg className={`${selectedSizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background: Organized blueprint guidelines */}
          <circle cx="50" cy="50" r="46" fill="#F0FDFA" stroke="#2DD4BF" strokeWidth="2.5" />
          <path d="M10 50 L90 50 M50 10 L50 90" stroke="#CCFBF1" strokeWidth="1" strokeDasharray="2,2" />
          
          {/* Flat neatly-combed gray-blue hair under industrial technician cap */}
          <path d="M24 38 C24 24, 76 24, 76 38 H24Z" fill="#115E59" />
          <path d="M22 34 L78 34 L72 26 L28 26 Z" fill="#134E4A" /> {/* Cap Visor */}
          
          {/* Face */}
          <rect x="33" y="42" width="34" height="28" rx="6" fill="#F3F4F6" />
          
          {/* Compassionate yet focused rosy cheeks */}
          <circle cx="39" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          <circle cx="61" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          
          {/* Perfect round intellectual spectacles */}
          <circle cx="41" cy="49" r="5" stroke="#1F2937" strokeWidth="1.75" fill="none" />
          <circle cx="59" cy="49" r="5" stroke="#1F2937" strokeWidth="1.75" fill="none" />
          <line x1="46" y1="49" x2="54" y2="49" stroke="#1F2937" strokeWidth="1.75" />
          
          {/* Precise shiny bead eyes */}
          <circle cx="41" cy="49" r="2.5" fill="#111827" />
          <circle cx="42" cy="47.5" r="0.8" fill="#FFFFFF" />
          <circle cx="59" cy="49" r="2.5" fill="#111827" />
          <circle cx="60" cy="47.5" r="0.8" fill="#FFFFFF" />
          
          {/* Calm, serious planning mouth */}
          <line x1="44" y1="62" x2="56" y2="62" stroke="#1F2937" strokeWidth="2.2" strokeLinecap="round" />
          
          {/* Classic wool work vest and navy uniform collar */}
          <path d="M26 68 L74 68 L68 95 L32 95 Z" fill="#0F766E" />
          <path d="M44 68 L50 78 L56 68 Z" fill="#FFFFFF" />
          
          {/* Adorable golden pocket watch in arm */}
          <circle cx="76" cy="74" r="6" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
          <line x1="76" y1="74" x2="76" y2="70" stroke="#D97706" strokeWidth="1" />
          <line x1="76" y1="74" x2="79" y2="74" stroke="#D97706" strokeWidth="1" />
          <circle cx="76" cy="67" r="1.5" fill="#D97706" /> {/* Loop */}
        </svg>
      );

    case 'ISFJ': // Defender - Cozy apothecary girl with magical blue healing herbal flask
      return (
        <svg className={`${selectedSizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background: Gentle clean dewdrops */}
          <circle cx="50" cy="50" r="46" fill="#F0FDFA" stroke="#2DD4BF" strokeWidth="2.5" />
          <circle cx="20" cy="30" r="2.5" fill="#99F6E4" />
          <circle cx="80" cy="40" r="1.5" fill="#99F6E4" />
          
          {/* Cozy village cap & tidy dark teal hair tied in adorable back bun */}
          <path d="M24 38 C24 22, 76 22, 76 38 Z" fill="#0D9488" />
          {/* Red helper cross on apothecary cap */}
          <rect x="43" y="24" width="14" height="4.5" fill="#EF4444" rx="1" />
          <rect x="47.5" y="19" width="5" height="14.5" fill="#EF4444" rx="1" />
          
          {/* Face */}
          <rect x="34" y="42" width="32" height="28" rx="8" fill="#FFF1F2" />
          
          {/* Rosy blushing checks */}
          <circle cx="39" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          <circle cx="61" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          
          {/* Sweet closed friendly eyes with thick lashes */}
          <path d="M38 51 Q41 47 45 49" stroke="#115E59" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M55 51 Q58 47 62 49" stroke="#115E59" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="41.5" cy="53" r="2.5" fill="#115E59" />
          <circle cx="58.5" cy="53" r="2.5" fill="#115E59" />
          
          {/* Sincere caring Ghibli smile */}
          <path d="M45 61 Q50 64 55 61" stroke="#DB2777" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* Tidy field coat with yellow embroidery */}
          <path d="M26 68 L74 68 L68 95 L32 95 Z" fill="#0F766E" />
          
          {/* Adorable ceramic blue herbal flask filled with magical blue potion */}
          <path d="M72 68 C72 68, 83 68, 83 76 C83 83, 72 88, 72 88 C72 88, 61 83, 61 76 C61 68, 72 68, 72 68Z" fill="#67E8F9" stroke="#2563EB" strokeWidth="1.5" />
          <ellipse cx="72" cy="71" rx="4" ry="1.5" fill="#2563EB" />
          <circle cx="72" cy="78" r="2.5" fill="#FFF" />
        </svg>
      );

    case 'ESTJ': // Executive - Traditional workshop head mistress with gold heavy key
      return (
        <svg className={`${selectedSizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background: Clean industrial grid */}
          <circle cx="50" cy="50" r="46" fill="#F0FDFA" stroke="#2DD4BF" strokeWidth="2.5" />
          <line x1="8" y1="36" x2="92" y2="36" stroke="#CCFBF1" strokeWidth="1.5" />
          
          {/* Traditional high bun hair structure with amber pins (very Ghibli boss/matron style) */}
          <path d="M22 38 C22 22, 78 22, 78 38 Z" fill="#1F2937" />
          <circle cx="50" cy="18" r="7.5" fill="#111827" />
          {/* Amber hairpin sticks */}
          <line x1="38" y1="14" x2="62" y2="22" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Face */}
          <rect x="33" y="41" width="34" height="28" rx="6" fill="#FFF4EA" />
          
          {/* Rosy checks */}
          <circle cx="39" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          <circle cx="61" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          
          {/* Direct smart eyes with thick black brows */}
          <path d="M36 47 H43" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M64 47 H57" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="41" cy="52" r="2.8" fill="#1F2937" />
          <circle cx="42" cy="50.5" r="0.8" fill="#FFFFFF" />
          <circle cx="59" cy="52" r="2.8" fill="#1F2937" />
          <circle cx="60" cy="50.5" r="0.8" fill="#FFFFFF" />
          
          {/* Confident manager smile */}
          <path d="M43 62 Q50 66 57 62" stroke="#111827" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          
          {/* Formal vest armor collar suit */}
          <path d="M26 68 L74 68 L68 95 L32 95 Z" fill="#0D9488" />
          <path d="M44 68 L50 78 L56 68 Z" fill="#E2E8F0" />
          
          {/* Heavy brass key of control held on side */}
          <circle cx="76" cy="73" r="3" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
          <line x1="76" y1="76" x2="76" y2="86" stroke="#D97706" strokeWidth="2" />
          <rect x="76" y="80" width="3" height="2" fill="#D97706" />
          <rect x="76" y="83" width="3" height="2" fill="#D97706" />
        </svg>
      );

    case 'ESFJ': // Consul - Baking house mother with steaming fresh bread pie (Osono style)
      return (
        <svg className={`${selectedSizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background: Cozy warm baked kitchen steam */}
          <circle cx="50" cy="50" r="46" fill="#F0FDFA" stroke="#2DD4BF" strokeWidth="2.5" />
          {/* Steam curves */}
          <path d="M40 22 C43 18, 43 14, 40 10" stroke="#CCFBF1" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M50 24 C53 20, 53 16, 50 12" stroke="#CCFBF1" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Voluminous warm hair gathered in braids, tied in buns */}
          <circle cx="28" cy="30" r="10" fill="#0D9488" />
          <circle cx="72" cy="30" r="10" fill="#0D9488" />
          <path d="M24 38 C24 22, 76 22, 76 38 Z" fill="#0F766E" />
          
          {/* Face */}
          <rect x="33" y="42" width="34" height="28" rx="8" fill="#FFF1F2" />
          
          {/* Big happy blushing cheeks */}
          <circle cx="39" cy="58" r="4" fill="#FDA4AF" opacity="0.8" />
          <circle cx="61" cy="58" r="4" fill="#FDA4AF" opacity="0.8" />
          
          {/* Cheerful wide-open laughing eyes */}
          <circle cx="41" cy="51" r="3" fill="#0F766E" />
          <circle cx="42" cy="49" r="1" fill="#FFF" />
          <circle cx="59" cy="51" r="3" fill="#0F766E" />
          <circle cx="60" cy="49" r="1" fill="#FFF" />
          <path d="M37 46 Q41 43 45 46" stroke="#0F766E" strokeWidth="1.5" fill="none" />
          <path d="M55 46 Q59 43 63 46" stroke="#0F766E" strokeWidth="1.5" fill="none" />
          
          {/* Big hospitable happy mouth */}
          <path d="M43 60 Q50 67 57 60 Z" fill="#E11D48" />
          
          {/* Baking apron style tunic */}
          <path d="M26 68 L74 68 L68 95 L32 95 Z" fill="#115E59" />
          <path d="M36 68 L64 68 L60 95 L40 95 Z" fill="#F8FAFC" /> {/* White Apron */}
          
          {/* Steaming hot fresh golden-baked loaf pie held proudly */}
          <path d="M38 78 L62 78 L58 72 L42 72 Z" fill="#D97706" />
          <ellipse cx="50" cy="72" rx="10" ry="3" fill="#F59E0B" />
          <circle cx="50" cy="67" r="1.5" fill="#EF4444" /> {/* Cherry on top */}
        </svg>
      );

    case 'ISTP': // Virtuoso - Plane factory engine mechanic with grease smudge and spanner tool
      return (
        <svg className={`${selectedSizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background: Meadow sun of aviation field */}
          <circle cx="50" cy="50" r="46" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2.5" />
          {/* Propeller blade behind hat */}
          <path d="M12 28 Q40 38, 50 12 L45 10 Z" fill="#FFF" opacity="0.6" stroke="#FEF3C7" />
          
          {/* Industrial protective engine worker yellow helmet */}
          <path d="M24 38 L76 38 L68 22 L32 22 Z" fill="#D97706" />
          <path d="M20 38 L80 38 L80 41 L20 41 Z" fill="#B45309" />
          
          {/* Face */}
          <rect x="33" y="42" width="34" height="28" rx="4" fill="#FFFBF0" />
          
          {/* Grease smudge on cheeks (extremely Ghibli grease monkey style!) */}
          <rect x="34" y="58" width="6" height="3" rx="1" fill="#4B5563" transform="rotate(-15 34 58)" />
          
          {/* Rosy blushing checks */}
          <circle cx="39" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          <circle cx="61" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          
          {/* Retro circular aviator/welding goggles on forehead */}
          <rect x="34" y="47" width="32" height="9" rx="2" fill="#93C5FD" opacity="0.8" stroke="#1E3A8A" strokeWidth="1.75" />
          <circle cx="41" cy="51.5" r="2.5" fill="#1E3A8A" />
          <circle cx="59" cy="51.5" r="2.5" fill="#1E3A8A" />
          <line x1="47" y1="51.5" x2="53" y2="51.5" stroke="#1E3A8A" strokeWidth="1.5" />
          
          {/* Smug Ghibli grin */}
          <path d="M45 63 Q50 66 54 62" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
          
          {/* Heavy mechanic dungarees overalls */}
          <path d="M26 68 L74 68 L68 95 L32 95 Z" fill="#78350F" />
          {/* Yellow straps */}
          <rect x="32" y="68" width="5" height="12" fill="#F59E0B" />
          <rect x="63" y="68" width="5" height="12" fill="#F59E0B" />
          
          {/* Holding an iron spanner helper wrench */}
          <line x1="76" y1="55" x2="76" y2="82" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          <circle cx="76" cy="54" r="4" fill="#F1F5F9" stroke="#475569" strokeWidth="1.5" />
          <rect x="74" y="54" width="4" height="1.5" fill="#475569" />
        </svg>
      );

    case 'ISFP': // Adventurer - Watercolor landscape artist with cozy striped sweater & palette
      return (
        <svg className={`${selectedSizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background: Sunny dandelion meadow wind */}
          <circle cx="50" cy="50" r="46" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2.5" />
          <path d="M12 45 Q36 52, 54 40 T88 45" stroke="#FEF3C7" strokeWidth="2" strokeLinecap="round" />
          
          {/* Artistic warm dark brown beret cap (Ghibli illustrator style) */}
          <ellipse cx="44" cy="26" rx="16" ry="7" fill="#78350F" />
          <path d="M28 32 C28 20, 68 20, 68 32 L64 38 L32 38 Z" fill="#92400E" />
          <line x1="44" y1="19" x2="44" y2="22" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
          
          {/* Face */}
          <rect x="33" y="41" width="34" height="28" rx="8" fill="#FFFBF2" />
          
          {/* Soft blushing cheeks */}
          <circle cx="39" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          <circle cx="61" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          
          {/* Large moist dreamy hazel eyes */}
          <circle cx="41" cy="51" r="3.2" fill="#451A03" />
          <circle cx="42.5" cy="49.5" r="1.1" fill="#FFFFFF" />
          <circle cx="59" cy="51" r="3.2" fill="#451A03" />
          <circle cx="60.5" cy="49.5" r="1.1" fill="#FFFFFF" />
          <path d="M38 46 Q41 44 44 46" stroke="#451A03" strokeWidth="1.5" fill="none" />
          <path d="M56 46 Q59 44 62 46" stroke="#451A03" strokeWidth="1.5" fill="none" />
          
          {/* Soft happy quiet child smile */}
          <path d="M45 61 Q50 64 55 61" stroke="#F43F5E" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          
          {/* Warm colorful mustard-yellow sweater and creative blue overalls */}
          <path d="M26 66 L74 66 L68 95 L32 95 Z" fill="#D97706" />
          <path d="M35 66 L40 95 L60 95 L65 66 Z" fill="#3B82F6" /> {/* Blue Overalls */}
          
          {/* Classic small wooden color artist paints palette */}
          <circle cx="75" cy="74" r="8.5" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.25" />
          <circle cx="72" cy="71" r="2.2" fill="#EF4444" /> {/* Red Spot */}
          <circle cx="78" cy="72" r="1.8" fill="#3B82F6" /> {/* Blue Spot */}
          <circle cx="75" cy="78" r="2" fill="#10B981" /> {/* Green Spot */}
          <circle cx="75" cy="74" r="1" fill="#78350F" />
        </svg>
      );

    case 'ESTP': // Entrepreneur - Air Force Pilot Racer with furry leather jacket
      return (
        <svg className={`${selectedSizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background: Radiant airfield sky wind */}
          <circle cx="50" cy="50" r="46" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2.5" />
          <path d="M12 45 Q40 55, 60 35 T88 45" stroke="#FEF3C7" strokeWidth="2" strokeLinecap="round" />
          
          {/* Spiky amber-brown active racer wind-blown hair */}
          <path d="M20 38 L28 16 L38 24 L48 10 L58 24 L68 14 L76 38 H80 Z" fill="#D97706" />
          <path d="M24 38 L76 38 L68 44 L32 44 Z" fill="#B45309" />
          
          {/* Face */}
          <rect x="33" y="42" width="34" height="28" rx="6" fill="#FFFBEB" />
          
          {/* Active rosy checks */}
          <circle cx="39" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          <circle cx="61" cy="57" r="3.5" fill="#FDA4AF" opacity="0.65" />
          
          {/* Cool retro brown pilot sunglasses pushed high on forehead */}
          <path d="M31 45 H69 L64 52 H36 Z" fill="#1E2937" />
          <line x1="31" y1="46" x2="69" y2="46" stroke="#FBBF24" strokeWidth="2" />
          {/* Real reflective gold glare lines */}
          <line x1="37" y1="48" x2="41" y2="51" stroke="#FFF" strokeWidth="1" />
          <line x1="59" y1="48" x2="63" y2="51" stroke="#FFF" strokeWidth="1" />
          
          {/* Brave lively Ghibli grin */}
          <path d="M43 62 Q50 66 57 62" stroke="#EA580C" strokeWidth="2.2" strokeLinecap="round" />
          
          {/* Cozy vintage Ghibli leather flight jacket with furry sheepskin cream collar */}
          <path d="M26 68 L74 68 L70 95 L30 95 Z" fill="#78350F" />
          {/* Furry sheepskin neck collars (highly detailed) */}
          <path d="M34 68 C34 76, 44 75, 47 84 C48 76, 42 68, 34 68 Z" fill="#F8FAFC" />
          <path d="M66 68 C66 76, 56 75, 53 84 C52 76, 58 68, 66 68 Z" fill="#F8FAFC" />
          
          {/* Golden flight chest buckle */}
          <rect x="48" y="80" width="4" height="4" fill="#F59E0B" rx="1" />
        </svg>
      );

    case 'ESFP': // Entertainer - Festival street performer girl with ribbon buns & tambourine
      return (
        <svg className={`${selectedSizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background: Star flower confetti particles */}
          <circle cx="50" cy="50" r="46" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2.5" />
          <polygon points="18,36 21,38 19,42 16,39" fill="#EF4444" />
          <polygon points="82,32 85,34 83,38 80,35" fill="#FBBF24" />
          
          {/* Twin voluminous hair loop buns with gorgeous red roses (Kiki style) */}
          <circle cx="28" cy="28" r="11" fill="#D97706" />
          <circle cx="72" cy="28" r="11" fill="#D97706" />
          <path d="M24 36 C24 20, 76 20, 76 36 Z" fill="#B45309" />
          <circle cx="30" cy="20" r="4" fill="#EF4444" />
          <circle cx="70" cy="20" r="4" fill="#EF4444" />
          
          {/* Face */}
          <rect x="33" y="42" width="34" height="28" rx="8" fill="#FFF5F5" />
          
          {/* Exciting rosy cheeks */}
          <circle cx="39" cy="57" r="4" fill="#FDA4AF" opacity="0.8" />
          <circle cx="61" cy="57" r="4" fill="#FDA4AF" opacity="0.8" />
          
          {/* Bright enthusiastic Ghibli wink eyes */}
          <path d="M35 52 Q39 49 43 51" stroke="#451A03" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="58" cy="51" r="3.2" fill="#451A03" />
          <circle cx="59.5" cy="49.5" r="1.1" fill="#FFF" />
          
          {/* Giant laughing open mouth */}
          <path d="M42 61 Q50 72 58 61 Z" fill="#EF4444" />
          {/* Inner tongue */}
          <path d="M45 66 Q50 69 55 66 Z" fill="#FDA4AF" />
          
          {/* Bright active performance dress straps */}
          <path d="M26 68 L74 68 L68 95 L32 95 Z" fill="#EF4444" />
          
          {/* Gold tambourine with dynamic wind lines surrounding her */}
          <circle cx="82" cy="74" r="8" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
          <circle cx="82" cy="74" r="5" fill="#FFF" />
          <rect x="79" y="64" width="6" height="3" fill="#EF4444" rx="1" />
        </svg>
      );

    default: // Cute generic anime character head placeholder
      return (
        <svg className={`${selectedSizeClass} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#F9FAFB" stroke="#D1D5DB" strokeWidth="2.5" />
          
          {/* Soft messy hair */}
          <path d="M25 40 C20 22, 80 22, 75 40 Z" fill="#9CA3AF" />
          {/* Face */}
          <rect x="34" y="42" width="32" height="28" rx="8" fill="#FFF5F5" />
          
          {/* Cute moist eyes */}
          <circle cx="41" cy="51" r="3" fill="#4B5563" />
          <circle cx="42" cy="49" r="1" fill="#FFF" />
          <circle cx="59" cy="51" r="3" fill="#4B5563" />
          <circle cx="60" cy="49" r="1" fill="#FFF" />
          
          {/* Cute cheeks */}
          <circle cx="39" cy="57" r="3" fill="#FDA4AF" opacity="0.6" />
          <circle cx="61" cy="57" r="3" fill="#FDA4AF" opacity="0.6" />
          
          {/* Happy cute line smile */}
          <path d="M45 61 Q50 64 55 61" stroke="#4B5563" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      );
  }
}
