export function initHeaderNav(root: ParentNode = document): void {
  const header = root.querySelector<HTMLElement>('.header');
  const button = root.querySelector<HTMLButtonElement>('.menu-button');
  const nav = root.querySelector<HTMLElement>('#site-nav');
  const backdrop = root.querySelector<HTMLElement>('.nav-backdrop');

  if (header) {
    // Lifts the sticky bar off the page once it starts overlapping content.
    const syncScrolled = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    syncScrolled();
    window.addEventListener('scroll', syncScrolled, { passive: true });
  }

  if (!button || !nav) return;

  const setOpen = (open: boolean) => {
    button.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    backdrop?.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-locked', open);
  };

  button.addEventListener('click', () => {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });
  backdrop?.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
}
