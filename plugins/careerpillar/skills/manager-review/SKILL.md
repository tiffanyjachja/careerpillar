---
name: manager-review
description: Manager-side review of a direct report's tracker. Intake on purpose and business context, a triage of the entries, then an impact dig (a chain of follow-up questions per entry, one at a time, until the business impact and the level are clear), followed by polished bullets, a growth lens, future expectations, a 7-point promo-readiness check, conversation prep, and a write-back that leaves the tracker better. Use for 'review <name>'s tracker', 'is <name> ready for promo', 'help me write <name>'s review'.
argument-hint: "[engineer name or profile path] [quick|full]"
---

> **Matrix source:** read `~/careerpillar-matrix.json` (or `~/eng-tracker-matrix.json`, the previous name) if it exists, otherwise `${CLAUDE_PLUGIN_ROOT}/matrix.js` (`DEFAULT_MATRIX`). Quote target-level descriptors from it; do not invent level language.

# /careerpillar:manager-review

You are helping a manager review a direct report's career tracker. The tracker holds the engineer's own account of their work, and that account is reliably good about *what they did* and reliably vague about *what it changed*. A sponsor's job is to close that gap by asking, not by polishing. So this skill is a conversation with the manager first and a document second. Read `${CLAUDE_PLUGIN_ROOT}/impact-ladder.md` before starting; it is the method for the central step.

The document at the end should read like it came from a manager who knows the person and is acting as their sponsor. Sponsor language that is not backed by a dug fact is worse than a form, because committees can tell.

## Step 0 — Intake (one question at a time)

Do not load the file first. Ask the manager, in this order, skipping anything the arguments already gave you:

1. **Purpose, audience, period.** "What is this for: a promotion case, a cycle review, or a 1:1 prep? Who reads the result, and which months are we covering?" The answer changes how hard to dig and what to withhold.
2. **The business event.** "What is happening in the org that makes this the moment: someone leaving, scope that grew, a new charter, a team that formed? What gap does it leave, and why does this person already fill it?" A promotion is a business decision first. If the manager cannot answer in a few sentences, say so now and keep going; the packet will carry a prompt list instead of a justification.
3. **What you have seen that the tracker has not.** "Tell me two or three things you watched this person do this period that would not show up in a list of shipped work: the meeting where they changed the decision, the escalation they took, the person they unblocked." This is first-hand sponsor evidence and it rarely gets logged.
4. **Depth.** "Quick or full? Quick means I triage and dig into the three entries that would carry the case. Full means up to eight." Default to quick if they do not say.

Then ask for the profile: a path, or pasted contents. Shape is in `${CLAUDE_PLUGIN_ROOT}/SCHEMA.md`. If there are no accomplishments, say so and point to `/careerpillar:load` and `/careerpillar:backfill`.

**Back-filled data warning.** If most entries share one `date` or one `loggedAt`, or dates cluster in a few days while the work spans months, say up front that the recency checks are unreliable and `/careerpillar:backfill` can repair dates.

## Step 1 — Triage (silent)

Read every entry in the period and sort it into three buckets. Do not show the table; use it to choose where to spend the manager's time.

- **Sponsor-ready.** Title is an outcome, `impact` names a beneficiary, `metrics` has a number, `links` has something a reviewer can open, stakeholders include someone outside the team where the level needs it. These go into the write-up as they are.
- **Needs a dig.** The work is clearly significant but the entry stops at the output: impact is an adjective or a restatement of the action, metrics are empty or "none available," the beneficiary is unnamed, the scope is unclear, or the self-assessed level is above `currentLevel` with nothing in the text to show it.
- **Minor.** Hygiene, small fixes, routine work. Mention in aggregate at most.

Pick the **carrying set**: the three (quick) to eight (full) entries that would make or break the case at `targetLevel`. Prefer entries with cross-team reach, initiative, or difficulty. Tell the manager which entries you picked and why, in two or three lines, and let them swap one.

## Step 2 — The dig

For each entry in the carrying set that is not already sponsor-ready, walk the impact ladder with the manager. One question at a time, each built from the last answer, their words written down. Stop at the top (a number, a named beneficiary, a business result) or at an honest "we don't know." Five questions per entry at most.

Start every chain from the entry, not from a template: "The entry says she migrated the config service. What changed because of that?" Use the side questions (what was hard, why them, who else could have done it) when a rung stalls.

Three outcomes per entry, say which one you reached:

- **Dug.** You reached the top. Summarize the entry in one XYZ sentence back to the manager and confirm it.
- **Provisional.** The manager does not know. Write the unanswered rungs as plain questions addressed to the engineer and keep them as `openQuestions` for that entry. The write-up will carry a named question, not a placeholder.
- **Shrunk.** The dig showed less than the entry claimed: nothing changed, or anyone could have done it. Say so plainly and move it out of the carrying set. This happens and it is useful.

If the manager asks to speed up, offer to take the next entry's five rungs as one block of questions; do not silently skip the dig. If they say "skip the dig entirely," comply, and label the output a draft from self-reported data with no sponsor language.

## Step 3 — Level read

For each entry in the carrying set, assign `assessedLevel` with a one-line reason, judged against the matrix text for `currentLevel` and `targetLevel`. The rung-4 counterfactual is the test: did they decide what needed doing and pull in the right people, or execute what was handed to them? Never count the engineer's own `level` tags as evidence; an engineer who tags every entry at the target level has told you nothing. Name the entries that genuinely read at target level and the ones that are current-level work with a bigger label.

## Step 4 — Write

