import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";
import { buildMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = buildMetadata("partners");

export default function PartnersPage() {
  const html = getPageHtml("partners");
  return <div id="page-content" dangerouslySetInnerHTML={{ __html: html }} />;
}
