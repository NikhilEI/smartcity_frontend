/**
 * Stylesheets for the owl-carousel/lightbox stack — only needed on pages
 * that load <CarouselScripts /> (home, partners).
 */
export default function CarouselStyles() {
  return (
    <>
      <link href="/owlcarousel/assets/owl.carousel.css" rel="stylesheet" />
      <link rel="stylesheet" href="/owlcarousel/assets/owl.theme.default.min.css" />
      <link rel="stylesheet" href="/lightbox/css/lightbox.min.css" />
    </>
  );
}
