# Sprint 01 - LMS MVP

## Mục tiêu sprint

Hoàn thiện luồng MVP cơ bản cho LMS học tiếng Anh:

- Đăng nhập
- Xem danh sách khóa học
- Đăng ký khóa học
- Xem khóa học của tôi

## Phạm vi chọn vào sprint

| Task ID | Tên task | Mục tiêu | Trạng thái |
| --- | --- | --- | --- |
| LMS-001 | Login | Cho phép học viên đăng nhập bằng tài khoản demo | Todo |
| LMS-002 | Course List + Enroll | Hiển thị khóa học và cho phép đăng ký | Todo |
| LMS-003 | My Courses | Hiển thị khóa học đã đăng ký | Todo |

## Không nằm trong sprint này

| Hạng mục | Lý do |
| --- | --- |
| Bài học / tiến độ học | Thuộc phần standard, chưa cần cho MVP đầu tiên |
| Quản trị nội dung | Không nằm trong phạm vi hiện tại |
| Database thật | Chưa cần cho demo |

## Rủi ro

- Dễ nở phạm vi nếu thêm quá nhiều màn hình
- Cần giữ dữ liệu mock nhất quán giữa task 001, 002, 003
- Nếu thay đổi contract, phải cập nhật spec trước rồi mới sửa code

## Ghi chú thực thi

- Mỗi task nên đi trên một `feature/*` branch riêng
- Mỗi task chỉ merge khi đạt DoD
- Sprint này ưu tiên hoàn thành MVP có thể demo được trước
