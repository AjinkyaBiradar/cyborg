"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Eye, Zap, Shield, Radio, Activity, AlertCircle, RefreshCw, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const bodyNodes = [
  {
    id: "cortex",
    name: "NEURAL CORTEX MESH",
    shortName: "CORTEX",
    x: "50%",
    y: "16%",
    type: "CRITICAL",
    status: "ONLINE",
    temp: "36.8°C",
    load: "84%",
    powerDraw: "4.2 W",
    bandwidth: "99.98 GB/s",
    details: "Direct brain-computer synapse interface running neural thread translation.",
  },
  {
    id: "optic",
    name: "BIONIC OPTIC SENSOR",
    shortName: "OPTICS",
    x: "46%",
    y: "22%",
    type: "SENSORY",
    status: "ACTIVE",
    temp: "32.1°C",
    load: "45%",
    powerDraw: "1.8 W",
    bandwidth: "48.2 GB/s",
    details: "Spectral HUD overlay processing multi-spectrum vision and target locks.",
  },
  {
    id: "core",
    name: "BIO-PLASMA POWER CELL",
    shortName: "POWER CORE",
    x: "50%",
    y: "42%",
    type: "POWER",
    status: "OVERCLOCKED",
    temp: "41.5°C",
    load: "92%",
    powerDraw: "18.5 W",
    bandwidth: "100.0 GB/s",
    details: "Miniaturized fusion core supplying continuous power to kinetic actuators.",
  },
  {
    id: "limbs",
    name: "KINETIC MOTOR ACTUATORS",
    shortName: "ACTUATORS",
    x: "32%",
    y: "58%",
    type: "MOTOR",
    status: "OPTIMAL",
    temp: "35.4°C",
    load: "68%",
    powerDraw: "9.6 W",
    bandwidth: "75.4 GB/s",
    details: "Hydraulic servo-motors capable of 14.8 kN kinetic thrust.",
  },
  {
    id: "dorsal",
    name: "DORSAL SPINAL WEAVE",
    shortName: "SPINAL MESH",
    x: "54%",
    y: "35%",
    type: "DATA",
    status: "ONLINE",
    temp: "34.0°C",
    load: "52%",
    powerDraw: "2.4 W",
    bandwidth: "120.0 GB/s",
    details: "Fiber-optic dorsal highway routing bio-signals to lower limb nodes.",
  },
];

