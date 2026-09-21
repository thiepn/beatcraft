# BeatCraft 3 — Phase 13 First-Run Experience & Game UX Polish

**Build:** `3.0.0-rc4`  
**Catalog:** Core 18 + 10 CC0  
**Focus:** onboarding, first-session clarity, mode/tool separation, mobile-first play flow

## Outcome

Phase 13 turns BeatCraft's first launch into a deliberate game flow instead of dropping a new player into the full production interface.

## First-run flow

Fresh players now receive a one-time first-run guide with:

- interactive D / F / J / K lane practice (including remapped keys and touch);
- concise Tap / Chord / Hold explanations;
- clear Arcade vs Practice behavior;
- an explicit first-song recommendation: **First Pulse · Chill**;
- direct choices between the 30-second guided lesson and the first full track.

Completing the guided lesson changes the main results CTA to **Play First Pulse · Chill**, launching Track 1 on Chill, Arcade, 1.0×, full track, no mirror.

Until the player's first real clear, the Play screen also shows a compact first-run card. It disappears after the first Arcade clear.

## Navigation and information architecture

Main navigation is now:

- Play
- Collection
- Official Pack
- Beatmap Studio

Mobile shortens the creator surfaces to **Pack** and **Studio**.

Official Pack is explicitly labeled as a **creator workflow, not a play mode**. Beatmap Studio is explicitly labeled as a **creator tool**. The selected-song action now says **Beatmap Studio ↗** instead of “Open in mapper”.

## Modes

**Arcade:** ranked; scores, stars and personal bests save; the groove meter can end the run.

**Practice:** unranked; speed, section and loop tools are available; records never change.

## Settings

Added a **Getting started** section with:

- Open first-run guide
- Guided lesson

The onboarding can be replayed without resetting progress.

## Runtime verification

Tested at 1440×900, 390×844 and 320×760:

- onboarding opens on a fresh profile;
- 4/4 lane recognition works;
- guided lesson starts;
- tutorial result → First Pulse · Chill handoff works;
- first real clear hides the beginner card;
- Practice copy updates correctly;
- Settings can reopen onboarding;
- creator-surface explanations render correctly;
- 0 page errors;
- 0 console errors/warnings;
- 0 horizontal overflow.

## Release regression

`BeatRelease.audit()` remains green after the UX changes:

- **17 / 17 automated release checks pass**;
- all Core chart/music certification from previous phases remains intact;
- Phase 12 chart calibration remains intact.

## Remaining human gates

Phase 13 does not change the existing human release requirements:

- Phase 11 Core full-song listening QA;
- Phase 12 Core 54-chart physical playtest QA;
- Official Pack human audio/map certification.
