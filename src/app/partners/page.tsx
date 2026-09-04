import type { Metadata } from "next";
import { getPageHtml, getIframedContentHtml } from "@/lib/content";
import { buildMetadata } from "@/lib/pageMetadata";
import LegacyContentAssets from "@/components/LegacyContentAssets";

export const metadata: Metadata = buildMetadata("partners");

export default function PartnersPage() {
  const html = getPageHtml("partners");
  const content = getIframedContentHtml("partners");
  return (
    <>
      <LegacyContentAssets />
      <div id="page-content" dangerouslySetInnerHTML={{ __html: html }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
