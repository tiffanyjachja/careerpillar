# Career paths reference

Read by `/careerpillar:explore`. The dashboard's Explore page uses the same shapes as data in `paths.js`; keep the two in step. Paraphrased from public writing, with sources. This file describes shapes of senior and staff work; it is not a ladder and does not replace the competency matrix.

**Custom overlay.** If `~/careerpillar-paths.md` exists, read it as well and prefer its role definitions where they conflict; companies name these roles differently and some do not have all of them.

---

## Two things everyone here agrees on

1. **Senior is a real destination, not a waypoint.** Staying senior for a long career is a respectable, deliberate choice with real responsibility. (Orosz; Majors's "terminal level"; Larson's archetypes all sit above it.)
2. **What changes above senior is scope and horizon, not coding skill.** Senior works within a team on quarter-scale problems and decides what needs doing. Staff works across teams or an organization on multi-year horizons and makes other engineers more effective. (All four sources.)

## What "senior" means (Majors, Orosz)

- **Judgment:** decides what needs to be done and does it, instead of waiting to be told. Finishes projects cleanly so leadership trusts them with the critical work. Communicates difficulty, surprises, and progress before being asked.
- **Transferable, not local:** seniority is judgment that survives a change of team, stack, or company. Knowing every corner of one system after three years is familiarity, and from the inside it feels identical to seniority.
- **Breadth:** generalists level faster than specialists, unless the specialty is core to the company's mission. Breadth can come from changing jobs (Majors: roughly three jobs, two or three stacks, five to eight years) or from switching teams and stacks inside a large company at the same level (Orosz).

## The premature-senior trap (Majors)

Mechanics: stay in one place long enough to know everything; become the default person for architecture, mentoring, interviewing, and every decision; the calendar fills and hands-on work disappears; the influence feels like seniority, so leaving feels like a demotion; meanwhile the transferable skill is not growing and everyone else's growth is blocked by the one person who holds every decision.

Diagnostic questions:
- Is my influence a product of my judgment, or of being the only one who knows this system?
- Have I earned respect from scratch anywhere, without the context advantage?
- How many stacks, teams, and roles have I actually worked in?
- Is my calendar full because the work needs me, or because I have made myself the bottleneck?

## Oxygen: opportunity is structural (Majors)

A company needs few senior-plus ICs relative to headcount (her example: one or two principal-level engineers per several hundred engineers, but several managers and directors for the same headcount). An organization can be full at the level you want even when you deserve it. Promotion above senior usually takes more than one cycle and needs manager-chain support, peer sponsors, and some luck (Orosz).

Oxygen check:
- How many senior-plus engineers do I work with? How many people at my level are reaching for the same step?
- Does the ladder call for mentoring or leading small groups, and are there enough people to mentor?
- What does the business need most right now? Does it need more of the engineer I want to become, or more of the one I already am?

## Shapes of staff-level work (Larson's four archetypes)

Source: Will Larson, *Staff Engineer*, https://staffeng.com/guides/staff-archetypes/. Ladders describe populations, not people; one "Staff Engineer" rung hides several different jobs.

| Archetype | One line | The week | Where it exists | Tracker signals |
|---|---|---|---|---|
| **Tech Lead** | Guides the approach and execution of one team or a cluster of teams, usually paired with a manager | Scopes and sequences complex work, unblocks, holds the team's context, first call for the product partner when the roadmap moves; codes less over time and delegates big projects | Most common; the natural first step from senior; companies with a strong idea of "team" | Collaboration and Delivery entries about coordinating one team; product partner as a recurring stakeholder; entries about delegating or growing teammates; writing the team's technical vision |
| **Architect** | Owns direction, quality, and approach within one critical domain (APIs, storage, infrastructure, a core product system) | Keeps an intimate view of business needs, user goals, and technical constraints in the domain; authority earned through consistently good judgment over years | Larger companies; complex or tightly coupled codebases; the domain must be complex **and** enduringly central | Design & Architecture entries concentrated in one domain across many months; ADRs and design docs; other teams deferring to decisions without a reporting line |
| **Solver** | Digs deep into arbitrarily complex problems leadership has flagged and finds a path forward | Parachutes into a problem with an unclear approach or high execution risk, works until it is contained, hands off cleanly, moves to the next hotspot; little organizational maneuvering | Companies that plan around individuals rather than teams; large companies with their own technical debt | Delivery entries on leadership-flagged, unscoped problems; root-cause investigations across systems; hand-offs; entries hopping between unrelated areas |
| **Right Hand** | Extends an executive's attention, borrowing their scope and authority to run a complex organization | Sits in the leader's staff meeting; takes important problems off their plate; problems mix business, technology, people, culture, and process; delegates execution and moves on | Rarest; appears at hundreds to a thousand engineers; needs close alignment with the leader | Executive stakeholders; Process Improvement and Scope entries spanning people and process, not only code; work assigned by a leader rather than a roadmap |

Caveats from the source: Tech Lead and Architect are stable roles with a strong sense of team; Solver and Right Hand rotate through priorities and often have a limited sense of community. Performing an archetype's behaviors does not by itself make someone staff; that needs role, behavior, impact, and organizational recognition together. Which archetypes a company offers depends on its size and whether it plans around teams or individuals.

## Adjacent paths (Orosz)

- **Tech Lead (as a role, not the archetype):** still codes; leads technical and project work for a small team of about five; usually hires; usually does not performance-manage. A hybrid, not a half-step to management.
- **Engineering Manager:** codes very little; manages roughly six to twelve people; a return path to IC is usually available. Majors notes the management track has more roles per level, so leveling is often easier there, and tenure compounds a manager's effectiveness.
- **Stay senior:** carries real responsibility and pays about what frontline managers make; going higher adds stress and context switching without proportionate pay.
- **Move to find the work:** a late-stage growth company often has plenty of staff-level work and few staff-level candidates; moving between similar large companies raises pay but rarely title.

## Senior-level versions of the shapes

The archetypes are staff-level jobs, but the leanings show earlier. At the senior level they look like:

- **Toward Tech Lead:** you are the one scoping the team's hardest project, the product partner's first call, the person who divides work so others can own pieces.
- **Toward Architect:** you keep returning to one system, you write the design docs others build on, your decisions in that domain stick.
- **Toward Solver:** you get handed the ambiguous, risky problems; you root-cause across boundaries; you hand off and move on.
- **Toward Right Hand:** you are pulled into problems that are as much people and process as code; leaders bring you things that are not on any roadmap.
- **Breadth-builder (not an archetype):** you are deliberately changing stacks, teams, or domains to earn judgment that transfers. Majors and Orosz both treat this as the senior-level move that staff work later depends on.

## Sources

- Charity Majors, "Questionable Advice: The Trap of the Premature Senior" (2020), https://charity.wtf/p/questionable-advice-the-trap-of-the-premature-senior
- Charity Majors, "Useful Things to Know About Engineering Levels" (2020), https://charity.wtf/p/useful-things-to-know-about-engineering-levels
- Gergely Orosz, "Engineering Career Paths at Big Tech and Scaleups" (2021), https://newsletter.pragmaticengineer.com/p/engineering-career-paths (sections on company-type differences and post-staff paths are paywalled and not summarized here)
- Will Larson, "Staff archetypes," *Staff Engineer* (2021), https://staffeng.com/guides/staff-archetypes/
