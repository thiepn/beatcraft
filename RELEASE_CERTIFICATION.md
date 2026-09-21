# BeatCraft 3 — Current Release Certification

**Current build:** `3.0.0-rc3`  
**Current phase:** 12 — Chart Playtest & Difficulty Calibration  
**Catalog:** Core 18 + 10 CC0  
**Playable tracks:** 28  
**Chart slots:** 84  

## Automated certification status

**PASS**

The active Core 18 build passes the automated release suite after Phase 12.

### Core chart certification

- **54 / 54 Core charts valid**
- **54 / 54 Phase 12 ergonomic calibration checks pass**
- **54 / 54 exact music-landmark alignment**
- difficulty nesting preserved: **Chill ⊂ Flow ⊂ Rush**
- perfect-session simulation remains green for all Core charts
- no blocking BeatCraft difficulty-guide issues

### Phase 12 playability changes

- rapid 0↔3 single-note jumps: **425 → 0**
- average rapid-large-jump rate:
  - Chill: **2.94% → 0%**
  - Flow: **6.84% → 0%**
  - Rush: **10.78% → 0.04%**
- same-hand hold conflicts: **1 → 0**
- full-span lane 0↔3 chords: **73 → 0**
- total chord groups preserved: **543 → 543**
- note heads preserved: **5,592 → 5,592**

The calibration changes lane ergonomics and one conflicting hold tail without moving musical note-head timestamps.

## Human release gates still open

Automated tests do not replace real listening or physical playtesting.

### Core music
The 18 generated Core songs still have the Phase 11 listening checklist for subjective approval.

### Core charts
The app now includes **Settings → Core chart playtest QA** with all **54 Core charts**.

Each chart can be launched at **1.0×** and marked:

- **PASS**
- **REWORK**

with freeform playtest notes.

Final subjective chart approval requires a real playthrough because code cannot determine whether lane flow, musical emphasis, or local difficulty *feels* satisfying.

### CC0 Official Pack
The 10-song / 30-chart Official Pack still requires its existing human evidence chain:

`recording identity → analysis → timing confirmation → audio audition → human review → real playtest → verification`

## Current release conclusion

**Core 18 automated RC certification: PASS.**

**Full 28-track human release certification: NOT YET COMPLETE.**

The remaining work is human listening/playtesting and the later device/deployment hardening phases, not another generator rewrite.

See:

- `PHASE11_MUSIC_QA.md`
- `PHASE12_CHART_CALIBRATION.md`
