# Code review and browser QA — 20 October 2026

Reviewed the working tree and tested the local production build at `http://127.0.0.1:4185`. The two findings from this review have now been fixed and verified in Chrome and Edge. No critical defects were found in the reviewed code or tested flows. The original findings and audit results are retained below.

## Fix verification — 20 October 2026

- **P2 resolved:** The mobile header is constrained to the viewport height, its top row stays visible, and the expanded panel scrolls independently. The contact action is fully visible and clickable after scrolling. All menu links also scroll into view on keyboard focus, including after portrait-to-landscape resizing. Escape still closes the menu and restores focus.
- **P3 resolved:** The four named subpage routes are explicitly case-sensitive, matching the existing host and metadata rules. `/About` and `/PROJECTS` now display the actual 404 page with matching title and metadata, both on direct load and client navigation. Canonical lowercase URLs, trailing slashes, queries, and the preview's `index.html` redirect passed regression checks. The README documents this policy.
- **Browser results:** 24 menu viewport/theme/browser combinations and 28 direct URL/browser checks passed, plus rotation, keyboard access, physical clicks, client navigation, and recovery-link checks. No uncaught page errors were reported.
- **Build results:** ESLint, TypeScript, production build, route/SEO verification, and all seven service-worker tests passed again.

Fix sources: [studio.css](my-portfolio/my-app/src/studio.css), mobile rules around line 288; [App.tsx](my-portfolio/my-app/src/App.tsx), routes around line 16. Evidence: [results](.tmp/review-fixes/results.json), [fixed landscape menu](.tmp/review-fixes/menu-landscape-light.png), and [consistent 404 page](.tmp/review-fixes/uppercase-404.png).

## Original findings — resolved

### 1. [P2] Keep the expanded mobile menu within the usable viewport

**Source:** [NavBar.tsx](my-portfolio/my-app/Components/NavBar.tsx), lines 100 and 153; [studio.css](my-portfolio/my-app/src/studio.css), line 39.

The expanded panel sits inside a sticky header and has no maximum height or internal scrolling. At a 568 × 320 viewport, the “Let's talk” link starts at approximately y=303.8 and ends at y=347.8. Most of the link, including its label and center, falls below the viewport. Scrolling the document by 450 pixels leaves the link at the same position because the header remains pinned. This reproduces in Chrome and Edge; a 390 × 320 viewport also clips the link.

**Reproduce:** Set the viewport to 568 × 320, open the menu, and scroll down. The bottom contact action remains clipped.

**Recommendation:** Constrain the expanded panel to the remaining viewport height and let the panel scroll independently. Recheck touch and keyboard access to every menu item after rotation and at short viewport heights.

**Evidence:** [Screenshot](.tmp/review-qa-current/landscape-menu.png), [Chrome measurements](.tmp/review-qa-current/edge-cases.json), and [Edge reproduction](.tmp/review-qa-current/edge-smoke.json).

### 2. [P3] Match route casing consistently across rendering and metadata

**Source:** [App.tsx](my-portfolio/my-app/src/App.tsx), lines 16–19; [Layout.tsx](my-portfolio/my-app/Components/Layout.tsx), lines 52–60; [vite.config.ts](my-portfolio/my-app/vite.config.ts), route lookup in the preview middleware.

React Router accepts mixed-case versions of the configured routes, while metadata lookup and preview route matching use exact case. Opening `/About` therefore renders the About heading while the response is HTTP 404, the title is “Page Not Found,” the canonical points to the homepage, and robots metadata says `noindex, follow`. `/PROJECTS` behaves similarly. A client-side history navigation to `/PROJECTS` also renders Projects with 404 metadata, confirming the inconsistency exists in the application independently of the preview server.

**Reproduce:** Open `/About` or `/PROJECTS` directly and compare the displayed page with the document title and metadata. Lowercase routes, trailing slashes, and query parameters passed.

