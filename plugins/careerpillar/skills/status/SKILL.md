---
name: status
description: Show competency coverage and gap analysis toward the target level from the tracker profile, with the matrix descriptor for each competency. Use for 'how am I tracking', 'show my coverage', 'what are my gaps'.
---

# /careerpillar:status

You are showing an engineer a snapshot of their career tracking progress toward their target level.

## Data file
Read `~/careerpillar-profile.json`. If it doesn't exist, tell them to open `app.html` from the careerpillar repo in a browser, use **Export Profile**, and save the file as `~/careerpillar-profile.json`.

## What to show

### Header
```
{name} — {currentLevel} → {targetLevel} ({track} Track)
{total accomplishments} entries  |  {date range of entries}
```

### Competency Coverage
For each competency category relevant to their track, show:
- Count of accomplishments mapped to it
- Status: STRONG (3+) / THIN (1-2) / GAP (0)
- The exact target-level descriptor from the matrix (so they know what "good" looks like)

### Gap Analysis
List competencies with GAP or THIN status. For each:
- What the target level requires (from the matrix descriptors below)
- What kinds of work would fill this gap
- Specific, actionable suggestion based on their role

### Recent Activity
Last 3 entries with date, title, and competency tags.

### Momentum
- Entries in the last 30 days and the last 90 days, by `date` (the work date; see `${CLAUDE_PLUGIN_ROOT}/SCHEMA.md`)
- If no entries in 30 days: flag it — "No entries in the last 30 days. Promo cases need recent evidence."
- If most entries share one `date` or a few days, say the data looks back-filled and recency cannot be read from it; suggest `/careerpillar:backfill` to repair dates from PR history.

### Scope signal
Read `stakeholders` across entries. Count entries with cross-team or executive stakeholders versus team-only versus empty. Where the matrix's `targetLevel` descriptors call for influence beyond one team, that is the question the committee asks; quote the descriptor and say plainly whether the data shows it. If stakeholders are empty on many entries, the field needs filling before any scope claim can be made.

### Evidence quality
- Entries with at least one link, and the total link count
- Entries whose `impact` or `metrics` contain a number
- Entries whose `level` is above `currentLevel` and have no `assessedLevel` (self-assessed only)

### Direction
If `careerDirection` exists, show the archetype and the next experiment with its due date. If not, one line: "No career direction set. `/careerpillar:explore` helps you decide what kind of {targetLevel} engineer you want to be."

## Competency matrix (target level reference)

The matrix is **not** embedded here. Resolve it in this order:

1. If `~/careerpillar-matrix.json` (or `~/eng-tracker-matrix.json`, the previous name) exists, read it and use it. This is how a company plugs in its own leveling matrix (same shape as the default; see below). Tell the user once that you are using their custom matrix.
2. Otherwise read the default from `${CLAUDE_PLUGIN_ROOT}/matrix.js` (the `DEFAULT_MATRIX` object). If that path is unavailable, look for `matrix.js` next to this skill's plugin root.

Shape: `{ IC: { <Competency>: { <Level>: "<descriptor>" } }, Manager: { ... } }`. Level keys are whatever the loaded matrix defines (the default ships IC2–IC8 and M3–M6; a company matrix may use its own keys and `levelNames` for titles). Read the keys from the file; never assume them. Competency names must match the ones used in the profile's `competencies` arrays.

For each competency, quote the descriptor for the user's **target level** verbatim so they know what "good" looks like, and use the descriptor for their **current level** to judge whether an entry is really target-level work or current-level work with a bigger label.

## Tone
Direct. No filler. Treat the engineer as a peer. Flag gaps plainly — don't soften it. If they're doing well, say so specifically.
