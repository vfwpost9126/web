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

## Donations / Zeffy
Added `/public/donate.html` and embedded the Zeffy donation campaign:
https://www.zeffy.com/en-US/donation-form/support-local-veterans-through-vfw-post--9126

The navigation now includes a gold Donate button, the footer includes Donate,
and the homepage hero includes a Donate CTA.

The embed uses Zeffy's documented v2 embed structure and includes a direct-link
fallback. After deployment, verify the embed against the Zeffy dashboard's
Campaign > Share > More ways to share > Embed code.

## Navigation Button Balance
Adjusted the header so Donate and Join the VFW use the same height.
Join remains slightly wider and red; Donate remains gold.

## 2026–2027 Scholarships
Expanded `/public/scholarships.html` with the supplied 2026–2027 Patriot's Pen
and Voice of Democracy information, including eligibility, theme, format,
deadline, national prize information, entry links, and downloadable local
copies of the supplied flyers.

Also added the supplied Scholar's App access/security information as a local PDF.

## Scholarship Link Correction
Corrected the Patriot's Pen and Voice of Democracy entry links by decoding the
QR codes directly from the supplied flyers:
- Patriot's Pen: https://bit.ly/4pyVRDs
- Voice of Democracy: https://bit.ly/4htOUSf

## Google Calendar Integration
The Events page now embeds the public VFW Post 9126 Google Calendar.

Calendar ID: `vfwpost9126@gmail.com`
Timezone: `America/Chicago`
Display mode: Agenda

The page retains the regular Post schedule as quick-reference information and
links separately to the Oklahoma VFW Department calendar.

After deployment, run another Termly cookie scan because embedded Google
Calendar content may introduce Google cookies or other third-party resources.

## Calendar Display
Changed the embedded Post 9126 Google Calendar from Agenda view to Month view.
