# Nouveaution.Art

[Nouveaution.Art](https://nouveaution.art) is a virtual manor, an innovative studio designed to foster artistic expression and creativity. This expansive virtual space, with its diverse rooms and unique ambiances, caters to a spectrum of creative pursuits. From painter's nooks and sculptor's corners to writers' dens and musicians' studios, the manor offers artists the freedom to explore their imagination and craft their masterpieces. Our communal and recreational spaces further encourage collaboration, relaxation, and rejuvenation, creating a balance between work and play.

Utilizing Skybox AI and Marzipano, we transform our artists' visions into reality. Skybox AI empowers our artists to generate stunning 360° worlds from simple text prompts, while Marzipano facilitates the creation of interactive panoramas and virtual tours. These robust tools breathe life into our manor, overlay additional content onto our 360° images, and deliver an immersive, responsive user experience.

Nouveaution.Art is not just a virtual studio—it's a celebration of creativity and a testament to the limitless potential of artistic expression. We offer a sanctuary where the boundaries of time and space dissolve, allowing artists to immerse themselves in their work, connect with fellow creatives, and ultimately, leave a unique imprint on the world.

## The Nouveaution Codex

The Codex serves as a detailed documentation of Nouveaution Manor, a virtual manor where creatives can work, play, and explore. It provides an in-depth look at the architectural layout, purpose of each room, satellite structures, gardens, facilities, and more. If you're curious about the different spaces within the manor, their functionalities, and the immersive technologies integrated into the creative experience, this codex is your ultimate resource. Explore the [Nouveaution Codex](./NouveautionCodex/table-of-contents.md) to delve into the captivating world of Nouveaution Manor!


## About Us

At Nouveaution, we're weaving together the tapestry of time, where echoes of past ambitions harmonize with the resonance of future possibilities. Envision us as a unique time machine, inspired by the daring paradox of retrofuturism—where yesterday's dreams of tomorrow encounter the realities of today. We see the future not merely as a distant horizon, but as a living echo of the past, abundant with latent potential.

In the heart of Nouveaution lies our art studio, a sacred crucible where creativity transcends the constraints of time. Here, we treat art as the soul's language, a universal dialogue that bridges epochs, cultures, and perspectives. Art, we believe, is not an indulgence but a necessity. Like air, it sustains us; like water, it nurtures us; like fire, it fuels us; and like the earth, it grounds us.

Our mission is to transcend the bounds of the present, ushering you into a contemplative space that fuses the timeless with the innovative. Here, we invite you to reflect, to dream, and to consider the unique imprint you wish to leave on the world. At Nouveaution, we're not just about recollections and forecasts—we're about molding an enduring legacy from the essence of time itself."

## Skybox AI

[Skybox AI](https://skybox.blockadelabs.com/) is a tool developed by Blockade Labs that leverages AI technology to generate 360° skybox images. With Skybox AI, users can create stunning virtual worlds by providing a text prompt.

- Infinite Virtual 360 Worlds: Create infinite virtual 360° worlds with a single text prompt.
- Sketch Mode: Use sketch-based tools and guides to create skyboxes from your own sketches.
- Remix Mode: Apply new styles to existing skyboxes while preserving structure and depth.
- Negative Text: Specify exclusions using the "Negative Text" field.
- Generate Depth: Create a depth map along with your scene (available on desktop).
- Download Convenience: Easily download scenes and depth maps with a single button click.
- Drag & Drop 360° Viewer: Explore skyboxes by dragging and dropping them in the viewer.
- Auto-Pan Toggle: Enable automatic panning of the skybox.
- Tutorial: Access a basic tutorial to get started with Skybox AI.
- Sharing and Downloading: Share your skyboxes via unique URLs or download equirectangular images.
- Add to This (In Development): Draw new elements to place in your scene.

### Known Issues
- Practice and experimentation required for desired results in Sketch mode.
- Brush strokes may vary in transparency under certain conditions.
- Size indicator of brush strokes may be larger than the strokes themselves.
- Invisible line (panorama wrap point) may interrupt brush strokes.
- Brush strokes can deform near the top and bottom of the viewable area.
- Drawing a dot without moving the brush is not possible.

## Marzipano

[Marzipano Tool](https://www.marzipano.net/tool/) 

[Docs](https://www.marzipano.net/docs.html)

Marzipano is a robust JavaScript library designed for creating interactive 360-degree panoramic images and virtual tours on the web. It offers a wide range of features and functionalities to enhance the immersive experience. Here is a comprehensive summary of its capabilities:

- Panoramic Image Support: Marzipano can display images in different formats, including single resolution cube, multiresolution cube, multiresolution flat, and equirectangular images.
- Video Playback: It enables playing 360° videos in equirectangular format with the ability to switch between different video resolutions.
- Procedural Generation: Marzipano allows the generation of media procedurally, enabling the creation of dynamic multiresolution cubes or other media types.
- Hotspot Customization: It provides options to create and style hotspots, allowing the overlay of content from various sources like YouTube, Google Maps, or Twitter onto the 360º images.
- Device Orientation Control: Marzipano supports integration with the DeviceOrientation API, enabling control of the panorama using gyroscopic input.
- Touch and Gesture Support: It offers additional touch and mouse gesture capabilities, such as double click/tap to zoom, swipe with two fingers to change panorama, and interactive elements like adding comments.
- Transitions: Marzipano allows the implementation of custom transitions between panoramas, enabling smooth and visually appealing navigation.
- Layered Images: It supports displaying layered equirectangular images loaded from local files, with the ability to manipulate effects and parameters for each layer.
- Image Editing: Marzipano provides functionality for editing equirectangular images within the library and exporting the modified versions.
- Stereoscopic Viewing: It offers options for displaying stereoscopic panoramas, including anaglyph rendering and side-by-side viewing.
- WebVR Support: Marzipano is compatible with the WebVR API, allowing the display of stereoscopic images in virtual reality environments.
- Customization with CSS: It supports applying CSS styles and effects to hotspots, providing flexibility in visual customization.

These features make Marzipano a powerful tool for creating captivating and interactive virtual experiences, virtual tours, and panoramic presentations on the web.




```
Nouveaution.Art
├─ .vscode
│  └─ settings.json
├─ assets
│  ├─ android-chrome-192x192.png
│  ├─ android-chrome-512x512.png
│  ├─ apple-touch-icon.png
│  ├─ favicon-16x16.png
│  ├─ favicon-32x32.png
│  ├─ favicon.ico
│  ├─ favicon.png
│  ├─ fonts
│  │  ├─ DellaRespira.woff2
│  │  └─ Legrand.woff2
│  ├─ img
│  │  └─ frame.jpg
│  ├─ site.webmanifest
│  └─ skyboxes
│     ├─ exterior
│     │  ├─ city
│     │  │  └─ realistic_teal_art_nouveau_grand_manor_facade_fron.jpg
│     │  └─ enterance
│     │     ├─ realistic_at_the_front_door_of_the_vibrant_surreal.jpg
│     │     ├─ realistic_front_door_intricate_teal_art_nouveau_gr (1).jpg
│     │     ├─ realistic_front_door_intricate_teal_art_nouveau_gr.jpg
│     │     ├─ realistic_front_door_teal_art_nouveau_grand_manor_ (1).jpg
│     │     ├─ realistic_front_door_teal_art_nouveau_grand_manor_ (2).jpg
│     │     ├─ realistic_front_door_teal_art_nouveau_grand_manor_.jpg
│     │     ├─ realistic_intricate_teal_art_nouveau_grand_manor_f (1).jpg
│     │     ├─ realistic_intricate_teal_art_nouveau_grand_manor_f (2).jpg
│     │     ├─ realistic_intricate_teal_art_nouveau_grand_manor_f (3).jpg
│     │     ├─ realistic_intricate_teal_art_nouveau_grand_manor_f (4).jpg
│     │     ├─ realistic_intricate_teal_art_nouveau_grand_manor_f (5).jpg
│     │     ├─ realistic_intricate_teal_art_nouveau_grand_manor_f (6).jpg
│     │     ├─ realistic_intricate_teal_art_nouveau_grand_manor_f.jpg
│     │     ├─ realistic_surreal_front_door_intricate_teal_art_no.jpg
│     │     ├─ realistic_teal_art_nouveau_grand_manor_facade_fron (1).jpg
│     │     ├─ realistic_teal_art_nouveau_grand_manor_facade_fron (2).jpg
│     │     └─ realistic_teal_art_nouveau_grand_manor_facade_fron.jpg
│     └─ interior
├─ data.js
├─ img
│  ├─ close.png
│  ├─ collapse.png
│  ├─ down.png
│  ├─ expand.png
│  ├─ fullscreen.png
│  ├─ info.png
│  ├─ left.png
│  ├─ link.png
│  ├─ minus.png
│  ├─ pause.png
│  ├─ play.png
│  ├─ plus.png
│  ├─ right.png
│  ├─ up.png
│  └─ windowed.png
├─ index.html
├─ index.js
├─ NouveautionCodex
│  ├─ 01-introduction
│  │  └─ index.md
│  ├─ 02-navigating-the-manor
│  │  └─ index.md
│  ├─ 03-the-creative-core
│  │  ├─ 01-the-sketch-room
│  │  │  └─ index.md
│  │  ├─ 02-the-sculptors-den
│  │  │  └─ index.md
│  │  ├─ 03-the-composers-suite
│  │  │  └─ index.md
│  │  ├─ 04-the-photography-lab
│  │  │  └─ index.md
│  │  ├─ 05-the-digital-design-studio
│  │  │  └─ index.md
│  │  ├─ 06-the-animation-workshop
│  │  │  └─ index.md
│  │  ├─ 07-the-game-developers-arena
│  │  │  └─ index.md
│  │  ├─ 08-the-film-editors-loft
│  │  │  └─ index.md
│  │  ├─ 09-the-choreographers-stage
│  │  │  └─ index.md
│  │  ├─ 10-the-collaboration-hub
│  │  │  └─ index.md
│  │  └─ index.md
│  ├─ 04-the-learning-loft
│  │  ├─ 01-the-scriptorium
│  │  │  └─ index.md
│  │  ├─ 02-the-architects-atelier
│  │  │  └─ index.md
│  │  ├─ 03-the-vr-library
│  │  │  └─ index.md
│  │  ├─ 04-the-training-ground
│  │  │  └─ index.md
│  │  ├─ 05-the-discussion-salon
│  │  │  └─ index.md
│  │  ├─ 06-the-idea-incubator
│  │  │  └─ index.md
│  │  ├─ 07-the-game-room
│  │  │  └─ index.md
│  │  ├─ 08-the-serenity-garden
│  │  │  └─ index.md
│  │  └─ index.md
│  ├─ 05-the-showcase-skybox
│  │  ├─ 01-the-exhibition-hall
│  │  │  └─ index.md
│  │  ├─ 02-the-feedback-forum
│  │  │  └─ index.md
│  │  ├─ 03-the-time-capsule
│  │  │  └─ index.md
│  │  ├─ 04-the-resonance-room
│  │  │  └─ index.md
│  │  ├─ 05-the-dream-weaver
│  │  │  └─ index.md
│  │  ├─ 06-the-celebration-hall
│  │  │  └─ index.md
│  │  └─ index.md
│  ├─ 06-the-manor-gardens
│  │  ├─ 01-the-artisans-greenhouse
│  │  │  └─ index.md
│  │  ├─ 02-the-sculpture-garden
│  │  │  └─ index.md
│  │  ├─ 03-the-sound-of-water-studio
│  │  │  └─ index.md
│  │  ├─ 04-the-writers-cabin
│  │  │  └─ index.md
│  │  ├─ 05-the-botanical-atelier
│  │  │  └─ index.md
│  │  ├─ 06-the-nature-photography-pavilion
│  │  │  └─ index.md
│  │  ├─ 07-the-sports-complex
│  │  │  └─ index.md
│  │  ├─ 08-the-open-air-theatre
│  │  │  └─ index.md
│  │  └─ index.md
│  ├─ 07-facilities-and-amenities
│  │  └─ index.md
│  ├─ 08-technology-integration
│  │  └─ index.md
│  ├─ 09-policies-and-etiquette
│  │  └─ index.md
│  ├─ 10-faqs
│  │  └─ index.md
│  ├─ 11-conclusion-and-contact-information
│  │  └─ index.md
│  └─ table-of-contents.md
├─ README.md
├─ style.css
├─ tiles
│  ├─ 0-entrance-
│  │  ├─ 1
│  │  │  ├─ b
│  │  │  │  └─ 0
│  │  │  │     └─ 0.jpg
│  │  │  ├─ d
│  │  │  │  └─ 0
│  │  │  │     └─ 0.jpg
│  │  │  ├─ f
│  │  │  │  └─ 0
│  │  │  │     └─ 0.jpg
│  │  │  ├─ l
│  │  │  │  └─ 0
│  │  │  │     └─ 0.jpg
│  │  │  ├─ r
│  │  │  │  └─ 0
│  │  │  │     └─ 0.jpg
│  │  │  └─ u
│  │  │     └─ 0
│  │  │        └─ 0.jpg
│  │  ├─ 2
│  │  │  ├─ b
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  └─ 1.jpg
│  │  │  │  └─ 1
│  │  │  │     ├─ 0.jpg
│  │  │  │     └─ 1.jpg
│  │  │  ├─ d
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  └─ 1.jpg
│  │  │  │  └─ 1
│  │  │  │     ├─ 0.jpg
│  │  │  │     └─ 1.jpg
│  │  │  ├─ f
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  └─ 1.jpg
│  │  │  │  └─ 1
│  │  │  │     ├─ 0.jpg
│  │  │  │     └─ 1.jpg
│  │  │  ├─ l
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  └─ 1.jpg
│  │  │  │  └─ 1
│  │  │  │     ├─ 0.jpg
│  │  │  │     └─ 1.jpg
│  │  │  ├─ r
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  └─ 1.jpg
│  │  │  │  └─ 1
│  │  │  │     ├─ 0.jpg
│  │  │  │     └─ 1.jpg
│  │  │  └─ u
│  │  │     ├─ 0
│  │  │     │  ├─ 0.jpg
│  │  │     │  └─ 1.jpg
│  │  │     └─ 1
│  │  │        ├─ 0.jpg
│  │  │        └─ 1.jpg
│  │  ├─ 3
│  │  │  ├─ b
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 1
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 2
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  └─ 3
│  │  │  │     ├─ 0.jpg
│  │  │  │     ├─ 1.jpg
│  │  │  │     ├─ 2.jpg
│  │  │  │     └─ 3.jpg
│  │  │  ├─ d
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 1
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 2
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  └─ 3
│  │  │  │     ├─ 0.jpg
│  │  │  │     ├─ 1.jpg
│  │  │  │     ├─ 2.jpg
│  │  │  │     └─ 3.jpg
│  │  │  ├─ f
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 1
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 2
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  └─ 3
│  │  │  │     ├─ 0.jpg
│  │  │  │     ├─ 1.jpg
│  │  │  │     ├─ 2.jpg
│  │  │  │     └─ 3.jpg
│  │  │  ├─ l
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 1
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 2
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  └─ 3
│  │  │  │     ├─ 0.jpg
│  │  │  │     ├─ 1.jpg
│  │  │  │     ├─ 2.jpg
│  │  │  │     └─ 3.jpg
│  │  │  ├─ r
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 1
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 2
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  └─ 3
│  │  │  │     ├─ 0.jpg
│  │  │  │     ├─ 1.jpg
│  │  │  │     ├─ 2.jpg
│  │  │  │     └─ 3.jpg
│  │  │  └─ u
│  │  │     ├─ 0
│  │  │     │  ├─ 0.jpg
│  │  │     │  ├─ 1.jpg
│  │  │     │  ├─ 2.jpg
│  │  │     │  └─ 3.jpg
│  │  │     ├─ 1
│  │  │     │  ├─ 0.jpg
│  │  │     │  ├─ 1.jpg
│  │  │     │  ├─ 2.jpg
│  │  │     │  └─ 3.jpg
│  │  │     ├─ 2
│  │  │     │  ├─ 0.jpg
│  │  │     │  ├─ 1.jpg
│  │  │     │  ├─ 2.jpg
│  │  │     │  └─ 3.jpg
│  │  │     └─ 3
│  │  │        ├─ 0.jpg
│  │  │        ├─ 1.jpg
│  │  │        ├─ 2.jpg
│  │  │        └─ 3.jpg
│  │  └─ preview.jpg
│  ├─ 1-rear
│  │  ├─ 1
│  │  │  ├─ b
│  │  │  │  └─ 0
│  │  │  │     └─ 0.jpg
│  │  │  ├─ d
│  │  │  │  └─ 0
│  │  │  │     └─ 0.jpg
│  │  │  ├─ f
│  │  │  │  └─ 0
│  │  │  │     └─ 0.jpg
│  │  │  ├─ l
│  │  │  │  └─ 0
│  │  │  │     └─ 0.jpg
│  │  │  ├─ r
│  │  │  │  └─ 0
│  │  │  │     └─ 0.jpg
│  │  │  └─ u
│  │  │     └─ 0
│  │  │        └─ 0.jpg
│  │  ├─ 2
│  │  │  ├─ b
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  └─ 1.jpg
│  │  │  │  └─ 1
│  │  │  │     ├─ 0.jpg
│  │  │  │     └─ 1.jpg
│  │  │  ├─ d
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  └─ 1.jpg
│  │  │  │  └─ 1
│  │  │  │     ├─ 0.jpg
│  │  │  │     └─ 1.jpg
│  │  │  ├─ f
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  └─ 1.jpg
│  │  │  │  └─ 1
│  │  │  │     ├─ 0.jpg
│  │  │  │     └─ 1.jpg
│  │  │  ├─ l
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  └─ 1.jpg
│  │  │  │  └─ 1
│  │  │  │     ├─ 0.jpg
│  │  │  │     └─ 1.jpg
│  │  │  ├─ r
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  └─ 1.jpg
│  │  │  │  └─ 1
│  │  │  │     ├─ 0.jpg
│  │  │  │     └─ 1.jpg
│  │  │  └─ u
│  │  │     ├─ 0
│  │  │     │  ├─ 0.jpg
│  │  │     │  └─ 1.jpg
│  │  │     └─ 1
│  │  │        ├─ 0.jpg
│  │  │        └─ 1.jpg
│  │  ├─ 3
│  │  │  ├─ b
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 1
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 2
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  └─ 3
│  │  │  │     ├─ 0.jpg
│  │  │  │     ├─ 1.jpg
│  │  │  │     ├─ 2.jpg
│  │  │  │     └─ 3.jpg
│  │  │  ├─ d
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 1
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 2
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  └─ 3
│  │  │  │     ├─ 0.jpg
│  │  │  │     ├─ 1.jpg
│  │  │  │     ├─ 2.jpg
│  │  │  │     └─ 3.jpg
│  │  │  ├─ f
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 1
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 2
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  └─ 3
│  │  │  │     ├─ 0.jpg
│  │  │  │     ├─ 1.jpg
│  │  │  │     ├─ 2.jpg
│  │  │  │     └─ 3.jpg
│  │  │  ├─ l
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 1
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 2
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  └─ 3
│  │  │  │     ├─ 0.jpg
│  │  │  │     ├─ 1.jpg
│  │  │  │     ├─ 2.jpg
│  │  │  │     └─ 3.jpg
│  │  │  ├─ r
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 1
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 2
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  └─ 3
│  │  │  │     ├─ 0.jpg
│  │  │  │     ├─ 1.jpg
│  │  │  │     ├─ 2.jpg
│  │  │  │     └─ 3.jpg
│  │  │  └─ u
│  │  │     ├─ 0
│  │  │     │  ├─ 0.jpg
│  │  │     │  ├─ 1.jpg
│  │  │     │  ├─ 2.jpg
│  │  │     │  └─ 3.jpg
│  │  │     ├─ 1
│  │  │     │  ├─ 0.jpg
│  │  │     │  ├─ 1.jpg
│  │  │     │  ├─ 2.jpg
│  │  │     │  └─ 3.jpg
│  │  │     ├─ 2
│  │  │     │  ├─ 0.jpg
│  │  │     │  ├─ 1.jpg
│  │  │     │  ├─ 2.jpg
│  │  │     │  └─ 3.jpg
│  │  │     └─ 3
│  │  │        ├─ 0.jpg
│  │  │        ├─ 1.jpg
│  │  │        ├─ 2.jpg
│  │  │        └─ 3.jpg
│  │  └─ preview.jpg
│  ├─ 2-garden
│  │  ├─ 1
│  │  │  ├─ b
│  │  │  │  └─ 0
│  │  │  │     └─ 0.jpg
│  │  │  ├─ d
│  │  │  │  └─ 0
│  │  │  │     └─ 0.jpg
│  │  │  ├─ f
│  │  │  │  └─ 0
│  │  │  │     └─ 0.jpg
│  │  │  ├─ l
│  │  │  │  └─ 0
│  │  │  │     └─ 0.jpg
│  │  │  ├─ r
│  │  │  │  └─ 0
│  │  │  │     └─ 0.jpg
│  │  │  └─ u
│  │  │     └─ 0
│  │  │        └─ 0.jpg
│  │  ├─ 2
│  │  │  ├─ b
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  └─ 1.jpg
│  │  │  │  └─ 1
│  │  │  │     ├─ 0.jpg
│  │  │  │     └─ 1.jpg
│  │  │  ├─ d
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  └─ 1.jpg
│  │  │  │  └─ 1
│  │  │  │     ├─ 0.jpg
│  │  │  │     └─ 1.jpg
│  │  │  ├─ f
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  └─ 1.jpg
│  │  │  │  └─ 1
│  │  │  │     ├─ 0.jpg
│  │  │  │     └─ 1.jpg
│  │  │  ├─ l
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  └─ 1.jpg
│  │  │  │  └─ 1
│  │  │  │     ├─ 0.jpg
│  │  │  │     └─ 1.jpg
│  │  │  ├─ r
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  └─ 1.jpg
│  │  │  │  └─ 1
│  │  │  │     ├─ 0.jpg
│  │  │  │     └─ 1.jpg
│  │  │  └─ u
│  │  │     ├─ 0
│  │  │     │  ├─ 0.jpg
│  │  │     │  └─ 1.jpg
│  │  │     └─ 1
│  │  │        ├─ 0.jpg
│  │  │        └─ 1.jpg
│  │  ├─ 3
│  │  │  ├─ b
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 1
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 2
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  └─ 3
│  │  │  │     ├─ 0.jpg
│  │  │  │     ├─ 1.jpg
│  │  │  │     ├─ 2.jpg
│  │  │  │     └─ 3.jpg
│  │  │  ├─ d
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 1
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 2
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  └─ 3
│  │  │  │     ├─ 0.jpg
│  │  │  │     ├─ 1.jpg
│  │  │  │     ├─ 2.jpg
│  │  │  │     └─ 3.jpg
│  │  │  ├─ f
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 1
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 2
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  └─ 3
│  │  │  │     ├─ 0.jpg
│  │  │  │     ├─ 1.jpg
│  │  │  │     ├─ 2.jpg
│  │  │  │     └─ 3.jpg
│  │  │  ├─ l
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 1
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 2
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  └─ 3
│  │  │  │     ├─ 0.jpg
│  │  │  │     ├─ 1.jpg
│  │  │  │     ├─ 2.jpg
│  │  │  │     └─ 3.jpg
│  │  │  ├─ r
│  │  │  │  ├─ 0
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 1
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  ├─ 2
│  │  │  │  │  ├─ 0.jpg
│  │  │  │  │  ├─ 1.jpg
│  │  │  │  │  ├─ 2.jpg
│  │  │  │  │  └─ 3.jpg
│  │  │  │  └─ 3
│  │  │  │     ├─ 0.jpg
│  │  │  │     ├─ 1.jpg
│  │  │  │     ├─ 2.jpg
│  │  │  │     └─ 3.jpg
│  │  │  └─ u
│  │  │     ├─ 0
│  │  │     │  ├─ 0.jpg
│  │  │     │  ├─ 1.jpg
│  │  │     │  ├─ 2.jpg
│  │  │     │  └─ 3.jpg
│  │  │     ├─ 1
│  │  │     │  ├─ 0.jpg
│  │  │     │  ├─ 1.jpg
│  │  │     │  ├─ 2.jpg
│  │  │     │  └─ 3.jpg
│  │  │     ├─ 2
│  │  │     │  ├─ 0.jpg
│  │  │     │  ├─ 1.jpg
│  │  │     │  ├─ 2.jpg
│  │  │     │  └─ 3.jpg
│  │  │     └─ 3
│  │  │        ├─ 0.jpg
│  │  │        ├─ 1.jpg
│  │  │        ├─ 2.jpg
│  │  │        └─ 3.jpg
│  │  └─ preview.jpg
│  └─ 3-back
│     ├─ 1
│     │  ├─ b
│     │  │  └─ 0
│     │  │     └─ 0.jpg
│     │  ├─ d
│     │  │  └─ 0
│     │  │     └─ 0.jpg
│     │  ├─ f
│     │  │  └─ 0
│     │  │     └─ 0.jpg
│     │  ├─ l
│     │  │  └─ 0
│     │  │     └─ 0.jpg
│     │  ├─ r
│     │  │  └─ 0
│     │  │     └─ 0.jpg
│     │  └─ u
│     │     └─ 0
│     │        └─ 0.jpg
│     ├─ 2
│     │  ├─ b
│     │  │  ├─ 0
│     │  │  │  ├─ 0.jpg
│     │  │  │  └─ 1.jpg
│     │  │  └─ 1
│     │  │     ├─ 0.jpg
│     │  │     └─ 1.jpg
│     │  ├─ d
│     │  │  ├─ 0
│     │  │  │  ├─ 0.jpg
│     │  │  │  └─ 1.jpg
│     │  │  └─ 1
│     │  │     ├─ 0.jpg
│     │  │     └─ 1.jpg
│     │  ├─ f
│     │  │  ├─ 0
│     │  │  │  ├─ 0.jpg
│     │  │  │  └─ 1.jpg
│     │  │  └─ 1
│     │  │     ├─ 0.jpg
│     │  │     └─ 1.jpg
│     │  ├─ l
│     │  │  ├─ 0
│     │  │  │  ├─ 0.jpg
│     │  │  │  └─ 1.jpg
│     │  │  └─ 1
│     │  │     ├─ 0.jpg
│     │  │     └─ 1.jpg
│     │  ├─ r
│     │  │  ├─ 0
│     │  │  │  ├─ 0.jpg
│     │  │  │  └─ 1.jpg
│     │  │  └─ 1
│     │  │     ├─ 0.jpg
│     │  │     └─ 1.jpg
│     │  └─ u
│     │     ├─ 0
│     │     │  ├─ 0.jpg
│     │     │  └─ 1.jpg
│     │     └─ 1
│     │        ├─ 0.jpg
│     │        └─ 1.jpg
│     ├─ 3
│     │  ├─ b
│     │  │  ├─ 0
│     │  │  │  ├─ 0.jpg
│     │  │  │  ├─ 1.jpg
│     │  │  │  ├─ 2.jpg
│     │  │  │  └─ 3.jpg
│     │  │  ├─ 1
│     │  │  │  ├─ 0.jpg
│     │  │  │  ├─ 1.jpg
│     │  │  │  ├─ 2.jpg
│     │  │  │  └─ 3.jpg
│     │  │  ├─ 2
│     │  │  │  ├─ 0.jpg
│     │  │  │  ├─ 1.jpg
│     │  │  │  ├─ 2.jpg
│     │  │  │  └─ 3.jpg
│     │  │  └─ 3
│     │  │     ├─ 0.jpg
│     │  │     ├─ 1.jpg
│     │  │     ├─ 2.jpg
│     │  │     └─ 3.jpg
│     │  ├─ d
│     │  │  ├─ 0
│     │  │  │  ├─ 0.jpg
│     │  │  │  ├─ 1.jpg
│     │  │  │  ├─ 2.jpg
│     │  │  │  └─ 3.jpg
│     │  │  ├─ 1
│     │  │  │  ├─ 0.jpg
│     │  │  │  ├─ 1.jpg
│     │  │  │  ├─ 2.jpg
│     │  │  │  └─ 3.jpg
│     │  │  ├─ 2
│     │  │  │  ├─ 0.jpg
│     │  │  │  ├─ 1.jpg
│     │  │  │  ├─ 2.jpg
│     │  │  │  └─ 3.jpg
│     │  │  └─ 3
│     │  │     ├─ 0.jpg
│     │  │     ├─ 1.jpg
│     │  │     ├─ 2.jpg
│     │  │     └─ 3.jpg
│     │  ├─ f
│     │  │  ├─ 0
│     │  │  │  ├─ 0.jpg
│     │  │  │  ├─ 1.jpg
│     │  │  │  ├─ 2.jpg
│     │  │  │  └─ 3.jpg
│     │  │  ├─ 1
│     │  │  │  ├─ 0.jpg
│     │  │  │  ├─ 1.jpg
│     │  │  │  ├─ 2.jpg
│     │  │  │  └─ 3.jpg
│     │  │  ├─ 2
│     │  │  │  ├─ 0.jpg
│     │  │  │  ├─ 1.jpg
│     │  │  │  ├─ 2.jpg
│     │  │  │  └─ 3.jpg
│     │  │  └─ 3
│     │  │     ├─ 0.jpg
│     │  │     ├─ 1.jpg
│     │  │     ├─ 2.jpg
│     │  │     └─ 3.jpg
│     │  ├─ l
│     │  │  ├─ 0
│     │  │  │  ├─ 0.jpg
│     │  │  │  ├─ 1.jpg
│     │  │  │  ├─ 2.jpg
│     │  │  │  └─ 3.jpg
│     │  │  ├─ 1
│     │  │  │  ├─ 0.jpg
│     │  │  │  ├─ 1.jpg
│     │  │  │  ├─ 2.jpg
│     │  │  │  └─ 3.jpg
│     │  │  ├─ 2
│     │  │  │  ├─ 0.jpg
│     │  │  │  ├─ 1.jpg
│     │  │  │  ├─ 2.jpg
│     │  │  │  └─ 3.jpg
│     │  │  └─ 3
│     │  │     ├─ 0.jpg
│     │  │     ├─ 1.jpg
│     │  │     ├─ 2.jpg
│     │  │     └─ 3.jpg
│     │  ├─ r
│     │  │  ├─ 0
│     │  │  │  ├─ 0.jpg
│     │  │  │  ├─ 1.jpg
│     │  │  │  ├─ 2.jpg
│     │  │  │  └─ 3.jpg
│     │  │  ├─ 1
│     │  │  │  ├─ 0.jpg
│     │  │  │  ├─ 1.jpg
│     │  │  │  ├─ 2.jpg
│     │  │  │  └─ 3.jpg
│     │  │  ├─ 2
│     │  │  │  ├─ 0.jpg
│     │  │  │  ├─ 1.jpg
│     │  │  │  ├─ 2.jpg
│     │  │  │  └─ 3.jpg
│     │  │  └─ 3
│     │  │     ├─ 0.jpg
│     │  │     ├─ 1.jpg
│     │  │     ├─ 2.jpg
│     │  │     └─ 3.jpg
│     │  └─ u
│     │     ├─ 0
│     │     │  ├─ 0.jpg
│     │     │  ├─ 1.jpg
│     │     │  ├─ 2.jpg
│     │     │  └─ 3.jpg
│     │     ├─ 1
│     │     │  ├─ 0.jpg
│     │     │  ├─ 1.jpg
│     │     │  ├─ 2.jpg
│     │     │  └─ 3.jpg
│     │     ├─ 2
│     │     │  ├─ 0.jpg
│     │     │  ├─ 1.jpg
│     │     │  ├─ 2.jpg
│     │     │  └─ 3.jpg
│     │     └─ 3
│     │        ├─ 0.jpg
│     │        ├─ 1.jpg
│     │        ├─ 2.jpg
│     │        └─ 3.jpg
│     └─ preview.jpg
└─ vendor
   ├─ bowser.min.js
   ├─ marzipano.js
   ├─ reset.min.css
   └─ screenfull.min.js

```