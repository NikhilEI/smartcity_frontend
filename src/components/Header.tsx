import { getHeaderHtml } from "@/lib/content";

export default function Header() {
  const html = getHeaderHtml();
  return <header className="fixed-top-band" dangerouslySetInnerHTML={{ __html: html }} />;
}
