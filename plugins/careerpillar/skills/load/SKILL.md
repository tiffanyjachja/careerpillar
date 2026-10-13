---
name: load
description: Start or resume an engineering career-tracking session: load the profile JSON, show competency coverage and recent activity, and route to the next action. Use for 'load my tracker', 'where did I leave off', or at the start of a tracking session.
---

# /careerpillar:load

You are helping an engineer start or resume a tracking session.

## What this does
Bridges the session gap: loads their profile JSON, shows them where they left off, and routes them to the right next action.

## Step 1 — Find the profile
Check for `~/careerpillar-profile.json`. If it is missing but `~/eng-tracker-profile.json` exists (the project's previous name), use that file for the whole session and mention once that `mv ~/eng-tracker-profile.json ~/careerpillar-profile.json` makes the message go away.

If it exists:
- Load it
- Go to Step 2

If it doesn't exist:
- Tell them: "No profile found at ~/careerpillar-profile.json. Two ways to get started:
  1. Open app.html from the careerpillar repo in your browser, fill out the setup screen, then use the Export Profile button in the sidebar. Save it as ~/careerpillar-profile.json.
  2. Or tell me your name, track (IC or Manager), current level, and target level and I'll create the file for you right now."
- If they provide their info, create a valid profile JSON:
```json
{
  "profile": {
    "name": "<name>",
    "currentLevel": "<level>",
    "targetLevel": "<level>",
    "track": "<IC or Manager>"
  },
  "accomplishments": [],
  "customStakeholders": []
}
```
- Write it to `~/careerpillar-profile.json`
- Confirm it's ready and offer to log their first accomplishment

## Step 2 — Session summary
Once the profile is loaded, show:

```
Session loaded — {name}
{currentLevel} → {targetLevel} ({track} Track)

{total} accomplishments logged
Last entry: {date of most recent entry, or "none yet"}

Competency snapshot:
  {competency}: {count} entries — {STRONG/THIN/GAP}
  ...

Evidence: {n} entries with links · {n} with a metric · {n} with cross-team stakeholders
Direction: {careerDirection.archetype — hypothesis in one line | "not set — try /careerpillar:explore"}
Peer feedback: {received}/{3} received, {n} asked, {n} candidates   {only if peerFeedback has entries}

{If any GAPs}: You have {n} competency gaps toward {targetLevel}. Run /careerpillar:suggest for a focused action plan.
{If no entries in 30+ days}: No entries in the last 30 days — time to log something.
{If in good shape}: Looking solid. Run /careerpillar:suggest if you want a read on where to focus.
```

## Step 3 — Route them
Ask: "What do you want to do?"
- "log" or "add something" → walk them through /careerpillar:log flow
- "catch up", "import my PRs", or many months with no entries → /careerpillar:backfill
- "what kind of engineer", "which direction", "staff vs manager" → /careerpillar:explore
- "peer feedback", "who should I ask" (managers) → /careerpillar:peer-feedback
- "status" or "how am I doing" → run /careerpillar:status
- "export" or "generate my review" → run /careerpillar:export
- "suggest" or "what should I focus on" → run /careerpillar:suggest
- "nothing / just checking in" → confirm session is loaded and they're good to go

## Note on the shared file
`~/careerpillar-profile.json` is the same file the HTML tracker reads when you import a profile. Any changes made through the CLI skills are reflected in the visual dashboard when you import the file there, and vice versa.
