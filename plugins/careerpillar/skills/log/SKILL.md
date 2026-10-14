---
name: log
description: Log one accomplishment into the career tracker conversationally, with the work date, an action-verb title, named beneficiaries, a number or an explicit "no metric", stakeholders, evidence links, and a level mapped against the matrix. Use for 'log an accomplishment', 'add this to my tracker', 'I shipped X', 'record this win'.
argument-hint: "[short description of the accomplishment]"
---

# /careerpillar:log

You are helping an engineer log one accomplishment into their career tracker. A good entry is one a promotion reviewer could verify without talking to anyone. Every entry reads as one sentence: **accomplished X, as measured by Y, by doing Z** (title, metrics, action). A plugin hook checks the file on save and hands back anything that breaks the shape; fix it rather than working around it.

## Data file

`~/careerpillar-profile.json`. Shape and quality rules are in `${CLAUDE_PLUGIN_ROOT}/SCHEMA.md`; read it before writing. If the profile does not exist, tell the user to open `app.html` from the careerpillar repo, use **Export Profile**, save it as `~/careerpillar-profile.json`, then re-run. If they want to back-fill history rather than log one item, point them to `/careerpillar:backfill`.

## Matrix

`~/careerpillar-matrix.json` (or `~/eng-tracker-matrix.json`, the previous name) if it exists, otherwise `${CLAUDE_PLUGIN_ROOT}/matrix.js` (`DEFAULT_MATRIX`). Show the target-level descriptor for each competency the user picks.

## How to run the conversation

Ask one or two things at a time. Infer everything you can from what they already said, from the links they paste, and from the profile. Only ask for what is missing. If they paste a PR or issue URL and a GitHub or issue-tracker tool is available, read it and pre-fill title, date, action, and reviewers.

Collect, in this order:

1. **What happened** in their words. From it, draft a **title**: past-tense verb, third person, no "I", under 90 characters, names the system or surface. Show the draft and let them adjust.
2. **When it landed.** The `date` is the merge, ship, launch, or presentation date, not today. If they are logging something from weeks ago, ask for the real date or derive it from the link. For long efforts also capture `period.start`/`period.end`.
3. **Impact**, with a beneficiary and a number. Climb the first three rungs of `${CLAUDE_PLUGIN_ROOT}/impact-ladder.md`, one question at a time, each built from the last answer: what changed because of it; who noticed and what did they do differently; how do you know. Stop when you have a beneficiary and a number, or when the honest answer is that nothing was measured; then record `metrics: ["none available"]` so the gap is explicit rather than silent. Do not lead and do not invent a number. If the entry already has `openQuestions` from a manager review, ask those first.
4. **Stakeholders.** Never empty. Ask for the people, roles, or teams involved or affected. Call out cross-team and executive stakeholders explicitly, because the scope check reads this field. If the work truly had no consumer, record `["self"]`.
5. **Competencies** from the matrix for their track. Suggest a mapping from what they described; confirm.
6. **Level.** Suggest a level by comparing their description with the matrix text for `currentLevel` and `targetLevel`. Say which descriptor it matches and why. If it reads above or below where they want to tag it, say so plainly, then record what they choose in `level` (this is their self-assessment; `assessedLevel` is written by managers and `/careerpillar:manager-review`, not here).
7. **Links.** One object per piece of evidence: PRs, issues, docs, ADRs, demo recordings, retro notes, messages with praise. Ask for them if none were given; evidence is what makes a packet survive review.
8. **Tags.** Optional. Suggest tags from systems named. Use `ai` for AI-literacy or AI-adoption evidence (harness work, reviewer agents, evaluation, upskilling peers).

## Write the entry

Build the object in the v2 shape from SCHEMA.md:

```json
{
  "id": "<8 random alphanumerics>",
  "date": "<YYYY-MM-DD when the work landed>",
  "loggedAt": "<today>",
  "period": { "start": "...", "end": "..." },
  "title": "...",
  "action": "...",
  "impact": "...",
  "metrics": ["..."],
  "competencies": ["..."],
  "level": "...",
  "stakeholders": ["..."],
  "links": [{ "url": "...", "label": "..." }],
  "tags": ["..."]
}
```

Omit `period` if not applicable. Then:

1. Read the current file, add the entry to `accomplishments`, set `schemaVersion: 2`, and write the file back. Preserve every field you did not touch.
2. Confirm with: the title and competencies; how many entries they now have in each mapped competency and whether this fills a GAP, thickens a THIN, or adds to a STRONG area toward `targetLevel`; one specific sentence of encouragement that references the actual work.
3. If `careerDirection` exists in the profile, say in one line whether this entry is evidence for that path.

## Level signals (summary only; the matrix file is canonical)

- IC3: the goal is clear, the approach is not; team-scoped.
- IC4: finds root causes, breaks work down, turns requirements into results; influence within the team.
- IC5: architecture decisions, multi-team impact, removes bottlenecks, weighs short- against long-term.
- IC6: cross-team or org-level strategy; turns ambiguity into a coherent plan; frames impact in business terms.
- IC7: org-level clarity; handles escalations; simplifies large systems.
- M3: team execution; technical lead; accountability; engineering roadmap.
- M4: multi-team coordination; design reviews; measurable technical excellence.
- M5: org-wide strategy; organization-level decisions; succession planning.
