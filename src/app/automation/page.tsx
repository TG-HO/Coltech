"use client";

import { motion } from "framer-motion";
import { Activity, Power, AlertCircle, RefreshCcw } from "lucide-react";

export default function AutomationPage() {
  return (
    <div className="w-full min-h-screen bg-brand-navy pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <span className="text-brand-sky font-bold tracking-[0.2em] text-sm uppercase mb-6 block">
            Industrial Edge
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-tight max-w-4xl mb-8">
            Pump Automation & <br /> Network Orchestration.
          </h1>
          <div className="w-24 h-1 bg-brand-teal mb-8"></div>
          <p className="text-brand-light text-xl leading-relaxed max-w-2xl opacity-90 border-l-2 border-brand-teal pl-6">
            Hardware-to-software integration protocols designed specifically for fuel station management networks and retail POS.
          </p>
        </motion.div>

        {/* Technical Schematic Block */}
        <div className="w-full bg-[#1D303D] border border-brand-teal/20 p-12 md:p-20 relative overflow-hidden mb-24">
          <h2 className="text-white text-3xl font-bold mb-12 tracking-tight">Hardware Integration Map</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              { label: "Fuel Dispensers", sub: "Flow control loops" },
              { label: "Wetstock Sensors", sub: "Tank level telemetry" },
              { label: "Edge POS Terminals", sub: "Real-time sync layers" },
            ].map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border border-brand-teal/30 p-6 flex flex-col items-start bg-brand-navy backdrop-blur-sm"
              >
                <div className="w-3 h-3 bg-brand-teal rounded-sm mb-4"></div>
                <h4 className="text-white font-bold text-lg mb-1">{node.label}</h4>
                <p className="text-brand-light/70 text-sm">{node.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* SVG Connection Lines representing schematics */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
            <line x1="10%" y1="60%" x2="50%" y2="60%" stroke="#6D9DC5" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="50%" y1="60%" x2="90%" y2="60%" stroke="#6D9DC5" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* Realistic Dashboard Wireframe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-brand-navy border border-brand-teal/20 p-8 flex flex-col shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-brand-teal/20 pb-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-brand-light/50 text-sm font-bold tracking-widest uppercase">Live Operational Dashboard</span>
            </div>
            <div className="flex items-center gap-2 text-brand-sky text-sm">
              <RefreshCcw className="w-4 h-4 animate-spin-slow" />
              <span>SYNCING...</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Sidebar Active Nodes */}
            <div className="md:col-span-1 flex flex-col gap-4">
              {[
                { id: "PUMP_01", status: "ACTIVE", icon: Power, color: "text-green-400" },
                { id: "PUMP_02", status: "IDLE", icon: Power, color: "text-yellow-400" },
                { id: "TANK_S1", status: "WARNING", icon: AlertCircle, color: "text-red-400" },
              ].map((node, idx) => (
                <div key={idx} className="bg-[#1D303D] p-4 rounded-sm border border-brand-teal/10 flex items-center justify-between">
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
              
              <div className="bg-[#1D303D] p-6 rounded-sm border border-brand-teal/10 flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <Activity className="w-5 h-5 text-brand-sky" />
                  <span className="text-white font-bold uppercase tracking-widest text-sm">Real-Time Flow Telemetry (L/min)</span>
                </div>
                {/* Simulated Chart Graph */}
                <div className="w-full h-32 flex items-end gap-1 opacity-80">
                  {[35, 60, 45, 80, 50, 75, 40, 90, 65, 55, 85, 45, 70, 30, 80, 55, 95, 40, 60, 85, 50, 75, 35, 65, 90, 45, 80, 55, 70, 40, 85, 60, 95, 50, 75, 45, 80, 65, 55, 90].map((height, i) => {
                    return (
                      <div 
                        key={i} 
                        className="flex-1 bg-brand-teal/40 hover:bg-brand-sky transition-colors duration-300"
                        style={{ height: `${height}%` }}
                      ></div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#1D303D] p-6 rounded-sm border border-brand-teal/10 flex flex-col justify-center">
                  <span className="text-brand-light/60 text-xs font-bold uppercase tracking-widest mb-2">Total Volume Dispensed</span>
                  <span className="text-white text-4xl font-mono">14,204.5 <span className="text-brand-sky text-xl">L</span></span>
                </div>
                <div className="bg-[#1D303D] p-6 rounded-sm border border-brand-teal/10 flex flex-col justify-center">
                  <span className="text-brand-light/60 text-xs font-bold uppercase tracking-widest mb-2">Network Latency</span>
                  <span className="text-white text-4xl font-mono text-green-400">12<span className="text-brand-light/40 text-xl ml-1">ms</span></span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
