export const kiemTraDuongKinhTrucChanVit = {
  meta: {
    title: 'Kiểm tra đường kính trục chân vịt | Lasan Marine',
    description:
      'Tính số vòng quay chân vịt và đường kính tối thiểu của trục chân vịt theo quy phạm đăng kiểm VR.',
  },
  hero: {
    title: 'Kiểm tra đường kính trục chân vịt',
  },
  calculator: {
    powerLabel: 'Công suất động cơ (P)',
    unitLabel: 'Đơn vị công suất',
    units: ['kW', 'HP', 'CV', 'PS'],
    rpmLabel: 'Số vòng quay máy chính (rpm)',
    ratioLabel: 'Tỷ số truyền hộp số (i)',
    ratioPlaceholder: 'Ví dụ: 3.5',
    materialLabel: 'Vật liệu trục và hệ số K3',
    materials: [
      { value: '119.7', label: 'Thép các bon và thép các bon mangan', k3: '119,7' },
      { value: '98.8', label: 'Thép không gỉ 316', k3: '98,8' },
      { value: '89.3', label: 'Thép không gỉ 431', k3: '89,3' },
      { value: '87.4', label: 'Đồng mangan', k3: '87,4' },
      { value: '80.7', label: 'Đồng nhôm niken', k3: '80,7' },
      { value: '80.7', label: 'Hợp kim đồng niken K400', k3: '80,7' },
      { value: '67.5', label: 'Hợp kim đồng niken K500', k3: '67,5' },
    ],
    submitLabel: 'Tính toán',
    resetLabel: 'Nhập lại',
    resultHeaders: ['Thông số', 'Kết quả', 'Đơn vị'],
    resultRows: [
      { label: 'Số vòng quay chân vịt (n)', unit: 'rpm', key: 'propeller-rpm' },
      { label: 'Đường kính tối thiểu của trục chân vịt (d)', unit: 'mm', key: 'diameter' },
    ],
    note: 'Kết quả chỉ dùng để đối chiếu sơ bộ; thiết kế chính thức phải tuân thủ đầy đủ quy phạm đăng kiểm VR.',
    formula: {
      title: 'Cách tính',
      steps: [
        {
          tex: 'n = \\dfrac{n_e}{i}',
          text: 'Số vòng quay chân vịt bằng vòng quay máy chính chia cho tỷ số truyền hộp số.',
        },
        {
          tex: 'd = K_3 \\sqrt[3]{\\dfrac{P}{n}}',
          text: 'Đường kính trục tỷ lệ với căn bậc ba của công suất trên mỗi vòng quay: công suất tăng gấp tám lần thì đường kính mới tăng gấp đôi.',
        },
      ],
      termsTitle: 'Ký hiệu',
      terms: [
        { tex: 'd', text: 'Đường kính tối thiểu của trục chân vịt (mm).' },
        { tex: 'K_3', text: 'Hệ số vật liệu chế tạo trục, tra theo quy phạm đăng kiểm.' },
        { tex: 'P', text: 'Công suất liên tục lớn nhất của máy chính (kW).' },
        { tex: 'n', text: 'Số vòng quay của chân vịt (rpm).' },
        { tex: 'n_e', text: 'Số vòng quay của máy chính (rpm).' },
        { tex: 'i', text: 'Tỷ số truyền của hộp số.' },
      ],
    },
  },
};
