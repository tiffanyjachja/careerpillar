# The impact ladder

Read by `/careerpillar:manager-review`, `/careerpillar:log`, and `/careerpillar:peer-review`. If `~/careerpillar-impact-ladder.md` exists, read it too and prefer its wording.

## Why this exists

A tracker entry is the engineer's own compressed account of their work. It is usually accurate about *what they did* and vague about *what it changed*. "Migrated the config service to the new platform" is an output. A promotion committee, a skip-level, or a sponsor needs the outcome: what is different now, for whom, by how much, and what it made possible. Nobody writes that down unprompted, because from the inside the impact feels obvious.

So the sponsor's job is to ask. Not once ("any metrics?") but in a chain, where each answer sets up the next question, the way "five whys" walks from a symptom to a root cause. This ladder walks from an output to a business result. It usually takes three to five questions. It is the single most valuable thing a manager does for a report's career, and it is the step every review tool skips.

## The rungs

Ask one at a time, in the person's words, and build the next question from the last answer. Stop when you reach the top or hit an honest "we don't know."

| Rung | Question | What it produces |
|---|---|---|
| 0 | **What did you do?** | The output. Usually already in `action`. Do not spend time here. |
| 1 | **What changed because of it?** What is true now that was not true before? | The outcome. Separates activity from effect. |
| 2 | **Who noticed, and what did they do differently?** | The beneficiary and a behavior change. Feeds `stakeholders` and `impact`. |
| 3 | **How do you know?** What would you point a skeptic at? | The evidence: a number, a before/after, a quote, a dashboard, a doc. Feeds `metrics` and `links`. |
| 4 | **What would have happened without it?** Or if someone else had done it? | The counterfactual. This is the level signal: did they decide what needed doing, or execute what was handed to them? Feeds `assessedLevel`. |
| 5 | **What did it make possible next?** | The compounding result: a roadmap item unblocked, an OKR moved, a cost or risk gone. The business-outcome sentence a packet needs. |

Three side questions, used when a rung stalls:

- **What was hard about it?** Difficulty is evidence of judgment. "The codebase was mid-migration" belongs in the write-up.
- **Why you?** Were they asked, or did they see it? Initiative is a senior signal at every level.
- **Who else could have done this?** If the answer is "anyone on the team," the scope claim should shrink. If it is "nobody else had the context," ask whether that is expertise or a bottleneck.

## Rules

1. **One question at a time.** The chain only works if each question is built from the previous answer. Asking all five at once produces five shallow answers.
2. **Their words, not yours.** Do not lead: "so it saved time?" is a leading question. "What changed?" is not. Write the answer down the way they said it.
3. **Stop at the top or at the truth.** The top is a number, a named beneficiary, and a business result. The truth is "we did not measure it" or "nothing would have been different." Record either. Never fill a gap with a plausible number.
4. **Five questions, then move on.** If five rungs did not reach the top, the entry is provisional. Mark what is missing and keep going; do not grind.
5. **Activity is not impact.** "Ran twelve meetings," "wrote the design doc," "reviewed forty PRs" are rung 0. Ask rung 1.
6. **Adjectives are not evidence.** "Improved reliability," "much faster," "better experience" get rung 3 immediately.
7. **The counterfactual decides the level.** Two engineers can ship the same feature. The one who saw it was needed, scoped it, and pulled in the right teams is operating a level above the one who was handed the ticket. Rung 4 is where that shows.

## Hand-off

Rungs the manager cannot answer become questions for the engineer. Write them into the entry as `openQuestions[]` (see SCHEMA.md). `/careerpillar:log` asks them the next time the engineer touches the entry, and they make a good first ten minutes of a 1:1. The review should leave the tracker better than it found it.

## An example

Entry as logged: *"Migrated the lineup config service to the new platform."* Action: three sentences about the migration. Impact: "Service is now on the new platform." Metrics: empty.

> **What changed because of it?** Editors can publish lineup changes without an app release.
> **Who noticed, and what did they do differently?** The editorial desk. They stopped filing tickets for lineup changes and started doing them directly. Product stopped scheduling releases around editorial.
> **How do you know?** Lineup tickets went from about eight a week to zero. There is a Linear filter for it.
> **What would have happened without it?** We would have kept shipping an app release every time editorial wanted a change, which is why the migration was on the roadmap for two quarters and nobody picked it up. She proposed doing it before the EOL deadline instead of after.
> **What did it make possible next?** The admin tooling for midterms is built on the same config service. Without this it would have been built on the legacy one and migrated again.

Entry after the dig: title *"Moved lineup publishing off app releases by migrating the config service ahead of EOL."* Impact names editorial and product. Metrics: "lineup tickets ~8/week → 0." Stakeholders gain the editorial desk and product. Links gain the Linear filter. `assessedLevel` reasoning: proposed the sequencing, cross-team beneficiaries, unblocked a roadmap item, which reads a level above "completed a migration."

Five questions. That is the difference between a bullet a committee skims and one it remembers.

## In the writing

- Rung 1 and 2 answers become `impact`.
- Rung 3 answers become `metrics` and `links`.
- Rung 4 answers inform `assessedLevel` and the narrative's "how they showed up" sentences.
- Rung 5 answers become the business-outcome clause in packet bullets and the Business Justification section.
- Side-question answers become the context sentences a sponsor writes and a form-filler omits.
