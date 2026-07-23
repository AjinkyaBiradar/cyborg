"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, ShieldAlert, HardDrive, Cpu, Terminal, CheckCircle2, Lock, Scan } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const capabilities = [
  {
    id: "code-synthesis",
    icon: Code2,
    title: "AUTONOMOUS CODE SYNTHESIS",
    badge: "ENGINEERING",
    badgeVariant: "purple" as const,
    glowColor: "purple" as const,
    tagline: "FULL-STACK COMPUTATION",
    description:
      "Writes, refactors, and validates production-grade software directly from neural intent. Synthesizes complex algorithms with zero compiler latency.",
    metrics: [
      { label: "SYNTAX VALIDATION", value: "100% ACCURACY" },
      { label: "COMPILATION SPEED", value: "0.02 SECONDS" },
      { label: "MEMORY SAFETY", value: "RUST-EQUIVALENT" },
    ],
    kernelLog: "LOG // SYNTHESIZED 14,200 LINES WITHOUT EXCEPTION",
  },
  {
    id: "cyber-defense",
    icon: ShieldAlert,
    title: "ZERO-TRUST CYBERSECURITY",
    badge: "DEFENSE MATRIX",
    badgeVariant: "cyan" as const,
    glowColor: "cyan" as const,
    tagline: "INTRUSION NEUTRALIZATION",
    description:
      "Monitors system memory buffers and network sockets in real time. Detects zero-day exploits and neutralizes intrusion vectors before execution.",
    metrics: [
      { label: "THREAT RESPONSE", value: "0.004 MILLISECONDS" },
      { label: "ENCRYPTION", value: "QUANTUM AES-4096" },
      { label: "ISOLATION RATE", value: "100% CONTAINMENT" },
    ],
    kernelLog: "LOG // BLOCKED 99,480 PORT SCAN ATTEMPTS",
  },
  {
    id: "file-system",
    icon: HardDrive,
    title: "REAL-WORLD FILE SYSTEM ENGINE",
    badge: "I/O CONTROLLER",
    badgeVariant: "crimson" as const,
    glowColor: "rose" as const,
    tagline: "BINARY STREAM PARSER",
    description:
      "Reads, modifies, and organizes local binary streams, databases, and workspace files with high-throughput multi-threaded I/O operations.",
    metrics: [
      { label: "I/O THROUGHPUT", value: "120.0 GB/SEC" },
      { label: "PARSER SUPPORT", value: "JSON / AST / BINARY" },
      { label: "INTEGRITY CHECK", value: "SHA-256 VERIFIED" },
    ],
    kernelLog: "LOG // MOUNTED LOCAL FILE MESH // READ-WRITE OK",
  },
];

export function FeaturesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple" className="py-1 px-3">
            <Cpu className="w-3.5 h-3.5 mr-1" /> CORE CAPABILITIES
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white">
            OPERATIONAL <span className="text-purple-400 glow-text-purple">CAPABILITIES</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Scroll across the operational grid. No buttons needed—capability telemetry automatically activates as you progress down the stream.
          </p>
        </div>

        {/* 3 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Card
                  glowColor={item.glowColor}
                  className="h-full flex flex-col justify-between border-purple-900/30 bg-[#040814] relative transition-all duration-300 group"
                >
                  {/* Laser Scanline Sweep on Hover */}
                  {isHovered && (
                    <motion.div
                      initial={{ top: "0%" }}
                      animate={{ top: "100%" }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-neon-teal z-20 pointer-events-none"
                    />
                  )}

                  <div>
                    {/* Header */}
                    <CardHeader className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant={item.badgeVariant}>{item.badge}</Badge>
                        <span className="font-mono text-[10px] text-slate-500 flex items-center gap-1">
                          <Lock className="w-3 h-3 text-emerald-400" /> ACTIVE
                        </span>
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <div className="w-10 h-10 rounded-sm border border-purple-500/40 bg-purple-950/40 flex items-center justify-center text-purple-300 group-hover:border-purple-400 group-hover:shadow-neon-violet transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <CardTitle className="text-base group-hover:text-purple-300 transition-colors">
                            {item.title}
                          </CardTitle>
                          <div className="text-[10px] font-mono text-cyan-400 tracking-wider">
                            {item.tagline}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    {/* Content Description */}
                    <CardContent className="space-y-4 pt-2 font-mono text-xs">
                      <p className="text-slate-300 leading-relaxed font-sans text-xs">
                        {item.description}
                      </p>

                      {/* Specs */}
                      <div className="border border-purple-950/50 bg-[#080d1a] p-3 rounded-sm space-y-2">
                        {item.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="flex justify-between items-center text-[11px] text-slate-400">
                            <span className="flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-cyan-400" /> {m.label}
                            </span>
                            <span className="font-bold text-white tracking-wider">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>

                  {/* Footer Kernel Log */}
                  <CardFooter className="pt-3 border-t border-purple-950/30 mt-4 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                    <span>{item.kernelLog}</span>
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
