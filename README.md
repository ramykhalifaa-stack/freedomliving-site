# freedomliving.ae, local copy

Source: the Hostinger AI Builder (Horizons) export `horizons-export-aa999fe9-…ef33bc71246b.zip`
(5 June 2025). Commit 1 is that export untouched. Commit 2 brings it in line with the live site:
one leadership title, and the 8 images served from `public/media/` instead of Hostinger storage.
The share image (`og:image` in `index.html`) still points at Hostinger on purpose, because link
previews need a full web address.

## Run it

```bash
cd ~/Projects/freedomliving-site
npm ci                 # first time only
npm run build && npx vite preview --port 5181   # the site exactly as it would be published
npm run dev            # editing mode, reloads as you save
```

Open http://localhost:5181

## Behaviour carried over from live, deliberately unchanged

- The contact form shows "Inquiry Sent" but sends nothing anywhere. The WhatsApp button and the
  email links work.
- Google Maps, WhatsApp and Google Fonts need an internet connection.

## Publishing

`npm run build` writes `dist/`. Its contents, including `.htaccess`, are what go into the host's
`public_html`. Once the code is edited here it can no longer go back into the AI Builder.
