import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";
import { buildMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = buildMetadata("media-partners");

export default function MediaPartnersPage() {
  const html = getPageHtml("media-partners");
  return <div id="page-content" dangerouslySetInnerHTML={{ __html: html }} />;
}
