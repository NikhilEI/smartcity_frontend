import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";
import { buildMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = buildMetadata("contact-us");

export default function ContactUsPage() {
  const html = getPageHtml("contact-us");
  return <div id="page-content" dangerouslySetInnerHTML={{ __html: html }} />;
}
