import React from 'react';

/**
 * Inline SVG of the Synapse Sentinel brain+shield mark.
 * The icon uses currentColor so it adapts to any text color context,
 * but accepts an explicit `color` prop for the terracotta version.
 */
export function SynapseSentinelIcon({
  size = 40,
  color = '#AA5022',
  className = '',
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-label="Synapse Sentinel"
      fill="none"
    >
      {/* Shield outline */}
      <path
        d="M32 4 L58 14 L58 40 Q58 58 32 66 Q6 58 6 40 L6 14 Z"
        stroke={color}
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Vertical center divider */}
      <line x1="32" y1="5" x2="32" y2="65" stroke={color} strokeWidth="2.2" />

      {/* LEFT: Brain — organic, extends beyond shield left edge */}
      <path
        d="M30 16
           Q30 9 23 9
           Q13 9 11 18
           Q4 18 4 27
           Q4 37 14 39
           Q12 46 17 52
           Q21 58 29 55
           Q32 53 32 47"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Brain fold arcs */}
      <path d="M11 23 Q18 19 27 23" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M9 33 Q16 29 25 33"  stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M14 47 Q20 43 28 47" stroke={color} strokeWidth="2" strokeLinecap="round" />

      {/* RIGHT: Circuit traces */}
      <circle cx="32" cy="35" r="2.2" fill={color} />
      {/* Trace upper-right */}
      <line x1="33" y1="33" x2="44" y2="23" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="46" cy="21" r="4" fill={color} />
      {/* Trace right */}
      <line x1="34" y1="35" x2="49" y2="35" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="52" cy="35" r="4" fill={color} />
      {/* Trace lower-right */}
      <line x1="33" y1="37" x2="44" y2="48" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="46" cy="50" r="4" fill={color} />
    </svg>
  );
}
