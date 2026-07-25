---
title: Loops, sandboxes, and parallel agents
sidebar_label: Execution loops
description: Run autonomous implementation as an observable, bounded loop rather than an open-ended chat.
---

Agent execution needs an outer control system. The loop selects bounded work, supplies a clean environment, validates results, and stops explicitly.

## The Ralph loop

- Give the agent a destination and an eligible backlog, not one enormous implementation prompt.
- The agent selects one task, explores, implements, tests, commits, reports, and repeats.
- Every iteration should have a clear stop condition and leave durable state outside the conversation.

```text
Select eligible task
  → load bounded context
  → explore relevant code
  → implement
  → run checks
  → commit and update task state
  → stop or select next task
```

## Backlog selection rules

- Define priority ordering such as critical defects → infrastructure blockers → tracer bullets → feature slices → polish.
- Restrict unattended execution to tasks explicitly marked AFK-safe.
- Define the exact response for “no eligible work” so the orchestrator can terminate cleanly.

## Observe before automating

- Run the prompt manually several times before wrapping it in an unattended loop.
- Watch task selection, repository exploration, reaction to test failures, and stopping behavior.
- Modify the workflow from observed failure modes rather than imagined ones.

## Permissions and sandboxing

- Limit filesystem, network, secret, and deployment access to what the task requires.
- Use containers, worktrees, or separate branches to isolate execution.
- Isolation makes failure cheaper and allows parallel agents without shared-workspace corruption.

## Parallel agents

- A planner identifies unblocked tasks that can execute concurrently.
- Each agent works in its own branch, worktree, and sandbox.
- Reviewer and merger roles inspect commits, integrate branches, and resolve cross-branch failures.

## Orchestrator responsibilities

- Which task was selected and why.
- Which context and instructions were loaded.
- Which commands and checks ran.
- Which files and commits changed.
- Why the iteration stopped.
- What remains blocked or eligible.
