# Personal website — Lehan (Emma) Dong

A small three-page static site: **Home**, **C.V.**, **Research**.
Plain HTML/CSS/JS — no build step, no dependencies.

## Files
- `index.html` — Home
- `cv.html` — C.V. (embeds `cv.pdf`)
- `research.html` — Research projects + presentations
- `data.js` — **all site content lives here; this is the only file you edit**
- `app.js` — rendering logic (rarely touched)
- `styles.css` — styling
- `cv.pdf` — **add your own CV PDF with this exact filename**

## To update the site
Open `data.js` and edit the `SITE` object — add a project to the `research` array,
change the intro paragraphs, update the date, etc. Save, commit, push. Done.
You never have to touch the HTML structure.

## Deploy on GitHub Pages
1. Create a new GitHub repository (any name works).
2. Add these files to the repo (drag-and-drop in the browser, or `git push`).
3. Add your `cv.pdf` to the repo root.
4. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, folder `/ (root)` → Save.
5. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

(For a root domain like `lehandong.com`, name the repo `<your-username>.github.io`
and add a custom domain in the Pages settings.)

Last updated: June 2026
