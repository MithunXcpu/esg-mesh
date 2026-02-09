export interface Company {
  id: string;
  name: string;
  ticker: string;
  sector: string;
  esgOverall: number;
  eScore: number;
  sScore: number;
  gScore: number;
  source: string;
  lastUpdated: string;
}

export interface Transaction {
  id: string;
  userId: string;
  merchant: string;
  amount: number;
  date: string;
  category: string;
  matchedCompanyId: string | null;
  matchedCompanyName: string | null;
  esgScore: number;
  pointsEarned: number;
}

export interface UserPoints {
  balance: number;
  lifetimeEarned: number;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  pointsCost: number;
  category: string;
  active: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  username: string;
  esgScore: number;
  points: number;
  streak: number;
}

export type ESGRating = "high" | "medium" | "low";

export function getESGRating(score: number): ESGRating {
  if (score >= 70) return "high";
  if (score >= 40) return "medium";
  return "low";
}

export function getESGColor(score: number): string {
  if (score >= 70) return "text-success";
  if (score >= 40) return "text-warning";
  return "text-danger";
}

export function getESGBgColor(score: number): string {
  if (score >= 70) return "bg-success/10 text-success border-success/20";
  if (score >= 40) return "bg-warning/10 text-warning border-warning/20";
  return "bg-danger/10 text-danger border-danger/20";
}
