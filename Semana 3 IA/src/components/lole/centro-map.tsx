import { useNavigate } from "@tanstack/react-router";
import { type Store, valueScore } from "@/data/stores";
import { cn } from "@/lib/utils";

const zones = [
  { name: "Parque Bolívar", x: 55, y: 18 },
  { name: "Junín", x: 50, y: 32 },
  { name: "Parque Berrío", x: 40, y: 52 },
  { name: "Carabobo", x: 24, y: 48 },
  { name: "La Playa", x: 72, y: 30 },
  { name: "El Hueco", x: 16, y: 78 },
  { name: "San Juan", x: 42, y: 88 },
];

export function CentroMap({
  stores,
  activeId,
  onHover,
  className,
}: {
  stores: Store[];
  activeId?: string | undefined;
  onHover?: (id?: string) => void;
  className?: string | undefined;
}) {
  const navigate = useNavigate();
  return (
    <div className={cn("map-grid relative overflow-hidden rounded-2xl border border-border", className)}>
      {/* calles */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <g className="stroke-bronze/30" strokeWidth="0.8" fill="none">
          <path d="M0 45 L100 40" />
          <path d="M0 65 L100 58" />
          <path d="M48 0 L45 100" />
          <path d="M30 0 L25 100" />
          <path d="M70 0 L64 100" />
        </g>
        <path d="M60 0 C 65 30, 80 50, 100 70" className="stroke-champagne/25" strokeWidth="2.5" fill="none" />
      </svg>
      {zones.map((z) => (
        <span
          key={z.name}
          className="pointer-events-none absolute -translate-x-1/2 text-[10px] uppercase tracking-widest text-neutral"
          style={{ left: `${z.x}%`, top: `${z.y}%` }}
        >
          {z.name}
        </span>
      ))}
      {stores.map((s, i) => {
        const active = s.id === activeId;
        return (
          <button
            key={s.id}
            onMouseEnter={() => onHover?.(s.id)}
            onMouseLeave={() => onHover?.(undefined)}
            onClick={() => navigate({ to: "/tienda/$id", params: { id: s.id } })}
            className="group absolute -translate-x-1/2 -translate-y-full"
            style={{ left: `${s.x}%`, top: `${s.y}%`, zIndex: active ? 20 : 10 }}
            aria-label={s.name}
          >
            {i === 0 && <span className="animate-pin absolute bottom-0 left-1/2 -ml-3 h-6 w-6 rounded-full bg-gold/50" />}
            <span
              className={cn(
                "relative flex h-8 min-w-8 items-center justify-center rounded-full border-2 px-1.5 text-xs font-bold transition-transform",
                i === 0 || active
                  ? "scale-110 border-cream bg-gradient-gold text-night shadow-gold"
                  : "border-champagne/70 bg-deep text-champagne",
              )}
            >
              {i + 1}
            </span>
            <span
              className={cn(
                "absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-night/95 px-2 py-1 text-[11px] text-cream opacity-0 transition-opacity group-hover:opacity-100",
                active && "opacity-100",
              )}
            >
              {s.name} · {valueScore(s).toFixed(1)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
