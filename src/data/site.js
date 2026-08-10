export const services = [
  {
    name: 'Thiết kế tàu mới',
    description:
      'Phát triển phương án tàu từ yêu cầu khai thác ban đầu đến bộ hồ sơ kỹ thuật hoàn chỉnh.',
    longDescription:
      'Phát triển phương án tàu từ yêu cầu khai thác, kích thước chính, bố trí chung, tuyến hình, kết cấu, hệ động lực và tính toán ổn định đến bộ hồ sơ kỹ thuật hoàn chỉnh.',
    icon: 'ship',
  },
  {
    name: 'Chuyển hoán vỏ',
    description: 'Thay đổi kết cấu vỏ phù hợp công năng, tải trọng và vùng hoạt động mới.',
    longDescription:
      'Khảo sát hiện trạng vỏ tàu và yêu cầu khai thác để đề xuất phương án chuyển hoán cân bằng giữa kết cấu, tải trọng, an toàn và công năng sử dụng mới.',
    icon: 'ship',
  },
  {
    name: 'Chuyển hoán máy',
    description: 'Tính toán và bố trí lại hệ động lực khi thay đổi máy chính, hệ trục và chân vịt.',
    longDescription:
      'Đánh giá máy chính, hệ trục, chân vịt, bệ máy và các hệ thống liên quan để triển khai phương án thay máy có tính toán kỹ thuật và khả năng thi công thực tế.',
    icon: 'cog',
  },
  {
    name: 'Chuyển hoán nghề',
    description: 'Điều chỉnh bố trí chung và trang thiết bị theo nghề khai thác mới của tàu cá.',
    longDescription:
      'Điều chỉnh bố trí chung và trang thiết bị trên tàu theo nghề khai thác mới, phù hợp với quy trình làm việc, yêu cầu ổn định, thao tác của thuyền viên và điều kiện hoạt động trên biển.',
    icon: 'ship',
  },
  {
    name: 'Chuyển vùng hoạt động',
    description: 'Đánh giá tính năng và hoàn thiện hồ sơ để mở rộng vùng hoạt động.',
    longDescription:
      'Đánh giá tình trạng kỹ thuật và giới hạn khai thác của phương tiện, thực hiện các tính toán và hồ sơ cần thiết để mở rộng vùng hoạt động an toàn.',
    icon: 'file',
  },
  {
    name: 'Hồ sơ kỹ thuật phân cấp',
    description: 'Chuẩn bị bản vẽ và tài liệu phục vụ kiểm tra, phân cấp và đăng kiểm.',
    longDescription:
      'Lập bản vẽ, thuyết minh, tính toán và tài liệu kỹ thuật phục vụ kiểm tra, phân cấp, đăng ký và phối hợp với các cơ quan liên quan.',
    icon: 'file',
  },
  {
    name: 'Thiết kế sửa đổi',
    description: 'Cập nhật hồ sơ theo thay đổi thực tế trong quá trình thi công hoặc khai thác.',
    longDescription:
      'Cập nhật hồ sơ kỹ thuật khi phương án thi công hoặc khai thác có thay đổi, bảo đảm bản vẽ, tính toán và hiện trạng phương tiện thống nhất với nhau.',
    icon: 'file',
  },
  {
    name: 'Hoán cải',
    description: 'Thiết kế cải tạo phương tiện theo mục đích khai thác mới.',
    longDescription:
      'Xây dựng phương án hoán cải phù hợp để điều chỉnh kết cấu, bố trí, trang thiết bị và hệ thống của phương tiện theo mục đích khai thác mới.',
    icon: 'cog',
  },
  {
    name: 'Hoán cải máy',
    description: 'Phương án thay thế, nâng cấp máy chính và các hệ thống liên quan.',
    longDescription:
      'Lập phương án thay thế hoặc nâng cấp máy chính, bao gồm bố trí buồng máy, bệ máy, hệ trục, khả năng tương thích của chân vịt và các hệ thống phụ trợ.',
    icon: 'cog',
  },
  {
    name: 'Lập thông báo ổn định',
    description: 'Tính toán và lập thông báo ổn định cho các trạng thái khai thác.',
    longDescription:
      'Tính toán các trạng thái tải trọng và điều kiện khai thác, lập thông báo ổn định phục vụ vận hành an toàn và thẩm tra kỹ thuật.',
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
    longDescription:
      'Develop the vessel concept from operating requirements, principal dimensions, general arrangement, hull lines, structure, propulsion, and stability through a complete technical package.',
    icon: 'ship',
  },
  {
    name: 'Hull conversion',
    description: 'Modify the hull structure for new functions, capacity, and operating areas.',
    longDescription:
      'Review the existing hull and operating requirements, then develop a conversion solution that balances structure, capacity, safety, and the vessel’s new working purpose.',
    icon: 'ship',
  },
  {
    name: 'Engine conversion',
    description:
      'Recalculate and rearrange propulsion when changing the main engine, shaft, or propeller.',
    longDescription:
      'Assess the new main engine, shaft line, propeller, foundations, and related systems to produce a workable propulsion conversion with the necessary technical calculations.',
    icon: 'cog',
  },
  {
    name: 'Fishing method conversion',
    description: 'Adapt deck arrangements and equipment to a new fishing method.',
    longDescription:
      'Rearrange the vessel and deck equipment for a new fishing method, matching the working process, stability requirements, crew operation, and practical conditions at sea.',
    icon: 'ship',
  },
  {
    name: 'Operating area extension',
    description: 'Assess vessel performance and prepare documents for an extended operating area.',
    longDescription:
      'Evaluate the vessel’s technical condition and operating limits, then prepare the calculations and documents required for a safe extension to a new operating area.',
    icon: 'file',
  },
  {
    name: 'Classification documents',
    description: 'Prepare drawings and documents for inspection, classification, and registration.',
    longDescription:
      'Prepare drawings, calculations, specifications, and technical records for inspection, classification, registration, and coordination with the relevant authorities.',
    icon: 'file',
  },
  {
    name: 'Design modification',
    description: 'Update documents to reflect changes during construction or operation.',
    longDescription:
      'Update the technical documentation when construction or operation requires a change, keeping drawings, calculations, and the final vessel condition consistent.',
    icon: 'file',
  },
  {
    name: 'Vessel refit',
    description: 'Redesign a vessel for a new operating purpose.',
    longDescription:
      'Develop a practical refit solution that adapts the existing vessel structure, arrangement, equipment, and systems to a new operating purpose.',
    icon: 'cog',
  },
  {
    name: 'Machinery refit',
    description: 'Plan main-engine upgrades and changes to related systems.',
    longDescription:
      'Plan a main-engine replacement or upgrade, including machinery arrangement, foundations, shafting, propeller compatibility, and supporting systems.',
    icon: 'cog',
  },
  {
    name: 'Stability booklet',
    description: 'Calculate and document stability for vessel operating conditions.',
    longDescription:
      'Calculate operating conditions and loading cases, then prepare a stability booklet that supports safe operation and technical review.',
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
