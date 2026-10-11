# HyperChromia docs site

Built with [Docusaurus](https://docusaurus.io/). Source content lives in `docs/`.

## Local development

```bash
npm install
../scripts/sync-changelog.sh
npm run start
```

`docs/changelog.md` is generated from the repo root's `CHANGELOG.md` by
`scripts/sync-changelog.sh` — gitignored, not committed, run it once before building locally.

## Build

```bash
npm run build
```

Generates static output into `build/`.

## Deployment

Deployed automatically by `.github/workflows/pages.yml` on every push to `master` that touches
`docs-site/`, `CHANGELOG.md`, or `scripts/sync-changelog.sh` — builds with `npm run build` and
publishes via GitHub Pages' official Actions-based flow (`actions/deploy-pages`), not the
`npm run deploy` / `gh-pages` branch approach.
