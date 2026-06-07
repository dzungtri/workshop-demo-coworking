# SPEC - LMS học tiếng Anh

## Mục tiêu

Đặc tả này mô tả yêu cầu chức năng chi tiết cho LMS học tiếng Anh ở mức MVP và phần mở rộng standard.

## Nguyên tắc phạm vi

- Giữ sản phẩm nhỏ, dễ hiểu, dễ demo
- Chỉ ưu tiên các luồng học viên thật sự cần dùng
- Không đưa thêm màn hình nếu không làm rõ hành trình học chính

## Vai trò

### Học viên

Vai trò duy nhất trong phạm vi tài liệu này.

Học viên có thể:

- Đăng nhập
- Xem khóa học
- Xem chi tiết khóa học
- Đăng ký khóa học
- Xem khóa học đã đăng ký
- Ở bản standard: xem bài học và tiến độ đơn giản

## Danh sách màn hình

### MVP - 4 màn hình

1. `Đăng nhập`
2. `Danh sách khóa học`
3. `Chi tiết khóa học`
4. `Khóa học của tôi`

### Standard - bổ sung 1 màn hình

5. `Bài học / Tiến độ học`

## Đặc tả MVP

### 1. Màn hình đăng nhập

Đường dẫn:

```txt
/login
```

Mục đích:

- Xác thực học viên bằng tài khoản demo

Trường dữ liệu:

- `user_id`
- `password`

Hành vi:

- Nếu thông tin hợp lệ, chuyển sang màn hình danh sách khóa học
- Nếu không hợp lệ, hiển thị thông báo lỗi rõ ràng

Quy tắc:

- Chỉ dùng tài khoản demo
- Không cần đăng ký tài khoản mới

### 2. Màn hình danh sách khóa học

Đường dẫn:

```txt
/courses
```

Mục đích:

- Cho học viên xem các khóa tiếng Anh đang có

Thông tin hiển thị cho mỗi khóa:

- Mã khóa học
- Tên khóa học
- Mô tả ngắn
- Trạng thái đăng ký

Hành vi:

- Nếu chưa đăng ký, hiển thị nút `Đăng ký`
- Nếu đã đăng ký, hiển thị trạng thái `Đã đăng ký`
- Từ màn hình này, học viên có thể mở chi tiết khóa học

### 3. Màn hình chi tiết khóa học

Đường dẫn:

```txt
/courses/:id
```

Mục đích:

- Giúp học viên hiểu rõ nội dung và mục tiêu của khóa học trước khi đăng ký

Thông tin hiển thị:

- Mã khóa học
- Tên khóa học
- Mô tả
- Cấp độ tiếng Anh
- Mục tiêu học tập
- Thời lượng ước tính

Hành vi:

- Nếu chưa đăng ký, cho phép đăng ký
- Nếu đã đăng ký, hiển thị trạng thái đã tham gia

### 4. Màn hình khóa học của tôi

Đường dẫn:

```txt
/my-courses
```

Mục đích:

- Cho học viên xem danh sách các khóa đã đăng ký

Thông tin hiển thị cho mỗi khóa:

- Tên khóa học
- Mô tả ngắn
- Trạng thái học hiện tại nếu có

Nếu không có khóa nào:

- Hiển thị thông báo: `Bạn chưa đăng ký khóa học nào.`

## Đặc tả standard

### 5. Màn hình bài học / tiến độ học

Đường dẫn gợi ý:

```txt
/courses/:id/lessons
```

Mục đích:

- Cho học viên vào học nội dung đơn giản của từng bài
- Hiển thị tiến độ cơ bản

Thông tin hiển thị:

- Danh sách bài học trong khóa
- Nội dung bài học ngắn
- Trạng thái đã hoàn thành / chưa hoàn thành
- Tiến độ tổng quan của khóa

Hành vi:

- Học viên có thể mở một bài học
- Học viên có thể đánh dấu hoàn thành
- Tiến độ cập nhật theo trạng thái bài học

## Quy tắc nghiệp vụ

