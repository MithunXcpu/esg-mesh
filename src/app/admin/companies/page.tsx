"use client";

import { useState } from "react";
import { companies } from "@/data/companies";
import { ScoreBadge } from "@/components/ScoreBadge";
import { Search, Building } from "lucide-react";

export default function AdminCompaniesPage() {
  const [search, setSearch] = useState("");
  const [sectorFilter, setSectorFilter] = useState("All");

  const sectors = ["All", ...Array.from(new Set(companies.map((c) => c.sector))).sort()];

  const filtered = companies.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.ticker.toLowerCase().includes(search.toLowerCase());
    const matchesSector = sectorFilter === "All" || c.sector === sectorFilter;
    return matchesSearch && matchesSector;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs text-admin font-medium px-2 py-0.5 bg-admin/10 rounded-full">Admin</span>
      </div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Company ESG Database</h1>
        <span className="text-xs text-muted">{companies.length} companies</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search companies or tickers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:border-admin"
          />
        </div>
        <select
          value={sectorFilter}
          onChange={(e) => setSectorFilter(e.target.value)}
          className="px-3 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:border-admin"
        >
          {sectors.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="grid grid-cols-12 gap-2 p-3 text-xs text-muted font-medium border-b border-border">
          <span className="col-span-3">Company</span>
          <span className="col-span-1">Ticker</span>
          <span className="col-span-2">Sector</span>
          <span className="col-span-1 text-center">Overall</span>
          <span className="col-span-1 text-center">E</span>
          <span className="col-span-1 text-center">S</span>
          <span className="col-span-1 text-center">G</span>
          <span className="col-span-2 text-right">Source</span>
        </div>
        <div className="max-h-[600px] overflow-y-auto">
          {filtered.map((c) => (
            <div key={c.id} className="grid grid-cols-12 gap-2 p-3 items-center text-sm border-b border-border/50 hover:bg-card-hover transition-colors">
              <span className="col-span-3 flex items-center gap-2">
                <Building className="w-4 h-4 text-muted" />
                <span className="font-medium truncate">{c.name}</span>
              </span>
              <span className="col-span-1 text-xs text-muted">{c.ticker}</span>
              <span className="col-span-2 text-xs text-muted">{c.sector}</span>
              <span className="col-span-1 text-center">
                <ScoreBadge score={c.esgOverall} />
              </span>
              <span className="col-span-1 text-center text-xs font-medium" style={{ color: c.eScore >= 70 ? "var(--success)" : c.eScore >= 40 ? "var(--warning)" : "var(--danger)" }}>
                {c.eScore}
              </span>
              <span className="col-span-1 text-center text-xs font-medium" style={{ color: c.sScore >= 70 ? "var(--success)" : c.sScore >= 40 ? "var(--warning)" : "var(--danger)" }}>
                {c.sScore}
              </span>
              <span className="col-span-1 text-center text-xs font-medium" style={{ color: c.gScore >= 70 ? "var(--success)" : c.gScore >= 40 ? "var(--warning)" : "var(--danger)" }}>
                {c.gScore}
              </span>
              <span className="col-span-2 text-right text-xs text-muted truncate">{c.source}</span>
            </div>
          ))}
        </div>
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-muted text-sm py-8">No companies found.</div>
      )}
    </div>
  );
}
