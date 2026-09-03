import { getFooterHtml } from "@/lib/content";

export default function Footer() {
  const html = getFooterHtml();
  return <footer dangerouslySetInnerHTML={{ __html: html }} />;
}
