export const services = [
  {
    name: 'Thiết kế tàu mới',
    description:
      'Phát triển phương án tàu từ bài toán khai thác đến trọn bộ hồ sơ kỹ thuật thi công & thẩm định Đăng kiểm (VR).',
    longDescription:
      'Tư vấn toàn diện từ bài toán kinh tế - kỹ thuật: Tính chọn kích thước chính (L, B, D, d), thiết kế tuyến hình thân tàu giảm sức cản, bố trí chung tối ưu công năng, tính toán kết cấu theo Quy phạm VR, thiết kế hệ động lực - chân vịt và lập hồ sơ tính toán thủy tĩnh & thông báo ổn định.',
    icon: 'ship',
  },
  {
    name: 'Chuyển hoán vỏ',
    description: 'Tính toán cải tạo kết cấu, kéo dài thân tàu (Jumboization) hoặc tăng tải trọng chở hàng.',
    longDescription:
      'Khảo sát đo đạc hiện trạng, tính toán sức bền dầm dọc thân tàu và biến dạng kết cấu khi điều chỉnh kích thước hoặc thay đổi công năng. Lập hồ sơ chuyển hoán trình Cục Đăng kiểm thẩm định.',
    icon: 'ship',
  },
  {
    name: 'Chuyển hoán máy',
    description: 'Tính toán chọn máy chính mới, phối hợp tỷ số truyền hộp số và tối ưu đường kính trục - chân vịt.',
    longDescription:
      'Đánh giá sức bền bệ máy, tính toán dao động xoắn hệ trục, phối hợp đặc tính công suất động cơ với đường cong sức cản tàu. Thiết kế lại hệ động lực đảm bảo tàu đạt tốc độ khai thác và tiết kiệm dầu.',
    icon: 'cog',
  },
  {
    name: 'Chuyển hoán nghề tàu cá',
    description: 'Tải lại trọng tâm tàu, điều chỉnh bố trí boong, bố trí thiết bị nghề cá và tính lại thông báo ổn định.',
    longDescription:
      'Tái cấu trúc bố trí chung boong thao tác, kiểm tra sức bền bệ tời/hệ thống cẩu kéo, lập lại các trạng thái tải trọng khai thác thực tế và tính toán lại thông báo ổn định theo Tiêu chuẩn Đăng kiểm tàu cá.',
    icon: 'ship',
  },
  {
    name: 'Chuyển vùng hoạt động',
    description: 'Đánh giá tính năng, bổ sung trang thiết bị và lập hồ sơ mở rộng vùng hoạt động (VR-SI lên VR-SB, Biển khơi).',
    longDescription:
      'Tính toán lại mạn khô tối thiểu, độ bền mạn/boong, trang thiết bị cứu sinh, cứu hỏa và tầm hoạt động. Lập hồ sơ kỹ thuật phục vụ thẩm định chuyển vùng hoạt động an toàn theo quy định VR.',
    icon: 'file',
  },
  {
    name: 'Hồ sơ kỹ thuật phân cấp',
    description: 'Lập trọn bộ bản vẽ kỹ thuật, thuyết minh tính toán phục vụ thẩm định, phân cấp và cấp giấy chứng nhận VR.',
    longDescription:
      'Số hóa và lập trọn bộ hồ sơ kỹ thuật bao gồm: Thuyết minh kỹ thuật, Bản vẽ bố trí chung, Tuyến hình, Kết cấu thân tàu, Hệ thống máy - điện - ống, Hồ sơ thủy tĩnh và Thông báo ổn định trình duyệt VR.',
    icon: 'file',
  },
  {
    name: 'Thiết kế sửa đổi & Thi công',
    description: 'Cập nhật bản vẽ thi công (Shop drawings/Nesting CNC), xử lý phát sinh thực tế tại nhà máy đóng tàu.',
    longDescription:
      'Hỗ trợ kỹ thuật trực tiếp tại xưởng/triền đà, điều chỉnh hồ sơ thiết kế phù hợp thực tế công nghệ đóng tàu của nhà máy mà vẫn đảm bảo 100% tuân thủ bản vẽ đã thẩm định.',
    icon: 'file',
  },
  {
    name: 'Hoán cải công năng phương tiện',
    description: 'Tái thiết kế phương tiện thủy thành tàu du lịch, nhà hàng nổi, tàu công vụ hoặc tàu chuyên dùng.',
    longDescription:
      'Xây dựng phương án hoán cải toàn diện về kiến trúc thượng tầng, bố trí không gian hành khách, kiểm tra lại sức bền cục bộ và tính toán lại ổn định chống chìm / ổn định thế năng.',
    icon: 'cog',
  },
  {
    name: 'Nâng cấp & Thay thế hệ động lực',
    description: 'Lập phương án thay thế động cơ diesel thủy, nâng cấp hệ thống phụ trợ buồng máy và đường ống tàu.',
    longDescription:
      'Lập bản vẽ bố trí buồng máy mới, thiết kế hệ thống làm mát, thông gió, khí xả, nhiên liệu, kiểm tra tính tương thích của hộp số và chân vịt với công suất máy mới.',
    icon: 'cog',
  },
  {
    name: 'Lập thông báo ổn định',
    description: 'Tính toán thủy tĩnh, lập đồ thị ổn định mạn đứng, ổn định thế năng và hồ sơ ổn định ngập nước theo quy phạm.',
    longDescription:
      'Ứng dụng phần mềm chuyên dụng (Maxsurf/NAPA) mô hình hóa chính xác thân tàu, tính toán ổn định cho 100% trạng thái khai thác (không tải, đầy tải, tiêu thụ 50%, rời bến, cập bến) đáp ứng đầy đủ tiêu chí VR & IMO.',
    icon: 'file',
  },
];
export const steps = [
  'Tiếp nhận bài toán khai thác & Khảo sát phương tiện.',
  'Phân tích Thủy động lực học & Đề xuất Thông số chính.',
  'Triển khai Thiết kế Tuyến hình, Bố trí chung & Kết cấu.',
  'Tính toán Thủy tĩnh, Ổn định & Sức bền theo Quy phạm.',
  'Nộp Hồ sơ & Trực tiếp Bảo vệ trước Cục Đăng kiểm (VR).',
  'Bàn giao Hồ sơ Kỹ thuật & Hỗ trợ Giám sát Thi công.',
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
