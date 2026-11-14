# Stories From Space — The Losers

An educational, bilingual (Arabic/English) web experience for the NASA Space Apps Challenge prompt **Abandoned but not Forgotten**.

## Project structure

- `index.html` — mission map and an introduction to active, silent, and passive space artifacts.
- `voyager.html` — Voyager 1, an operating interstellar spacecraft with a reduced instrument set.
- `curiosity.html` — Curiosity, an active Mars rover studying ancient environments.
- `pioneer.html` — Pioneer 10, a silent spacecraft whose last signal was received in 2003.
- `apollo.html` — the Apollo 11 lunar laser retroreflector, a passive experiment left on the Moon.
- `app.js` — bilingual stories, status notes, narration, science cards, distance/status displays, and mission-specific mini-game wording.
- `enhancements.js` — chapter summaries, progress tracking, and 15 bilingual quiz questions per mission.
- `style.css` — shared responsive layout and visual design.
- `assets/images/` — the photographs and original educational diagram used by the pages.

## Learning design

Each mission is told in the first person as a storytelling device. The page explicitly explains that the narrator is fictionalized; facts and dates come from the cited sources. The four mission pages include chapter summaries, optional full text, browser narration, interactive quizzes, discovery cards, and a small drawing challenge.

Each full story contains 600 words in English and 600 words in Arabic, counted by whitespace-separated words across its five chapters.

## Mission status is not the same for every artifact

- Voyager 1: still returns limited science data; instrument status is described using NASA's April 17, 2026 status snapshot.
- Curiosity: an active rover on Mars; its status note refers to NASA's August 26, 2026 Mount Sharp elevation milestone.
- Pioneer 10: its primary science mission ended in 1997; the last faint signal was received on January 23, 2003.
- Apollo 11 reflector: passive equipment on the Moon; it needs no onboard power and supports lunar laser-ranging research.

These are dated status snapshots, not a live telemetry feed. Recheck official source pages before presenting the site publicly if the status date has changed.

## Sources and image credits

Mission source links are included on each story page. The Apollo 11 hero graphic is an original explanatory diagram, not a historical photograph and not to scale. A NASA/JSC Media Archive photograph of the deployed reflector (AS11-40-5952) is linked from the Apollo sources section. Check the licence/credit terms of each image asset before reuse or redistribution.

## Run locally / deploy

Keep the HTML pages, `app.js`, `enhancements.js`, `style.css`, and the `assets/` folder together. This is a static site; no build step or backend is required. For GitHub Pages, upload the complete folder contents while preserving the `assets/images/` paths, then open `index.html`.

Before submitting, test all four story links, Arabic/English switching, dark/light theme persistence, mobile layout, all image URLs, narration in both languages, the chapter quizzes, and each mission's mini-game. Browser speech voices differ by device and language support.
