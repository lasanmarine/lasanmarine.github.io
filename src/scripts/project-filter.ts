export function initProjectFilter(allLabel: string, root: ParentNode = document): void {
  const buttons = root.querySelectorAll<HTMLButtonElement>('[data-filter]');
  const cards = root.querySelectorAll<HTMLElement>('[data-group]');

  buttons.forEach((button) =>
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      cards.forEach((card) => {
        card.hidden = button.dataset.filter !== allLabel && card.dataset.group !== button.dataset.filter;
      });
    }),
  );
}
