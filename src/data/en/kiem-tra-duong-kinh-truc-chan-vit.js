export const kiemTraDuongKinhTrucChanVit = {
  meta: {
    title: 'Propeller shaft diameter check | Lasan Marine',
    description: 'Estimate propeller speed and minimum propeller shaft diameter.',
  },
  hero: {
    title: 'Propeller shaft diameter check',
    description:
      'Estimate propeller speed and minimum shaft diameter from engine power, reduction ratio, and material.',
  },
  tool: {
    navTitle: 'Engineering tools',
    navIntro: 'Enter engine, gearbox, and material parameters for a preliminary propeller shaft check.',
    navAriaLabel: 'Engineering tools',
    links: [
      { href: '/en/cong-cu/chuyen-doi-cong-suat/', label: 'Power conversion' },
      {
        href: '/en/cong-cu/kiem-tra-duong-kinh-truc-chan-vit/',
        label: 'Propeller shaft diameter check',
        current: true,
      },
    ],
  },
  calculator: {
    powerLabel: 'Engine power',
    unitLabel: 'Power unit',
    unitPlaceholder: 'Select unit',
    units: ['kW', 'HP', 'CV', 'PS'],
    rpmLabel: 'Engine speed (rpm)',
    ratioLabel: 'Reduction ratio',
    ratioPlaceholder: 'Example: 2.5',
    materialLabel: 'Material and K3 factor',
    materialPlaceholder: 'Select material',
    materials: [
      { value: '119.7', label: 'Carbon and carbon-manganese steel, K3 = 119.7' },
      { value: '98.8', label: '316 stainless steel, K3 = 98.8' },
      { value: '89.3', label: '431 stainless steel, K3 = 89.3' },
      { value: '87.4', label: 'Manganese bronze, K3 = 87.4' },
      { value: '80.7', label: 'Nickel-aluminium bronze, K3 = 80.7' },
      { value: '80.7', label: 'Copper-nickel alloy K400, K3 = 80.7' },
      { value: '67.5', label: 'Copper-nickel alloy K500, K3 = 67.5' },
    ],
    submitLabel: 'Calculate',
    resetLabel: 'Reset',
    resultsTitle: 'Check results',
    resultHeaders: ['Parameter', 'Result', 'Unit'],
    resultRows: [
      { label: 'Propeller speed', unit: 'rpm', key: 'propeller-rpm' },
      { label: 'Minimum propeller shaft diameter', unit: 'mm', key: 'diameter' },
    ],
    note: 'Preliminary formula: d = K3 × (P/n)^(1/3), where P is in kW and n is propeller rpm. The result does not replace design calculations or applicable classification requirements.',
  },
};
