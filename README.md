# KR Construction Pro — website

Static website (HTML + CSS, no build step): Home (`index.html`), Services, Contact (Free Estimate form), thank-you and 404 pages.

## Before launch
1. Domain: krconstructionpro.com (already set, `CNAME` included).
2. Web3Forms access key is set (sends to krconstructionpro@gmail.com).
3. Replace the marked photo placeholders with real project photos.

## Hosting (GitHub Pages)
Repository → Settings → Pages → Deploy from branch `main` / root. Add a `CNAME` file with the domain, then point the domain's DNS (Squarespace) to GitHub Pages.

## Adding photos to a service gallery (Services page)
1. Upload the photo to the `assets/` folder (JPG, about 1100 px wide).
2. In `services.html`, find the service's `gallery-track` and copy its `<img class="gallery-slide" ...>` line.
3. Change `src` to the new file and write a short `alt` describing the photo.
Arrows and dots appear automatically when a gallery has 2 or more photos.
