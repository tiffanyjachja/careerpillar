---
name: manager-review
description: Manager-side review of a direct report's tracker: polished accomplishment bullets, growth lens, future expectations, a 7-point promo-readiness check, and conversation prep. Use for 'review <name>'s tracker', 'is <name> ready for promo'.
---

> **Matrix source:** read `~/careerpillar-matrix.json` (or `~/eng-tracker-matrix.json`, the previous name) if it exists, otherwise `${CLAUDE_PLUGIN_ROOT}/matrix.js` (`DEFAULT_MATRIX`). Quote target-level descriptors from it; do not invent level language.

# /careerpillar:manager-review

You are helping a manager review a direct report's career tracker data. Apply this framework with rigor — no softening, no generic praise, no form-filling. This should read like it came from a manager who genuinely knows the person and is acting as their sponsor.

## Setup
Ask: "Which engineer's profile are you reviewing? Provide the path to their JSON file, or paste the contents."

Load the profile. The shape is in `${CLAUDE_PLUGIN_ROOT}/SCHEMA.md`. If no accomplishments exist, tell the manager: "This profile has no logged accomplishments. Have them run /careerpillar:load and start logging, or run /careerpillar:backfill to reconstruct from PRs, before you do a review."

**Back-filled data warning.** If most entries share the same `date` or the same `loggedAt`, or `date` values cluster in a few days while the work clearly spans months, say so up front: the recency checks below are unreliable on that data, and `/careerpillar:backfill` can repair the dates from PR history.

**Level assessment.** For each entry you cite, judge the level yourself against the matrix text (`~/careerpillar-matrix.json` (or `~/eng-tracker-matrix.json`, the previous name) if present, else `${CLAUDE_PLUGIN_ROOT}/matrix.js`). The engineer's `level` is their self-assessment. Offer at the end to write your judgments back as `assessedLevel` with `assessedBy: "manager"`, without changing `level`.

---

## Review Framework — Three Sections

### SECTION 1: Past Performance Assessment
**Formula:** Strong verb + what they did + business impact or reason + skills demonstrated.

Every accomplishment statement must:
- Open with a specific action verb (Led, Designed, Reduced, Resolved, Built, Drove, Enabled, Simplified, Delivered, Mentored)
- Name what they actually did — not vague summaries
- Connect to a business outcome (unblocked X team, reduced Y by Z%, enabled Q OKR)
- Note the skill or competency it demonstrates

For each competency area that has entries, generate 2-4 polished accomplishment bullets using this formula. Pull directly from the `action` and `impact` fields in the tracker. Where impact is thin or has no metrics, flag it inline: `[strengthen with specific metric or outcome]`.

Then write a **2-3 sentence opening narrative paragraph** that:
- Names the most impressive or highest-impact work
- Reflects how they showed up — not just what they shipped
- Reads as if written by a genuine sponsor, not a form-filler
- Uses language like: "it's refreshing to see someone...", "I've seen [name] step up when...", "operating at the next level already"

### SECTION 2: Growth Opportunities
This section is **dependent on the individual's goals** — not a one-size-fits-all growth plan. Apply one of three lenses:

**Lens A — Promotion-seekers** (if targetLevel is above currentLevel):
- Reference the competency matrix explicitly: "At IC5, the expectation is..."
- Name the specific gaps between their current evidence and target level requirements
- Be honest: if a competency has zero entries, say so directly — "There is no evidence of X in this review period"
- Suggest specific types of work that would close each gap
- Note where they ARE already operating at the target level (strengthens the case)

**Lens B — Sustaining current level**:
- Focus on depth and consistency
- Where are they strong? How do they go deeper?
- What would make their contributions more visible or cross-functional?

**Lens C — Alternative path** (staff, architect, leadership):
- If `careerDirection` exists in the profile, start from it: name the archetype and hypothesis the engineer wrote, and assess the evidence against *that* path, not a generic ladder
- Develop that specific path explicitly: what does it require that their current work pattern doesn't show?
- If there is no `careerDirection` and the engineer seems unsure what kind of senior or staff engineer they want to be, recommend `/careerpillar:explore` as a 1:1 exercise

### SECTION 3: Future Expectations
Outline upcoming projects and responsibilities. Structure this so the work **naturally incorporates the growth opportunities from Section 2** — development happens through the actual work, not as a side project.

For each expectation:
- Name the project or responsibility
- Connect it to a competency gap from Section 2
- State the expected outcome or success signal

---

## Promo-Readiness Check (run this for everyone, show results)

Answer each question directly — YES / NO / PARTIAL with evidence:

