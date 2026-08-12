export const traCuuDongCo = {
  meta: {
    title: 'Tra cứu Thông số Động cơ Thủy | Lasan Marine',
    description: 'Thư viện tra cứu thông số kỹ thuật động cơ thủy: Hãng sản xuất, hiệu máy, công suất (PS, HP, kW) và vòng quay (RPM).',
  },
  hero: {
    title: 'Tra cứu Thông số Kỹ thuật Động cơ Thủy',
    description: 'Tra cứu nhanh hãng sản xuất, mã hiệu động cơ, công suất và số vòng quay của các dòng máy thủy phổ biến (Weichai, Cummins, Caterpillar, Yanmar, Hanshin...) phục vụ tính toán hệ động lực.',
  },
  tool: {
    navAriaLabel: 'Danh sách công cụ kỹ thuật',
    links: [
      { href: '/cong-cu/chuyen-doi-cong-suat/', label: 'Chuyển đổi công suất' },
      { href: '/cong-cu/kiem-tra-duong-kinh-truc-chan-vit/', label: 'Kiểm tra đường kính trục chân vịt' },
      { href: '/cong-cu/tra-cuu-dong-co/', label: 'Tra cứu thông số động cơ', current: true },
    ],
  },
  lookup: {
    fields: [
      { key: 'hang', label: 'Hãng sản xuất', placeholder: 'Vd: Weichai, Cummins' },
      { key: 'hieu_may', label: 'Mã hiệu động cơ', placeholder: 'Vd: X6170ZC350-1' },
      { key: 'ps', label: 'Công suất (PS, CV)', placeholder: 'Vd: 350' },
      { key: 'hp', label: 'Công suất (HP)', placeholder: 'Vd: 345' },
      { key: 'kw', label: 'Công suất (kW)', placeholder: 'Vd: 257' },
      { key: 'rpm', label: 'Số vòng quay (RPM)', placeholder: 'Vd: 1000' },
    ],
    headers: ['Hãng', 'Mã hiệu máy', 'Công suất (PS, CV)', 'Công suất (HP)', 'Công suất (kW)', 'Số vòng quay (RPM)'],
    emptyMessage: 'Không tìm thấy dữ liệu động cơ phù hợp.',
    resultCountLabel: 'kết quả phù hợp',
    paginationLabel: 'Điều hướng phân trang',
    prevLabel: 'Trang trước',
    nextLabel: 'Trang sau',
    note: 'Thông số tra cứu dùng cho mục đích kiểm tra sơ bộ. Thiết kế chi tiết buồng máy và bệ máy cần đối chiếu catalogue kỹ thuật chính thức từ nhà sản xuất.',
  },
};
