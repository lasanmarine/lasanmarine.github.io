export const lienHe = {
  meta: {
    title: 'Contact | Lasan Marine',
    description: 'Discuss your technical requirements with Lasan Marine.',
  },
  hero: {
    title: 'Talk to the Lasan Marine engineering team',
  },
  contactsTitle: 'Contact information',
  contacts: [
    ['Company', 'LASAN MARINE COMPANY LIMITED'],
    ['Address', '03 Tran Lu Street, Bac Nha Trang Ward, Khanh Hoa Province'],
    ['Hotline', '0834 310 781'],
    ['Email', 'contact@lasanmarine.vn'],
  ],
  form: {
    name: { label: 'Full name *' },
    company: { label: 'Company' },
    phone: { label: 'Phone *' },
    email: { label: 'Email' },
    service: { label: 'Service' },
    vessel: {
      label: 'Vessel type',
      options: ['Fishing vessel', 'Inland waterway vessel', 'Waterway transport vessel'],
    },
    message: {
      label: 'Message',
      placeholder: 'Briefly describe the vessel and technical requirements',
    },
    submitLabel: 'Send inquiry',
  },
  zalo: {
    url: 'https://zalo.me/0834310781',
    intro: 'Enquiry from the Lasan Marine website',
    labels: {
      name: 'Name',
      company: 'Company',
      phone: 'Phone',
      email: 'Email',
      service: 'Service',
      vessel: 'Vessel type',
      message: 'Requirements',
    },
    previewLabel: 'Copied message',
    copyLabel: 'Copy again',
    copiedLabel: 'Copied',
    openLabel: 'Reopen Zalo',
  },
  success: {
    title: 'Zalo opened',
    text: 'The message below has been copied. Paste it into the Zalo chat that just opened and send. Attach any drawings directly in Zalo.',
  },
};
