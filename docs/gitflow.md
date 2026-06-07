# GitFlow Guide

This project uses a lightweight GitFlow-style workflow.

## Branch Types

### `main`

- Stable
- Always deployable
- Updated only through reviewed PRs

### `feature/*`

- One task per branch
- Used for normal development work
- Example: `feature/LMS-002-course-list`

### `hotfix/*`

- Used for urgent production fixes
- Short-lived
- Example: `hotfix/login-error`

### `release/*`

- Used when a release needs stabilization
- Short-lived
- Example: `release/v1.0.0`

## Daily Workflow

1. Pull the latest changes
2. Pick one task
3. Create a feature branch
4. Work in small commits
5. Run local validation
6. Open a PR
7. Review and merge
8. Repeat

## Commit Convention

Use task-oriented commits:

```txt
<TASK-ID>: <short description>
```

Examples:

```txt
LMS-001: implement login flow
LMS-002: add course enrollment state
```

## Pull Request Rules

- PRs are required for changes that land in `main`
- PRs should include what changed and how it was validated
- Merge only after the task satisfies Definition of Done

## Release Tagging

If the project needs a release marker, tag from a stable merge point on `main`.

## Notes

- Keep branches short-lived
- Do not mix unrelated tasks in one branch
- Pull latest before starting work to reduce merge conflicts
