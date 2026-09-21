# BeatCraft 3 — Phase 19 Local / Popular Song Packs

**Release:** `3.1.0`  
**Feature:** My Music — private user-supplied songs  
**Hosted commercial audio:** none

## Goal

Let BeatCraft play real songs the user already has without putting copyrighted commercial recordings in the repository or sending them to a BeatCraft server.

The audio remains local to the browser.

## Import flow

Library → **Add local song** → choose a browser-supported audio file.

BeatCraft then performs the following locally:

1. creates a reserved local track ID (`1000+`);
2. stores the original audio Blob in IndexedDB;
3. fingerprints and decodes the file;
4. estimates tempo and beat phase;
5. detects musical attacks/transients;
6. generates recording-locked Rush notes from beat-compatible detected attacks;
7. derives Flow as a subset of Rush;
8. derives Chill as a subset of Flow;
9. stores the generated beatmap in localStorage;
10. stores only sanitized song metadata in `beatcraft.local-tracks.v1`.

No upload is performed.

## Library behavior

Imported songs:

- appear in the normal record crate;
- carry a **LOCAL** chip;
- are searchable by title / artist / genre;
- show detected BPM and actual recording duration;
- support Arcade and Practice;
- support Preview;
- open in Beatmap Studio;
- can have their local audio replaced;
- can be removed completely from the browser.

Filename parsing recognizes common `Artist - Title.ext` naming.

## Persistence

### IndexedDB

The audio Blob uses the existing `beatcraft.audio.v1` IndexedDB database keyed by track ID.

### localStorage

Local song metadata is stored separately in:

`beatcraft.local-tracks.v1`

Beatmaps continue to use:

`beatcraft.maps.v1`

This order is important: local metadata is restored before beatmaps are validated so local maps survive browser reloads.

## Recording identity and repair

Local tracks use the same recording-lock principle as the v3.0.1 CC0 hotfix.

If a local song's audio is replaced or its map becomes stale:

- BeatCraft compares the decoded recording identity;
- stale non-human maps are rebuilt from the current recording;
- explicitly human-authored timing is preserved only when bound to the same recording identity.

## Beatmap Studio

Local songs do not use the CC0 approved-recording gate.

Beatmap Studio instead treats the browser-stored file as the user's local recording and allows:

- waveform loading;
- onset analysis;
- tempo / phase analysis;
- timing editing;
- normal manual chart editing.

The Official Pack certification rules remain isolated to the CC0 Official Pack.

## Backup behavior

The normal BeatCraft backup now includes:

- progress;
- settings;
- authored maps;
- local-song metadata.

It intentionally does **not** include local audio files.

After importing a backup on another browser/device, local song entries and maps can be restored, but their audio files must be reattached locally.

## Removal

Removing a local song deletes:

- its IndexedDB audio Blob;
- local beatmaps;
- local metadata;
- chart records;
- recent-history references.

The original file on the user's device is never modified.

## Release certification

The deterministic release audit now contains **24 checks**.

The new `phase19-local-music` check verifies that:

- dynamic local-track registration exists;
- local tracks can be removed cleanly;
- the reserved ID range starts at 1000;
- the IndexedDB audio persistence primitives are present.

**Result: 24 / 24 PASS.**
