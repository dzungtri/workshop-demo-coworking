# ADR-0003: Testing Strategy

## Status
Accepted

## Context
The MVP is small, but the login and enroll flows should not regress during rapid changes.

## Decision
Use a minimal test set: unit tests for core helpers and one or two end-to-end smoke tests for login and enrollment. Run tests locally before demo-ready changes.

## Consequences
Provides basic confidence without slowing the demo build.
Leaves edge cases uncovered, which is acceptable for this MVP.

## AI/team impact
Agents can verify the highest-risk flows quickly without overinvesting in test infrastructure.
