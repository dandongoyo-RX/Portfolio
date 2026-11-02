# Portfolio site

A plain HTML/CSS/JS site — no build tools, no frameworks. Open the folder, edit, upload.

```
index.html     page structure (your name, tagline, email, social links)
style.css      look and feel
script.js      gallery + full-screen viewer (no need to touch)
projects.js    YOUR WORK — the only file you edit to add projects
media/
  games/       VR / game dev images and videos
  art/         3D / animation images and videos
```

## 1. Make it yours

1. **index.html**: name, phone and social links are filled in. Change the tagline
   `Worlds, built and animated.` if you like.
2. **Showreel**: the clip at the top is the Virtual Mining Tour. To swap it, change the
   `src` and `poster` on the `<video id="reel">` line in index.html (`data-start` skips
   that many seconds of intro).
3. **projects.js**: one block per image or video. The instructions are at the top of the file.
   Delete the example blocks you don't need.

Missing files show as a striped box reading "Add media/…", so you can see where each one goes.

## 2. Preview on your computer

Opening `index.html` directly mostly works, but videos behave better through a tiny local server:

```bash
python -m http.server 5173
```

Then visit http://localhost:5173

## 3. Keep video sizes down

Free hosts limit file sizes (GitHub: 100 MB per file, about 1 GB per site). Recommended:

- Export gallery clips at **1080p, H.264 MP4, 10–30 seconds, under ~20 MB**.
  [HandBrake](https://handbrake.fr) (free) with the "Fast 1080p30" preset is good for this.
- Remove the audio track from silent hover clips.
- Upload **long videos** (full playthroughs, trailers) to YouTube and use `type: "youtube"`
  in projects.js with the YouTube link as `src`. They cost nothing in storage.
- Export images as **JPG or WebP, about 2000 px on the long side**.

## 4. Host it free

### Option A: GitHub Pages (recommended, free address `yourname.github.io`)

1. Create a free account at https://github.com.
2. Click **New repository** and name it exactly `yourusername.github.io`
   (with your username). Set it to **Public** and create it.
3. On the empty repo page, click **uploading an existing file**, drag in **everything in this folder**
   (index.html, style.css, script.js, projects.js and the media folder), and click **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment", set Source to
   **Deploy from a branch**, set the branch to **main** and the folder to **/ (root)**, then save.
5. After 1–2 minutes your site is live at `https://yourusername.github.io`.

To update the site later, upload the changed files again on GitHub. The site refreshes in about a minute.

### Option B: Netlify Drop (fastest, no Git needed)

1. Go to https://app.netlify.com/drop and sign up for free.
2. Drag this whole folder onto the page. You get a live link immediately, e.g. `your-name.netlify.app`
   (you can rename it under **Site configuration → Change site name**).
3. To update, open your site in Netlify, go to **Deploys**, and drag the folder in again.

### Custom domain (optional)

Both options accept your own domain (e.g. `yourname.com`, about $10–15/year from a registrar)
for free, with free HTTPS: GitHub **Settings → Pages → Custom domain**, or Netlify **Domain management**.
