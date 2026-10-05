import React, { useState } from 'react';
import { Volume2, VolumeX, MessageSquare, ArrowUpRight, Menu, X } from 'lucide-react';
import { sound } from '../utils/audio';

interface NavbarProps {
  onOpenWhatsAppModal: () => void;
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppModal, onOpenDownload }) => {
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleToggleAudio = () => {
    const active = sound.toggleAmbient();
    setIsAudioActive(active);
  };

  const navLinks = [
    { label: 'Architecture', href: '#how-it-works' },
    { label: 'Biometrics', href: '#insights' },
    { label: 'Product Lab', href: '#product' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Studios', href: '#studios' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 pb-2 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5 sm:p-3 rounded-full bg-[#0b0a1d]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] pointer-events-auto transition-all duration-300">
        <a href="#" onClick={() => sound.playBlip(600, 0.04)} className="flex items-center gap-2 pl-3 group">
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z" /></svg>
          </span>
          <div className="flex flex-col">
            <span className="font-display font-extrabold tracking-tight text-white text-base leading-none group-hover:text-purple-300 transition-colors">AETHERIA</span>
            <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase mt-0.5">STUDIO // TOKYO · LA</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => sound.playBlip(700, 0.02)} className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors">{link.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="/aetheria-codebase.zip" download="aetheria-codebase.zip" onClick={() => { sound.playLaser(); onOpenDownload(); }} title="Open source package" className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500 hover:text-neutral-950 transition-all duration-200 shadow-[0_0_15px_rgba(6,182,212,0.15)] whitespace-nowrap active:scale-95">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            <span className="hidden sm:inline">Download Code</span><span className="sm:hidden">ZIP</span>
          </a>
          <button onClick={handleToggleAudio} title={isAudioActive ? 'Mute ambient soundscape' : 'Enable ambient soundscape'} aria-label={isAudioActive ? 'Mute ambient audio' : 'Enable ambient audio'} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
            {isAudioActive ? <><Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /><span className="hidden lg:inline text-cyan-300">AUDIO ON</span></> : <><VolumeX className="w-3.5 h-3.5 text-neutral-400" /><span className="hidden lg:inline text-neutral-400">AUDIO</span></>}
          </button>
          <button onClick={() => { sound.playLaser(); onOpenWhatsAppModal(); }} className="group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500 hover:text-neutral-950 transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.15)] active:scale-95 whitespace-nowrap">
            <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-400 group-hover:text-neutral-950 transition-colors" /><span>WhatsApp Connect</span><ArrowUpRight className="w-3.5 h-3.5 hidden sm:inline opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button onClick={() => { sound.playBlip(400, 0.05); setIsMobileMenuOpen(!isMobileMenuOpen); }} aria-label="Toggle navigation menu" className="md:hidden p-2 rounded-full text-neutral-300 hover:text-white bg-white/5 border border-white/10">{isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#0e0c24]/95 backdrop-blur-2xl border border-white/10 shadow-2xl pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => { sound.playBlip(600, 0.02); setIsMobileMenuOpen(false); }} className="px-4 py-2 rounded-xl text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/10">{link.label}</a>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button onClick={() => { onOpenDownload(); setIsMobileMenuOpen(false); }} className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"><span>Open Source Package</span></button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};