"use client";

import Link from "next/link";
import { StatsCard } from "@/components/StatsCard";
import { Users, Receipt, TrendingUp, Gift, BarChart3, Building, Award } from "lucide-react";

const adminLinks = [
  { href: "/admin/analytics", label: "Analytics", desc: "Engagement metrics, ESG trends, and user insights", icon: BarChart3 },
  { href: "/admin/rewards", label: "Rewards Management", desc: "Configure rewards, set point costs, manage offers", icon: Gift },
  { href: "/admin/companies", label: "Company Database", desc: "View and manage the ESG company database", icon: Building },
];

export default function AdminPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs text-admin font-medium px-2 py-0.5 bg-admin/10 rounded-full">Admin Portal</span>
      </div>
      <h1 className="text-2xl font-bold mb-6">Brand Dashboard</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard icon={Users} label="Active Users" value="1,247" sub="+12% this month" color="text-primary" />
        <StatsCard icon={Receipt} label="Transactions Scored" value="18,432" sub="Last 30 days" />
        <StatsCard icon={TrendingUp} label="Avg ESG Score" value="67" sub="Up from 62 last month" color="text-success" />
        <StatsCard icon={Award} label="Rewards Redeemed" value="342" sub="$4,200 in value" color="text-warning" />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {adminLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-card border border-border rounded-xl p-5 hover:border-admin/30 transition-colors group"
          >
            <link.icon className="w-8 h-8 text-admin mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-1">{link.label}</h3>
            <p className="text-xs text-muted">{link.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
