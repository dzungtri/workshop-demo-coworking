# ADR-0002: Tech Stack

## Status
Accepted

## Context
The MVP needs a low-friction stack that is fast to scaffold and easy to demo.

## Decision
Use Vite + React + TypeScript for the UI, with a lightweight Node.js API using in-memory/demo data. Use JSON fixtures for seed data and avoid a database for the MVP.

## Consequences
Fast setup and simple local runs.
No persistence across restarts, which is acceptable for a demo.

## AI/team impact
The stack is common, well-documented, and easy for humans and agents to navigate quickly.
