export const kiemTraDuongKinhTrucChanVit = {
  meta: {
    title: 'Kiểm tra đường kính trục chân vịt | Lasan Marine',
    description: 'Tính nhanh số vòng quay chân vịt và đường kính tối thiểu của trục chân vịt.',
  },
  hero: {
    title: 'Kiểm tra đường kính trục chân vịt',
    description:
      'Ước tính nhanh số vòng quay chân vịt và đường kính trục tối thiểu theo công suất, tỉ số truyền và vật liệu.',
  },
  tool: {
    navTitle: 'Công cụ kỹ thuật',
    navIntro: undefined,
    navAriaLabel: 'Danh sách công cụ',
    links: [
      { href: '/cong-cu/chuyen-doi-cong-suat/', label: 'Chuyển đổi công suất' },
      {
        href: '/cong-cu/kiem-tra-duong-kinh-truc-chan-vit/',
        label: 'Kiểm tra đường kính trục chân vịt',
        current: true,
      },
      { href: '/cong-cu/tra-cuu-dong-co/', label: 'Tra cứu thông số động cơ' },
    ],
  },
  calculator: {
    powerLabel: 'Công suất máy',
    unitLabel: 'Đơn vị công suất',
    unitPlaceholder: 'Chọn đơn vị',
    units: ['kW', 'HP', 'CV', 'PS'],
    rpmLabel: 'Số vòng quay máy (rpm)',
    ratioLabel: 'Tỉ số truyền',
    ratioPlaceholder: 'Ví dụ: 2.5',
    materialLabel: 'Vật liệu và hệ số K3',
    materialPlaceholder: 'Chọn vật liệu',
    materials: [
      { value: '119.7', label: 'Thép các bon và thép các bon mangan, K3 = 119,7' },
      { value: '98.8', label: 'Thép không gỉ 316, K3 = 98,8' },
      { value: '89.3', label: 'Thép không gỉ 431, K3 = 89,3' },
      { value: '87.4', label: 'Đồng mangan, K3 = 87,4' },
      { value: '80.7', label: 'Đồng nhôm nickel, K3 = 80,7' },
      { value: '80.7', label: 'Hợp kim đồng nickel K400, K3 = 80,7' },
      { value: '67.5', label: 'Hợp kim đồng nickel K500, K3 = 67,5' },
    ],
    submitLabel: 'Tính kết quả',
    resetLabel: 'Nhập lại',
    resultsTitle: 'Kết quả kiểm tra',
    resultHeaders: ['Thông số', 'Kết quả', 'Đơn vị'],
    resultRows: [
      { label: 'Số vòng quay chân vịt', unit: 'rpm', key: 'propeller-rpm' },
      { label: 'Đường kính tối thiểu trục chân vịt', unit: 'mm', key: 'diameter' },
    ],
    note: 'Công thức kiểm tra sơ bộ: d = K3 × (P/n)^(1/3), với P tính bằng kW và n là số vòng quay chân vịt. Kết quả không thay thế tính toán thiết kế và yêu cầu của quy phạm áp dụng.',
  },
};
