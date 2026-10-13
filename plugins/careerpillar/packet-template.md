# Promotion packet template (default)

`/careerpillar:export promo` renders the sections below, in order. Each section has the question it must answer, what to pull from the tracker, and how to write it.

**Custom template.** If `~/careerpillar-packet-template.md` exists, use it instead of this file. Companies usually have their own promotion form; copy its section headings and prompts into that file and keep this one as the fallback. Do not put a company's template into a public repo.

**Tracker fields referenced below** are defined in `SCHEMA.md`.

---

## 0. Header

`{Name} — Promotion Request: {currentLevel} → {targetLevel}`
`Date: {today} · Author: {manager name, or "[manager]"}`

## 1. Business Justification

**Answers:** Why should this be reviewed now, and what business problem does it address? Is there a gap or unmet need on the team this promotion fills? How does it connect to the team or org strategy and roadmap? Why is this the right time? If the expanded scope comes from attrition, say so.

**Pull from tracker:** `profile.team`, `profile.role`, recent entries with cross-team or executive `stakeholders`, entries tagged with strategic programs.

**Write it as:** three or four short paragraphs. Anchor on a concrete organizational event or change (a senior person leaving, a team's scope expanding into a new surface, a new way of working the team is adopting). Then the gap it leaves, then why this person already fills it, then why now. This is a business case, not a character reference. If the manager has not given you the organizational event, ask for it before drafting; do not invent one.

## 2. Employee Readiness

**Answers:** Is the candidate already performing at the next level? How does their performance connect to OKRs and roadmap impact?

**Pull from tracker:** entries where `assessedLevel` (or `level`) is at or above `targetLevel`; the matrix descriptors for `targetLevel`.

**Write it as:** open with one sentence stating they are already operating at the target level. Then two or three paragraphs grouped by theme (not by competency name). Each theme names the systems or projects, what they built or decided, and what it changed for the business. Quote the matrix descriptor only where it sharpens the point. Where impact lacks a number, insert `[metric needed: ...]` inline so the manager sees it. End with a sentence that ties the pattern to the target-level descriptor.

## 3. Current Role and Responsibilities

**Answers:** What do they own today? Current projects and strategic goals.

**Pull from tracker:** the last 6 months of entries; `profile.role`; recurring `tags` and `stakeholders`.

**Write it as:** one framing sentence about their position on the team, then four to six responsibility bullets. Each bullet is an ongoing responsibility, not a one-time achievement, and names the surface or system. Include operational responsibilities (on-call, release management, incident response) if the entries show them.

## 4. Expanded Scope

**Answers:** What increased responsibilities does this promotion reflect?

**Pull from tracker:** compare entries older than 9 months with the last 6 months: new systems owned, new stakeholder types, new kinds of work (design ownership, cross-team coordination, mentoring).

**Write it as:** three to five bullets, each with a bold **From X to Y.** lead-in followed by one or two sentences of evidence. Examples of the shape: "From features to surface ownership.", "From using tools to owning the team's tools.", "From team contributor to cross-functional point of contact.", "From implementer to technical design owner." Only use transitions the tracker actually supports.

## 5. Retention Beyond Promotion

**Answers:** What else is being done, outside this promotion, to keep this person engaged and growing?

**Pull from tracker:** `careerDirection` if present (archetype, hypothesis, experiments); growth-area signals; the engineer's stated interests.

**Write it as:** two to four short paragraphs. Concrete commitments: the kind of work they will be given, forums they will lead, domains they will learn, mentoring relationships. If `careerDirection` exists, align this section with it explicitly. Avoid "continue to support their growth" with nothing behind it.

## 6. AI Literacy & Adoption (include when the company asks for it, or when entries tagged `ai` exist)

**Answers:** How does this person engage with AI tools and evolving capabilities relevant to their role? Hands-on use, advocating adoption, responsible-use practices, upskilling peers. Calibrate to the level: a senior engineer is not expected to set organization-wide AI policy.

**Pull from tracker:** entries tagged `ai`; harness, reviewer-agent, evaluation, or tooling work; sessions they hosted.

**Write it as:** two to four paragraphs with bold lead-ins where helpful, moving from personal use, to making AI output verifiable, to helping others adopt it. Close with one sentence stating what is and is not expected at this level so the reviewer does not over-read the claim.

## 7. Areas for Growth

**Answers:** Where can this person continue to develop, regardless of the promotion?

**Pull from tracker:** competencies with the thinnest evidence at `targetLevel`; scope signals below target; the manager's own observations.

**Write it as:** two or three growth areas, each as a bold lead-in phrase plus a short paragraph. Pair every edge with the strength it grows out of and cite one named example from the tracker where they have already started working on it. Frame as scaling strengths into broader, more ambiguous, more cross-functional work. A packet with no honest growth area lacks credibility; a packet whose growth areas are disguised praise also lacks credibility.

## 8. Peer & Cross-Functional Feedback

**Answers:** Feedback from at least three people. At least one cross-functional partner (product, design, data). Feedback should come from people at or above the proposed level.

**Pull from tracker:** `peerFeedback[]`.

**Write it as:** for each entry with `status: received`, a sub-heading `Feedback from {name}, {role}` and the quote verbatim. For entries with `status: asked` or `candidate`, render the sub-heading with `[pending — asked {askedOn}]`. If fewer than three received, or none cross-functional, or anyone below the proposed level, print a one-line warning above the section. Never synthesize or paraphrase feedback that was not given.

## 9. References

**Answers:** Evidence for every claim above.

**Pull from tracker:** all `links` from the entries used, grouped by the themes used in sections 2 and 3.

**Write it as:** a `### {theme}` heading per group, then one line per entry: `{label or title}: {link labels as inline links}, ({date})`. Note any access requirements once at the top (for example, "GitHub links need organization access"). Include links to retro notes, demo recordings, and messages where available; they are what make the claims checkable.

---

## After rendering

List, in a short block the manager can act on:

- Metrics still needed (every `[metric needed]` you inserted)
- Peer feedback status versus the three-voice rule
- Entries you used whose `level` was self-assessed above `currentLevel` with no `assessedLevel` (the manager should confirm them)
- Any section you could not fill from the tracker and what to log to fill it
