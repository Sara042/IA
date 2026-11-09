// Datos de ejemplo (inventados) para la demo de Lole-App.
export type Category =
  | "Electrodomésticos"
  | "Ropa"
  | "Calzado"
  | "Tecnología"
  | "Hogar"
  | "Papelería"
  | "Joyería";

export const categories: Category[] = [
  "Electrodomésticos",
  "Tecnología",
  "Ropa",
  "Calzado",
  "Hogar",
  "Papelería",
  "Joyería",
];

export interface Store {
  id: string;
  name: string;
  category: Category;
  address: string;
  zone: string;
  // posición en el mapa del centro (0-100)
  x: number;
  y: number;
  priceScore: number; // 1-5 (5 = mejor precio)
  qualityScore: number; // 1-5
  reviews: number;
  hours: string;
  phone: string;
  priceRange: "$" | "$$" | "$$$";
  tags: string[];
  verified: boolean;
  description: string;
}

export const valueScore = (s: Store) =>
  Math.round(((s.priceScore * 0.5 + s.qualityScore * 0.5) / 5) * 100) / 10;

export const stores: Store[] = [
  { id: "electro-junin", name: "Electro Junín", category: "Electrodomésticos", address: "Cra. 49 #52-30", zone: "Junín", x: 48, y: 40, priceScore: 4.6, qualityScore: 4.5, reviews: 412, hours: "8:00 – 19:00", phone: "604 555 0101", priceRange: "$$", tags: ["Garantía 1 año", "Domicilio"], verified: true, description: "Neveras, lavadoras y pequeños electrodomésticos con garantía directa de marca." },
  { id: "hogar-y-mas", name: "Hogar & Más Carabobo", category: "Electrodomésticos", address: "Cra. 52 #50-12", zone: "Carabobo", x: 30, y: 55, priceScore: 4.8, qualityScore: 4.1, reviews: 268, hours: "8:30 – 18:30", phone: "604 555 0102", priceRange: "$", tags: ["Mejor precio", "Crédito"], verified: true, description: "Los precios más bajos del centro en licuadoras, estufas y ventiladores." },
  { id: "megaelectricos", name: "Megaeléctricos San Juan", category: "Electrodomésticos", address: "Cl. 44 #51-20", zone: "San Juan", x: 38, y: 78, priceScore: 3.9, qualityScore: 4.7, reviews: 190, hours: "9:00 – 19:00", phone: "604 555 0103", priceRange: "$$$", tags: ["Alta gama", "Instalación"], verified: false, description: "Marcas premium, asesoría experta e instalación incluida." },
  { id: "tecnocentro", name: "TecnoCentro Bolívar", category: "Tecnología", address: "Cl. 51 #50-40", zone: "Parque Bolívar", x: 55, y: 25, priceScore: 4.4, qualityScore: 4.6, reviews: 530, hours: "9:00 – 20:00", phone: "604 555 0104", priceRange: "$$", tags: ["Celulares", "Reparación"], verified: true, description: "Celulares, computadores y accesorios. Servicio técnico el mismo día." },
  { id: "pixel-store", name: "Pixel Store Palacé", category: "Tecnología", address: "Cra. 50 #48-15", zone: "Palacé", x: 44, y: 60, priceScore: 4.7, qualityScore: 3.9, reviews: 305, hours: "8:00 – 19:30", phone: "604 555 0105", priceRange: "$", tags: ["Accesorios", "Por mayor"], verified: true, description: "Accesorios y gadgets al por mayor y al detal." },
  { id: "moda-junin", name: "Moda Junín 52", category: "Ropa", address: "Cra. 49 #53-10", zone: "Junín", x: 52, y: 35, priceScore: 4.2, qualityScore: 4.4, reviews: 220, hours: "9:00 – 19:00", phone: "604 555 0106", priceRange: "$$", tags: ["Confección local"], verified: true, description: "Ropa confeccionada en Medellín con diseño propio." },
  { id: "el-hueco-textil", name: "Textiles El Hueco", category: "Ropa", address: "Cl. 46 #53-22", zone: "El Hueco", x: 22, y: 70, priceScore: 4.9, qualityScore: 3.8, reviews: 640, hours: "7:30 – 18:00", phone: "604 555 0107", priceRange: "$", tags: ["Por mayor", "Mejor precio"], verified: false, description: "Precios de fábrica en ropa básica, jeans y uniformes." },
  { id: "pasos-firmes", name: "Pasos Firmes", category: "Calzado", address: "Cra. 51 #49-30", zone: "Parque Berrío", x: 40, y: 48, priceScore: 4.3, qualityScore: 4.6, reviews: 178, hours: "9:00 – 19:00", phone: "604 555 0108", priceRange: "$$", tags: ["Cuero", "Hecho a mano"], verified: true, description: "Calzado en cuero hecho por artesanos antioqueños." },
  { id: "casa-centro", name: "Casa Centro Hogar", category: "Hogar", address: "Cl. 50 #46-18", zone: "La Playa", x: 68, y: 45, priceScore: 4.1, qualityScore: 4.3, reviews: 150, hours: "8:00 – 18:00", phone: "604 555 0109", priceRange: "$$", tags: ["Decoración", "Cocina"], verified: true, description: "Menaje, decoración y todo para la cocina." },
  { id: "papeleria-berrio", name: "Papelería Berrío", category: "Papelería", address: "Cra. 50 #50-05", zone: "Parque Berrío", x: 46, y: 50, priceScore: 4.5, qualityScore: 4.2, reviews: 98, hours: "7:00 – 18:00", phone: "604 555 0110", priceRange: "$", tags: ["Escolar", "Oficina"], verified: true, description: "Útiles escolares y de oficina a precio justo." },
  { id: "oro-y-plata", name: "Joyería Oro de la Playa", category: "Joyería", address: "Av. La Playa #45-60", zone: "La Playa", x: 72, y: 38, priceScore: 3.8, qualityScore: 4.9, reviews: 132, hours: "10:00 – 19:00", phone: "604 555 0111", priceRange: "$$$", tags: ["Oro 18k", "Certificado"], verified: true, description: "Joyería en oro y plata certificada, diseños a medida." },
];

export const getStore = (id: string) => stores.find((s) => s.id === id);

export const rankStores = (list: Store[]) =>
  [...list].sort((a, b) => valueScore(b) - valueScore(a));

export interface ShopperRequest {
  id: string;
  item: string;
  budget: string;
  zone: string;
  status: "Abierta" | "En camino" | "Entregada";
  shopper?: string;
  fee: string;
}

export const shopperRequests: ShopperRequest[] = [
  { id: "SR-1042", item: "Licuadora 10 velocidades", budget: "$180.000", zone: "Envigado", status: "En camino", shopper: "Camila R.", fee: "$15.000" },
  { id: "SR-1043", item: "Tenis talla 38 cuero blanco", budget: "$220.000", zone: "Laureles", status: "Abierta", fee: "$12.000" },
  { id: "SR-1039", item: "Útiles escolares (lista 3°)", budget: "$95.000", zone: "Bello", status: "Entregada", shopper: "Andrés P.", fee: "$10.000" },
];

export const shoppers = [
  { name: "Camila Restrepo", rating: 4.9, trips: 214, zones: "Junín · El Hueco", specialty: "Ropa y calzado" },
  { name: "Andrés Pineda", rating: 4.8, trips: 168, zones: "San Juan · Carabobo", specialty: "Electrodomésticos" },
  { name: "Luz Marina Ochoa", rating: 5.0, trips: 302, zones: "La Playa · Berrío", specialty: "Hogar y joyería" },
];