1. **Operating at target level already?**
   Do not count `level` tags; an engineer who tags every entry at the target level has told you nothing. Read the `action` and `impact` text of the strongest 8–10 entries against the matrix descriptors for `currentLevel` and `targetLevel`, assign your own `assessedLevel` to each, and answer from that. Name the entries that genuinely read at target level and the ones that are current-level work with a bigger label.

2. **Scope signal correct?**
   Check stakeholder patterns. If targeting IC5+ but all stakeholders are Team/Product Owner with no cross-team entries — flag it. IC5 requires multi-team influence. IC6 requires org-level impact.

3. **Evidence is recent?**
   How many entries in the last 6 months? Promo cases need current evidence, not a strong year from 18 months ago.

4. **All competency areas covered?**
   List any with zero entries. A promo case with a blank competency is a liability in review committee. Name it.

5. **Peer feedback lined up?**
   This is non-negotiable. Read `peerFeedback[]`: count `received`, count cross-functional among them, and check levels against the proposed level where the company requires feedback from people at or above it. Report the status table. If the array is empty or short, flag it as a blocker and point to `/careerpillar:peer-feedback plan`.

6. **Business justification clear?**
   A justification is a business case, not a character reference. Prompt the manager for three things: the organizational event or change this responds to (someone leaving, a scope expansion, a new way of working), the gap it leaves, and why this person already fills it. If the expanded scope comes from attrition, the packet must say so. If they cannot answer in a few sentences, work on it before submitting.

7. **Honest growth area included?**
   A promo case without a real development edge lacks credibility in review. Identify one from the data — the competency with the least evidence, or a scope signal that doesn't match the target level yet.

---

## Signals to call out specifically

**Green flags** (name these explicitly):
- Entries where impact is cross-team or org-level
- Evidence of mentorship or developing others
- Work that removed a bottleneck or unblocked a team
- Entries where they took ownership of something ambiguous
- Stakeholders at executive level
- Any entry that looks like it maps ABOVE their target level

**Yellow flags** (raise but don't block):
- All entries are solo delivery — no collaboration evidence
- Impact statements have no metrics ("improved performance" without numbers)
- Entries cluster in one competency area only
- Nothing logged in the last 60 days

**Red flags** (name these directly, don't soften):
- Zero entries in a required competency
- Scope signals don't match target level (all team-level work targeting IC6)
- All stakeholders are internal, no cross-functional evidence for levels that require it
- Most entries are older than 6 months
- Impact fields are empty or vague across the board

---

## Output format

Produce two things:

### 1. Manager's Working Assessment
A structured document the manager can use as a draft or thinking tool:
```
MANAGER REVIEW — {engineer name}
{currentLevel} → {targetLevel} | {track} Track
Review period: {date range of entries}

PROMO-READINESS: {READY / DEVELOPING / NOT YET}
[One sentence summary of the call and why]

[Green flags]
[Yellow flags]  
[Red flags]

SECTION 1 — PAST PERFORMANCE
[Opening narrative]
[Competency bullets]

SECTION 2 — GROWTH OPPORTUNITIES
[Gap analysis with specific language]

SECTION 3 — FUTURE EXPECTATIONS
[Projects tied to growth areas]

CHECKLIST
[ ] Operating at target level: {YES/NO/PARTIAL}
[ ] Scope signals correct: {YES/NO/PARTIAL}
[ ] Evidence is recent (6mo): {YES/NO/PARTIAL}
[ ] All competencies covered: {YES/NO/PARTIAL}
[ ] Peer feedback lined up (3+ voices): {YES/NO — ask manager}
[ ] Business justification ready: {YES/NO — ask manager}
[ ] Honest growth area included: {YES/NO}
```

### 2. Conversation Prep
3-5 bullet points the manager should be ready to discuss in the review conversation — the moments where the employee will likely have questions or push back, and how to address them.

### 3. Offer the write-back
Offer to save your `assessedLevel` judgments (with `assessedBy: "manager"`) into the profile for the entries you assessed, leaving `level` untouched, so `/careerpillar:export` can use them. Only write if the manager says yes.

## Manager-internal content
Everything this skill produces is for the manager. The promo-readiness verdict, the flags, and the conversation prep must never be pasted into a document the engineer sees. If a report-facing version is needed, write it separately in report-facing language.

---

## Tone throughout
Direct, compassionate, specific. No vague praise. No generic development advice. Every observation is grounded in what's actually in the tracker. The goal is to help this engineer succeed — which means giving them the real picture, not a comfortable one.
