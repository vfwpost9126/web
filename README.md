# VFW Post 9126 Website

Cloudflare Workers Static Assets deployment.

## Current Site Notes

- Current production version: **v41**
- Production site: **https://vfw9126.org**
- Static HTML/CSS/JavaScript site with deployable files under `/public`
- Hosted with **Cloudflare Workers Static Assets**
- Source controlled through **GitHub**
- Deployment command: `npx wrangler deploy`
- Cloudflare Web Analytics is enabled for traffic and Core Web Vitals
- **Termly** handles consent management, Privacy Policy, Cookie Policy, and consent preferences
- **Formspree** handles general website contact-form submissions; the current free plan does not provide a custom redirect
- **Zeffy** handles online donations
- **Jotform** handles Veteran Relief requests
- **Google Calendar** provides the public Post events calendar
- Facebook and Instagram content are embedded on the homepage
- Gaming Community Discord: https://discord.gg/PSAdURVZNG
- Post email: `vfwpost9126@gmail.com`
- Physical/Post location: **46 W 145th St South, Glenpool, OK 74033**
- Mailing address: **14348 S Broadway St, Glenpool, OK 74033**

## Veteran Assistance Routing

- **Veteran Relief Assistance** is the pathway for limited financial assistance.
- Veteran Relief requests use the dedicated Jotform.
- The Veteran Relief Committee may approve assistance up to **$300**.
- Requests over $300 go to the Post membership for consideration at the next regular meeting.
- Approved Veteran Relief payments go directly to the party owed, not to the applicant.
- Assistance is subject to review and the availability of Veteran Relief funds.
- **VA Disability & Benefits Assistance** is a separate pathway for claims, appeals, benefits questions, and related assistance.
- Post 9126 helps connect veterans with an appropriate resource based on the situation they describe.
- Do **not** publicly list individual benefits/referral contacts unless specifically approved for publication.
- Do **not** state or imply that Post 9126 has a designated Service Officer unless that becomes true and is intentionally made public.
- Do **not** collect Social Security numbers, VA claim numbers, medical records, passwords, or other sensitive claim information through the general website contact form.

## Important Design / Technical Rules

- Do **not** migrate the site to Cloudflare Pages; this site uses **Cloudflare Workers Static Assets**.
- Public page URLs use Cloudflare's canonical **extensionless routes** (for example, `/about`, not `/about.html`).
- Preserve the circular Post 9126 logo in the header and footer.
- Preserve the established Post phrase **“Honoring The Past. Embracing The Future.”** as the primary Post message.
- Preserve natural image aspect ratios. When CSS overrides image dimensions, use `height:auto`, an appropriate `aspect-ratio`, and/or `object-fit` so images do not stretch.
- Keep the physical/Post location and mailing address clearly distinguished.
- Keep **Veteran Relief** and **VA Disability / Benefits Assistance** as separate assistance pathways.
- Keep Operation Encore identified as a **Guitars for Vets alumni program**, not a separate Post program.
- Preserve the established Gaming Community tagline: **“Veteran-led. Community-welcoming. Built around connection.”**
- Keep the main navigation uncluttered; Gaming Discord remains accessible from the Gaming page, homepage, and footer rather than as a main-nav item.
- Run a fresh Termly cookie scan after adding new third-party embeds, scripts, or services.
- Update `sitemap.xml` when adding or removing public pages.
- Validate internal links and local assets before packaging a release.

## Updating This Change Log

For each meaningful production change, add a new sequential version section using this format:

```text
## v42 — Short Change Name

Brief summary of the work.

Key changes:
- Change one
- Change two
- Change three
```

Use the next sequential version number for meaningful production changes.

Small typo fixes, internal documentation updates, and other changes that do not materially affect the public website do not need their own version.

When creating a new production package:

- Update this README.
- Update `FINAL-AUDIT.md` when appropriate.
- Validate all internal links and local assets.
- Preserve image aspect ratios.
- Update `sitemap.xml` when adding or removing public pages.
- Produce both a full deployment ZIP and a changed-files-only ZIP when practical.

