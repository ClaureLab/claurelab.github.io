# Claure Lab

A static lab website for Houston Claure and the Claure Lab at the University of Virginia. The white, centered academic layout follows the Figueroa Robotics Lab reference. Pages: Home, People, Publications, Research, and Joining.

## Preview

From this repository:

```sh
node claure-lab/build.mjs
python3 -m http.server 4173 --directory claure-lab/dist
```

Open http://localhost:4173/ . No packages or package installation are needed; Node.js and Python 3 are sufficient.

## Edit content

- `claure-lab/data/people.json`: member names, roles, and photo filenames.
- `claure-lab/data/research.json`: the three research themes and related publications.
- `claure-lab/data/publications.json`: publication records and DOI links.
- `claure-lab/build.mjs`: page copy and shared markup.
- `claure-lab/styles.css`: visual design and responsive layouts.
- `claure-lab/assets/images/`: optimized supplied photos and the research diagram from Houston’s website.

The homepage uses the supplied group photo, with its full composition preserved. People are grouped into master’s, medical, and undergraduate students in `people.json`.

## GitHub Pages

The intended repository is `hbclaure/Lab-Website` with the site at `https://hbclaure.github.io/Lab-Website/` once published. No custom domain is configured.

1. Create the repository and push this project to its `main` branch.
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. The included `.github/workflows/pages.yml` builds and publishes the website on each push to `main`. It can also be run manually from Actions.

The 404 page uses `/Lab-Website/` as its base. Update that value in `build.mjs` if the repository is renamed. The generated `dist` directory is ignored by Git; the workflow builds it from source.

## Content sources

Research summaries and the non-hardware publication selection are based on https://www.houstonclaure.com/research/ . Current affiliation and publication links were checked against https://research.uvaem.com/labs/claure-lab . The emergency-department robotics section describes a research direction, not a deployed clinical system.
