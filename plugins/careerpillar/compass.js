// Values and working-strengths data used by the dashboard's Explore page.
// Prose versions for the Claude skills: values.md and strengths.md (same folder).
// Keep the three in step when editing definitions.
//
// Both lists are original, plain-language, and informal. They are not a
// validated instrument and are not affiliated with any commercial assessment.

// ── Values ────────────────────────────────────────────────────────────────
// 35 cards in 7 clusters. Each: id, name, cluster, sounds (how it sounds when
// someone holds it), slips (an early sign it is being traded away).

const VALUE_CLUSTERS = [
  { id: 'growth', name: 'Growth', blurb: 'Getting better at things, on purpose.' },
  { id: 'freedom', name: 'Freedom', blurb: 'Room to decide how you work and who you are at work.' },
  { id: 'connection', name: 'Connection', blurb: 'Who you do it with, and whether they would notice if you left.' },
  { id: 'recognition', name: 'Recognition', blurb: 'Being seen for what you did, and measured against something.' },
  { id: 'integrity', name: 'Integrity', blurb: 'The lines you will not cross, even when crossing them would be easier.' },
  { id: 'purpose', name: 'Purpose', blurb: 'Who is better off because the work happened.' },
  { id: 'stability', name: 'Stability', blurb: 'Enough ground under your feet to do the rest.' }
];

