export const chuyenDoiCongSuat = {
  meta: {
    title: 'Chuyển đổi Công suất Động cơ Thủy | Lasan Marine',
    description: 'Công cụ quy đổi công suất động cơ thủy nhanh giữa các đơn vị kW, HP (Mã lực Anh), CV/PS (Mã lực Pháp/Đức) phục vụ tính toán kỹ thuật.',
  },
  hero: {
    title: 'Chuyển đổi Công suất Động cơ Thủy',
    description: 'Quy đổi chính xác công suất máy chính giữa kW, HP, CV và PS phục vụ tra cứu thông số kỹ thuật và tính chọn hệ động lực.',
  },
  tool: {
    navAriaLabel: 'Danh sách công cụ kỹ thuật',
    links: [
      { href: '/cong-cu/chuyen-doi-cong-suat/', label: 'Chuyển đổi công suất', current: true },
      {
        href: '/cong-cu/kiem-tra-duong-kinh-truc-chan-vit/',
        label: 'Kiểm tra đường kính trục chân vịt',
      },
      { href: '/cong-cu/tra-cuu-dong-co/', label: 'Tra cứu thông số động cơ' },
    ],
  },
  calculator: {
    valueLabel: 'Giá trị công suất',
    valuePlaceholder: 'Ví dụ: 500',
    unitLabel: 'Đơn vị ban đầu',
    unitPlaceholder: 'Chọn đơn vị',
    units: ['kW', 'HP', 'CV', 'PS'],
    submitLabel: 'Quy đổi kết quả',
    resetLabel: 'Nhập lại',
    resultsTitle: 'Kết quả Quy đổi Công suất',
    resultHeaders: ['Kết quả', 'Làm tròn', 'Đơn vị'],
    resultUnits: ['HP (Anh)', 'CV (Pháp)', 'kW (ISO)', 'PS (Đức)'],
    note: 'Quy ước chuẩn Kỹ thuật Tàu thủy: 1 HP (Imperial) = 0.7457 kW; 1 CV = 1 PS (Metric) = 0.7355 kW. Kết quả phục vụ tra cứu nhanh và kiểm tra sơ bộ.',
  },
};
