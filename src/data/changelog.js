/**
 * The Changelog page: what changed, newest first. The entries in this demo
 * are made-up samples.
 * `type` must be one of: Added, Changed, Fixed, Removed.
 */
export const CHANGE_TYPES = ['Added', 'Changed', 'Fixed', 'Removed'];

export const CHANGELOG = [
  {
    version: '1.7.0',
    date: '2026-10-14',
    title: 'Admin mode opens up to everyone',
    changes: [
      { type: 'Added', text: 'Anyone can try admin mode: type a price into the table and the suggested action updates.' },
      { type: 'Added', text: 'A "Reset my changes" button on the Admin page puts the sample data back.' },
      { type: 'Changed', text: 'The GitHub links open this project\'s page.' },
      { type: 'Fixed', text: 'Undo after a price edit now also puts back the action that edit changed.' },
    ],
  },
  {
    version: '1.6.0',
    date: '2026-10-09',
    title: 'Whobuy prices and a Verified column',
    changes: [
      { type: 'Added', text: 'A Whobuy column next to Vend, with its own filter and sort.' },
      { type: 'Added', text: 'A Verified column shows how long ago each price was checked.' },
      { type: 'Changed', text: 'Prices older than 30 days show ">30 Days" so you know to check again.' },
      { type: 'Fixed', text: 'Sorting by Vend no longer puts items with no price first.' },
    ],
  },
  {
    version: '1.5.1',
    date: '2026-10-04',
    title: 'Small fixes',
    changes: [
      { type: 'Fixed', text: 'The search box keeps its text when you open and close the filters.' },
      { type: 'Fixed', text: 'Share links with a Used For filter open on the right items again.' },
      { type: 'Fixed', text: 'Long item names no longer push the Action column off the card on phones.' },
    ],
  },
  {
    version: '1.5.0',
    date: '2026-09-28',
    title: 'Item icons',
    changes: [
      { type: 'Added', text: 'Every item shows its in-game icon next to its name.' },
      { type: 'Added', text: 'Cards share one icon, so the list stays quick to load.' },
      { type: 'Changed', text: 'Rows are a little taller so the icons are easy to see.' },
    ],
  },
  {
    version: '1.4.0',
    date: '2026-09-21',
    title: 'Light and dark themes',
    changes: [
      { type: 'Added', text: 'A theme button in the header switches between light and dark.' },
      { type: 'Changed', text: 'The first visit follows your device setting.' },
      { type: 'Fixed', text: 'Badges are easier to read in dark mode.' },
    ],
  },
  {
    version: '1.3.0',
    date: '2026-09-14',
    title: 'Share links and a search palette',
    changes: [
      { type: 'Added', text: 'Share copies a link that holds your search, filters and sort.' },
      { type: 'Added', text: 'Press Ctrl+K or ⌘K to search from any page.' },
      { type: 'Changed', text: 'Your last search and filters come back on your next visit.' },
    ],
  },
  {
    version: '1.2.0',
    date: '2026-09-07',
    title: 'Filters by what an item is for',
    changes: [
      { type: 'Added', text: 'Filter by category, item type and action from the new panel.' },
      { type: 'Added', text: 'Click a name in Used For to see every item that goes into it.' },
      { type: 'Changed', text: 'Items nothing uses are marked No Use and sit last in the Category list.' },
    ],
  },
  {
    version: '1.1.0',
    date: '2026-08-31',
    title: 'NPC prices',
    changes: [
      { type: 'Added', text: 'An NPC column with what a shop pays, including the Overcharge bonus.' },
      { type: 'Added', text: 'An NPC Shop column shows which items a shop sells.' },
      { type: 'Fixed', text: 'A handful of prices that were off by one digit.' },
    ],
  },
  {
    version: '1.0.0',
    date: '2026-08-24',
    title: 'First release',
    changes: [
      { type: 'Added', text: 'A searchable loot list with a suggested action for each item.' },
      { type: 'Added', text: 'The About page explains the actions and categories.' },
    ],
  },
];
