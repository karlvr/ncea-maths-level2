# The study site

A static site that renders the lesson scripts in [`../content`](../content) as
pages with worked figures. React, TypeScript and Vite; no server.

```sh
mise exec -- npm install
mise exec -- npm run dev      # http://localhost:5173
mise exec -- npm run check    # validate every figure
mise exec -- npm run build
```

## How the content reaches the page

Scripts stay in `content/` at the repository root and are pulled in at build
time; nothing is copied or duplicated. A lesson's title comes from its own
Markdown heading, so it is stated in one place.

[`src/syllabus.ts`](src/syllabus.ts) supplies only what Markdown cannot: which
topics belong to which module, and their order. Adding a lesson means writing
the script and adding its filename there.

[`src/lesson-body.ts`](src/lesson-body.ts) separates the prose from the
` ```figure ` blocks described in
[FIGURE-NOTATION.md](../content/FIGURE-NOTATION.md). The two are rendered
differently, and neither format knows about the other.

## Figures

A figure is a sequence of states of one piece of algebra. One state renders
statically; several render as a stepper, so a line can be attempted before it is
revealed. Every state is in the document whether revealed or not, so printing a
lesson gives complete working.

`npm run check` compiles every figure's LaTeX with the settings the browser
uses. It runs in CI before deployment, because a figure that fails to parse
would otherwise only show up on the published page.

## Deployment

Pushing to `main` builds and publishes to GitHub Pages
([workflow](../.github/workflows/deploy.yml)). Enable it once under
**Settings → Pages → Source → GitHub Actions**.

Routing is by hash and assets are referenced relatively, so the site works from
any path without configuration — a project page, a user page, or a local copy.
