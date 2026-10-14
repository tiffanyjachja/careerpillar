#!/usr/bin/env node
// Checks a careerpillar profile against the entry rules in SCHEMA.md
// (the XYZ shape: accomplished X, as measured by Y, by doing Z).
//
// Two ways to run it:
//   1. As a Claude Code hook (hooks/hooks.json). Reads the hook event on
//      stdin, validates the profile being written, and exits 2 with the
//      problems on stderr so Claude fixes the entry instead of saving it.
//   2. By hand or in CI:  node check-profile.js ~/careerpillar-profile.json
//
// No dependencies. Exit 0 = clean, 1 = could not run, 2 = violations.

const fs = require('fs');
const path = require('path');

const PROFILE_RE = /(careerpillar|eng-tracker)-profile\.json$/;
const MAX_TITLE = 90;
// Past-tense verbs that do not end in -ed. Extend freely.
const IRREGULAR = new Set(['built', 'rebuilt', 'began', 'brought', 'bought', 'caught', 'chose', 'cut', 'did', 'drove', 'fed', 'felt', 'fought', 'found', 'got', 'gave', 'grew', 'had', 'held', 'kept', 'knew', 'laid', 'led', 'left', 'lent', 'let', 'made', 'met', 'paid', 'put', 'ran', 'read', 'reran', 'reset', 'rewrote', 'sat', 'set', 'shut', 'sold', 'sent', 'shipped', 'showed', 'spent', 'split', 'spun', 'stood', 'struck', 'swept', 'taught', 'thought', 'took', 'undertook', 'upheld', 'withdrew', 'won', 'wrote', 'overcame', 'oversaw', 'drew', 'threw', 'rose', 'broke', 'bound', 'cast', 'hit', 'quit', 'rid', 'shed', 'spread', 'sped', 'wove', 'froze', 'lit', 'slid', 'sprang', 'stuck', 'sung', 'sank', 'rang', 'understood', 'became', 'came', 'went', 'saw', 'ate']);

function checkEntry(a, i) {
  const errs = [], warns = [];
  const where = `entry ${i + 1}${a.title ? ` "${String(a.title).slice(0, 50)}"` : ''}`;
  const t = (a.title || '').trim();

  // X: the accomplishment, in the title
  if (!t) errs.push(`${where}: title is empty.`);
  else {
    if (t.length > MAX_TITLE) errs.push(`${where}: title is ${t.length} chars; keep it under ${MAX_TITLE}.`);
    if (/^i\b/i.test(t) || /\bI\b/.test(t)) errs.push(`${where}: title uses "I". Third person, no pronoun: "Shipped…", not "I shipped…".`);
    const first = t.split(/\s+/)[0].toLowerCase().replace(/[^a-z]/g, '');
    if (!(first.endsWith('ed') || IRREGULAR.has(first))) errs.push(`${where}: title should start with a past-tense verb (X = what was accomplished). First word is "${first}".`);
  }

  // Y: the measure
  const metrics = Array.isArray(a.metrics) ? a.metrics.filter(Boolean) : [];
  if (!metrics.length) errs.push(`${where}: metrics is empty. Add a number, or "none available" so the gap is explicit (Y = as measured by).`);
  else {
    const bad = metrics.filter(m => !/\d/.test(m) && !/none available|no metric|not available/i.test(m));
    if (bad.length) warns.push(`${where}: metric without a number: ${bad.map(b => `"${b}"`).join(', ')}. Numbers survive review; adjectives do not.`);
  }

  // Z: what was done
  const action = (a.action || '').trim();
  if (action.length < 40) errs.push(`${where}: action is ${action.length} chars. Two to four sentences on what was done and what was hard (Z = by doing).`);

  // who was better off
  const impact = (a.impact || '').trim();
  if (impact.length < 20) errs.push(`${where}: impact is missing. Name who was better off and what changed.`);

  // scope and evidence
  const st = Array.isArray(a.stakeholders) ? a.stakeholders.filter(Boolean) : [];
  if (!st.length) errs.push(`${where}: stakeholders is empty. Name people, roles, or teams; write ["self"] if the work truly had no consumer.`);
  const links = Array.isArray(a.links) ? a.links.filter(l => l && l.url) : [];
  if (!links.length) errs.push(`${where}: no links. Every entry needs at least one piece of evidence a reviewer can open.`);
  else if (links.every(l => /slack\.com\/archives\/D[A-Z0-9]+/.test(l.url))) warns.push(`${where}: every link is a Slack DM. Reviewers cannot open those; add a doc, PR, issue, or public thread.`);

  // tracker hygiene
  if (!/^\d{4}-\d{2}-\d{2}$/.test(a.date || '')) errs.push(`${where}: date must be YYYY-MM-DD (the date the work landed).`);
  else if (new Date(a.date) > new Date(Date.now() + 86400000)) errs.push(`${where}: date ${a.date} is in the future.`);
  if (a.period) {
    const ps = a.period.start, pe = a.period.end;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(ps || '') || !/^\d{4}-\d{2}-\d{2}$/.test(pe || '')) errs.push(`${where}: period needs start and end as YYYY-MM-DD.`);
    else {
      if (ps > pe) errs.push(`${where}: period starts (${ps}) after it ends (${pe}).`);
      if (a.date && a.date !== pe) warns.push(`${where}: date (${a.date}) differs from period.end (${pe}). Convention: date is when the span landed, so set it to period.end.`);
    }
  } else if (/\b(over|across|during|spanning|throughout)\s+(the\s+)?(last\s+|past\s+)?(\d+|two|three|four|five|six|several)\s+(weeks|months|quarters|sprints)\b/i.test(`${a.action || ''} ${a.impact || ''}`)) {
    warns.push(`${where}: reads like a span of work but has no period. Add period.start/end and set date to period.end.`);
  }
  if (!Array.isArray(a.competencies) || !a.competencies.length) errs.push(`${where}: competencies is empty.`);
  if (!a.level) errs.push(`${where}: level is missing (the engineer's own read).`);
  if (!a.id) errs.push(`${where}: id is missing (8 random alphanumerics).`);
  return { errs, warns };
}

