import type { Metadata } from "next";
import { getPageHtml, getIframedContentHtml } from "@/lib/content";
import { buildMetadata } from "@/lib/pageMetadata";
import LegacyContentAssets from "@/components/LegacyContentAssets";

export const metadata: Metadata = buildMetadata("support");

export default function SupportPage() {
  const html = getPageHtml("support");
  const content = getIframedContentHtml("support");
  return (
    <>
      <LegacyContentAssets />
      <div id="page-content" dangerouslySetInnerHTML={{ __html: html }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
