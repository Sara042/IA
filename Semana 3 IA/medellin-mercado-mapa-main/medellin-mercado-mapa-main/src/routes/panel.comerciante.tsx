import { createFileRoute } from "@tanstack/react-router";
import { Eye, MapPin, MessageSquare, Star } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/lole/brand";
import { StatCard } from "@/components/lole/panel-shell";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/panel/comerciante")({
  head: () => ({ meta: seo("Panel del comerciante", "Gestiona tu tienda del centro de Medellín en Lole-App: visitas, reseñas y datos de tu negocio.") }),
  component: Comerciante,
});

const week = [40, 62, 55, 80, 72, 95, 68];

function Comerciante() {
  return (
    <>
      <PageHeader eyebrow="Panel del comerciante" title="Electro Junín">Así te están encontrando los compradores esta semana.</PageHeader>
      <div className="mx-auto max-w-7xl space-y-10 px-6 py-10">
        <div className="grid gap-4 md:grid-cols-4">
          <StatCard label="Visitas al perfil" value="1.284" hint="+18% vs. semana pasada" icon={Eye} />
          <StatCard label="Cómo llegar" value="312" icon={MapPin} />
          <StatCard label="Puntuación" value="4.6" icon={Star} />
          <StatCard label="Reseñas nuevas" value="14" icon={MessageSquare} />
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="surface p-6">
            <h2 className="text-2xl">Visitas por día</h2>
            <div className="mt-8 flex h-48 items-end gap-3">
              {week.map((v, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-md bg-gradient-gold" style={{ height: `${v}%` }} />
                  <span className="text-xs text-muted-foreground">{"LMMJVSD"[i]}</span>
                </div>
              ))}
            </div>
          </div>
          <form className="surface space-y-4 p-6" onSubmit={(e) => { e.preventDefault(); toast.success("Datos de la tienda actualizados"); }}>
            <h2 className="text-2xl">Datos de la tienda</h2>
            <div className="space-y-2"><Label>Nombre</Label><Input defaultValue="Electro Junín" /></div>
            <div className="space-y-2"><Label>Dirección</Label><Input defaultValue="Cra. 49 #52-30" /></div>
            <div className="space-y-2"><Label>Horario</Label><Input defaultValue="8:00 – 19:00" /></div>
            <div className="space-y-2"><Label>Descripción</Label><Textarea defaultValue="Neveras, lavadoras y pequeños electrodomésticos con garantía." /></div>
            <Button variant="gold" type="submit" className="w-full">Guardar cambios</Button>
          </form>
        </div>
      </div>
    </>
  );
}