## v1 — Initial Website Build
Created the initial VFW Post 9126 website and deployable static-site structure,
including the core public pages, shared navigation/footer, Post branding, and
the `/public` directory used for Cloudflare Workers Static Assets deployment.

## v2 — Cloudflare Worker Deployment Settings
- Build command: leave blank
- Deploy command: `npx wrangler deploy`

The deployable website is in `/public`.

## v3 — Formspree Contact Handling
A branded thank-you page is included at `/public/thank-you.html`.

The Post currently uses Formspree's free plan, which does not provide a custom
post-submission redirect. The branded thank-you page therefore exists as a site
asset but is not automatically used after a Formspree submission.


## v4 — Privacy Policy
Termly Privacy Policy added at `/public/privacy-policy.html`.
Footer links on all pages now point to the policy, and the contact-form privacy notice links to it.

The Termly attribution is preserved.

## v5 — Cookie Policy
Termly Cookie Policy added at `/public/cookie-policy.html`.
Footer links on all pages now include both Privacy Policy and Cookie Policy.
The local Privacy Policy page also links to the Cookie Policy.

Note: the Cookie Policy references a Termly Cookie Preference Center. The actual
Termly consent-banner / preference-center script still needs to be added once
its embed code is provided.

## v6 — Termly Consent Banner
Installed the Termly Consent Management Platform on every HTML page using:

`https://app.termly.io/resource-blocker/d2a9b477-4a7d-46b9-b0a6-2892b2298f8f?autoBlock=on`

The script is placed immediately after the opening `<head>` tag so Termly can
auto-block non-essential third-party scripts before they run.

## v7 — Consent Preferences
Added Termly's permanent consent-preferences link to every page footer:

`<a href="#" class="termly-display-preferences">Consent Preferences</a>`

Visitors can use it at any time to reopen the Termly preference center and
change their cookie choices.

## v8 — Donations / Zeffy
Added `/public/donate.html` and embedded the Zeffy donation campaign:
https://www.zeffy.com/en-US/donation-form/support-local-veterans-through-vfw-post--9126

The navigation now includes a gold Donate button, the footer includes Donate,
and the homepage hero includes a Donate CTA.

The embed uses Zeffy's documented v2 embed structure and includes a direct-link
fallback. After deployment, verify the embed against the Zeffy dashboard's
Campaign > Share > More ways to share > Embed code.

## v9 — Navigation Button Balance
Adjusted the header so Donate and Join the VFW use the same height.
Join remains slightly wider and red; Donate remains gold.

## v10 — 2026–2027 Scholarships
Expanded `/public/scholarships.html` with the supplied 2026–2027 Patriot's Pen
and Voice of Democracy information, including eligibility, theme, format,
deadline, national prize information, entry links, and downloadable local
copies of the supplied flyers.

Also added the supplied Scholar's App access/security information as a local PDF.

## v11 — Scholarship Link Correction
Corrected the Patriot's Pen and Voice of Democracy entry links by decoding the
QR codes directly from the supplied flyers:
- Patriot's Pen: https://bit.ly/4pyVRDs
- Voice of Democracy: https://bit.ly/4htOUSf

## v12 — Google Calendar Integration
The Events page now embeds the public VFW Post 9126 Google Calendar.

Calendar ID: `vfwpost9126@gmail.com`
Timezone: `America/Chicago`
Display mode: Agenda

The page retains the regular Post schedule as quick-reference information and
links separately to the Oklahoma VFW Department calendar.

After deployment, run another Termly cookie scan because embedded Google
Calendar content may introduce Google cookies or other third-party resources.

## v13 — Calendar Month View
Changed the embedded Post 9126 Google Calendar from Agenda view to Month view.

