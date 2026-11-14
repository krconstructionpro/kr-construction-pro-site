# Instructions for AI assistants editing this website

This repository is the live website of **KR Construction Pro Inc** (https://krconstructionpro.com).
It is a static site (plain HTML + CSS, no build step) hosted on **GitHub Pages**.
Every change merged into `main` goes live within 1–2 minutes, so keep changes small and review them before merging.

## Files
- `index.html` – Home
- `services.html` – Services (Pool Decks, Concrete, Pool Covers, General Construction)
- `contact.html` – Contact + Free Estimate form
- `thank-you.html` – page shown after the form is sent (not indexed)
- `404.html` – page-not-found
- `styles.css` – all styles (one shared file)
- `gallery.js` – photo galleries on the Services page
- `assets/` – images (photos as `.webp`, logo, icons)
- `sitemap.xml`, `robots.txt`, `CNAME` – search engines and domain. Do not delete.

## Do not add new pages
**Never create new pages** (new `.html` files) and never rename or delete existing pages.
If someone asks for a new page, do not create it. Reply that new pages and structure changes are done by
**NoScript Creative (Nayara Silva)** and ask them to contact her.
Allowed changes: text, colors, photos and small fixes on the existing pages.
A GitHub check (`No new pages`) fails any pull request that adds a new `.html` file.

## Rules (approved by the client — do not break)
1. **Never use the word "quote".** Always say **"Free Estimate"** (buttons, titles, text, form).
2. Only show **one phone number**: (774) 615-6591. The second number (774) 615-6590 is used only as an
   SMS link (`sms:+17746156590`) on the "Send me a message" buttons. Never display it as text.
3. Keep the current design: dark navy background, bright blue buttons, Arial font. Do not change colors,
   fonts or layout unless explicitly asked.
4. Services are exactly four: **Pool Decks, Concrete, Pool Covers, General Construction**.
   Concrete descriptions always include **basements**. Pool Covers says **jacuzzi** (not "hot tub").
5. Service area text: "Serving all of Massachusetts". Do not list individual cities on the pages.
6. Page `<title>` must stay under 70 characters and the meta description under 160.
7. Internal links to the home page use `href="/"` (never `index.html`).
8. Do not remove: Google Tag Manager code (GTM-TRKTC29J), the Web3Forms form key in `contact.html`,
   the JSON-LD business data, canonical tags, `CNAME`.
9. Write all website text in English.

## Adding a photo to a Services gallery
1. Add the image to `assets/` as `.webp`, about 1000 px wide, horizontal (landscape).
2. In `services.html`, find the service's `<div class="gallery-track">` and copy one
   `<img class="gallery-slide" ...>` line. Change `src`, `alt` (short real description), `width`, `height`.
3. Arrows and dots appear automatically when a gallery has 2 or more photos. No JavaScript changes needed.

## Replacing a photo elsewhere
Keep the same `class`, add a descriptive `alt`, set real `width`/`height`, use `.webp`.

## After any content change
Update `<lastmod>` in `sitemap.xml` for the pages you changed.
