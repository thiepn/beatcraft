# BeatCraft 3 — Phase 15 Performance, Device & Latency Hardening

**Build:** `3.0.0-rc6`  
**Catalog:** Core 18 + 10 CC0  
**Focus:** frame pacing, latency visibility, audio lifecycle, memory pressure, tab/device recovery

## Outcome

Phase 15 hardens the existing game without changing song content, chart timing, scoring, or difficulty.

## Adaptive performance

A new **Adaptive performance** setting is enabled by default.

During active gameplay BeatCraft monitors rolling frame timing. If frame pacing becomes unstable it automatically:

- lowers gameplay-canvas device-pixel-ratio from the normal cap of 2.0 to 1.35;
- reduces decorative hit-particle density and particle caps;
- preserves note timestamps, scroll timing, scoring, judgment windows, chart density, SFX and gameplay logic.

The mode can return to full rendering after several stable measurement windows.

This is deliberately a visual-quality adaptation, not a gameplay assist.

## Device diagnostics

Settings now includes **Device & performance → Run diagnostics**.

The local three-second test reports browser-exposed information including:

- estimated display refresh / frame pacing;
- p95 frame duration;
- long-frame count;
- viewport and device pixel ratio;
- touch-point support;
- Web Audio state;
- sample rate;
- `baseLatency` when exposed;
- `outputLatency` when exposed;
- current BeatCraft timing offset;
- connection type when exposed;
- JS heap use on browsers that expose it;
- adaptive-performance state.

No diagnostic data leaves the browser.

## Timing calibration

The existing click-track calibration remains the authoritative player calibration tool.

Phase 15 clarifies the distinction between:

- browser-reported output latency, which may or may not be exposed accurately;
- BeatCraft's combined timing offset, measured from the exact speakers/headphones and input method the player uses.

Players are explicitly prompted to recalibrate after changing computer/phone or audio output, especially Bluetooth devices.

## External-audio memory hardening

Decoded CC0 recordings are now managed as a small LRU-style cache.

- maximum decoded external recordings retained: **2**;
- actively playing recordings are protected from eviction;
- older inactive buffers are released when another external track is prepared;
- page-hide cleanup can trim inactive decoded audio.

This prevents multiple large decoded WAV/MP3 recordings from accumulating indefinitely during long Official Pack or mapper sessions.

## Browser / lifecycle recovery

Existing hidden-tab and focus-loss safety remains intact and Phase 15 extends recovery for:

- back-forward-cache `pageshow` restoration;
- online/offline transitions;
- audio interruption state;
- page-hide memory cleanup;
- mapper/playback/calibration suspension when the page leaves the foreground.

Runs pause instead of allowing hidden/background time to create false misses.

## Validation

### Release audit

`BeatRelease.audit()`:

- **19 / 19 automated checks pass**;
- new `phase15-device-hardening` check passes;
- all Phase 11–14 music/chart/progression gates remain green.

### Save migration

A pre-Phase-15 save without the new setting sanitizes to:

- `adaptivePerformance: true`

without changing existing player progress or settings.

### Decoded-audio cache

Synthetic LRU test:

- starting cached IDs: `25, 26, 27`
- after trim: `26, 27`
- cap: **2**

### Responsive/runtime test

Chromium test viewports:

- 320 × 760
- 390 × 844
- 768 × 900
- 1440 × 900

Results at every size:

- automated release audit passes;
- no horizontal overflow;
- no page errors;
- no console warnings/errors.

On the 390 px diagnostic run, the headless test browser reported approximately:

- **60 Hz** frame pacing;
- **32 ms** browser-reported audio output latency;
- healthy p95 frame pacing.

These numbers describe the test environment, not a guaranteed value for user devices.

### Gameplay lifecycle

A live 390 px autoplay run was started and then given a simulated window focus loss.

Verified:

- game canvas initialized correctly;
- run entered count-in normally;
- focus loss immediately opened the safe pause state;
- no runtime errors;
- no console errors/warnings.

## Remaining limitations

Browser code cannot reliably identify a Bluetooth device, force low-latency hardware modes, or know the true end-to-end acoustic latency of every output path.

Therefore final device certification still requires physical tests on representative real hardware in addition to these automated browser checks.