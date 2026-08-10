export const services = [
  {
    name: 'Thiết kế tàu mới',
    description:
      'Phát triển phương án tàu từ yêu cầu khai thác ban đầu đến bộ hồ sơ kỹ thuật hoàn chỉnh.',
    icon: 'ship',
  },
  {
    name: 'Chuyển hoán vỏ',
    description: 'Thay đổi kết cấu vỏ phù hợp công năng, tải trọng và vùng hoạt động mới.',
    icon: 'ship',
  },
  {
    name: 'Chuyển hoán máy',
    description: 'Tính toán và bố trí lại hệ động lực khi thay đổi máy chính, hệ trục và chân vịt.',
    icon: 'cog',
  },
  {
    name: 'Chuyển hoán nghề',
    description: 'Điều chỉnh bố trí chung và trang thiết bị theo nghề khai thác mới của tàu cá.',
    icon: 'ship',
  },
  {
    name: 'Chuyển vùng hoạt động',
    description: 'Đánh giá tính năng và hoàn thiện hồ sơ để mở rộng vùng hoạt động.',
    icon: 'file',
  },
  {
    name: 'Hồ sơ kỹ thuật phân cấp',
    description: 'Chuẩn bị bản vẽ và tài liệu phục vụ kiểm tra, phân cấp và đăng kiểm.',
    icon: 'file',
  },
  {
    name: 'Thiết kế sửa đổi',
    description: 'Cập nhật hồ sơ theo thay đổi thực tế trong quá trình thi công hoặc khai thác.',
    icon: 'file',
  },
  {
    name: 'Hoán cải',
    description: 'Thiết kế cải tạo phương tiện theo mục đích khai thác mới.',
    icon: 'cog',
  },
  {
    name: 'Hoán cải máy',
    description: 'Phương án thay thế, nâng cấp máy chính và các hệ thống liên quan.',
    icon: 'cog',
  },
  {
    name: 'Lập thông báo ổn định',
    description: 'Tính toán và lập thông báo ổn định cho các trạng thái khai thác.',
    icon: 'file',
  },
];
export const steps = [
  'Tiếp nhận yêu cầu.',
  'Phân tích phương tiện và mục đích khai thác.',
  'Đề xuất phương án kỹ thuật.',
  'Triển khai thiết kế.',
  'Kiểm tra và hoàn thiện hồ sơ.',
  'Bàn giao và hỗ trợ kỹ thuật.',
];
export const projects = [
  {
    name: 'Tàu cá vỏ thép 24m',
    service: 'Thiết kế tàu mới',
    group: 'Thiết kế mới',
    meta: 'Tàu đánh cá · L = 24m · 2026',
  },
  {
    name: 'Tàu chở hàng nội địa 38m',
    service: 'Hoán cải',
    group: 'Hoán cải',
    meta: 'Vận tải đường thủy · L = 38m · 2026',
  },
  {
    name: 'Tàu cá vỏ composite 18m',
    service: 'Thiết kế tàu mới',
    group: 'Thiết kế mới',
    meta: 'Tàu đánh cá · L = 18m · 2026',
  },
  {
    name: 'Tàu cá vỏ gỗ 15m',
    service: 'Chuyển hoán nghề',
    group: 'Chuyển hoán',
    meta: 'Tàu đánh cá · L = 15m · 2025',
  },
  {
    name: 'Tàu khách nội địa 22m',
    service: 'Hồ sơ kỹ thuật phân cấp',
    group: 'Hồ sơ kỹ thuật',
    meta: 'Thủy nội địa · L = 22m · 2025',
  },
  {
    name: 'Sà lan chở hàng 45m',
    service: 'Chuyển hoán vỏ',
    group: 'Chuyển hoán',
    meta: 'Vận tải đường thủy · L = 45m · 2025',
  },
];

export const servicesEn = [
  {
    name: 'New vessel design',
    description:
      'Develop a vessel from operating requirements through a complete technical package.',
    icon: 'ship',
  },
  {
    name: 'Hull conversion',
    description: 'Modify the hull structure for new functions, capacity, and operating areas.',
    icon: 'ship',
  },
  {
    name: 'Engine conversion',
    description:
      'Recalculate and rearrange propulsion when changing the main engine, shaft, or propeller.',
    icon: 'cog',
  },
  {
    name: 'Fishing method conversion',
    description: 'Adapt deck arrangements and equipment to a new fishing method.',
    icon: 'ship',
  },
  {
    name: 'Operating area extension',
    description: 'Assess vessel performance and prepare documents for an extended operating area.',
    icon: 'file',
  },
  {
    name: 'Classification documents',
    description: 'Prepare drawings and documents for inspection, classification, and registration.',
    icon: 'file',
  },
  {
    name: 'Design modification',
    description: 'Update documents to reflect changes during construction or operation.',
    icon: 'file',
  },
  {
    name: 'Vessel refit',
    description: 'Redesign a vessel for a new operating purpose.',
    icon: 'cog',
  },
  {
    name: 'Machinery refit',
    description: 'Plan main-engine upgrades and changes to related systems.',
    icon: 'cog',
  },
  {
    name: 'Stability booklet',
    description: 'Calculate and document stability for vessel operating conditions.',
    icon: 'file',
  },
];

export const stepsEn = [
  'Receive requirements.',
  'Assess the vessel and operating purpose.',
  'Propose a technical solution.',
  'Develop the design.',
  'Review and complete the documents.',
  'Deliver and provide technical support.',
];

export const projectsEn = [
  {
    name: '24m steel fishing vessel',
    service: 'New vessel design',
    group: 'New design',
    meta: 'Fishing vessel · L = 24m · 2026',
  },
  {
    name: '38m inland cargo vessel',
    service: 'Vessel refit',
    group: 'Refit',
    meta: 'Waterway transport · L = 38m · 2026',
  },
  {
    name: '18m composite fishing vessel',
    service: 'New vessel design',
    group: 'New design',
    meta: 'Fishing vessel · L = 18m · 2026',
  },
  {
    name: '15m wooden fishing vessel',
    service: 'Fishing method conversion',
    group: 'Conversion',
    meta: 'Fishing vessel · L = 15m · 2025',
  },
  {
    name: '22m inland passenger vessel',
    service: 'Classification documents',
    group: 'Technical documents',
    meta: 'Inland waterway · L = 22m · 2025',
  },
  {
    name: '45m cargo barge',
    service: 'Hull conversion',
    group: 'Conversion',
    meta: 'Waterway transport · L = 45m · 2025',
  },
];

export function getSiteData(lang = 'vi') {
  return lang === 'en'
    ? { services: servicesEn, steps: stepsEn, projects: projectsEn }
    : { services, steps, projects };
}
