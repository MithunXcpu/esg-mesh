"use client";

import { mockLeaderboard } from "@/data/mockLeaderboard";
import { Trophy, Flame, Medal } from "lucide-react";
import { ScoreBadge } from "@/components/ScoreBadge";

export default function LeaderboardPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-6 h-6 text-primary" />
        <h1 className="text-2xl font-bold">Leaderboard</h1>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {mockLeaderboard.slice(0, 3).map((entry, i) => {
          const colors = ["text-yellow-400", "text-gray-400", "text-amber-600"];
          const bgs = ["border-yellow-400/20 bg-yellow-400/5", "border-gray-400/20 bg-gray-400/5", "border-amber-600/20 bg-amber-600/5"];
          return (
            <div key={entry.rank} className={`bg-card border rounded-xl p-4 text-center ${bgs[i]}`}>
              <Medal className={`w-6 h-6 mx-auto mb-2 ${colors[i]}`} />
              <p className="font-bold text-sm">{entry.username}</p>
              <p className={`text-2xl font-bold mt-1 ${colors[i]}`}>{entry.esgScore}</p>
              <p className="text-xs text-muted">ESG Score</p>
              <div className="flex items-center justify-center gap-1 mt-2 text-xs text-muted">
                <Flame className="w-3 h-3 text-warning" />
                {entry.streak} day streak
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="grid grid-cols-12 gap-2 p-3 text-xs text-muted font-medium border-b border-border">
          <span className="col-span-1">#</span>
          <span className="col-span-4">User</span>
          <span className="col-span-2 text-center">ESG Score</span>
          <span className="col-span-2 text-center">Points</span>
          <span className="col-span-3 text-right">Streak</span>
        </div>
        {mockLeaderboard.map((entry) => (
          <div
            key={entry.rank}
            className={`grid grid-cols-12 gap-2 p-3 items-center text-sm hover:bg-card-hover transition-colors ${
              entry.username === "MithunM" ? "bg-primary/5 border-l-2 border-primary" : ""
            }`}
          >
            <span className="col-span-1 text-muted font-medium">{entry.rank}</span>
            <span className="col-span-4 font-medium truncate">
              {entry.username}
              {entry.username === "MithunM" && <span className="text-xs text-primary ml-1">(You)</span>}
            </span>
            <span className="col-span-2 text-center">
              <ScoreBadge score={entry.esgScore} />
            </span>
            <span className="col-span-2 text-center text-muted">{entry.points.toLocaleString()}</span>
            <span className="col-span-3 text-right flex items-center justify-end gap-1">
              {entry.streak > 0 && <Flame className="w-3 h-3 text-warning" />}
              <span className="text-muted">{entry.streak}d</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
