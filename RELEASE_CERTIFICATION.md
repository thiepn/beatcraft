# BeatCraft 3 — Current Release Certification

**Current build:** `3.0.0-rc4`  
**Current phase:** 13 — First-Run Experience & Game UX Polish  
**Catalog:** Core 18 + 10 CC0  
**Playable tracks:** 28  
**Chart slots:** 84  

## Automated certification status

**PASS**

The active Core 18 build still passes the automated release suite after Phase 13.

### Core chart certification

- **54 / 54 Core charts valid**
- **54 / 54 Phase 12 ergonomic calibration checks pass**
- **54 / 54 exact music-landmark alignment**
- difficulty nesting preserved: **Chill ⊂ Flow ⊂ Rush**
- perfect-session simulation remains green for all Core charts
- no blocking BeatCraft difficulty-guide issues

### Phase 13 UX certification

- one-time first-run guide opens on a fresh profile
- interactive four-lane keyboard/touch introduction reaches 4 / 4
- guided lesson launches correctly
- tutorial results hand off directly to **First Pulse · Chill**
- recommended first full run launches Arcade at 1.0×
- beginner guidance disappears after the first real clear
- Arcade / Practice behavior is explicitly differentiated
- Official Pack and Beatmap Studio are explicitly separated from normal play
- first-run guide can be replayed from Settings
- tested at 1440×900, 390×844 and 320×760
- **0 horizontal overflow**
- **0 page errors**
- **0 console errors/warnings**
- `BeatRelease.audit()`: **17 / 17 checks pass**

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
