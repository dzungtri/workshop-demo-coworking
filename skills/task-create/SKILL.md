# Task Create Skill

Use this when converting specs or sprint plans into GitHub Issues.

## Input
- Specs from `/specs`
- ADRs from `/adrs`
- Sprint plan from `/planning/sprints`
- Task template from `/tasks/TEMPLATE.md`

## Rules
- Create feature-level tasks, not tiny subtasks.
- Each task must have clear goal, scope, acceptance criteria, DoD, labels.
- Link related specs and ADRs.
- Use GitHub MCP to create issues.

## Output
For each task:
- Create `/tasks/<TASK-ID>-<name>.md`
- Create matching GitHub Issue
- Add labels
- Add to current sprint if possible

