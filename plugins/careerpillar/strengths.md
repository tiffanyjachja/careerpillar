# Working strengths reference

Read by `/careerpillar:strengths` and by `/careerpillar:explore` when a strengths result exists. The dashboard's Explore page uses the same patterns as data in `compass.js`; keep the two in step. If `~/careerpillar-strengths.md` exists, read it too and prefer its wording.

## Standing, first

This is an informal, plain-language set of twenty working patterns in four families, written for this project. It is not a validated psychometric instrument, it has no norming data, and it is not affiliated with, derived from, or a substitute for any commercial strengths assessment (including Gallup's CliftonStrengths, which is a registered trademark of Gallup, Inc.). If someone has taken a formal assessment, let them map their results onto these patterns themselves; do not do it for them and do not claim equivalence.

What it is for: giving an engineer and their manager a shared vocabulary for what the person is like at their best, what it looks like overused, and what to ask for. That is enough to change a 1:1.

## The stance

Strengths-based coaching, in the sense the author practices it: start from what already works and build the role around it, instead of starting from the gap and sanding the person down to fit the role. Three rules that follow:

1. **Every strength has a shadow.** The overused column is not a weakness list; it is the same trait with the volume too high. A Starter who starts too much is still a Starter. Coach the volume, not the trait.
2. **Strengths need an ask.** Each pattern ends with *what to ask for*: the condition under which it does its best work. A person who knows their asks can negotiate a role. A manager who knows them can design one.
3. **Growth usually comes through a strength, not around it.** When someone needs to develop organized follow-through, a Rallier gets there by making follow-through a visible team commitment, not by becoming a Planner.

## Picking five

Five, not three and not ten. Fewer than five and people pick the flattering ones. More and nothing stands out. Three tests, from the kind of questions a coach asks:

- When you do this, you lose track of time.
- People ask you for this without being told you are good at it.
- You were doing some version of it long before anyone paid you to.

Ask for a story with each pick. "Give me a time last quarter when this was the thing that made the difference." If there is no story, it may be an aspiration rather than a strength; that is useful to know too.

## The twenty patterns

Full text (at best, overused, what to ask for, tracker keywords) is in `compass.js`. In one line each:

**Drive. Getting things done.**
- **Starter**: gets things moving when nobody else will.
- **Finisher**: needs visible progress most days, and gets it.
- **Planner**: sees the sequence and puts it in order.
- **Keeper**: does what they said they would, every time.
- **Fixer**: restores what is broken, calmly.

**Influence. Moving people.**
- **Rallier**: brings energy into a room and people follow it.
- **Persuader**: makes the case and changes minds.
- **Contender**: measures against others and wants to come out ahead.
- **Spotlight**: wants the work to matter and to be seen mattering.
- **Narrator**: explains complicated things so people act on them.

**Connection. Holding people together.**
- **Host**: makes people feel they belong here.
- **Coach**: sees what someone could become and helps them get there.
- **Peacemaker**: finds the agreement hiding inside the argument.
- **Reader**: reads the room and the person in it.
- **Ally**: builds a few deep, durable relationships and shows up for them.

**Insight. Making sense of things.**
- **Pathfinder**: sees several routes to the goal and picks one fast.
- **Analyst**: wants the evidence before the opinion.
- **Collector**: gathers context, background, and the full picture before acting.
- **Inventor**: makes new things, and new connections between old ones.
- **Improviser**: takes the day as it comes and still lands it.

## Combinations worth naming

Pairs change each other. When two picks interact, say so:

- **Starter + Finisher**: starts things *and* follows through. Rare, and an edge in any lead or manager role. Watch for taking on too much because both halves say yes.
- **Spotlight + Contender**: motivated by excellence, not just competence; explains a speaking, writing, or certification habit. Watch for psychological safety when the scoreboard leaks into how the team is treated.
- **Improviser** with any three Drive or Influence patterns: the pressure valve. Without it the top four run hot.
- **Coach + Analyst**: the manager who can show a report their growth in numbers. Watch for judging people by output alone.
- **Collector + Pathfinder**: gathers the full picture, then picks the route. Watch for the picture never being full enough.
- **Keeper + Peacemaker**: the person everyone trusts with the hard cross-team commitment. Watch for carrying commitments others dropped.

## Reading the result against the tracker

`compass.js` carries keywords per pattern. The dashboard counts how many entries read as each pattern; the skill should do the same read, roughly, from titles and actions. Use it as a conversation starter, not a verdict:

- **Picks the log supports.** "You picked Fixer, and six of your entries are root-cause work. That is a strength with receipts."
- **Picks the log does not show yet.** "You picked Coach, and no entry mentions mentoring. Either the work is not getting logged, or the strength is not getting used. Which?"
- **Patterns the log shows that you did not pick.** "You did not pick Narrator, but four entries are docs people still link. Worth a look."

Then connect to the shape: Starter and Pathfinder lean toward the Solver and Tech Lead archetypes; Coach and Host toward management or Tech Lead; Analyst and Inventor toward Architect; Peacemaker and Reader toward Right Hand. These are leans, not rules, and `/careerpillar:explore` makes the actual call with the person.

## Saved shape

```jsonc
"careerDirection": {
  "strengths": {
    "picked": ["starter", "finisher", "spotlight", "contender", "improviser"],
    "notes": { "starter": "the story, in their words", "finisher": "..." },
    "updatedAt": "2026-10-13"
  }
}
```

## Sources and standing

- The strengths-based stance draws on the broad positive-psychology tradition (Peterson and Seligman's character-strengths work, and the general practice of strengths-based coaching). The taxonomy, names, and descriptions here are original to this project.
- Not affiliated with Gallup, Inc. or CliftonStrengths. Not a validated instrument.
