export const kiemTraDuongKinhTrucChanVit = {
  meta: {
    title: 'Kiểm tra Đường kính Trục Chân vịt | Lasan Marine',
    description: 'Tính nhanh số vòng quay chân vịt và kiểm tra đường kính tối thiểu của trục chân vịt tàu thủy theo Quy phạm Đăng kiểm (VR).',
  },
  hero: {
    title: 'Kiểm tra Đường kính Trục Chân vịt Tàu thủy',
    description:
      'Tính nhanh tốc độ quay chân vịt và đường kính tối thiểu của trục chân vịt theo công suất máy, tỷ số truyền hộp số và hệ số vật liệu K3 (Quy phạm VR).',
  },
  tool: {
    navAriaLabel: 'Danh sách công cụ kỹ thuật',
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
    powerLabel: 'Công suất động cơ (P)',
    unitLabel: 'Đơn vị công suất',
    unitPlaceholder: 'Chọn đơn vị',
    units: ['kW', 'HP', 'CV', 'PS'],
    rpmLabel: 'Số vòng quay máy chính (RPM)',
    ratioLabel: 'Tỉ số truyền hộp số (i)',
    ratioPlaceholder: 'Ví dụ: 3.5',
    materialLabel: 'Vật liệu chế tạo trục & Hệ số K3',
    materialPlaceholder: 'Chọn vật liệu trục',
    materials: [
      { value: '119.7', label: 'Thép các bon và thép các bon mangan, K3 = 119,7' },
      { value: '98.8', label: 'Thép không gỉ 316, K3 = 98,8' },
      { value: '89.3', label: 'Thép không gỉ 431, K3 = 89,3' },
      { value: '87.4', label: 'Đồng mangan, K3 = 87,4' },
      { value: '80.7', label: 'Đồng nhôm nickel, K3 = 80,7' },
      { value: '80.7', label: 'Hợp kim đồng nickel K400, K3 = 80,7' },
      { value: '67.5', label: 'Hợp kim đồng nickel K500, K3 = 67,5' },
    ],
    submitLabel: 'Tính toán kết quả',
    resetLabel: 'Nhập lại',
    resultsTitle: 'Kết quả Kiểm tra Sơ bộ',
    resultHeaders: ['Thông số kỹ thuật', 'Kết quả', 'Đơn vị'],
    resultRows: [
      { label: 'Số vòng quay chân vịt (n)', unit: 'rpm', key: 'propeller-rpm' },
      { label: 'Đường kính tối thiểu trục chân vịt (d)', unit: 'mm', key: 'diameter' },
    ],
    note: 'Công thức tính sơ bộ đường kính tối thiểu d = K3 × (P/n)^(1/3) (mm), trong đó P là công suất liên tục (kW), n là số vòng quay chân vịt (rpm). Kết quả dùng để đối chiếu sơ bộ, thiết kế chính thức cần tuân thủ đầy đủ Quy phạm Đăng kiểm VR.',
  },
};
