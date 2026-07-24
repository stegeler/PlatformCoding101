---
title: Fundamentals glossary
sidebar_label: Glossary
description: Every main topic from the workshop in a succinct topic-and-bullets format.
---

This page preserves the requested format: **main topic followed by two or three succinct bullets**.

## Context windows
- The model performs best in a relatively fresh effective context or “smart zone.”
- Advertised capacity does not imply uniform reasoning quality across the full window.
- Fit exploration, implementation, and validation into one bounded session.

## Task sizing
- Split goals into coherent behaviors that complete inside the smart zone.
- Avoid combining broad discovery, architecture, implementation, and QA in one task.
- A reviewer should be able to understand each unit as one change.

## System prompts and persistent context
- Permanent instructions consume context before useful work begins.
- Keep global rules small, durable, and truly universal.
- Load specialized procedures only when relevant.

## Session lifecycle
- A coding session normally moves through exploration, implementation, and testing.
- Design the task so all three stages fit in one clean context.
- Stop and hand off when exploration consumes most of the context.

## Compaction versus clearing
- Compaction compresses accumulated conversation and preserves some of its sediment.
- Clearing starts from a known base and reloads only explicit artifacts.
- Store durable state in PRDs, issues, commits, code, and tests.

## Subagents
- Subagents receive isolated contexts for bounded work.
- The parent receives a concise result rather than every intermediate token.
- Use delegation to protect orchestrator context and enable parallelism.

## Skills
- A skill is a reusable procedure for a defined workflow.
- Keep skills narrow, inspectable, editable, and independently testable.
- Tune them from observed failure modes.

## Tools versus skills
- Tools provide capabilities such as reading, editing, browsing, and testing.
- Skills define how and when those capabilities should be used.
- More tools do not repair poor alignment or weak validation.

## Push versus pull instructions
- Push universal constraints into every relevant context.
- Let agents pull specialized guidance when the task requires it.
- Push standards into reviewers when compliance must be checked explicitly.

## Own the planning stack
- Prefer workflows the team can read, modify, and diagnose.
- Avoid opaque frameworks that hide task selection or stopping behavior.
- Humans should retain control of orchestration.

## Shared alignment and “Grill Me”
- The goal is a shared design concept, not instant plan generation.
- Ask one focused question at a time and recommend a likely answer.
- Follow each decision through its dependencies.

## Domain experts and AI collaboration
- Include the people who can answer product, domain, and implementation questions.
- Use the agent to expose assumptions and unresolved branches.
- Feed transcripts and discovery notes into structured alignment.

## Human-in-the-loop versus AFK work
- Keep ambiguous design, research, prioritization, and final QA human-led.
- Use AFK execution for well-defined implementation tasks.
- Expand autonomy only after boundaries and feedback loops are stable.

## Specs-to-code
- A specification summarizes intent; it is not a compiler input.
- Humans still shape architecture, interfaces, tests, and the codebase.
- Poor code and tests produce poor agent behavior.

## Destination versus journey
- The destination defines the desired end state and done criteria.
- The journey defines tasks, dependencies, and sequencing.
- Keep them separate so execution does not redefine intent.

## Product Requirements Documents
- A PRD captures problem, outcome, user stories, decisions, validation, and scope.
- It records shared thinking rather than replacing that thinking.
- A new implementer should understand done without replaying the conversation.

## Out-of-scope decisions
- Record rejected options and excluded behavior explicitly.
- Negative decisions prevent silent scope expansion.
- Clear exclusions make completion measurable.

## Issues instead of numbered phases
- Convert the PRD into independently grabbable issues.
- State blockers, downstream dependencies, and validation for each issue.
- Use the board as an inspectable execution graph.

## Kanban and dependency graphs
- The backlog forms a graph of eligible and blocked work.
- Run independent tasks concurrently when integration risk is controlled.
- Add QA findings to the same graph.

## Vertical slices and tracer bullets
- Build thin end-to-end behaviors instead of layer-by-layer phases.
- Each slice should produce integrated, observable feedback.
- Use an early tracer bullet to validate architecture and interfaces.

## Research and prototypes
- Research unresolved technical feasibility before production work.
- Use disposable variants for choices that require human comparison.
- Feed evidence back into the PRD and issue plan.

## Ralph loop
- Select one eligible task, explore, implement, test, commit, and repeat.
- Start each iteration with a bounded destination and explicit stop condition.
- Leave durable state outside the conversation.

## Backlog selection rules
- Define task priority and restrict unattended work to AFK-safe items.
- Prevent agents from choosing only the easiest available work.
- Define an unambiguous “no eligible tasks” response.

## Observe before automating
- Run workflows manually before placing them in unattended loops.
- Watch task selection, exploration, failure recovery, and stopping.
- Refine prompts from evidence rather than assumption.

## Permissions and sandboxing
- Give unattended agents only the permissions their task requires.
- Isolate work with containers, branches, or worktrees.
- Make failures cheap and parallel work non-destructive.

## Parallel agents
- A planner selects independent unblocked tasks.
- Each agent works in an isolated environment.
- Review and merge roles integrate the results.

## Fresh-context review
- Review implementation in a new context or with a separate agent.
- Supply the diff, task, tests, and standards.
- Do not rely on the implementer’s saturated context for final judgment.

## Automated review
- Use AI review before human QA to catch inexpensive defects.
- Require concrete evidence and actionable findings.
- Compare changes against explicit standards and scope.

## Test-driven development
- Use red → green → refactor.
- Write the failing behavioral test before implementation.
- Test stable boundaries rather than mirroring internals.

## Feedback loops
- Tests, type checks, runtime behavior, and logs are the agent’s senses.
- Fast deterministic feedback enables self-correction.
- Feedback quality limits autonomous output quality.

## Review the tests first
- Confirm tests represent meaningful behavior before trusting green results.
- Look for missing boundaries, false positives, and excessive mocking.
- Then review the corresponding implementation.

## Human QA and taste
- Humans evaluate product coherence, usability, edge behavior, and taste.
- Automated checks cannot determine whether the outcome is actually good.
- Convert findings into explicit backlog items.

## Code-review throughput
- Agent generation can exceed human review capacity.
- Keep changes small and limit parallelism to integration capacity.
- Optimize for accepted trustworthy work, not raw code volume.

## Shallow modules
- Many tiny modules create dense dependency graphs and weak test boundaries.
- Agents must hold more relationships in context.
- Unchecked agents tend to reproduce the fragmentation.

## Deep modules
- Deep modules expose small interfaces and hide substantial behavior.
- They create stable test boundaries and reduce dependency load.
- Internal implementation can change without widespread edits.

## Design interfaces; delegate internals
- Humans define module boundaries, interfaces, and invariants.
- Agents implement bounded internals behind those contracts.
- Humans retain the system map without authoring every line.

## Architecture-improvement skills
- Scan for coupling, unclear boundaries, and missing behavioral tests.
- Refactor toward better interfaces rather than cosmetic abstraction.
- Better architecture improves future agent reliability.

## Documentation rot
- Old PRDs and plans can contradict the current codebase.
- Future agents may treat stale artifacts as authoritative.
- Close, archive, or remove temporary planning material after use.

## Overall workflow
- Idea → alignment → research/prototype → PRD → issues → implementation → review/tests → human QA.
- Humans own intent, architecture, prioritization, and judgment.
- Agents own bounded implementation with isolation and feedback.
