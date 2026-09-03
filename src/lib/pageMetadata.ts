import type { Metadata } from "next";
import { getPageMeta } from "./content";

export function buildMetadata(slug: string): Metadata {
  const meta = getPageMeta(slug);
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: meta.route,
    },
    openGraph: {
      type: "website",
      title: meta.ogTitle || meta.title,
      description: meta.ogDescription || meta.description,
      url: meta.route,
      images: meta.ogImage ? [meta.ogImage] : undefined,
    },
  };
}
