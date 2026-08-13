export const traCuuDongCo = {
  meta: {
    title: 'Marine engine specifications | Lasan Marine',
    description:
      'Look up marine engine specifications: manufacturer, model, power output (PS, HP, kW), and speed.',
  },
  hero: {
    title: 'Marine engine specifications',
  },
  lookup: {
    fields: [
      { key: 'hang', label: 'Manufacturer', placeholder: 'e.g. Weichai, Cummins' },
      { key: 'hieu_may', label: 'Engine model', placeholder: 'e.g. X6170ZC350-1' },
      { key: 'ps', label: 'Power (PS, CV)', placeholder: 'e.g. 350' },
      { key: 'hp', label: 'Power (HP)', placeholder: 'e.g. 345' },
      { key: 'kw', label: 'Power (kW)', placeholder: 'e.g. 257' },
      { key: 'rpm', label: 'Speed (rpm)', placeholder: 'e.g. 1000' },
    ],
    headers: ['Manufacturer', 'Model', 'Power (PS, CV)', 'Power (HP)', 'Power (kW)', 'Speed (rpm)'],
    sortLabel: 'Sort by column',
    emptyMessage: 'No matching engine found.',
    resultCountLabel: 'matching results',
    paginationLabel: 'Pagination',
    prevLabel: 'Previous page',
    nextLabel: 'Next page',
    note: [
      'This data is drawn from several sources and contributed by an open community, so please cross-check it before use. If an engine needs to be added or corrected, send us the supporting documentation.',
      'Our thanks to everyone contributing to an open, accurate and responsibly maintained record of marine engine data for professional use.',
    ],
  },
};
