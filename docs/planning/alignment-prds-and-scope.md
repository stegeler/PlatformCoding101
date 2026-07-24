---
title: Alignment, PRDs, and scope boundaries
sidebar_label: Alignment and PRDs
description: Establish a shared design concept before asking an agent to plan or implement.
---

Planning begins with shared understanding, not document generation. The agent should expose decisions that the original request left implicit.

## The “Grill Me” approach

- The agent asks one focused question at a time and recommends a likely answer.
- Each answer is followed through its dependencies until the design is internally coherent.
- The output is a shared design concept, not merely a transcript of questions.

## Domain experts and collaborative planning

- Product, customer, domain, and implementation questions should involve the people who can answer them.
- The agent acts as a persistent third participant that identifies assumptions and unresolved branches.
- Meeting transcripts, customer briefs, and discovery notes can seed the grilling process.

## Human-in-the-loop versus AFK work

- Keep discovery, ambiguous design, research, prototypes, prioritization, and final QA human-led.
- Move work to **AFK execution** only when the destination, boundaries, and validation are clear.
- Automation is earned by task stability; it is not the default starting point.

## Specs-to-code is not compilation

- A specification summarizes intent; it cannot encode every implementation judgment.
- Humans still need to understand and shape the codebase, interfaces, and tests.
- A weak codebase or misleading test suite will produce weak agent output even from a detailed specification.

## Destination versus journey

- The **destination** defines the desired user and system state.
- The **journey** defines tasks, dependencies, ordering, and feedback points.
- Keep them separate so implementation changes do not silently redefine the product outcome.

## Product Requirements Documents

A useful PRD captures:

- The problem and intended user outcome.
- User stories or observable behaviors.
- Product and implementation decisions already made.
- Testing and validation decisions.
- Proposed modules or surfaces likely to change.
- Explicit out-of-scope items and rejected alternatives.

<div className="topic-definition"><strong>PRD test</strong>A new implementer should understand what “done” means and which choices are closed, without replaying the entire planning conversation.</div>

## Out-of-scope decisions

- Record excluded behavior and rejected options explicitly.
- Negative decisions prevent the implementation agent from reopening settled branches.
- Scope boundaries make completion measurable and reduce accidental expansion.
