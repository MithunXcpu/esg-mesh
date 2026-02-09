"use client";

import { useState } from "react";
import { Upload, Plus, FileText } from "lucide-react";
import { scoreTransaction } from "@/lib/scoring";
import { addTransaction, getTransactions } from "@/lib/storage";
import { Transaction } from "@/lib/types";
import { TransactionRow } from "@/components/TransactionRow";

export default function UploadPage() {
  const [mode, setMode] = useState<"manual" | "csv">("manual");
  const [merchant, setMerchant] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [category, setCategory] = useState("Shopping");
  const [recentlyAdded, setRecentlyAdded] = useState<Transaction[]>([]);
  const [csvStatus, setCsvStatus] = useState("");

  const categories = ["Shopping", "Food & Drink", "Groceries", "Electronics", "Clothing", "Gas", "Travel", "Transport", "Entertainment", "Software", "Home", "Health", "Auto"];

  function handleManualAdd() {
    if (!merchant || !amount) return;
    const scoring = scoreTransaction(merchant, parseFloat(amount), category);
    const transaction: Transaction = {
      id: `t-${Date.now()}`,
      userId: "u1",
      merchant,
      amount: parseFloat(amount),
      date,
      category,
      matchedCompanyId: scoring.matchedCompanyId || null,
      matchedCompanyName: scoring.matchedCompanyName || null,
      esgScore: scoring.esgScore || 55,
      pointsEarned: scoring.pointsEarned || 0,
    };
    addTransaction(transaction);
    setRecentlyAdded((prev) => [transaction, ...prev]);
    setMerchant("");
    setAmount("");
  }

  function handleCSVUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const lines = text.split("\n").filter((l) => l.trim());
      const header = lines[0].toLowerCase();
      const hasHeader = header.includes("merchant") || header.includes("amount") || header.includes("date");
      const dataLines = hasHeader ? lines.slice(1) : lines;

      let added = 0;
      for (const line of dataLines) {
        const parts = line.split(",").map((p) => p.trim().replace(/^"|"$/g, ""));
        if (parts.length < 3) continue;
        const [m, a, d, cat] = parts;
        const amt = parseFloat(a);
        if (!m || isNaN(amt)) continue;
        const scoring = scoreTransaction(m, amt, cat || "Shopping");
        const transaction: Transaction = {
          id: `t-${Date.now()}-${added}`,
          userId: "u1",
          merchant: m,
          amount: amt,
          date: d || new Date().toISOString().split("T")[0],
          category: cat || "Shopping",
          matchedCompanyId: scoring.matchedCompanyId || null,
          matchedCompanyName: scoring.matchedCompanyName || null,
          esgScore: scoring.esgScore || 55,
          pointsEarned: scoring.pointsEarned || 0,
        };
        addTransaction(transaction);
        setRecentlyAdded((prev) => [transaction, ...prev]);
        added++;
      }
      setCsvStatus(`Imported ${added} transactions from CSV`);
    };
    reader.readAsText(file);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Add Transactions</h1>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setMode("manual")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "manual" ? "bg-primary/10 text-primary border border-primary/30" : "bg-card border border-border text-muted"
          }`}
        >
          <Plus className="w-4 h-4" /> Manual Entry
        </button>
        <button
          onClick={() => setMode("csv")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "csv" ? "bg-primary/10 text-primary border border-primary/30" : "bg-card border border-border text-muted"
          }`}
        >
          <FileText className="w-4 h-4" /> CSV Upload
        </button>
      </div>

      {mode === "manual" ? (
        <div className="bg-card border border-border rounded-xl p-5 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted mb-1 block">Merchant</label>
              <input
                type="text"
                value={merchant}
                onChange={(e) => setMerchant(e.target.value)}
                placeholder="e.g. Starbucks"
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-xs text-muted mb-1 block">Amount ($)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-xs text-muted mb-1 block">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-xs text-muted mb-1 block">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={handleManualAdd}
            disabled={!merchant || !amount}
            className="w-full py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
          >
            Add Transaction
          </button>
        </div>
      ) : (
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <Upload className="w-10 h-10 text-muted mx-auto mb-3" />
            <p className="text-sm text-muted mb-1">Upload a CSV file</p>
            <p className="text-xs text-muted mb-4">Format: merchant, amount, date, category</p>
            <label className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-medium cursor-pointer transition-colors">
              <FileText className="w-4 h-4" /> Choose File
              <input type="file" accept=".csv" onChange={handleCSVUpload} className="hidden" />
            </label>
          </div>
          {csvStatus && <p className="text-sm text-primary mt-3">{csvStatus}</p>}
        </div>
      )}

      {recentlyAdded.length > 0 && (
        <div className="mt-8">
          <h2 className="text-sm font-semibold text-muted mb-3">Recently Added</h2>
          <div className="bg-card border border-border rounded-xl divide-y divide-border/50">
            {recentlyAdded.map((t) => (
              <TransactionRow key={t.id} transaction={t} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
