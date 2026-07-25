---
title: Tests, review, and feedback loops
sidebar_label: Tests and review
description: Make correctness observable through deterministic checks, independent review, and human product judgment.
---

An agent can only improve against feedback it can observe. Tests, type checks, runtime behavior, review standards, and product QA are its senses.

## Fresh-context review

- Do not ask a context-saturated implementer to perform the final review in the same session.
- Clear the context or use a separate reviewer with the task, diff, tests, and standards.
- Reviewing is a distinct cognitive task and may justify a stronger model than routine implementation.

## Automated review

- Run an AI reviewer before human QA to catch obvious defects cheaply.
- Supply the code changes and the standards they must satisfy.
- Require evidence: file paths, behaviors, failing cases, and concrete remediation.

## Test-driven development

- Use **red → green → refactor**.
- Writing the failing test first reduces the chance that tests merely confirm an existing implementation.
- The test should express behavior at a stable boundary, not mirror internal functions line by line.

## Feedback loops

- Fast, deterministic checks let the agent correct itself during implementation.
- Weak or delayed feedback creates confident but unverified output.
- The quality of the feedback system sets the ceiling for autonomous work.

Useful loops include unit and integration tests, type checks, static analysis, builds, runtime logs, browser/API checks, and human product QA.

## Review the tests first

- Confirm that tests represent meaningful user or system behavior.
- Look for omitted boundaries, false positives, over-mocking, and implementation-specific assertions.
- Only then use passing tests as evidence for the implementation.

## Human QA and taste

- Automated checks do not determine whether the product is understandable, coherent, or valuable.
- Humans evaluate behavior, usability, edge cases, and engineering taste.
- QA findings should become explicit issues with priority and validation criteria.

## Code-review throughput

- Agent output can increase the volume of code faster than human review capacity.
- Large unattended runs conflict with the goal of small, self-contained pull requests.
- Limit parallelism and batch size based on review throughput, not generation throughput.

<div className="decision-rule"><b>Capacity rule</b><span>The bottleneck is often review and integration, not code generation. Optimize for trustworthy accepted changes.</span></div>
