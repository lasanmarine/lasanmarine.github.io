export const lienHe = {
  meta: {
    title: 'Liên hệ | Lasan Marine',
    description: 'Trao đổi yêu cầu kỹ thuật với Lasan Marine.',
  },
  hero: {
    title: 'Trao đổi với đội ngũ kỹ thuật Lasan Marine',
  },
  contactsTitle: 'Thông tin liên hệ',
  contacts: [
    ['Công ty', 'LASAN MARINE COMPANY LIMITED'],
    ['Địa chỉ', 'Số 03 Trần Lư, Phường Bắc Nha Trang, Tỉnh Khánh Hòa'],
    ['Hotline', '0834 310 781'],
    ['Email', 'contact@lasanmarine.vn'],
  ],
  form: {
    name: { label: 'Họ và tên *', placeholder: 'Nguyễn Văn A' },
    company: { label: 'Công ty', placeholder: 'Tên doanh nghiệp' },
    phone: { label: 'Điện thoại *', placeholder: '09xx xxx xxx' },
    email: { label: 'Email', placeholder: 'ten@congty.vn' },
    service: { label: 'Dịch vụ quan tâm' },
    vessel: {
      label: 'Loại phương tiện',
      options: ['Tàu đánh cá', 'Phương tiện thủy nội địa', 'Phương tiện vận tải đường thủy'],
    },
    message: {
      label: 'Nội dung',
      placeholder: 'Mô tả ngắn về phương tiện và yêu cầu kỹ thuật',
    },
    attachment: {
      label: 'Tài liệu đính kèm',
      hint: 'Chọn tệp bản vẽ, hồ sơ (PDF, DWG, ZIP)',
    },
    submitLabel: 'Gửi yêu cầu',
  },
  success: {
    title: 'Yêu cầu đã được ghi nhận',
    text: 'Đây là bản giao diện mẫu. Vui lòng kết nối form với email hoặc API trước khi triển khai chính thức.',
  },
};
