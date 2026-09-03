import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";
import { buildMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = buildMetadata("supporting-associations");

export default function SupportingAssociationsPage() {
  const html = getPageHtml("supporting-associations");
  return <div id="page-content" dangerouslySetInnerHTML={{ __html: html }} />;
}
