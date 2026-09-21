# La San Marine — GitHub Pages

Website hiện được xuất từ WordPress bằng Simply Static vào `docs/`.
GitHub Pages dùng nhánh `main`, thư mục `/docs`, domain `lasanmarine.com`.

## Xuất lại từ WordPress

Trong Simply Static → Settings:

- Delivery method: Local Directory
- Local directory trong container: `/var/www/html/output/lasanmarine.github.io/docs/`
- Destination URL: `https://lasanmarine.com` (Absolute)

Chọn Generate Static Files và chờ export hoàn tất. Kiểm tra `docs/index.html`,
`docs/CNAME` (lasanmarine.com), `docs/.nojekyll`, rồi commit/push thay đổi trong
`docs/` lên nhánh `main` để GitHub Pages deploy.

Đường dẫn tương ứng trên host:
`/var/www/dev.lasanmarine.com/output/lasanmarine.github.io/docs/`.

## Build và ghép ứng dụng mô phỏng

Repo nguồn nằm cạnh repo website: `../mo-phong-on-dinh-tau`.

```sh
cd ../mo-phong-on-dinh-tau
npm ci
npm run build -- --base=/cong-cu/mo-phong-on-dinh-tau/
cd ../lasanmarine.github.io
# Chạy trên host đang có container WordPress:
docker exec lasan_wp php /var/www/html/output/lasanmarine.github.io/scripts/finalize-wordpress.php
```

Bước finalize sửa các link tương đối cũ, bỏ link RSS/RSD chưa xuất,
loại trang demo khỏi sitemap, chép ứng dụng vào `docs/cong-cu/mo-phong-on-dinh-tau/`,
và tạo redirect từ URL mô phỏng cũ. Luôn chạy bước này sau mỗi lần export.
Source mô phỏng dùng cho bản build đầu: `dbc726f`.
Simply Static đã được cấu hình bỏ qua `.zip` để không xuất bộ cài plugin.

Các trang mẫu `/all-blocks/` và `/all-blocks-2/` bị loại khỏi bản xuất.
GitHub Pages không chạy PHP; gửi Contact Form 7 cần dịch vụ/backend riêng.
Các công cụ tính toán JavaScript vẫn chạy trong trình duyệt.

## Mã Astro trước đây

`src/`, `public/` và cấu hình Astro được giữ để tham khảo. Không chạy
`npm run build` khi cập nhật bản WordPress vì lệnh đó ghi đè `docs/` bằng Astro.
