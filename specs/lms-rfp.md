# RFP - LMS học tiếng Anh

## Mục đích

Tài liệu này mô tả nhu cầu sản phẩm ở mức yêu cầu kinh doanh để xây dựng một hệ thống LMS học tiếng Anh đơn giản, đủ để demo và mở rộng dần.

## Bối cảnh

Nhóm cần một sản phẩm LMS tối thiểu cho học viên học tiếng Anh theo các khóa học nhỏ, có thể đăng nhập, xem khóa học, đăng ký học và theo dõi các khóa đã tham gia.

Sản phẩm phải:

- Dễ demo trong thời gian ngắn
- Dễ triển khai bằng một codebase duy nhất
- Dùng dữ liệu mẫu, không phụ thuộc hạ tầng phức tạp

## Mục tiêu kinh doanh

- Cho phép học viên vào hệ thống nhanh chóng bằng tài khoản demo
- Cho phép học viên khám phá các khóa học tiếng Anh có sẵn
- Cho phép học viên đăng ký khóa học chỉ với vài thao tác
- Cho phép học viên xem lại các khóa đã đăng ký
- Tạo nền tảng để sau này thêm bài học, tiến độ và kiểm tra đơn giản

## Đối tượng sử dụng

### Học viên

Người học tiếng Anh là đối tượng chính. Họ cần:

- Đăng nhập bằng tài khoản demo
- Xem danh sách khóa học
- Đăng ký khóa học
- Xem các khóa đã đăng ký

## Phạm vi đề xuất

### MVP

MVP chỉ nên có 4 màn hình chính:

1. Màn hình đăng nhập
2. Màn hình danh sách khóa học
3. Màn hình chi tiết khóa học
4. Màn hình khóa học của tôi

Tính năng MVP cần đủ để chứng minh luồng học cơ bản:

- Đăng nhập bằng tài khoản demo
- Xem khóa học tiếng Anh
- Đăng ký khóa học
- Xem danh sách khóa đã đăng ký

### Standard

Phiên bản standard mở rộng nhẹ, nhưng vẫn giữ tối đa 5 màn hình:

5. Màn hình bài học đơn giản hoặc tiến độ học

Phần standard chỉ nên bổ sung các khả năng sau:

- Xem nội dung bài học trong khóa học
- Đánh dấu hoàn thành bài học
- Hiển thị tiến độ học cơ bản

## Không nằm trong phạm vi

- Đăng ký tài khoản mới
- Quên mật khẩu
- Thanh toán học phí
- Quản trị nội dung khóa học
- Tạo, sửa, xóa khóa học
- Phân quyền admin phức tạp
- Chat trực tuyến
- Chứng chỉ hoàn thành
- Đồng bộ với hệ thống bên thứ ba

## Tiêu chí thành công

- Người dùng vào được hệ thống bằng tài khoản demo
- Người dùng nhìn thấy ít nhất một danh sách khóa học tiếng Anh
- Người dùng đăng ký khóa học thành công
- Người dùng xem được danh sách khóa đã đăng ký
- Bản demo chạy ổn định trong một buổi trình bày ngắn

## Ràng buộc

- Dùng một ứng dụng đơn
- Ưu tiên dữ liệu seed/demo
- Không yêu cầu cơ sở dữ liệu cho MVP
- Không mở rộng sang nhiều vai trò người dùng ngay từ đầu

## Giả định

- Dữ liệu khóa học tiếng Anh đủ để demo, không cần đầy đủ như sản phẩm thật
- Các trạng thái đăng ký có thể được lưu tạm trong bộ nhớ ứng dụng
- Trải nghiệm cần rõ ràng hơn là nhiều tính năng

