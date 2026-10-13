# Values explorer reference

Read by `/careerpillar:values` and by `/careerpillar:explore` when a values result exists. The dashboard's Explore page uses the same cards as data in `compass.js`; keep the two in step. If `~/careerpillar-values.md` exists, read it too and prefer its wording and any extra cards.

## Why values come before direction

Most career conversations start with the ladder: which level, which title, how fast. The people who end up in work they can sustain usually started somewhere else: with what they will not trade away. A direction chosen without naming your values tends to be someone else's direction, and you find out two years in.

The coaching stance behind this explorer, in the author's words: leadership is "anyone who holds themselves accountable for finding potential in people and processes." The explorer's job is to find the potential, not to grade the person. So:

- Lead with practical takeaways. Every value ends in a behavior you can check this month.
- Help people make the most of their strengths and their situation, including a situation that does not fit them. "Not here, not now" is an answer.
- No corporate language and no generic motivation. If a sentence could be on a poster, cut it.
- Ground it in real scenarios engineers face: the reorg, the stalled promo, the manager who takes credit, the week that was all meetings.
- Create space to reflect. The sort is slow on purpose. Do not rush someone to two.

## The sort

Thirty-five cards in seven clusters (the list is in `compass.js`, with a one-line "sounds like" and a "slipping" sign for each). The method is a narrowing sort, adapted from the exercise in Brené Brown's *Dare to Lead* (the list and the wording here are original; the idea of landing on two is hers).

1. **Everything that resonates.** No limit. Say the card names out loud if it helps; people hear their values before they read them.
2. **Narrow to ten.** "If you had to leave the rest behind, which ten would you keep?" Expect protest. That is the point.
3. **Narrow to five.** "These are the five a teammate would list if asked what you care about." Check it against reality: would they?
4. **Choose two core values.** "The two you would defend when they cost you something." Two is the number that still guides a decision. Five becomes a mood board.

Then three prompts that make the two usable:

- **What you do not tolerate.** Two or three things. People often find these first and faster than the values; the value is usually the mirror image. Someone who cannot stand being talked over holds *individuality* or *courage*. Someone who cannot stand credit going missing holds *credit* or *fairness*.
- **Living it.** For each core value, one specific behavior that shows you are living it this month. Not "be more honest": "I say the uncomfortable thing in the meeting, not in the DM afterward."
- **Slipping.** For each core value, the early sign you are trading it away. You notice before anyone else does. Write that sign down so the future you can see it.

## Reading the result against the tracker

If accomplishments exist, look for both directions:

- **Honored.** Entries where the work clearly expressed a core value. A *teaching* person with three mentoring entries; a *craft* person with a refactor they fought for. Name them.
- **Violated or absent.** A *community* person whose last ten entries are all solo. An *impact* person whose entries never name a beneficiary. Say it kindly and ask whether the value or the work has drifted.

Values do not map to competencies, and this explorer should not pretend they do. They map to *how* someone wants to do the work and *what they need from a team to keep doing it*. Those feed `/careerpillar:explore` (the shape of the role), `/careerpillar:suggest` (which gap to close first), and the Retention section of a promotion packet.

## Clusters, in one line each

| Cluster | What it is about | Cards |
|---|---|---|
| Growth | Getting better at things, on purpose | Learning, Mastery, Challenge, Curiosity, Ambition |
| Freedom | Room to decide how you work and who you are at work | Autonomy, Creativity, Flexibility, Variety, Individuality |
| Connection | Who you do it with | Community, Belonging, Loyalty, Kindness, Collaboration |
| Recognition | Being seen, and measured against something | Credit, Achievement, Influence, Excellence, Winning |
| Integrity | The lines you will not cross | Honesty, Fairness, Accountability, Courage, Humility |
| Purpose | Who is better off because the work happened | Impact, Service, Justice, Teaching, Legacy |
| Stability | Enough ground under your feet to do the rest | Security, Balance, Wellbeing, Order, Calm |

Recognition is in the list on purpose. Wanting credit, wanting to win, wanting a stage: these are values, not flaws, and people who hold them are told to hide them more often than any other cluster. Name them plainly.

## Saved shape

```jsonc
"careerDirection": {
  "values": {
    "top": ["learning", "autonomy", "credit", "community", "impact"],   // the five
    "core": ["credit", "community"],                                    // the two
    "notTolerated": "Being talked over. Artificial ceilings. False framing.",
    "living": { "credit": { "shows": "...", "slips": "..." }, "community": { "shows": "...", "slips": "..." } },
    "updatedAt": "2026-10-13"
  }
}
```

## Sources and standing

- Brené Brown, *Dare to Lead* (2018), the "living into our values" exercise: the two-value idea.
- Shalom Schwartz's work on basic human values informed the clustering, loosely. This list is not his instrument.
- This explorer is informal coaching material, not a validated assessment. Nothing here is affiliated with any commercial assessment product.
