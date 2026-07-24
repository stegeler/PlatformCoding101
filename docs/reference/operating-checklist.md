---
title: Operating checklist
sidebar_label: Checklist
description: A compact checklist for deciding whether AI coding work is ready to plan, execute, review, and close.
---

Use the checklist as a gate. A missing answer is a reason to reduce autonomy or return to alignment.

## Before planning

- [ ] The user or operational problem is explicit.
- [ ] Success is described as observable behavior.
- [ ] Product, domain, architecture, and release decision owners are known.
- [ ] Known constraints and non-goals are listed.

## Before writing the PRD

- [ ] Major product and data decisions are resolved.
- [ ] Open uncertainty is classified as research, prototype, deferred scope, or accepted risk.
- [ ] Failure paths and edge cases have been discussed.
- [ ] Validation includes deterministic checks and human QA.

## Before creating issues

- [ ] The destination is stable enough that tasks will not redefine it.
- [ ] The tracer bullet is identified.
- [ ] Each issue describes one coherent vertical behavior.
- [ ] Dependencies, blockers, and stop conditions are explicit.
- [ ] AFK-safe tasks are marked deliberately.

## Before agent execution

- [ ] The task fits inside one effective context.
- [ ] Relevant skills and repository rules are available without excessive global context.
- [ ] The agent has the tools required to validate its own work.
- [ ] Permissions and environment are isolated to the task.
- [ ] The expected commit, report, or blocked response is precise.

## Before parallel execution

- [ ] Selected tasks have no unresolved dependency between them.
- [ ] Shared files and integration hotspots are identified.
- [ ] Each agent has a separate branch, worktree, or container.
- [ ] Review and merge capacity can absorb the generated work.

## Before accepting implementation

- [ ] Tests were reviewed for behavioral relevance.
- [ ] Required tests, type checks, builds, and runtime checks pass.
- [ ] A fresh-context reviewer compared the diff with the issue and PRD.
- [ ] Scope expansion and architecture changes are intentional.
- [ ] Human QA confirmed product behavior.

## Before closing the destination

- [ ] Remaining gaps are explicit follow-up issues.
- [ ] Current code and tests embody accepted decisions.
- [ ] Durable operational or architectural documentation is updated.
- [ ] Temporary plans are closed, archived, or removed.
- [ ] The next session can start without replaying old conversation history.
