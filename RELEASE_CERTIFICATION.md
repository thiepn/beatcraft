# BeatCraft 3 — Phase 10 Final Music & Game Release Certification

**Build:** `3.0.0-rc1`  
**Catalog:** `core-18-v1`  
**Artifact:** `BeatCraft-3-Phase10-Release-Candidate.html`  
**SHA-256:** `cc3494d9b899ce2aa11b2a166c0d1ee30a6b175ffb82c57588f74a07f374cd31`

## Certification outcome

**Core 18 automated release-candidate certification: PASS.**

**Full 28-track human release certification: NOT YET COMPLETE.**

This distinction is intentional. Automated tests can establish deterministic correctness, chart integrity, runtime behavior, responsive layout, synthesis graph health, and internal consistency. They cannot honestly establish whether every song mix is pleasant after a complete listen or substitute for the Official Pack's required real-audio audition, human review, and performance playtest.

## Release-blocking defects fixed in Phase 10

1. **Curated “Next track” navigation bug — fixed.**  
   Phase 8 retired six original track IDs, but the results-screen Next action still assumed IDs were contiguous. `Glass Garden (14)` could therefore route through retired IDs instead of the next playable song. Navigation now follows the actual curated `TRACKS` array. Verified transition: `14 → 18`; final CC0 `34 → 1` wraps correctly.

2. **Stale BeatCraft 2 backup branding — fixed.**  
   Import errors and exported backup metadata now identify the product as BeatCraft 3. The internal save schema remains version 2 so existing compatible progress is not unnecessarily broken.

3. **Stale catalog counts — fixed.**  
   Pre-JavaScript markup now correctly reports **28 tracks / 84 chart slots** instead of the pre-curation 34 / 102 values.

4. **Duplicate Phase 6 core function — removed.**  
   A duplicated `musicIntegrationMetrics()` implementation was removed. The build now contains no duplicated named function declarations.

5. **Release-facing production labels — cleaned up.**  
   User-facing Official Pack and mapper headings no longer present the production tools as the current “Phase 9” product release. Internal Phase 9 evidence metadata remains intact for compatibility/audit provenance.

## Frozen release catalog

- **18 curated synthesized Core tracks**
- **10 verified-CC0 catalog tracks**
- **28 playable tracks total**
- **84 difficulty slots total**
- **6 retired originals preserved outside the playable roster**
- Curation manifest remains frozen: `core-18-v1`

## Automated certification — 16 / 16 PASS

The build exposes `BeatRelease.audit()` and passes every automated release check:

1. Catalog counts correct
2. Track IDs unique
3. Core 18 curation frozen
4. Retired tracks absent from playable roster
5. All 28 embedded seed maps valid
6. Exactly 54 generated Core charts
7. All 54 Core charts pass their difficulty constraints
8. All generated Core charts align exactly with actual music landmarks
9. `Chill ⊂ Flow ⊂ Rush` landmark coverage preserved for all 18 Core songs
10. 54/54 perfect-session simulations complete with All Perfect and 1,000,000 score
11. 18/18 unique song identities; no identity collisions
12. 18/18 unique melodic-hook identities; no melodic collisions
13. 18/18 unique songwriting identities
14. 18/18 unique production identities
15. 18/18 unique groove identities
16. Game-feel paths present and reduced-motion safe

## Beatmap and mapper certification

### Embedded maps

- **28 / 28 seed maps validate**
- **84 / 84 chart difficulties survive serialize → parse → validate → chart reconstruction**
- No chart-count mismatches were found
- Malformed-map validation correctly rejects unsupported versions and invalid notes

### Core generated charts

- **54 / 54 valid**
- **0 difficulty issues**
- **100% music-landmark match rate** on all 54 charts
- Difficulty nesting preserved on every Core track
- All Perfect simulation succeeds on every Core difficulty

### Mapper UI

Runtime-tested:

- mapper opens a Core song correctly
- note count and validation render correctly
- quantize works
- undo works
- redo works
- synth mapper playback starts and stops
- external Official Pack track opens without crashing
- recording-identity gate remains visible and enforced

## Audio-engine certification

A real Chromium `AudioContext` successfully executed:

- Perfect SFX
- Great SFX
- Good SFX
- hold-tail cue
- Miss cue
- stray-tap cue
- combo milestone cue
- GO/count-in release cue
- completion stinger
- synthesized song transport start
- pause
- resume
- stop

No runtime errors were produced by these paths.

