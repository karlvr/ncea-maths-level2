# The study site

A static site that renders the lesson scripts in [`../content`](../content) as
pages with worked figures. React, TypeScript and Vite; no server.

```sh
mise exec -- pnpm install
mise exec -- pnpm dev      # http://localhost:5173
mise exec -- pnpm check    # validate every figure
mise exec -- pnpm build
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

`pnpm check` compiles every figure's LaTeX with the settings the browser
uses. It runs in CI before deployment, because a figure that fails to parse
would otherwise only show up on the published page.

## Practice sheets

Every lesson has a sheet of its own at `#/practice/<lesson>`, and every module
one at `#/practice/<subject>/<module>`: the questions with the reading taken
away, each still under the heading it was written beneath, numbered through the
sheet, with space to write in and no working at all. Nothing is authored for
it — `practiceSheet` in [`src/lesson-body.ts`](src/lesson-body.ts) reads the
sets out of the same scripts, and
[`src/components/Worksheet.tsx`](src/components/Worksheet.tsx) lays them out.
The space beneath a question is sized by the band it is pitched at.

## Icons

The mark is $x^2$ set in Iowan Old Style, the serif the lessons set their
mathematics in: an italic `x` with a roman `2`, paper on ink. `public/` holds
the three forms a browser asks for — an SVG for the tab, an ICO for the
browsers that will not take one, and a 180px PNG for an iOS home screen.

They are cut from the font's own outlines by
[`scripts/make-icons.py`](scripts/make-icons.py), which needs `fonttools` and
`rsvg-convert` and reads the font from its macOS path. The results are
committed, so neither is needed to build the site; run the script only to
change the mark.

## Deployment

Pushing to `main` builds and publishes to GitHub Pages
([workflow](../.github/workflows/deploy.yml)). Enable it once under
**Settings → Pages → Source → GitHub Actions**.

Routing is by hash and assets are referenced relatively, so the site works from
any path without configuration — a project page, a user page, or a local copy.