## v14 — Refreshed Termly Policies
Replaced the locally hosted Privacy Policy and Cookie Policy with the newest
Termly-generated HTML supplied after the updated cookie scan and policy refresh.

The current Cookie Policy includes the newly detected cookie classifications,
and the updated Privacy Policy is now the current Termly-generated version.
Termly attribution remains intact, and the site-wide consent banner plus
Consent Preferences footer link remain in place.

## v15 — Post 9126 Header Branding
Updated the site header to use the official circular Post 9126 logo instead of
the oversized generic VFW wordmark. The accompanying identity now reads
"VFW Post 9126" on one line with "Glenpool, Oklahoma" beneath it.

Header spacing and logo sizing were tightened so the local Post identity feels
intentional while preserving room for the existing navigation, Donate button,
and Join the VFW button.

## v16 — Events Page: Upcoming Events List
Kept the Google Calendar in Month view and added a second, shorter Google
Calendar Agenda view directly beneath it. This gives visitors an at-a-glance
monthly calendar plus a more readable list of upcoming event names, dates,
and times.

The agenda section is responsive and includes a direct link to the full
Google Calendar.

## v17 — Gaming Discord
Added the Post 9126 Gaming Community Discord invite:
https://discord.gg/PSAdURVZNG

Placement:
- Prominent "Join the Discord" button in the Gaming page introduction
- Second Discord button in the Gaming page Discord card
- Homepage Gaming feature button
- "Gaming Discord" link in the site-wide footer Connect section

The main navigation remains unchanged to avoid crowding the header.

## v18 — Monthly Meeting Potluck
Updated recurring monthly meeting information to note:
- Potluck at 5:00 PM
- Post meeting at 5:30 PM
- Third Sunday of each month

## v19 — Monthly Meeting Potluck Correction
Updated all remaining meeting references so they consistently show:
- Potluck at 5:00 PM
- Monthly Post meeting at 5:30 PM
- Third Sunday of each month

## v20 — Address Clarification
Updated Post address information to distinguish:
- Physical address: 46 W 145th St South, Glenpool, OK 74033
- Mailing address: 14348 S Broadway St, Glenpool, OK 74033

The physical address remains the location visitors should use to come to the Post.

## v21 — Address Cleanup
Clarified the Post's two addresses:
- Physical/Post location: 46 W 145th St South, Glenpool, OK 74033
- Mailing address: 14348 S Broadway St, Glenpool, OK 74033

The Contact page now shows each address once, clearly labeled. Site footers now label
46 W 145th St South as the Post location so visitors do not mistake it for the mailing address.

The Contact page monthly meeting information also now includes the 5:00 PM potluck before
the 5:30 PM meeting.

## v22 — Events + Gaming Refresh
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

## v23 — Events Layout Refinement
Reworked the Events page for a cleaner visual hierarchy:
- Next Upcoming Events now occupies the main left column at the top.
- Regular Post Schedule and Oklahoma VFW Events are stacked in a narrower right column.
- The upcoming-events agenda is shorter so it does not dominate the page.
- The Monthly Calendar now spans the full page width underneath.
- Responsive behavior keeps the layout readable on tablets and phones.


## v24 — Full Audit + Typography Refresh
Performed a site-wide consistency and technical audit. Updated typography to a more distinctive, no-third-party-request font stack, fixed stale placeholder text, corrected a CSS variable issue, improved scholarship heading styling, added page-specific metadata and favicon support, improved mobile-nav accessibility, and corrected the locally hosted Termly postal address to the Post mailing address. See AUDIT.md for details.

## v25 — Social Feeds + Favicon
- Added a homepage “Follow VFW Post 9126” section with live Facebook Page timeline and Instagram profile embed.
- Instagram profile: https://www.instagram.com/vfw_post_9126/
- Added Instagram to the site-wide footer Connect links.
- Replaced the JPG browser icon with a proper favicon set: favicon.ico, 16/32 PNGs, Apple touch icon, 192/512 site icons, and a web app manifest.
- Social embeds are lazy-loaded and remain subject to Termly Auto Blocker / visitor consent.
- After deployment, run a fresh Termly scan so any Meta cookies/vendors are categorized and the Cookie Policy can be refreshed.

