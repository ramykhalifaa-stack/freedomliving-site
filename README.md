# freedomliving.ae

A stand-alone React site (built with Vite), set up like the SHE site: no Hostinger AI Builder,
no server to run. It was first exported from the AI Builder (`git log` shows the untouched
export as the first commit).

## Run it on the Mac

```bash
cd ~/Projects/freedomliving-site
npm ci                                                        # first time only
npx vite build --mode mac && npx vite preview --port 5181     # the site as published
npm run dev                                                   # editing mode, reloads on save
```

Open http://localhost:5181. On the Mac the contact form saves entries to
`form-entries-local.jsonl` and emails nothing.

## Publish

`./deploy.sh "What changed"`. It builds, copies the site into `docs/` and pushes to GitHub,
and GitHub Pages serves it. First-time setup, including the form key and the DNS switch, is in
`GO-LIVE.md`.

## What changed from the AI Builder version

- The AI Builder's editor plugins and the scripts it added to every page are gone.
- Images are in `public/media/` instead of Hostinger storage.
- The contact form used to show "Inquiry Sent" and send nothing. It now emails each enquiry
  through Web3Forms (`src/lib/sendForm.js`), and says "Not sent" if that fails.
