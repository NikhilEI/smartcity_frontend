import Script from "next/script";

/**
 * Scripts loaded on every page. Kept minimal on purpose — the jQuery-dependent
 * plugin stack (jQuery, lightbox, masonry, owl-carousel) is NOT here; it only
 * loads on the pages that actually use it, via <CarouselScripts /> (home,
 * partners) or <JqueryScript /> (visitor-profile, exhibitor-profile).
 *
 * bootstrap.bundle.min.js stays global: the shared header's mobile nav
 * (`data-bs-toggle="collapse"`) and any page's Bootstrap modals depend on it.
 */
export default function GlobalScripts() {
  return (
    <>
      <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />

      {/* Below-the-fold widgets/trackers with no visible content of their own —
          deferred until the browser is idle so they never compete with hydration. */}
      <Script
        src="https://whatsapp-widget.introbot.ai/dist/whatsapp-widget.js"
        strategy="lazyOnload"
        data-url="https://api.whatsapp.com/send/?phone=918296557906&text=Hello!%20(Invite%20Code%3A%20919591103034%3E%3EConvergence%202027)"
        data-header-title="Convergence Guide"
        data-message="I'm Convergence Guide 🤖 — your AI concierge assistant for Convergence India Expo 2027, here to help you with venue navigation, schedules, sessions, exhibitors, travel, and on-ground support."
        data-profile-image="https://res.cloudinary.com/dfgni6ef1/image/upload/v1776319333/CI-Social-Logo.jpg_yubjya.jpg"
      />

      {/* LinkedIn Insight Tag */}
      <Script
        id="linkedin-insight"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `_linkedin_data_partner_id = "183011";
(function(){var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})();`,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element -- 1x1 tracking
            pixel inside <noscript>; next/image can't render without JS. */}
        <img
          height={1}
          width={1}
          style={{ display: "none" }}
          alt=""
          src="https://dc.ads.linkedin.com/collect/?pid=183011&fmt=gif"
        />
      </noscript>

      {/* LeadFeeder */}
      <Script
        id="leadfeeder"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function(){ window.ldfdr = window.ldfdr || {}; (function(d, s, ss, fs){ fs = d.getElementsByTagName(s)[0]; function ce(src){ var cs = d.createElement(s); cs.src = src; setTimeout(function(){fs.parentNode.insertBefore(cs,fs)}, 1); } ce(ss); })(document, 'script', 'https://sc.lfeeder.com/lftracker_v1_kn9Eq4RDxPr8RlvP.js'); })();`,
        }}
      />

      {/* Hamburger menu toggle */}
      <Script
        id="hamburger-toggle"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `document.querySelector('.first-button').addEventListener('click', function () {
document.querySelector('.animated-icon1').classList.toggle('open');
});`,
        }}
      />

      {/* Sticky header on scroll (plain JS — no jQuery dependency needed) */}
      <Script
        id="sticky-header"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function () {
  function onScroll() {
    var el = document.querySelector(".fixed-top-band");
    if (!el) return;
    if (window.scrollY > 50) el.classList.add("header-scroll");
    else el.classList.remove("header-scroll");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
})();`,
        }}
      />

      {/* Lock body scroll while the mobile menu is open */}
      <Script
        id="navbar-no-scroll"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `var navbarCollapse = document.getElementById('navbarSupportedContent');
if (navbarCollapse) {
navbarCollapse.addEventListener('show.bs.collapse', function () {
    document.body.classList.add('no-scroll');
});
navbarCollapse.addEventListener('hide.bs.collapse', function () {
    document.body.classList.remove('no-scroll');
});
}`,
        }}
      />

      {/* Reload embedded iframes when a Bootstrap modal is closed. Bootstrap's
          hidden.bs.modal event bubbles, so a single body-level listener covers
          every modal on the page — no jQuery needed. */}
      <Script
        id="modal-iframe-reload"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `document.body.addEventListener('hidden.bs.modal', function (e) {
    var iframes = e.target.querySelectorAll('iframe');
    iframes.forEach(function(iframe) {
        iframe.src = iframe.src;
    });
});`,
        }}
      />

      <Script
        src="https://static.cloudflareinsights.com/beacon.min.js/v3d52b47920f24c319d37e2661827c42b1787588026925"
        strategy="lazyOnload"
        data-cf-beacon='{"version":"2024.11.0","token":"1dc8cad185dc42a2a1e52192dfd6b6d7","r":1}'
      />
    </>
  );
}
