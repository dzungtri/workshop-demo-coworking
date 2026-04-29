# LMS MVP Spec

## Goal

Build a minimal LMS web app that demonstrates the Team + AI workflow.

The MVP should be small enough to implement in one short sprint/demo.

---

## User Roles

### Student

A student can:

- Login
- View available courses
- Enroll in a course
- View enrolled courses

No admin role is required for MVP.

---

## Pages

### 1. Login Page

Path:

```txt
/login
````

Fields:

* User ID
* Password

Behavior:

* User enters ID and password.
* If valid, redirect to Courses page.
* If invalid, show error message.

MVP auth can use hardcoded demo users.

Example demo user:

```txt
user_id: student1
password: password123
```

---

### 2. Courses Page

Path:

```txt
/courses
```

Show list of courses.

Each course has:

* Course ID
* Title
* Description
* Enroll button

Behavior:

* If user is not enrolled, show `Enroll`.
* If user is already enrolled, show `Enrolled`.

---

### 3. My Enrollments Page

Path:

```txt
/my-courses
```

Show courses the current student has enrolled in.

Each item shows:

* Title
* Description

If no enrolled courses:

```txt
You have not enrolled in any courses yet.
```

---

## Domain Model

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
```

### Enrollment

```txt
id: string
user_id: string
course_id: string
created_at: datetime
```

---

## MVP Data

Use seed/demo data.

### Users

```txt
student1 / password123
student2 / password123
```

### Courses

```txt
COURSE-001: Introduction to AI
COURSE-002: Software Engineering Basics
COURSE-003: Team Collaboration with AI
```

---

## API Requirements

### Login

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

Response success:

```json
{
  "token": "demo-token-student1",
  "user": {
    "id": "student1",
    "name": "Student One"
  }
}
```

Response failure:

```json
{
  "error": "Invalid credentials"
}
```

---

### List Courses

```txt
GET /api/courses
```

Response:

```json
[
  {
    "id": "COURSE-001",
    "title": "Introduction to AI",
    "description": "Learn basic AI concepts.",
    "enrolled": false
  }
]
```

---

### Enroll Course

```txt
POST /api/enrollments
```

Request:

```json
{
  "course_id": "COURSE-001"
}
```

Response:

```json
{
  "success": true
}
```

Rules:

* User must be logged in.
* User cannot enroll in the same course twice.

---

### My Courses

```txt
GET /api/my-courses
```

Response:

```json
[
  {
    "id": "COURSE-001",
    "title": "Introduction to AI",
    "description": "Learn basic AI concepts."
  }
]
```

---

## Acceptance Criteria

* User can login with demo account.
* User can see course list.
* User can enroll in a course.
* User can see enrolled courses in My Courses.
* Duplicate enrollment is prevented.
* Basic error messages are shown.
* App can run locally.
* Tests exist for core business logic or API behavior.

---

## Out of Scope

* Real user registration
* Admin dashboard
* Payment
* Video lessons
* Certificates
* Email notification
* Complex permission system
* Production authentication
* Real database required

---

## Demo Success

The demo is successful if:

1. Agent can read this spec.
2. Agent can create tasks/issues from this spec.
3. Agent can implement one task.
4. Agent can run tests.
5. Agent can create PR.
6. Reviewer can verify against this spec.


