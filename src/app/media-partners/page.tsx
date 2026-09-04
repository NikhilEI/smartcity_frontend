import type { Metadata } from "next";
import { getPageHtml, getIframedContentHtml } from "@/lib/content";
import { buildMetadata } from "@/lib/pageMetadata";
import LegacyContentAssets from "@/components/LegacyContentAssets";

export const metadata: Metadata = buildMetadata("media-partners");

export default function MediaPartnersPage() {
  const html = getPageHtml("media-partners");
  const content = getIframedContentHtml("media-partners");
  return (
    <>
      <LegacyContentAssets />
      <div id="page-content" dangerouslySetInnerHTML={{ __html: html }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
