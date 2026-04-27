import React from 'react';
import { TrendingUp, Package, DollarSign, CreditCard } from 'lucide-react';
import { orders } from '../data';

export const KPIs = () => {
  const totalRevenue = orders.reduce((sum, o) => sum + o.price, 0);
  const totalOrders = orders.length;
  const avgOrderValue = totalRevenue / totalOrders;
  const topProduct = "Slim-Fit Denim Jeans"; 

  const items = [
    { label: 'TOTAL REVENUE', value: `$${totalRevenue.toLocaleString()}`, trend: '+12.5% from last month', trendColor: 'text-emerald-600' },
    { label: 'TOTAL ORDERS', value: totalOrders.toString(), trend: '+4.2% since yesterday', trendColor: 'text-emerald-600' },
    { label: 'AVG. ORDER VALUE', value: `$${avgOrderValue.toFixed(2)}`, trend: '-1.8% from prev. period', trendColor: 'text-rose-600' },
    { label: 'CONVERSION RATE', value: '3.82%', trend: 'Target goal: 4.00%', trendColor: 'text-zinc-500' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <div key={item.label} className="bg-white p-6 border border-zinc-200 rounded-xl shadow-lg transition-all hover:border-zinc-300 group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
              {item.label}
            </span>
          </div>
          <div className="text-3xl font-bold text-zinc-900 tracking-tight">
            {item.value}
          </div>
          <div className={`mt-3 text-[10px] font-semibold flex items-center gap-1 ${item.trendColor}`}>
             {item.trend}
          </div>
        </div>
      ))}
    </div>
  );
};

export const OrdersTable = () => {
  const recentOrders = [...orders].reverse().slice(0, 10);
  
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-white/5 text-slate-400 border-b border-white/5">
            <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">Transaction ID</th>
            <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">Product</th>
            <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">Date</th>
            <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider text-right">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {recentOrders.map((order, i) => (
            <tr key={`${order.id}-${i}`} className="hover:bg-white/5 transition-colors group">
              <td className="px-6 py-4 text-slate-400 font-mono text-xs">{order.id}</td>
              <td className="px-6 py-4 text-white font-medium text-xs">{order.product}</td>
              <td className="px-6 py-4 text-slate-500 font-mono text-xs italic">{order.date}</td>
              <td className="px-6 py-4 text-white font-bold text-xs text-right">${order.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
