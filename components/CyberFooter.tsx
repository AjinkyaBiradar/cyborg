"use client";

import { useState } from "react";
import { Terminal, Shield, Cpu, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CyberFooter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer id="specs" className="w-full bg-[#030712] border-t border-purple-900/40 py-16 text-slate-400 font-mono text-xs relative overflow-hidden">
      
      {/* Decorative Grid & Glow */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Subscribe CTA Box */}
        <div className="border border-purple-900/40 bg-slate-950/90 p-8 rounded-sm backdrop-blur-md clip-cyber-corner grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="purple">ENCRYPTED TRANSMISSION</Badge>
              <span className="text-[10px] text-cyan-400">DISPATCH V4.9</span>
            </div>
            <h3 className="text-2xl font-bold font-mono text-white">
              SUBSCRIBE TO <span className="text-purple-400 glow-text-purple">NEURAL LOGS</span>
            </h3>
            <p className="text-xs text-slate-400 font-sans">
              Receive confidential telemetry updates, firmware patches, and priority bionic augment release notifications directly to your neural interface inbox.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="OPERATOR_EMAIL@CYBER.NET"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-900 border border-purple-900/50 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 font-mono"
              />
              <Button variant="cyber" type="submit">
                {submitted ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Send className="w-4 h-4" />}
                {submitted ? "ENCRYPTED" : "TRANSMIT"}
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-6 border-t border-purple-950/30">
          
          <div className="space-y-3">
            <div className="font-bold text-white tracking-widest text-sm flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-purple-400" /> SYSTEM ARCHITECTURE
            </div>
            <ul className="space-y-2 text-slate-500 text-xs">
              <li><a href="#hero" className="hover:text-purple-400 transition-colors">Neural Core OS v4.9</a></li>
              <li><a href="#augmentations" className="hover:text-purple-400 transition-colors">Spinal Quantum Mesh</a></li>
              <li><a href="#scanner" className="hover:text-purple-400 transition-colors">Spectral Optic Driver</a></li>
              <li><a href="#specs" className="hover:text-purple-400 transition-colors">Hydraulic Actuators</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="font-bold text-white tracking-widest text-sm flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-cyan-400" /> MIL-SPEC PROTOCOLS
            </div>
            <ul className="space-y-2 text-slate-500 text-xs">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">AES-4096 Encryption</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Quantum Intrusion Defense</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Biometric Zero-Trust</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Emergency Synapse Lock</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="font-bold text-white tracking-widest text-sm flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-rose-400" /> OPERATOR CONSOLE
            </div>
            <ul className="space-y-2 text-slate-500 text-xs">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Developer SDK & API</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Firmware Changelog</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Diagnostic CLI</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Telemetry Gateway</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="font-bold text-white tracking-widest text-sm">
              SYSTEM LOG
            </div>
            <div className="p-3 bg-slate-950 border border-slate-900 font-mono text-[10px] text-slate-500 space-y-1">
              <div className="text-emerald-400">[00:04:12] SYS_CHECK: 0 ERRORS</div>
              <div className="text-cyan-400">[00:04:15] SYNAPSE_LINK: OPTIMAL</div>
              <div className="text-purple-400">[00:04:18] OVERCLOCK: ACTIVE</div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-900 text-[11px] text-slate-600">
          <div>
            © 2026 CYBERNETIX CORP // ALL RIGHTS RESERVED. BIONIC DIVISION.
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              GLOBAL GRID ONLINE
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
