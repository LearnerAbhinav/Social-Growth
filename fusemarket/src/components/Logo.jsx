import React from 'react';

export default function Logo({ size = 'md', showText = true }) {
  const sizes = {
    sm: { icon: 36, text: 'text-lg' },
    md: { icon: 48, text: 'text-xl' },
    lg: { icon: 60, text: 'text-2xl' },
  };
  const { icon, text } = sizes[size] || sizes.md;

  return (
    <div className="flex items-center gap-3">
      {/* SVG Logo: two overlapping profile heads with chain icon */}
      <svg width={icon} height={icon} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* White circle background */}
        <circle cx="30" cy="30" r="30" fill="white" />

        {/* Navy head (left/back) */}
        <g>
          <circle cx="24" cy="22" r="8" fill="#141652" />
          <path d="M10 44c0-7.732 6.268-14 14-14s14 6.268 14 14" fill="#141652" />
        </g>

        {/* Maroon/dark-red head (right/front) */}
        <g>
          <circle cx="36" cy="22" r="8" fill="#8B1A3A" />
          <path d="M22 44c0-7.732 6.268-14 14-14s14 6.268 14 14" fill="#8B1A3A" />
        </g>

        {/* Chain/paperclip icon in center */}
        <g transform="translate(22, 28)">
          <rect x="0" y="2" width="7" height="3" rx="1.5" fill="white" stroke="#E91467" strokeWidth="0.5" />
          <rect x="9" y="2" width="7" height="3" rx="1.5" fill="white" stroke="#E91467" strokeWidth="0.5" />
          <line x1="7" y1="3.5" x2="9" y2="3.5" stroke="#E91467" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-black ${text} text-navy tracking-tight`}>
            Fuse<span className="text-pink">Market</span>
          </span>
          <span className="text-xs font-medium text-gray-500 tracking-widest uppercase mt-0.5">
            Growth Agency
          </span>
        </div>
      )}
    </div>
  );
}
