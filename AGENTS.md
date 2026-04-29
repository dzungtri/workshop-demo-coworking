# AGENTS.md

## Project
LMS demo project for Team + AI workflow.

This repo is the shared workspace for:
- Humans
- Coding agents
- GitHub MCP

All work must be based on repo context, not memory or assumptions.

---

## Core folders

- `/specs`  
  Product specs, domains, user roles, features, business rules, API contracts.

- `/adrs`  
  Architecture Decision Records. Important technical decisions must be written here.

- `/planning/sprints`  
  Sprint plans, priorities, selected tasks.

- `/tasks`  
  Task specs. Each task should be large enough for an agent to resolve with subtasks internally.

- `/skills`  
  Reusable workflow instructions for agents.

- `/src`  
  Application source code.

---

## Required reading before coding

Before resolving any task, read:

1. `AGENTS.md`
2. Related task file in `/tasks`
3. Related specs in `/specs`
4. Related ADRs in `/adrs`
5. Existing code in `/src`

Do not implement from a vague prompt only.

---

## Git workflow

Use this branch format:

```txt
feature/<task-id>-short-name
````

Example:

```txt
feature/LMS-002-course-management
```

Commit format:

```txt
<task-id>: <short description>
```

Example:

```txt
LMS-002: implement course CRUD API
```

---

## Task workflow

1. Pick a task from current sprint or GitHub Issues.
2. Create a branch.
3. Read all required context.
4. Create an implementation plan.
5. Implement.
6. Write/update tests.
7. Run tests locally.
8. Update task status.
9. Commit and push.
10. Use GitHub MCP to create Pull Request.
11. Request review.

---

## GitHub MCP rules

Use GitHub MCP to:

* Create issues from task files.
* Update issue status.
* Link PR to issue.
* Create Pull Request.
* Comment review results.
* Close issue only after PR is merged and Definition of Done is met.

---

## Definition of Done

A task is done only when:

* Implementation matches specs.
* Related ADRs are followed.
* Tests pass.
* Docs/contracts are updated if needed.
* PR is reviewed.
* PR is merged.
* GitHub Issue is closed.

---

## Agent behavior

Agents must:

* Prefer small, safe changes.
* Follow existing conventions.
* Not introduce new technology without ADR.
* Not change API contracts silently.
* Explain assumptions before coding.
* Ask for review if context is missing.
