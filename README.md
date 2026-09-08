# VFW Post 9126 Website

Cloudflare Workers Static Assets deployment.

## Cloudflare dashboard settings
- Build command: leave blank
- Deploy command: `npx wrangler deploy`

The deployable website is in `/public`.

## Formspree redirect
A branded thank-you page is included at `/public/thank-you.html`.

In Formspree, set the form's Thank You / Redirect URL to:

`https://vfw9126.org/thank-you.html`

## Privacy Policy
Termly Privacy Policy added at `/public/privacy-policy.html`.
Footer links on all pages now point to the policy, and the contact-form privacy notice links to it.

The Termly attribution is preserved.
