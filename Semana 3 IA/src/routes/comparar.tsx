import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { Score, PageHeader } from "@/components/lole/brand";
import { categories, rankStores, stores, valueScore, type Category } from "@/data/stores";
import { seo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/comparar")({
  head: () => ({ meta: seo("Comparar comercios", "Compara lado a lado precio, calidad, reseñas y horarios de las tiendas del centro de Medellín.") }),
  component: Comparar,
});

function Bar({ value }: { value: number }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-night">
      <div className="h-full rounded-full bg-gradient-gold" style={{ width: `${(value / 5) * 100}%` }} />
    </div>
  );
}

function Comparar() {
  const [cat, setCat] = useState<Category>("Electrodomésticos");
  const list = rankStores(stores.filter((s) => s.category === cat));
  const best = list[0]?.id;

  return (
    <>
      <PageHeader eyebrow="Comparación" title="Compara antes de bajar al centro">Elige una categoría y mira cuál tienda te conviene más.</PageHeader>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={cn("rounded-full border px-3 py-1 text-sm", cat === c ? "border-gold bg-gold/15 text-gold" : "border-bronze/40 text-cream/80")}>{c}</button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {list.map((s) => (
            <div key={s.id} className={cn("surface relative p-6", s.id === best && "border-gold/70 shadow-gold")}>
              {s.id === best && <span className="absolute -top-3 left-6 rounded-full bg-gradient-gold px-3 py-1 text-xs font-semibold text-night">Mejor opción</span>}
              <div className="flex items-start justify-between">
                <h3 className="text-2xl">{s.name}</h3>
                <Score value={valueScore(s)} />
              </div>
              <p className="text-sm text-muted-foreground">{s.zone}</p>
              <div className="mt-6 space-y-4 text-sm">
                <div><div className="mb-1 flex justify-between"><span>Precio</span><span className="text-champagne">{s.priceScore}</span></div><Bar value={s.priceScore} /></div>
                <div><div className="mb-1 flex justify-between"><span>Calidad</span><span className="text-champagne">{s.qualityScore}</span></div><Bar value={s.qualityScore} /></div>
                <div className="flex justify-between border-t border-border pt-3"><span className="text-muted-foreground">Reseñas</span><span>{s.reviews}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Horario</span><span>{s.hours}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Rango</span><span>{s.priceRange}</span></div>
                <ul className="space-y-1 pt-2">{s.tags.map((t) => <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" />{t}</li>)}</ul>
              </div>
              <Link to="/tienda/$id" params={{ id: s.id }} className="mt-6 block text-sm text-champagne hover:underline">Ver tienda →</Link>
            </div>
          ))}
          {list.length === 0 && <p className="text-muted-foreground">Aún no hay tiendas en esta categoría.</p>}
        </div>
      </div>
    </>
  );
}
