// Card slider shared by the vehicle categories and services blocks.
//
// The track is a plain scroll-snap container, so touch and trackpad swiping,
// keyboard scrolling and the browser's own focus handling all work without
// any JavaScript. This file only adds the prev/next buttons and the dots, and
// keeps them in sync with whatever position the user scrolled to.
function initSlider(section: HTMLElement): void {
  const viewport = section.querySelector<HTMLElement>('[data-slider-viewport]');
  const slides = Array.from(section.querySelectorAll<HTMLElement>('[data-slider-slide]'));
  const dots = Array.from(section.querySelectorAll<HTMLButtonElement>('[data-slider-dot]'));
  const previousButton = section.querySelector<HTMLButtonElement>('[data-slider-prev]');
  const nextButton = section.querySelector<HTMLButtonElement>('[data-slider-next]');

  if (!viewport || slides.length < 2) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let frame = 0;
  let current = 0;

  // The slide whose left edge sits closest to the current scroll offset.
  const nearestIndex = (): number => {
    let index = 0;
    let smallest = Infinity;

    slides.forEach((slide, position) => {
      const distance = Math.abs(slide.offsetLeft - viewport.scrollLeft);
      if (distance < smallest) {
        smallest = distance;
        index = position;
      }
    });

    return index;
  };

  const goTo = (index: number): void => {
    const target = slides[Math.min(slides.length - 1, Math.max(0, index))];
    viewport.scrollTo({ left: target.offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  const sync = (): void => {
    frame = 0;
    current = nearestIndex();

    dots.forEach((dot, index) => {
      const active = index === current;
      dot.classList.toggle('is-active', active);
      // aria-current marks the dot for assistive tech; the class is only paint.
      if (active) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });

    // Compare against the real scroll extent rather than the index, so a
    // partially scrolled last slide still disables the next button.
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    if (previousButton) previousButton.disabled = viewport.scrollLeft <= 1;
    if (nextButton) nextButton.disabled = viewport.scrollLeft >= maxScroll - 1;
  };

  const requestSync = (): void => {
    if (!frame) frame = window.requestAnimationFrame(sync);
  };

  previousButton?.addEventListener('click', () => goTo(current - 1));
  nextButton?.addEventListener('click', () => goTo(current + 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => goTo(index)));
  viewport.addEventListener('scroll', requestSync, { passive: true });
  window.addEventListener('resize', requestSync);

  sync();
}

export function initCardSliders(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-card-slider]').forEach(initSlider);
}
