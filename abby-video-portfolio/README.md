# Abby Medallon — Video Editing Portfolio

A one-page video editing portfolio (plus an About page) built for GitHub Pages.
Focused on three formats: **short-form ads**, **AI videos**, and **long-form 3–6 minute edits**.

## Publishing on GitHub Pages

1. Create a new repository on GitHub (e.g. `video-portfolio`).
2. Upload everything in this folder to the repo root — `index.html` must sit at the top level.
3. Go to **Settings → Pages**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`, and save.
4. After a minute the site is live at `https://abbiemedallon.github.io/video-portfolio/`.

## Adding your long-form videos

Open `index.html` and find the `LONG-FORM` section. Each slot looks like this:

```html
<div class="video-placeholder"> ... </div>
```

Replace that whole `<div class="video-placeholder">…</div>` with one of:

**YouTube**
```html
<iframe class="long-video" src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        frameborder="0" allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
```
(The video ID is the part after `watch?v=` in the YouTube URL.)

**Facebook**
```html
<iframe class="long-video"
        src="https://www.facebook.com/plugins/video.php?href=FULL_ENCODED_VIDEO_URL&show_text=false"
        frameborder="0" allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
```

Then edit the `<p class="reel-label">` underneath it to describe the video.

Adding more short-form reels works the same way — copy an existing `<div class="reel-card">` block
and swap the Facebook reel ID in the `src`.

## Files

```
index.html          — main portfolio page
about.html          — about, experience, certificates
assets/css/style.css
assets/js/main.js
assets/image/       — photo, logos, certificates, resume PDF
```
