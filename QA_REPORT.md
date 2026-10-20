# Website QA — 20 October 2026

Completed browser interaction checks and visual review of the local production build. No blocking failures were found in the tested flows. All three findings from the initial audit have now been fixed and verified in Chrome and Edge.

**Fix verification — 20 October 2026**

- QA-01 fixed: the gallery close control now occupies its own space in the header, with a 44 × 44 pixel touch target and 12 pixels of clearance above the media. All 48 browser/width/theme/project combinations passed. Clicking the previously obscured lower edge now closes the gallery; keyboard navigation and focus restoration still work. Long category titles also fit at 320 pixels wide.
- QA-02 fixed: a first-focusable “Skip to main content” link appears on keyboard focus and moves focus to the main landmark. All 40 browser/width/theme/page combinations passed, including the next Tab moving past the header.
- QA-03 fixed: Escape closes mobile navigation and returns focus to its toggle. Verified from the toggle and from menu links on every page in both browsers; normal navigation still closes the menu.
- Production build, ESLint, TypeScript, route/SEO verification, and all seven service-worker tests passed again. Browser verification reported no page errors.

Post-fix evidence: [browser results](.tmp/qa-fixes/results.json), [mobile gallery](.tmp/qa-fixes/gallery-fixed-light.png), and [keyboard skip link](.tmp/qa-fixes/skip-link-390-light.png). The original audit and evidence below are retained for reference.

**Environment and coverage**

- Production build served at `http://127.0.0.1:4185`.
- All five pages: Home, About, Projects, Experience, and Contact; also the unknown-route fallback.
- Chrome 155: 320, 390, 768, 1024, and 1440 pixel viewport widths, in light and dark themes. All 50 page/width/theme combinations passed the heading, metadata, visible-image, and horizontal-overflow checks.
- Screenshots of every page at desktop and mobile widths in both themes were visually reviewed. Animated sections were also checked while visible and after their entrance animations completed.
- Microsoft Edge: all five routes loaded successfully without horizontal overflow.
- Mobile touch emulation: menu navigation, opening a gallery, advancing a screenshot, and closing the gallery worked.

**Original findings — all resolved**

| ID | Priority | Finding | Reproduction and impact | Suggested change |
| --- | --- | --- | --- | --- |
| QA-01 | Medium | Gallery image covers part of the close button | At 390 or 320 pixels wide, open any featured project's preview gallery. The media container covers approximately the bottom 12 pixels of the 32 pixel close button. Hit testing confirms taps in the lower part reach the media container instead of the close button. The center of the button and Escape still close the gallery. The overlap is about 4 pixels at 768 and 1440 pixels wide. | Reserve enough space for the close control in the gallery header, or place it above the media with an appropriate stacking order. |
| QA-02 | Low | No keyboard shortcut link to the main content | Load any page and press Tab. Focus starts on the brand link; there is no “Skip to main content” link. Keyboard visitors must traverse the repeated header controls. The existing main landmark provides some assistance to screen-reader users. | Add a first-focusable link to `#main-content`, visible when focused. |
| QA-03 | Low | Escape does not close mobile navigation | At 390 pixels wide, open the mobile menu and press Escape. The menu remains expanded. Its close button and navigation links still work. | Handle Escape while the menu is expanded and return focus to the menu toggle. |

QA-01 source: [Projects.tsx](my-portfolio/my-app/Components/Projects.tsx). Original [screenshot](.tmp/qa-full-site/mobile-gallery-close-overlap.png) and [measurements](.tmp/qa-full-site/gallery-overlap.json).

QA-02 source: [Layout.tsx](my-portfolio/my-app/Components/Layout.tsx) and [index.css](my-portfolio/my-app/src/index.css). QA-03 source: [NavBar.tsx](my-portfolio/my-app/Components/NavBar.tsx).

**Passed behavior**

- Navigation links, active-page indicators, contact calls to action, heading focus after navigation, theme switching, and theme persistence across reload/navigation.
- Browser Back restored the exact saved scroll position when navigating with real mouse clicks.
- All 21 project gallery images, category galleries, next/previous buttons, arrow keys, Escape, focus trapping, background inertness, focus restoration, and all three case-study disclosures.
- All 18 interactive walkthrough slides, previous/next boundaries, replay and autoplay controls, all three goSharpener matching rules, process-animation pause/play, and AI-animation pause/play.
- Contact required fields, invalid email handling, minimum message length, clipboard copying, and Gmail/Outlook disclosures.
- Intercepted contact submissions: success, pending activation, server error, and timeout. Pending requests disabled submission and made fields read-only; timeout/error preserved the message. No real contact submission was sent.
- Desktop/mobile résumé downloads returned a valid PDF.
- All five routes reloaded offline after service-worker installation. Offline messaging was disabled and became available after reconnecting.
- Reduced-motion preference kept content visible, disabled the sampled animations, and paused walkthrough autoplay.
- Unknown URLs returned the 404 view with recovery links and `noindex` metadata.
- All eight checked GitHub destinations and the three linked project/client websites returned HTTP 200.
- Production build, ESLint, TypeScript build checks, route/SEO verification, and all seven existing service-worker tests passed.

**Limits and evidence**

This covers the local build, not a separate audit of the deployed portfolio. Safari, Firefox, physical mobile devices, screen-reader speech output, live email delivery, and FormSubmit activation were not tested. LeetCode and NamasteDev returned HTTP 403 to automated link requests, so those destinations remain unverified. LinkedIn and email-provider destinations were inspected as links without signing in.

With JavaScript disabled, prerendered page content and the standard contact form action remain available, but the mobile menu does not open. This is a progressive-enhancement limitation outside the normal JavaScript-enabled pass.

The initial scripted pass recorded two timing-related failures before navigation focus and reduced-motion effects settled. Both passed explicit follow-up checks. A scroll-restoration discrepancy caused by the automation tool's automatic scrolling also disappeared when using real mouse clicks. Expected logs from the simulated HTTP 500, deliberate 404, and disconnected network were not classified as application defects.

Raw evidence: [initial results](.tmp/qa-full-site/results.json), [follow-up results](.tmp/qa-full-site/followup.json), and [final interaction checks](.tmp/qa-full-site/final-checks.json). Screenshots and downloaded PDF are in [.tmp/qa-full-site](.tmp/qa-full-site).
