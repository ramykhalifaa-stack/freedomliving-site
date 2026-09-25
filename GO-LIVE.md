# Putting freedomliving.ae live without Hostinger's AI Builder

The same set-up as the SHE site: GitHub keeps the code, GitHub Pages serves the site for free,
and the domain points at GitHub. Email stays exactly where it is, with Hostinger Mail.
Steps 1 to 3 change nothing for visitors. Only step 4 moves the live site.

## 1. The form key (free, two minutes)

The forms send each entry by email through Web3Forms, a free form-to-email service
(250 entries a month).

1. Go to web3forms.com, enter **info@freedomliving.ae** and press Create Access Key.
2. The key arrives in that inbox. Put it in a file called `.env.production` in this folder:

   ```
   VITE_WEB3FORMS_KEY=the-key-from-the-email
   ```

The key is meant to be public (it ends up in the page), but the file is left out of git anyway.
`deploy.sh` refuses to publish without it, so the forms can never go live unable to send.

## 2. Put the code on GitHub

GitHub Pages is only free for public repositories, as with SHE.

```bash
cd /Users/ramy/Projects/freedomliving-site && gh repo create freedomliving-site --public --source . --remote origin --push
```

```bash
cd /Users/ramy/Projects/freedomliving-site && ./deploy.sh "First publish"
```

## 3. Turn on GitHub Pages

In the repository: Settings, Pages, source "Deploy from a branch", branch `main`, folder `/docs`,
Save. Custom domain: `freedomliving.ae`. Tick Enforce HTTPS once it becomes available.

Check the site at https://ramykhalifaa-stack.github.io/freedomliving-site/ before going on.

## 4. Point the domain at GitHub (this is the switch-over)

In hPanel: Domains, freedomliving.ae, DNS / Nameservers. **Leave the MX and TXT records alone**; they
are your email.

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | ramykhalifaa-stack.github.io |

Delete the old A, AAAA, ALIAS or CDN records for `@` and `www` that point at Hostinger.
Changes usually show within an hour. Check at dnschecker.org. To undo, put the old records back.

## 5. Afterwards

- Updates: change the code, then `./deploy.sh "What changed"`.
- Once the new site has run for a week, the AI Builder project and the Hostinger web hosting are no
  longer needed for this site. Keep Hostinger Mail and the domain renewal.
