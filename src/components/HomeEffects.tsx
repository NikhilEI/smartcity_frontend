"use client";

import { useEffect } from "react";

function loadScriptOnce(src: string, onload?: () => void) {
  const existing = document.querySelector(`script[src="${src}"]`);
  if (existing) {
    onload?.();
    return;
  }
  const s = document.createElement("script");
  s.src = src;
  s.onload = () => onload?.();
  document.body.appendChild(s);
}

function whenReady(check: () => boolean, cb: () => void, attempts = 100) {
  if (check()) {
    cb();
    return;
  }
  if (attempts <= 0) return;
  setTimeout(() => whenReady(check, cb, attempts - 1), 50);
}

export default function HomeEffects() {
  useEffect(() => {
    // ---- AOS (scroll animations) ----
    loadScriptOnce("https://unpkg.com/aos@2.3.4/dist/aos.js", () => {
      window.AOS?.init({ duration: 1000, once: true });
    });

    // ---- particles.js hero background ----
    loadScriptOnce("/js/--particles.js", () => {
      loadScriptOnce("/js/particles/app.js", () => {
        loadScriptOnce("/js/particles/stats.js");
      });
    });

    // ---- owl carousels (needs jQuery + owl.carousel.js from GlobalScripts) ----
    whenReady(
      () => !!(window.jQuery && window.jQuery.fn && window.jQuery.fn.owlCarousel),
      () => {
        const $ = window.jQuery!;

        // Original site order: the generic `.owl-carousel` init is registered via
        // $(document).ready(), which jQuery defers to a microtask — so it actually
        // *runs after* the specific per-ID inits below, which execute as plain
        // synchronous script. Since owlCarousel() is a no-op on an already-initialized
        // element, whichever call runs first wins; the specific configs must go first
        // or every named carousel silently falls back to the generic 4-item layout.
        $("#banner-top-carousel").owlCarousel({
          loop: true,
          margin: 30,
          autoplayTimeout: 10000,
          nav: false,
          dots: true,
          navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
          autoplay: true,
          autoplayHoverPause: true,
          responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 },
            1100: { items: 1 },
          },
        });

        $("#co-located-shows-carousel").owlCarousel({
          loop: true,
          autoplay: true,
          dots: true,
          nav: false,
          margin: 10,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              dots: false,
              animateOut: "slideInLeft",
              animateIn: "slideOutRight",
              center: true,
              stagePadding: 30,
              autoplayTimeout: 2000,
            },
            600: { items: 2 },
            750: { items: 3 },
            1000: { items: 4, margin: 30 },
          },
        });

        $("#world-say-carousel").owlCarousel({
          loop: true,
          autoplay: true,
          dots: false,
          nav: true,
          navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
          margin: 10,
          responsiveClass: true,
          responsive: {
            0: { items: 2, nav: true, dots: false },
            600: { items: 2 },
            750: { items: 3 },
            1000: { items: 5, margin: 30 },
          },
        });

        $("#ai-communities-carousel-home").owlCarousel({
          margin: 30,
          nav: false,
          dots: true,
          autoplay: true,
          autoplayTimeout: 2000,
          autoplayHoverPause: true,
          navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
          loop: true,
          responsive: {
            0: { items: 1, dots: false },
            450: { items: 2 },
            700: { items: 3 },
            1000: { items: 4 },
          },
        });

        $("#industry-awards-carousel").owlCarousel({
          loop: true,
          autoplay: false,
          dots: true,
          nav: false,
          navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
          margin: 10,
          padding: 10,
          responsiveClass: true,
          responsive: {
            0: { items: 1, dots: false, autoplayTimeout: 2000 },
            600: { items: 1 },
            750: { items: 2 },
            1000: { items: 2, margin: 30 },
          },
        });

        $("#brands_slider").owlCarousel({
          margin: 30,
          nav: true,
          autoplay: true,
          dots: false,
          navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
          loop: true,
          responsive: {
            0: { items: 2, margin: 10 },
            600: { items: 3 },
            1000: { items: 5 },
            1400: { items: 6 },
          },
        });

        // Generic fallback for any other `.owl-carousel` element not covered by a
        // specific selector above (matches original's deferred $(document).ready order).
        $(".owl-carousel").owlCarousel({
          loop: true,
          margin: 10,
          responsiveClass: true,
          responsive: {
            0: { items: 1, nav: true },
            600: { items: 3, nav: false },
            1000: { items: 4, nav: true, loop: false, margin: 20 },
          },
        });
      }
    );

    // ---- Move news ticker to top of page (no-op if not present) ----
    const ticker = document.getElementById("dynamic-news-ticker");
    if (ticker) {
      ticker.style.display = "";
      document.body.insertBefore(ticker, document.body.firstChild);
    }

    // ---- Animated stat counters ----
    const counters = document.querySelectorAll<HTMLElement>(".count");
    const counterObservers: IntersectionObserver[] = [];
    if (counters.length) {
      const parseValue = (txt: string) => {
        txt = txt.replace(/,/g, "").trim();
        let multi = 1;
        if (txt.endsWith("B")) { multi = 1e9; txt = txt.slice(0, -1); }
        else if (txt.endsWith("M")) { multi = 1e6; txt = txt.slice(0, -1); }
        else if (txt.endsWith("K")) { multi = 1e3; txt = txt.slice(0, -1); }
        const num = parseFloat(txt) || 0;
        return { num: num * multi };
      };
      const formatBack = (val: number, original: string) => {
        const txt = original.replace(/,/g, "").trim();
        if (txt.endsWith("B") || original.includes("B")) return (val / 1e9).toFixed(1) + "B";
        if (txt.endsWith("M") || original.includes("M")) return (val / 1e6).toFixed(1) + "M";
        return Math.round(val).toLocaleString("en-IN");
      };

      counters.forEach((el) => {
        const original = el.textContent || "";
        const parsed = parseValue(original);
        let started = false;

        const obs = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting && !started) {
              started = true;
              const end = parsed.num;
              const dur = 1800;
              let startTime: number | null = null;

              const step = (ts: number) => {
                if (!startTime) startTime = ts;
                const prog = Math.min((ts - startTime) / dur, 1);
                const ease = 1 - Math.pow(1 - prog, 3);
                const cur = 0 + (end - 0) * ease;
                el.textContent = formatBack(cur, original);
                if (prog < 1) requestAnimationFrame(step);
                else el.textContent = original;
              };
              requestAnimationFrame(step);
              obs.disconnect();
            }
          },
          { threshold: 0.4 }
        );
        obs.observe(el);
        counterObservers.push(obs);
      });
    }

    // ---- Scroll-to-top button (no-op if not present) ----
    const scrollBtn = document.getElementById("scroll-top-btn");
    const onScrollForBtn = () => {
      if (!scrollBtn) return;
      if (window.scrollY > 400) scrollBtn.classList.add("visible");
      else scrollBtn.classList.remove("visible");
    };
    if (scrollBtn) {
      window.addEventListener("scroll", onScrollForBtn);
      scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }

    // ---- Subtle parallax on hero banner caption ----
    const bannerCaption = document.querySelector<HTMLElement>(".video-banner-main-box .carousel-caption");
    const onScrollParallax = () => {
      if (!bannerCaption) return;
      const sy = window.scrollY;
      if (sy < 700) {
        bannerCaption.style.transform = "translateY(" + sy * 0.18 + "px)";
        bannerCaption.style.opacity = String(1 - sy / 600);
      }
    };
    if (bannerCaption) {
      window.addEventListener("scroll", onScrollParallax, { passive: true });
    }

    // ---- Section headings fade-in on scroll ----
    const headingObservers: IntersectionObserver[] = [];
    const headings = document.querySelectorAll<HTMLElement>(
      ".home-heading-center, .home-heading-left-white, .world-say-heading-home"
    );
    headings.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = "opacity .7s ease, transform .7s ease";

      const obs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            obs.disconnect();
          }
        },
        { threshold: 0.25 }
      );
      obs.observe(el);
      headingObservers.push(obs);
    });

    // ---- Staggered card reveal ----
    const cardObservers: IntersectionObserver[] = [];
    const cards = document.querySelectorAll<HTMLElement>(
      ".stand-out-main-box, .dedicated-product-col-main, .leaders-home-main"
    );
    cards.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition =
        "opacity .55s " + ((i % 6) * 0.08) + "s ease, transform .55s " + ((i % 6) * 0.08) + "s ease, box-shadow .3s, transform .3s";

      const obs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(card);
      cardObservers.push(obs);
    });

    return () => {
      counterObservers.forEach((o) => o.disconnect());
      headingObservers.forEach((o) => o.disconnect());
      cardObservers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onScrollForBtn);
      window.removeEventListener("scroll", onScrollParallax);
    };
  }, []);

  return null;
}
