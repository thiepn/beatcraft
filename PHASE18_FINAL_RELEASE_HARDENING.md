# BeatCraft 3 — Phase 18 Final Release Hardening & v3.0.0

**Release:** `3.0.0`  
**Phase:** 18 — Final Release Hardening & Release Freeze  
**Scope:** no new feature systems

## Outcome

Phase 18 freezes the production code line at **v3.0.0** and hardens the existing product for release. It does not fabricate any subjective listening, physical playtest, or Official Pack certification evidence.

The deterministic release audit now passes **22 / 22 checks**.

## Production fixes

- corrected stale footer metadata that still displayed Phase 16 / RC8;
- froze the internal release manifest at `3.0.0`, Phase 18;
- removed RC8 build identifiers from runtime/export metadata;
- retained the Phase 17 human-certification system unchanged as a required human gate.

## Save / import / export hardening

The normal backup is now a versioned full backup:

- format: `beatcraft-full-backup`;
- version: `1`;
- build: `3.0.0`;
- includes sanitized progress and settings;
- includes validated authored `.bcmap` state;
- does **not** include audio binaries.

Import remains backward-compatible with legacy flat progress backups.

Full-backup imports reject:

- unknown backup formats;
- unsupported backup versions;
- malformed map collections;
- any map collection where one or more entries fail BeatCraft validation;
- files over 20 MB.

Local authored maps now keep a last-known-valid backup at `beatcraft.maps.v1.backup` and recover from it when the primary map store is unreadable.

## Offline / browser resilience

Added a same-origin service worker and web app manifest.

The service worker:

- caches only the BeatCraft shell (`./`, `index.html`, manifest and SVG icon);
- uses network-first navigation so fresh deployments win when online;
- falls back to the cached app shell when navigation is offline;
- never caches cross-origin Official Pack audio;
- skips range requests;
- cleans older BeatCraft shell caches on activation.

The runtime registers the worker only on HTTP(S), so local-file use remains unaffected.

Browser resilience was tightened by:

- making `prefers-reduced-motion` detection safe when `matchMedia` is unavailable;
- making `ResizeObserver` optional and retaining the normal window-resize fallback;
- preserving existing pagehide/pageshow, focus-loss, audio-interruption and offline handling.

## GitHub Pages deployment safety

Phase 18's deterministic audit now checks that:

- the release is frozen at `3.0.0` / Phase 18;
- page assets use repository-relative paths rather than root-absolute paths;
- the manifest is linked with `./manifest.webmanifest`;
- browser backup primitives are available;
- localStorage capability exists.

The static app therefore remains compatible with deployment under the repository subpath `/beatcraft/`.

## Certification boundary

Automated release hardening is complete, but human evidence remains separate:

- **Core 18 music:** subjective Phase 11 listening decisions remain human work;
- **Core 54 charts:** Phase 12 physical playtest decisions remain human work;
- **Official Pack 30 charts:** Phase 17 audition/review/playtest/verification evidence remains human work.

Therefore:

**v3.0.0 code/release hardening: PASS and frozen.**

**Full 28-track human certification: not claimed until the remaining human gates are actually completed.**
