# Task: LMS-001 - Login

## Goal
Implement a minimal login flow for the LMS MVP.

## Background
Students must authenticate with demo credentials before accessing courses or enrollments.

## Related context
- Specs:
  - `/specs/lms-mvp.md`
- ADRs:
  - `/adrs/ADR-0001-architecture-style.md`
  - `/adrs/ADR-0002-tech-stack.md`
  - `/adrs/ADR-0003-testing-strategy.md`

## Scope
In scope:
- Build `/login`
- Validate demo credentials
- Redirect to courses on success
- Show an error on invalid login

Out of scope:
- Real auth providers
- Password recovery
- User registration

## Acceptance Criteria
- [ ] User can enter `user_id` and `password` on `/login`
- [ ] Valid credentials redirect to `/courses`
- [ ] Invalid credentials show `Invalid credentials`
- [ ] Demo users from the spec work as expected

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
6. Commit using format: `LMS-001: <short description>`.
7. Create PR using GitHub MCP.
