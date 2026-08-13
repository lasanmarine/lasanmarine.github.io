export const kiemTraDuongKinhTrucChanVit = {
  meta: {
    title: 'Propeller shaft diameter check | Lasan Marine',
    description: 'Estimate propeller speed and minimum propeller shaft diameter.',
  },
  hero: {
    title: 'Propeller shaft diameter check',
  },
  calculator: {
    powerLabel: 'Engine power',
    unitLabel: 'Power unit',
    units: ['kW', 'HP', 'CV', 'PS'],
    rpmLabel: 'Engine speed (rpm)',
    ratioLabel: 'Reduction ratio',
    ratioPlaceholder: 'Example: 2.5',
    materialLabel: 'Material and K3 factor',
    materials: [
      { value: '119.7', label: 'Carbon and carbon-manganese steel', k3: '119.7' },
      { value: '98.8', label: '316 stainless steel', k3: '98.8' },
      { value: '89.3', label: '431 stainless steel', k3: '89.3' },
      { value: '87.4', label: 'Manganese bronze', k3: '87.4' },
      { value: '80.7', label: 'Nickel-aluminium bronze', k3: '80.7' },
      { value: '80.7', label: 'Copper-nickel alloy K400', k3: '80.7' },
      { value: '67.5', label: 'Copper-nickel alloy K500', k3: '67.5' },
    ],
    submitLabel: 'Calculate',
    resetLabel: 'Reset',
    resultHeaders: ['Parameter', 'Result', 'Unit'],
    resultRows: [
      { label: 'Propeller speed', unit: 'rpm', key: 'propeller-rpm' },
      { label: 'Minimum propeller shaft diameter', unit: 'mm', key: 'diameter' },
    ],
    note: 'Results are indicative only; the final design must follow the applicable class rules.',
    formula: {
      title: 'How it is calculated',
      steps: [
        {
          tex: 'n = \\dfrac{n_e}{i}',
          text: 'Propeller speed is the engine speed divided by the gearbox ratio.',
        },
        {
          tex: 'd = K_3 \\sqrt[3]{\\dfrac{P}{n}}',
          text: 'Shaft diameter follows the cube root of power per revolution: eight times the power gives twice the diameter.',
        },
      ],
      termsTitle: 'Symbols',
      terms: [
        { tex: 'd', text: 'Minimum propeller shaft diameter (mm).' },
        { tex: 'K_3', text: 'Shaft material factor, taken from the class rules.' },
        { tex: 'P', text: 'Maximum continuous power of the main engine (kW).' },
        { tex: 'n', text: 'Propeller speed (rpm).' },
        { tex: 'n_e', text: 'Main engine speed (rpm).' },
        { tex: 'i', text: 'Gearbox reduction ratio.' },
      ],
    },
  },
};
