# ADR-0001: Architecture Style

## Status
Accepted

## Context
The MVP must be demoable in 15-30 minutes and support only login, course listing, and enrollments.

## Decision
Use a simple monolith with a single frontend and API layer in one codebase. Keep state local to the app and use seed/demo data instead of distributed services.

## Consequences
Easy to build, explain, and change quickly.
Harder to scale than a split-service architecture, but that is unnecessary for the MVP.

## AI/team impact
Agents can work in one repository with clear boundaries and minimal coordination overhead.
