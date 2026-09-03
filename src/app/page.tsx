import type { Metadata } from "next";
import { getPageHtml, getHomeModalsHtml, getHomeExtraStyle } from "@/lib/content";
import { buildMetadata } from "@/lib/pageMetadata";
import HomeEffects from "@/components/HomeEffects";

export const metadata: Metadata = buildMetadata("home");

export default function HomePage() {
  const html = getPageHtml("home");
  const modalsHtml = getHomeModalsHtml();
  const extraStyle = getHomeExtraStyle();

  return (
    <>
      <div id="page-content" dangerouslySetInnerHTML={{ __html: html }} />
      <div dangerouslySetInnerHTML={{ __html: modalsHtml }} />
      <style dangerouslySetInnerHTML={{ __html: extraStyle }} />
      <HomeEffects />
    </>
  );
}
