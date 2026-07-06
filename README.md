# Sundial — Vue 3 Music Player

A warm-minimal music player built with **Vue 3 + Vite**, designed as a learning 
project focused on the **composable pattern** and shared reactive state 
across components.

---

## Features

- Browse a full music library with track listings
- Animated spinning vinyl record per track
- Play, pause, skip, and seek from a persistent bottom player bar
- Volume control
- Artists page with grouped track listings
- Fully responsive across desktop, tablet, and mobile
- Respects `prefers-reduced-motion` for accessibility

---

## Vue 3 Concepts Practiced

| Concept | Where |
|---|---|
| Composables & shared singleton state | `usePlayer.js` |
| `ref()` and `computed()` | `usePlayer.js`, all components |
| Vue Router + multi-page SPA | `router/index.js`, `LibraryView`, `ArtistView` |
| Props & component composition | `TrackRow.vue`, `Vinyl.vue` |
| `v-for`, `v-if`, `v-else` | `LibraryView`, `PlayerBar`, `ArtistView` |
| Dynamic inline styles with `:style` | `Vinyl.vue`, `ArtistView.vue` |
| CSS animations via `animation-play-state` | `Vinyl.css` |
| CSS Custom Properties (variables) | `global.css`, all stylesheets |
| Responsive layout with CSS Grid | `PlayerBar.css`, `ArtistView.css` |
| `backdrop-filter` glassmorphism effect | `PlayerBar.css` |

---

---

## The Core Concept: Singleton Composable

The heart of this project is `usePlayer.js`. Reactive state is declared 
**at module scope** — outside the function — so every component that calls 
`usePlayer()` shares the exact same instance:

```js
// Module-level: created once, shared everywhere
const queue = ref([...trackList]);
const currentIndex = ref(0);
const isPlaying = ref(false);

export default function usePlayer() {
    // All components read and write the same refs above
    return { queue, currentIndex, isPlaying, ... };
}
```

This means `TrackRow`, `PlayerBar`, and `ArtistView` all stay in sync 
automatically no prop drilling, no global store needed.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/moses-25/vue-sundial-player.git

# Navigate into the project
cd vue-sundial-player

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for production

```bash
npm run build
```

---

## Tech Stack

- [Vue 3](https://vuejs.org/) — Composition API + `<script setup>`
- [Vite](https://vitejs.dev/) — Build tool and dev server
- [Vue Router 4](https://router.vuejs.org/) — Client-side routing
- Vanilla CSS — No UI framework, all custom styles