# VFW Post 9126 Website Audit — v37

## Scope
Fresh production audit of the current Cloudflare Workers Static Assets package after
Veteran Relief, VA Disability & Benefits Assistance, accessibility, consent, social,
calendar, donation, and analytics work.

## Automated checks
- Public HTML pages checked: **17**
- Indexable pages expected in sitemap: **15**
- Missing internal page links: **0**
- Missing local assets: **0**
- Duplicate HTML IDs after corrections: **0**
- Undefined CSS custom properties after corrections: **0**
- JavaScript syntax: **PASS**
- CSS brace balance: **PASS**
- Local image intrinsic-dimension mismatches over 3%: **0**
- Skip-link targets: **PASS**
- Post contact-form controls have explicit labels: **PASS**
- `target="_blank"` links checked for `rel="noopener"`: **PASS**
- JSON-LD parsing: **PASS**
- `robots.txt` includes the sitemap: **PASS**
- 404 and thank-you utility pages remain `noindex,follow`: **PASS**
- README changelog continuity: **v1 through v37, no gaps or duplicates**

## Corrections made in v37

### Cloudflare canonical routing
The Worker uses `html_handling: "auto-trailing-slash"`. Public HTML files therefore
have extensionless canonical routes (for example, `about.html` is served canonically
at `/about`). Internal navigation, canonical tags, Open Graph URLs, and sitemap entries
were aligned to those extensionless routes.

### CLS / layout stability
Cloudflare's Core Web Vitals debug data showed the document shifting from an 8px body
offset to 0px. A tiny critical `html,body{margin:0}` rule is now present before the
Termly blocker on every page. Termly remains the first script in each page head.

### CSS cleanup
Replaced stale undefined variables:
- `--font-heading` → `--font-display`
- `--red` → `--vfw-red`
- `--gold` → `--vfw-gold`

### Image / performance cleanup
- Corrected homepage hero intrinsic dimensions to match the actual 1414×1800 image.
- Updated hero alt text to match the current memorial-group photograph.
- Added `assets/gaming-logo.webp` for web delivery; the original PNG remains available.
- Homepage Gaming logo and service-branch emblems below the fold now lazy-load.

### Privacy-policy HTML cleanup
Removed repeated Termly-generated `id="control"` attributes from the locally hosted
Privacy Policy markup. Policy wording was not changed.

## Current integrations verified in source
- Termly Auto Blocker and Consent Preferences
- Formspree contact form
- Zeffy donation embed
- Google Calendar agenda/month views
- Facebook and Instagram embeds
- Gaming Discord
- Veteran Relief Jotform
- VA Disability / Benefits Assistance contact routing
- Cloudflare Workers Static Assets configuration
