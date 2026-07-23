"use client";

import { Terminal, ShieldCheck, Activity, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function MechanicalFooter() {
  return (
    <footer className="w-full bg-black border-t border-purple-950/50 py-16 text-slate-500 font-mono text-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Terminal End Session Box */}
        <div className="border border-purple-900/40 bg-[#040814] p-6 rounded-sm backdrop-blur-md clip-cyber-corner flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
            <div>
              <div className="font-bold text-white tracking-widest text-sm flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                DATA STREAM TERMINATED // END OF TRANSMISSION
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                NEURAL SYNAPSE SESSION #99482 // AES-4096 ENCRYPTED
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Badge variant="purple" className="py-1 px-3 text-[10px]">
              <ShieldCheck className="w-3 h-3 mr-1 text-emerald-400" /> 100% SECURE
            </Badge>
            <Badge variant="cyan" className="py-1 px-3 text-[10px]">
              UPTIME: 99.99%
            </Badge>
          </div>
        </div>

        {/* System Coordinates & Metadata */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 text-[11px] text-slate-400">
          <div>
            <div className="text-slate-400 mb-1">SYSTEM ORIGIN</div>
            <div className="text-white font-bold">CYBERNETIX NEURAL LABS</div>
          </div>
          <div>
            <div className="text-slate-400 mb-1">SYNAPSE BANDWIDTH</div>
            <div className="text-cyan-400 font-bold">100.0 GB/SEC MULTI-THREAD</div>
          </div>
          <div>
            <div className="text-slate-400 mb-1">CORE TEMPERATURE</div>
            <div className="text-rose-400 font-bold">34.2°C LIQUID NITRO</div>
          </div>
          <div>
            <div className="text-slate-400 mb-1">SCROLL PROGRESSION</div>
            <div className="text-purple-400 font-bold">100% DECODED</div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-900 text-[10px] text-slate-600">
          <div>
            © 2026 CYBERNETIX // ALL DATA STREAMS PROTECTED BY NEURAL COPYRIGHT.
          </div>
          <div className="mt-2 sm:mt-0 flex items-center gap-2 text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>SESSION COMPLETED // SCROLL UP TO RE-ENGAGE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
