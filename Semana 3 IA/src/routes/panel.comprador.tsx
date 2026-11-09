import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Package, Search, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/lole/brand";
import { StatCard, StatusPill } from "@/components/lole/panel-shell";
import { StoreCard } from "@/components/lole/store-card";
import { shopperRequests, stores } from "@/data/stores";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/panel/comprador")({
  head: () => ({ meta: seo("Panel del comprador", "Tus pedidos de Personal Shopper, tiendas favoritas y búsquedas guardadas en Lole-App.") }),
  component: Comprador,
});

function Comprador() {
  return (
    <>
      <PageHeader eyebrow="Panel del comprador" title="Hola, Sara">Tus pedidos y lugares favoritos del centro.</PageHeader>
      <div className="mx-auto max-w-7xl space-y-10 px-6 py-10">
        <div className="grid gap-4 md:grid-cols-4">
          <StatCard label="Pedidos activos" value="2" icon={Package} />
          <StatCard label="Favoritos" value="7" icon={Heart} />
          <StatCard label="Búsquedas" value="23" icon={Search} />
          <StatCard label="Ahorro estimado" value="$84.000" hint="+12% este mes" icon={Wallet} />
        </div>
        <div className="surface overflow-hidden">
          <div className="flex items-center justify-between border-b border-border p-5">
            <h2 className="text-2xl">Mis solicitudes</h2>
            <Button variant="gold" size="sm" asChild><Link to="/personal-shopper">Nueva solicitud</Link></Button>
          </div>
          <table className="w-full text-sm">
            <thead className="text-left text-muted-foreground"><tr><th className="p-4">ID</th><th>Producto</th><th>Shopper</th><th>Tarifa</th><th>Estado</th></tr></thead>
            <tbody>{shopperRequests.map((r) => <tr key={r.id} className="border-t border-border"><td className="p-4 text-bronze">{r.id}</td><td>{r.item}</td><td>{r.shopper ?? "—"}</td><td>{r.fee}</td><td><StatusPill status={r.status} /></td></tr>)}</tbody>
          </table>
        </div>
        <div>
          <h2 className="text-2xl">Tiendas favoritas</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">{stores.slice(0, 3).map((s) => <StoreCard key={s.id} store={s} />)}</div>
        </div>
      </div>
    </>
  );
}
