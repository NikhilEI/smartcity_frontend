import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";
import { buildMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = buildMetadata("privacy-policy");

export default function PrivacyPolicyPage() {
  const html = getPageHtml("privacy-policy");
  return <div id="page-content" dangerouslySetInnerHTML={{ __html: html }} />;
}
