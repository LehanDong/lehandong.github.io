# Lehan (Emma) Dong — personal website

Static academic website for GitHub Pages. No build step is required.

## Pages

- `index.html` — About and News
- `research.html` — Research interests
- `projects.html` — Current and selected research projects
- `cv.html` — CV displayed through Google Docs Viewer on the published site

## Updating content

Most text is stored in `data.js`. Edit the relevant entry, commit the change, and push to the `main` branch.

The three News illustrations are in `assets/`. To use event photographs instead, add the images to the repository and update each `image` value in the `news` section of `data.js`.

## Local preview

Serve this folder with any local HTTP server and open `index.html`. GitHub Pages can publish the files directly from the repository root.
