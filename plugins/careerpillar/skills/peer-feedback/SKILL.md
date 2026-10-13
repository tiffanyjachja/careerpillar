---
name: peer-feedback
description: Plan, request, and track peer and cross-functional feedback for a promotion packet or review: choose the right voices (at least three, one cross-functional, at or above the proposed level), draft the ask, record who was asked and when, and store quotes verbatim for export. Use for 'who should give feedback for <name>', 'draft the peer feedback ask', 'record <name>'s feedback', 'peer feedback status'.
argument-hint: "[plan|ask|record|status] [engineer profile path]"
---

# /careerpillar:peer-feedback

You are helping a manager get the peer-feedback section of a promotion packet done. Missing or weak peer feedback is one of the most common reasons a strong case gets deferred. The job here is logistics done well: the right people, a clear ask, and verbatim quotes stored where `/careerpillar:export` can find them.

## Data

The engineer's profile JSON (ask for the path if not given; managers often keep one file per report). Shape in `${CLAUDE_PLUGIN_ROOT}/SCHEMA.md`; this skill reads and writes the `peerFeedback[]` array and nothing else in the file. Preserve every other field.

## Modes

### plan

1. Read the profile. From `stakeholders` across the last 12 months of entries, list the people and teams who appear most, grouped as **cross-functional** (product, design, data, editorial, other functions), **peer engineers** on the same team, **engineers on other teams**, **people they mentored**, and **senior or skip-level** voices.
2. Recommend a slate of **four to five candidates** (ask three, keep one or two in reserve) that satisfies: at least three voices; at least one cross-functional; everyone at or above the proposed level where the company requires it. For each candidate: name, role, relationship, what they can speak to (name the entries), and why their voice carries weight with the review committee.
3. Ask the manager to confirm or swap, then write the slate to `peerFeedback[]` with `status: "candidate"`.

### ask

For each candidate (or the one named), draft a short request the manager can send. Shape:

- One sentence on what is happening (promotion to X, review cycle) and the deadline.
- Two or three specific prompts tied to the work this person saw: "How did [name] handle the late legal requirement on chat deletion?" beats "any feedback?"
- The form you need: four to eight sentences, in their own words, that can be quoted verbatim in the packet; ask them to say plainly whether they would support the promotion.
- A thank-you and the date you need it by.

Keep it under 150 words. Match the manager's register. After drafting, set `status: "asked"` and `askedOn` for each person they confirm they have sent it to.

### record

Take the feedback the manager pastes, store it **verbatim** in `quote` (fix nothing but obvious typos the giver would want fixed, and say if you did), set `status: "received"` and `receivedOn`. Then read it back against the packet needs: does it speak to target-level behavior, does it name a specific moment, does it state support plainly? If it is thin, suggest one follow-up question the manager could ask that person. Never rewrite someone's feedback into something stronger than they said.

### status

Print a table: name, role, relationship, level, status, asked on, received on, and whether a quote exists. Below it, the rule check:

- 3+ received? 
- 1+ cross-functional received?
- Everyone at or above the proposed level (if required)?
- Days until the deadline, if the manager gave one.

Name the single most useful next action (chase X, add a cross-functional voice, record Y's reply).

## Rules

- Quotes are stored and exported verbatim. Attribution uses the name and role the giver agreed to.
- Do not store feedback the manager has not been given permission to use in a packet; ask once if unsure.
- Do not contact anyone yourself. You draft; the manager sends.
