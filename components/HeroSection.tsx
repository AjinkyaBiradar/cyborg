"use client";

import { motion } from "framer-motion";
import { Zap, Activity, ShieldAlert, ChevronRight, Crosshair, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 bg-cyber-grid">
      {/* Background Radial Glow & Laser Lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-transparent to-[#030712] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Cyber Grid Corner Markers */}
      <div className="absolute top-6 left-6 font-mono text-[10px] text-purple-500/60 hidden sm:block">
        [SYS_COORD: 45.291 // 98.204]
      </div>
      <div className="absolute top-6 right-6 font-mono text-[10px] text-cyan-500/60 hidden sm:block">
        [CORE_STATE: OVERCLOCKED]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Controls */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Telemetry Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2"
            >
              <Badge variant="purple" className="flex items-center gap-1.5 py-1 px-3">
                <Zap className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                NEURAL SYNAPSE LINK V4.9
              </Badge>
              <Badge variant="cyan" className="hidden sm:inline-flex py-1 px-3">
                SUB-MILLISECOND RESPONSE
              </Badge>
            </motion.div>

            {/* Glitch Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-mono tracking-tight text-white leading-none">
                TRANSCEND <br />
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-rose-500 bg-clip-text text-transparent glow-text-purple">
                  BIOLOGICAL
                </span> <br />
                LIMITATIONS.
              </h1>
              <p className="text-sm font-mono text-cyan-400/80 tracking-widest uppercase pt-1">
                // Next-Gen Bionic Telemetry & Bio-Mechanical Augmentation OS
              </p>
            </div>

            {/* Subheadline Description */}
            <p className="text-base sm:text-lg text-slate-300 font-sans max-w-2xl leading-relaxed border-l-2 border-purple-500/50 pl-4 py-1">
              Engineered for seamless sub-dermal neural integration. Merge human intuition with quantum bio-computation to achieve sub-millisecond reaction speeds, kinetic exoskeletal force, and real-time optic threat analysis.
            </p>

            {/* Key Telemetry Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg font-mono">
              <div className="p-3 border border-purple-900/40 bg-slate-950/60 rounded-sm">
                <div className="text-[10px] text-slate-400">SYNAPSE SPEED</div>
                <div className="text-lg font-bold text-purple-400">0.38 ms</div>
              </div>
              <div className="p-3 border border-cyan-900/40 bg-slate-950/60 rounded-sm">
                <div className="text-[10px] text-slate-400">KINETIC FORCE</div>
                <div className="text-lg font-bold text-cyan-400">14.8 kN</div>
              </div>
              <div className="p-3 border border-rose-900/40 bg-slate-950/60 rounded-sm">
                <div className="text-[10px] text-slate-400">OPTIC ZOOM</div>
                <div className="text-lg font-bold text-rose-400">120x MAG</div>
              </div>
            </div>

            {/* Interactive CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a href="#scanner">
                <Button variant="cyber" size="lg" className="group">
                  <span>ENGAGE NEURAL MESH</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <a href="#augmentations">
                <Button variant="cyan" size="lg">
                  <Crosshair className="w-4 h-4" />
                  EXPLORE AUGMENTS
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Framer Motion Cyber Core / Reticle Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Outer Cyber Frame Box */}
            <div className="relative w-full max-w-[420px] aspect-square rounded-sm border border-purple-500/30 bg-slate-950/80 p-6 backdrop-blur-xl shadow-2xl shadow-purple-950/50 clip-cyber-corner">
              
              {/* Corner HUD Markers */}
              <div className="absolute top-2 left-2 text-[9px] font-mono text-purple-400">SYS_RETICLE_V4</div>
              <div className="absolute top-2 right-2 text-[9px] font-mono text-cyan-400">TARGET: LOCKED</div>
              <div className="absolute bottom-2 left-2 text-[9px] font-mono text-slate-500">CORE_TEMP: 34.2°C</div>
              <div className="absolute bottom-2 right-2 text-[9px] font-mono text-rose-400 animate-pulse">PWR: 100%</div>

              {/* Animated HUD Rings */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Outer Rotating Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-dashed border-purple-500/40"
                />

                {/* Counter Rotating Cyan Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-10 rounded-full border-2 border-cyan-500/30 border-t-cyan-400 border-b-cyan-400"
                />

                {/* Pulsing Crimson Reticle */}
                <motion.div
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-20 rounded-full border border-rose-500/50 bg-purple-950/20 shadow-neon-purple flex items-center justify-center"
                />

                {/* Central Cybernetic Nucleus */}
                <div className="relative z-10 text-center space-y-2 p-4">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-purple-600 via-cyan-500 to-rose-500 p-[2px] shadow-neon-cyan"
                  >
                    <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-purple-300">
                      <Sparkles className="w-8 h-8 animate-spin" style={{ animationDuration: "10s" }} />
                    </div>
                  </motion.div>
                  <div className="font-mono text-xs font-bold text-white tracking-widest">
                    CYBER-CORE
                  </div>
                  <div className="text-[10px] font-mono text-cyan-400">
                    QUANTUM SYNAPSE ACTIVE
                  </div>
                </div>

                {/* Horizontal & Vertical Crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                  <div className="w-full h-[1px] bg-purple-400" />
                  <div className="h-full w-[1px] bg-purple-400 absolute" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
