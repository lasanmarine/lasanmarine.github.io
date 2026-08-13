export const nav = {
  links: [
    ['Home', '/'],
    ['About', '/gioi-thieu/'],
    ['Services', '/dich-vu/'],
    ['Projects', '/du-an/'],
    ['Insights', '/bai-viet/'],
  ],
  toolsLabel: 'Tools',
  toolsMenu: [
    {
      label: 'Power conversion',
      href: '/cong-cu/chuyen-doi-cong-suat/',
      description: 'Convert between kW, HP, CV, and PS.',
      icon: 'gauge',
    },
    {
      label: 'Propeller shaft diameter check',
      href: '/cong-cu/kiem-tra-duong-kinh-truc-chan-vit/',
      description: 'Minimum shaft diameter under class rules.',
      icon: 'diameter',
    },
    {
      label: 'Engine specifications',
      href: '/cong-cu/tra-cuu-dong-co/',
      description: 'Find power and speed by engine model.',
      icon: 'search',
    },
  ],
  contactLabel: 'Contact',
  languages: [
    ['Tiếng Việt', 'vi'],
    ['English', 'en'],
  ],
  footer: {
    description:
      'Marine engineering consultancy and design for fishing vessels, inland waterway vessels, and waterway transport.',
    servicesTitle: 'Services',
    serviceLinks: ['New vessel design', 'Hull conversion', 'Vessel refit', 'Technical documents'],
    contactTitle: 'Contact',
    tax: 'Tax code',
    address: '03 Tran Lu Street, Bac Nha Trang Ward, Khanh Hoa Province, Vietnam',
    email: 'hello@lasanmarine.com',
    bank: {
      title: 'Bank account',
      rows: [
        ['Account name', 'LASAN MARINE COMPANY LIMITED'],
        ['Account number', '310781 (VND)'],
        ['Bank', 'Techcombank - Ma Vong Branch'],
        ['Swift code', 'VTCBVNVX'],
      ],
    },
  },
  map: {
    title: 'Lasan Marine location map',
    linkLabel: 'Open in Google Maps',
  },
};
