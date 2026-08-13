export const services = [
  {
    name: 'Thiết kế tàu mới',
    description:
      'Phát triển phương án tàu từ bài toán khai thác đến bộ hồ sơ kỹ thuật thi công và thẩm định đăng kiểm.',
    longDescription:
      'Tư vấn từ bài toán kinh tế – kỹ thuật: chọn kích thước chính (L, B, D, d), thiết kế tuyến hình giảm sức cản, bố trí chung theo công năng, tính toán kết cấu theo quy phạm VR, thiết kế hệ động lực và chân vịt, lập hồ sơ thủy tĩnh cùng thông báo ổn định.',
    icon: 'ship',
  },
  {
    name: 'Chuyển hoán vỏ',
    description:
      'Tính toán cải tạo kết cấu, kéo dài thân tàu (jumboization) hoặc tăng tải trọng chở hàng.',
    longDescription:
      'Khảo sát hiện trạng, tính sức bền dầm dọc thân tàu và biến dạng kết cấu khi thay đổi kích thước hoặc công năng, sau đó lập hồ sơ chuyển hoán trình Cục Đăng kiểm Việt Nam thẩm định.',
    icon: 'ship',
  },
  {
    name: 'Chuyển hoán máy',
    description:
      'Chọn máy chính mới, phối hợp tỷ số truyền hộp số và tính lại đường kính trục cùng chân vịt.',
    longDescription:
      'Đánh giá sức bền bệ máy, tính dao động xoắn hệ trục và phối hợp đặc tính công suất động cơ với đường cong sức cản của tàu, từ đó thiết kế lại hệ động lực để tàu đạt tốc độ khai thác với mức tiêu hao nhiên liệu hợp lý.',
    icon: 'cog',
  },
  {
    name: 'Chuyển hoán nghề tàu cá',
    description:
      'Xác định lại trọng tâm tàu, điều chỉnh bố trí boong và thiết bị nghề, tính lại thông báo ổn định.',
    longDescription:
      'Tái cấu trúc bố trí boong thao tác, kiểm tra sức bền bệ tời và hệ thống cẩu kéo, lập lại các trạng thái tải trọng khai thác thực tế và tính lại thông báo ổn định theo tiêu chuẩn đăng kiểm tàu cá.',
    icon: 'ship',
  },
  {
    name: 'Chuyển vùng hoạt động',
    description:
      'Đánh giá tính năng, bổ sung trang thiết bị và lập hồ sơ mở rộng vùng hoạt động, từ VR-SI lên VR-SB hoặc biển khơi.',
    longDescription:
      'Tính lại mạn khô tối thiểu, độ bền mạn và boong, rà soát trang thiết bị cứu sinh, cứu hỏa cùng tầm hoạt động, sau đó lập hồ sơ kỹ thuật phục vụ thẩm định chuyển vùng theo quy định của đăng kiểm.',
    icon: 'file',
  },
  {
    name: 'Hồ sơ kỹ thuật phân cấp',
    description:
      'Lập bản vẽ kỹ thuật và thuyết minh tính toán phục vụ thẩm định, phân cấp và cấp giấy chứng nhận.',
    longDescription:
      'Số hóa và lập bộ hồ sơ kỹ thuật gồm thuyết minh, bản vẽ bố trí chung, tuyến hình, kết cấu thân tàu, hệ thống máy – điện – ống, hồ sơ thủy tĩnh và thông báo ổn định để trình duyệt.',
    icon: 'file',
  },
  {
    name: 'Thiết kế sửa đổi và thi công',
    description:
      'Cập nhật bản vẽ thi công (shop drawing, nesting CNC) và xử lý phát sinh tại nhà máy đóng tàu.',
    longDescription:
      'Hỗ trợ kỹ thuật trực tiếp tại xưởng và triền đà, điều chỉnh hồ sơ thiết kế cho phù hợp với công nghệ đóng tàu của nhà máy mà vẫn tuân thủ bản vẽ đã được thẩm định.',
    icon: 'file',
  },
  {
    name: 'Hoán cải công năng phương tiện',
    description:
      'Thiết kế lại phương tiện thủy thành tàu du lịch, nhà hàng nổi, tàu công vụ hoặc tàu chuyên dùng.',
    longDescription:
      'Xây dựng phương án hoán cải kiến trúc thượng tầng và không gian hành khách, kiểm tra lại sức bền cục bộ, tính lại ổn định nguyên vẹn và ổn định tai nạn.',
    icon: 'cog',
  },
  {
    name: 'Nâng cấp và thay thế hệ động lực',
    description:
      'Lập phương án thay động cơ diesel thủy, nâng cấp hệ thống phụ trợ buồng máy và đường ống.',
    longDescription:
      'Lập bản vẽ bố trí buồng máy mới, thiết kế hệ thống làm mát, thông gió, khí xả và nhiên liệu, đồng thời kiểm tra tính tương thích của hộp số và chân vịt với công suất máy mới.',
    icon: 'cog',
  },
  {
    name: 'Lập thông báo ổn định',
    description:
      'Tính toán thủy tĩnh, dựng đồ thị ổn định tĩnh và động, lập hồ sơ ổn định tai nạn theo quy phạm.',
    longDescription:
      'Dùng phần mềm chuyên dụng như Maxsurf hoặc NAPA để mô hình hóa thân tàu và tính ổn định cho các trạng thái khai thác gồm không tải, đầy tải, tiêu thụ 50% dự trữ, rời bến và cập bến, theo tiêu chí của VR và IMO.',
    icon: 'file',
  },
];
export const steps = [
  'Tiếp nhận bài toán khai thác và khảo sát phương tiện.',
  'Phân tích thủy động lực học và đề xuất thông số chính.',
  'Thiết kế tuyến hình, bố trí chung và kết cấu.',
  'Tính toán thủy tĩnh, ổn định và sức bền theo quy phạm.',
  'Nộp và bảo vệ hồ sơ trước Cục Đăng kiểm Việt Nam.',
  'Bàn giao hồ sơ kỹ thuật và hỗ trợ giám sát thi công.',
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
