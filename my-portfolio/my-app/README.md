This is my portfolio website.

## Contact form setup

The contact form sends messages to `shivamofficialsm@gmail.com` through [FormSubmit](https://formsubmit.co/). After deploying the site, submit the form once and open the activation email sent by FormSubmit to that address. Messages are delivered after the address is confirmed. Check the spam folder if the activation message is missing.

The form uses FormSubmit's AJAX endpoint so visitors stay on the contact page. It also has a standard HTML form action as a fallback when JavaScript is unavailable. To test delivery, use a real email address after activation and confirm the message reaches the inbox.

## Offline support

The production build generates a service worker after the route pages are rendered. On a visitor's first online visit, it saves the five portfolio routes, built assets, and key images. Other local media and the resume are saved when available. Returning visitors can then reload those routes offline. The contact form is disabled while the browser reports that it is offline; messages are not queued.

The cache name changes when the built files change, so a new deployment replaces the previous cache. To test locally, run `npm run build` and `npm run preview`, visit the site once online, then switch the browser's Network panel to Offline and reload `/about`, `/projects`, and `/contact`.
