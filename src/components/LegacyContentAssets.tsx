/**
 * Extra stylesheet dependencies used only by the 4 legacy content pages
 * (partners, media-partners, support, supporting-associations) — loaded
 * on those routes only, matching what the original standalone documents loaded.
 */
export default function LegacyContentAssets() {
  return (
    <>
      <link href="/css/bootstrap-lightbox.css" rel="stylesheet" />
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      />
    </>
  );
}
