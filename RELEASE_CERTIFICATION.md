# BeatCraft 3 — Current Release Certification

**Current build:** `3.0.0-rc7`  
**Current phase:** 16 — Accessibility & Controls Certification  
**Catalog:** Core 18 + 10 CC0  
**Playable tracks:** 28  
**Chart slots:** 84  

## Automated certification status

**PASS**

The active build passes the automated release suite after Phase 16.

### Phase 16 accessibility & controls certification

- four individually remappable gameplay keys
- one-click control presets:
  - **D F J K** two-hand default
  - **A S D F** left-hand
  - **J K L ;** right-hand
  - **← ↓ ↑ →** arrow cluster
- keyboard and touch can be mixed in-session
- lanes always use permanent **● ◆ ■ ▲** symbols and numbers in addition to color
- judgments remain explicit **Perfect / Great / Good / Miss** text; color is supplemental
- reduced-motion mode
- separate reduced-effects mode
- high-contrast notes
- large-control mode with **64 px** gameplay pads
- optional screen-reader gameplay summaries for sections, misses/strays and major combo milestones
- current key + shape exposed through gameplay pad accessible names
- `aria-keyshortcuts` exposed on live gameplay pads
- native dialogs/buttons retained
- skip-to-content link retained
- keyboard dialog focus restoration added
- independent master / music / tap-feedback volume controls
- tested at **1440 × 900**, **390 × 844**, and **320 × 760**
- **0 unnamed visible buttons** in the tested accessibility flow
- **0 horizontal overflow** at 390 px and 320 px
- live screen-reader miss announcement verified during gameplay
- **0 page errors**
- **0 console errors/warnings**

### Core chart certification

- **54 / 54 Core charts valid**
- **54 / 54 Phase 12 ergonomic calibration checks pass**
- **54 / 54 exact music-landmark alignment**
- difficulty nesting preserved: **Chill ⊂ Flow ⊂ Rush**
- perfect-session simulation remains green for all Core charts

### Performance/device certification

Phase 15 remains intact:

- adaptive decorative rendering
- decoded external-audio LRU cap
- device diagnostics
- latency information
- background/focus recovery

### Release audit

`BeatRelease.audit()`: **20 / 20 automated checks pass**

The Phase 16 audit adds an explicit accessibility/controls integrity gate on top of the previous music, chart, progression, UX and device checks.

## Accessibility scope boundary

This is BeatCraft's internal accessibility certification, **not a formal WCAG conformance claim**.

Menus, settings, controls, focus behavior and status feedback are assistive-technology aware. The real-time four-lane rhythm chart remains a spatial/timing interaction and is not represented as fully nonvisual gameplay.

## Human release gates still open

Automated tests do not replace real listening or physical playtesting.

### Core music
The 18 generated Core songs still have the Phase 11 listening checklist for subjective approval.

### Core charts
The app includes **Settings → Core chart playtest QA** for all **54 Core charts**, each at 1.0× with PASS / REWORK notes.

### Physical accessibility/device checks
Final hardware acceptance should still include real checks with:

- Android TalkBack
- iOS VoiceOver
- Windows Narrator / NVDA / JAWS where available
- external/adaptive keyboards
- real touch ergonomics
- supported-device vibration

### CC0 Official Pack
The 10-song / 30-chart Official Pack still requires:

`recording identity → analysis → timing confirmation → audio audition → human review → real playtest → verification`

## Current release conclusion

**Core 18 automated RC certification: PASS.**

**Full 28-track human release certification: NOT YET COMPLETE.**

See:

- `PHASE11_MUSIC_QA.md`
- `PHASE12_CHART_CALIBRATION.md`
- `PHASE13_FIRST_RUN_UX.md`
- `PHASE14_PROGRESSION_REPLAYABILITY.md`
- `PHASE15_PERFORMANCE_DEVICE_LATENCY.md`
- `PHASE16_ACCESSIBILITY_CONTROLS.md`
