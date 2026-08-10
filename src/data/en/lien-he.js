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
    attachment: {
      label: 'Attachments',
      hint: 'Select drawings or documents (PDF, DWG, ZIP)',
    },
    submitLabel: 'Send inquiry',
  },
  success: {
    title: 'Inquiry recorded',
    text: 'This is a UI prototype. Connect the form to an email service or API before production deployment.',
  },
};
