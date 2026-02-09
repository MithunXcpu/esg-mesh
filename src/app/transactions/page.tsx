"use client";

import { useState, useEffect } from "react";
import { mockTransactions } from "@/data/mockTransactions";
import { getTransactions } from "@/lib/storage";
import { Transaction } from "@/lib/types";
import { TransactionRow } from "@/components/TransactionRow";
import { Search } from "lucide-react";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  useEffect(() => {
    const saved = getTransactions();
    setTransactions(saved.length > 0 ? saved : mockTransactions);
  }, []);

  const categories = ["All", ...Array.from(new Set(transactions.map((t) => t.category)))];

  const filtered = transactions.filter((t) => {
    const matchesSearch = t.merchant.toLowerCase().includes(search.toLowerCase()) || (t.matchedCompanyName || "").toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "All" || t.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Transactions</h1>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search merchants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                categoryFilter === cat ? "bg-primary/10 text-primary border border-primary/30" : "bg-card border border-border text-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <span className="text-sm font-medium">{filtered.length} transactions</span>
          <span className="text-xs text-muted">
            Avg ESG: {filtered.length > 0 ? Math.round(filtered.reduce((s, t) => s + t.esgScore, 0) / filtered.length) : 0}
          </span>
        </div>
        <div className="divide-y divide-border/50">
          {filtered.map((t) => (
            <TransactionRow key={t.id} transaction={t} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="p-8 text-center text-muted text-sm">No transactions found.</div>
        )}
      </div>
    </div>
  );
}
