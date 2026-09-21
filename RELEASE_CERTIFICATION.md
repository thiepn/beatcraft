# BeatCraft 3 — Current Release Certification

**Current build:** `3.1.0`  
**Current phase:** 19 — Local / Popular Song Packs  
**Catalog:** Core 18 + 10 CC0  
**Playable tracks:** 28  
**Chart slots:** 84

## Automated certification status

**PASS — 24 / 24 deterministic checks**

The v3.1.0 source line passes the deterministic release audit after Phase 19.

### Phase 19 local / popular song support

- **My Music** imports user-supplied audio directly from the device;
- commercial/local audio remains in browser IndexedDB and is never committed to GitHub;
- local song metadata uses reserved dynamic IDs starting at 1000;
- imported songs receive recording-locked Chill / Flow / Rush charts;
- local tracks appear in the normal library with a LOCAL marker;
- Preview, Arcade, Practice and Beatmap Studio work with local songs;
- replacing a local recording invalidates/rebuilds stale non-human timing;
- removing a local song deletes its browser audio, beatmaps, metadata and records;
- backups include local-song metadata/maps but intentionally exclude audio binaries;
- the new `phase19-local-music` deterministic gate passes.

See `PHASE19_LOCAL_MUSIC.md`.

### v3.0.1 CC0 timing hotfix

- CC0 gameplay no longer trusts catalog-grid auto-draft timestamps;
- stale non-human CC0 maps are rebuilt from detected attacks in the actual decoded recording before gameplay;
- beat-compatible onset selection replaces the former ±72–125 ms local correction;
- Chill ⊂ Flow ⊂ Rush timing is preserved;
- the same musical event keeps the same lane across difficulties;
- runtime repair is cached per decoded recording identity;
- explicitly human-authored / verified chart timing is preserved;
- the new deterministic `cc0-recording-locked-mapping` regression gate passes.

See `V3_0_1_CC0_TIMING_HOTFIX.md`.

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

`BeatRelease.audit()`: **24 / 24 automated checks pass**

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

**v3.1.0 code / deterministic release certification: PASS.**

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
