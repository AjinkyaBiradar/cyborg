"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Cpu, Shield, Gauge, Lock, Scan, CheckCircle2, ChevronRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const features = [
  {
    id: "optic-vision",
    icon: Eye,
    title: "OPTIC CYBER-VISION V9",
    tagline: "SPECTRAL & THREAT ANALYSIS",
    glowColor: "purple" as const,
    badgeVariant: "purple" as const,
    badgeText: "OPTIC AUGMENT",
    description:
      "Sub-dermal optic implant featuring 120x optical magnification, thermal heat signature tracking, and automated target threat assessment.",
    specs: [
      { label: "RESOLUTION", value: "8K NEURAL MATRIX" },
      { label: "SPECTRUM", value: "UV / INFRARED / X-RAY" },
      { label: "TARGET LOCK", value: "0.02 SECOND RESPONSE" },
    ],
    diagnosticCode: "DIAG_OPTIC // 0x994F_OK",
  },
  {
    id: "quantum-core",
    icon: Cpu,
    title: "SYNAPSE QUANTUM CORE",
    tagline: "SPINAL MESH PROCESSOR",
    glowColor: "cyan" as const,
    badgeVariant: "cyan" as const,
    badgeText: "NEURAL PROCESSOR",
    description:
      "400 TFLOP bio-quantum coprocessor installed along the dorsal spine to offload neural calculation and predict incoming reflexes.",
    specs: [
      { label: "COMPUTE POWER", value: "400 TFLOPS BIO-QUANTUM" },
      { label: "POWER DRAW", value: "1.2 WATTS BIO-KINETIC" },
      { label: "NEURAL THREADS", value: "1,024 SYNAPTIC PIPES" },
    ],
    diagnosticCode: "DIAG_CORE // 0x448B_OVERCLOCKED",
  },
  {
    id: "exo-armor",
    icon: Shield,
    title: "TITANIUM-KEVLAR WEAVE",
    tagline: "SUB-DERMAL KINETIC SHIELD",
    glowColor: "rose" as const,
    badgeVariant: "crimson" as const,
    badgeText: "ARMOR MATRIX",
    description:
      "Sub-dermal liquid titanium alloy and graphene lattice providing high kinetic absorption without compromising muscular agility.",
    specs: [
      { label: "IMPACT RESISTANCE", value: "50 CALIBER KINETIC" },
      { label: "WEIGHT PENALTY", value: "0.0% AGILITY LOSS" },
      { label: "REGENERATION", value: "SELF-HEALING POLYMER" },
    ],
    diagnosticCode: "DIAG_ARMOR // 0x772A_INTEGRITY_100%",
  },
  {
    id: "reflex-engine",
    icon: Gauge,
    title: "OVERCLOCK REFLEX ENGINE",
    tagline: "MOTOR FIBER ACCELERATOR",
    glowColor: "purple" as const,
    badgeVariant: "purple" as const,
    badgeText: "MOTOR ACCELERATOR",
    description:
      "Bypasses central nervous system delay by routing impulse signals directly to bionic motor actuators for superhuman evasion.",
    specs: [
      { label: "REACTION TIME", value: "0.04 MILLISECONDS" },
      { label: "BURST SPEED", value: "3.5x HUMAN MAX" },
      { label: "OVERCLOCK DURATION", value: "45 SECONDS CONTINUOUS" },
    ],
    diagnosticCode: "DIAG_REFLEX // 0x119C_READY",
  },
];

export function FeaturesGrid() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="augmentations" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-cyber-dots opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="purple" className="py-1 px-3">
            <Scan className="w-3.5 h-3.5 mr-1" /> NEURAL AUGMENTATION CATALOG
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white">
            HARDWARE <span className="text-purple-400 glow-text-purple">AUGMENTATIONS</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Inspect our flagship cybernetic enhancements. Hover over any module to run diagnostic laser scanning and expose telemetry specs.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            const isHovered = activeCard === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <Card
                  glowColor={item.glowColor}
                  className="h-full flex flex-col justify-between group cursor-pointer border-slate-800/80 bg-slate-950/90 relative"
                >
                  {/* Laser Scanning Bar Effect on Hover */}
                  {isHovered && (
                    <motion.div
                      initial={{ top: "0%" }}
                      animate={{ top: "100%" }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-neon-cyan z-20 pointer-events-none"
                    />
                  )}

                  <div>
                    {/* Header */}
                    <CardHeader className="space-y-3 pb-2">
                      <div className="flex items-center justify-between">
                        <Badge variant={item.badgeVariant}>{item.badgeText}</Badge>
                        <span className="font-mono text-[10px] text-slate-500 flex items-center gap-1">
                          <Lock className="w-3 h-3 text-emerald-400" /> MIL-SPEC
                        </span>
                      </div>

                      <div className="flex items-center gap-4 pt-2">
                        <div className="w-12 h-12 rounded-sm border border-purple-500/30 bg-purple-950/30 flex items-center justify-center text-purple-400 group-hover:border-purple-400 group-hover:shadow-neon-purple transition-all">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="group-hover:text-purple-300 transition-colors">
                            {item.title}
                          </CardTitle>
                          <div className="text-[10px] font-mono text-cyan-400 tracking-wider">
                            {item.tagline}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    {/* Content */}
                    <CardContent className="space-y-4 pt-4">
                      <p className="text-slate-300 text-sm font-sans leading-relaxed">
                        {item.description}
                      </p>

                      {/* Specs Box */}
                      <div className="border border-purple-950/40 bg-slate-900/60 p-4 rounded-sm space-y-2.5 font-mono text-xs">
                        {item.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex justify-between items-center text-slate-400">
                            <span className="text-[11px] text-slate-400 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-cyan-400" /> {spec.label}
                            </span>
                            <span className="font-bold text-white tracking-wider">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>

                  {/* Footer & Diagnostic Telemetry */}
                  <CardFooter className="pt-4 flex items-center justify-between font-mono text-xs border-t border-purple-950/20 mt-4">
                    <span className="text-[10px] text-slate-500">{item.diagnosticCode}</span>
                    <Button variant="ghost" size="sm" className="group-hover:text-purple-400 p-0 hover:bg-transparent">
                      SPECIFICATIONS <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>

                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
