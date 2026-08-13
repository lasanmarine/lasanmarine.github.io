// The contact form hands the enquiry over to Zalo.
//
// Zalo has no URL parameter for pre-filling a message, so the closest workable
// flow is: build the text from the fields, put it on the clipboard, and open
// the chat for the visitor to paste. Both the clipboard write and the window
// open are started synchronously inside the submit handler, otherwise the
// browser treats the popup as unsolicited and blocks it.
function copyText(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).then(
      () => true,
      () => legacyCopy(text),
    );
  }
  return Promise.resolve(legacyCopy(text));
}

// execCommand is deprecated but remains the only fallback when the async
// clipboard is unavailable or the permission is denied.
function legacyCopy(text: string): boolean {
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  }
  document.body.removeChild(area);
  return copied;
}

export function initContactForm(root: ParentNode = document): void {
  const form = root.querySelector<HTMLFormElement>('#contact-form');
  if (!form) return;

  const fields = form.querySelector<HTMLElement>('.fields');
  const success = form.querySelector<HTMLElement>('.success');
  const preview = form.querySelector<HTMLElement>('[data-message-preview]');
  const copyButton = form.querySelector<HTMLButtonElement>('[data-copy]');
  const zaloUrl = form.dataset.zaloUrl ?? '';
  const intro = form.dataset.zaloIntro ?? '';
  const labels: Record<string, string> = JSON.parse(form.dataset.zaloLabels ?? '{}');

  const buildMessage = (): string => {
    const data = new FormData(form);
    const lines = Object.entries(labels)
      .map(([name, label]) => [label, String(data.get(name) ?? '').trim()] as const)
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`);
    return [intro, '', ...lines].join('\n').trim();
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const message = buildMessage();
    copyText(message);
    window.open(zaloUrl, '_blank', 'noopener');

    if (preview) preview.textContent = message;
    fields?.setAttribute('hidden', '');
    success?.removeAttribute('hidden');
  });

  copyButton?.addEventListener('click', () => {
    const original = copyButton.dataset.copyLabel ?? copyButton.textContent ?? '';
    copyText(preview?.textContent ?? '').then((copied) => {
      if (!copied) return;
      copyButton.textContent = copyButton.dataset.copiedLabel ?? original;
      window.setTimeout(() => {
        copyButton.textContent = original;
      }, 2000);
    });
  });
}
