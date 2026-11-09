import { Link } from "@tanstack/react-router";
import { BadgeCheck, MapPin } from "lucide-react";
import { type Store, valueScore } from "@/data/stores";
import { cn } from "@/lib/utils";
import { Score } from "./brand";

export function StoreCard({
  store,
  rank,
  active,
  onHover,
}: {
  store: Store;
  rank?: number | undefined;
  active?: boolean | undefined;
  onHover?: (id?: string) => void;
}) {
  return (
    <Link
      to="/tienda/$id"
      params={{ id: store.id }}
      onMouseEnter={() => onHover?.(store.id)}
      onMouseLeave={() => onHover?.(undefined)}
      className={cn(
        "surface flex gap-4 p-4 transition-all hover:-translate-y-0.5 hover:border-champagne/60",
        active && "border-champagne/70",
      )}
    >
      {rank !== undefined && (
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-lg",
            rank === 1 ? "bg-gradient-gold text-night" : "border border-bronze/50 text-champagne",
          )}
        >
          {rank}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="flex items-center gap-1.5 font-medium text-cream">
              {store.name}
              {store.verified && <BadgeCheck className="h-4 w-4 text-champagne" />}
            </p>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" /> {store.address} · {store.zone}
            </p>
          </div>
          <Score value={valueScore(store)} />
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-full border border-bronze/40 px-2 py-0.5 text-[11px] text-bronze">{store.priceRange}</span>
          {store.tags.map((t) => (
            <span key={t} className="rounded-full bg-accent px-2 py-0.5 text-[11px] text-accent-foreground">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