## v26 — Instagram Correction
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

## v30 — Latest Member Photo
Replaced the homepage hero member photo with the most recent VFW Post 9126
member group photo supplied by the Post. The image was optimized to WebP and
the hero crop was tuned for the taller composition.

## v31 — Service Branch Logo Fix
Corrected the military branch emblem sizing on the homepage. The explicit
HTML image dimensions added during the final optimization pass were allowing
the emblems to stretch vertically once CSS changed their width.

The branch emblems now:
- Preserve their square aspect ratio
- Use height:auto
- Use object-fit:contain
- Stay centered with a consistent maximum size

## v32 — About Photo + Footer Repair
- Updated the About page's main photo to the newer group image showing Post 9126 members with community partners and a service dog.
- Updated About-page social preview metadata to use the same photo.
- Replaced the footer's oversized generic VFW wordmark with the circular Post 9126 logo.
- Rebalanced footer columns, spacing, link rhythm, and responsive behavior.
- Fixed footer logo proportions by explicitly using a square object-fit treatment.

## v33 — Gaming Logo Fix
Corrected the Gaming Community logo distortion caused by HTML image dimensions
remaining active while only the image width was being overridden.

The Gaming logo now:
- Preserves its 1:1 aspect ratio
- Uses height:auto
- Uses object-fit:contain
- Has responsive max sizing on desktop and mobile

## v34 — Veteran Relief Assistance
Added the Post 9126 Veteran Relief program to the site.

Program details shown on the site:
- Veteran Relief Committee may approve up to $300.
- Requests above $300 go to the Post membership for consideration at the next regular meeting.
- Approved funds are paid directly to the vendor/company/landlord/utility/creditor or other party owed, not to the applicant.
- Applicants use the existing Jotform request process and provide proof of veteran status and supporting documentation.
- Assistance is subject to review and available Veteran Relief funds.
- Submission does not guarantee approval or funding.

Request form:
https://www.jotform.com/242946228301050

Placement:
- Programs page, as the first listed program
- Homepage Veteran Support card
- Site-wide footer under Explore

## v35 — Veteran Relief, Directions & Accessibility
Implemented all remaining recommended site improvements:

1. Dedicated `/veteran-relief.html`
   - Explains the request process and $300 committee authority
   - Explains Post approval for requests above $300
   - Explains direct-to-vendor payment
   - Explains available-funds limitation and no guarantee of funding
   - Links directly to the existing Jotform: https://www.jotform.com/242946228301050
   - Includes a clear non-emergency notice and Veterans Crisis Line information

2. Contact-page directions
   - Added a prominent "Get Directions to the Post" button for the physical address
   - Uses 46 W 145th St South, Glenpool, OK 74033
   - Keeps the separate mailing address unchanged

3. Accessibility
   - Added `/accessibility.html`
   - Added a site-wide Accessibility footer link
   - Added contact information for reporting accessibility barriers
   - Clarified third-party service accessibility
   - Repaired skip-link targets across site pages

4. Routing polish
   - Homepage Veteran Support now links to the dedicated Veteran Relief page
   - Programs page links to both the dedicated page and request form
   - Footer Veteran Relief link now points to the dedicated page
   - Contact page directs financial-assistance inquiries to the Veteran Relief process
   - Sitemap updated for both new pages

## v36 — VA Disability & Benefits Assistance
Added a new veteran-support pathway for VA disability claims, appeals, benefits
questions, and related assistance.

Key changes:
- Added dedicated `/veteran-benefits.html`.
- Site language focuses on helping veterans connect with an appropriate resource
  based on their individual situation.
- No public referral names are listed.
- The site does not state or imply that Post 9126 has a designated Service Officer.
- Added privacy guidance telling veterans not to submit Social Security numbers,
  VA claim numbers, medical records, passwords, or other sensitive information
  through the website contact form.
