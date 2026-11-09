import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Logo } from "./brand";

const nav = [
  { to: "/buscar", label: "Buscar" },
  { to: "/comparar", label: "Comparar" },
  { to: "/personal-shopper", label: "Personal Shopper" },
  { to: "/panel/comprador", label: "Mi panel" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-night/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-cream/80 transition-colors hover:text-champagne"
              activeProps={{ className: "text-champagne" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Button variant="gold" size="sm" asChild>
          <Link to="/panel/comerciante">Soy comerciante</Link>
        </Button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-sidebar">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Todo el centro de Medellín en un solo lugar. Encuentra la mejor tienda o pide que alguien
            compre por ti.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-medium text-champagne">Explorar</p>
          <Link to="/buscar" className="block text-muted-foreground hover:text-cream">Buscar comercios</Link>
          <Link to="/comparar" className="block text-muted-foreground hover:text-cream">Comparar tiendas</Link>
          <Link to="/personal-shopper" className="block text-muted-foreground hover:text-cream">Personal Shopper</Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-medium text-champagne">Paneles</p>
          <Link to="/panel/comprador" className="block text-muted-foreground hover:text-cream">Comprador</Link>
          <Link to="/panel/comerciante" className="block text-muted-foreground hover:text-cream">Comerciante</Link>
          <Link to="/panel/admin" className="block text-muted-foreground hover:text-cream">Administrador</Link>
          <Link to="/design-system" className="block text-muted-foreground hover:text-cream">Design System</Link>
        </div>
      </div>
    </footer>
  );
}
