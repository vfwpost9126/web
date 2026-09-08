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

## Cookie Policy
Termly Cookie Policy added at `/public/cookie-policy.html`.
Footer links on all pages now include both Privacy Policy and Cookie Policy.
The local Privacy Policy page also links to the Cookie Policy.

Note: the Cookie Policy references a Termly Cookie Preference Center. The actual
Termly consent-banner / preference-center script still needs to be added once
its embed code is provided.

## Termly Consent Banner
Installed the Termly Consent Management Platform on every HTML page using:

`https://app.termly.io/resource-blocker/d2a9b477-4a7d-46b9-b0a6-2892b2298f8f?autoBlock=on`

The script is placed immediately after the opening `<head>` tag so Termly can
auto-block non-essential third-party scripts before they run.

## Consent Preferences
Added Termly's permanent consent-preferences link to every page footer:

`<a href="#" class="termly-display-preferences">Consent Preferences</a>`

Visitors can use it at any time to reopen the Termly preference center and
change their cookie choices.
