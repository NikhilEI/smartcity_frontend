import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";
import { buildMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = buildMetadata("support");

export default function SupportPage() {
  const html = getPageHtml("support");
  return <div id="page-content" dangerouslySetInnerHTML={{ __html: html }} />;
}
