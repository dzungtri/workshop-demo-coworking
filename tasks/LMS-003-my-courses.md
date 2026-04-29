# Task: LMS-003 - My Courses

## Goal
Implement the enrolled courses page for the MVP.

## Background
Students need a simple place to review the courses they have enrolled in.

## Related context
- Specs:
  - `/specs/lms-mvp.md`
- ADRs:
  - `/adrs/ADR-0001-architecture-style.md`
  - `/adrs/ADR-0002-tech-stack.md`
  - `/adrs/ADR-0003-testing-strategy.md`

## Scope
In scope:
- Build `/my-courses`
- Show enrolled course title and description
- Show empty state when no enrollments exist

Out of scope:
- Sorting or filtering
- Course progress tracking
- Dropping enrollments

## Acceptance Criteria
- [ ] `/my-courses` shows the current student’s enrolled courses
- [ ] Each item shows title and description
- [ ] Empty state matches the spec when no courses are enrolled

## Definition of Done
- [ ] Code implemented
- [ ] Tests added/updated
- [ ] Tests pass locally
- [ ] Docs/contracts updated if needed
- [ ] PR created
- [ ] Reviewed and merged

## Suggested labels
`frontend`, `backend`, `sprint-1`, `lms`

## Agent instruction
Read `AGENTS.md`, this task, related specs, and related ADRs first.

Then:
1. Propose implementation plan.
2. Break into internal subtasks.
3. Implement.
4. Run tests.
5. Update this task status.
6. Commit using format: `LMS-003: <short description>`.
7. Create PR using GitHub MCP.
