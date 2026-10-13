# Profile schema (v2)

All skills read and write `~/careerpillar-profile.json`. This file is the single description of its shape. Skills link here instead of repeating it.

**Previous file names.** This project used to be called eng-tracker. If `~/careerpillar-profile.json` does not exist but `~/eng-tracker-profile.json` does, read and write the old file and tell the user once that they can rename it. The same rule applies to the override files: `~/eng-tracker-matrix.json`, `~/eng-tracker-packet-template.md`, and `~/eng-tracker-paths.md` are honored when the `careerpillar-` versions are absent.

**Compatibility rule:** files without `schemaVersion` are v1. Read them without complaint, apply the v1→v2 mapping below in memory, and write back v2 (set `schemaVersion: 2`). Never drop a field you do not understand; preserve it.

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
      "loggedAt": "2026-09-16",       // when this entry was written. Optional in v1 files.
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

      "links": [                      // evidence. Replaces the v1 string `link`.
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
    "updatedAt": "2026-10-13"
  },

  "customStakeholders": []            // dashboard convenience: extra stakeholder chips the user typed
}
```

## v1 → v2 mapping (apply in memory when reading a v1 file)

| v1 | v2 |
|---|---|
| `link: "https://..."` (string, may contain several URLs separated by spaces, commas, or newlines) | `links: [{url, label}]` — split on whitespace/commas, one object per URL, label from the URL path (e.g. `PR 3137`) |
| `date` | `date` (assume it is the work date), `loggedAt` absent |
| `level` | `level` (self-assessed). `assessedLevel` absent. |
| no `peerFeedback` | `[]` |
| no `careerDirection` | absent |

## Quality rules the skills enforce when writing entries

1. `date` is when the work landed. If the user is back-filling, ask for or derive the real date (PR merge date, launch date). Never default to today.
2. `title` starts with a verb in past tense, third person, no "I". Bad: "I unblock release launches." Good: "Unblocked release launches by owning the bug-bash and ship calls".
3. `impact` names a beneficiary (team, users, business) and, where one exists, a number. If no number exists, say so in `metrics` rather than leaving the reader to wonder.
4. `stakeholders` is never empty. If the work was truly solo with no consumer, write `["self"]` so the scope check reads it as solo on purpose.
5. `links` holds every piece of evidence as its own object. Evidence is what makes a packet survive review.
6. `level` is what the engineer believes. Skills and managers write `assessedLevel` separately and never overwrite `level`.
