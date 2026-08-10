export function initContactForm(root: ParentNode = document): void {
  const form = root.querySelector<HTMLFormElement>('#contact-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    form.querySelector('.fields')?.setAttribute('hidden', '');
    form.querySelector('.success')?.removeAttribute('hidden');
  });
}
