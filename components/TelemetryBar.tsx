"use client";

import { useEffect, useState } from "react";
import { Activity, ShieldCheck, Zap, Server, Cpu } from "lucide-react";

export function TelemetryBar() {
  const [latency, setLatency] = useState(0.38);
  const [synapseRate, setSynapseRate] = useState(99.82);
  const [coreTemp, setCoreTemp] = useState(34.2);

  // Simulate subtle real-time telemetry fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(+(0.35 + Math.random() * 0.08).toFixed(2));
      setSynapseRate(+(99.75 + Math.random() * 0.2).toFixed(2));
      setCoreTemp(+(34.0 + Math.random() * 0.5).toFixed(1));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#070b14] border-y border-purple-900/30 py-6 px-4 relative overflow-hidden">
      {/* Background Laser Sweep Line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-center">
        
        {/* Metric 1 */}
        <div className="p-4 border border-purple-900/30 bg-slate-950/60 rounded-sm hover:border-purple-500/50 transition-colors">
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-1">
            <Zap className="w-3.5 h-3.5 text-purple-400" /> SYNAPSE LATENCY
          </div>
          <div className="text-2xl lg:text-3xl font-extrabold text-purple-400 tracking-tight glow-text-purple">
            {latency} <span className="text-sm text-slate-400">ms</span>
          </div>
          <div className="text-[10px] text-emerald-400 mt-1">99.9% SUB-NEURAL SPEED</div>
        </div>

        {/* Metric 2 */}
        <div className="p-4 border border-cyan-900/30 bg-slate-950/60 rounded-sm hover:border-cyan-500/50 transition-colors">
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-1">
            <Activity className="w-3.5 h-3.5 text-cyan-400" /> BIO-NEURAL MESH
          </div>
          <div className="text-2xl lg:text-3xl font-extrabold text-cyan-400 tracking-tight glow-text-cyan">
            {synapseRate}<span className="text-sm text-slate-400">%</span>
          </div>
          <div className="text-[10px] text-cyan-400 mt-1">OPTIMAL SYNAPSE MATCH</div>
        </div>

        {/* Metric 3 */}
        <div className="p-4 border border-rose-900/30 bg-slate-950/60 rounded-sm hover:border-rose-500/50 transition-colors">
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-1">
            <Cpu className="w-3.5 h-3.5 text-rose-400" /> BIO-THERMAL CORE
          </div>
          <div className="text-2xl lg:text-3xl font-extrabold text-rose-400 tracking-tight">
            {coreTemp}<span className="text-sm text-slate-400">°C</span>
          </div>
          <div className="text-[10px] text-rose-400 mt-1">LIQUID NITRO DISSIPATION</div>
        </div>

        {/* Metric 4 */}
        <div className="p-4 border border-purple-900/30 bg-slate-950/60 rounded-sm hover:border-purple-500/50 transition-colors">
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-1">
            <Server className="w-3.5 h-3.5 text-purple-400" /> ACTIVE AUGMENTS
          </div>
          <div className="text-2xl lg:text-3xl font-extrabold text-purple-300 tracking-tight">
            14.2M<span className="text-sm text-slate-400">+</span>
          </div>
          <div className="text-[10px] text-emerald-400 mt-1">GLOBAL SYNCHRONIZATION</div>
        </div>

      </div>
    </section>
  );
}
