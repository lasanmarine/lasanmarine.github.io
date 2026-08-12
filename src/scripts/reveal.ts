// Scroll reveals for elements marked with data-aos / data-aos-delay.
//
// The hidden state is applied by JS (via the reveal-on class) rather than by a
// stylesheet, so if this script fails to load the content simply stays visible
// instead of disappearing.
export function initReveal(): void {
  const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-aos]'));
  if (!elements.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion || !('IntersectionObserver' in window)) return;

  // Tells the inline head script that the observer took over, so it leaves the
  // reveal-on class in place instead of unhiding everything.
  (window as unknown as { __revealReady?: boolean }).__revealReady = true;
  document.documentElement.classList.add('reveal-on');

  const pending = new Set(elements);

  const reveal = (element: HTMLElement, withDelay: boolean) => {
    const delay = Number(element.dataset.aosDelay ?? 0);
    if (withDelay && delay) element.style.transitionDelay = `${delay}ms`;
    element.classList.add('is-revealed');
    observer.unobserve(element);
    pending.delete(element);
    if (!pending.size) window.removeEventListener('scroll', onScroll);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) reveal(entry.target as HTMLElement, true);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.04 },
  );

  // A large jump (anchor link, End key) can carry an element clean over the
  // viewport without its intersection ratio ever changing, so the observer
  // stays silent. Anything already scrolled past is revealed here instead.
  let queued = false;
  const onScroll = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      for (const element of pending) {
        if (element.getBoundingClientRect().bottom < 0) reveal(element, false);
      }
    });
  };

  elements.forEach((element) => observer.observe(element));
  window.addEventListener('scroll', onScroll, { passive: true });
}
