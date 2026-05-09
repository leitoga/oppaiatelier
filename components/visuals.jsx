/* global React */
// ===== Shared visual bits: logo, mascot, ornaments =====

const Logo = ({ size = 1, className = '' }) => (
  <div className={className} style={{ display: 'inline-flex' }}>
    <img src="assets/logo.png" alt="Oppai Atelier" style={{ height: 84 * size, width: 'auto', filter: 'drop-shadow(0 4px 20px rgba(236,27,126,.5))' }} />
  </div>
);

// Hand-drawn pink star
const Star = ({ size = 32, className = '', style = {}, fill = false }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3 L19.5 11.5 L28.5 12.2 L21.7 18.3 L23.8 27 L16 22.5 L8.2 27 L10.3 18.3 L3.5 12.2 L12.5 11.5 Z"
      stroke="#ec1b7e" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"
      fill={fill ? '#ec1b7e' : 'none'}
      style={{ filter: 'drop-shadow(0 0 6px rgba(236,27,126,.4))' }} />
  </svg>
);

// Bear mascot — three expression variants from the brand
const BearMascot = ({ size = 80, expression = 'cute', color = '#ec1b7e' }) => {
  // expression: 'cute' (closed-eye smile), 'angry' (^^), 'happy' (>_<)
  const eyes = {
    cute: <><path d="M28 38 Q34 32, 40 38" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M60 38 Q66 32, 72 38" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/></>,
    angry: <><path d="M26 36 L42 42" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <path d="M58 42 L74 36" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/></>,
    happy: <><path d="M28 35 L42 45 M42 35 L28 45" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <path d="M58 35 L72 45 M72 35 L58 45" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/></>
  };
  const mouth = {
    cute: <path d="M42 56 Q50 64, 58 56" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>,
    angry: <path d="M44 60 L50 54 L56 60" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
    happy: <path d="M40 54 Q50 66, 60 54" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  };
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* ears */}
      <circle cx="22" cy="22" r="11" stroke={color} strokeWidth="2.5" fill="none"/>
      <circle cx="78" cy="22" r="11" stroke={color} strokeWidth="2.5" fill="none"/>
      {/* head */}
      <ellipse cx="50" cy="52" rx="34" ry="30" stroke={color} strokeWidth="2.5" fill="none"/>
      {/* cheek blush */}
      <circle cx="20" cy="58" r="5" fill={color} opacity=".5"/>
      <circle cx="80" cy="58" r="5" fill={color} opacity=".5"/>
      {eyes[expression]}
      {mouth[expression]}
    </svg>
  );
};

// Brushstroke underline (animatable — used as accent under headings)
const BrushUnderline = ({ width = 200, color = '#ec1b7e', style = {} }) => (
  <svg width={width} height="14" viewBox="0 0 200 14" preserveAspectRatio="none" style={style}>
    <path d="M2 8 Q 30 2, 60 6 T 120 5 T 180 7 L 198 9 L 195 12 Q 160 11, 120 11 T 60 12 T 5 11 Z"
      fill={color} />
  </svg>
);

