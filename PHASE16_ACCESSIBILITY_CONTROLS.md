# BeatCraft 3 — Phase 16 Accessibility & Controls Certification

**Build:** `3.0.0-rc7`  
**Catalog:** Core 18 + 10 CC0  
**Scope:** input flexibility, non-color gameplay cues, keyboard/focus behavior, sensory options, assistive status feedback, mobile target sizing

## Outcome

Phase 16 certifies the accessibility and control paths implemented in BeatCraft without changing chart timing, scoring, song content, or difficulty.

This is an internal BeatCraft accessibility certification, **not a formal WCAG conformance claim**. The real-time four-lane chart remains a spatial/timing game and is not represented as fully nonvisual gameplay.

## Control flexibility

BeatCraft retains individual per-lane remapping and now adds four one-click presets:

- **D F J K** — two-hand default
- **A S D F** — left-hand layout
- **J K L ;** — right-hand layout
- **← ↓ ↑ →** — arrow cluster

Every preset remains fully remappable afterward. Space and Escape stay reserved for session control, and duplicate lane bindings are rejected.

Keyboard and touch input can be mixed in the same session.

## Non-color-dependent gameplay

Color is never the only gameplay cue.

Each lane permanently uses both a color and a unique geometric symbol:

1. **● circle**
2. **◆ diamond**
3. **■ square**
4. **▲ triangle**

Lane numbers and current key labels are also shown. Falling notes carry the same lane symbols.

Judgments are always written explicitly as **Perfect / Great / Good / Miss**; their colors are supplemental.

## Sensory controls

Phase 16 retains and extends the sensory settings:

- **Reduced motion** — removes shake, particles and animated scaling.
- **Reduced effects** — new; preserves motion but suppresses particle bursts, screen punch and other decorative intensity.
- **High-contrast notes** — stronger white note edges while preserving lane symbols.
- **Larger controls** — raises the primary lane pads to 64 px and increases interactive target sizes.
- **Timing hints** — independently toggle early/late visual feedback.
- **Touch vibration** — optional and device-dependent.
- **Independent master / music / tap-feedback volume controls**.

None of these settings changes judgment windows, scoring or chart content.

## Assistive-technology feedback

The app already used native buttons/dialogs and polite ARIA live regions. Phase 16 adds:

- dynamic lane descriptions containing current key + shape;
- `aria-keyshortcuts` for the four live gameplay pads;
- an optional **Screen-reader gameplay summaries** mode;
- section-change announcements;
- miss / stray-tap announcements;
- major combo-milestone announcements;
- existing pause, resume, session-start and result announcements remain intact;
- no per-note narration, to avoid flooding assistive output.

## Keyboard navigation & focus

- Existing visible focus rings remain active.
- The existing skip-to-content link is retained and certified.
- Native modal dialogs continue to constrain keyboard focus while open.
- Phase 16 adds dialog-origin focus restoration after closing a top-level dialog.
- All visible buttons in the tested flows have accessible names.

## Mobile and target sizing

Validated at:

- **1440 × 900**
- **390 × 844**
- **320 × 760**

With Larger controls enabled:

- lane pads are **64 px** high;
- mobile layouts retain **0 horizontal overflow**;
- control presets and accessibility settings remain usable at 320 px.

## Runtime certification

Chromium runtime checks passed with:

- **20 / 20 `BeatRelease.audit()` checks**;
- left-hand preset updates all live key labels and ARIA shortcuts;
- large-control mode produces 64 px lane pads;
- high-contrast / reduced-effects classes apply correctly;
- settings opened with keyboard and restored focus correctly on close;
- no unnamed visible buttons in the tested flow;
- live screen-reader miss announcement verified during actual gameplay;
- **0 page errors**;
- **0 console errors/warnings**;
- **0 horizontal overflow** at 390 px and 320 px.

## Previous certification preserved

Phase 16 leaves earlier release work intact:

- 54 / 54 Core charts valid and calibrated;
- exact music-landmark integration preserved;
- progression integrity preserved;
- Phase 15 adaptive performance, device diagnostics and latency hardening preserved;
- catalog remains Core 18 + 10 CC0.

## Remaining physical accessibility checks

Automated browser tests cannot replace real-device checks for:

- switch/adaptive keyboard hardware;
- external keyboards on phones/tablets;
- iOS VoiceOver;
- Android TalkBack;
- Windows Narrator / NVDA / JAWS behavior;
- real touch ergonomics across different hand sizes;
- vibration behavior on supported Android devices.

Those belong in final multi-device acceptance, not in the deterministic browser gate.