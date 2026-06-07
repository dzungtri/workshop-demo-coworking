# AGENTS.md

## Repository Role

This repository is a shared workspace for:

- Humans
- Codex agents
- GitHub MCP

All changes must be based on repository context, not memory or outside assumptions.

## Sources of Truth

- `/specs`: product, domain, roles, features, API contracts
- `/adrs`: architecture and technical decisions
- `/planning`: backlog, sprint plans, priorities
- `/tasks`: work items that can be assigned to an agent
- `/docs`: supporting documents, runbooks, diagrams
- `/src`: application source code
- `/tests`: automated tests

## Workflow Overview

The lifecycle flows: **Backlog → Sprint → Task → Implementation → Close**

Each layer has its own state machine. Changes must propagate top-down (backlog → sprint → task) or bottom-up (task done → update sprint → update backlog).

---

### 1. Backlog Workflow (`/planning/backlog.md`)

States: `New` → `Refined` → `Sprint Ready` → `In Sprint` → `Done`

| Transition | When | Who |
|---|---|---|
| `New` | New feature/requirement identified, add row with ID (PB-XXX) | PM / any |
| `Refined` | Acceptance criteria and scope are clear | PM |
| `Sprint Ready` | Item is estimated and ready for sprint selection | PM |
| `In Sprint` | Item selected into a sprint during sprint planning | PM |
| `Done` | All linked tasks merged, feature delivered | PM |

Rule: Update priority in backlog before changing sprint. Backlog is the product-level source of truth.

---

### 2. Sprint Workflow (`/planning/sprints/sprint-N.md`)

States: `Planned` → `Active` → `Review` → `Closed`

| Step | Action |
|---|---|
| Sprint start | Create `sprint-N.md`, list selected backlog items as tasks, set all to `Todo` |
| Task picked | Update task row to `In Progress` |
| PR created | Update task row to `Review` |
| Task merged | Update task row to `Done` |
| Sprint end | All tasks `Done` → `Closed`. Incomplete tasks move to next sprint or back to backlog. |

Rule: Sprint file is the execution plan. Update it whenever a task changes state so the team sees live status.

---

### 3. Task Workflow (`/tasks/TASK-ID-name.md`)

States: `Todo` → `In Progress` → `Review` → `Done`

| When | Action |
|---|---|
| Sprint planning | Create task file from `TEMPLATE.md`. ID format: `PROJECT-NNN` (e.g. `LMS-001`). Link to backlog item ID. |
| Ready to implement | Agent picks task, assigns self, sets status to `In Progress` |
| Implementation done | Open PR, update task to `Review` in both task file and sprint file |
| PR merged | Update task to `Done` |

Task file must always contain: Goal, Background, Related context (specs + ADRs), Scope, Acceptance Criteria, Definition of Done.

---

### 4. Implementation Workflow (per task)

Follow this sequence when executing a task:

1. Pull the latest `main`
2. Pick one task from the sprint (status must be `Todo` or assigned to you)
3. Create a feature branch: `feature/<task-id>-short-name`
4. Read required context in order (see Required Reading Order below)
5. Implement in small, reviewable steps
6. Run local validation (tests, lint, typecheck)
7. Open a PR, update task to `Review`
8. After merge, update task to `Done`
9. Repeat until the sprint is complete

---

### 5. State Transition Summary

```
Backlog:  New → Refined → Sprint Ready → In Sprint → Done
                                            ↓
Sprint:   Planned → Active → Review → Closed
              ↓
Task:     Todo → In Progress → Review → Done
              ↓
Branch:   feature/<task-id> → PR → merge → main
```

- Top-down: backlog state drives sprint selection, sprint drives task creation
- Bottom-up: task completion updates sprint, sprint completion updates backlog
- Skip levels only with explicit PM approval (e.g. task done directly in backlog without sprint)

## Required Reading Order

Before doing any task, read:

1. `AGENTS.md`
2. The related task file in `/tasks`
3. The related spec in `/specs`
4. The related ADR in `/adrs`
5. The sprint plan/backlog in `/planning` if the task has been scheduled
6. The relevant source and test files in `/src` and `/tests`
7. The GitFlow guide in `/docs/gitflow.md` when branch or release behavior is involved

Do not start implementation from a vague prompt without the required context.

## Documentation Structure

### `/specs`

This folder is the source of truth for product and business rules.

Preferred file layers:

- `product-vision.md`
- `domains.md`
- `user-roles.md`
- `features.md`
- `api-contracts.md`

For the current LMS repo, the active delivery documents are:

- `lms-rfp.md`
- `lms-spec.md`
- `lms-mvp.md`

When content changes, update the correct layer first, then update any references.

### `/adrs`

Record architecture decisions with long-term impact here.

Do not change architecture in code without reflecting it in an ADR.

### `/planning`

Contains backlog and sprint planning.

When a task is selected into a sprint, record the sprint, priority, and scope.

### `/tasks`

Each task should be specific enough for an agent to execute in steps.

A task should include:

- Goal
- Background
- Related specs
- Related ADRs
- Scope
- Acceptance criteria
- Definition of Done

### `/docs`

Use this folder for supporting materials only.

Do not place product specs or canonical API contracts here.

## Working Rules

- Prefer small, safe, reviewable changes
- Do not introduce new technology without an ADR
- Do not change API contracts silently
- Update related documentation when behavior changes
- Keep diffs small, clear, and reversible
- Create feature branches for task work and keep `main` stable
- Use `hotfix/*` only for urgent fixes
- Use `release/*` only when release stabilization is needed
- Land changes through PRs rather than direct commits to `main`

## Git Workflow

### Branch

```txt
feature/<task-id>-short-name
```

### Commit

```txt
<task-id>: <short description>
```

## Definition of Done

A task is only complete when:

- The implementation matches the spec
- Related ADRs are respected
- Tests pass
- Required docs/contracts are updated
- The PR has been reviewed and merged
- The issue has been closed
