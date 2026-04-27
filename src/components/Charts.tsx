import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { getAggregatedDailyRevenue, getProductPerformance, getPaymentDistribution } from '../data';

const COLORS = ['#3b82f6', '#4f46e5', '#10b981', '#f59e0b', '#ef4444'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0f0f0f] border border-white/10 p-3 shadow-2xl rounded-lg backdrop-blur-md">
        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-sm font-semibold text-white">
          ${payload[0].value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </p>
      </div>
    );
  }
  return null;
};

export const RevenueTrend = () => {
  const data = getAggregatedDailyRevenue();
  return (
    <div className="h-[280px] w-full mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
          <XAxis 
            dataKey="date" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: '#64748b', fontFamily: 'monospace' }}
            dy={10}
            tickFormatter={(str) => str.split('-').slice(1).join('/')}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: '#64748b', fontFamily: 'monospace' }}
            tickFormatter={(val) => `$${val}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="revenue" 
            stroke="#3b82f6" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorRevenue)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export const ProductBarChart = () => {
  const data = getProductPerformance().slice(0, 6);
  return (
    <div className="h-[250px] w-full mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.05)" />
          <XAxis type="number" hide />
          <YAxis 
            dataKey="product" 
            type="category" 
            width={120}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 9, fill: '#94a3b8', fontFamily: 'monospace' }}
          />
          <Tooltip 
            cursor={{ fill: 'rgba(255,255,255,0.03)' }}
            content={({ active, payload }: any) => {
              if (active && payload?.[0]) {
                return (
                  <div className="bg-[#0f0f0f] border border-white/10 text-white p-2 text-xs font-mono rounded">
                    {payload[0].payload.product}: ${payload[0].value}
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="revenue" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={16} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const PaymentPieChart = () => {
  const data = getPaymentDistribution();
  return (
    <div className="h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={8}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
             content={({ active, payload }: any) => {
              if (active && payload?.[0]) {
                return (
                  <div className="bg-[#0f0f0f] border border-white/10 text-white p-2 text-xs font-mono rounded">
                    {payload[0].name}: {payload[0].value} orders
                  </div>
                );
              }
              return null;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 gap-3 mt-4">
        {data.map((item, i) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
            <span className="text-[10px] font-mono text-slate-500 uppercase flex-1">{item.name}</span>
            <span className="text-[10px] font-mono text-white font-bold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
