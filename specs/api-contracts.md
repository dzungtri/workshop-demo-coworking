# API Contracts

Tài liệu này mô tả các hợp đồng API công khai của ứng dụng.

## API hiện tại cho LMS

### Đăng nhập

```txt
POST /api/login
```

### Danh sách khóa học

```txt
GET /api/courses
```

### Đăng ký khóa học

```txt
POST /api/enrollments
```

### Khóa học của tôi

```txt
GET /api/my-courses
```

### Bài học / tiến độ học

```txt
GET /api/courses/:id/lessons
GET /api/courses/:id/progress
POST /api/lessons/:id/complete
```

## Quy tắc

- API phải phù hợp với các màn hình trong `features.md`
- Nếu thay đổi request/response, phải cập nhật spec trước khi sửa code

## Với LMS hiện tại

Chi tiết payload và ví dụ response đang nằm trong:

- [SPEC - LMS học tiếng Anh](./lms-spec.md)

