import { Transaction, UserPoints, Reward } from "./types";

const STORAGE_KEYS = {
  TRANSACTIONS: "esg-mesh-transactions",
  POINTS: "esg-mesh-points",
  REWARDS: "esg-mesh-rewards",
};

export function getTransactions(): Transaction[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
  return data ? JSON.parse(data) : [];
}

export function saveTransactions(transactions: Transaction[]) {
  localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(transactions));
}

export function addTransaction(transaction: Transaction) {
  const transactions = getTransactions();
  transactions.unshift(transaction);
  saveTransactions(transactions);
}

export function getUserPoints(): UserPoints {
  if (typeof window === "undefined") return { balance: 0, lifetimeEarned: 0 };
  const data = localStorage.getItem(STORAGE_KEYS.POINTS);
  return data ? JSON.parse(data) : { balance: 7450, lifetimeEarned: 7450 };
}

export function saveUserPoints(points: UserPoints) {
  localStorage.setItem(STORAGE_KEYS.POINTS, JSON.stringify(points));
}

export function redeemReward(reward: Reward): boolean {
  const points = getUserPoints();
  if (points.balance < reward.pointsCost) return false;
  points.balance -= reward.pointsCost;
  saveUserPoints(points);
  return true;
}
