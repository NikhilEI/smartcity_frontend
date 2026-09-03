import fs from "node:fs";
import path from "node:path";

const CONTENT_DIR = path.join(process.cwd(), "src/content");

export type PageMeta = {
  route: string;
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
};

export function getPageHtml(slug: string): string {
  return fs.readFileSync(path.join(CONTENT_DIR, "pages", `${slug}.html`), "utf8");
}

export function getPageMeta(slug: string): PageMeta {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, "pages", `${slug}.meta.json`), "utf8");
  return JSON.parse(raw) as PageMeta;
}

export function getHomeModalsHtml(): string {
  return fs.readFileSync(path.join(CONTENT_DIR, "pages", "home-modals.html"), "utf8");
}

export function getHomeExtraStyle(): string {
  return fs.readFileSync(path.join(CONTENT_DIR, "pages", "home-extra-style.css"), "utf8");
}

export function getHeaderHtml(): string {
  return fs.readFileSync(path.join(CONTENT_DIR, "header.html"), "utf8");
}

export function getFooterHtml(): string {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, "footer.html"), "utf8");
  return raw.replace("__YEAR__", String(new Date().getFullYear()));
}
