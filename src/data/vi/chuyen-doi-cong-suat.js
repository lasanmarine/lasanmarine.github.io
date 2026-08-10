export const chuyenDoiCongSuat = {
  meta: {
    title: 'Chuyển đổi công suất | Lasan Marine',
    description: 'Chuyển đổi nhanh giữa các đơn vị công suất kW, HP, CV và PS.',
  },
  hero: {
    title: 'Chuyển đổi công suất',
    description: 'Quy đổi công suất máy giữa kW, HP, CV và PS phục vụ tra cứu kỹ thuật.',
  },
  tool: {
    navTitle: 'Công cụ kỹ thuật',
    navIntro: undefined,
    navAriaLabel: 'Danh sách công cụ',
    links: [
      { href: '/cong-cu/chuyen-doi-cong-suat/', label: 'Chuyển đổi công suất', current: true },
      {
        href: '/cong-cu/kiem-tra-duong-kinh-truc-chan-vit/',
        label: 'Kiểm tra đường kính trục chân vịt',
      },
    ],
  },
  calculator: {
    valueLabel: 'Giá trị công suất',
    valuePlaceholder: 'Ví dụ: 500',
    unitLabel: 'Đơn vị ban đầu',
    unitPlaceholder: 'Chọn đơn vị',
    units: ['kW', 'HP', 'CV', 'PS'],
    submitLabel: 'Chuyển đổi',
    resetLabel: 'Nhập lại',
    resultsTitle: 'Kết quả quy đổi',
    resultHeaders: ['Kết quả', 'Làm tròn', 'Đơn vị'],
    resultUnits: ['HP', 'CV', 'kW', 'PS'],
    note: 'Quy ước: 1 HP = 0,7457 kW; 1 CV = 1 PS = 0,735499 kW. Kết quả phục vụ tra cứu nhanh, không thay thế hồ sơ tính toán được thẩm tra.',
  },
};
