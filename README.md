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

## Refreshed Termly Policies
Replaced the locally hosted Privacy Policy and Cookie Policy with the newest
Termly-generated HTML supplied after the updated cookie scan and policy refresh.

The current Cookie Policy includes the newly detected cookie classifications,
and the updated Privacy Policy is now the current Termly-generated version.
Termly attribution remains intact, and the site-wide consent banner plus
Consent Preferences footer link remain in place.

## Post 9126 Header Branding
Updated the site header to use the official circular Post 9126 logo instead of
the oversized generic VFW wordmark. The accompanying identity now reads
"VFW Post 9126" on one line with "Glenpool, Oklahoma" beneath it.

Header spacing and logo sizing were tightened so the local Post identity feels
intentional while preserving room for the existing navigation, Donate button,
and Join the VFW button.

## Events Page: Upcoming Events List
Kept the Google Calendar in Month view and added a second, shorter Google
Calendar Agenda view directly beneath it. This gives visitors an at-a-glance
monthly calendar plus a more readable list of upcoming event names, dates,
and times.

The agenda section is responsive and includes a direct link to the full
Google Calendar.

## Gaming Discord
Added the Post 9126 Gaming Community Discord invite:
https://discord.gg/PSAdURVZNG

Placement:
- Prominent "Join the Discord" button in the Gaming page introduction
- Second Discord button in the Gaming page Discord card
- Homepage Gaming feature button
- "Gaming Discord" link in the site-wide footer Connect section

The main navigation remains unchanged to avoid crowding the header.

## Monthly Meeting Potluck
Updated recurring monthly meeting information to note:
- Potluck at 5:00 PM
- Post meeting at 5:30 PM
- Third Sunday of each month

## Monthly Meeting Potluck Correction
Updated all remaining meeting references so they consistently show:
- Potluck at 5:00 PM
- Monthly Post meeting at 5:30 PM
- Third Sunday of each month

## Address Clarification
Updated Post address information to distinguish:
- Physical address: 46 W 145th St South, Glenpool, OK 74033
- Mailing address: 14348 S Broadway St, Glenpool, OK 74033

The physical address remains the location visitors should use to come to the Post.

## Address Cleanup
Clarified the Post's two addresses:
- Physical/Post location: 46 W 145th St South, Glenpool, OK 74033
- Mailing address: 14348 S Broadway St, Glenpool, OK 74033

The Contact page now shows each address once, clearly labeled. Site footers now label
46 W 145th St South as the Post location so visitors do not mistake it for the mailing address.

The Contact page monthly meeting information also now includes the 5:00 PM potluck before
the 5:30 PM meeting.

## Events + Gaming Refresh
Events:
- Moved "Next Upcoming Events" agenda/list view above the monthly calendar.
- Kept the monthly calendar below with the Regular Post Schedule and Oklahoma VFW Events cards.
- Replaced development-style calendar copy with visitor-facing event copy.
- Renamed the month section to "Monthly Calendar."

Gaming:
- Expanded the Gaming page to reflect the current Discord/community structure.
- Added PC & Online Gaming, Tabletop Gaming, and Fantasy Sports sections.
- Added Looking for Group, Game Suggestions, Tech Help, and Tournaments.
- Added Dungeons & Dragons, Magic: The Gathering, board games, fantasy football,
  fantasy baseball, and fantasy basketball.
- Kept the established Gaming Community branding and Discord invite.

## Events Layout Refinement
Reworked the Events page for a cleaner visual hierarchy:
- Next Upcoming Events now occupies the main left column at the top.
- Regular Post Schedule and Oklahoma VFW Events are stacked in a narrower right column.
- The upcoming-events agenda is shorter so it does not dominate the page.
- The Monthly Calendar now spans the full page width underneath.
- Responsive behavior keeps the layout readable on tablets and phones.


## v24 Full Audit + Typography Refresh
Performed a site-wide consistency and technical audit. Updated typography to a more distinctive, no-third-party-request font stack, fixed stale placeholder text, corrected a CSS variable issue, improved scholarship heading styling, added page-specific metadata and favicon support, improved mobile-nav accessibility, and corrected the locally hosted Termly postal address to the Post mailing address. See AUDIT.md for details.

## Social Feeds + Favicon
- Added a homepage “Follow VFW Post 9126” section with live Facebook Page timeline and Instagram profile embed.
- Instagram profile: https://www.instagram.com/vfw_post_9126/
- Added Instagram to the site-wide footer Connect links.
- Replaced the JPG browser icon with a proper favicon set: favicon.ico, 16/32 PNGs, Apple touch icon, 192/512 site icons, and a web app manifest.
- Social embeds are lazy-loaded and remain subject to Termly Auto Blocker / visitor consent.
- After deployment, run a fresh Termly scan so any Meta cookies/vendors are categorized and the Cookie Policy can be refreshed.

## Instagram Correction
Corrected the Post's Instagram account everywhere on the site to:
https://www.instagram.com/vfw_post_9126/
Handle: @vfw_post_9126

## v27 — Authentic Post Photography Pass
Integrated real VFW Post 9126 photography supplied by the Post across the site.

Key changes:
- Homepage hero now features a real Post member group photo, with the Post 9126 logo as a badge.
- Homepage Guitars for Vets, Community Wednesday, and Snapshots With Santa cards now use real program/community photography.
- Added a Post-life photo strip to the homepage.
- About page now uses real memorial/community and family imagery.
- Programs page now uses Guitars for Vets rehearsal, graduation, alumni, community, and Snapshots With Santa photography.
- Events page includes a compact photo strip showing remembrance, community gatherings, and holiday traditions.
- Membership page now includes an authentic continued-service/community photo callout.
- Donate page now includes a real Post outreach image.
- Scholarships page includes a youth/civic-service photo callout without presenting it as a scholarship-award photo.
- Gaming remains branded with the official Gaming Community logo until authentic gaming photos are available.
- Contact remains photo-light because no strong exterior building photo is currently available.
- Added web-optimized WebP copies of selected images under public/assets/photos/.

## v28 — Final Pass
Completed final production polish: SEO metadata, sitemap/robots, structured data, accessibility, keyboard/mobile navigation behavior, image layout stability, contact privacy-note wording, branded 404 page, and a full static link/asset audit.

## v29 — Oklahoma Department Link
Replaced the former Oklahoma VFW Department calendar link with the official
VFW Department of Oklahoma homepage across the site.

Events-page card now:
- Uses the heading "VFW Department of Oklahoma"
- Describes statewide news, programs, resources, leadership and Department updates
- Uses the button "Visit Oklahoma VFW"
- Links to https://vfwoklahoma.org/
