import Fuse from "fuse.js";
import { companies, sectorBenchmarks } from "@/data/companies";
import { Company, Transaction } from "./types";

const fuse = new Fuse(companies, {
  keys: ["name", "ticker"],
  threshold: 0.4,
  includeScore: true,
});

export function matchCompany(merchantName: string): Company | null {
  const results = fuse.search(merchantName);
  if (results.length > 0 && results[0].score !== undefined && results[0].score < 0.5) {
    return results[0].item;
  }
  return null;
}

export function getSectorBenchmark(category: string): number {
  const mapping: Record<string, string> = {
    Electronics: "Technology",
    Software: "Technology",
    "Food & Drink": "Food & Beverage",
    Groceries: "Food & Beverage",
    Clothing: "Apparel",
    Gas: "Energy",
    Shopping: "Consumer",
    Home: "Consumer",
    Entertainment: "Entertainment",
    Travel: "Airlines",
    Transport: "Transport",
    Health: "Healthcare",
    Auto: "Automotive",
  };
  const sector = mapping[category] || "Consumer";
  return sectorBenchmarks[sector] || 55;
}

export function calculatePoints(esgScore: number, amount: number): number {
  const scoreFactor = Math.floor(esgScore / 10);
  const amountFactor = Math.max(1, Math.log10(amount + 1));
  return Math.floor(scoreFactor * amountFactor * amount * 0.01);
}

export function scoreTransaction(merchant: string, amount: number, category: string): Partial<Transaction> {
  const company = matchCompany(merchant);
  if (company) {
    const points = calculatePoints(company.esgOverall, amount);
    return {
      matchedCompanyId: company.id,
      matchedCompanyName: company.name,
      esgScore: company.esgOverall,
      pointsEarned: points,
    };
  }
  const benchmark = getSectorBenchmark(category);
  const points = calculatePoints(benchmark, amount);
  return {
    matchedCompanyId: null,
    matchedCompanyName: null,
    esgScore: benchmark,
    pointsEarned: points,
  };
}

export function calculateUserScore(transactions: Transaction[]): number {
  if (transactions.length === 0) return 0;
  const weightedSum = transactions.reduce((sum, t) => sum + t.esgScore * t.amount, 0);
  const totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0);
  return totalAmount > 0 ? Math.round(weightedSum / totalAmount) : 0;
}

export function getCategoryBreakdown(transactions: Transaction[]): { category: string; avgScore: number; count: number; totalSpent: number }[] {
  const categories = new Map<string, { scores: number[]; amounts: number[] }>();
  for (const t of transactions) {
    const existing = categories.get(t.category) || { scores: [], amounts: [] };
    existing.scores.push(t.esgScore);
    existing.amounts.push(t.amount);
    categories.set(t.category, existing);
  }
  return Array.from(categories.entries()).map(([category, data]) => ({
    category,
    avgScore: Math.round(data.scores.reduce((a, b) => a + b, 0) / data.scores.length),
    count: data.scores.length,
    totalSpent: data.amounts.reduce((a, b) => a + b, 0),
  }));
}

export function getScoreTrend(transactions: Transaction[]): { date: string; score: number }[] {
  const sorted = [...transactions].sort((a, b) => a.date.localeCompare(b.date));
  const dailyScores = new Map<string, number[]>();
  for (const t of sorted) {
    const existing = dailyScores.get(t.date) || [];
    existing.push(t.esgScore);
    dailyScores.set(t.date, existing);
  }
  return Array.from(dailyScores.entries()).map(([date, scores]) => ({
    date,
    score: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
  }));
}
