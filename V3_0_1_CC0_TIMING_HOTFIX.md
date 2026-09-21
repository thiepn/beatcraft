# BeatCraft 3 — v3.0.1 CC0 Timing Hotfix

## Problem

The ten Official Pack CC0 songs could play with charts whose timestamps came from the original catalog-BPM auto-draft instead of the decoded recording.

The later audio-informed pass only moved an existing note by roughly 72–125 ms toward a detected attack. That was insufficient when the seed grid had the wrong phase or BPM. A note hundreds of milliseconds away from the real beat remained wrong, so playing by ear could produce repeated misses.

## Root cause

The broken path was:

`catalog BPM → zero-offset generated draft → small local timestamp correction → gameplay`

The real recording was not authoritative enough.

## v3.0.1 behavior

For Official Pack CC0 tracks, gameplay now uses:

`decoded recording → transient/onset analysis → tempo + phase estimate → beat-compatible onset filtering → nested chart generation → gameplay`

Before a CC0 run starts, BeatCraft:

1. loads and decodes the actual recording;
2. checks whether the selected chart is already locked to that exact decoded recording;
3. preserves explicitly human-authored / verified chart timing;
4. otherwise analyzes the recording;
5. discards stale auto-draft timestamps;
6. generates Rush directly from detected attacks close to the rhythmic subdivision grid;
7. derives Flow as a subset of Rush;
8. derives Chill as a subset of Flow;
9. reuses the same lane for the same musical event across difficulties;
10. stores the repaired map locally for subsequent runs.

All generated note timestamps remain timestamps of detected attacks from the actual decoded recording. The tempo grid is used to decide **which** detected attacks are musically beat-compatible, not to invent arbitrary note times.

## Additional timing corrections

- analysis and playback now use the same source-start offset;
- authored chart count-ins use the map's detected BPM rather than the catalog BPM;
- Phase 9 objective generation uses the same recording-locked algorithm;
- stale audition/review/playtest evidence is invalidated when the map is rebuilt;
- human-authored or verified charts are not silently overwritten.

## Human-certification boundary

Runtime repair does **not** certify the chart.

Repaired charts are marked:

- authorship: assisted;
- mapping basis: `recording-onsets`;
- timing confirmation: false;
- human audition/review/playtest: still required.

## Automated regression gate

The deterministic release audit now contains **23 checks**.

The new `cc0-recording-locked-mapping` check verifies with synthetic recording attacks that:

- every generated Rush timestamp comes from a detected attack;
- Flow timestamps are a subset of Rush;
- Chill timestamps are a subset of Flow;
- no difficulty is produced from arbitrary catalog-grid timestamps.

**Result: 23 / 23 PASS.**
