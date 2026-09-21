# BeatCraft 3 — Current Release Certification

**Current build:** `3.0.0`  
**Current phase:** 18 — Final Release Hardening & Release Freeze  
**Catalog:** Core 18 + 10 CC0  
**Playable tracks:** 28  
**Chart slots:** 84

## Automated certification status

**PASS — 22 / 22 deterministic checks**

The v3.0.0 source line passes the deterministic release audit after Phase 18.

### Phase 18 release hardening

- release manifest frozen at `3.0.0` / Phase 18;
- stale Phase 16 / RC8 footer metadata corrected;
- GitHub Pages paths remain repository-relative;
- web app manifest added with a scalable SVG app icon;
- same-origin offline shell service worker added with shell-only cache scope;
- navigation uses network-first with cached-shell fallback;
- cross-origin Official Pack audio is not service-worker cached;
- progress export upgraded to a versioned full backup;
- full backup includes validated authored maps but no audio binaries;
- legacy flat progress imports remain supported;
- malformed/incompatible full backups are rejected;
- authored maps now keep a last-known-valid local backup;
- `ResizeObserver` and `matchMedia` now have safe fallbacks;
- Phase 17 evidence exports are stamped with build `3.0.0`.

### Release audit

`BeatRelease.audit()`: **22 / 22 automated checks pass**

The Phase 18 gate additionally verifies release freeze metadata, GitHub Pages-relative asset paths, the manifest link, backup primitives, and local-storage capability.

## Phase 17 Official Pack certification integrity

The existing Phase 17 evidence chain remains mandatory:

- exact accepted recording identity;
- waveform analysis bound to that recording;
- timing confirmation bound to that recording;
- at least 95% audition coverage of the exact current chart revision;
- six-point explicit human review;
- reviewer identity;
- full human 1.0× playtest with no mirror/partial/autoplay substitution;
- final verification bound to the same revision and recording.

Seed / untouched auto-draft charts still cannot pass the human release gate.

## Actual Official Pack certification status

**0 / 30 human-certified in the shipped repository state.**

Phase 18 does not fabricate human evidence.

## Previous automated certification remains intact

### Core chart certification

- **54 / 54 Core charts valid**
- **54 / 54 Phase 12 ergonomic calibration checks pass**
- **54 / 54 exact music-landmark alignment**
- difficulty nesting preserved: **Chill ⊂ Flow ⊂ Rush**
- perfect-session simulation remains green

### Performance / device certification

Phase 15 remains intact:

- adaptive decorative rendering;
- decoded external-audio LRU cap;
- device diagnostics;
- latency information;
- background/focus recovery.

### Accessibility / controls certification

Phase 16 remains intact:

- remappable and one-hand controls;
- non-color lane cues;
- reduced motion/effects;
- high contrast;
- large controls;
- screen-reader status summaries;
- focus restoration.

## Human release gates still open

### Core music

The 18 generated Core songs still require completion of the Phase 11 subjective listening checklist.

### Core charts

The 54 Core charts still require the Phase 12 physical playtest checklist.

### Official Pack

All 30 CC0 chart slots still require Phase 17 human evidence.

## Final release conclusion

**v3.0.0 code / deterministic release certification: PASS and frozen.**

**Full 28-track human certification: NOT YET COMPLETE.**

See:

- `PHASE11_MUSIC_QA.md`
- `PHASE12_CHART_CALIBRATION.md`
- `PHASE13_FIRST_RUN_UX.md`
- `PHASE14_PROGRESSION_REPLAYABILITY.md`
- `PHASE15_PERFORMANCE_DEVICE_LATENCY.md`
- `PHASE16_ACCESSIBILITY_CONTROLS.md`
- `PHASE17_OFFICIAL_PACK_CERTIFICATION.md`
- `PHASE18_FINAL_RELEASE_HARDENING.md`
