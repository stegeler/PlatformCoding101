---
title: Context, sessions, and model performance
sidebar_label: Context and sessions
description: How context windows, compaction, clearing, and subagents affect coding-agent performance.
---

Treat context as a scarce reasoning resource. A model may accept a very large input while producing its best engineering work only within a smaller effective range.

## Context windows: smart zone and dumb zone

- A fresh context usually produces stronger exploration, implementation, and reasoning.
- Matt uses roughly **100K tokens** as a practical smart-zone ceiling for coding, not as a universal law.
- A large advertised context is useful for retrieval, but it does not justify an indefinitely growing work session.

<div className="decision-rule"><b>Decision rule</b><span>Size the task so exploration, implementation, testing, and reporting all finish before context quality materially declines.</span></div>

## Task sizing

- Break large goals into units that can complete within one strong context.
- Do not combine broad discovery, architecture design, implementation, migration, and QA in one request.
- A task boundary should correspond to a coherent behavior that can be tested and reviewed.

## System prompts and persistent instructions

- Permanent instructions consume context before useful work begins.
- Keep global files such as `CLAUDE.md` or agent rules concise and durable.
- Put specialized procedures in skills that can be loaded only when relevant.

## The session lifecycle

- A normal implementation session moves through **exploration → implementation → testing and feedback**.
- The full lifecycle should fit inside one context, including fixes caused by test failures.
- If exploration consumes most of the context, stop and hand a compact result to a fresh implementation session.

## Compaction versus clearing

- **Compaction** summarizes the conversation and continues with compressed accumulated history.
- **Clearing** starts from a clean context and reloads only the explicit artifacts needed for the next task.
- Clearing is safer when conversational history contains abandoned paths, repeated corrections, or obsolete assumptions.

<div className="topic-definition"><strong>Preferred state transfer</strong>Store durable decisions in PRDs, issues, code, tests, commits, and concise handoff notes. Do not rely on an indefinitely compacted chat as the project database.</div>

## Subagents

- A subagent gets an isolated context for a bounded exploration or implementation task.
- The parent receives a concise result instead of every intermediate token.
- Delegation protects the orchestrator’s context and allows specialization or parallel work.

## Failure signals

- The agent repeats questions or forgets earlier decisions.
- It modifies unrelated code or expands scope without justification.
- It stops using test output to guide changes.
- It produces generic explanations instead of repository-specific evidence.
