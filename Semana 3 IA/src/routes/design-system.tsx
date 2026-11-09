import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Eyebrow, Logo, PageHeader, Score } from "@/components/lole/brand";
import { StatusPill } from "@/components/lole/panel-shell";
import { StoreCard } from "@/components/lole/store-card";
import { stores } from "@/data/stores";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/design-system")({
  head: () => ({ meta: seo("Design System", "Paleta oficial, tipografías, botones, tarjetas y formularios de la identidad Lole-App.") }),
  component: DesignSystem,
});

const palette = [
  { name: "Azul noche", hex: "#06162F", cls: "bg-night", use: "Fondos, navegación y secciones" },
  { name: "Azul profundo", hex: "#0C2448", cls: "bg-deep", use: "Tarjetas, paneles y superficies" },
  { name: "Dorado champagne", hex: "#E5BF85", cls: "bg-champagne", use: "Logotipo, títulos, iconografía" },
  { name: "Dorado cálido", hex: "#EFAD4D", cls: "bg-gold", use: "Botones principales y CTA" },
  { name: "Bronce suave", hex: "#C79E75", cls: "bg-bronze", use: "Detalles, bordes, ilustraciones" },
  { name: "Blanco cálido", hex: "#F4F1EA", cls: "bg-cream", use: "Textos y contraste" },
  { name: "Gris neutro", hex: "#696E75", cls: "bg-neutral", use: "Textos secundarios y apoyo" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-12">
      <h2 className="mb-8 text-3xl">{title}</h2>
      {children}
    </section>
  );
}

function DesignSystem() {
  return (
    <>
      <PageHeader eyebrow="Identidad oficial" title="Design System Lole-App">Innovación, cercanía, confianza y dinamismo comercial — en cada pantalla.</PageHeader>
      <div className="mx-auto max-w-7xl px-6">
        <Section title="Logotipo">
          <div className="flex flex-wrap gap-6">
            <div className="surface flex h-32 w-72 items-center justify-center"><Logo /></div>
            <div className="flex h-32 w-72 items-center justify-center rounded-2xl bg-night ring-1 ring-border"><Logo /></div>
          </div>
        </Section>

        <Section title="Paleta cromática">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {palette.map((c) => (
              <div key={c.hex} className="surface overflow-hidden">
                <div className={`h-28 ${c.cls} border-b border-border`} />
                <div className="p-4">
                  <p className="font-medium text-cream">{c.name}</p>
                  <p className="font-mono text-sm text-champagne">{c.hex}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.use}</p>
                </div>
              </div>
            ))}
            <div className="surface overflow-hidden">
              <div className="h-28 bg-gradient-gold" />
              <div className="p-4"><p className="font-medium text-cream">Degradado dorado</p><p className="text-xs text-muted-foreground">Champagne → Cálido, solo para CTA y acentos</p></div>
            </div>
          </div>
        </Section>

        <Section title="Tipografía">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="surface p-6">
              <Eyebrow>Títulos · DM Serif Display</Eyebrow>
              <p className="font-display text-6xl text-champagne">Aa</p>
              <p className="mt-4 font-display text-4xl text-champagne">El centro en tu mano</p>
              <p className="font-display text-2xl text-champagne">Título de sección</p>
            </div>
            <div className="surface p-6">
              <Eyebrow>Texto · Fira Sans</Eyebrow>
              <p className="text-6xl font-light text-cream">Aa</p>
              <p className="mt-4 text-lg text-cream">Párrafo principal en blanco cálido, cómodo de leer.</p>
              <p className="text-sm text-muted-foreground">Texto secundario en gris neutro para apoyo.</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-bronze">Etiqueta en bronce</p>
            </div>
          </div>
        </Section>

        <Section title="Botones">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="gold" size="lg">Principal</Button>
            <Button variant="gold">Principal</Button>
            <Button variant="champagne">Secundario</Button>
            <Button variant="cream">Contraste</Button>
            <Button variant="ghost">Terciario</Button>
            <Button variant="gold" disabled>Deshabilitado</Button>
            <Button variant="gold" size="sm"><MapPin /> Con ícono</Button>
          </div>
        </Section>

        <Section title="Tarjetas y etiquetas">
          <div className="grid gap-4 md:grid-cols-3">
            <StoreCard store={stores[0]!} rank={1} />
            <StoreCard store={stores[3]!} rank={2} />
            <div className="surface space-y-3 p-5">
              <div className="flex flex-wrap gap-2"><Score value={4.6} /><StatusPill status="Aprobado" /><StatusPill status="Pendiente" /><StatusPill status="En camino" /></div>
              <p className="text-sm text-muted-foreground">Superficie: azul profundo, borde bronce al 28%, radio 18px, sombra profunda.</p>
            </div>
          </div>
        </Section>

        <Section title="Formularios">
          <div className="surface grid max-w-3xl gap-5 p-6 md:grid-cols-2">
            <div className="space-y-2"><Label>Nombre</Label><Input placeholder="Tu nombre" /></div>
            <div className="space-y-2"><Label>Barrio</Label><Input placeholder="Laureles" /></div>
            <div className="space-y-2 md:col-span-2"><Label>Detalles del pedido</Label><Textarea placeholder="Describe lo que necesitas…" /></div>
            <Button variant="gold" className="md:col-span-2">Enviar</Button>
          </div>
        </Section>
      </div>
    </>
  );
}
