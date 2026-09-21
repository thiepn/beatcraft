# BeatCraft 3 — Phase 12 Chart Playtest & Difficulty Calibration

**Build:** `3.0.0-rc3`  
**Catalog:** Core 18 + 10 CC0  
**Core charts in scope:** 54  
**Artifact SHA-256:** `2fec319bae2702c77577f8654548915c0e1607691247d72c442837996c8a2a5b`

## Outcome

Phase 12 keeps the Phase 6 music-first chart architecture intact, but adds a deterministic ergonomic calibration pass for all generated Core charts.

The calibration does **not** move musical timestamps or invent new notes. It reassigns lanes and trims a conflicting hold tail where necessary so difficulty comes from musical detail rather than arbitrary hand travel.

## Objective corrections

### Rapid lane travel

Across the 54 Core charts:

- rapid 0↔3 single-note jumps: **425 → 0**
- average rapid-large-jump rate on Chill: **2.94% → 0%**
- average rapid-large-jump rate on Flow: **6.84% → 0%**
- average rapid-large-jump rate on Rush: **10.78% → 0.04%**

Large lane movement is still allowed when enough time exists; the calibration targets only compressed, ergonomically arbitrary travel.

### Chords

- total chord groups preserved: **543 → 543**
- full-span lane 0↔3 chords: **73 → 0**

Chords remain tied to simultaneous musical events, but generated Core charts now use compact two-hand shapes rather than unnecessarily wide reaches.

### Holds

- detected same-hand hold conflicts: **1 → 0**

Only the conflicting hold tail was shortened. Note-head timing and musical provenance remain unchanged.

### Content preservation

- note heads preserved: **5,592 → 5,592**
- Chill note heads: **939**
- Flow note heads: **1,598**
- Rush note heads: **3,055**
- music-landmark match rate: **100%**
- difficulty nesting remains `Chill ⊂ Flow ⊂ Rush`

## Automated Phase 12 certification

**54 / 54 Core charts pass the Phase 12 calibration gate.**

Each chart is checked for:

- BeatCraft difficulty-guide violations
- exact musical-landmark alignment
- rapid large lane travel
- rapid outer-lane jumps
- wide chord ergonomics
- same-hand hold conflicts
- lane balance
- existing density / peak-density / jack limits

The complete Phase 10/11 release audit remains green after calibration, including perfect-session simulation for every Core chart.

## Human playtest workflow

BeatCraft now contains **Settings → Core chart playtest QA**.

The checklist contains all **54 Core charts** and shows, per chart:

- average NPS
- peak NPS
- rapid outer-jump count
- lane balance
- hold conflicts
- automated calibration status

Each chart can be launched directly at **1.0×** in Practice mode and marked:

- **PASS**
- **REWORK**

with freeform playtest notes.

Decisions are stored locally in the browser.

## Remaining release gate

Automated ergonomics cannot establish whether a chart *feels* satisfying to a real player. Final approval still requires a full human playthrough of all 54 Core charts, especially for:

- subjective lane flow
- whether musical accents feel correctly emphasized
- whether a hook is undercharted or overcharted
- local difficulty spikes that are technically within limits
- holds that are legal but uncomfortable
- whether Chill / Flow / Rush perceptually match their labels

The automated calibration is complete; the 54-chart human checklist is intentionally left as the remaining subjective release gate.