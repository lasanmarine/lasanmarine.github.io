export const lienHe = {
  meta: {
    title: 'Liên hệ tư vấn kỹ thuật | Lasan Marine',
    description:
      'Liên hệ với kỹ sư của Lasan Marine để nhận tư vấn phương án kỹ thuật và báo giá trong 24 giờ.',
  },
  hero: {
    title: 'Liên hệ tư vấn kỹ thuật',
  },
  contactsTitle: 'Thông tin liên hệ',
  contacts: [
    ['Công ty', 'CÔNG TY TNHH LASAN MARINE'],
    ['Địa chỉ', 'Số 03 Trần Lư, phường Bắc Nha Trang, tỉnh Khánh Hòa, Việt Nam'],
    ['Hotline / Zalo', '0834 310 781'],
    ['Email', 'contact@lasanmarine.vn'],
  ],
  form: {
    name: { label: 'Họ và tên *', placeholder: 'Nguyễn Văn A' },
    company: { label: 'Đơn vị / cơ sở đóng tàu', placeholder: 'Tên doanh nghiệp hoặc chủ tàu' },
    phone: { label: 'Số điện thoại *', placeholder: '09xx xxx xxx' },
    email: { label: 'Email', placeholder: 'ten@congty.vn' },
    service: { label: 'Dịch vụ quan tâm' },
    vessel: {
      label: 'Loại phương tiện',
      options: [
        'Tàu đánh cá (vỏ thép, composite hoặc gỗ)',
        'Phương tiện thủy nội địa (VR-SI, VR-SB)',
        'Tàu vận tải đường thủy và biển xa',
        'Tàu khách và du thuyền',
        'Phương tiện công vụ và loại khác',
      ],
    },
    message: {
      label: 'Yêu cầu kỹ thuật',
      placeholder:
        'Loại tàu, kích thước dự kiến (L × B × D), mớn nước, công suất máy hoặc yêu cầu hoán cải, đăng kiểm…',
    },
    submitLabel: 'Gửi yêu cầu tư vấn',
  },
  // Zalo has no parameter for pre-filling a message, so the form copies the
  // text to the clipboard and opens the chat for the visitor to paste.
  zalo: {
    url: 'https://zalo.me/0834310781',
    intro: 'Yêu cầu tư vấn gửi từ website Lasan Marine',
    labels: {
      name: 'Họ và tên',
      company: 'Đơn vị',
      phone: 'Số điện thoại',
      email: 'Email',
      service: 'Dịch vụ quan tâm',
      vessel: 'Loại phương tiện',
      message: 'Yêu cầu kỹ thuật',
    },
    previewLabel: 'Nội dung đã sao chép',
    copyLabel: 'Sao chép lại',
    copiedLabel: 'Đã sao chép',
    openLabel: 'Mở lại Zalo',
  },
  success: {
    title: 'Đã mở Zalo',
    text: 'Nội dung bên dưới đã được sao chép. Quý khách dán vào khung chat Zalo vừa mở rồi gửi. Nếu có bản vẽ, vui lòng đính kèm trực tiếp trong Zalo.',
  },
};
