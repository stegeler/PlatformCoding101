---
title: End-to-end implementation playbook
sidebar_label: End-to-end playbook
description: A compact operating sequence for moving from an idea to reviewed production work.
---

Use this sequence when a feature is large enough to require multiple AI coding sessions or parallel contributors.

## 1. Frame the destination

- State the user problem, desired behavior, and business or operational outcome.
- Name the non-goals and constraints already known.
- Identify the people who own product, domain, architecture, and release decisions.

**Exit condition:** the team can describe success without discussing implementation tasks.

## 2. Grill the idea

- Ask one decision-focused question at a time.
- Recommend a default answer and explain its consequence.
- Follow dependencies until major product, data, interface, failure, and testing decisions are resolved.

**Exit condition:** remaining uncertainty is explicitly classified as research, prototype, or deferred scope.

## 3. Research or prototype uncertainty

- Run focused research for unknown technical feasibility.
- Build disposable variants for behavior or visual choices that require human comparison.
- Feed conclusions back into the shared design concept.

**Exit condition:** evidence replaces material assumptions that would destabilize implementation.

## 4. Write the PRD

- Capture problem, outcome, user stories, decisions, affected surfaces, validation, and out-of-scope items.
- Separate the destination from the execution plan.
- Review it with product, domain, and engineering owners.

**Exit condition:** a new implementer can understand done, constraints, and closed choices.

## 5. Convert the PRD into issues

- Create small vertical slices with outcome, boundaries, dependencies, and checks.
- Identify the tracer bullet and infrastructure blockers.
- Mark only stable, well-bounded tasks as AFK-safe.

**Exit condition:** the board exposes eligible and blocked work without hidden sequencing.

## 6. Calibrate the implementation prompt

- Run the workflow manually before automating it.
- Observe exploration, task selection, testing behavior, and stop conditions.
- Refine the skill or prompt from actual failures.

**Exit condition:** one task completes reliably inside a fresh context.

## 7. Execute bounded loops

- Select the highest-priority eligible task.
- Run in an isolated branch, worktree, or container.
- Explore only relevant code, implement, test, commit, and update task state.

**Exit condition:** every iteration ends with a verified commit, an explicit blocker, or no eligible work.

## 8. Review in a fresh context

- Validate tests before trusting implementation.
- Compare the diff against the PRD, issue boundaries, architecture, and repository standards.
- Create actionable findings with evidence.

**Exit condition:** automated checks and independent review provide credible evidence for human QA.

## 9. Perform human QA

- Exercise the product as a user or operator.
- Evaluate coherence, usability, edge behavior, and engineering taste.
- Convert findings into the same dependency-aware backlog.

**Exit condition:** the destination is met, or remaining gaps are explicit work items.

## 10. Retire temporary state

- Close issues, update durable docs, and remove stale planning artifacts.
- Preserve important architectural and operational decisions.
- Ensure the codebase—not the conversation—is the current source of truth.

**Exit condition:** the next project starts from a clean, accurate context.
