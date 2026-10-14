# Profile schema

All skills read and write `~/careerpillar-profile.json`. This file is the single description of its shape. Skills link here instead of repeating it.

**Previous file names.** This project used to be called eng-tracker. If `~/careerpillar-profile.json` does not exist but `~/eng-tracker-profile.json` does, read and write the old file and tell the user once that they can rename it. The same rule applies to the override files: `~/eng-tracker-matrix.json`, `~/eng-tracker-packet-template.md`, and `~/eng-tracker-paths.md` are honored when the `careerpillar-` versions are absent.

**Version field:** `schemaVersion` is `2` and is written on every save. Treat a file without it as current. Never drop a field you do not understand; preserve it.

```jsonc
{
  "schemaVersion": 2,
  "profile": {
    "name": "Ada Lovelace",
    "currentLevel": "IC4",          // a level key from the matrix
    "targetLevel": "IC5",
    "track": "IC",                  // "IC" | "Manager"
    "role": "Backend engineer, Payments",   // optional, free text
    "team": "Platform",                // optional
    "manager": "Grace Hopper"               // optional
  },

  "accomplishments": [
    {
      "id": "k3j9x2ab",               // 8 random alphanumerics
      "date": "2026-08-14",           // when the work LANDED (merged, shipped, presented). Not when it was logged.
      "loggedAt": "2026-09-16",       // when this entry was written. Optional.
      "period": { "start": "2026-06-01", "end": "2026-08-14" },   // optional, for multi-month work

      "title": "Shipped reviewed, auditable config publishing for the checkout service",
                                      // action-verb phrase, third person, no "I", <= 90 chars
      "action": "What they did, in enough detail that a reviewer who was not there understands the problem and the approach.",
      "impact": "What changed for users, partner teams, or the business. Name the team or metric.",
      "metrics": ["admin publishes no longer need an app release", "crash-free 99.2% -> 99.6%"],
                                      // optional. Short strings with numbers or a concrete before/after.
                                      // If no number exists, skills may record "none available" so the gap is explicit.

      "competencies": ["Delivery", "Process Improvement"],   // keys from the matrix for this track
      "level": "IC4",                 // the level the ENGINEER believes this maps to (self-assessed)
      "assessedLevel": "IC4",         // optional. The level a manager or skill assigned against the matrix text.
      "assessedBy": "manager",        // optional. "manager" | "skill" | "self"

      "stakeholders": ["Product Owner", "Games team (cross-team)", "Editorial"],
                                      // who was involved or affected. Include cross-team and executive stakeholders
                                      // explicitly; the scope-signal check reads this field.

      "links": [                      // evidence. One object per link.
        { "url": "https://github.com/org/repo/pull/3137", "label": "PR 3137 config editor" },
        { "url": "https://linear.app/org/issue/PAY-311", "label": "approved proposal" }
      ],

      "tags": ["games", "admin-tooling", "ai"]
                                      // free text. Convention: tag "ai" for AI-literacy / AI-adoption evidence
                                      // (tool use, harness work, reviewer agents, upskilling peers).
    }
  ],

  "peerFeedback": [                   // promotion / review feedback tracking. Written by /careerpillar:peer-feedback.
    {
      "name": "Sam Rivera",
      "role": "Product manager, Checkout",
      "relationship": "cross-functional",   // "cross-functional" | "peer" | "mentee" | "senior" | "skip-level"
      "level": "IC5",                       // their level if known; packets usually require >= proposed level
      "status": "received",                 // "candidate" | "asked" | "received" | "declined"
      "askedOn": "2026-09-20",
      "receivedOn": "2026-10-01",
      "quote": "Verbatim feedback, or empty until received."
    }
  ],

  "careerDirection": {                // written by /careerpillar:explore. Optional.
    "archetype": "Architect",         // see explore skill: Tech Lead | Architect | Solver | Right Hand | Manager | Undecided
    "hypothesis": "One paragraph, in the engineer's words, about the kind of senior/staff engineer they want to become.",
    "meaning": "What that path looks like concretely at their target level: the work, the week, who they influence.",
    "experiments": [
      { "what": "Lead the design review for the feed data layer", "by": "2026-12-15", "signal": "Two teams adopt the pattern" }
    ],
    "reflections": { "energy": "...", "week": "...", "influence": "...", "alternatives": "...", "oxygen": "...", "trap": "..." },
                                      // optional. Answers to the six Explore prompts, in the engineer's words. Written by the dashboard.
    "values": { "top": ["learning", "autonomy", "credit", "community", "impact"], "core": ["credit", "community"],
                "notTolerated": "Being talked over. Artificial ceilings.", "living": { "credit": { "shows": "...", "slips": "..." } },
                "stages": {}, "updatedAt": "2026-10-13" },
                                      // optional. Written by /careerpillar:values and the dashboard. Ids are from compass.js VALUES.
                                      // `stages` is the dashboard's working state for the sort; preserve it, do not interpret it.
    "strengths": { "picked": ["starter", "finisher", "spotlight", "contender", "improviser"], "notes": { "starter": "their story" }, "updatedAt": "2026-10-13" },
                                      // optional. Written by /careerpillar:strengths and the dashboard. Ids are from compass.js STRENGTHS.
                                      // An informal vocabulary, not assessment results. Never present it as such.
    "updatedAt": "2026-10-13"
  },

  "customStakeholders": []            // dashboard convenience: extra stakeholder chips the user typed
}
```

