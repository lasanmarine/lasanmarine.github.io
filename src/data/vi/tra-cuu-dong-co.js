export const traCuuDongCo = {
  meta: {
    title: 'Tra cứu thông số động cơ thủy | Lasan Marine',
    description:
      'Tra cứu thông số kỹ thuật động cơ thủy: hãng sản xuất, mã hiệu, công suất (PS, HP, kW) và số vòng quay.',
  },
  hero: {
    title: 'Tra cứu thông số động cơ thủy',
  },
  lookup: {
    fields: [
      { key: 'hang', label: 'Hãng sản xuất', placeholder: 'Ví dụ: Weichai, Cummins' },
      { key: 'hieu_may', label: 'Mã hiệu động cơ', placeholder: 'Ví dụ: X6170ZC350-1' },
      { key: 'ps', label: 'Công suất (PS, CV)', placeholder: 'Ví dụ: 350' },
      { key: 'hp', label: 'Công suất (HP)', placeholder: 'Ví dụ: 345' },
      { key: 'kw', label: 'Công suất (kW)', placeholder: 'Ví dụ: 257' },
      { key: 'rpm', label: 'Số vòng quay (rpm)', placeholder: 'Ví dụ: 1000' },
    ],
    headers: [
      'Hãng',
      'Mã hiệu máy',
      'Công suất (PS, CV)',
      'Công suất (HP)',
      'Công suất (kW)',
      'Số vòng quay (rpm)',
    ],
    emptyMessage: 'Không tìm thấy động cơ phù hợp.',
    resultCountLabel: 'kết quả phù hợp',
    paginationLabel: 'Điều hướng phân trang',
    prevLabel: 'Trang trước',
    nextLabel: 'Trang sau',
    sortLabel: 'Sắp xếp theo cột',
    note: [
      'Thông tin được tham khảo từ nhiều nguồn và được đóng góp từ cộng đồng mở, nên người dùng cần đối sánh lại trước khi sử dụng. Trường hợp cần bổ sung hoặc cập nhật thông tin máy, quý vị vui lòng gửi tài liệu liên quan đến chúng tôi.',
      'Trân trọng cảm ơn các đóng góp của cộng đồng nhằm phát triển kho tư liệu mở về động cơ thủy một cách có trách nhiệm và chính xác, phục vụ công tác chuyên môn.',
    ],
  },
};
