# Loot Sheet (demo)

A searchable, filterable loot list for an MMORPG: quickly see whether to keep an
item, sell it to players, or sell it to an NPC, and which quests, hats and pet
evolutions need it.

This is a **demo build with randomised sample data**. Item names, IDs and icons
are real; the actions, categories, uses, notes and every price (NPC, vend and
whobuy) are shuffled or generated at random and are not true for any server.

**Admin mode is open.** Anyone can turn it on from the toolbar, type vend and
whobuy prices into the table, and see the suggested actions update. There is no
server: edits are kept in the visitor's browser only, and "Reset my changes" on
the Admin page forgets them.

## Running it

Requires [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:5173/loot-sheet-demo/

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the site locally and reloads as you edit. |
| `npm run validate` | Checks `src/data/loot.json` against the schema and rules. |
| `npm run lint` | Runs ESLint. |
| `npm test` | Runs the unit tests. |
| `npm run build` | Validates the data, then builds the site into `dist/`. |

## Notes

- Item icons are not committed: `public/items/` is git-ignored. After cloning, run
  `npm run sync:icons` to copy them from a local folder (`--from <folder>`, or
  `GAME_DATA_TOOLS_ICONS`, default `~/Projects/game-data-tools/images/items`).
  Without them the site still works: each picture just stays blank.
- Search engines are told to stay away (`robots.txt`, `noindex`).
