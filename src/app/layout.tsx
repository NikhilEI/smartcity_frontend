import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import GlobalScripts from "@/components/GlobalScripts";
import "./globals.css";

const GTM_ID = "GTM-KLH9W9V";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smartcitiesindia.com"),
  other: {
    "facebook-domain-verification": "arje2q8v5be0kcx0s5mqwpnqjmyfi5",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        {/* Self-hosted Urbanist/Poppins (same family names the legacy CSS
            already references) instead of fetching from Google Fonts at
            request time — removes an external render-blocking round trip. */}
        <link rel="stylesheet" href="/fonts/self-hosted/fonts.css" />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css" />

        <link href="/css/fontawesome-Pro-5.15.3.css" rel="stylesheet" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/my-style-2026.css" rel="stylesheet" />
      </head>
      <body>
        <GoogleTagManager gtmId={GTM_ID} />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        {children}
        <Footer />
        <SocialSidebar />
        <GlobalScripts />
      </body>
    </html>
  );
}
