import { FlagIcon } from '@heroicons/react/24/outline';

/**
 * Site-wide links and settings. Edit these here; the rest of the app reads them.
 */

/** The GitHub repository for this project. */
export const GITHUB_REPO_URL = 'https://github.com/jaxatto/loot-sheet-demo';

/** Discord thread for feedback and questions. Set to null to hide it. */
export const DISCORD_FEEDBACK_THREAD_URL = null;


/**
 * Umami website ID for visit counts (see utils/analytics.js), from the
 * website's settings on https://cloud.umami.is. Set to null to turn them off.
 */
export const UMAMI_WEBSITE_ID = null;

/** The contributing guide on GitHub (how to edit the item data). */
export const CONTRIBUTING_URL = `${GITHUB_REPO_URL}#readme`;

/**
 * Link to a new GitHub issue for one item, with the item already filled in.
 * GitHub issue forms fill a field when its id is passed in the URL:
 * https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue#creating-an-issue-from-a-url-query
 */
export function itemReportUrl(item) {
  const itemText = item.itemId ? `${item.name} (#${item.itemId})` : item.name;
  const params = new URLSearchParams({
    title: `[Item] ${item.name}`,
    item: itemText,
  });
  return `${GITHUB_REPO_URL}/issues/new?${params}`;
}

/**
 * Actions in the last column of each table row (shown on hover or focus) and at
 * the top right of each card.
 * With one action it shows as its icon (with a tooltip); with two or more
 * they collapse into a ⋮ menu. To add one, add an entry:
 *
 *   label    - text for the tooltip / menu item
 *   icon     - icon shown when it's the only action (https://heroicons.com)
 *   href     - (item) => URL the action opens
 *   external - true to open in a new tab
 */
export const ROW_ACTIONS = [
  { id: 'report', label: 'Report Issue', icon: FlagIcon, href: itemReportUrl, external: true },
];

/** Link to a new GitHub issue that isn't about one item (bugs, ideas, ...). */
export const GENERAL_ISSUE_URL = `${GITHUB_REPO_URL}/issues/new/choose`;
