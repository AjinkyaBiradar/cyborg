"use client";

import { useState } from "react";
import { Cpu, ShieldCheck, Volume2, VolumeX, Terminal, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CyberHeader() {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-900/30 bg-[#030712]/90 backdrop-blur-xl">
      {/* Top Telemetry Ticker Bar */}
      <div className="w-full bg-slate-950 px-4 py-1 border-b border-purple-950/20 text-[10px] font-mono text-slate-400 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1.5 text-purple-400">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-ping" />
            NEURAL_NET_V4.9: ONLINE
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-400">LATENCY: 0.38ms</span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:inline text-cyan-400">SYNAPSE BANDWIDTH: 99.8%</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-slate-500">SYS_ENCRYPTION: AES-4096</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> SECURED
          </span>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-sm border border-purple-500/40 bg-purple-950/30 flex items-center justify-center text-purple-400 group-hover:border-purple-400 group-hover:shadow-neon-purple transition-all">
            <Cpu className="w-5 h-5 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-lg font-extrabold tracking-widest text-white flex items-center gap-1">
              CYBER<span className="text-purple-400">NETIX</span>
            </span>
            <span className="text-[9px] font-mono text-cyan-400 tracking-wider">NEURAL INTERFACE OS</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 font-mono text-xs tracking-widest text-slate-300">
          <a href="#augmentations" className="hover:text-purple-400 transition-colors flex items-center gap-1">
            <span className="text-purple-500">[01]</span> AUGMENTATIONS
          </a>
          <a href="#scanner" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
            <span className="text-cyan-500">[02]</span> BIO-SCANNER
          </a>
          <a href="#comparison" className="hover:text-rose-400 transition-colors flex items-center gap-1">
            <span className="text-rose-500">[03]</span> BENCHMARKS
          </a>
          <a href="#specs" className="hover:text-purple-400 transition-colors flex items-center gap-1">
            <span className="text-purple-500">[04]</span> SPEC_MATRIX
          </a>
        </nav>

        {/* Right HUD Controls & Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setAudioEnabled(!audioEnabled)}
            className="p-2 border border-slate-800 rounded-sm text-slate-400 hover:text-purple-400 hover:border-purple-500/40 transition-colors"
            title={audioEnabled ? "Cyber Feedback Audio: ON" : "Cyber Feedback Audio: OFF"}
          >
            {audioEnabled ? <Volume2 className="w-4 h-4 text-purple-400" /> : <VolumeX className="w-4 h-4 text-slate-600" />}
          </button>

          <a href="#scanner">
            <Button variant="cyber" size="sm">
              <Terminal className="w-4 h-4" />
              ENGAGE SYNC
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-purple-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-purple-900/40 bg-slate-950/95 px-4 pt-2 pb-6 space-y-3 font-mono text-sm">
          <a
            href="#augmentations"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-purple-400 py-2 border-b border-slate-900"
          >
            [01] AUGMENTATIONS
          </a>
          <a
            href="#scanner"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 py-2 border-b border-slate-900"
          >
            [02] BIO-SCANNER
          </a>
          <a
            href="#comparison"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-rose-400 py-2 border-b border-slate-900"
          >
            [03] BENCHMARKS
          </a>
          <a
            href="#specs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-purple-400 py-2"
          >
            [04] SPEC_MATRIX
          </a>
          <div className="pt-2">
            <a href="#scanner" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="cyber" className="w-full">
                <Terminal className="w-4 h-4" /> ENGAGE SYNC
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
