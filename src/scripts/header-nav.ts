export function initHeaderNav(root: ParentNode = document): void {
  const button = root.querySelector<HTMLButtonElement>('.menu-button');
  const nav = root.querySelector<HTMLElement>('#site-nav');
  const backdrop = root.querySelector<HTMLElement>('.nav-backdrop');

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
