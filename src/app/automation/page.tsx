"use client";

import { motion } from "framer-motion";
import { Activity, Power, AlertCircle, RefreshCcw } from "lucide-react";

export default function AutomationPage() {
  return (
    <div className="w-full min-h-screen bg-brand-navy pt-36 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-brand-turquoise inline-block"></span>
            <span className="text-brand-turquoise font-semibold tracking-[0.25em] text-xs md:text-sm uppercase">
              Industrial Edge Systems
            </span>
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-4xl mb-8">
            Pump Automation & <br /> <span className="text-brand-turquoise">Network Orchestration.</span>
          </h1>
          <div className="w-20 h-1 bg-brand-turquoise mb-8"></div>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl border-l-2 border-brand-turquoise pl-6">
            Hardware-to-software integration protocols designed specifically for fuel station pump control loops, retail POS synchronization, and automated wetstock management.
          </p>
        </motion.div>

        {/* Technical Schematic Block */}
        <div className="w-full bg-[#193760] border border-brand-turquoise/20 p-10 md:p-16 relative overflow-hidden mb-20 shadow-2xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-6 h-[2px] bg-brand-turquoise inline-block"></span>
            <span className="text-brand-turquoise font-semibold tracking-[0.2em] text-xs uppercase">
              Telemetry Routing
            </span>
          </div>
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-10 tracking-tight">Hardware Integration Schematic</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              { label: "Fuel Dispensers", sub: "Flow control loops & pulse meters" },
              { label: "Wetstock Sensors", sub: "Tank level & density telemetry" },
              { label: "Edge POS Terminals", sub: "Real-time ledger synchronization" },
            ].map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border border-brand-turquoise/30 p-6 flex flex-col items-start bg-brand-navy backdrop-blur-sm hover:border-brand-turquoise transition-colors"
              >
                <div className="w-3 h-3 bg-brand-turquoise rounded-sm mb-4"></div>
                <h4 className="text-white font-bold text-lg mb-1">{node.label}</h4>
                <p className="text-white/70 text-sm">{node.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" xmlns="http://www.w3.org/2000/svg">
            <line x1="10%" y1="65%" x2="50%" y2="65%" stroke="#1CB08F" strokeWidth="2" strokeDasharray="6 6" />
            <line x1="50%" y1="65%" x2="90%" y2="65%" stroke="#1CB08F" strokeWidth="2" strokeDasharray="6 6" />
          </svg>
        </div>

        {/* Realistic Dashboard Wireframe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-[#193760] border border-brand-turquoise/20 p-8 flex flex-col shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-brand-turquoise/20 pb-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-brand-turquoise"></div>
              </div>
              <span className="text-white/60 text-xs md:text-sm font-bold tracking-widest uppercase">Live Operational Node Telemetry</span>
            </div>
            <div className="flex items-center gap-2 text-brand-turquoise text-xs md:text-sm font-mono font-semibold">
              <RefreshCcw className="w-4 h-4 animate-spin" />
              <span>SYNCING...</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Sidebar Active Nodes */}
            <div className="md:col-span-1 flex flex-col gap-4">
              {[
                { id: "PUMP_01", status: "ACTIVE", icon: Power, color: "text-brand-turquoise" },
                { id: "PUMP_02", status: "IDLE", icon: Power, color: "text-yellow-400" },
                { id: "TANK_S1", status: "WARNING", icon: AlertCircle, color: "text-red-400" },
              ].map((node, idx) => (
                <div key={idx} className="bg-brand-navy p-4 rounded-sm border border-brand-turquoise/15 flex items-center justify-between">
                  <div>
                    <div className="text-white font-mono text-sm font-bold">{node.id}</div>
                    <div className={`text-xs font-bold ${node.color}`}>{node.status}</div>
                  </div>
                  <node.icon className={`w-5 h-5 ${node.color}`} />
                </div>
              ))}
            </div>

            {/* Main Telemetry & Charts */}
            <div className="md:col-span-3 flex flex-col gap-6">
              
              <div className="bg-brand-navy p-6 rounded-sm border border-brand-turquoise/15 flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <Activity className="w-5 h-5 text-brand-turquoise" />
                  <span className="text-white font-bold uppercase tracking-widest text-xs md:text-sm">Real-Time Flow Telemetry (L/min)</span>
                </div>
                {/* Simulated Chart Graph */}
                <div className="w-full h-32 flex items-end gap-1 opacity-85">
                  {[35, 60, 45, 80, 50, 75, 40, 90, 65, 55, 85, 45, 70, 30, 80, 55, 95, 40, 60, 85, 50, 75, 35, 65, 90, 45, 80, 55, 70, 40, 85, 60, 95, 50, 75, 45, 80, 65, 55, 90].map((height, i) => {
                    return (
                      <div 
                        key={i} 
                        className="flex-1 bg-brand-turquoise/40 hover:bg-brand-turquoise transition-colors duration-300 rounded-t-xs"
                        style={{ height: `${height}%` }}
                      ></div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-brand-navy p-6 rounded-sm border border-brand-turquoise/15 flex flex-col justify-center">
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Total Volume Dispensed</span>
                  <span className="text-white text-3xl md:text-4xl font-mono">14,204.5 <span className="text-brand-turquoise text-xl">L</span></span>
                </div>
                <div className="bg-brand-navy p-6 rounded-sm border border-brand-turquoise/15 flex flex-col justify-center">
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Network Node Latency</span>
                  <span className="text-brand-turquoise text-3xl md:text-4xl font-mono">12<span className="text-white/50 text-xl ml-1">ms</span></span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