## The shape of an entry

Every entry should read as one sentence in the XYZ form: **accomplished X, as measured by Y, by doing Z.** The form comes from résumé writing (Laszlo Bock popularized it at Google), and it survives promotion committees for the same reason it survives recruiters: it forces an outcome, a number, and a method into the same breath.

The fields carry the three parts:

| Part | Field | Rule |
|---|---|---|
| **X**, what was accomplished | `title` | Past-tense verb first, third person, no "I", under 90 characters, names the system or surface |
| **Y**, as measured by | `metrics[]` | At least one item. A number, a before/after, or the literal `"none available"` so the gap is visible |
| **Z**, by doing | `action` | Two to four sentences on what was done and what was hard |
| who was better off | `impact` | Names a beneficiary (team, users, business) and what changed for them |

Worked example, as one sentence and as fields:

> Cut inbox notification lag from 12 to 30 minutes to under one minute for large broadcasts (Y), by raising the writer Lambda's memory and concurrency and adding a duplicate-send guard (Z).

```jsonc
{ "title": "Cut inbox notification lag for large broadcasts",
  "metrics": ["12 to 30 min lag → under 1 min"],
  "action": "Found the inbox writer Lambda hitting its 128 MB limit at 10 concurrent S3 writes during large sends. Raised memory and concurrency, added a duplicate-send guard in shadow mode, and verified on the next broadcast.",
  "impact": "Users see breaking-news pushes in their inbox when they arrive, not half an hour later. Editorial stopped filing lag reports." }
```

Bullets in exported documents are rendered in the same order: verb and what, for whom, the number in brackets, the evidence in parentheses.

## Enforcement

The plugin ships a hook (`hooks/hooks.json`) that runs `scripts/check-profile.js` whenever the profile file is written or edited from Claude Code. A write that breaks a rule is blocked and the problems are handed back, so the entry gets fixed instead of saved. Warnings (a metric with no number, evidence that is only a Slack DM) are reported but do not block.

The same checker runs by hand or in CI:

```bash
node plugins/careerpillar/scripts/check-profile.js ~/careerpillar-profile.json
```

Exit code 0 is clean, 2 means violations, 1 means it could not run. The rules it enforces are the ones below.

## Quality rules the skills enforce when writing entries

1. `date` is when the work landed. If the user is back-filling, ask for or derive the real date (PR merge date, launch date). Never default to today.
2. `title` starts with a verb in past tense, third person, no "I". Bad: "I unblock release launches." Good: "Unblocked release launches by owning the bug-bash and ship calls".
3. `impact` names a beneficiary (team, users, business) and, where one exists, a number. If no number exists, say so in `metrics` rather than leaving the reader to wonder.
4. `stakeholders` is never empty. If the work was truly solo with no consumer, write `["self"]` so the scope check reads it as solo on purpose.
5. `links` holds every piece of evidence as its own object. Evidence is what makes a packet survive review.
6. `level` is what the engineer believes. Skills and managers write `assessedLevel` separately and never overwrite `level`.
