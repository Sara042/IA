import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Handshake, MapPinned, Search, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import hero from "@/assets/hero-centro.jpg";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/lole/brand";
import { StoreCard } from "@/components/lole/store-card";
import { categories, rankStores, stores } from "@/data/stores";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: seo(
      "El centro de Medellín en tu mano",
      "Encuentra en un mapa las tiendas del centro de Medellín con mejor relación precio-calidad, o pide a un Personal Shopper que compre por ti.",
    ),
  }),
  component: Index,
});

function Index() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const top = rankStores(stores).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden">
        <img src={hero} alt="Calle comercial del centro de Medellín de noche" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
          <Eyebrow>Centro de Medellín · +1.200 comercios</Eyebrow>
          <h1 className="max-w-3xl text-5xl leading-[1.05] md:text-7xl">
            Compra en el centro <span className="text-gradient-gold">como si lo conocieras</span> de toda la vida.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/80">
            Busca lo que necesitas y te mostramos en el mapa dónde comprarlo al mejor precio-calidad. ¿No quieres bajar? Un Personal Shopper va por ti.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: "/buscar", search: { q } });
            }}
            className="mt-10 flex max-w-2xl items-center gap-2 rounded-full border border-champagne/40 bg-night/80 p-2 backdrop-blur"
          >
            <Search className="ml-3 h-5 w-5 text-champagne" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="¿Qué necesitas? Ej: nevera, tenis, celular…"
              className="flex-1 bg-transparent px-2 py-2 text-cream placeholder:text-neutral focus:outline-none"
            />
            <Button variant="gold" type="submit">Buscar</Button>
          </form>
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.slice(0, 5).map((c) => (
              <Link key={c} to="/buscar" search={{ cat: c }} className="rounded-full border border-bronze/40 px-3 py-1 text-sm text-cream/80 hover:border-champagne hover:text-champagne">
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Eyebrow>Dos formas de comprar</Eyebrow>
        <h2 className="max-w-2xl text-4xl">Una sola app para quien busca y para quien conoce el centro.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="surface p-8">
            <MapPinned className="h-10 w-10 text-champagne" />
            <h3 className="mt-6 text-3xl">Búsqueda de comercios</h3>
            <p className="mt-3 text-muted-foreground">Todos los comercios que venden lo que buscas, en un mapa del centro y ordenados por su puntuación precio-calidad.</p>
            <Button variant="gold" className="mt-8" asChild>
              <Link to="/buscar">Explorar el mapa <ArrowRight /></Link>
            </Button>
          </div>
          <div className="surface p-8">
            <Handshake className="h-10 w-10 text-champagne" />
            <h3 className="mt-6 text-3xl">Personal Shopper</h3>
            <p className="mt-3 text-muted-foreground">Conectamos a quien necesita algo con quien disfruta recorrer el centro. Pides, ellos compran y te lo llevan.</p>
            <Button variant="champagne" className="mt-8" asChild>
              <Link to="/personal-shopper">Pedir o ser shopper <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-gradient-night">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
          {[
            { icon: Search, t: "Busca", d: "Escribe lo que necesitas." },
            { icon: MapPinned, t: "Ubica", d: "Míralo en el mapa del centro." },
            { icon: Trophy, t: "Compara", d: "Ranking precio-calidad real." },
            { icon: ShieldCheck, t: "Compra seguro", d: "Tiendas verificadas y reseñas." },
          ].map(({ icon: I, t, d }, i) => (
            <div key={t}>
              <span className="font-display text-5xl text-bronze/50">0{i + 1}</span>
              <I className="mt-3 h-6 w-6 text-gold" />
              <p className="mt-3 font-medium text-cream">{t}</p>
              <p className="text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <Eyebrow>Mejor puntuadas esta semana</Eyebrow>
            <h2 className="text-4xl">Las favoritas del centro</h2>
          </div>
          <Link to="/comparar" className="hidden text-sm text-champagne hover:underline md:block">Comparar tiendas →</Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {top.map((s, i) => <StoreCard key={s.id} store={s} rank={i + 1} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="surface relative overflow-hidden p-10 md:p-14">
          <Sparkles className="absolute right-10 top-10 h-24 w-24 text-bronze/20" />
          <h2 className="max-w-xl text-4xl">¿Tienes un negocio en el centro?</h2>
          <p className="mt-3 max-w-lg text-muted-foreground">Aparece en el mapa, recibe reseñas y llega a compradores de toda el área metropolitana.</p>
          <Button variant="gold" size="lg" className="mt-8" asChild>
            <Link to="/panel/comerciante">Registrar mi tienda</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
