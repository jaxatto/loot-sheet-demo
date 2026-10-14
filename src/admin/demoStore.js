import { readPreference, writePreference } from '../utils/preferences.js';

/**
 * The demo has no server, so admin mode saves its edits in this browser
 * (localStorage, through preferences.js) and applies them on top of the
 * built-in data each time the page loads. Nothing leaves the browser.
 *
 * Shape: { items: { <item id>: { <field>: value } }, targets: { <name>: value | null },
 *          reviewed: { <item id>: { actions, suggested } | null } }
 */
const KEY = 'demoEdits';
const EMPTY = { items: {}, targets: {}, reviewed: {} };

export function readEdits() {
  const stored = readPreference(KEY, null);
  return stored && typeof stored === 'object' ? { ...EMPTY, ...stored } : { ...EMPTY };
}

export function writeEdits(edits) {
  writePreference(KEY, edits);
}

/** Forgets every edit made in this browser. */
export function resetEdits() {
  writePreference(KEY, EMPTY);
}
