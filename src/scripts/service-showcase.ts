function initShowcase(showcase: Element): void {
  const links = showcase.querySelectorAll('[data-service-link]');
  const panels = showcase.querySelectorAll('[data-service-panel]');
  const backgrounds = showcase.querySelectorAll('[data-service-background]');
  const track = showcase.querySelector<HTMLElement>('[data-service-track]');
  let frame = 0;
  let wheelAmount = 0;
  let wheelLocked = false;

  const update = () => {
    frame = 0;
    if (!track || !panels.length) return;

    const bounds = showcase.getBoundingClientRect();
    const range = (showcase as HTMLElement).offsetHeight - window.innerHeight;
    const progress = Math.min(1, Math.max(0, -bounds.top / range));
    const activeIndex = Math.min(panels.length - 1, Math.round(progress * (panels.length - 1)));

    track.style.transform = `translate3d(0, ${-progress * (panels.length - 1) * 100}%, 0)`;
    links.forEach((link, index) => link.classList.toggle('active', index === activeIndex));
    backgrounds.forEach((background, index) =>
      background.classList.toggle('active', index === activeIndex),
    );
  };

  const requestUpdate = () => {
    if (!frame) frame = window.requestAnimationFrame(update);
  };

  links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const top =
        showcase.getBoundingClientRect().top + window.scrollY + index * window.innerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  showcase.addEventListener(
    'wheel',
    (event) => {
      if (!(event instanceof WheelEvent) || !panels.length) return;

      const bounds = showcase.getBoundingClientRect();
      const currentIndex = Math.min(
        panels.length - 1,
        Math.max(0, Math.round(-bounds.top / window.innerHeight)),
      );
      const direction = Math.sign(event.deltaY);
      const canMove =
        (direction > 0 && currentIndex < panels.length - 1) ||
        (direction < 0 && currentIndex > 0);

      if (!canMove) {
        wheelAmount = 0;
        return;
      }

      event.preventDefault();
      if (wheelLocked) return;

      wheelAmount += event.deltaY;
      if (Math.abs(wheelAmount) < 24) return;

      const nextIndex = currentIndex + Math.sign(wheelAmount);
      const sectionTop = bounds.top + window.scrollY;
      wheelAmount = 0;
      wheelLocked = true;
      window.scrollTo({ top: sectionTop + nextIndex * window.innerHeight, behavior: 'smooth' });

      window.setTimeout(() => {
        wheelLocked = false;
      }, 700);
    },
    { passive: false },
  );

  update();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
}

export function initServiceShowcases(root: ParentNode = document): void {
  root.querySelectorAll('[data-service-showcase]').forEach(initShowcase);
}
