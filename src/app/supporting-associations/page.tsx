import type { Metadata } from "next";
import { getPageHtml, getIframedContentHtml } from "@/lib/content";
import { buildMetadata } from "@/lib/pageMetadata";
import LegacyContentAssets from "@/components/LegacyContentAssets";

export const metadata: Metadata = buildMetadata("supporting-associations");

export default function SupportingAssociationsPage() {
  const html = getPageHtml("supporting-associations");
  const content = getIframedContentHtml("supporting-associations");
  return (
    <>
      <LegacyContentAssets />
      <div id="page-content" dangerouslySetInnerHTML={{ __html: html }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
