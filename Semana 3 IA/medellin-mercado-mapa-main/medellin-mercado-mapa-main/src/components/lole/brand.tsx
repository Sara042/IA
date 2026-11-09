import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import mark from "@/assets/lole-mark.png";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2", className)}>
      <img src={mark} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
      <span className="font-display text-2xl text-champagne">
        Lole<span className="text-gold">·</span>App
      </span>
    </Link>
  );
}

export function Score({ value, className }: { value: number; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-1 text-sm font-semibold text-gold",
        className,
      )}
    >
      <Star className="h-3.5 w-3.5 fill-gold" />
      {value.toFixed(1)}
    </span>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-bronze">{children}</p>
  );
}

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-b border-border bg-gradient-night">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-4xl md:text-5xl">{title}</h1>
        {children && <div className="mt-3 max-w-2xl text-muted-foreground">{children}</div>}
      </div>
    </div>
  );
}
