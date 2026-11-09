import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({ label, value, hint, icon: Icon }: { label: string; value: string; hint?: string; icon: LucideIcon }) {
  return (
    <div className="surface p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{label}</p>
        <Icon className="h-5 w-5 text-champagne" />
      </div>
      <p className="mt-2 font-display text-3xl text-cream">{value}</p>
      {hint && <p className="mt-1 text-xs text-success">{hint}</p>}
    </div>
  );
}

export function StatusPill({ status }: { status: string }) {
  const tone =
    status === "Entregada" || status === "Aprobado" || status === "Activo"
      ? "bg-success/15 text-success"
      : status === "Abierta" || status === "Pendiente"
        ? "bg-gold/15 text-gold"
        : "bg-champagne/15 text-champagne";
  return <span className={cn("rounded-full px-2.5 py-1 text-xs font-medium", tone)}>{status}</span>;
}
