import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";
import { buildMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = buildMetadata("venue-and-dates");

export default function VenueAndDatesPage() {
  const html = getPageHtml("venue-and-dates");
  return <div id="page-content" dangerouslySetInnerHTML={{ __html: html }} />;
}