- Homepage Veteran Support card now links to both Veteran Relief and VA Benefits Help.
- Programs page now includes VA Disability & Benefits Assistance directly after
  Veteran Relief.
- Contact form now separates "Veteran Relief / Financial Assistance" from
  "VA Disability / Benefits Assistance".
- Benefits-page contact buttons preselect the VA benefits reason on the contact form.
- Veteran Relief page cross-links veterans who actually need disability/benefits help.
- Added "VA Benefits Help" to the site-wide footer.
- Added the new page to the sitemap.

## v37 — Final Audit, Routing & Performance Polish

Completed a fresh production audit after the Veteran Relief, VA Benefits Assistance,
accessibility, and analytics work.

Key changes:
- Aligned canonical URLs, internal links, Open Graph URLs, and `sitemap.xml` with
  Cloudflare Workers Static Assets `auto-trailing-slash` behavior by using
  extensionless public routes such as `/about` and `/veteran-relief`.
- Updated active-navigation JavaScript so it works correctly on extensionless routes.
- Added a tiny critical `html,body{margin:0}` rule before the Termly blocker to address
  the 8px-to-0px body shift visible in Cloudflare's CLS debug data while keeping
  Termly as the first script in the page head.
- Fixed remaining undefined CSS variables (`--font-heading`, `--red`, and `--gold`).
- Corrected the homepage hero image intrinsic dimensions and updated its alt text.
- Added a web-optimized Gaming Community logo while preserving the original PNG source.
- Lazy-loaded the homepage Gaming logo and service-branch emblems below the fold.
- Removed duplicate `id="control"` values from the locally hosted Termly Privacy Policy
  markup without changing policy wording.
- Refreshed `AUDIT.md` and `FINAL-AUDIT.md` to reflect the current 17-page site.
- Revalidated internal links, local assets, duplicate IDs, CSS variables, JavaScript,
  sitemap coverage, image proportions, and changelog continuity.

## v38 — Established Post Motto

Elevated the Post's long-standing phrase, **“Honoring The Past. Embracing The Future.”**,
into the site's primary identity message.

Key changes:
- Homepage hero now uses “Honoring The Past. Embracing The Future.” as the main headline.
- “Serving Veterans. Strengthening Community.” remains as a secondary supporting message.
- About page now prominently carries the established Post phrase.
- Site-wide footer now includes the established Post phrase as part of the Post identity.
- Homepage metadata and structured data now reflect the established motto.
- Added a maintenance rule so future edits preserve the phrase as the primary Post message.

## v39 — Motto Order Correction

Corrected the Post's established phrase to the exact long-standing wording and order:

**“Honoring The Past. Embracing The Future.”**

Key changes:
- Homepage hero headline now uses the correct phrase and order.
- About page and site-wide footer now use the correct phrase.
- Homepage metadata and structured data slogan were corrected.
- README maintenance guidance now preserves the exact established phrase.

## v40 — Mobile Program Photo Stack Fix

Corrected the overlapping Guitars for Vets photo cards on narrow mobile screens.

Key changes:
- Removed the negative-margin overlap from the secondary G4V graduation photo on screens 700px and narrower.
- Mobile program photos now stack vertically with clear spacing.
- Secondary photo uses the full available width on mobile.
- Both photo captions remain fully visible instead of one card covering the other.
- Desktop/tablet overlapping presentation remains unchanged.

## v41 — Mobile Band Photo Caption Fix

Corrected the remaining Guitars for Vets mobile photo-card issue.

Key changes:
- The main band/rehearsal photo now uses `height:auto` on narrow mobile screens.
- Both G4V photo images use the same 4:3 mobile treatment.
- The band-photo caption “Music, connection and continued camaraderie.” remains visible.
- The graduation-photo caption remains visible.
- Desktop and tablet photo presentation remains unchanged.
