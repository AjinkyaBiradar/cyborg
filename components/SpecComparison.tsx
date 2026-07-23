"use client";

import { useState } from "react";
import { Zap, ShieldCheck, Check, X, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const specRows = [
  {
    category: "NEURAL LATENCY",
    bio: "200.0 ms (Synaptic Delay)",
    cyber: "0.38 ms (Direct Fiber Link)",
    multiplier: "526x FASTER",
    boost: true,
  },
  {
    category: "OPTIC RANGE & MAG",
    bio: "1.0x (Visible Spectrum 380-700nm)",
    cyber: "120.0x (UV / IR / X-Ray Matrix)",
    multiplier: "FULL SPECTRUM",
    boost: true,
  },
  {
    category: "KINETIC STRENGTH",
    bio: "0.8 kN (Human Muscle Limit)",
    cyber: "14.8 kN (Titanium Hydraulic)",
    multiplier: "18.5x FORCE",
    boost: true,
  },
  {
    category: "IMPACT RESISTANCE",
    bio: "Low (Soft Tissue)",
    cyber: "Mil-Spec (50-Caliber Kinetic Absorber)",
    multiplier: "ARMORED",
    boost: true,
  },
  {
    category: "DATA PROCESSING",
    bio: "Intuitive / Limited Buffer",
    cyber: "400 TFLOPS Spinal Quantum Core",
    multiplier: "UNLIMITED PIPES",
    boost: true,
  },
];

export function SpecComparison() {
  return (
    <section id="comparison" className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="purple" className="py-1 px-3">
            <Zap className="w-3.5 h-3.5 mr-1" /> BENCHMARK COMPARISON
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white">
            BIOLOGICAL vs <span className="text-purple-400 glow-text-purple">CYBERNETIX</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Empirical benchmark metrics proving the performance revolution of cybernetic integration over unaugmented biological limits.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="border border-purple-900/40 rounded-sm bg-slate-950/90 overflow-x-auto shadow-2xl clip-cyber-corner">
          <table className="w-full text-left font-mono text-sm">
            
            {/* Table Header */}
            <thead>
              <tr className="border-b border-purple-950/40 bg-slate-900/80 text-xs text-slate-400">
                <th className="p-4 sm:p-6">TELEMETRY METRIC</th>
                <th className="p-4 sm:p-6 text-slate-500">BIOLOGICAL BASELINE</th>
                <th className="p-4 sm:p-6 text-purple-400 bg-purple-950/20">CYBERNETIX AUGMENTED</th>
                <th className="p-4 sm:p-6 text-cyan-400">PERFORMANCE GAIN</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-purple-950/20 text-xs sm:text-sm">
              {specRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-purple-950/10 transition-colors">
                  <td className="p-4 sm:p-6 font-bold text-white tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {row.category}
                  </td>
                  <td className="p-4 sm:p-6 text-slate-400 line-through decoration-rose-500/50">
                    {row.bio}
                  </td>
                  <td className="p-4 sm:p-6 font-bold text-purple-300 bg-purple-950/10 border-x border-purple-950/30">
                    {row.cyber}
                  </td>
                  <td className="p-4 sm:p-6 font-bold text-cyan-400">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-cyan-950/40 border border-cyan-500/30 rounded-none text-xs">
                      {row.multiplier} <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
}