export function DiagnosticScanner() {
  const [selectedNode, setSelectedNode] = useState(bodyNodes[0]);
  const [isScanning, setIsScanning] = useState(false);

  const runFullScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 1800);
  };

  return (
    <section id="scanner" className="py-24 bg-[#070b14] border-t border-purple-950/40 relative overflow-hidden">
      {/* Laser Background Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="cyan" className="py-1 px-3">
            <Radio className="w-3.5 h-3.5 mr-1 animate-pulse" /> REAL-TIME DIAGNOSTIC CANVAS
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white">
            INTERACTIVE <span className="text-cyan-400 glow-text-cyan">BIO-SCANNER</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Select any cybernetic target node on the mechanical blueprint to analyze live telemetry readouts, thermal stress, and power distribution.
          </p>
        </div>

        {/* Diagnostic Scanner Interactive Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Silhouette Canvas */}
          <div className="lg:col-span-7 relative bg-slate-950/90 border border-purple-900/40 rounded-sm p-6 backdrop-blur-md clip-cyber-corner shadow-2xl min-h-[460px] flex flex-col justify-between">
            
            {/* Top HUD Status Header */}
            <div className="flex items-center justify-between font-mono text-xs border-b border-purple-950/30 pb-3">
              <div className="flex items-center gap-2 text-cyan-400">
                <Activity className="w-4 h-4 animate-pulse" />
                <span>CANVAS: CYBORG_UNIT_09</span>
              </div>
              <Button
                variant="cyan"
                size="sm"
                onClick={runFullScan}
                disabled={isScanning}
                className="h-8 text-xs"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? "animate-spin" : ""}`} />
                {isScanning ? "SCANNING..." : "RUN FULL DIAGNOSTIC"}
              </Button>
            </div>

            {/* Central Graphic Container & Nodes */}
            <div className="relative w-full h-[360px] my-4 flex items-center justify-center border border-dashed border-purple-900/20 bg-slate-900/30">
              
              {/* Scanline Sweep overlay if scanning */}
              {isScanning && (
                <motion.div
                  initial={{ top: "0%" }}
                  animate={{ top: "100%" }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                  className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-neon-purple z-30"
                />
              )}

              {/* Holographic Silhouette Blueprint Vector Graphic */}
              <div className="relative w-[220px] h-[320px] border border-cyan-500/20 rounded-full flex flex-col items-center justify-between p-4 bg-purple-950/10 shadow-inner">
                {/* Head */}
                <div className="w-14 h-16 rounded-full border border-cyan-400/40 flex items-center justify-center font-mono text-[9px] text-cyan-400">
                  HEAD
                </div>
                {/* Torso Core */}
                <div className="w-28 h-32 rounded-sm border border-purple-500/40 flex items-center justify-center font-mono text-[9px] text-purple-300">
                  CORE
                </div>
                {/* Legs */}
                <div className="w-24 h-24 flex justify-between">
                  <div className="w-8 h-full border border-slate-700 rounded-sm" />
                  <div className="w-8 h-full border border-slate-700 rounded-sm" />
                </div>
              </div>

              {/* Target Nodes Overlay */}
              {bodyNodes.map((node) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    style={{ left: node.x, top: node.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none"
                  >
                    {/* Pulsing Target Dot */}
                    <div className="relative flex items-center justify-center">
                      <span
                        className={`absolute w-8 h-8 rounded-full transition-all ${
                          isSelected
                            ? "bg-cyan-500/40 animate-ping border border-cyan-400"
                            : "bg-purple-500/20 group-hover:bg-purple-500/40"
                        }`}
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 transition-all flex items-center justify-center ${
                          isSelected
                            ? "border-cyan-400 bg-cyan-500 text-black shadow-neon-cyan"
                            : "border-purple-400 bg-slate-950 group-hover:scale-125"
                        }`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                    </div>

                    {/* Node Label Badge */}
                    <div
                      className={`mt-1 font-mono text-[9px] px-1.5 py-0.5 rounded-none border whitespace-nowrap transition-colors ${
                        isSelected
                          ? "bg-cyan-950 text-cyan-300 border-cyan-400 shadow-neon-cyan"
                          : "bg-slate-950 text-slate-400 border-slate-800 group-hover:text-purple-300"
                      }`}
                    >
                      {node.shortName}
                    </div>
                  </button>
                );
              })}

            </div>

            {/* Bottom Telemetry Legend */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-purple-950/20 pt-3">
              <span>SCANNER ACCURACY: 99.9%</span>
              <span className="text-cyan-400">CLICK TARGET NODE FOR LIVE SPEC</span>
            </div>
          </div>

          {/* Right Column: Node Telemetry Detail Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card glowColor="cyan" className="bg-slate-950/90 border-cyan-500/30">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="cyan">{selectedNode.type} NODE</Badge>
                      <span className="font-mono text-xs text-emerald-400 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> {selectedNode.status}
                      </span>
                    </div>
                    <CardTitle className="text-cyan-300 pt-2">{selectedNode.name}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6 pt-2 font-mono">
                    <p className="text-slate-300 text-xs font-sans leading-relaxed">
                      {selectedNode.details}
                    </p>

                    {/* Real-time Meter Metrics */}
                    <div className="space-y-4 border border-cyan-950/50 bg-slate-900/60 p-4 rounded-sm">
                      {/* Metric 1: System Load */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>SYSTEM LOAD</span>
                          <span className="font-bold text-cyan-400">{selectedNode.load}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-950 rounded-none overflow-hidden border border-slate-800">
                          <div
                            className="h-full bg-cyan-400 shadow-neon-cyan transition-all duration-500"
                            style={{ width: selectedNode.load }}
                          />
                        </div>
                      </div>

                      {/* Metric 2: Node Thermal Stress */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>THERMAL TEMP</span>
                          <span className="font-bold text-rose-400">{selectedNode.temp}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-950 rounded-none overflow-hidden border border-slate-800">
                          <div
                            className="h-full bg-rose-500 transition-all duration-500"
                            style={{ width: "45%" }}
                          />
                        </div>
                      </div>

                      {/* Grid Stats */}
                      <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800 text-xs">
                        <div>
                          <div className="text-[10px] text-slate-500">POWER DRAW</div>
                          <div className="text-sm font-bold text-purple-300">{selectedNode.powerDraw}</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-500">SYNAPSE THREADS</div>
                          <div className="text-sm font-bold text-cyan-300">{selectedNode.bandwidth}</div>
                        </div>
                      </div>
                    </div>

                    <Button variant="cyber" className="w-full">
                      CALIBRATE SUB-SYSTEM
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
