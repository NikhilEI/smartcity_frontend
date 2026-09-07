import Script from "next/script";

/**
 * jQuery + jQuery-plugin stack (lightbox, masonry, owl-carousel), loaded only
 * on pages whose content actually contains owl-carousel/lightbox markup
 * (currently: home, partners). Order matches the original static site —
 * the plugins assume jQuery is already on `window` when they run.
 */
export default function CarouselScripts() {
  return (
    <>
      <Script src="/lightbox/js/lightbox-plus-jquery.min.js" strategy="afterInteractive" />
      <Script src="/js/masonry.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/owlcarousel/assets/vendors/jquery.min.js" strategy="afterInteractive" />
      <Script src="/owlcarousel/owl.carousel.js" strategy="afterInteractive" />
    </>
  );
}
