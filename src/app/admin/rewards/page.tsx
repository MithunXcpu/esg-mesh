"use client";

import { mockRewards } from "@/data/mockRewards";
import { Gift, Coins, ToggleLeft, ToggleRight } from "lucide-react";
import { useState } from "react";

export default function AdminRewardsPage() {
  const [rewards, setRewards] = useState(mockRewards);

  function toggleActive(id: string) {
    setRewards((prev) =>
      prev.map((r) => (r.id === id ? { ...r, active: !r.active } : r))
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs text-admin font-medium px-2 py-0.5 bg-admin/10 rounded-full">Admin</span>
      </div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Rewards Management</h1>
        <span className="text-xs text-muted">{rewards.filter((r) => r.active).length} active</span>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="grid grid-cols-12 gap-2 p-3 text-xs text-muted font-medium border-b border-border">
          <span className="col-span-1">Status</span>
          <span className="col-span-4">Reward</span>
          <span className="col-span-3">Category</span>
          <span className="col-span-2 text-right">Points Cost</span>
          <span className="col-span-2 text-right">Actions</span>
        </div>
        {rewards.map((reward) => (
          <div key={reward.id} className="grid grid-cols-12 gap-2 p-3 items-center text-sm border-b border-border/50 hover:bg-card-hover transition-colors">
            <span className="col-span-1">
              <span className={`w-2 h-2 rounded-full inline-block ${reward.active ? "bg-success" : "bg-muted"}`} />
            </span>
            <span className="col-span-4">
              <p className="font-medium text-sm">{reward.name}</p>
              <p className="text-xs text-muted truncate">{reward.description}</p>
            </span>
            <span className="col-span-3 text-muted text-xs">{reward.category}</span>
            <span className="col-span-2 text-right flex items-center justify-end gap-1 text-primary font-medium">
              <Coins className="w-3 h-3" />
              {reward.pointsCost.toLocaleString()}
            </span>
            <span className="col-span-2 text-right">
              <button
                onClick={() => toggleActive(reward.id)}
                className="text-muted hover:text-foreground transition-colors"
                title={reward.active ? "Deactivate" : "Activate"}
              >
                {reward.active ? <ToggleRight className="w-5 h-5 text-success" /> : <ToggleLeft className="w-5 h-5" />}
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
