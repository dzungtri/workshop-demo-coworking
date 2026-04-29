# Task: LMS-002 - Course List + Enroll

## Goal
Implement the courses page and course enrollment flow for the MVP.

## Background
Students need to see available courses and enroll in a course from the course list.

## Related context
- Specs:
  - `/specs/lms-mvp.md`
- ADRs:
  - `/adrs/ADR-0001-architecture-style.md`
  - `/adrs/ADR-0002-tech-stack.md`
  - `/adrs/ADR-0003-testing-strategy.md`

## Scope
In scope:
- Build `/courses`
- List demo courses
- Show `Enroll` or `Enrolled` state
- Support enrollment creation

Out of scope:
- Course authoring
- Admin workflows
- Editing or deleting courses

## Acceptance Criteria
- [ ] `/courses` lists seeded demo courses
- [ ] Each course shows id, title, description, and enrollment state
- [ ] Unenrolled courses show `Enroll`
- [ ] Enrolled courses show `Enrolled`
- [ ] Clicking enroll updates the state for the current user

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
6. Commit using format: `LMS-002: <short description>`.
7. Create PR using GitHub MCP.
