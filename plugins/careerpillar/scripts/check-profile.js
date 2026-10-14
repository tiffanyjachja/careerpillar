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
  return { errs, warns };
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
  console.log(msg || `careerpillar: ${path.basename(f)} passes. ${p.accomplishments.length} entries.`);
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
