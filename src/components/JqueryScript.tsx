import Script from "next/script";

/**
 * Bare jQuery, for pages that need it without the rest of the carousel/
 * lightbox plugin stack — currently just <RegistrationWidget />'s form
 * submission handler (visitor-profile, exhibitor-profile).
 */
export default function JqueryScript() {
  return <Script src="/owlcarousel/assets/vendors/jquery.min.js" strategy="afterInteractive" />;
}
