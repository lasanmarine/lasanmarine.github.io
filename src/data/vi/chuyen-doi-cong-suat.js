export const chuyenDoiCongSuat = {
  meta: {
    title: 'Chuyển đổi công suất động cơ thủy | Lasan Marine',
    description:
      'Công cụ quy đổi công suất động cơ thủy giữa các đơn vị kW, HP, CV và PS phục vụ tính toán kỹ thuật.',
  },
  hero: {
    title: 'Chuyển đổi công suất động cơ thủy',
  },
  calculator: {
    valueLabel: 'Giá trị công suất',
    valuePlaceholder: 'Ví dụ: 500',
    unitLabel: 'Đơn vị ban đầu',
    units: ['kW', 'HP', 'CV', 'PS'],
    submitLabel: 'Quy đổi',
    resetLabel: 'Nhập lại',
    resultHeaders: ['Kết quả', 'Làm tròn', 'Đơn vị'],
    resultUnits: [
      { key: 'HP', label: 'HP (Anh)' },
      { key: 'CV', label: 'CV (Pháp)' },
      { key: 'kW', label: 'kW (ISO)' },
      { key: 'PS', label: 'PS (Đức)' },
    ],
    note: 'Kết quả dùng để tra cứu nhanh và kiểm tra sơ bộ.',
    formula: {
      title: 'Cách tính',
      steps: [
        {
          tex: 'P_{\\mathrm{kW}} = P_{\\mathrm{in}} \\times k_{\\mathrm{in}}',
          text: 'Đưa giá trị vừa nhập về kilôwatt bằng hệ số của đơn vị gốc.',
        },
        {
          tex: 'P_{\\mathrm{out}} = \\dfrac{P_{\\mathrm{kW}}}{k_{\\mathrm{out}}}',
          text: 'Chia công suất kilôwatt cho hệ số của đơn vị cần quy đổi.',
        },
      ],
      termsTitle: 'Hệ số quy đổi',
      terms: [
        { tex: 'k_{\\mathrm{kW}} = 1', text: 'Kilôwatt, đơn vị công suất trong hệ SI.' },
        {
          tex: 'k_{\\mathrm{HP}} = 0{,}7457',
          text: 'Mã lực Anh (imperial horsepower), thường ghi trên máy của Anh và Mỹ.',
        },
        {
          tex: 'k_{\\mathrm{CV}} = k_{\\mathrm{PS}} = 0{,}7355',
          text: 'Mã lực hệ mét: CV của Pháp và PS của Đức có cùng giá trị.',
        },
      ],
    },
  },
};
