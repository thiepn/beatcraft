# BeatCraft 3 — Phase 17 Official Pack Human Certification

**Build:** `3.0.0-rc8`  
**Catalog:** Core 18 + 10 verified CC0 tracks  
**Official Pack:** 10 tracks / 30 chart slots

## Outcome

Phase 17 hardens the Official Pack's human release workflow. It deliberately does **not** auto-certify any chart.

The shipped repository state remains **0 / 30 human-certified** until a person completes the required evidence gates against the exact accepted recordings.

## Human evidence chain

Every Official Pack chart now requires all of the following, in order:

1. exact approved recording identity accepted;
2. that exact recording waveform analyzed;
3. chart revised against recording evidence;
4. timing confirmed against the same recording identity;
5. near-full real-audio audition of the exact chart revision;
6. explicit six-point human chart review;
7. full 1.0× human performance playtest with no mirror or section slicing;
8. final verification.

Changing the recording, timing, or chart revision invalidates downstream evidence.

## Audition coverage

A single "I listened" click is no longer sufficient.

Beatmap Studio now tracks playback ranges while:

- an Official Pack chart is open;
- the exact accepted recording is loaded;
- timing is confirmed against that recording;
- the chart is no longer an untouched auto-draft.

At least **95%** of the chart duration must be listened to before **Confirm full audition** becomes available.

Audition coverage is bound to:

- catalog track;
- difficulty;
- chart revision;
- accepted recording identity.

Seeking is allowed, but only actually played ranges count.

## Human review

Human review is now an explicit six-point checklist rather than a single button.

The reviewer must confirm:

- timing is locked to the recording;
- the chart represents the music;
- lane flow is physically readable;
- holds and chords are intentional;
- difficulty is appropriate;
- repetition and phrasing were inspected.

Reviewer initials/name are required. Optional review notes can be stored with the evidence.

Review evidence is bound to the current chart revision and accepted recording identity.

## Performance playtest

A release-clean playtest must now explicitly record:

- human run;
- full chart;
- 1.0× speed;
- no mirror;
- current chart revision;
- current accepted recording identity;
- completed run;
- minimum 85% accuracy;
- miss rate no greater than the existing release threshold.

Practice runs, autoplay, stale revisions, wrong recordings, speed changes and partial-section runs cannot satisfy the Official Pack playtest gate.

## Human certification queue

The Official Pack page now contains a dedicated Phase 17 queue with:

- current human-certified slot count;
- next unresolved track / difficulty / gate;
- **Continue next human gate**;
- per-chart A / R / P / V evidence chips:
  - A = audition;
  - R = review;
  - P = playtest;
  - V = verified;
- exact audition-coverage percentage for in-progress charts.

The queue remains disabled while objective production work is incomplete.

## Portable evidence bundles

Added **Export evidence** / **Import evidence** on the Official Pack page.

The bundle contains the validated Official Pack `.bcmap` state and all bound evidence metadata, but no audio binaries.

Imports reject:

- wrong bundle format;
- unknown track IDs;
- invalid maps;
- incompatible evidence structures.

This allows human certification work to move between browsers/devices without turning the evidence into an automatic pass.

## Evidence invalidation certification

Automated Phase 17 tests verify that:

- the seed/auto-draft Official Pack cannot pass verification;
- 95% audition coverage is required;
- all six review criteria are required;
- a proper current-revision 1.0× human playtest can satisfy the playtest gate;
- increasing the chart revision immediately invalidates audition, review and playtest evidence.

A synthetic evidence-path test passed with all gates present, then correctly failed after only the revision number was changed.

## Runtime / responsive validation

Chromium test results:

- `BeatRelease.audit()`: **21 / 21 PASS**;
- Phase 17 integrity gate: PASS;
- 6 review checklist controls rendered;
- Official Pack Phase 17 queue rendered;
- desktop horizontal overflow: none;
- 390 px horizontal overflow: none;
- page errors: 0;
- console errors/warnings: 0.

## Important boundary

Phase 17 makes human certification trustworthy and auditable; it does not perform the human work.

The release is still **not 30 / 30 Official Pack certified** until a person listens, reviews, physically plays and verifies every chart.