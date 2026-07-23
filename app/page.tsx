"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Terminal, Activity, ShieldCheck, Zap } from "lucide-react";
import { ParticleFace } from "@/components/ParticleFace";
import { RevolvingFace } from "@/components/RevolvingFace";
import { CodeEditor } from "@/components/CodeEditor";
import { FeaturesSection } from "@/components/FeaturesSection";
import { MechanicalFooter } from "@/components/MechanicalFooter";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Framer Motion Page-wide Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax transformations for Hero 3D Particle Face
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.8]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Section 2 (About) Scroll Scale
  const aboutY = useTransform(scrollYProgress, [0.2, 0.5], [50, 0]);

  // Numerical percentage display (0 to 100)
  const scrollPercent = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-slate-100 font-mono relative overflow-x-hidden selection:bg-purple-600 selection:text-white">
      
      {/* CRT Scanline Overlay across entire application */}
      <div className="fixed inset-0 bg-scanlines opacity-25 pointer-events-none z-40" />

      {/* Fixed HUD Navigation Bar (NO CTA BUTTONS!) */}
      <header className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-950/40 px-4 sm:px-8 h-14 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-sm border border-purple-500/40 bg-purple-950/40 flex items-center justify-center text-purple-400">
            <Cpu className="w-4 h-4 animate-pulse" />
          </div>
          <span className="font-extrabold tracking-widest text-white text-sm">
            CYBER<span className="text-purple-400">NETIX</span> // 3D OS
          </span>
        </div>

        {/* Scroll Progress Meter */}
        <div className="flex items-center space-x-6 text-[11px] text-slate-400">
          <span className="hidden md:flex items-center gap-1.5 text-cyan-400">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            SYNAPSE LINK: ACTIVE
          </span>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">DECODED:</span>
            <motion.span className="text-purple-400 font-bold w-10 text-right">
              {Math.round(scrollPercent.get() || 0)}%
            </motion.span>
          </div>
        </div>
      </header>

      {/* Fixed Right Scroll Tracker Meter */}
      <aside className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4 text-[9px] text-slate-600 font-mono">
        <div className="writing-mode-vertical tracking-widest text-purple-400 uppercase">
          SCROLL TO NAVIGATE // NO BUTTONS
        </div>
        <div className="w-[1px] h-24 bg-slate-900 relative">
          <motion.div
            className="w-[3px] -left-[1px] bg-purple-400 absolute shadow-neon-violet"
            style={{
              height: "20%",
              top: useTransform(scrollYProgress, [0, 1], ["0%", "80%"]),
            }}
          />
        </div>
      </aside>

      {/* SECTION 1: HERO SECTION (Parallax & 3D Intro) */}
      <section className="relative h-screen flex flex-col justify-between pt-20 pb-10 px-4 sm:px-8 bg-black overflow-hidden">
        
        {/* Top HUD Telemetry */}
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-[10px] text-purple-400/80 z-20">
          <div>[SYS_ID: 0x99482_NEURAL_CORE]</div>
          <div className="text-cyan-400">[PARALLAX 3D ENGINE: ONLINE]</div>
        </div>

        {/* Central 3D Particle Face Graphic */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
        >
          <ParticleFace scrollProgress={scrollYProgress.get()} />
        </motion.div>

        {/* Lower Left & Lower Right Glitching Mechanical Metrics (NO CTA BUTTONS!) */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
          
          {/* Lower Left: Glitch Status */}
          <div className="p-4 border border-purple-900/40 bg-black/80 backdrop-blur-md rounded-sm clip-cyber-corner space-y-1 max-w-md">
            <div className="text-[10px] text-purple-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
              SYSTEM PROTOCOL STATUS
            </div>
            <div className="text-lg font-bold text-white tracking-wider animate-pulse">
              "Loading human language..."
            </div>
            <div className="text-[11px] text-slate-400">
              Parsing English phonetic matrices & neural sentiment vectors.
            </div>
          </div>

          {/* Lower Right: Mechanical Metrics */}
          <div className="p-4 border border-cyan-900/40 bg-black/80 backdrop-blur-md rounded-sm clip-cyber-corner space-y-2 max-w-md md:ml-auto font-mono text-xs">
            <div className="flex justify-between text-slate-400">
              <span>SYNAPSE STREAM</span>
              <span className="text-cyan-400 font-bold">0.38 ms</span>
            </div>
            <div className="w-full h-1.5 bg-slate-900 rounded-none overflow-hidden">
              <div className="h-full bg-cyan-400 shadow-neon-teal w-[92%]" />
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 pt-1">
              <span>SCROLL DOWN TO ENGAGE DATA MESH</span>
              <span className="text-purple-400">01 / 04</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: ABOUT SECTION (Code Editor & Revolving 3D Face) */}
      <section className="relative py-28 px-4 sm:px-8 bg-[#040814] border-t border-purple-950/40">
        <motion.div
          style={{ y: aboutY }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Side: Code Editor with typing reveal */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="text-xs text-purple-400 tracking-widest">[SEC 02 // NEURAL RESTRUCTURING]</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                SYNAPTIC <span className="text-purple-400 glow-text-violet">DECODING</span> ENGINE
              </h2>
              <p className="text-slate-400 text-xs font-sans">
                As you scroll through this sector, our quantum kernel reveals its internal TypeScript runtime environment line by line.
              </p>
            </div>

            <CodeEditor />
          </div>

          {/* Right Side: Revolving 3D Robot Face */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="w-full max-w-[460px] aspect-square rounded-sm border border-purple-500/30 bg-black/60 backdrop-blur-xl clip-cyber-corner p-4 shadow-2xl relative">
              <div className="absolute top-3 left-3 text-[10px] text-cyan-400">3D_REVOLVING_HEAD // MESH_v4</div>
              <div className="absolute bottom-3 right-3 text-[10px] text-purple-400">SCROLL BINDING: ACTIVE</div>
              <RevolvingFace scrollProgress={scrollYProgress.get()} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: FEATURES SECTION (Capabilities Grid) */}
      <FeaturesSection />

      {/* SECTION 4: FOOTER SECTION (End of Data Stream) */}
      <MechanicalFooter />

    </div>
  );
}