## Gameplay/session certification

### Judgment engine

All **54 Core charts** were programmatically played note-for-note through the actual `Session` class, including hold heads and tails.

Result:

- **54 / 54 completed**
- **54 / 54 All Perfect**
- **54 / 54 score = 1,000,000**
- no ghost taps
- no unresolved scoring units

A complete no-input no-fail run also resolves all chart units as misses, verifying the miss-processing path.

### UI flow

Chromium interaction test passed:

`Library → choose Glass Garden → Practice → Play → Pause → Finish Practice → Results → Next`

The critical curated transition correctly produced:

`Glass Garden (internal ID 14) → Rainy Arcade (internal ID 18)`

Persistence logic recorded track selection and settings correctly against an API-compatible localStorage mock.

## Responsive / accessibility certification

Checked layouts:

| Viewport | Library overflow | Game overflow | Playfield |
|---|---:|---:|---:|
| 320 × 720 | none | none | 296 px |
| 390 × 844 | none | none | 366 px in live test |
| 768 × 1024 | none | none | 494 px |
| 1024 × 768 | none | — | — |
| 1440 × 900 | none | — | — |

Reduced-motion setting was toggled through the real UI and persisted. The body entered reduced-motion mode while gameplay remained functional.

## Save / input validation

Verified:

- progress round-trip through the current schema
- retired selected IDs normalize safely to an active track
- volume/music/SFX values are clamped
- speed and input offset are clamped
- malformed/duplicate key bindings are rejected
- reserved Space/Escape are rejected as lane bindings
- compatible BeatCraft 3 backup errors use current product naming

**Compatibility note:** save schema intentionally remains `version: 2`; Phase 10 does not force a destructive migration merely to match the product major version.

## Performance sanity check

In the certification Chromium environment:

- generation of all **54 Core charts / 5,592 gameplay notes:** ~132 ms
- full `BeatRelease.audit()` including chart generation and 54 complete session simulations: ~223 ms

These are environment-specific sanity measurements, not device performance guarantees.

## Remaining human-only release gates

### A. Synthesized Core music — listening approval required

The Phase 7 audit still intentionally marks **18 / 18 Core tracks as requiring listening**. Automated structure checks cannot determine subjective production quality.

Final listening must confirm, at minimum:

- hook memorability
- mix balance
- fatigue over a whole song
- kick/bass separation
- high-frequency harshness
- reverb masking
- transition quality
- whether related genre tracks remain immediately distinguishable

This does **not** indicate 18 detected failures; it means 18 subjective decisions cannot be truthfully automated.

### B. CC0 Official Pack — human chart certification required

Current embedded Official Pack state:

- Tracks: **10**
- Chart slots: **30**
- Maps present: **30 / 30**
- Accepted exact recordings: **0 / 10**
- Timing confirmed: **0 / 10**
- Real-audio auditioned charts: **0 / 30**
- Human-reviewed charts: **0 / 30**
- Fully verified chart slots: **0 / 30**

This is expected from the current evidence bundle and is correctly reported by the app. Phase 10 does not bypass these gates.

Each CC0 slot still requires the existing workflow:

`accepted recording → waveform analysis → audio-informed chart → timing confirmation → real-audio audition → human review → clean current-revision playtest → verification`

### C. Environment limitations of this certification

- Chromium was available and tested extensively.
- Firefox and Safari/WebKit executables were not available in this runtime, so this report does **not** claim native cross-browser execution certification for them.
- The environment blocks local HTTP/file navigation in headless Chromium. The complete application was therefore injected directly into Chromium for runtime testing.
- Because that produces an opaque origin, real browser `localStorage` is blocked by the harness. Persistence code was executed with an API-compatible localStorage mock instead.
- Remote/R2 delivery of the CC0 audio objects could not be certified from this environment; the app's human/recording gates remain authoritative.

## Release decision

### Approved now

**BeatCraft 3 Core 18 — Release Candidate 1** is technically certified by the automated Phase 10 suite.

### Not approved yet

Do **not** describe the complete 28-track build as fully human-certified or final-release-certified until:

1. the 18 Core tracks receive a final real listening pass; and
2. the 30 CC0 Official Pack chart slots complete their recording-bound human certification workflow; and
3. a final smoke test is run in the actual deployment environment, ideally including Firefox and Safari/WebKit in addition to Chromium.

Phase 10 has therefore produced an honest **RC1**, not a fabricated “100% final” status.