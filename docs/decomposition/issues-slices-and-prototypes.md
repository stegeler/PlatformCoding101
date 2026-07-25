---
title: Issues, vertical slices, and prototypes
sidebar_label: Issues and vertical slices
description: Turn a destination into dependency-aware units that deliver integrated feedback early.
---

Decomposition should minimize delayed integration. The best unit of work crosses the layers required to produce one coherent behavior.

## Issues instead of numbered phases

- Convert the PRD into independently grabbable issues.
- Each issue should state what blocks it, what it blocks, and how completion is verified.
- A dependency-aware backlog is easier to reprioritize and parallelize than a fixed sequence of broad phases.

## Kanban as a dependency graph

- The issue board forms a directed graph of eligible and blocked work.
- Agents may work concurrently on tasks with no unresolved dependency between them.
- QA findings become new nodes in the same graph rather than an informal side list.

## Vertical slices and tracer bullets

- Avoid horizontal phases such as database → API → frontend when they delay integrated feedback.
- Build a thin path through all required layers for one user-visible behavior.
- Use the first slice as a tracer bullet that validates architecture, interfaces, and deployment assumptions.

| Horizontal decomposition | Vertical slice |
|---|---|
| Build all database tables | Persist one complete user action |
| Build all endpoints | Expose the endpoint needed by that action |
| Build all UI screens | Render and validate that behavior end to end |
| Integrate at the end | Integrate during every slice |

## Research and throwaway prototypes

- Use research when a key technical decision lacks evidence.
- Use disposable prototypes when humans need to compare behavior or visual alternatives.
- Feed findings back into the PRD and issue graph before production implementation.

## A well-formed issue

1. **Outcome:** the behavior or decision it must produce.
2. **Context:** relevant code surfaces and prior decisions.
3. **Boundaries:** explicit non-goals and prohibited changes.
4. **Dependencies:** blockers and downstream work.
5. **Validation:** tests, checks, or human review criteria.
6. **Stop condition:** what constitutes complete or blocked.
