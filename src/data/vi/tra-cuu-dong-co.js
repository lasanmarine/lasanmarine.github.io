export const traCuuDongCo = {
  meta: {
    title: 'Tra cứu thông số động cơ | Lasan Marine',
    description: 'Tra cứu nhanh hãng, hiệu máy, công suất (PS, HP, kW) và số vòng quay của các dòng động cơ thủy.',
  },
  hero: {
    title: 'Tra cứu thông số động cơ',
    description: 'Tìm nhanh hãng, hiệu máy, công suất và số vòng quay của các dòng động cơ thủy thường dùng.',
  },
  tool: {
    navAriaLabel: 'Danh sách công cụ',
    links: [
      { href: '/cong-cu/chuyen-doi-cong-suat/', label: 'Chuyển đổi công suất' },
      { href: '/cong-cu/kiem-tra-duong-kinh-truc-chan-vit/', label: 'Kiểm tra đường kính trục chân vịt' },
      { href: '/cong-cu/tra-cuu-dong-co/', label: 'Tra cứu thông số động cơ', current: true },
    ],
  },
  lookup: {
    fields: [
      { key: 'hang', label: 'Hãng', placeholder: 'Vd: Weichai' },
      { key: 'hieu_may', label: 'Hiệu máy', placeholder: 'Vd: X6170ZC350-1' },
      { key: 'ps', label: 'Công suất (PS, CV)', placeholder: 'Vd: 350' },
      { key: 'hp', label: 'Công suất (HP)', placeholder: 'Vd: 345' },
      { key: 'kw', label: 'Công suất (kW)', placeholder: 'Vd: 257' },
      { key: 'rpm', label: 'Số vòng quay (RPM)', placeholder: 'Vd: 1000' },
    ],
    headers: ['Hãng', 'Hiệu máy', 'Công suất (PS, CV)', 'Công suất (HP)', 'Công suất (kW)', 'Số vòng quay (RPM)'],
    emptyMessage: 'Không tìm thấy kết quả phù hợp.',
    resultCountLabel: 'kết quả',
    paginationLabel: 'Điều hướng phân trang',
    prevLabel: 'Trang trước',
    nextLabel: 'Trang sau',
    note: 'Dữ liệu chỉ mang tính tham khảo, vui lòng đối chiếu với thông số kỹ thuật chính thức của nhà sản xuất.',
  },
};
