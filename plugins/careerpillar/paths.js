// Career shapes used by the dashboard's Explore page.
// Prose version with sources for the Claude skills: paths.md (same folder).
// Keep the two in step when editing definitions.
//
// Each shape: id, name, kind, oneLine, week, where, notMeans[], seniorVersion,
// primaryCompetency (used to quote the matrix at target level),
// and scoring hints: keywords (matched in title/action/impact/tags),
// competencies {name: weight}, stakeholders {team|product|crossTeam|exec: weight}.

const PATHS = [
  {
    id: 'tech-lead', name: 'Tech Lead', kind: 'archetype',
    oneLine: 'Guides the approach and execution of one team or a cluster of teams, usually paired with a manager.',
    week: 'Scopes and sequences the team’s complex work, unblocks people, holds the team’s context, and is the product partner’s first call when the roadmap moves. Codes less over time and delegates the big projects.',
    where: 'The most common shape and the natural first step from senior. Appears early at companies with a strong idea of "team".',
    notMeans: ['Not a half-step into management: no performance reviews, no hiring ownership.', 'Not the person who writes the most code. Over time you write less of it.', 'Not permanent authority: it is paired with a manager and a team, and it moves when they do.'],
    seniorVersion: 'You are already the one scoping the team’s hardest project, dividing the work so others can own pieces, and the product partner’s first call.',
    primaryCompetency: 'Collaboration & Citizenship',
    keywords: ['coordinat', 'scoped', 'scoping', 'sequenc', 'unblock', 'roadmap', 'planning', 'divided the work', 'delegat', 'tech lead', 'led the team', 'kickoff', 'standup', 'retro', 'release management', 'ship call', 'bug bash'],
    competencies: { 'Collaboration & Citizenship': 1.5, 'Delivery': 1, 'Scope': 0.5, 'Team Building': 1.5 },
    stakeholders: { product: 1.5, team: 0.75, crossTeam: 0.75, exec: 0 }
  },
  {
    id: 'architect', name: 'Architect', kind: 'archetype',
    oneLine: 'Owns direction, quality, and approach within one critical domain over years.',
    week: 'Keeps an intimate view of business needs, user goals, and technical constraints inside the domain. Writes and reviews the designs others build on. Authority is earned through consistently good judgment, not a reporting line.',
    where: 'Larger companies, complex or tightly coupled systems, or teams paying down early-growth debt. The domain has to be complex and enduringly central.',
    notMeans: ['Not isolated design work: it is grounded in business and user constraints every week.', 'Not the title of whoever draws the diagrams. The authority comes from decisions that held up.', 'Not available everywhere: small or simple systems do not need one.'],
    seniorVersion: 'You keep returning to one system, you write the design docs others build on, and your decisions in that domain stick.',
    primaryCompetency: 'Design & Architecture',
    keywords: ['architect', 'design doc', 'adr', 'rfc', 'schema', 'state machine', 'data model', 'contract', 'api design', 'migration plan', 'pattern', 'foundation', 'single source of truth', 'consolidat', 'refactor', 'platform'],
    competencies: { 'Design & Architecture': 2, 'Technical Strategy': 2, 'Scope': 0.5 },
    stakeholders: { product: 0.25, team: 0.5, crossTeam: 1, exec: 0.25 }
  },
  {
    id: 'solver', name: 'Solver', kind: 'archetype',
    oneLine: 'Digs deep into arbitrarily complex problems leadership has flagged and finds a path forward.',
    week: 'Parachutes into a problem with an unclear approach or high execution risk, works until it is contained, hands it off cleanly, moves to the next hotspot. Little organizational maneuvering.',
    where: 'Companies that plan around individuals rather than teams, and large companies with their own technical debt.',
    notMeans: ['Not a steady team: Solvers often have a limited sense of community.', 'Not choosing your own problems: leadership flags them.', 'Not finished when it works: a sloppy hand-off makes the maintaining team pay.'],
    seniorVersion: 'You get handed the ambiguous, risky problems; you root-cause across boundaries; you hand off and move on.',
    primaryCompetency: 'Delivery',
    keywords: ['root cause', 'root-cause', 'investigat', 'diagnos', 'traced', 'crash', 'incident', 'outage', 'memory', 'leak', 'performance', 'flaky', 'intermittent', 'non-deterministic', 'escalat', 'hotfix', 'rollback', 'reproduc', 'debug'],
    competencies: { 'Delivery': 1.5, 'Scope': 0.25 },
    stakeholders: { product: 0, team: 0.5, crossTeam: 1, exec: 0.5 }
  },
  {
    id: 'right-hand', name: 'Right Hand', kind: 'archetype',
    oneLine: 'Extends an executive’s attention, borrowing their scope and authority to run a complex organization.',
    week: 'Sits in the leader’s staff meeting, takes important problems off their plate, and works on things that mix business, technology, people, culture, and process. Delegates execution and moves on.',
    where: 'The rarest shape. Appears at hundreds to a thousand engineers and needs close alignment with the leader’s values.',
    notMeans: ['Not purely technical problems: most of them are people and process.', 'Not a role most companies have. If yours is small, this shape may not exist here.', 'Not independent: your scope is borrowed from the leader.'],
    seniorVersion: 'You are pulled into problems that are as much people and process as code, and leaders bring you things that are not on any roadmap.',
    primaryCompetency: 'Scope',
    keywords: ['strategy', 'org', 'organization', 'process', 'culture', 'hiring', 'headcount', 'budget', 'leadership', 'vp', 'director', 'exec', 'staff meeting', 'working group', 'program', 'cross-functional', 'change champion', 'onboarding'],
    competencies: { 'Process Improvement': 1.25, 'Scope': 1, 'Team Building': 1 },
    stakeholders: { product: 0.25, team: 0, crossTeam: 0.75, exec: 2 }
  },
  {
    id: 'breadth', name: 'Breadth-builder', kind: 'path',
    oneLine: 'Deliberately changing stacks, teams, or domains to earn judgment that transfers.',
    week: 'Starting over somewhere you do not already know every corner. Influencing people without the advantage of context. Comparing how different teams ship and weighing tradeoffs instead of assuming one way is right.',
    where: 'Anywhere. Inside a large company by switching teams or stacks at the same level, or by changing jobs. Both Majors and Orosz treat it as the senior-level move that staff work later depends on.',
    notMeans: ['Not a demotion, even when it feels like one.', 'Not aimless: each move should teach a kind of judgment you do not have yet.', 'Not forever: breadth is what the other shapes are built on.'],
    seniorVersion: 'You are picking up unfamiliar systems on purpose and earning respect from scratch, not trading on being the person who knows the codebase.',
    primaryCompetency: 'Scope',
    keywords: ['new stack', 'react native', 'web', 'backend', 'full-stack', 'learned', 'first time', 'ramped', 'unfamiliar', 'picked up', 'no handover', 'took over', 'adopted'],
    competencies: { 'Scope': 0.5, 'Delivery': 0.5 },
    stakeholders: { product: 0.25, team: 0.25, crossTeam: 0.5, exec: 0 }
  },
  {
    id: 'stay-senior', name: 'Stay Senior', kind: 'path',
    oneLine: 'A real destination: owning execution for a team’s hardest problems, deciding what needs doing, finishing cleanly, and mentoring.',
    week: 'Mostly building, with real responsibility and the trust to take the critical work. Pays about what frontline managers make. Less context switching and less stress than the levels above.',
    where: 'Everywhere. Every source here treats it as a respectable, deliberate choice, and most ladders have a terminal senior level nobody is pushed out of.',
    notMeans: ['Not coasting: senior means deciding what needs to be done without being told.', 'Not a failure to advance. Each level above senior is roughly an order of magnitude harder to reach and has far fewer seats.', 'Not fixed forever: you can revisit the question in a year.'],
    seniorVersion: 'This is the level. The question becomes depth, consistency, and which hard problems you want.',
    primaryCompetency: 'Delivery',
    keywords: [], competencies: {}, stakeholders: {}
  },
  {
    id: 'manager', name: 'Engineering Manager', kind: 'path',
    oneLine: 'Leads people. Codes very little, manages roughly six to twelve engineers, and usually keeps a path back to IC.',
    week: '1:1s, hiring, performance, planning, unblocking, and representing the team upward. Your output is the team’s output.',
    where: 'Everywhere. The management track has more roles per level than the IC track, so leveling is often easier there, and tenure compounds a manager’s effectiveness.',
    notMeans: ['Not a promotion from senior: it is a different job with a different skill set.', 'Not a way to keep coding with a title. The code goes away.', 'Not irreversible: most companies offer a return path.'],
    seniorVersion: 'You find yourself drawn to how the team works more than to what it builds, and people come to you with people problems.',
    primaryCompetency: 'Team Building',
    keywords: ['mentor', 'onboard', 'hired', 'interview', 'coach', '1:1', 'team health', 'feedback', 'grew the team', 'ran the team', 'acting lead', 'planning'],
    competencies: { 'Team Building': 2, 'Collaboration & Citizenship': 0.75, 'Process Improvement': 0.5 },
    stakeholders: { product: 0.5, team: 1, crossTeam: 0.5, exec: 0.5 }
  }
];

// Reflection prompts shown on the Explore page. Mirrors Step 2 of the explore skill.
const EXPLORE_QUESTIONS = [
  { id: 'energy', label: 'Energy', q: 'Think about the last three months. Which work left you with more energy than it took, and which drained you? Would you rather go deep with one team on one problem for years, or move from hard problem to hard problem?' },
  { id: 'week', label: 'The week you want', q: 'Two years from now, describe a good Tuesday. How much of it is code, design, coordination, people, or strategy?' },
  { id: 'influence', label: 'Who you want to influence', q: 'Whose decisions do you want to change: your team’s, several teams’, one critical system’s, or a leader’s?' },
  { id: 'alternatives', label: 'The honest alternatives', q: 'Staying senior is a real choice. Managing is another. Tech lead is a third. Which of those have you actually ruled out, and why?' },
  { id: 'oxygen', label: 'Oxygen', q: 'How many people above your level do you work with? How many at your level want the same step? What does the business need most right now, and is that the engineer you want to become or the one you already are?' },
  { id: 'trap', label: 'The trap check', q: 'How many stacks, teams, or roles have you worked in? Have you earned respect somewhere from scratch, without knowing the system better than everyone else? Is your calendar full because the work needs you, or because you have become the bottleneck?' }
];
