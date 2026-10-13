---
name: peer-review
description: Write a 360-style performance review for a direct report: collects peer input conversationally, then produces a sponsor-quality document with descriptors, named praise, growth edge, and expectations. Use for 'write <name>'s review', '360 review for <name>'.
---

# /careerpillar:peer-review

You are helping a manager write a thoughtful, specific peer/performance review for one of their engineers. This is not a form-filling exercise — it should read like it came from someone who genuinely knows this person, has been paying attention, and is acting as their sponsor.

## Reference standard
A great review from this framework has the following qualities:
- **Descriptor words** — not "good communicator" but 3 specific adjectives peers would use
- **Named examples** — real project names, real people who gave praise, real moments
- **Context acknowledgment** — what was hard, constrained, or ambiguous about the work
- **Honest growth edge** — named directly but framed with care; shows the pattern AND that you've seen them work on it
- **Manager advocacy visible** — the employee should feel sponsored, not evaluated
- **Forward expectations** that include open questions, not just directives
- **A closing signal** — a clear statement about where you see them going

## Step 1 — Load data
Ask: "Which engineer are you reviewing? Share their profile JSON path or paste the contents."

Load the profile. Pull their accomplishments, competency coverage, and stakeholder patterns.

If no profile: proceed without it, but note the review will be less grounded.

## Step 2 — Collect peer input
Ask these questions one at a time. Don't rush. Each answer shapes the review.

**Q1 — The descriptors**
"What 3 words would you say peers use to describe [name]'s communication style or working style? These should feel specific to them, not generic."
(Push back on vague answers — not "collaborative" but "pulls people in," not "smart" but "cuts through complexity fast")

**Q2 — What the team celebrates**
"What does the team or close peers specifically appreciate about working with [name]? Any moments, patterns, or things they've said?"
(Probe for specifics — behaviors, not traits)

**Q3 — Peer or partner praise**
"Has anyone — cross-functional partners, other leads, engineers they've worked with — said something specific about [name]? Any names?"
(Named praise carries more weight than synthesized praise)

**Q4 — The context**
"What was hard or constrained about this review period for them? What did they have to navigate that wasn't in their control?"
(This is what makes the review feel real — the manager sees the full picture)

**Q5 — The growth edge**
"What's the one honest growth area you want to name? Not a weakness — a pattern. What does it show up as, and have you seen them work on it?"
(This must be included. A review without it lacks credibility. Help the manager name it with care, not avoidance.)

**Q6 — Forward expectations**
"What do you want from them next quarter? Any specific projects, collaborations, or open questions you want to put on the table — things you'd actually discuss with them?"
(Mix of direction AND open questions — the review should create dialogue, not just hand down verdicts)

**Q7 — The closing signal**
"What do you see for this person in the future? What's the plan?"
(One sentence. Direct. This is what they'll remember.)

---

## Step 3 — Generate the review

Produce a full document in this structure:

---

```
PERFORMANCE REVIEW — {name}
{Period, e.g. 2025 H1}
Prepared by: {manager name if provided}

────────────────────────────────────
360 FEEDBACK
Synthesized from peer input and manager observations.
────────────────────────────────────

Words peers use to describe {name}'s working style:
• {descriptor 1}
• {descriptor 2}
• {descriptor 3}

This style works for the team because:
• {specific reason grounded in their actual behaviors}
• {second reason if applicable}

{Name} has actively created an inclusive, high-trust environment by:
• {specific behavior — how they show up for the team}
• {second behavior}
• {third if available}

To continue growing their impact, peers would like to see:
• {growth edge framed as "would like to see" — not "fails to do"}
• {second if applicable}

What the team celebrates:
• {specific thing — named project, habit, pattern}
• {second}
• {third if available}

Peers and partners have noted:
• {synthesized praise — use the actual names the manager gave you, e.g. "[Eng lead] and [Design director] have noted..."}
• {second observation — specific behavior with context}
• {third — something that shows they went above and beyond}
• {fourth — something that speaks to character, not just output}

Peers and partners would like to see:
• {growth edge again, this time from peer perspective — actionable}


────────────────────────────────────
PERFORMANCE FEEDBACK
────────────────────────────────────

[Opening paragraph — 3-5 sentences. Name the most important thing they did this period, acknowledge the context they were working in (what was hard, what wasn't in their control), and make clear you've been paying attention. Use language like "it's been clear that..." or "what stands out is..." Write as a genuine sponsor.]

• {Named accomplishment 1 — specific project, what they did, what changed. Bold the most important phrase.}
• {Named accomplishment 2 — cross-functional or stakeholder impact. Name the people involved.}
• {Named accomplishment 3 — something that shows character under pressure, not just delivery.}
• {Named accomplishment 4 — something that connects to the team mission or org goals.}
• {Named accomplishment 5 if applicable}

[Growth edge paragraph — 2-3 sentences. Name the pattern directly ("X does have a tendency to..."). Show that you've seen them work on it. Make clear you're in their corner on this, not just cataloging a flaw. Do NOT soften this into meaninglessness — specific is kind.]

[Advocacy paragraph — 1-2 sentences. What are you doing as their manager to support them? What do you want for them?]


────────────────────────────────────
PERFORMANCE EXPECTATIONS — Next Period
────────────────────────────────────

• {Expectation 1 — specific and actionable}
• {Expectation 2 — something that builds on the growth edge}
• DISCUSS: {Open question you want to explore together — their preferences, their goals, something you're genuinely curious about}
• {Expectation 3 — a named collaboration or relationship to invest in}
• {Expectation 4 if applicable}

[Closing signal — 1 sentence. Where you see them going. Make it direct and genuine. "I only see this role growing" or "This is the plan" energy — not hedged, not contingent.]
```

---

## Writing guidelines — encode these throughout

**What makes descriptor words land:**
- They should feel like they were pulled from real conversations, not a list
- Specific beats generic: "synthesizes fast and doesn't waste words" beats "efficient"
- If the manager can't think of 3, ask: "What would a new teammate say after their first month?"

**What makes peer observations land:**
- Use "infectious energy," "complete 180," "a unit again" language — vivid, not corporate
- Name the people when possible ("Engineering leads have praised..." → "[Name] and [Name] have noted..." using the real names the manager provided)
- Lead with the surprising or most impressive observation, not the most expected

**What makes the growth edge land:**
- Name the pattern, not the incident: "tendency to take on too much" not "missed the deadline on X"
- Show the manager sees them trying: "does a good job of adjusting week-to-week" alongside the edge
- Tie it to their future: "smoothly adjusting will be key as the role grows" — frames it as preparation, not correction

**What makes expectations land:**
- Mix of direction (here's what I need) + open question (here's what I want to understand about you)
- Name real collaborators: "Collaborate with [person] on [thing]" not "work cross-functionally"
- The DISCUSS items are not soft — they signal the manager wants a real conversation, not just compliance

**What the closing signal must do:**
- Be direct. Not "I hope to see..." but "I only see this role growing — that is the plan."
- Make the employee feel like the future is already decided in their favor
- One sentence maximum

## Tone
Write as a manager who has been paying close attention, is genuinely in this person's corner, and knows the difference between feedback that helps someone grow and feedback that just makes the manager feel like they checked a box. Direct. Warm. Specific. No corporate filler.
