export function initShaftDiameterTool(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-shaft-calculator]').forEach((calculator) => {
    const form = calculator.querySelector<HTMLFormElement>('form');
    const error = calculator.querySelector<HTMLElement>('[data-error]');
    const results = calculator.querySelector<HTMLElement>('[data-results]');
    const factorsToKw: Record<string, number> = {
      kW: 1,
      HP: 0.7457,
      CV: 0.735499,
      PS: 0.735499,
    };

    const showError = (message: string) => {
      if (!error) return;
      error.textContent = message;
      error.hidden = false;
      results?.setAttribute('hidden', '');
    };

    form?.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const power = Number(data.get('power'));
      const unit = String(data.get('unit') ?? '');
      const engineRpm = Number(data.get('rpm'));
      const ratio = Number(data.get('ratio'));
      const k3 = Number(data.get('k3'));

      if (![power, engineRpm, ratio, k3].every((value) => Number.isFinite(value) && value > 0)) {
        showError('Vui lòng nhập đầy đủ các giá trị lớn hơn 0.');
        return;
      }
      if (!factorsToKw[unit]) {
        showError('Vui lòng chọn đơn vị công suất.');
        return;
      }

      const powerKw = power * factorsToKw[unit];
      const propellerRpm = engineRpm / ratio;
      const diameter = k3 * Math.cbrt(powerKw / propellerRpm);

      calculator.querySelector<HTMLElement>('[data-result="propeller-rpm"]')!.textContent =
        propellerRpm.toFixed(0);
      calculator.querySelector<HTMLElement>('[data-result="diameter"]')!.textContent =
        diameter.toFixed(0);
      if (error) error.hidden = true;
      results?.removeAttribute('hidden');
    });

    form?.addEventListener('reset', () => {
      if (error) error.hidden = true;
      results?.setAttribute('hidden', '');
    });
  });
}
