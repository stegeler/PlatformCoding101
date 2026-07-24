---
title: Deep modules and human-owned boundaries
sidebar_label: Deep modules
description: Design codebases that agents can navigate, test, and modify without dissolving human architectural understanding.
---

Agent-friendly architecture reduces the number of relationships a model must hold in context while creating stable behavioral boundaries for testing.

## Shallow modules

- Many tiny modules create a dense dependency graph and increase navigation cost.
- Boundaries become ambiguous, encouraging heavy mocking and implementation-specific tests.
- Agents tend to reproduce this fragmentation unless the architecture directs them otherwise.

## Deep modules

- A deep module exposes a small, simple interface while containing substantial behavior.
- It creates a clear test boundary and hides internal complexity.
- Fewer, stronger relationships are easier for both humans and agents to reason about.

| Shallow module | Deep module |
|---|---|
| Large interface, little hidden behavior | Small interface, substantial hidden behavior |
| Many cross-module relationships | Fewer explicit dependencies |
| Tests mirror internals | Tests exercise stable behavior |
| Local changes ripple outward | Internals can change behind the interface |

## Design interfaces; delegate internals

- Humans should retain the module map and define important interfaces, invariants, and ownership boundaries.
- Agents can implement internal mechanics behind those interfaces.
- This preserves human control of architecture without requiring manual authorship of every line.

## Architecture-improvement skills

- A specialized skill can identify tightly coupled clusters, unclear boundaries, missing behavioral tests, and opportunities to deepen modules.
- Refactoring should target better interfaces and feedback loops, not cosmetic abstraction.
- Architecture improvements compound by making future agent sessions smaller and more reliable.

## Boundary quality test

A strong module boundary has a concise purpose, owns its invariants, can be tested through observable behavior, hides internal sequencing, and permits internal change without widespread edits.
