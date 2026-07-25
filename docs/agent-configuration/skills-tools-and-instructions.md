---
title: Skills, tools, and instruction design
sidebar_label: Skills and tools
description: Separate what an agent can do from the reusable procedures that govern how it does the work.
---

A capable agent needs both **tools** and **operating procedures**. Conflating them makes behavior harder to inspect and improve.

## Skills

- A skill is a small, reusable procedure for a defined workflow such as creating a PRD, converting it into issues, or reviewing a change.
- Skills should be narrow enough to test, edit, and invoke independently.
- Tune the skill when the agent asks too much, stops too early, or applies the procedure inconsistently.

## Tools versus skills

- **Tools** provide capabilities: read files, edit code, run a shell, search a repository, execute tests, or use a browser.
- **Skills** provide sequence, decision rules, quality standards, and stop conditions.
- Adding tools does not repair weak alignment, missing tests, or poor architecture.

| Layer | Question it answers | Example |
|---|---|---|
| Tool | What can the agent do? | Run tests |
| Skill | How should it do the work? | Use red → green → refactor |
| Specification | What outcome is required? | Users can recover an account |
| Feedback loop | How will correctness be observed? | Integration tests and manual QA |

## Push versus pull instructions

- **Push** durable, universal constraints into every relevant context.
- **Pull** specialized guidance only when a task needs it.
- Push standards into reviewers when compliance must be checked explicitly, even if implementers pulled them on demand.

<div className="decision-rule"><b>Push</b><span>Security constraints, repository invariants, required commands, and non-negotiable definition-of-done rules.</span></div>
<div className="decision-rule"><b>Pull</b><span>Framework conventions, specialized planning procedures, migration recipes, and infrequent domain guidance.</span></div>

## Own the planning stack

- Prefer prompts, skills, and workflows that the team can read and modify.
- Opaque orchestration layers make failures difficult to diagnose and can invert control.
- The human should understand why the workflow selected a task, which context it loaded, and what ends the loop.

## Minimal skill anatomy

1. **Trigger:** when it should run.
2. **Inputs:** artifacts and context it requires.
3. **Procedure:** ordered steps and decisions.
4. **Outputs:** exact artifacts it must create.
5. **Checks:** validation before completion.
6. **Stop condition:** how it reports success, uncertainty, or no eligible work.
