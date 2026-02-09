"use client";

import { useState, useEffect } from "react";
import { mockTransactions } from "@/data/mockTransactions";
import { getTransactions } from "@/lib/storage";
import { calculateUserScore, getCategoryBreakdown, getScoreTrend } from "@/lib/scoring";
import { Transaction } from "@/lib/types";
import { ESGScoreGauge } from "@/components/ESGScoreGauge";
import { StatsCard } from "@/components/StatsCard";
import { TransactionRow } from "@/components/TransactionRow";
import { Coins, TrendingUp, Flame, Receipt } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from "recharts";

const CHART_COLORS = ["#22c55e", "#f59e0b", "#ef4444", "#3b82f6", "#8b5cf6", "#06b6d4", "#f97316", "#ec4899"];

export default function DashboardPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const saved = getTransactions();
    setTransactions(saved.length > 0 ? saved : mockTransactions);
  }, []);

  const score = calculateUserScore(transactions);
  const totalPoints = transactions.reduce((sum, t) => sum + t.pointsEarned, 0);
  const totalSpent = transactions.reduce((sum, t) => sum + t.amount, 0);
  const categories = getCategoryBreakdown(transactions);
  const trend = getScoreTrend(transactions);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your ESG Dashboard</h1>

      <div className="grid lg:grid-cols-4 gap-6 mb-8">
        <div className="lg:col-span-1 bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center">
          <ESGScoreGauge score={score} size="lg" label="Overall ESG Score" />
          <p className="text-xs text-muted mt-2">Based on {transactions.length} transactions</p>
        </div>
        <div className="lg:col-span-3 grid sm:grid-cols-3 gap-4">
          <StatsCard icon={Coins} label="Points Earned" value={totalPoints.toLocaleString()} sub="Lifetime total" color="text-primary" />
          <StatsCard icon={Receipt} label="Transactions" value={transactions.length.toString()} sub={`$${totalSpent.toFixed(0)} total spend`} />
          <StatsCard icon={Flame} label="Streak" value="16 days" sub="Keep it going!" color="text-warning" />
          <div className="sm:col-span-3 bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted mb-2">Score Trend</p>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trend} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                  <defs>
                    <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" tick={{ fontSize: 9, fill: "#64748b" }} axisLine={false} tickLine={false} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 9, fill: "#64748b" }} axisLine={false} tickLine={false} width={25} />
                  <Tooltip contentStyle={{ background: "#111a16", border: "1px solid #1e3a2c", borderRadius: 8, fontSize: 12, color: "#e2e8f0" }} />
                  <Area type="monotone" dataKey="score" stroke="#10b981" fill="url(#scoreGrad)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-xl">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="font-semibold text-sm">Recent Transactions</h2>
              <span className="text-xs text-muted">{transactions.length} total</span>
            </div>
            <div className="divide-y divide-border/50">
              {transactions.slice(0, 10).map((t) => (
                <TransactionRow key={t.id} transaction={t} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-card border border-border rounded-xl p-4">
            <h2 className="font-semibold text-sm mb-3">By Category</h2>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categories} layout="vertical" margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                  <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 9, fill: "#64748b" }} axisLine={false} tickLine={false} />
                  <YAxis dataKey="category" type="category" tick={{ fontSize: 9, fill: "#64748b" }} axisLine={false} tickLine={false} width={70} />
                  <Tooltip contentStyle={{ background: "#111a16", border: "1px solid #1e3a2c", borderRadius: 8, fontSize: 12, color: "#e2e8f0" }} />
                  <Bar dataKey="avgScore" radius={[0, 4, 4, 0]}>
                    {categories.map((_, i) => (
                      <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-3">
              {categories.map((c, i) => (
                <div key={c.category} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: CHART_COLORS[i % CHART_COLORS.length] }} />
                    <span className="text-muted">{c.category}</span>
                  </div>
                  <span className="font-medium">{c.avgScore}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
