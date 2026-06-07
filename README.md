# Jerry LMS

LMS demo nhỏ cho luồng làm việc Team + AI.

Repo này dùng nguyên tắc:

- Một repo
- Một nguồn sự thật
- Một bộ tài liệu rõ ràng cho con người và agent

## Cấu trúc chuẩn

```txt
/specs
/adrs
/planning
  /sprints
/tasks
/docs
/src
/tests
AGENTS.md
README.md
```

## Ý nghĩa các thư mục

- `/specs`: sản phẩm, miền nghiệp vụ, vai trò, tính năng, API contracts
- `/adrs`: quyết định kiến trúc, công nghệ, quy ước dài hạn
- `/planning`: backlog và kế hoạch sprint
- `/tasks`: công việc chi tiết có thể giao cho agent
- `/docs`: tài liệu phụ trợ, runbook, sơ đồ, ghi chú demo
- `/src`: mã nguồn ứng dụng
- `/tests`: kiểm thử tự động

## Tài liệu cốt lõi

- [AGENTS.md](./AGENTS.md): luật chơi cho con người và agent
- [Specs](./specs/README.md): nguồn sự thật cho sản phẩm
- [ADRs](./adrs): quyết định kiến trúc
- [Planning](./planning/README.md): backlog dạng bảng và sprint theo file
- [Tasks](./tasks): công việc triển khai
- [GitFlow](./docs/gitflow.md): quy ước nhánh, commit, PR và merge

## Trạng thái hiện tại

Repo đang ở trạng thái skeleton tối thiểu:

- Vite + React + TypeScript
- Một màn hình landing cơ bản
- Bộ tài liệu LMS đã được tách thành RFP và SPEC

## Chạy dự án

Yêu cầu:

- Node.js 22+
- npm 10+

### Cài đặt

```bash
npm install
```

### Chạy dev server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Chạy test

```bash
npm run test
```

### Type check

```bash
npm run check
```

## Cách làm việc với repo

1. Đọc `AGENTS.md`
2. Đọc task liên quan trong `/tasks`
3. Đọc spec và ADR liên quan
4. Kiểm tra planning nếu task đã nằm trong sprint
5. Thực hiện thay đổi nhỏ, có thể review được
6. Cập nhật tài liệu nếu contract hoặc hành vi thay đổi

## Ghi chú cho LMS hiện tại

Tài liệu sản phẩm của LMS hiện đang dùng:

- [RFP - LMS học tiếng Anh](./specs/lms-rfp.md)
- [SPEC - LMS học tiếng Anh](./specs/lms-spec.md)
