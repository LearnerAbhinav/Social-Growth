import React from 'react';

export default function Logo({ size = 'md', showText = false, light = false }) {
  const sizes = {
    xs: 'h-7',
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-20',
  };

  return (
    <div className="flex items-center gap-2.5 select-none">
      <img
        src="/logo.png"
        alt="Fuse Market Logo"
        className={`${sizes[size] || sizes.md} w-auto object-contain`}
        draggable={false}
      />
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-black text-lg tracking-tight ${light ? 'text-white' : 'text-[#8B2A4A]'}`}>
            Fuse Market
          </span>
          <span className={`text-[10px] font-medium tracking-widest uppercase ${light ? 'text-white/60' : 'text-gray-500'}`}>
            Growth Partner
          </span>
        </div>
      )}
    </div>
  );
}
