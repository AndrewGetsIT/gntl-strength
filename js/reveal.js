// Scroll-reveal: fades/slides [data-reveal] elements in as they enter
// the viewport. Static markup is picked up automatically on load;
// scripts that inject new markup (product grids, PDP, collection page)
// should call window.initScrollReveal(root) after rendering so their
// [data-reveal] elements get observed too.
(function () {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const supportsObserver = "IntersectionObserver" in window;

  const observer =
    !prefersReducedMotion && supportsObserver
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
        )
      : null;

  window.initScrollReveal = function (root) {
    const scope = root || document;
    const els = scope.querySelectorAll("[data-reveal]:not(.is-visible)");
    els.forEach((el, i) => {
      if (!observer) {
        el.classList.add("is-visible");
        return;
      }
      if (el.hasAttribute("data-reveal-stagger")) {
        el.style.transitionDelay = `${Math.min(i, 8) * 70}ms`;
      }
      observer.observe(el);
    });
  };

  document.addEventListener("DOMContentLoaded", () => window.initScrollReveal());
})();
