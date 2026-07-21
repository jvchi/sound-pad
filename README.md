# Sound Pad

An 8-pad grid where each pad toggles on and off with its own color.

A minimal React exercise in component composition and state updates. Each pad is a reusable component driven by data from a shared array.

## Features

- 2×4 responsive pad grid
- Per-pad on/off state
- OKLCH color palette
- Tailwind CSS layout

## Prerequisites

- Node.js 20+
- npm

## Getting started

```sh
git clone https://github.com/jvchi/sound-pad.git
cd sound-pad
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build

```sh
npm run build
npm run preview
```

## Project structure

```
components/
  Pad.jsx              # single toggle pad
data/
  pads.js              # pad colors and initial state
src/
  App.jsx              # grid layout and state handler
  main.jsx
```
