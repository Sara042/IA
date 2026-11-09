export const seo = (title: string, description: string) => [
  { title: `${title} · Lole-App` },
  { name: "description", content: description },
  { property: "og:title", content: `${title} · Lole-App` },
  { property: "og:description", content: description },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];
