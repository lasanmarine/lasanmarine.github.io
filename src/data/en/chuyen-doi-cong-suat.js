export const chuyenDoiCongSuat = {
  meta: {
    title: 'Power conversion | Lasan Marine',
    description: 'Convert power values between kW, HP, CV, and PS.',
  },
  hero: {
    title: 'Power conversion',
  },
  calculator: {
    valueLabel: 'Power value',
    valuePlaceholder: 'Example: 500',
    unitLabel: 'Original unit',
    units: ['kW', 'HP', 'CV', 'PS'],
    submitLabel: 'Convert',
    resetLabel: 'Reset',
    resultHeaders: ['Result', 'Rounded', 'Unit'],
    resultUnits: [
      { key: 'HP', label: 'HP (imperial)' },
      { key: 'CV', label: 'CV (metric)' },
      { key: 'kW', label: 'kW (SI)' },
      { key: 'PS', label: 'PS (metric)' },
    ],
    note: 'Results are for quick reference and do not replace verified engineering calculations.',
    formula: {
      title: 'How it is calculated',
      steps: [
        {
          tex: 'P_{\\mathrm{kW}} = P_{\\mathrm{in}} \\times k_{\\mathrm{in}}',
          text: 'Convert the entered value to kilowatts using the factor of its own unit.',
        },
        {
          tex: 'P_{\\mathrm{out}} = \\dfrac{P_{\\mathrm{kW}}}{k_{\\mathrm{out}}}',
          text: 'Divide the kilowatt figure by the factor of the target unit.',
        },
      ],
      termsTitle: 'Conversion factors',
      terms: [
        { tex: 'k_{\\mathrm{kW}} = 1', text: 'Kilowatt, the SI unit of power.' },
        {
          tex: 'k_{\\mathrm{HP}} = 0.7457',
          text: 'Imperial horsepower, used on British and American engines.',
        },
        {
          tex: 'k_{\\mathrm{CV}} = k_{\\mathrm{PS}} = 0.7355',
          text: 'Metric horsepower: French CV and German PS share one value.',
        },
      ],
    },
  },
};
