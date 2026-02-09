"use client";

import { useState, useEffect } from "react";
import { mockRewards } from "@/data/mockRewards";
import { getUserPoints, redeemReward } from "@/lib/storage";
import { UserPoints, Reward } from "@/lib/types";
import { Gift, Coins, TreePine, CreditCard, Award, Heart } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  "Carbon Offset": TreePine,
  "Partner Discount": CreditCard,
  Badge: Award,
  "Gift Card": Gift,
  Donation: Heart,
};

export default function RewardsPage() {
  const [points, setPoints] = useState<UserPoints>({ balance: 0, lifetimeEarned: 0 });
  const [redeemed, setRedeemed] = useState<Set<string>>(new Set());

  useEffect(() => {
    setPoints(getUserPoints());
  }, []);

  function handleRedeem(reward: Reward) {
    if (redeemReward(reward)) {
      setPoints(getUserPoints());
      setRedeemed((prev) => new Set(prev).add(reward.id));
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Rewards</h1>
        <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-xl">
          <Coins className="w-5 h-5 text-primary" />
          <span className="text-lg font-bold text-primary">{points.balance.toLocaleString()}</span>
          <span className="text-xs text-muted">points</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockRewards.map((reward) => {
          const Icon = categoryIcons[reward.category] || Gift;
          const canAfford = points.balance >= reward.pointsCost;
          const wasRedeemed = redeemed.has(reward.id);

          return (
            <div key={reward.id} className="bg-card border border-border rounded-xl p-5 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs text-muted px-2 py-0.5 bg-background border border-border rounded-full">
                  {reward.category}
                </span>
              </div>
              <h3 className="font-semibold text-sm mb-1">{reward.name}</h3>
              <p className="text-xs text-muted flex-1 mb-4">{reward.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm font-bold text-primary">
                  <Coins className="w-4 h-4" />
                  {reward.pointsCost.toLocaleString()}
                </div>
                <button
                  onClick={() => handleRedeem(reward)}
                  disabled={!canAfford || wasRedeemed}
                  className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    wasRedeemed
                      ? "bg-success/10 text-success border border-success/30"
                      : canAfford
                      ? "bg-primary hover:bg-primary-hover text-white"
                      : "bg-card border border-border text-muted"
                  }`}
                >
                  {wasRedeemed ? "Redeemed!" : canAfford ? "Redeem" : "Not enough"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
