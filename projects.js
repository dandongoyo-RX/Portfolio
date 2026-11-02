// ─────────────────────────────────────────────────────────────
//  YOUR PROJECTS — this is the only file you need to edit to add work.
//
//  1. Put the file in media/games/ or media/art/
//  2. Copy one of the blocks below and change the details.
//
//  category : "games"  → VR / Game dev tab
//             "art"    → 3D / Animation tab
//  type     : "image"   (jpg, png, webp, gif)
//             "video"   (mp4 — keep under ~50 MB, see README)
//             "youtube" (paste the YouTube link as src — best for long videos)
//  title    : shown on hover and in the viewer
//  tools    : optional, e.g. "Unity · Quest 3"
//  caption  : optional, a sentence or two shown in the viewer
//  poster   : optional, a still image shown before a video loads
//  ratio    : optional, crop the tile to a shape, e.g. "16/9", "1/1", "4/5"
//  start    : optional, seconds to skip in the hover preview (e.g. a black intro).
//             The full-screen viewer still plays from the beginning.
//
//  Tiles appear in the order listed here.
// ─────────────────────────────────────────────────────────────

const PROJECTS = [
  // VR / Game dev
  {
    category: "games",
    type: "video",
    src: "media/games/black-orbit.mp4",
    poster: "media/games/black-orbit.jpg",
    title: "Black Orbit",
    caption: "Teaser for Mission Gye Nyame, a space game that begins at a launch site in Accra.",
    ratio: "16/9",
    start: 3,
  },
  {
    category: "games",
    type: "video",
    src: "media/games/virtual-mining-tour.mp4",
    poster: "media/games/virtual-mining-tour.jpg",
    title: "Virtual Mining Tour",
    caption: "A virtual safety induction for a mine site, led by a conversational AI site guide.",
    ratio: "16/9",
    start: 1.1,
  },
  {
    category: "games",
    type: "video",
    src: "media/games/vr-one-floor-home.mp4",
    poster: "media/games/vr-one-floor-home.jpg",
    title: "VR One Floor Home",
    caption: "Walk through a home before it's built: switch from day to night, open doors and explore every room.",
    ratio: "16/9",
  },
  {
    category: "games",
    type: "video",
    src: "media/games/vr-story-building.mp4",
    poster: "media/games/vr-story-building.jpg",
    title: "VR Storey Building",
    caption: "Interactive walkthrough of a two-storey home with live time-of-day and sun direction controls.",
    ratio: "16/9",
  },
  {
    category: "games",
    type: "video",
    src: "media/games/interior-walkthrough.mp4",
    poster: "media/games/interior-walkthrough.jpg",
    title: "Interior Walkthrough",
    caption: "A third-person walk through a furnished interior: kitchen, living area and staircase.",
    ratio: "16/9",
  },

  // 3D / Animation
  {
    category: "art",
    type: "video",
    src: "media/art/peeva-cola.mp4",
    poster: "media/art/peeva-cola.jpg",
    title: "Peeva Cola",
    caption: "3D product commercial with liquid splash and ice animation.",
    ratio: "16/9",
  },
  {
    category: "art",
    type: "video",
    src: "media/art/city-animation.mp4",
    poster: "media/art/city-animation.jpg",
    title: "City Animation",
    caption: "A rain-soaked city street at dusk, lit by neon signs.",
    ratio: "932/1080",
  },
  {
    category: "art",
    type: "video",
    src: "media/art/brandy-grapes.mp4",
    poster: "media/art/brandy-grapes.jpg",
    title: "Brandy Sparkling Black Grape",
    caption: "3D product commercial for a sparkling black grape drink, from modelling process to final shots.",
    ratio: "16/9",
  },
  {
    category: "art",
    type: "video",
    src: "media/art/road-chase.mp4",
    poster: "media/art/road-chase.jpg",
    title: "Road Chase",
    caption: "A cinematic motorbike chase under a highway overpass.",
    ratio: "1920/810",
  },
  {
    category: "art",
    type: "video",
    src: "media/art/safety-video.mp4",
    poster: "media/art/safety-video.jpg",
    title: "Working at Height Safety",
    caption: "Workplace safety animation on climbing ladders and working at height.",
    ratio: "16/9",
  },
  {
    category: "art",
    type: "video",
    src: "media/art/gas-pipe.mp4",
    poster: "media/art/gas-pipe.jpg",
    title: "Drone Pipeline Monitoring",
    caption: "Explainer animation for a project that uses drones to monitor gas pipelines and detect leaks.",
    ratio: "16/9",
  },
  {
    category: "art",
    type: "video",
    src: "media/art/3d-house-story.mp4",
    poster: "media/art/3d-house-story.jpg",
    title: "Multi-Storey House Tour",
    caption: "A floor-by-floor virtual tour of a multi-storey building, from the ground floor to the top.",
    ratio: "1484/720",
  },
];
