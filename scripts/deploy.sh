#!/bin/sh
# Builds the site locally (with the icons in public/items/, which are not committed)
# and publishes it to the gh-pages branch, replacing what was there.
#
#   npm run deploy               build and push
#   DRY_RUN=1 npm run deploy     build and commit in a scratch folder, don't push
#
# The deploy commit is authored as DEPLOY_NAME / DEPLOY_EMAIL, or this repo's
# git user.name / user.email when those aren't set. The commit is public.
#
# GitHub Pages must be set to deploy from the gh-pages branch (repo Settings -> Pages).
set -eu
cd "$(dirname "$0")/.."

REMOTE="$(git remote get-url origin)"
NAME="${DEPLOY_NAME:-$(git config user.name)}"
EMAIL="${DEPLOY_EMAIL:-$(git config user.email)}"
echo "Deploy commit author: $NAME <$EMAIL>"
[ -n "$(ls public/items 2>/dev/null)" ] || echo "Warning: public/items is empty, so the site will have no icons (run npm run sync:icons)." >&2

npm run build

OUT="$(mktemp -d)"
trap 'rm -rf "$OUT"' EXIT
cp -R dist/. "$OUT/"
touch "$OUT/.nojekyll"
cd "$OUT"
git init -q -b gh-pages
git add -A
git -c user.name="$NAME" -c user.email="$EMAIL" commit -q -m "Deploy the demo site"

if [ "${DRY_RUN:-}" = "1" ]; then
  echo "Dry run: built and committed $(git ls-files | wc -l | tr -d ' ') files, not pushed."
else
  git remote add origin "$REMOTE"
  git push -f origin gh-pages
  echo "Deployed. Pages usually updates within a minute."
fi