const VALUES = [
  // Growth
  { id: 'learning', name: 'Learning', cluster: 'growth', sounds: 'I need to be learning something or I get restless.', slips: 'Months go by doing the same work in the same way.' },
  { id: 'mastery', name: 'Mastery', cluster: 'growth', sounds: 'I want to be genuinely good at this, not just adequate.', slips: 'You are spread across so much that nothing gets deep.' },
  { id: 'challenge', name: 'Challenge', cluster: 'growth', sounds: 'Give me the hard one.', slips: 'Every task is one you could do in your sleep.' },
  { id: 'curiosity', name: 'Curiosity', cluster: 'growth', sounds: 'I pull threads. I want to know how it works underneath.', slips: 'Questions get met with "that is just how it is."' },
  { id: 'ambition', name: 'Ambition', cluster: 'growth', sounds: 'I want more scope, more responsibility, a bigger stage.', slips: 'The path up is foggy and nobody will name it.' },
  // Freedom
  { id: 'autonomy', name: 'Autonomy', cluster: 'freedom', sounds: 'Tell me the goal and get out of the way.', slips: 'Decisions you could make are made for you.' },
  { id: 'creativity', name: 'Creativity', cluster: 'freedom', sounds: 'I need room to make something that was not there before.', slips: 'The work is execution of someone else’s design, every time.' },
  { id: 'flexibility', name: 'Flexibility', cluster: 'freedom', sounds: 'When and where I work matters less than whether it gets done.', slips: 'Presence is measured instead of outcomes.' },
  { id: 'variety', name: 'Variety', cluster: 'freedom', sounds: 'A dynamic week energizes me. Routine drains me.', slips: 'The calendar looks identical every week.' },
  { id: 'individuality', name: 'Individuality', cluster: 'freedom', sounds: 'I want to be fully myself here, not a role.', slips: 'You edit yourself before every meeting.' },
  // Connection
  { id: 'community', name: 'Community', cluster: 'connection', sounds: 'The people are the point. Food and celebration are part of the work.', slips: 'Nobody marks the milestones anymore.' },
  { id: 'belonging', name: 'Belonging', cluster: 'connection', sounds: 'I want to be somewhere I do not have to earn my place every day.', slips: 'You feel like a guest on your own team.' },
  { id: 'loyalty', name: 'Loyalty', cluster: 'connection', sounds: 'I show up for my people and I expect the same.', slips: 'Someone is thrown under the bus and nobody objects.' },
  { id: 'kindness', name: 'Kindness', cluster: 'connection', sounds: 'How we treat each other on a bad day is the real culture.', slips: 'Sharpness becomes normal and is called "direct."' },
  { id: 'collaboration', name: 'Collaboration', cluster: 'connection', sounds: 'I do my best thinking out loud with other people.', slips: 'Work is handed over walls; nobody builds together.' },
  // Recognition
  { id: 'credit', name: 'Credit', cluster: 'recognition', sounds: 'Credit where it is due. Named, specific, public when it matters.', slips: 'Your work shows up in someone else’s slide.' },
  { id: 'achievement', name: 'Achievement', cluster: 'recognition', sounds: 'I need to see measurable progress, most days.', slips: 'Weeks pass with nothing you can point to.' },
  { id: 'influence', name: 'Influence', cluster: 'recognition', sounds: 'I want my judgment to change what gets decided.', slips: 'You are informed after the decision, not before.' },
  { id: 'excellence', name: 'Excellence', cluster: 'recognition', sounds: 'Good enough is not. I want it to be the best version.', slips: 'Shipping anything becomes the only bar.' },
  { id: 'winning', name: 'Winning', cluster: 'recognition', sounds: 'I measure against others and I want to come out ahead.', slips: 'There is no scoreboard and no one is keeping one.' },
  // Integrity
  { id: 'honesty', name: 'Honesty', cluster: 'integrity', sounds: 'Say the true thing. I can handle it; I cannot handle spin.', slips: 'Framing replaces facts in the updates you receive.' },
  { id: 'fairness', name: 'Fairness', cluster: 'integrity', sounds: 'Same rules for everyone, and the rules are visible.', slips: 'Exceptions multiply for some people and not others.' },
  { id: 'accountability', name: 'Accountability', cluster: 'integrity', sounds: 'I own my outcomes, including the bad ones.', slips: 'Post-mortems look for someone to blame, or nobody.' },
  { id: 'courage', name: 'Courage', cluster: 'integrity', sounds: 'I will say the uncomfortable thing in the room, not after.', slips: 'The real conversation happens in DMs after the meeting.' },
  { id: 'humility', name: 'Humility', cluster: 'integrity', sounds: 'I am wrong sometimes and I want to find out fast.', slips: 'Being right matters more than getting it right.' },
  // Purpose
  { id: 'impact', name: 'Impact', cluster: 'purpose', sounds: 'I need to see that the work changed something for someone.', slips: 'Projects ship into silence.' },
  { id: 'service', name: 'Service', cluster: 'purpose', sounds: 'I am here to make other people’s work easier.', slips: 'You are rewarded only for what you personally shipped.' },
  { id: 'justice', name: 'Justice', cluster: 'purpose', sounds: 'I care who gets left out, and I will say so.', slips: 'Harm to users or colleagues is treated as a rounding error.' },
  { id: 'teaching', name: 'Teaching', cluster: 'purpose', sounds: 'I light up when someone gets it because of something I showed them.', slips: 'No time is protected for mentoring or knowledge transfer.' },
  { id: 'legacy', name: 'Legacy', cluster: 'purpose', sounds: 'I want to build things that outlast my time here.', slips: 'Everything is a quick fix for this quarter.' },
  // Stability
  { id: 'security', name: 'Security', cluster: 'stability', sounds: 'I do my best work when I am not worried about the floor.', slips: 'Reorg rumors every month and no one will confirm anything.' },
  { id: 'balance', name: 'Balance', cluster: 'stability', sounds: 'Work is one of the things I am, not the only thing.', slips: 'Evenings and weekends quietly become expected.' },
  { id: 'wellbeing', name: 'Wellbeing', cluster: 'stability', sounds: 'If I am not okay, the work is not okay either.', slips: 'Burnout is treated as a personal failing.' },
  { id: 'order', name: 'Order', cluster: 'stability', sounds: 'I want to know how things are done here, and have it written down.', slips: 'Every process lives in one person’s head.' },
  { id: 'calm', name: 'Calm', cluster: 'stability', sounds: 'Urgency should be rare and real, not the default volume.', slips: 'Everything is a fire, so nothing is.' }
];

// The sort: pick everything that resonates, then 10, then 5, then 2 core.
const VALUE_STAGES = [
  { id: 'all', label: 'Everything that resonates', limit: null, prompt: 'Tap every value that sounds like you at work. Do not edit yourself yet.' },
  { id: 'ten', label: 'Narrow to ten', limit: 10, prompt: 'If you had to leave the rest behind, which ten would you keep?' },
  { id: 'five', label: 'Narrow to five', limit: 5, prompt: 'Five. These are the ones a teammate would list if asked what you care about.' },
  { id: 'core', label: 'Choose two core values', limit: 2, prompt: 'The two you would defend when they cost you something. Brené Brown’s exercise lands on two for a reason: more than that and they stop guiding decisions.' }
];

