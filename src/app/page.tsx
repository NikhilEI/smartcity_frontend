import type { Metadata } from "next";
import { getPageHtml, getHomeModalsHtml, getHomeExtraStyle } from "@/lib/content";
import { buildMetadata } from "@/lib/pageMetadata";
import HomeEffects from "@/components/HomeEffects";
import CarouselScripts from "@/components/CarouselScripts";
import CarouselStyles from "@/components/CarouselStyles";
import IndustryNewsSection from "@/components/IndustryNewsSection";

export const metadata: Metadata = buildMetadata("home");

const INDUSTRY_NEWS_MARKER = "<!--__INDUSTRY_NEWS_SECTION__-->";

export default async function HomePage() {
  const html = getPageHtml("home");
  const modalsHtml = getHomeModalsHtml();
  const extraStyle = getHomeExtraStyle();
  const [beforeNews, afterNews] = html.split(INDUSTRY_NEWS_MARKER);

  return (
    <>
      <CarouselStyles />
      <div id="page-content">
        <div dangerouslySetInnerHTML={{ __html: beforeNews }} />
        <IndustryNewsSection />
        <div dangerouslySetInnerHTML={{ __html: afterNews }} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: modalsHtml }} />
      <style dangerouslySetInnerHTML={{ __html: extraStyle }} />
      <CarouselScripts />
      <HomeEffects />
    </>
  );
}