- Một học viên không được đăng ký cùng một khóa hai lần
- Học viên chỉ xem được danh sách khóa học của chính mình trong màn hình `Khóa học của tôi`
- Luồng standard không được làm phức tạp luồng MVP
- Dữ liệu demo có thể đặt sẵn và không cần lưu bền vững qua nhiều lần khởi động

## Mô hình dữ liệu

### User

```txt
id: string
password: string
name: string
```

### Course

```txt
id: string
title: string
description: string
level: string
goal: string
estimated_duration: string
```

### Enrollment

```txt
id: string
user_id: string
course_id: string
created_at: datetime
status: string
```

### Lesson

```txt
id: string
course_id: string
title: string
content: string
order: number
completed: boolean
```

## Dữ liệu mẫu

### Người dùng

```txt
student1 / password123
student2 / password123
```

### Khóa học

```txt
ENG-001: English Starter
ENG-002: Daily Conversation
ENG-003: Workplace English
```

### Bài học mẫu cho standard

- Chào hỏi và giới thiệu bản thân
- Từ vựng giao tiếp hằng ngày
- Mẫu câu trong môi trường làm việc

## Luồng chức năng

### Luồng đăng nhập

1. Học viên nhập `user_id` và `password`
2. Hệ thống kiểm tra thông tin
3. Nếu đúng, lưu trạng thái đăng nhập
4. Chuyển sang danh sách khóa học

### Luồng đăng ký khóa học

1. Học viên mở danh sách khóa học hoặc chi tiết khóa học
2. Học viên chọn `Đăng ký`
3. Hệ thống tạo bản ghi đăng ký
4. Màn hình cập nhật sang trạng thái `Đã đăng ký`

### Luồng xem khóa học của tôi

1. Học viên vào màn hình `Khóa học của tôi`
2. Hệ thống lấy các khóa đã đăng ký của người dùng hiện tại
3. Nếu có dữ liệu, hiển thị danh sách
4. Nếu không có dữ liệu, hiển thị trạng thái rỗng

## API đề xuất

### Đăng nhập

```txt
POST /api/login
```

Request:

```json
{
  "user_id": "student1",
  "password": "password123"
}
```

Response thành công:

```json
{
  "token": "demo-token-student1",
  "user": {
    "id": "student1",
    "name": "Student One"
  }
}
```

Response thất bại:

```json
{
  "error": "Invalid credentials"
}
```

### Danh sách khóa học

```txt
GET /api/courses
```

Response:

```json
[
  {
    "id": "ENG-001",
    "title": "English Starter",
    "description": "Nền tảng tiếng Anh cho người mới bắt đầu.",
    "level": "Beginner",
    "goal": "Làm quen với chào hỏi và từ vựng cơ bản.",
    "estimated_duration": "2 tuần",
    "enrolled": false
  }
]
```

### Đăng ký khóa học

```txt
POST /api/enrollments
```

Request:

```json
{
  "course_id": "ENG-001"
}
```

Response:

```json
{
  "success": true
}
```

Quy tắc:

- Người dùng phải đăng nhập
- Không được đăng ký trùng khóa

### Khóa học của tôi

```txt
GET /api/my-courses
```

Response:

```json
[
  {
    "id": "ENG-001",
    "title": "English Starter",
    "description": "Nền tảng tiếng Anh cho người mới bắt đầu."
  }
]
```

### Bài học / tiến độ học

```txt
GET /api/courses/:id/lessons
GET /api/courses/:id/progress
POST /api/lessons/:id/complete
```

Mục tiêu của các API này là hỗ trợ phần standard mà không làm phức tạp MVP.

## Tiêu chí nghiệm thu

### MVP

- Học viên đăng nhập thành công bằng dữ liệu demo
- Học viên xem được danh sách khóa học
- Học viên đăng ký được một khóa
- Học viên xem được danh sách khóa đã đăng ký

### Standard

- Học viên mở được danh sách bài học của một khóa
- Học viên đánh dấu hoàn thành bài học
- Tiến độ khóa học thay đổi theo trạng thái bài học
