export const lienHe = {
  meta: {
    title: 'Liên hệ Tư vấn Kỹ thuật | Lasan Marine',
    description: 'Liên hệ ngay với Kỹ sư Tàu thủy Lasan Marine để nhận tư vấn phương án kỹ thuật và báo giá trong 24 giờ.',
  },
  hero: {
    title: 'Liên hệ Tư vấn Kỹ thuật Tàu thủy',
  },
  contactsTitle: 'Thông tin Liên hệ',
  contacts: [
    ['Công ty', 'CÔNG TY TNHH LASAN MARINE'],
    ['Địa chỉ', 'Số 03 Trần Lư, Phường Bắc Nha Trang, Tỉnh Khánh Hòa, Việt Nam'],
    ['Hotline / Zalo', '0834 310 781'],
    ['Email', 'contact@lasanmarine.vn'],
  ],
  form: {
    name: { label: 'Họ và tên *', placeholder: 'Nguyễn Văn A' },
    company: { label: 'Tên Đơn vị / Cơ sở đóng tàu', placeholder: 'Tên doanh nghiệp / chủ tàu' },
    phone: { label: 'Số điện thoại *', placeholder: '09xx xxx xxx' },
    email: { label: 'Email', placeholder: 'ten@congty.vn' },
    service: { label: 'Dịch vụ quan tâm' },
    vessel: {
      label: 'Loại phương tiện',
      options: [
        'Tàu đánh cá (Vỏ thép / Composite / Gỗ)',
        'Phương tiện thủy nội địa (VR-SI, VR-SB)',
        'Tàu vận tải đường thủy & Biển xa',
        'Tàu khách & Du thuyền',
        'Phương tiện công vụ & Khác',
      ],
    },
    message: {
      label: 'Yêu cầu kỹ thuật',
      placeholder: 'Loại tàu, kích thước dự kiến (L x B x D), mớn nước (d), công suất máy hoặc yêu cầu hoán cải / đăng kiểm...',
    },
    attachment: {
      label: 'Tài liệu / Bản vẽ đính kèm (nếu có)',
      hint: 'Hỗ trợ tệp PDF, DWG, DXF, ZIP, RAR (Tối đa 25MB)',
    },
    submitLabel: 'Gửi yêu cầu tư vấn',
  },
  success: {
    title: 'Gửi yêu cầu thành công!',
    text: 'Kỹ sư Lasan Marine sẽ phân tích thông tin và liên hệ tư vấn trong thời gian sớm nhất.',
  },
};
