---
title: Documentation, state, and knowledge decay
sidebar_label: Documentation lifecycle
description: Preserve useful decisions while preventing stale planning material from misleading future agents.
---

Documentation is active context. Old artifacts can be more damaging than missing artifacts when they confidently describe a system that no longer exists.

## Documentation rot

- Completed PRDs and plans may retain old names, structures, and constraints.
- Future agents can treat stale files as authoritative and conflict with current code.
- Close, archive, or remove planning artifacts when their operational purpose is complete.

## Durable project state

Prefer this hierarchy of truth:

1. Executable code and current tests.
2. Stable interfaces, schemas, and configuration.
3. Current issues and accepted decision records.
4. Active PRDs for unfinished destinations.
5. Conversation summaries and historical notes.

## Session handoffs

- Record what changed, what passed, what remains, and which decisions are still open.
- Link to durable artifacts instead of copying large histories into the next context.
- A handoff should help the next session start fresh rather than recreate the previous session.

## Close the loop

- Confirm code, tests, and user-facing behavior represent the final decision.
- Close implementation issues and document unresolved follow-up work separately.
- Remove obsolete plans or mark them clearly historical.
- Update durable operational documentation where ongoing behavior changed.

<div className="topic-definition"><strong>Knowledge principle</strong>Preserve decisions that constrain future work. Retire artifacts whose purpose was only to reach a completed decision.</div>
