import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CentroMap } from "@/components/lole/centro-map";
import { StoreCard } from "@/components/lole/store-card";
import { categories, rankStores, stores } from "@/data/stores";
import { seo } from "@/lib/seo";
import { cn } from "@/lib/utils";

type SearchParams = { q?: string | undefined; cat?: string | undefined };

export const Route = createFileRoute("/buscar")({
  validateSearch: (s: Record<string, unknown>): SearchParams => ({
    q: typeof s["q"] === "string" ? s["q"] : undefined,
    cat: typeof s["cat"] === "string" ? s["cat"] : undefined,
  }),
  head: () => ({
    meta: seo("Buscar comercios en el centro", "Busca un producto y ve en el mapa del centro de Medellín las tiendas que lo venden, ordenadas por precio-calidad."),
  }),
  component: Buscar,
});

function Buscar() {
  const { q = "", cat } = Route.useSearch();
  const navigate = useNavigate({ from: "/buscar" });
  const [text, setText] = useState(q);
  const [hover, setHover] = useState<string>();

  const term = q.toLowerCase();
  const results = rankStores(
    stores.filter(
      (s) =>
        (!cat || s.category === cat) &&
        (!term ||
          [s.name, s.category, s.description, ...s.tags].join(" ").toLowerCase().includes(term) ||
          (term.includes("nevera") || term.includes("lavadora") || term.includes("licuadora") ? s.category === "Electrodomésticos" : false) ||
          (term.includes("celular") || term.includes("computador") ? s.category === "Tecnología" : false) ||
          (term.includes("tenis") || term.includes("zapato") ? s.category === "Calzado" : false)),
    ),
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ search: (p) => ({ ...p, q: text || undefined }) });
        }}
        className="flex items-center gap-2 rounded-full border border-border bg-deep p-2"
      >
        <Search className="ml-3 h-5 w-5 text-champagne" />
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Busca un producto o tienda…" className="flex-1 bg-transparent px-2 py-2 text-cream placeholder:text-neutral focus:outline-none" />
        <Button variant="gold" type="submit">Buscar</Button>
      </form>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <SlidersHorizontal className="h-4 w-4 text-bronze" />
        <button onClick={() => navigate({ search: (p) => ({ ...p, cat: undefined }) })} className={cn("rounded-full border px-3 py-1 text-sm", !cat ? "border-gold bg-gold/15 text-gold" : "border-bronze/40 text-cream/80")}>Todas</button>
        {categories.map((c) => (
          <button key={c} onClick={() => navigate({ search: (p) => ({ ...p, cat: c }) })} className={cn("rounded-full border px-3 py-1 text-sm", cat === c ? "border-gold bg-gold/15 text-gold" : "border-bronze/40 text-cream/80 hover:border-champagne")}>{c}</button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div>
          <p className="mb-4 text-sm text-muted-foreground">
            <span className="font-semibold text-champagne">{results.length}</span> comercios {q && <>para “{q}”</>} · ordenados por precio-calidad
          </p>
          <div className="space-y-3">
            {results.map((s, i) => <StoreCard key={s.id} store={s} rank={i + 1} active={hover === s.id} onHover={setHover} />)}
            {results.length === 0 && <div className="surface p-8 text-center text-muted-foreground">No encontramos comercios. Prueba otra palabra o pide un Personal Shopper.</div>}
          </div>
        </div>
        <CentroMap stores={results} activeId={hover} onHover={setHover} className="h-[560px] lg:sticky lg:top-24" />
      </div>
    </div>
  );
}