**Recommendation:** Adopt a consistent policy: redirect variants to canonical lowercase URLs across the host and application, or make the React routes case-sensitive so unsupported variants render the actual 404 view.

**Evidence:** [Route variants](.tmp/review-qa-current/edge-cases.json), [client navigation reproduction](.tmp/review-qa-current/edge-smoke.json), and [rendered uppercase route](.tmp/review-qa-current/uppercase-route.png).

## Code review scope

- Shared layout, route definitions, page metadata, navigation, scroll restoration, and keyboard focus.
- Contact validation, AJAX response handling, activation/error/timeout states, abort cleanup, and clipboard feedback.
- Gallery state, focus trapping, body scroll locking, Escape handling, and focus restoration.
- Workflow playback, scene selection, reduced motion, and viewport-based animation pausing.
- Prerendering, generated service-worker configuration, cache strategies, installation, activation, and storage failure handling.
- Deployment route configuration and the documented project structure.

The previously fixed gallery close control, skip link, and mobile Escape behavior passed regression checks. No additional actionable defects were confirmed in the other reviewed areas.

## Browser QA results

| Area | Result |
| --- | --- |
| Chrome: five routes × five widths × two themes | All 50 combinations passed page load, single main heading, metadata, visible-image, and horizontal-overflow checks |
| Edge: five routes × two widths × two themes | All 20 combinations passed route/layout checks and applicable keyboard regressions |
| Visual inspection | Fresh desktop/light and mobile/dark captures of every page, plus gallery and finding reproductions |
| Project galleries | All 21 screenshots loaded; category galleries, arrow keys, Escape, focus trap, focus restoration, and three case-study disclosures passed |
| Interactive walkthroughs | All 18 slides, scene selection, previous/next boundaries, replay, and playback controls passed |
| Navigation | Active links, heading focus, browser Back restoration, standard-height mobile navigation, and résumé downloads passed |
| Contact | Required fields, invalid email, minimum message length, clipboard, provider disclosures, simulated success, activation, and server error passed |
| Offline | All five saved routes reloaded offline; notice displayed; contact submission disabled offline and re-enabled after reconnecting |
| Reduced motion | Content remained visible, autoplay stayed paused beyond its normal interval, hidden autoplay controls matched the CSS policy, and manual slide navigation worked |
| Previous fixes | Skip link was first in keyboard order, Escape restored menu-toggle focus, and the gallery close control remained clickable along its lower edge |

The initial broad runner recorded two failed assertions. Clipboard feedback passed an isolated recheck that waited for the asynchronous UI update. The reduced-motion assertion incorrectly expected a visible autoplay button; the CSS intentionally hides it in this mode. The corrected check verified paused playback and working manual navigation. These were not classified as product defects.

Expected console messages from a deliberately simulated HTTP 500, the 404 check, and network disconnection were separated from application failures. Edge reported no uncaught page errors during the normal-route checks.

## Build and static checks

All completed successfully:

```sh
npm run lint
npx tsc -b
npm run build
node scripts/verify-route-pages.mjs
node --test scripts/verify-service-worker.test.mjs
```

The SEO verifier passed all five routes and the generated 404 checks. All seven service-worker tests passed. The build no longer emitted the old Browserslist data warning.

## Limits and artifacts

This was a local production-build review, not an audit of a separate deployed version. Contact responses were intercepted; no real messages were sent, and inbox delivery/activation was not verified. Safari, Firefox, physical mobile devices, and screen-reader speech output were not tested. Third-party destinations were not re-audited in this pass.

Fresh local artifacts are in [.tmp/review-qa-current](.tmp/review-qa-current): [main results](.tmp/review-qa-current/results.json), [Edge results](.tmp/review-qa-current/edge-smoke.json), [edge cases](.tmp/review-qa-current/edge-cases.json), and [isolated rechecks](.tmp/review-qa-current/rechecks.json). This directory is ignored by Git; the report preserves the findings in text.
