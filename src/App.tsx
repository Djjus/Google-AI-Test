/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { KPIs, OrdersTable } from './components/KPICards';
import { RevenueTrend, ProductBarChart, PaymentPieChart } from './components/Charts';
import { LayoutDashboard, Download, Filter, Bell, User } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-blue-500 selection:text-white flex flex-col">
      {/* Top Navigation */}
      <nav className="h-16 border-b border-white/10 flex items-center justify-between px-8 bg-[#0f0f0f] sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="text-xl font-bold tracking-tighter text-white uppercase">
            Trouser<span className="text-blue-500">Trends</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="text-blue-400 border-b-2 border-blue-500 pb-5 pt-5">Overview</a>
            <a href="#" className="hover:text-slate-200 py-5 transition-colors">Products</a>
            <a href="#" className="hover:text-slate-200 py-5 transition-colors">Inventory</a>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm font-mono">
          <div className="bg-slate-800 px-3 py-1.5 rounded border border-white/5 text-[10px] text-slate-400">
            AUG 15 - OCT 07, 2025
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <Bell size={18} />
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white ring-2 ring-white/10">
              JV
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8 flex-1 w-full max-w-7xl mx-auto space-y-6">
        {/* Header Stats */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <KPIs />
        </motion.section>

        <div className="grid grid-cols-12 gap-6">
          {/* Main Chart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="col-span-12 lg:col-span-8 bg-[#141414] border border-white/5 rounded-xl p-6 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight">Revenue Dynamics</h3>
                <p className="text-xs text-slate-500 font-mono mt-1">STREAMING PERFORMANCE DATA</p>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold rounded">LIVE</span>
                <button className="flex items-center gap-2 px-3 py-1 bg-slate-800 text-slate-300 text-[10px] font-bold rounded hover:bg-slate-700 transition-colors">
                  <Download size={12} /> EXPORT
                </button>
              </div>
            </div>
            <RevenueTrend />
          </motion.div>

          {/* Sidebar Chart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="col-span-12 lg:col-span-4 bg-[#141414] border border-white/5 rounded-xl p-6 shadow-2xl flex flex-col"
          >
            <h3 className="text-lg font-semibold text-white mb-6 tracking-tight">Payment Distribution</h3>
            <div className="flex-1">
              <PaymentPieChart />
            </div>
            <div className="mt-4 pt-4 border-t border-white/5">
              <button className="w-full py-2 bg-slate-800 text-slate-300 text-xs font-semibold rounded hover:bg-slate-700 transition-colors uppercase tracking-wider">
                View Full Audit
              </button>
            </div>
          </motion.div>

          {/* Bottom Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-12 lg:col-span-5 bg-[#141414] border border-white/5 rounded-xl p-6 shadow-2xl"
          >
            <h3 className="text-lg font-semibold text-white mb-6 tracking-tight">Product Performance</h3>
            <ProductBarChart />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="col-span-12 lg:col-span-7 bg-[#141414] border border-white/5 rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="p-6 border-b border-white/5">
              <h3 className="text-lg font-semibold text-white tracking-tight">Recent Operations</h3>
            </div>
            <OrdersTable />
          </motion.div>
        </div>
      </main>

      {/* Footer Status Bar */}
      <footer className="h-10 bg-[#0a0a0a] border-t border-white/10 flex items-center justify-between px-8 text-[10px] text-slate-500 font-mono">
        <div className="flex gap-4">
          <span className="flex items-center gap-2 italic">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div> 
            OPERATIONAL
          </span>
          <span className="opacity-50">API_LATENCY: 12ms</span>
        </div>
        <div className="tracking-widest">© 2025 TROUSER TRENDS ANALYTICS ENGINE</div>
      </footer>
    </div>
  );
}
