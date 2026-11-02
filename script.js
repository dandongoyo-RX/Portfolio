const grid = document.getElementById("grid");
const tabs = document.querySelectorAll(".tab");
const lightbox = document.getElementById("lightbox");
const stage = document.getElementById("lb-stage");

let category = location.hash === "#art" ? "art" : "games";
let visible = [];
let index = 0;

document.getElementById("year").textContent = new Date().getFullYear();

// Grey striped box shown when a file is missing, so you can see the layout before adding media.
function placeholder(p) {
  const div = document.createElement("div");
  div.className = "placeholder";
  div.textContent = p.src ? `Add ${p.src}` : "No file set";
  return div;
}

// Keep a looping preview from showing a black intro: never play before `start` seconds.
function skipIntro(video, start) {
  if (!start) return;
  video.addEventListener("timeupdate", () => {
    if (video.currentTime < start) video.currentTime = start;
  });
}

function youtubeId(src) {
  const match = src.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return match ? match[1] : src;
}

function buildMedia(p, full) {
  let el;
  if (p.type === "video") {
    el = document.createElement("video");
    el.src = p.src;
    el.playsInline = true;
    if (p.poster) el.poster = p.poster;
    if (full) {
      el.controls = true;
      el.autoplay = true;
    } else {
      el.muted = true;
      el.loop = true;
      el.preload = "metadata";
      skipIntro(el, p.start);
    }
  } else if (p.type === "youtube") {
    const id = youtubeId(p.src);
    if (full) {
      el = document.createElement("iframe");
      el.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      el.allow = "autoplay; fullscreen; picture-in-picture";
      el.allowFullscreen = true;
      return el;
    }
    el = document.createElement("img");
    el.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  } else {
    el = document.createElement("img");
    el.src = p.src;
    el.alt = p.title || "";
    if (!full) el.loading = "lazy";
  }
  el.addEventListener("error", () => el.replaceWith(placeholder(p)), { once: true });
  return el;
}

function render() {
  visible = PROJECTS.filter((p) => p.category === category);
  grid.innerHTML = "";

  visible.forEach((p, i) => {
    const tile = document.createElement("button");
    tile.className = "tile";
    tile.style.animationDelay = `${i * 60}ms`;
    if (p.ratio) tile.style.aspectRatio = p.ratio;
    tile.setAttribute("aria-label", `Open ${p.title}`);

    const media = buildMedia(p, false);
    tile.append(media);

    if (p.type !== "image") {
      const badge = document.createElement("span");
      badge.className = "play";
      badge.textContent = "▶ video";
      tile.append(badge);
    }

    const info = document.createElement("div");
    info.className = "tile-info";
    info.innerHTML = `<h3></h3><p class="label"></p>`;
    info.querySelector("h3").textContent = p.title;
    info.querySelector("p").textContent = p.tools || "";
    tile.append(info);

    // Preview videos silently on hover.
    if (p.type === "video") {
      tile.addEventListener("mouseenter", () => {
        const v = tile.querySelector("video");
        if (!v) return;
        if (p.start && v.currentTime < p.start) v.currentTime = p.start;
        v.play().catch(() => {});
      });
      tile.addEventListener("mouseleave", () => tile.querySelector("video")?.pause());
    }
    tile.addEventListener("click", () => open(i));
    grid.append(tile);
  });

  tabs.forEach((t) => {
    const on = t.dataset.cat === category;
    t.classList.toggle("active", on);
    t.setAttribute("aria-selected", on);
    t.querySelector(".count").textContent = PROJECTS.filter((p) => p.category === t.dataset.cat).length;
  });
}

tabs.forEach((t) =>
  t.addEventListener("click", () => {
    category = t.dataset.cat;
    history.replaceState(null, "", category === "art" ? "#art" : "#games");
    render();
  })
);

// Lightbox
function show() {
  const p = visible[index];
  stage.innerHTML = "";
  stage.append(buildMedia(p, true));
  document.getElementById("lb-title").textContent = p.title;
  document.getElementById("lb-caption").textContent = p.caption || "";
  document.getElementById("lb-count").textContent = `${index + 1} / ${visible.length}${p.tools ? " · " + p.tools : ""}`;
}

function open(i) {
  index = i;
  show();
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function close() {
  lightbox.hidden = true;
  stage.innerHTML = "";
  document.body.style.overflow = "";
}

function step(dir) {
  index = (index + dir + visible.length) % visible.length;
  show();
}

document.getElementById("lb-close").addEventListener("click", close);
document.getElementById("lb-prev").addEventListener("click", () => step(-1));
document.getElementById("lb-next").addEventListener("click", () => step(1));
lightbox.addEventListener("click", (e) => { if (e.target === lightbox || e.target === stage) close(); });
document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") close();
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

// Showreel: fall back to a plain panel if media/showreel.mp4 isn't there yet.
const reel = document.getElementById("reel");
const reelWrap = document.getElementById("reel-wrap");
const sound = document.getElementById("sound");
reel.addEventListener("error", () => reelWrap.classList.add("no-reel"));
skipIntro(reel, Number(reel.dataset.start) || 0);
if (reel.error) reelWrap.classList.add("no-reel");
sound.addEventListener("click", () => {
  reel.muted = !reel.muted;
  sound.textContent = reel.muted ? "Sound off" : "Sound on";
  sound.setAttribute("aria-label", reel.muted ? "Turn sound on" : "Turn sound off");
});

render();
