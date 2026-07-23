"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, FileCode, CheckCircle2 } from "lucide-react";

const codeLines = [
  { num: 1, code: "// SYNE-OS NEURAL KERNEL INITIALIZATION v4.9.0" },
  { num: 2, code: "import { NeuralMesh, BioSync, QuantumBuffer } from '@syne/core';" },
  { num: 3, code: "" },
  { num: 4, code: "export async function initializeCyborgAgent() {" },
  { num: 5, code: "  const mesh = new NeuralMesh({ bandwidth: '100 Gbps' });" },
  { num: 6, code: "  const bioSync = await BioSync.connectSpinalCore();" },
  { num: 7, code: "" },
  { num: 8, code: "  // Sub-dermal neural coupling active" },
  { num: 9, code: "  mesh.on('synapse_impulse', (signal) => {" },
  { num: 10, code: "    bioSync.routeMotorActuator(signal.vector);" },
  { num: 11, code: "    QuantumBuffer.flushMemoryCache();" },
  { num: 12, code: "  });" },
  { num: 13, code: "" },
  { num: 14, code: "  return { status: 'ONLINE', latency: '0.38ms' };" },
  { num: 15, code: "}" },
];

export function CodeEditor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate lines visible based on scroll progress (1 to 15 lines)
  const lineCount = useTransform(scrollYProgress, [0.1, 0.8], [1, 15]);

  return (
    <div ref={containerRef} className="w-full font-mono text-xs border border-purple-900/40 rounded-sm bg-[#040814] overflow-hidden shadow-2xl clip-cyber-corner">
      
      {/* VS Code / Terminal Top Header Bar */}
      <div className="bg-[#0b0f19] px-4 py-2.5 border-b border-purple-900/30 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-slate-400 text-[11px] flex items-center gap-1.5 pl-2">
            <FileCode className="w-3.5 h-3.5 text-purple-400" />
            cyborg_kernel.ts
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-cyan-400">
          <Terminal className="w-3.5 h-3.5" />
          <span>SCROLL TO DECODE</span>
        </div>
      </div>

      {/* Code Body */}
      <div className="p-4 sm:p-6 space-y-1.5 overflow-x-auto min-h-[360px]">
        {codeLines.map((line, idx) => (
          <motion.div
            key={line.num}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: idx * 0.04 }}
            className="flex items-center font-mono leading-relaxed"
          >
            <span className="w-8 select-none text-slate-600 text-right pr-4 text-[11px]">
              {line.num}
            </span>
            <span
              className={`${
                line.code.startsWith("//")
                  ? "text-emerald-400/80"
                  : line.code.includes("import") || line.code.includes("export")
                  ? "text-purple-400 font-bold"
                  : line.code.includes("function") || line.code.includes("const")
                  ? "text-cyan-400"
                  : "text-slate-200"
              }`}
            >
              {line.code}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Terminal Footer Status */}
      <div className="bg-[#0b0f19] px-4 py-2 border-t border-purple-900/30 flex items-center justify-between text-[10px] text-slate-400">
        <span className="flex items-center gap-1 text-emerald-400">
          <CheckCircle2 className="w-3 h-3" /> SYNTAX VERIFIED: ZERO ERRORS
        </span>
        <span className="text-purple-400">UTF-8 // TypeScript 5.4</span>
      </div>

    </div>
  );
}
