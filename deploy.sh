#!/usr/bin/env bash
# Build freedomliving.ae and publish it, the same way as the SHE site.
# The built site is committed in the docs folder, which GitHub Pages serves.
set -euo pipefail
cd "$(dirname "$0")"

# With a Web3Forms key the forms email each entry. Without one they open the visitor's email app.
if ! grep -qE '^VITE_WEB3FORMS_KEY=.+' .env.production 2>/dev/null; then
  echo "Note: no VITE_WEB3FORMS_KEY in .env.production, so the forms will open the visitor's email app (see GO-LIVE.md)."
fi

npm run build
rm -rf docs
cp -R dist docs
echo "freedomliving.ae" > docs/CNAME
touch docs/.nojekyll            # keep GitHub Pages from reprocessing the files
cp docs/index.html docs/404.html
# GitHub Pages cannot send every address to one page, so each page gets its own copy.
for page in ; do cp docs/index.html "docs/$page.html"; done

git add -A
if git diff --cached --quiet; then
  echo "nothing changed"
  exit 0
fi
git commit -q -m "${1:-Update the site}"
if git remote get-url origin >/dev/null 2>&1; then
  git push -q origin main
  echo "pushed. GitHub Pages will publish the new version within a minute or two."
else
  echo "committed. No remote set yet, so nothing was published."
fi
