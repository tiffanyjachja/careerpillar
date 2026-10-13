---
name: export
description: Generate a promotion packet, performance review, or self-review summary from the tracker profile, following a pluggable packet template and emitting a References section built from the evidence links. Use for 'draft my promo packet', 'write my perf review', 'summarize my accomplishments', 'export for the promo form'.
argument-hint: "[promo|perf|summary] [date range]"
---

# /careerpillar:export

You are generating a career document from an engineer's tracker data. The packet must survive a review committee that was not in the room: every claim names a project, a beneficiary, and, where one exists, a number, and every claim has a link behind it.

## Inputs

1. **Profile:** `~/careerpillar-profile.json`. Shape and v1→v2 rules are in `${CLAUDE_PLUGIN_ROOT}/SCHEMA.md`. If the file is missing, tell them to open `app.html` from the careerpillar repo, use **Export Profile**, save it as `~/careerpillar-profile.json`, then re-run.
2. **Matrix:** `~/careerpillar-matrix.json` if it exists, otherwise `${CLAUDE_PLUGIN_ROOT}/matrix.js` (`DEFAULT_MATRIX`). Quote target-level descriptors from it; do not invent level language.
3. **Packet template (promo only):** `~/careerpillar-packet-template.md` if it exists, otherwise `${CLAUDE_PLUGIN_ROOT}/packet-template.md`. The template defines the sections, their order, what to pull, and how to write each one. Follow it exactly; the company's form is the contract.

## Ask the user (only what the arguments did not give you)

1. Document type: **promo**, **perf**, or **summary**.
2. Date range (default: all entries; for promo, default to the last 12 months of `date` and mention older foundational work briefly).
3. Anything to emphasize or leave out.
4. For **promo** only: the organizational event the business justification should anchor on, and the manager's name. If they cannot give you an event, draft the rest and leave Business Justification as a short prompt list; never invent one.

## Before writing

- Build the evidence set: entries in range, each with `links[]` (map v1 `link` strings to `links` per SCHEMA.md).
- Group entries into **three to five themes** by system, surface, or responsibility (not by competency name). Themes are what packets and reviews are organized around; competencies are how the tracker is organized. Reuse theme names consistently across sections.
- Decide the level claim per entry: use `assessedLevel` when present, else `level`. Keep a list of entries whose self-assessed `level` is above `currentLevel` and lack `assessedLevel`; you will flag them at the end.
- Note where `impact` has no number and `metrics` is empty.
- If `careerDirection.values` or `careerDirection.strengths` exist, use the core values in Retention and the forward-looking close, and the strengths' *ask for* and *running hot* lines in Areas for Growth, only where entries support the claim. They are the engineer's own vocabulary, not assessment results; never present them as such.

## Formats

### promo (Promotion Packet)

Render every section in the packet template, in order, with its heading. Apply these rules on top of the template:

- **Readiness and Current Role** draw from the theme groups; cite project names, systems, and partner teams by name.
- **Expanded Scope** uses the bold **From X to Y.** lead-in shape and only transitions the entries support.
- **Areas for Growth** pairs each edge with the strength it comes from and one named example from the tracker. Pull candidates from the thinnest competencies at `targetLevel` and from stakeholder patterns.
- **Peer feedback** renders from `peerFeedback[]` exactly as the template says. Print the three-voice warning when the rule is not met. Never paraphrase or synthesize quotes.
- **References** lists every link used, grouped by theme, one line per entry with its date. If an entry has no link, list it with `[no link]` so the gap is visible.
- Where a claim has no number and the template section expects one, insert `[metric needed: what to measure]` inline.

### perf (Performance Review)

```
PERFORMANCE REVIEW — {name}
{currentLevel} | {date range}

OVERVIEW
[3–5 sentences: the most important thing they did, why it mattered, what was hard about the period, how they showed up. Sponsor voice.]

{For each theme:}
{THEME}
• {Past-tense verb} + {what} + {for whom / what changed} [{metric if any}] ({link labels})
• ...

GROWTH AREAS
[Two edges, each paired with the strength it grows from and one example of them already working on it. What the next level requires, quoted from the matrix.]

EXPECTATIONS — NEXT PERIOD
[3–4 bullets tying upcoming work to the growth areas. One DISCUSS: item that is an open question for the conversation.]
```

### summary (Self-review / 1:1 talking points)

```
{name} — {currentLevel} → {targetLevel}, {date range}

[4–6 sentences in first person. Top 2–3 accomplishments with specific impact and a number where one exists. Which competencies they cover. What I am focused on next, aligned with careerDirection if present.]
```

## Writing rules

- Past-tense action verbs. Third person for promo and perf, first person for summary.
- Every contribution connects to an outcome for someone: a team unblocked, a user problem removed, a cost or risk reduced, a roadmap item made possible.
- Acknowledge difficulty where the entries show it. "This codebase was mid-migration" is evidence of judgment, not an excuse.
- Name emotional intelligence and culture contributions explicitly when the entries show them (mentoring, unblocking others, running bug bashes, hosting forums). Reviewers look for them at every level.
- No corporate filler, no hedging, no praise without a named example.
- If `careerDirection` exists, let it inform Retention and the forward-looking close, and say so in one line.

## After generating

1. Output the document in a single code block so it pastes cleanly into the company form.
2. Then a short **Still needed** block, per the template: metrics needed, peer-feedback status against the three-voice rule, entries whose level needs manager confirmation, sections that could not be filled and what to log to fill them.
3. Offer to run `/careerpillar:peer-feedback` if peer feedback is short, and `/careerpillar:backfill` if the evidence set is thin on links or dates look like logging dates rather than work dates.
