import type { SVGProps } from "react";

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SceneToddler(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 300 260" {...props}>
      <g {...strokeProps}>
        {/* toy whiteboard */}
        <rect x="50" y="60" width="110" height="80" rx="4" />
        <line x1="70" y1="85" x2="140" y2="85" />
        <line x1="70" y1="100" x2="130" y2="100" />
        <line x1="70" y1="115" x2="120" y2="115" />
        {/* toddler */}
        <circle cx="210" cy="110" r="22" />
        {/* pigtails */}
        <path d="M188 100 q-8 6 -4 18" />
        <path d="M232 100 q8 6 4 18" />
        <path d="M200 105 h4 M216 105 h4" />
        <path d="M204 120 q6 4 12 0" />
        {/* body */}
        <path d="M210 132 v50" />
        <path d="M210 150 l-20 20" />
        <path d="M210 150 l22 12" />
        <path d="M210 182 l-14 30" />
        <path d="M210 182 l14 30" />
        {/* marker */}
        <line x1="232" y1="162" x2="252" y2="152" />
        {/* stand */}
        <line x1="105" y1="140" x2="90" y2="220" />
        <line x1="105" y1="140" x2="120" y2="220" />
        <line x1="80" y1="220" x2="130" y2="220" />
      </g>
    </svg>
  );
}

export function SceneChild(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 300 260" {...props}>
      <g {...strokeProps}>
        {/* small chalkboard */}
        <rect x="20" y="40" width="90" height="70" rx="3" />
        <path d="M30 55 h60 M30 68 h50 M30 80 h55" />
        {/* teacher child */}
        <circle cx="140" cy="80" r="18" />
        <path d="M124 74 q-2 -10 6 -14 q8 -4 20 0 q8 4 6 14" />
        <path d="M140 98 v45" />
        <path d="M140 115 l-16 15" />
        <path d="M140 115 l18 10" />
        <path d="M158 125 l14 -8" />
        <path d="M140 143 l-10 30" />
        <path d="M140 143 l10 30" />
        {/* two friends sitting */}
        <circle cx="215" cy="140" r="14" />
        <path d="M215 154 v20 M203 174 h24" />
        <path d="M203 174 l-6 20 M227 174 l6 20" />
        <circle cx="260" cy="140" r="14" />
        <path d="M260 154 v20 M248 174 h24" />
        <path d="M248 174 l-6 20 M272 174 l6 20" />
      </g>
    </svg>
  );
}

export function SceneStudent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 300 260" {...props}>
      <g {...strokeProps}>
        {/* whiteboard */}
        <rect x="14" y="30" width="130" height="90" rx="3" />
        <path d="M28 50 h100 M28 65 h80 M28 80 h90 M28 95 h70" />
        {/* young woman in saree */}
        <circle cx="180" cy="80" r="20" />
        {/* long hair bun */}
        <path d="M162 72 q-4 -14 8 -20 q10 -6 24 -2 q14 6 12 22" />
        <circle cx="200" cy="66" r="5" />
        {/* body with saree drape */}
        <path d="M180 100 v70" />
        <path d="M162 110 q18 -6 36 0 l16 -4" />
        <path d="M180 130 l-24 18" />
        <path d="M180 130 l24 12" />
        <path d="M180 170 l-14 40" />
        <path d="M180 170 l14 40" />
        {/* saree pleats */}
        <path d="M170 172 l-6 40 M190 172 l6 40 M180 172 v40" />
        {/* three seated students */}
        <circle cx="235" cy="150" r="10" />
        <path d="M235 160 v14 M225 174 h20" />
        <circle cx="260" cy="150" r="10" />
        <path d="M260 160 v14 M250 174 h20" />
        <circle cx="285" cy="150" r="10" />
        <path d="M285 160 v14 M275 174 h20" />
      </g>
    </svg>
  );
}

export function SceneEducator(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 300 260" {...props}>
      <g {...strokeProps}>
        {/* large whiteboard */}
        <rect x="10" y="20" width="200" height="130" rx="3" />
        {/* diagram: nodes and edges */}
        <circle cx="45" cy="60" r="7" />
        <circle cx="100" cy="45" r="7" />
        <circle cx="160" cy="70" r="7" />
        <circle cx="70" cy="110" r="7" />
        <circle cx="140" cy="120" r="7" />
        <line x1="52" y1="60" x2="93" y2="47" />
        <line x1="107" y1="47" x2="153" y2="68" />
        <line x1="45" y1="67" x2="65" y2="105" />
        <line x1="75" y1="112" x2="135" y2="120" />
        <line x1="145" y1="115" x2="158" y2="77" />
        <line x1="108" y1="50" x2="138" y2="115" />
        <path d="M175 30 h30 M175 42 h25 M175 54 h30" />
        {/* educator */}
        <circle cx="250" cy="80" r="20" />
        <path d="M232 72 q-2 -16 10 -20 q12 -4 26 2 q10 6 8 20" />
        <circle cx="268" cy="70" r="4" />
        <path d="M250 100 v60" />
        <path d="M232 112 q18 -8 36 0" />
        <path d="M250 130 l-20 22" />
        <path d="M250 130 l22 14" />
        {/* marker pointing to board */}
        <line x1="272" y1="144" x2="200" y2="120" />
        <path d="M195 118 l6 4 l-2 -7 z" fill="currentColor" />
        <path d="M250 160 l-12 40" />
        <path d="M250 160 l12 40" />
      </g>
    </svg>
  );
}
