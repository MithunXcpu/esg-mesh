import { getESGRating, getESGBgColor } from "@/lib/types";

interface Props {
  score: number;
}

export function ScoreBadge({ score }: Props) {
  const rating = getESGRating(score);
  const labels = { high: "High", medium: "Med", low: "Low" };

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${getESGBgColor(score)}`}>
      {score} · {labels[rating]}
    </span>
  );
}
