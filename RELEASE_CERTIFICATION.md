# BeatCraft 3 — Current Release Certification

**Current build:** `3.0.0-rc8`  
**Current phase:** 17 — Official Pack Human Certification  
**Catalog:** Core 18 + 10 CC0  
**Playable tracks:** 28  
**Chart slots:** 84  

## Automated certification status

**PASS**

The active build passes the automated release suite after Phase 17.

### Phase 17 Official Pack certification integrity

- Official Pack remains **10 tracks / 30 chart slots**
- seed / untouched auto-draft charts cannot pass the human release gate
- exact accepted recording identity remains mandatory
- waveform analysis remains bound to that exact recording
- timing confirmation remains bound to that exact recording
- audition coverage now requires **95%** of the exact current chart revision
- audition coverage is bound to:
  - track
  - difficulty
  - chart revision
  - accepted recording identity
- six explicit human review criteria are required
- reviewer initials/name are required
- human review is bound to current revision + recording identity
- clean playtest evidence now records:
  - human run
  - 1.0× speed
  - full chart
  - no mirror
  - current chart revision
  - current accepted recording identity
- stale revision / wrong recording / autoplay / partial / altered-speed evidence cannot satisfy release verification
- changing notes, timing or accepted audio invalidates downstream human evidence
- Official Pack page now exposes the next unresolved human gate
- portable Phase 17 evidence export/import added
- no audio binaries are included in evidence bundles

### Evidence invalidation test

A synthetic valid Official Pack evidence chain passed verification with every human gate present.

Changing only the chart revision immediately invalidated:

- audition coverage
- audition confirmation
- human review
- performance playtest

and correctly blocked verification again.

### Release audit

`BeatRelease.audit()`: **21 / 21 automated checks pass**

The new Phase 17 gate verifies that human certification cannot be silently replaced by generated/seed evidence.

## Actual Official Pack certification status

**0 / 30 human-certified in the shipped repository state.**

This is intentional. Phase 17 hardens and operationalizes the certification workflow; it does not fabricate listening, review or physical playtest evidence.

The remaining work must be done by a person using the Phase 17 queue:

`accepted recording → analyzed → audio-informed map → timing → ≥95% audition → six-point review → full 1.0× playtest → verify`

## Previous certification remains intact

### Core chart certification

- **54 / 54 Core charts valid**
- **54 / 54 Phase 12 ergonomic calibration checks pass**
- **54 / 54 exact music-landmark alignment**
- difficulty nesting preserved: **Chill ⊂ Flow ⊂ Rush**
- perfect-session simulation remains green

### Performance/device certification

Phase 15 remains intact:

- adaptive decorative rendering
- decoded external-audio LRU cap
- device diagnostics
- latency information
- background/focus recovery

### Accessibility/controls certification

Phase 16 remains intact:

- remappable and one-hand controls
- non-color lane cues
- reduced motion/effects
- high contrast
- large controls
- screen-reader status summaries
- focus restoration

## Human release gates still open

### Core music
The 18 generated Core songs still require completion of the Phase 11 subjective listening checklist.

### Core charts
The 54 Core charts still require the Phase 12 physical playtest checklist.

### Official Pack
All 30 CC0 chart slots still require Phase 17 human evidence.

## Current release conclusion

**Core 18 automated RC certification: PASS.**

**Official Pack certification workflow: HARDENED AND READY.**

**Full 28-track human release certification: NOT YET COMPLETE.**

See:

- `PHASE11_MUSIC_QA.md`
- `PHASE12_CHART_CALIBRATION.md`
- `PHASE13_FIRST_RUN_UX.md`
- `PHASE14_PROGRESSION_REPLAYABILITY.md`
- `PHASE15_PERFORMANCE_DEVICE_LATENCY.md`
- `PHASE16_ACCESSIBILITY_CONTROLS.md`
- `PHASE17_OFFICIAL_PACK_CERTIFICATION.md`