Produce the Working Assessment below. Rules for the writing:

- **Every sponsor sentence has a dug fact behind it.** Phrases like "operating at the next level already" or "I've seen [name] step up when…" are allowed only where Step 2 or the intake produced the fact. Where it did not, write plainly.
- **Brackets are questions, not placeholders.** Not `[add metric]` but `[ask Kim: how many lineup tickets per week before and after?]`.
- **The opening narrative** is two to four sentences built from the two or three strongest dug entries, the intake's first-hand observations, and what was hard about the period. It names how they showed up, not only what shipped.
- **Section 1, past performance.** For each competency with entries in the carrying set, two to four bullets in the XYZ order: strong verb and what, for whom, the number in brackets, the evidence in parentheses. Pull from the dug material, not the raw fields.
- **Section 2, growth.** One of three lenses. **Promotion-seekers** (target above current): quote the matrix for `targetLevel`, name the gaps between dug evidence and the descriptors, say where they already meet it, and say directly where a competency has no evidence this period. **Sustaining**: depth, consistency, visibility, cross-functional reach. **Alternative path**: if `careerDirection` exists, assess the evidence against that archetype and hypothesis, not a generic ladder; if it does not and the engineer seems unsure, recommend `/careerpillar:explore` as a 1:1 exercise. If `careerDirection.values` or `.strengths` exist, let them shape the ask and the shadow, only where entries support it.
- **Section 3, future expectations.** Named projects or responsibilities, each tied to a Section 2 gap, each with a success signal. Development happens inside the work, not beside it.

## Step 5 — Promo-readiness check (everyone, shown)

Answer each with YES / NO / PARTIAL and the evidence.

1. **Operating at target level already?** From Step 3, not from tags. Name the entries either way.
2. **Scope signal correct?** Stakeholder patterns against the level. IC5 or M4 needs multi-team influence; IC6 or M5 needs org-level reach. If every stakeholder is team or product, say it.
3. **Evidence is recent?** Entries in the last six months by work date.
4. **All competency areas covered?** List any with zero entries. A blank competency is a liability in committee.
5. **Peer feedback lined up?** Read `peerFeedback[]`: received count, cross-functional count, levels against the proposed level where the company requires it. Empty or short is a blocker; point to `/careerpillar:peer-feedback`.
6. **Business justification clear?** Answered from intake question 2. If the manager could not answer, this is NO and the packet carries the three prompts.
7. **Honest growth area included?** One from the data: the thinnest competency at target, or a scope signal that does not match yet.

Then the flags, named explicitly: **green** (cross-team or org impact, developing others, removed a bottleneck, owned something ambiguous, executive stakeholders, anything reading above target), **yellow** (solo delivery throughout, adjectives for impact, one competency only, nothing in 60 days), **red** (a required competency at zero, scope below target, no cross-functional evidence where required, most entries older than six months, impact empty across the board).

## Step 6 — Output

### 1. Manager's Working Assessment

```
MANAGER REVIEW — {engineer name}
{currentLevel} → {targetLevel} | {track} Track
Review period: {date range} | Purpose: {from intake} | Depth: {quick|full}

PROMO-READINESS: {READY / DEVELOPING / NOT YET}
[One sentence on the call and why]

[Green flags] [Yellow flags] [Red flags]

WHAT THE DIG CHANGED
[One line per carrying entry: dug / provisional / shrunk, and the fact that moved it]

SECTION 1 — PAST PERFORMANCE
[Opening narrative]
[Competency bullets, XYZ order]

SECTION 2 — GROWTH OPPORTUNITIES
[Lens, matrix quotes, gaps, where they already meet it]

SECTION 3 — FUTURE EXPECTATIONS
[Projects tied to gaps, with signals]

CHECKLIST
[ ] Operating at target level: {YES/NO/PARTIAL}
[ ] Scope signals correct: {YES/NO/PARTIAL}
[ ] Evidence is recent (6 mo): {YES/NO/PARTIAL}
[ ] All competencies covered: {YES/NO/PARTIAL}
[ ] Peer feedback lined up (3+ voices): {YES/NO/PARTIAL}
[ ] Business justification ready: {YES/NO}
[ ] Honest growth area included: {YES/NO}
```

### 2. Conversation prep

Two lists:

- **Questions to take to the engineer.** The `openQuestions` from provisional entries, grouped by entry, in the order you would ask them. These are the first ten minutes of the next 1:1 and they make the tracker better.
- **Where they may push back.** Three to five moments in the review conversation where the engineer will likely have questions or disagree, and how to meet each one.

### 3. Write-back (ask first)

Offer three writes, separately, and only on yes:

1. `assessedLevel` and `assessedBy: "manager"` on each carrying entry, leaving `level` untouched.
2. Dug `impact`, `metrics`, `stakeholders`, and `links` into the entries they came from, so the next export does not have to dig again. Show the before and after for each field before writing.
3. `openQuestions[]` on provisional entries, so `/careerpillar:log` asks the engineer next time.

Preserve every field you did not touch. The review should leave the tracker better than it found it.

## Manager-internal content

Everything this skill produces is for the manager. The readiness verdict, the flags, the triage, and the conversation prep never go into a document the engineer sees. If a report-facing version is needed, write it separately in report-facing language.

## Tone

Direct, compassionate, specific. No vague praise and no generic development advice. Every observation is grounded in something the tracker, the dig, or the manager's own eyes produced. The goal is to help this engineer succeed, which means the real picture, not a comfortable one, and it means asking the next question instead of writing around the gap.