const VALUE_PROMPTS = [
  { id: 'notTolerated', label: 'What you do not tolerate', q: 'Name two or three things you will not put up with at work. These are usually your core values seen from the other side, and they are often easier to find first.' },
  { id: 'shows', label: 'Living it', q: 'For each core value: one specific behavior that shows you are living it this month.' },
  { id: 'slips', label: 'Slipping', q: 'For each core value: the early sign that you are trading it away. The thing you notice before anyone else does.' }
];

// ── Working strengths ─────────────────────────────────────────────────────
// 20 patterns in 4 families. Original names and descriptions. Pick five.
// Each: id, name, family, oneLine, atBest, overused, askFor, keywords
// (matched against title/action/impact/tags to show "your log shows this").

const STRENGTH_FAMILIES = [
  { id: 'drive', name: 'Drive', blurb: 'Getting things done.' },
  { id: 'influence', name: 'Influence', blurb: 'Moving people.' },
  { id: 'connection', name: 'Connection', blurb: 'Holding people together.' },
  { id: 'insight', name: 'Insight', blurb: 'Making sense of things.' }
];

const STRENGTHS = [
  // Drive
  { id: 'starter', name: 'Starter', family: 'drive', oneLine: 'Gets things moving when nobody else will.', atBest: 'Turns a meeting into a first step before it ends. Comfortable launching with 70% of the information.', overused: 'Starts more than the team can finish. Reads as impatient to people who need processing time.', askFor: 'A clear owner for finishing, and permission to hand off once a thing is moving.', keywords: ['kicked off', 'kickoff', 'started', 'launched', 'proposed', 'spun up', 'stood up', 'initiated', 'first step', 'pilot'] },
  { id: 'finisher', name: 'Finisher', family: 'drive', oneLine: 'Needs visible progress most days, and gets it.', atBest: 'Closes loops. The one who notices the thing nobody shipped and ships it.', overused: 'Measures the day by what got checked off, including work that did not matter. Hard to switch off.', askFor: 'Work with a visible end state, and credit for the unglamorous closing-out.', keywords: ['shipped', 'closed', 'completed', 'landed', 'merged', 'delivered', 'finished', 'wrapped', 'resolved', 'done'] },
  { id: 'planner', name: 'Planner', family: 'drive', oneLine: 'Sees the sequence and puts it in order.', atBest: 'Breaks a vague goal into a plan others can execute without you in the room.', overused: 'Over-structures work that needed room to wander. Frustrated when the plan meets reality.', askFor: 'Early involvement, before the plan is implied by a deadline.', keywords: ['plan', 'roadmap', 'sequenc', 'milestone', 'scoped', 'broke down', 'phased', 'schedule', 'timeline', 'release plan'] },
  { id: 'keeper', name: 'Keeper', family: 'drive', oneLine: 'Does what they said they would, every time.', atBest: 'The team’s memory and conscience. Commitments made to them get kept.', overused: 'Takes on others’ dropped commitments until the load is unfair. Judges people who are looser with their word.', askFor: 'Teams that keep promises back, and help saying no.', keywords: ['on-call', 'follow-up', 'followed up', 'owned', 'accountable', 'maintained', 'reliab', 'runbook', 'documented', 'kept'] },
  { id: 'fixer', name: 'Fixer', family: 'drive', oneLine: 'Restores what is broken, calmly.', atBest: 'Walks toward the incident. Finds the root cause when others have stopped at the symptom.', overused: 'Collects other people’s messes. Never gets to build because something is always on fire.', askFor: 'Time to prevent the next one, not just fix this one.', keywords: ['root cause', 'root-cause', 'fixed', 'incident', 'outage', 'debug', 'diagnos', 'traced', 'hotfix', 'recovered', 'bug'] },
  // Influence
  { id: 'rallier', name: 'Rallier', family: 'influence', oneLine: 'Brings energy into a room and people follow it.', atBest: 'The team believes the hard thing is possible because you do, visibly.', overused: 'Enthusiasm outruns evidence. Quieter people stop raising doubts.', askFor: 'A skeptic you trust, and a moment to hear the room before filling it.', keywords: ['rallied', 'energ', 'momentum', 'motivated', 'demo day', 'celebrat', 'kicked off', 'all-hands', 'announced', 'hype'] },
  { id: 'persuader', name: 'Persuader', family: 'influence', oneLine: 'Makes the case and changes minds.', atBest: 'Translates a technical choice into why it matters to the person deciding.', overused: 'Wins the argument and loses the room. Keeps selling after the yes.', askFor: 'Decisions that are actually open, and feedback when the pitch outran the facts.', keywords: ['convinced', 'aligned', 'pitched', 'proposal', 'made the case', 'buy-in', 'persuad', 'negotiat', 'advocated', 'sold'] },
  { id: 'contender', name: 'Contender', family: 'influence', oneLine: 'Measures against others and wants to come out ahead.', atBest: 'Raises the bar for the whole team. Knows exactly where you stand and why.', overused: 'Turns collaborators into rivals. Loses interest when there is no scoreboard.', askFor: 'Clear measures of success, and a worthy external benchmark instead of an internal one.', keywords: ['benchmark', 'outperform', 'competit', 'beat', 'ranked', 'leaderboard', 'ahead of', 'first to', 'best in', 'won'] },
  { id: 'spotlight', name: 'Spotlight', family: 'influence', oneLine: 'Wants the work to matter and to be seen mattering.', atBest: 'Gives work a stage: the demo, the writeup, the talk. Lifts others into the light too.', overused: 'Chases visibility over substance. Takes the quiet work personally when it goes unnoticed.', askFor: 'Specific, named recognition, and a say in how the team’s work is presented upward.', keywords: ['presented', 'talk', 'demo', 'published', 'wrote', 'readout', 'showcased', 'visibility', 'recognition', 'conference'] },
  { id: 'narrator', name: 'Narrator', family: 'influence', oneLine: 'Explains complicated things so people act on them.', atBest: 'The doc everyone links. The update that ends the thread.', overused: 'Polishes the message past the point of usefulness. Explains when a decision was needed.', askFor: 'Problems where clarity is the bottleneck, and protected writing time.', keywords: ['wrote', 'documented', 'explained', 'summary', 'summarized', 'communicated', 'wiki', 'doc', 'guide', 'walkthrough'] },
  // Connection
  { id: 'host', name: 'Host', family: 'connection', oneLine: 'Makes people feel they belong here.', atBest: 'Notices the new person, the quiet person, the person on the edge, and pulls them in.', overused: 'Smooths over conflict that needed to happen. Over-includes until nothing gets decided.', askFor: 'Onboarding and team-health work to be counted as real work.', keywords: ['onboard', 'welcome', 'social', 'culture', 'survey', 'included', 'team event', 'offsite', 'introduced', 'belong'] },
  { id: 'coach', name: 'Coach', family: 'connection', oneLine: 'Sees what someone could become and helps them get there.', atBest: 'People leave your 1:1s with a next step they chose. Their growth shows up in their work.', overused: 'Invests in people who are not ready. Takes their setbacks personally.', askFor: 'Reports or mentees who want to grow, and time to do it properly.', keywords: ['mentor', 'coach', 'grew', 'developed', 'promo', 'promotion', '1:1', 'feedback', 'career', 'leveling'] },
  { id: 'peacemaker', name: 'Peacemaker', family: 'connection', oneLine: 'Finds the agreement hiding inside the argument.', atBest: 'Two teams leave with one plan. The temperature drops when you join the thread.', overused: 'Settles for the agreeable answer over the right one. Avoids necessary conflict.', askFor: 'A role in cross-team decisions, and backup when a fight is actually worth having.', keywords: ['aligned', 'resolved', 'mediated', 'compromise', 'consensus', 'de-escalat', 'brought together', 'bridged', 'agreement', 'both teams'] },
  { id: 'reader', name: 'Reader', family: 'connection', oneLine: 'Reads the room and the person in it.', atBest: 'Knows who is struggling before they say so. Adjusts the message to the listener.', overused: 'Absorbs everyone’s mood. Manages feelings instead of saying the plain thing.', askFor: 'To be in the room for hard conversations, and permission to name what you see.', keywords: ['noticed', 'sensed', 'checked in', 'morale', 'sentiment', 'listened', 'empath', 'support', 'burnout', 'tone'] },
  { id: 'ally', name: 'Ally', family: 'connection', oneLine: 'Builds a few deep, durable relationships and shows up for them.', atBest: 'The person people call when it is really bad. Trust that compounds over years.', overused: 'Loyal past the point of judgment. Slow to trust outside the circle.', askFor: 'Continuity: do not rotate your people every quarter.', keywords: ['partnered', 'trusted', 'long-standing', 'backed', 'supported', 'stood up for', 'relationship', 'partner team', 'together', 'loyal'] },
  // Insight
  { id: 'pathfinder', name: 'Pathfinder', family: 'insight', oneLine: 'Sees several routes to the goal and picks one fast.', atBest: 'Options appear where others saw a wall. Comfortable choosing under uncertainty.', overused: 'Changes route too often. Skips the explanation of why, so others cannot follow.', askFor: 'Ambiguous problems, and a reason to write the route down for the people behind you.', keywords: ['options', 'strategy', 'direction', 'path forward', 'decided', 'chose', 'tradeoff', 'alternative', 'vision', 'bet'] },
  { id: 'analyst', name: 'Analyst', family: 'insight', oneLine: 'Wants the evidence before the opinion.', atBest: 'Turns a hunch into a number. Catches the claim that does not hold up.', overused: 'Delays decisions waiting for data that will not come. Dismisses what cannot be measured.', askFor: 'Access to the data, and a deadline for deciding anyway.', keywords: ['data', 'metric', 'measured', 'analysis', 'analyz', 'dashboard', 'query', 'evidence', 'audit', 'a/b'] },
  { id: 'collector', name: 'Collector', family: 'insight', oneLine: 'Gathers context, background, and the full picture before acting.', atBest: 'Knows the history. Connects the thread from last year to the problem today.', overused: 'Keeps gathering past the point of usefulness. Hard to start without the whole picture.', askFor: 'Time up front for discovery, and a cue for when enough is enough.', keywords: ['researched', 'investigat', 'context', 'history', 'gathered', 'reviewed', 'mapped', 'inventory', 'landscape', 'surveyed'] },
  { id: 'inventor', name: 'Inventor', family: 'insight', oneLine: 'Makes new things, and new connections between old ones.', atBest: 'The prototype that reframed the debate. Ideas others build on for years.', overused: 'Novelty over finishing. Bored once the idea is proven.', askFor: 'A place for prototypes to live, and a partner who finishes.', keywords: ['prototype', 'poc', 'proof of concept', 'designed', 'invented', 'new approach', 'experiment', 'built', 'created', 'idea'] },
  { id: 'improviser', name: 'Improviser', family: 'insight', oneLine: 'Takes the day as it comes and still lands it.', atBest: 'Absorbs the surprise, re-plans in the moment, keeps the team steady while doing it.', overused: 'Lives in the present at the cost of the long game. Reads as unprepared to planners.', askFor: 'Variety, and a planner nearby for the parts that need one.', keywords: ['adapted', 'pivoted', 'absorbed', 'reprioritized', 'on the fly', 'urgent', 'short notice', 'covered', 'stepped in', 'flexib'] }
];

const STRENGTH_PICK = 5;

const STRENGTH_TESTS = [
  'When you do this, you lose track of time.',
  'People ask you for this without being told you are good at it.',
  'You were doing some version of it long before anyone paid you to.'
];

// Count how many accomplishments read as each strength, by keyword.
function scoreStrengths(accomplishments) {
  const hits = {};
  STRENGTHS.forEach(s => { hits[s.id] = []; });
  (accomplishments || []).forEach(a => {
    const text = [a.title, a.action, a.impact, (a.tags || []).join(' ')].join(' ').toLowerCase();
    STRENGTHS.forEach(s => { if (s.keywords.some(k => text.includes(k))) hits[s.id].push(a); });
  });
  return hits;
}

if (typeof module !== 'undefined') {
  module.exports = { VALUE_CLUSTERS, VALUES, VALUE_STAGES, VALUE_PROMPTS, STRENGTH_FAMILIES, STRENGTHS, STRENGTH_PICK, STRENGTH_TESTS, scoreStrengths };
}