// Brush splash decoration
const BrushSplash = ({ size = 200, color = '#ec1b7e', opacity = .8, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={style} fill={color} opacity={opacity}>
    <path d="M40 60 L80 50 Q90 40, 100 50 L130 45 Q140 50, 145 60 L170 70 Q175 80, 165 90 L155 100 L170 120 Q165 130, 155 130 L140 135 L130 155 Q120 160, 110 150 L90 155 Q80 150, 75 140 L60 145 Q50 140, 50 125 L40 115 Q30 105, 35 95 L30 80 Q35 65, 40 60 Z" />
    {/* Splatter dots */}
    <circle cx="20" cy="40" r="3"/>
    <circle cx="180" cy="55" r="2"/>
    <circle cx="180" cy="170" r="4"/>
    <circle cx="25" cy="160" r="2.5"/>
    <circle cx="100" cy="20" r="2"/>
  </svg>
);

// Diagonal brush stroke (accent behind text)
const BrushStripe = ({ width = 400, height = 80, color = '#ec1b7e', style = {} }) => (
  <svg width={width} height={height} viewBox="0 0 400 80" preserveAspectRatio="none" style={style} fill={color}>
    <path d="M5 30 Q 50 10, 120 18 T 250 22 T 380 28 L 395 50 Q 350 65, 280 58 T 150 62 T 10 55 Z"/>
  </svg>
);

// Vertical Japanese decorative text
const JpVertical = ({ children, color = 'rgba(255,255,255,.45)', size = 14, style = {} }) => (
  <div className="jp" style={{
    writingMode: 'vertical-rl',
    textOrientation: 'mixed',
    color,
    fontSize: size,
    letterSpacing: '.5em',
    ...style
  }}>{children}</div>
);

// Sparkle — small animated SVG
const Sparkle = ({ size = 20, color = '#ec1b7e', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={style} fill={color}>
    <path d="M12 2 L13.5 9 L20 10 L13.5 11 L12 18 L10.5 11 L4 10 L10.5 9 Z"/>
    <path d="M19 16 L19.7 18.3 L22 19 L19.7 19.7 L19 22 L18.3 19.7 L16 19 L18.3 18.3 Z" opacity=".7"/>
  </svg>
);

// Service icons (sword, shield, paint brush, etc.) — drawn line style matching brand
const Icon = ({ name, size = 24, color = '#ec1b7e' }) => {
  const icons = {
    sword: <><path d="M14 4 L20 4 L20 10 L11 19 L7 19 L7 15 Z M5 21 L7 19 M9 17 L11 15"/></>,
    shield: <><path d="M12 3 L20 6 V12 Q20 18, 12 21 Q4 18, 4 12 V6 Z"/></>,
    cube: <><path d="M12 3 L21 8 V16 L12 21 L3 16 V8 Z M12 3 V21 M3 8 L21 8 M3 16 L21 16"/></>,
    brush: <><path d="M14 4 L20 10 L11 19 L5 13 Z M5 13 L3 21 L11 19"/></>,
    star: <><path d="M12 3 L14.5 9 L21 9.5 L16 14 L17.5 21 L12 17.5 L6.5 21 L8 14 L3 9.5 L9.5 9 Z"/></>,
    spark: <><path d="M12 3 V8 M12 16 V21 M3 12 H8 M16 12 H21 M5.5 5.5 L8 8 M16 16 L18.5 18.5 M18.5 5.5 L16 8 M8 16 L5.5 18.5"/></>,
    rocket: <><path d="M12 3 Q17 6, 17 12 V18 L12 21 L7 18 V12 Q7 6, 12 3 Z M9 12 H15 M5 17 L7 15 M19 17 L17 15"/></>,
    package: <><path d="M3 7 L12 3 L21 7 V17 L12 21 L3 17 Z M3 7 L12 11 L21 7 M12 11 V21"/></>,
    truck: <><path d="M2 7 H14 V17 H2 Z M14 10 H19 L22 13 V17 H14 Z M6 17 A2 2 0 1 0 6 17.1 M18 17 A2 2 0 1 0 18 17.1"/></>,
    helmet: <><path d="M5 14 Q5 6, 12 6 T19 14 V18 H5 Z M5 14 H19 M9 18 V20 M15 18 V20"/></>,
    pencil: <><path d="M3 21 L7 17 L17 7 L21 11 L11 21 Z M15 9 L19 13"/></>,
    check: <><path d="M5 13 L9 17 L19 7"/></>,
    arrow: <><path d="M5 12 H19 M13 6 L19 12 L13 18"/></>,
    arrowDown: <><path d="M12 5 V19 M6 13 L12 19 L18 13"/></>,
    play: <><path d="M8 5 V19 L19 12 Z"/></>,
    plus: <><path d="M12 5 V19 M5 12 H19"/></>,
    bolt: <><path d="M13 3 L5 14 H11 L9 21 L17 10 H11 Z"/></>,
    fire: <><path d="M12 3 Q14 8, 18 10 Q20 14, 17 18 Q14 21, 12 21 Q10 21, 7 18 Q4 14, 6 10 Q9 9, 10 6 Q11 4, 12 3 Z"/></>,
    heart: <><path d="M12 21 Q4 15, 4 9 Q4 5, 8 5 Q11 5, 12 8 Q13 5, 16 5 Q20 5, 20 9 Q20 15, 12 21 Z"/></>,
    chat: <><path d="M4 5 H20 V16 H13 L8 20 V16 H4 Z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill={color}/></>,
    whatsapp: <><path d="M3 21 L4.5 16 Q3 13, 3 11 Q3 5, 9 3.5 T 18 7 Q21 11, 19 16 T 11 20 Q9 20, 7 19 Z M8 11 Q8 14, 11 16 Q12 16.5, 13 16 L15 14.5 L17 16 L17 18 Q14 18, 11 17 T 8 11 Z"/></>,
    tiktok: <><path d="M14 4 V14 Q14 17, 11 17 T 8 14 T 11 11 V13 Q9.5 13, 9.5 14.5 T 11 16 T 12.5 14.5 V4 H 15 Q 15 7, 18 7 V9 Q16 9, 14 7.5"/></>,
    mail: <><path d="M3 6 H21 V18 H3 Z M3 6 L12 13 L21 6"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  );
};

// Brushy heading (the trademark Oppai look — caps, white, with one word painted pink)
const BrushHeading = ({ children, size = 64, style = {} }) => (
  <h2 className="bangers" style={{
    fontSize: size,
    lineHeight: 1.05,
    margin: 0,
    color: '#fff',
    letterSpacing: '.02em',
    textTransform: 'uppercase',
    ...style
  }}>{children}</h2>
);

// Painted accent — wraps a word in a pink brush blob
const Painted = ({ children, color = '#ec1b7e', rotate = 0 }) => (
  <span style={{
    position: 'relative',
    display: 'inline-block',
    padding: '0 .15em',
    color: '#fff',
    transform: `rotate(${rotate}deg)`,
  }}>
    <svg
      style={{ position: 'absolute', inset: '-.05em -.15em', width: 'calc(100% + .3em)', height: 'calc(100% + .1em)', zIndex: -1 }}
      viewBox="0 0 100 30" preserveAspectRatio="none"
    >
      <path d="M2 16 Q 6 4, 18 7 T 38 5 T 60 8 T 82 4 T 98 12 Q 100 22, 86 24 T 60 26 T 38 22 T 16 26 T 2 20 Z"
        fill={color}/>
    </svg>
    {children}
  </span>
);

// Make available globally
Object.assign(window, { Logo, Star, BearMascot, BrushUnderline, BrushSplash, BrushStripe, JpVertical, Sparkle, Icon, BrushHeading, Painted });
