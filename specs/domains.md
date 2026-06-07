# Domains

Tài liệu này mô tả miền nghiệp vụ và các thực thể chính.

## Miền nghiệp vụ hiện tại

LMS học tiếng Anh sử dụng các thực thể chính sau:

- `User`
- `Course`
- `Enrollment`
- `Lesson`

## Mối quan hệ chính

- Một `User` có thể có nhiều `Enrollment`
- Một `Course` có thể có nhiều `Lesson`
- Một `Enrollment` gắn một `User` với một `Course`

## Với LMS hiện tại

Đặc tả dữ liệu chi tiết đang nằm trong:

- [SPEC - LMS học tiếng Anh](./lms-spec.md)

