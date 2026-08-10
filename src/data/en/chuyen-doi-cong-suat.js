export const chuyenDoiCongSuat = {
  meta: {
    title: 'Power conversion | Lasan Marine',
    description: 'Convert power values between kW, HP, CV, and PS.',
  },
  hero: {
    title: 'Power conversion',
    description: 'Convert engine power between kW, HP, CV, and PS for quick technical reference.',
  },
  tool: {
    navTitle: 'Engineering tools',
    navIntro: 'Enter a power value and its original unit to obtain precise and rounded conversions.',
    navAriaLabel: 'Engineering tools',
    links: [
      { href: '/en/cong-cu/chuyen-doi-cong-suat/', label: 'Power conversion', current: true },
      {
        href: '/en/cong-cu/kiem-tra-duong-kinh-truc-chan-vit/',
        label: 'Propeller shaft diameter check',
      },
    ],
  },
  calculator: {
    valueLabel: 'Power value',
    valuePlaceholder: 'Example: 500',
    unitLabel: 'Original unit',
    unitPlaceholder: 'Select unit',
    units: ['kW', 'HP', 'CV', 'PS'],
    submitLabel: 'Convert',
    resetLabel: 'Reset',
    resultsTitle: 'Conversion results',
    resultHeaders: ['Result', 'Rounded', 'Unit'],
    resultUnits: ['HP', 'CV', 'kW', 'PS'],
    note: 'Conventions: 1 HP = 0.7457 kW; 1 CV = 1 PS = 0.735499 kW. Results are for quick reference and do not replace verified engineering calculations.',
  },
};
