
---

## `/tasks/TEMPLATE.md`

```md
# Task: <TASK-ID> - <Title>

## Goal
What should be achieved?

## Background
Why is this task needed?

## Related context
- Specs:
  - `/specs/product-vision.md`
  - `/specs/domains.md`
  - `/specs/user-roles.md`
  - `/specs/features.md`
  - `/specs/api-contracts.md`
- ADRs:
  - `/adrs/...`
- Contracts:
  - `/specs/api-contracts.md`

## Scope
In scope:
- ...

Out of scope:
- ...

## Acceptance Criteria
- [ ] ...
- [ ] ...
- [ ] ...

## Definition of Done
- [ ] Code implemented
- [ ] Tests added/updated
- [ ] Tests pass locally
- [ ] Docs/contracts updated if needed
- [ ] PR created
- [ ] Reviewed and merged

## Suggested labels
`backend`, `frontend`, `sprint-1`, `lms`

## Agent instruction
Read `AGENTS.md`, this task, related specs, and related ADRs first.

Then:
1. Propose implementation plan.
2. Break into internal subtasks.
3. Implement.
4. Run tests.
5. Update this task status.
6. Commit using format: `<TASK-ID>: <short description>`.
7. Create PR using GitHub MCP.
