import React from 'react';
import { ArrowDown, Play, Radio, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export const HeroSection: React.FC<{onOpenReel:()=>void}> = ({onOpenReel}) => (
<section className="relative min-h-screen flex items-center overflow-hidden bg-[#070712]">
  <div className="absolute inset-0 cyber-grid opacity-50"/>
  <div className="absolute -right-40 top-20 w-[620px] h-[620px] rounded-full bg-purple-600/20 blur-[130px]"/>
  <div className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]"/>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#070712_82%)]"/>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
    <div className="max-w-5xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1.5 font-mono text-[10px] tracking-[.25em] text-cyan-300 uppercase">
        <Radio className="w-3.5 h-3.5 animate-pulse"/> Next-generation interactive worlds
      </div>
      <h1 className="mt-7 font-display text-[clamp(4rem,12vw,10rem)] font-black leading-[.8] tracking-[-.07em] text-white">
        AETHER<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300">IA</span>
      </h1>
      <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-neutral-300">
        Creative technology for games, realtime 3D and immersive systems that respond to the human behind the screen.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <button onClick={()=>{sound.playLaser();onOpenReel();}} className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black hover:scale-[1.02] transition-transform"><Play className="w-4 h-4 fill-current"/> Enter the reel</button>
        <a href="#showcase" className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Explore work <ArrowDown className="w-4 h-4"/></a>
      </div>
    </div>
    <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
      {[
        ['REALTIME','3D / VFX'],['LATENCY','< 16 MS'],['DIRECTIVE','GAMEPLAY'],['SIGNAL','BIOMETRIC']
      ].map(([a,b])=><div key={a} className="bg-[#0a0a19]/90 p-5"><div className="font-mono text-[10px] tracking-[.2em] text-neutral-500">{a}</div><div className="mt-1 font-display text-xl font-bold text-white">{b}</div></div>)}
    </div>
  </div>
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500"><Sparkles className="w-5 h-5 animate-pulse"/></div>
</section>);