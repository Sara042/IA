import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BadgeCheck, Clock, MapPin, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, Score } from "@/components/lole/brand";
import { CentroMap } from "@/components/lole/centro-map";
import { getStore, valueScore } from "@/data/stores";

export const Route = createFileRoute("/tienda/$id")({
  loader: ({ params }) => {
    const store = getStore(params.id);
    if (!store) throw notFound();
    return { store };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.store.name} · Lole-App` : "Tienda no encontrada · Lole-App";
    const desc = loaderData ? `${loaderData.store.description} ${loaderData.store.address}, centro de Medellín.` : "Esta tienda no existe.";
    return { meta: [{ title }, { name: "description", content: desc }, { property: "og:title", content: title }, { property: "og:description", content: desc }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] };
  },
  notFoundComponent: () => <div className="mx-auto max-w-xl px-6 py-24 text-center"><h1 className="text-4xl">Tienda no encontrada</h1><Link to="/buscar" className="mt-4 inline-block text-champagne">Volver a buscar</Link></div>,
  component: Tienda,
});

const reviews = [
  { name: "Juliana M.", text: "Buenos precios y me explicaron todo con paciencia.", stars: 5 },
  { name: "Carlos G.", text: "Encontré lo que buscaba gracias al mapa. Recomendado.", stars: 4 },
];

function Tienda() {
  const { store: s } = Route.useLoaderData();
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <Link to="/buscar" className="text-sm text-muted-foreground hover:text-champagne">← Resultados</Link>
      <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Eyebrow>{s.category} · {s.zone}</Eyebrow>
          <h1 className="flex items-center gap-3 text-5xl">{s.name}{s.verified && <BadgeCheck className="h-8 w-8 text-champagne" />}</h1>
          <p className="mt-4 max-w-xl text-lg text-cream/80">{s.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Score value={valueScore(s)} className="text-base" />
            <span className="text-sm text-muted-foreground">{s.reviews} reseñas · Precio {s.priceScore} · Calidad {s.qualityScore}</span>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="surface p-4"><MapPin className="h-5 w-5 text-champagne" /><p className="mt-2 text-sm">{s.address}</p></div>
            <div className="surface p-4"><Clock className="h-5 w-5 text-champagne" /><p className="mt-2 text-sm">{s.hours}</p></div>
            <div className="surface p-4"><Phone className="h-5 w-5 text-champagne" /><p className="mt-2 text-sm">{s.phone}</p></div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="gold" size="lg">Cómo llegar</Button>
            <Button variant="champagne" size="lg" asChild><Link to="/personal-shopper"><ShoppingBag /> Que un shopper compre aquí</Link></Button>
          </div>
          <h2 className="mt-14 text-3xl">Reseñas</h2>
          <div className="mt-4 space-y-3">
            {reviews.map((r) => (
              <div key={r.name} className="surface p-5">
                <div className="flex justify-between"><p className="font-medium text-cream">{r.name}</p><span className="text-gold">{"★".repeat(r.stars)}</span></div>
                <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
        <CentroMap stores={[s]} activeId={s.id} className="h-[420px] lg:sticky lg:top-24" />
      </div>
    </div>
  );
}
