import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Bike, Star, UserRoundCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/lole/brand";
import { shoppers } from "@/data/stores";
import { seo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/personal-shopper")({
  head: () => ({ meta: seo("Personal Shopper", "Pide que alguien compre por ti en el centro de Medellín, o gana dinero recorriendo el centro como Personal Shopper.") }),
  component: PersonalShopper,
});

function PersonalShopper() {
  const [mode, setMode] = useState<"pedir" | "ser">("pedir");
  return (
    <>
      <PageHeader eyebrow="Personal Shopper" title="Alguien del centro compra por ti">Tú dices qué necesitas; un shopper verificado lo busca, lo compra y te lo lleva.</PageHeader>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="surface p-8">
          <div className="mb-8 inline-flex rounded-full border border-border bg-night p-1">
            {(["pedir", "ser"] as const).map((m) => (
              <button key={m} onClick={() => setMode(m)} className={cn("rounded-full px-5 py-2 text-sm", mode === m ? "bg-gradient-gold font-semibold text-night" : "text-cream/80")}>
                {m === "pedir" ? "Necesito algo" : "Quiero ser shopper"}
              </button>
            ))}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); toast.success(mode === "pedir" ? "¡Solicitud enviada! Te avisamos cuando un shopper la acepte." : "¡Gracias! Revisaremos tu perfil."); }} className="space-y-5">
            {mode === "pedir" ? (
              <>
                <div className="space-y-2"><Label>¿Qué necesitas?</Label><Input required placeholder="Ej: Licuadora de 10 velocidades" /></div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2"><Label>Presupuesto máximo</Label><Input placeholder="$200.000" /></div>
                  <div className="space-y-2"><Label>Barrio de entrega</Label><Input placeholder="Laureles" /></div>
                </div>
                <div className="space-y-2"><Label>Detalles</Label><Textarea placeholder="Color, marca, talla, tienda preferida…" /></div>
              </>
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2"><Label>Nombre</Label><Input required placeholder="Tu nombre" /></div>
                  <div className="space-y-2"><Label>Celular</Label><Input placeholder="300 000 0000" /></div>
                </div>
                <div className="space-y-2"><Label>Zonas del centro que conoces</Label><Input placeholder="Junín, El Hueco, San Juan…" /></div>
                <div className="space-y-2"><Label>¿En qué eres experto?</Label><Textarea placeholder="Ropa, tecnología, electrodomésticos…" /></div>
              </>
            )}
            <Button variant="gold" size="lg" type="submit" className="w-full">{mode === "pedir" ? "Publicar solicitud" : "Postularme"}</Button>
          </form>
        </div>
        <div>
          <h2 className="text-3xl">Shoppers destacados</h2>
          <div className="mt-5 space-y-3">
            {shoppers.map((s) => (
              <div key={s.name} className="surface flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold font-display text-xl text-night">{s.name[0]}</div>
                <div className="flex-1">
                  <p className="flex items-center gap-1.5 font-medium text-cream">{s.name}<UserRoundCheck className="h-4 w-4 text-champagne" /></p>
                  <p className="text-xs text-muted-foreground">{s.zones} · {s.specialty}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="flex items-center gap-1 text-gold"><Star className="h-3.5 w-3.5 fill-gold" />{s.rating}</p>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground"><Bike className="h-3 w-3" />{s.trips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
