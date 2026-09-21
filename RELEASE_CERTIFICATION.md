# BeatCraft 3 — Current Release Certification

**Current build:** `3.0.0-rc6`  
**Current phase:** 15 — Performance, Device & Latency Hardening  
**Catalog:** Core 18 + 10 CC0  
**Playable tracks:** 28  
**Chart slots:** 84  

## Automated certification status

**PASS**

The active build passes the automated release suite after Phase 15.

### Phase 15 device/performance certification

- adaptive rendering is enabled by default and preserves note timing, scoring and chart density
- sustained frame instability reduces decorative particle load and render DPR only
- browser-local 3-second device diagnostics report frame pacing, DPR, viewport, touch capability and browser-exposed audio timing
- existing click-track input-offset calibration remains available directly from diagnostics
- Web Audio diagnostics expose sample rate, context state, base latency and output latency when the browser makes them available
- decoded external CC0 audio uses an LRU-style cache capped at **2 inactive/active-safe decoded recordings**
- active audio tracks are protected from cache eviction
- `pagehide`, BFCache `pageshow`, online/offline changes, visibility loss and audio interruptions have explicit recovery paths
- older saves migrate with Adaptive performance enabled
- tested responsive layouts: **320, 390, 768 and 1440 px**
- no horizontal overflow in tested layouts
- live 390 px autoplay/session test passed
- focus-loss pause/recovery path passed
- **0 page errors**
- **0 console errors/warnings**

### Release audit

`BeatRelease.audit()`: **19 / 19 automated checks pass**

The Phase 15 audit adds explicit device-hardening certification on top of music, chart, curation, UX, progression and game-feel gates.

### Core chart certification

- **54 / 54 Core charts valid**
- **54 / 54 Phase 12 ergonomic calibration checks pass**
- **54 / 54 exact music-landmark alignment**
- difficulty nesting preserved: **Chill ⊂ Flow ⊂ Rush**
- perfect-session simulation remains green for all Core charts

## Important physical-device limitation

Browser automation cannot establish true end-to-end acoustic latency or reliably identify every Bluetooth audio path.

Before final v3.0.0 release, physical-device acceptance should still include:

- Android phone speaker
- Android + Bluetooth headphones/earbuds
- iPhone/iPad where available
- desktop/laptop speakers
- desktop/laptop Bluetooth audio
- Chrome/Chromium
- Firefox
- Safari/WebKit where available
- Samsung Internet where available
- 60 Hz and high-refresh-rate devices where available

Timing calibration should be rerun whenever the playback device changes.

## Human release gates still open

Automated tests do not replace real listening or physical playtesting.

### Core music
The 18 generated Core songs retain the Phase 11 listening checklist for subjective approval.

### Core charts
The app includes **Settings → Core chart playtest QA** for all **54 Core charts**, each at 1.0× with PASS / REWORK notes.

### CC0 Official Pack
The 10-song / 30-chart Official Pack still requires:

`recording identity → analysis → timing confirmation → audio audition → human review → real playtest → verification`

## Current release conclusion

**Core 18 automated RC certification: PASS.**

**Full 28-track human/physical-device release certification: NOT YET COMPLETE.**

See:

- `PHASE11_MUSIC_QA.md`
- `PHASE12_CHART_CALIBRATION.md`
- `PHASE13_FIRST_RUN_UX.md`
- `PHASE14_PROGRESSION_REPLAYABILITY.md`
- `PHASE15_PERFORMANCE_DEVICE_LATENCY.md`