function checkProfile(p) {
  const errs = [], warns = [];
  if (!p || typeof p !== 'object') return { errs: ['profile is not a JSON object.'], warns };
  if (!p.profile || !p.profile.track || !p.profile.currentLevel || !p.profile.targetLevel) errs.push('profile needs name, track, currentLevel, and targetLevel.');
  if (!Array.isArray(p.accomplishments)) errs.push('accomplishments must be an array.');
  else p.accomplishments.forEach((a, i) => { const r = checkEntry(a, i); errs.push(...r.errs); warns.push(...r.warns); });
  if (p.schemaVersion !== undefined && p.schemaVersion !== 2) warns.push(`schemaVersion is ${p.schemaVersion}; current is 2.`);
  if (Array.isArray(p.accomplishments)) { const d = checkAcrossEntries(p.accomplishments); errs.push(...d.errs); warns.push(...d.warns); }
  return { errs, warns };
}

// ── Cross-entry checks: duplicates, bundle candidates, one-sitting backfills ──
const STOP = new Set(['a', 'an', 'the', 'and', 'or', 'of', 'to', 'for', 'in', 'on', 'with', 'by', 'from', 'into', 'across', 'after', 'before', 'as', 'at', 'via', 'our', 'their', 'its', 'new', 'up', 'out']);
function tokens(t) { return new Set(String(t || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length > 2 && !STOP.has(w))); }
function jaccard(a, b) { if (!a.size || !b.size) return 0; let i = 0; a.forEach(x => { if (b.has(x)) i++; }); return i / (a.size + b.size - i); }
function normUrl(u) { return String(u || '').trim().toLowerCase().replace(/^http:/, 'https:').replace(/[?#].*$/, '').replace(/\/+$/, ''); }
function daysBetween(a, b) { return Math.abs((new Date(a) - new Date(b)) / 86400000); }
function label(a, i) { return `entry ${i + 1}${a.title ? ` "${String(a.title).slice(0, 40)}"` : ''}`; }

function checkAcrossEntries(list) {
  const errs = [], warns = [];
  const n = list.length;
  if (n < 2) return { errs, warns };
  const tok = list.map(a => tokens(a.title));
  const urls = list.map(a => new Set((a.links || []).map(l => normUrl(l && l.url)).filter(Boolean)));
  const pairsSeen = new Set();
  const sharedOnly = {};   // url -> entries that cite it, where nothing else connects them
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
    const A = list[i], B = list[j];
    const sharedUrls = [...urls[i]].filter(u => urls[j].has(u));
    const sim = jaccard(tok[i], tok[j]);
    const sameTitle = tok[i].size && sim === 1;
    const close = A.date && B.date && daysBetween(A.date, B.date) <= 14;
    const overlap = A.period && B.period && A.period.start <= B.period.end && B.period.start <= A.period.end;
    const sharedTags = (A.tags || []).filter(t => (B.tags || []).includes(t));
    const key = `${i}-${j}`;
    if (sameTitle) { errs.push(`${label(A, i)} and ${label(B, j)}: identical titles. One of these is a duplicate; merge the links and stakeholders into one entry.`); pairsSeen.add(key); continue; }
    if (sharedUrls.length && sim >= 0.5) { errs.push(`${label(A, i)} and ${label(B, j)}: share evidence (${sharedUrls[0]}) and most of their title. Duplicate; merge them.`); pairsSeen.add(key); continue; }
    if (sharedUrls.length && (sim >= 0.25 || sharedTags.length)) { warns.push(`${label(A, i)} and ${label(B, j)}: share a link (${sharedUrls[0]}) and look related. Bundle candidate, unless they are different outcomes that happen to share a source.`); pairsSeen.add(key); continue; }
    if (sharedUrls.length) { sharedUrls.forEach(u => { sharedOnly[u] = sharedOnly[u] || new Set(); sharedOnly[u].add(i); sharedOnly[u].add(j); }); }
    if (sim >= 0.6 && (close || overlap)) { warns.push(`${label(A, i)} and ${label(B, j)}: similar titles ${overlap ? 'with overlapping periods' : 'within two weeks'}. Bundle candidate: one entry with a period and all the links, unless they are genuinely different outcomes.`); pairsSeen.add(key); continue; }
    if (sharedTags.length >= 2 && (close || overlap) && sim >= 0.3) { warns.push(`${label(A, i)} and ${label(B, j)}: same tags (${sharedTags.slice(0, 2).join(', ')}) and close in time. Consider bundling.`); pairsSeen.add(key); }
  }
  const su = Object.entries(sharedOnly);
  if (su.length) {
    const own = list.map((a, i) => [...urls[i]].some(u => !sharedOnly[u]));
    const without = own.map((o, i) => o ? null : i).filter(x => x !== null);
    warns.push(`${su.length} link${su.length > 1 ? 's are' : ' is'} cited by more than one entry (a recap, thread, or doc used as a source for several outcomes). That is fine${without.length ? `, but ${without.map(i => label(list[i], i)).join(', ')} ha${without.length > 1 ? 've' : 's'} no link of ${without.length > 1 ? 'their' : 'its'} own` : ''}.`);
  }
  // one-sitting backfill: many entries on one date with no periods
  const byDate = {}; list.forEach(a => { if (a.date) byDate[a.date] = (byDate[a.date] || 0) + 1; });
  const [topDate, topCount] = Object.entries(byDate).sort((x, y) => y[1] - x[1])[0] || [null, 0];
  const withPeriod = list.filter(a => a.period).length;
  if (n >= 5 && topCount / n >= 0.5 && withPeriod / n < 0.5) warns.push(`${topCount} of ${n} entries share the date ${topDate} and most have no period. This looks like a one-sitting backfill: give spans a period (start, end) with date = end, and use the real landing date for single events. Quarter view: ${quarterSummary(list)}.`);
  return { errs, warns };
}
function quarterOf(d) { const m = new Date(d).getUTCMonth(); return `${new Date(d).getUTCFullYear()} Q${Math.floor(m / 3) + 1}`; }
function quarterSummary(list) {
  const q = {}; list.forEach(a => { const d = (a.period && a.period.end) || a.date; if (d) q[quarterOf(d)] = (q[quarterOf(d)] || 0) + 1; });
  return Object.entries(q).sort().map(([k, v]) => `${k}: ${v}`).join(', ') || 'no dates';
}

function report(label, { errs, warns }) {
  const out = [];
  if (errs.length) out.push(`careerpillar: ${errs.length} entry rule violation${errs.length > 1 ? 's' : ''} in ${label}. Fix before saving (see SCHEMA.md, "The shape of an entry"):`, ...errs.map(e => '  ✗ ' + e));
  if (warns.length) out.push(`${errs.length ? '' : `careerpillar: ${label} passes. `}${warns.length} warning${warns.length > 1 ? 's' : ''}:`, ...warns.map(w => '  ! ' + w));
  return out.join('\n');
}

function parseJson(text) { try { return JSON.parse(text); } catch (e) { return { __parseError: e.message }; } }

// ── CLI mode ──────────────────────────────────────────────────────────────
if (process.argv[2]) {
  const f = process.argv[2];
  const p = parseJson(fs.readFileSync(f, 'utf8'));
  if (p.__parseError) { console.error(`careerpillar: ${f} is not valid JSON: ${p.__parseError}`); process.exit(2); }
  const r = checkProfile(p);
  const msg = report(path.basename(f), r);
  if (r.errs.length) { console.error(msg); process.exit(2); }
  console.log((msg || `careerpillar: ${path.basename(f)} passes. ${p.accomplishments.length} entries.`) + `\n  by quarter: ${quarterSummary(p.accomplishments)}`);
  process.exit(0);
}

// ── Hook mode: Claude Code event on stdin ─────────────────────────────────
let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', c => { input += c; });
process.stdin.on('end', () => {
  const ev = parseJson(input || '{}');
  if (ev.__parseError) process.exit(0);                  // not a hook event; stay out of the way
  const ti = ev.tool_input || {};
  const file = ti.file_path || ti.path || '';
  if (!PROFILE_RE.test(file)) process.exit(0);           // not the profile; nothing to check

  let text = null;
  if (ev.hook_event_name === 'PreToolUse' && ev.tool_name === 'Write' && typeof ti.content === 'string') text = ti.content;
  else if (fs.existsSync(file)) text = fs.readFileSync(file, 'utf8');
  if (text === null) process.exit(0);

  const p = parseJson(text);
  if (p.__parseError) { console.error(`careerpillar: ${path.basename(file)} would not be valid JSON: ${p.__parseError}`); process.exit(2); }
  const r = checkProfile(p);
  const msg = report(path.basename(file), r);
  if (r.errs.length) { console.error(msg); process.exit(2); }
  if (msg) console.log(msg);
  process.exit(0);
});
