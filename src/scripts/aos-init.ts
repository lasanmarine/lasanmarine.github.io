export function initAOS(): void {
  if (!document.querySelector('[data-aos]')) return;

  Promise.all([import('aos'), import('aos/dist/aos.css')]).then(([{ default: AOS }]) => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 24,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  });
}

export function scheduleAOS(): void {
  const requestIdle = window.requestIdleCallback;
  if (requestIdle) {
    requestIdle(initAOS);
  } else {
    setTimeout(initAOS, 1);
  }
}
