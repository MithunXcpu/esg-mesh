import { Transaction } from "@/lib/types";
import { ScoreBadge } from "./ScoreBadge";
import { Coins } from "lucide-react";

interface Props {
  transaction: Transaction;
}

export function TransactionRow({ transaction: t }: Props) {
  return (
    <div className="flex items-center justify-between py-3 px-4 hover:bg-card-hover rounded-lg transition-colors">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium truncate">{t.merchant}</p>
          {t.matchedCompanyName && (
            <span className="text-xs text-muted">({t.matchedCompanyName})</span>
          )}
        </div>
        <div className="flex items-center gap-3 mt-0.5">
          <span className="text-xs text-muted">{t.date}</span>
          <span className="text-xs text-muted">{t.category}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ScoreBadge score={t.esgScore} />
        <div className="text-right min-w-[80px]">
          <p className="text-sm font-medium">${t.amount.toFixed(2)}</p>
          <p className="text-xs text-primary flex items-center justify-end gap-0.5">
            <Coins className="w-3 h-3" />+{t.pointsEarned}
          </p>
        </div>
      </div>
    </div>
  );
}
