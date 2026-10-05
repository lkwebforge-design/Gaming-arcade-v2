import React from 'react';

const glow = { filter: 'drop-shadow(0 0 10px rgba(34,211,238,.65))' };

export const CharacterSurfaceLayer: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_45%,rgba(124,58,237,.18),transparent_42%),linear-gradient(135deg,#0b1022,#070712)]">
    <div className="absolute inset-0 cyber-grid opacity-70" />
    <div className="relative h-[82%] aspect-[.62] max-w-[70%]">
      <div className="absolute left-1/2 top-[4%] -translate-x-1/2 w-[28%] aspect-square rounded-full bg-gradient-to-br from-neutral-200 via-neutral-500 to-neutral-900 shadow-[0_0_50px_rgba(168,85,247,.22)]" />
      <div className="absolute left-[22%] top-[27%] w-[56%] h-[47%] rounded-[45%_45%_28%_28%] bg-gradient-to-br from-[#27314b] via-[#111827] to-[#05050d] border border-white/10" />
      <div className="absolute left-[28%] top-[30%] w-[44%] h-[9%] rounded-full bg-gradient-to-r from-cyan-400/20,transparent] border border-cyan-400/30" />
      <div className="absolute left-[5%] top-[30%] w-[90%] h-[8%] rounded-full border border-white/10 bg-white/[.02] rotate-[-8deg]" />
      <div className="absolute left-[5%] top-[55%] w-[90%] h-[8%] rounded-full border border-white/10 bg-white/[.02] rotate-[8deg]" />
      <div className="absolute left-[25%] bottom-[2%] w-[18%] h-[32%] rounded-[45%] bg-gradient-to-b from-[#1f2937] to-[#070712] rotate-[8deg]" />
      <div className="absolute right-[25%] bottom-[2%] w-[18%] h-[32%] rounded-[45%] bg-gradient-to-b from-[#1f2937] to-[#070712] rotate-[-8deg]" />
      <div className="absolute left-[11%] top-[34%] w-[17%] h-[9%] rounded-full bg-[#161d31] rotate-[12deg]" />
      <div className="absolute right-[11%] top-[34%] w-[17%] h-[9%] rounded-full bg-[#161d31] rotate-[-12deg]" />
      <div className="absolute inset-x-[35%] top-[44%] h-[28%] border-x border-white/10" />
      <div className="absolute left-1/2 top-[24%] -translate-x-1/2 font-mono text-[9px] tracking-[.4em] text-neutral-500">AETHERIA // SUBJECT 07</div>
    </div>
  </div>
);

const Anatomy: React.FC<{mode:'heart'|'brain'|'skeleton'}> = ({mode}) => (
  <div className="absolute inset-0 flex items-center justify-center bg-[#050816]/95">
    <div className="absolute inset-0 cyber-grid opacity-60" />
    <div className="relative h-[82%] aspect-[.62]">
      <div className="absolute inset-x-[18%] top-[18%] bottom-[8%] rounded-[40%] border border-cyan-400/30" />
      {mode === 'heart' && <><div className="absolute left-1/2 top-[36%] -translate-x-1/2 w-[24%] aspect-square rotate-45 rounded-[35%] bg-rose-500/70" style={glow}/><div className="absolute left-1/2 top-[28%] -translate-x-1/2 w-[2px] h-[48%] bg-rose-300/70" /></>}
      {mode === 'brain' && <><div className="absolute left-1/2 top-[13%] -translate-x-1/2 w-[30%] aspect-square rounded-[45%] border-2 border-cyan-300/80" style={glow}/><svg className="absolute inset-[15%] w-[70%] h-[55%]" viewBox="0 0 100 100"><path d="M15 55 C25 20 45 35 50 15 C55 35 78 18 86 50 C75 68 58 62 50 85 C40 65 25 72 15 55Z" fill="none" stroke="#67e8f9" strokeWidth="1.4" strokeDasharray="3 3"/></svg></>}
      {mode === 'skeleton' && <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 150" fill="none"><circle cx="50" cy="24" r="13" stroke="#c084fc" strokeWidth="1.5"/><path d="M50 37v55M35 50l15 12 15-12M35 50l-12 32M65 50l12 32M40 92l-8 42M60 92l8 42" stroke="#c084fc" strokeWidth="2"/><path d="M37 68h26M42 78h16" stroke="#e9d5ff" strokeWidth="1"/></svg>}
      <div className="absolute left-1/2 bottom-[8%] -translate-x-1/2 font-mono text-[9px] tracking-[.35em] text-cyan-300">LIVE SENSOR ARRAY</div>
    </div>
  </div>
);

export const CharacterBiometricCoreLayer: React.FC = () => <Anatomy mode="heart" />;
export const CharacterSynapseLayer: React.FC = () => <Anatomy mode="brain" />;
export const CharacterKinematicSkeletonLayer: React.FC = () => <Anatomy mode="skeleton" />;