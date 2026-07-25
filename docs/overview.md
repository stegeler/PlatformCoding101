---
id: overview
title: The operating model
sidebar_label: Start here
slug: /overview
description: The core mental model for reliable AI-assisted software engineering.
---

AI coding becomes reliable when humans manage **intent, context, boundaries, and feedback** as explicit systems rather than expecting the model to infer them.

## The central constraint

**Context windows are capacity limits, not guarantees of consistent reasoning quality.**

- A relatively fresh context is the model’s effective **smart zone**.
- Quality degrades as exploration, implementation details, corrections, and unrelated history accumulate.
- Large projects therefore need many small, bounded sessions—not one heroic conversation.

## The division of labor

**Humans own the destination and judgment. Agents own bounded execution.**

- Humans resolve ambiguity, choose architecture, define scope, prioritize work, and evaluate product quality.
- Agents explore repositories, implement defined slices, run checks, commit changes, and report results.
- Autonomy should expand only after the task and its feedback loops are stable.

## The artifact chain

1. A grilling conversation creates shared alignment.
2. A PRD captures the destination, decisions, and boundaries.
3. Dependency-aware issues describe the journey.
4. Code, tests, commits, and review findings record execution state.
5. Stale planning material is closed or removed when its purpose is complete.

## The end-to-end loop

```text
Idea
  ↓
Grill and align
  ↓
Research or prototype when needed
  ↓
PRD: destination + decisions + out of scope
  ↓
Issues: small vertical slices + dependencies
  ↓
Agent implementation in fresh, bounded contexts
  ↓
Automated tests and fresh-context review
  ↓
Human product QA
  ↓
New issues until the destination is reached
```

:::info Working principle
Do not ask the model to compensate for missing product thinking, weak architecture, or absent validation. Improve the system around the model.
:::

## Use this guide

- Start with [context and sessions](./model-mechanics/context-and-sessions.md).
- Use the [end-to-end playbook](./workflow/end-to-end-playbook.md).
- Keep the [operating checklist](./reference/operating-checklist.md) open during implementation and review.
