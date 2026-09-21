# BeatCraft 3 — Current Release Certification

**Current build:** `3.0.0-rc5`  
**Current phase:** 14 — Progression & Replayability  
**Catalog:** Core 18 + 10 CC0  
**Playable tracks:** 28  
**Chart slots:** 84  

## Automated certification status

**PASS**

The active build passes the automated release suite after Phase 14.

### Phase 14 progression certification

- cosmetic player levels: **1–99**
- all **28 tracks remain unlocked at every level**
- old-save XP / records migrate directly
- Core mastery: **18 songs × 3 difficulties × 5 mastery points = 270**
- mastery stages: Clear → 85% → S Rank → Full Combo → All Perfect
- deterministic Daily Challenge
- current / best daily streak tracking
- 17 achievements
- legacy `tour` achievement ID preserved
- recent PB and timing-history support
- Practice / autoplay / tutorial grant **0 XP and 0 ranked progress**
- **0 horizontal overflow** in the Phase 14 Collection at 390 px
- no page errors or console warnings in the Phase 14 test flow

### Core chart certification

- **54 / 54 Core charts valid**
- **54 / 54 Phase 12 ergonomic calibration checks pass**
- **54 / 54 exact music-landmark alignment**
- difficulty nesting preserved: **Chill ⊂ Flow ⊂ Rush**
- perfect-session simulation remains green for all Core charts

### Release audit

`BeatRelease.audit()`: **18 / 18 automated checks pass**

The Phase 14 audit adds an explicit progression-integrity check on top of the previous music, chart, curation and game-feel gates.

## Human release gates still open

Automated tests do not replace real listening or physical playtesting.

### Core music
The 18 generated Core songs still have the Phase 11 listening checklist for subjective approval.

### Core charts
The app includes **Settings → Core chart playtest QA** for all **54 Core charts**, each at 1.0× with PASS / REWORK notes.

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
