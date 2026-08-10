function initSection(section: HTMLElement): void {
  const track = section.querySelector<HTMLElement>('[data-category-track]');
  const cards = section.querySelectorAll<HTMLElement>('[data-category-card]');
  const backgrounds = section.querySelectorAll<HTMLElement>('[data-category-background]');
  const progressBar = section.querySelector<HTMLElement>('[data-category-progress]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let frame = 0;
  let targetProgress = 0;
  let renderedProgress = 0;
  let previousTime = performance.now();

  const getProgress = () => {
    const bounds = section.getBoundingClientRect();
    const scrollRange = section.offsetHeight - window.innerHeight;
    return Math.min(1, Math.max(0, -bounds.top / scrollRange));
  };

  const render = (time: number) => {
    if (!track || !cards.length) return;

    const delta = Math.min(64, time - previousTime);
    const smoothing = reduceMotion ? 1 : 1 - Math.exp(-delta / 140);
    renderedProgress += (targetProgress - renderedProgress) * smoothing;
    previousTime = time;

    if (Math.abs(targetProgress - renderedProgress) < 0.0001) {
      renderedProgress = targetProgress;
    }

    const maxTranslate = track.scrollWidth;
    const activeIndex = Math.min(cards.length - 1, Math.floor(renderedProgress * cards.length));

    track.style.transform = `translate3d(${-renderedProgress * maxTranslate}px, 0, 0)`;
    progressBar?.style.setProperty('transform', `scaleX(${renderedProgress})`);
    cards.forEach((card, index) => card.classList.toggle('active', index === activeIndex));
    backgrounds.forEach((background, index) =>
      background.classList.toggle('active', index === activeIndex),
    );

    if (renderedProgress !== targetProgress) {
      frame = window.requestAnimationFrame(render);
    } else {
      frame = 0;
    }
  };

  const requestUpdate = () => {
    targetProgress = getProgress();
    if (!frame) {
      previousTime = performance.now();
      frame = window.requestAnimationFrame(render);
    }
  };

  targetProgress = getProgress();
  renderedProgress = targetProgress;
  render(performance.now());
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
}

export function initVehicleCategories(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-vehicle-categories]').forEach(initSection);
}
