# Website code review — 20 October 2026

Reviewed the current working tree in `my-portfolio/my-app`, including all five pages, shared components, interactive showcases, styles, prerendering, offline support, and deployment configuration. Both findings below have now been fixed and verified. The original review and reproduction evidence are retained below.

## Fix verification — 20 October 2026

- **P2 resolved:** Print overrides cancel learning-card entrance animations and make every card fully visible. Workflow stages also use their static final appearance when printing, including connection-line positioning. Screen animations remain enabled for visitors with normal motion preferences.
- **P3 resolved:** Vite supplies a build-year constant shared by prerendering and the client bundle. The footer uses that year for the initial hydration snapshot, then renders the visitor's current year. Future- and past-year browser clocks produced the expected copyright year without hydration errors.
- **Browser results:** Chrome and Edge passed desktop/light and mobile/dark print/PDF checks. All three learning-card titles appeared in all four PDFs, with fully opaque cards. All 18 workflow slides passed print visibility checks at both widths in both browsers (72 checks). Normal screen entrance animations completed successfully. Each browser also passed six future-year route loads, including the 404 page, plus a past-year About load; no uncaught page errors were reported.
- **Project checks:** Production build, ESLint, TypeScript, route/SEO verification, and all seven service-worker tests passed after the changes.

Fix sources: [AILearning.css](my-portfolio/my-app/Components/AILearning.css), [WorkInMotion.css](my-portfolio/my-app/Components/WorkInMotion.css), [Footer.tsx](my-portfolio/my-app/Components/Footer.tsx), and [vite.config.ts](my-portfolio/my-app/vite.config.ts). Evidence: [results](.tmp/full-review-fixes/results.json), [fixed print preview](.tmp/full-review-fixes/learning-print-fixed.png), and [verification script](.tmp/verify_full_review_fixes.py).

## Original findings — resolved

### 1. [P2] Make animated content visible when printing

**Source:** [AILearning.css:310](my-portfolio/my-app/Components/AILearning.css#L310), together with the incomplete print reset in [index.css:233](my-portfolio/my-app/src/index.css#L233).

The learning cards use an entrance animation with `animation-fill-mode: both`, starting at zero opacity. When their section is outside the viewport, the IntersectionObserver state pauses that animation. Printing includes the section without necessarily making it intersect the screen viewport, so cards can remain partially transparent or completely invisible in the PDF. The existing print styles reset the enclosing reveal elements but do not reset these card animations.

**Reproduction:** Open the production homepage in Chrome at 1440 × 900, wait for initial loading without scrolling, and print to PDF with normal motion preferences. In the captured run, the first two cards had opacity approximately 0.87 and 0.51; the third had opacity 0. Its title, “AI in products,” was absent from the exported PDF's extracted text. Visual inspection also confirmed the missing third card.

**Suggested fix:** Add print overrides that cancel content entrance animations and restore their visible final state independently of the IntersectionObserver visibility state. Review the workflow stage's similarly paused descendants in the same pass. A temporary browser-only override restored all three learning-card titles in the control PDF; no repository styles were edited.

**Evidence:** [Probe results](.tmp/full-code-review/probes.json), [original PDF](.tmp/full-code-review/home-before-scroll.pdf), [rendered print page](.tmp/full-code-review/print-missing-learning.png), and [control PDF](.tmp/full-code-review/home-print-control.pdf).

### 2. [P3] Keep the footer's initial year consistent during hydration

**Source:** [Footer.tsx:49](my-portfolio/my-app/Components/Footer.tsx#L49); production hydration starts in [main.tsx:15](my-portfolio/my-app/src/main.tsx#L15).

The footer calls `new Date().getFullYear()` during rendering. Prerendering embeds the build machine's year in every generated page, while the initial browser render uses the visitor's current year. A build retained across New Year therefore produces different server and client text. Local timezone differences around New Year can also trigger the mismatch.

**Reproduction:** Load the current production `/about` page, which contains a prerendered 2026 footer, with the browser clock set to 1 January 2027. The footer displays 2027 and the page reports React hydration error #418. The page recovers; this is a hydration correctness and unnecessary rendering issue rather than a permanently broken route.

**Suggested fix:** Render a stable year shared by the build and initial client render, then update it after hydration if desired. Add a targeted year-boundary check when implementing the fix.

**Evidence:** The `futureYear` result in [probe results](.tmp/full-code-review/probes.json) records the rendered 2027 footer and the hydration error. The repeatable script is [full_code_review_probes.py](.tmp/full_code_review_probes.py).

## Scope and validation

| Area | Reviewed behavior |
| --- | --- |
| Routes and shared shell | Route matching, metadata, 404 rendering, navigation, theme persistence, skip link, focus handling, scroll restoration, header sizing, and footer |
| Page content | Home, About, Projects, Experience, Contact, résumé links, static content, icons, and image handling |
| Contact | Native validation, duplicate-submit protection, timeout/abort handling, activation and error responses, field preservation, clipboard feedback, and fallback links |
| Project gallery | State transitions, portal lifecycle, focus trap/restoration, inert background, keyboard controls, scroll locking, and close-control layout |
| Animated components | All three workflow scenes and slide data, autoplay boundaries, replay, scene changes, reduced motion, visibility pausing, reveal behavior, learning cards, and build-flow animation |
| Styling | Shared styles and component styles, responsive rules, print rules, reduced-motion behavior, and overlapping cascade rules |
| Build and hosting | Vite configuration, route prerendering, SEO configuration/checker, SSR entry, static offline page, Vercel rewrites, TypeScript/ESLint configuration, and package scripts |
| Offline support | Worker generation, versioning, core asset selection, runtime image caching, navigation fallback, cache cleanup, page-side image saving, and worker tests |

The latest verification of this unchanged application build passed ESLint, TypeScript, the production build, route/SEO verification, and all seven service-worker tests. Earlier Chrome/Edge regression results are preserved in [CODE_REVIEW_AND_QA.md](CODE_REVIEW_AND_QA.md); its two reported findings have already been fixed. This review added targeted print/PDF and simulated year-boundary probes, which exposed the two gaps above.

The review also inspected request boundaries and browser storage usage. No additional actionable defect was confirmed in the other reviewed areas. The unused legacy `ProjectCard.tsx` and overlapping shared style layers are maintenance opportunities, not confirmed functional failures.

Actual delivery to the owner's inbox and production-host redirect/header behavior were not exercised in this local review. No real contact message was sent, no deployment was performed, and existing uncommitted changes were preserved.
