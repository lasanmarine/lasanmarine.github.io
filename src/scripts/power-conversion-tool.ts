export function initPowerConversionTool(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-power-converter]').forEach((calculator) => {
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
      const value = Number(data.get('value'));
      const unit = String(data.get('unit') ?? '');

      if (!Number.isFinite(value) || value <= 0) {
        showError('Vui lòng nhập giá trị công suất lớn hơn 0.');
        return;
      }
      if (!factorsToKw[unit]) {
        showError('Vui lòng chọn đơn vị công suất ban đầu.');
        return;
      }

      const kw = value * factorsToKw[unit];
      const converted: Record<string, number> = {
        HP: kw / factorsToKw.HP,
        CV: kw / factorsToKw.CV,
        kW: kw,
        PS: kw / factorsToKw.PS,
      };

      Object.entries(converted).forEach(([resultUnit, resultValue]) => {
        const exact = calculator.querySelector<HTMLElement>(`[data-result="${resultUnit}"]`);
        const rounded = calculator.querySelector<HTMLElement>(`[data-rounded="${resultUnit}"]`);
        if (exact) exact.textContent = resultValue.toFixed(2);
        if (rounded) rounded.textContent = resultValue.toFixed(0);
      });

      if (error) error.hidden = true;
      results?.removeAttribute('hidden');
    });

    form?.addEventListener('reset', () => {
      if (error) error.hidden = true;
      results?.setAttribute('hidden', '');
    });
  });
}
