# Website manual review — 20 October 2026

Reviewed the local production website at `http://127.0.0.1:4185` using browser-driven interactions and visual inspection of fresh screenshots. Every public page was included. The accessibility defect found in this review has now been fixed as part of the dark-theme improvements; the original finding and evidence are retained below.

## Fix verification — 20 October 2026

Dark-mode case-study summaries now use the theme's lavender foreground when hovered or visibly focused. All three projects passed hover, expanded-state, and keyboard-focus checks in Chrome and Edge, with contrast above 4.5:1. The refreshed dark theme also passed all five routes at 1440, 768, 390, and 320 px in Chrome and at desktop/mobile widths in Edge, with no page errors. Gallery controls, theme persistence, light-palette regression checks, and short landscape navigation passed. Evidence: [dark-theme results](.tmp/dark-theme/results.json).

## Original finding — resolved

### [P2] Case-study hover labels lose contrast in dark mode

**Location:** Projects → any “Read … case study” disclosure. [Source: design.css:309](my-portfolio/my-app/src/design.css#L309).

**Reproduce:** Switch to dark mode, open Projects, and hover a case-study summary. Clicking to expand it leaves the pointer over the same label. The label changes from light text to dark blue, becoming noticeably harder to read against the dark disclosure background. The touch-emulated capture also shows this color after tapping the disclosure.

**Confirmed:** All three case-study labels reproduce in Chrome and Edge. The rendered hover color is `rgb(40, 86, 217)` against a composited `rgb(32, 32, 39)` background. At the tested mobile width the label is 11.52 px, weight 500, with approximately **2.64:1** contrast. Normal-sized text requires at least **4.5:1** under [WCAG's contrast criterion, including hover states](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

**Cause and recommendation:** The shared hover rule uses the fixed light-theme blue `#2856d9`. Use a theme-aware foreground such as the existing `--accent-ink`, and recheck hover, keyboard focus, and expanded states in both themes. The disclosures still expand and collapse; this finding concerns readability of the control label.

**Evidence:** [Dark-mode screenshot](.tmp/manual-review-current/case-study-open-dark.png), [touch disclosure capture](.tmp/manual-review-current/touch-case-study.png), and [measurements for all six browser/project combinations](.tmp/manual-review-current/case-study-contrast.json).

## Coverage and results

| Area | Result |
| --- | --- |
| Home, About, Projects, Experience, Contact | Chrome: five widths (320, 390, 768, 1024, 1440 px), both themes, all five pages — 50 combinations passed loading, heading, metadata, image, and horizontal-overflow checks |
| Second browser | Edge: desktop and mobile widths, both themes, all five pages — 20 combinations passed route/layout and keyboard skip-link checks |
| Visual review | Inspected fresh full-page captures of all five pages at desktop/mobile widths in both themes, with detailed captures of content, disclosures, dialogs, workflow scenes, and offline/error states |
| Navigation and history | Desktop/mobile links, active states, heading focus, contact actions, theme persistence, and browser Back scroll restoration passed |
| Short landscape navigation | Every mobile-menu link remained reachable by focus at 568 × 320, 320 × 256, and 390 × 844; Escape closed the menu and restored focus |
| Enlarged text | All five routes remained within the viewport at 1280 px with the root text size doubled; this was a text-sizing check, not a browser-zoom conformance audit |
| Project galleries | All 21 images decoded; category galleries, next/previous, arrow keys, Escape, focus trap, background inertness, focus restoration, and three case-study disclosures passed functional checks |
| Walkthroughs and animation controls | All 18 slides, scene selection, previous/next boundaries, replay, playback controls, and process pause/play passed. Touch-emulated scene selection and learning-animation controls passed. Settled mobile captures showed the chart bars and all three workflow scenes correctly |
| Contact validation and clipboard | Required fields, invalid email, short messages, clipboard feedback, and Gmail/Outlook disclosures passed |
| Contact responses | Locally intercepted success, pending activation, and server error responses displayed appropriate feedback. A real 20-second locally intercepted timeout disabled duplicate submission, preserved the draft, and restored submission afterward |
| Résumé | Desktop and mobile download controls worked; the downloaded file was a valid 164,322-byte PDF |
| Unknown route | Correct 404 content, noindex metadata, and working home recovery link |
| Offline | All five saved routes reloaded offline; the offline notice appeared, contact submission was disabled, and reconnecting re-enabled it |
| Reduced motion | Content stayed visible, autoplay remained paused beyond its normal interval, and manual slide navigation worked |

All **64 Chrome functional check groups passed**. The separate Edge and touch-emulation checks also passed. The contrast defect above was found during visual state inspection; it is not covered by those functional assertions.

No uncaught JavaScript page errors were recorded. Console messages caused by the deliberately simulated HTTP 500, deliberate missing route, and network disconnection were expected test outcomes.

## External destinations

Read-only requests checked 17 linked HTTPS destinations. Thirteen responded with HTTP 200, including the linked GitHub repositories, both project demo URLs, the client website, Gmail's sign-in redirect, and the form provider's privacy document.

Four destinations could not be verified through automated requests: LeetCode and NamasteDev returned 403, Outlook returned 417, and LinkedIn returned 999. These results are recorded as **unverified**, not confirmed broken links. No sign-in or third-party application workflows were exercised.

## Artifacts and limits

- [Main results](.tmp/manual-review-current/results.json), [Edge and external-link results](.tmp/manual-review-current/extra-results.json), and [touch results](.tmp/manual-review-current/focused-results.json).
- [Desktop light overview](.tmp/manual-review-current/overview-1440-light.png), [desktop dark overview](.tmp/manual-review-current/overview-1440-dark.png), [mobile light overview](.tmp/manual-review-current/overview-390-light.png), and [mobile dark overview](.tmp/manual-review-current/overview-390-dark.png).
- [Settled mobile gallery](.tmp/manual-review-current/chrome-gallery-settled.png), [landscape menu](.tmp/manual-review-current/edge-menu-568-320.png), [contact timeout](.tmp/manual-review-current/mobile-contact-timeout.png), and [offline Contact](.tmp/manual-review-current/offline-contact.png).

This review tested the local production build, not a separately deployed version. Mobile testing used browser emulation; physical devices, Safari, Firefox, and screen-reader speech output were not tested. Contact requests were intercepted locally, so no real messages were sent and actual inbox delivery was not verified. The previous print/year-boundary fixes were already verified on this unchanged build; that evidence remains in [FULL_CODE_REVIEW.md](FULL_CODE_REVIEW.md).

No application code was changed during this review. Screenshots and machine-readable evidence are in the Git-ignored `.tmp/manual-review-current` directory.
