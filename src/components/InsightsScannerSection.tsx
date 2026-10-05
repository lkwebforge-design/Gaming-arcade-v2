import React, { useState, useRef } from 'react';
import { Eye, Heart, Brain, Zap } from 'lucide-react';
import {
  CharacterSurfaceLayer,
  CharacterBiometricCoreLayer,
  CharacterSynapseLayer,
  CharacterKinematicSkeletonLayer,
} from './ArtworkElements';
import { sound } from '../utils/audio';

interface InsightsProps {
  onOpenCaseStudy: () => void;
}

export const InsightsScannerSection: React.FC<InsightsProps> = ({ onOpenCaseStudy }) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [selectedScanMode, setSelectedScanMode] = useState<'cardiac' | 'synaptic' | 'skeletal'>('cardiac');
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = Math.round((x / rect.width) * 100);
    setSliderPos(percentage);
  };

  return (
    <section id="insights" className="relative py-24 sm:py-32 bg-[#070712] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>Diagnostic Telemetry // X-Ray Engine</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">INSIGHTS</h2>
            <p className="mt-3 text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">Live Biometric Subconscious Scanning</p>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">Drag the interactive optical lens across the avatar to reveal the internal neural pathways, cardiac resonance, and skeletal tension that drive our dynamic difficulty engine.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 bg-[#0c0a24] p-1.5 rounded-2xl border border-white/10">
            {[
              { id: 'cardiac', label: 'Cardiac Core', icon: Heart, color: 'text-rose-400' },
              { id: 'synaptic', label: 'Neural Synapses', icon: Brain, color: 'text-cyan-400' },
              { id: 'skeletal', label: 'Kinematic Skeleton', icon: Zap, color: 'text-purple-400' },
            ].map((mode) => {
              const Icon = mode.icon;
              const isActive = selectedScanMode === mode.id;
              return (
                <button key={mode.id} onClick={() => { sound.playBlip(600, 0.03); setSelectedScanMode(mode.id as 'cardiac' | 'synaptic' | 'skeletal'); }} className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${isActive ? 'bg-purple-600 text-white font-semibold shadow-lg' : 'text-neutral-400 hover:text-white hover:bg-white/5'}`}>
                  <Icon className={`w-3.5 h-3.5 ${mode.color}`} />
                  <span>{mode.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div ref={containerRef} onPointerMove={handlePointerMove} className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] rounded-3xl bg-[#0b0a22] border border-cyan-500/30 overflow-hidden cursor-ew-resize select-none shadow-[0_0_60px_rgba(6,182,212,0.15)]">
          <div className="absolute inset-0"><CharacterSurfaceLayer /></div>
          <div className="absolute inset-0 transition-[clip-path] duration-75" style={{ clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)` }}>
            {selectedScanMode === 'cardiac' && <CharacterBiometricCoreLayer />}
            {selectedScanMode === 'synaptic' && <CharacterSynapseLayer />}
            {selectedScanMode === 'skeletal' && <CharacterKinematicSkeletonLayer />}
          </div>
          <div className="absolute top-0 bottom-0 w-1 bg-cyan-400 pointer-events-none shadow-[0_0_20px_#22d3ee]" style={{ left: `${sliderPos}%` }}>
            <div className="absolute top-4 -translate-x-1/2 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-cyan-400 text-[10px] font-mono text-cyan-300 whitespace-nowrap shadow-lg">SCANNER X: {sliderPos}%</div>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cyan-400 border-2 border-black flex items-center justify-center shadow-[0_0_25px_#22d3ee]"><Eye className="w-4 h-4 text-black" /></div>
            <div className="absolute bottom-4 -translate-x-1/2 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-cyan-400 text-[10px] font-mono text-cyan-300 whitespace-nowrap">{selectedScanMode.toUpperCase()} SENSOR ACTIVE</div>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-neutral-400 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /><span>Interactive Biometric Rig: Drag horizontally across viewport to reveal anatomical sensors</span></div>
          <button onClick={() => { sound.playLaser(); onOpenCaseStudy(); }} className="px-6 py-2.5 rounded-full font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white shadow-lg active:scale-95 transition-all">Read Clinical Case Study</button>
        </div>
      </div>
    </section>
  );
};