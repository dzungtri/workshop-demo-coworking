# Task Resolve Skill

Use this when resolving one task.

## Required reading
- `AGENTS.md`
- `/tasks/<TASK-ID>.md`
- Related `/specs`
- Related `/adrs`
- Existing `/src`

## Workflow
1. Create branch: `feature/<TASK-ID>-short-name`
2. Propose plan before coding
3. Implement
4. Add/update tests
5. Run tests
6. Update task status
7. Commit: `<TASK-ID>: <short description>`
8. Push branch
9. Use GitHub MCP to create PR

## Rules
- Do not change contracts silently.
- Do not introduce new tech without ADR.
- Keep changes focused on the task.

