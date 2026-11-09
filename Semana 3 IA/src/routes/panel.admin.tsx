import { createFileRoute } from "@tanstack/react-router";
import { Bike, Store as StoreIcon, Users, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/lole/brand";
import { StatCard, StatusPill } from "@/components/lole/panel-shell";
import { stores, valueScore } from "@/data/stores";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/panel/admin")({
  head: () => ({ meta: seo("Panel del administrador", "Administra comercios, shoppers y usuarios de Lole-App.") }),
  component: Admin,
});

function Admin() {
  return (
    <>
      <PageHeader eyebrow="Panel del administrador" title="Control de la plataforma">Comercios, shoppers y actividad general.</PageHeader>
      <div className="mx-auto max-w-7xl space-y-10 px-6 py-10">
        <div className="grid gap-4 md:grid-cols-4">
          <StatCard label="Comercios" value="1.214" hint="+32 este mes" icon={StoreIcon} />
          <StatCard label="Usuarios" value="18.430" icon={Users} />
          <StatCard label="Shoppers activos" value="146" icon={Bike} />
          <StatCard label="Pedidos del mes" value="2.087" icon={Wallet} />
        </div>
        <div className="surface overflow-hidden">
          <div className="border-b border-border p-5"><h2 className="text-2xl">Comercios por verificar</h2></div>
          <table className="w-full text-sm">
            <thead className="text-left text-muted-foreground"><tr><th className="p-4">Comercio</th><th>Categoría</th><th>Zona</th><th>Puntuación</th><th>Estado</th><th></th></tr></thead>
            <tbody>
              {stores.map((s) => (
                <tr key={s.id} className="border-t border-border">
                  <td className="p-4 text-cream">{s.name}</td><td>{s.category}</td><td>{s.zone}</td><td className="text-gold">{valueScore(s).toFixed(1)}</td>
                  <td><StatusPill status={s.verified ? "Aprobado" : "Pendiente"} /></td>
                  <td className="pr-4 text-right">{!s.verified && <Button variant="champagne" size="sm">Verificar</Button>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
