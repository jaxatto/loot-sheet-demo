/**
 * Site-wide links and settings. Edit these here; the rest of the app reads them.
 */

/** The GitHub repository for this project. */
export const GITHUB_REPO_URL = 'https://github.com/jaxatto/loot-sheet-demo';

/**
 * Umami website ID for visit counts (see utils/analytics.js), from the
 * website's settings on https://cloud.umami.is. Set to null to turn them off.
 */
export const UMAMI_WEBSITE_ID = null;

/**
 * Actions in the last column of each table row (shown on hover or focus) and at
 * the top right of each card.
 * Empty in the demo (no issue tracker). With one action it shows as its icon
 * (with a tooltip); with two or more they collapse into a ⋮ menu. To add one,
 * add an entry:
 *
 *   label    - text for the tooltip / menu item
 *   icon     - icon shown when it's the only action (https://heroicons.com)
 *   href     - (item) => URL the action opens
 *   external - true to open in a new tab
 */
export const ROW_ACTIONS = [];
