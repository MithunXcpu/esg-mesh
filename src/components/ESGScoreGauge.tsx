"use client";

import { getESGColor } from "@/lib/types";

interface Props {
  score: number;
  size?: "sm" | "md" | "lg";
  label?: string;
}

export function ESGScoreGauge({ score, size = "md", label }: Props) {
  const sizes = { sm: 80, md: 120, lg: 180 };
  const s = sizes[size];
  const strokeWidth = size === "lg" ? 10 : size === "md" ? 8 : 6;
  const radius = (s - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;
  const fontSizes = { sm: "text-lg", md: "text-3xl", lg: "text-5xl" };
  const labelSizes = { sm: "text-xs", md: "text-xs", lg: "text-sm" };

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: s, height: s }}>
        <svg width={s} height={s} className="-rotate-90">
          <circle cx={s / 2} cy={s / 2} r={radius} fill="none" stroke="var(--border)" strokeWidth={strokeWidth} />
          <circle
            cx={s / 2}
            cy={s / 2}
            r={radius}
            fill="none"
            stroke={score >= 70 ? "var(--success)" : score >= 40 ? "var(--warning)" : "var(--danger)"}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-bold ${fontSizes[size]} ${getESGColor(score)}`}>{score}</span>
        </div>
      </div>
      {label && <span className={`text-muted ${labelSizes[size]}`}>{label}</span>}
    </div>
  );
}
