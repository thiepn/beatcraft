# BeatCraft 3 — Phase 14 Progression & Replayability

**Build:** `3.0.0-rc5`  
**Catalog:** Core 18 + 10 CC0  
**Principle:** progression without grind, currencies, lockouts, or energy systems

## Outcome

Phase 14 adds long-term replay structure while keeping every song available from the start.

## Cosmetic player levels

Arcade XP now drives a 1–99 cosmetic profile level with named tiers such as New Listener, Beat Finder, Pocket Keeper, Groove Maker, Rhythm Rider, Tempo Pilot, Beat Architect, and Master Listener.

Levels never unlock tracks, charts, modes, or power. Existing XP migrates directly from previous saves.

## Chart mastery

Every Core chart has a six-step mastery state:

0. Unplayed
1. Clear
2. Groove — 85%+
3. S Rank — 97%+
4. Full Combo
5. All Perfect

The Collection shows Chill / Flow / Rush mastery separately for all 18 Core songs. Total Core mastery is 270 points (18 × 3 × 5).

## Daily Challenge

The existing deterministic daily challenge is now integrated into progression display:

- same challenge for a given calendar date;
- best daily score retained;
- current and best daily streak shown;
- streaks are informational only;
- no missed-day punishment, rewards economy, or forced login behavior.

## Performance pulse

Collection now reports:

- average best accuracy across cleared chart slots;
- strongest difficulty by best-record average;
- recent timing bias from measured Arcade runs;
- recent personal-best count.

New history records retain timing mean/spread and whether the run was a PB. Older history migrates safely without requiring those fields.

## Expanded milestones

The milestone set expands to 17 achievements covering:

- first clear;
- 10 / 25 cleared chart slots;
- 25 / 100 combo;
- first / five Full Combos;
- first / ten S ranks;
- All Perfect;
- clearing all three difficulties on one Core song;
- Rush completion;
- all 18 Core songs cleared;
- 30 Core mastery points;
- first Daily Challenge;
- 3-day and 7-day Daily streaks.

The legacy `tour` achievement ID is retained for save compatibility.

## Ranked vs unranked integrity

Practice, autoplay/demo, and the tutorial continue to grant:

- **0 XP**
- **0 mastery records**
- **0 Daily progress**
- **0 ranked achievements**

Only Arcade updates progression.

## Results feedback

Arcade results can now report:

- XP gained and current level;
- level-up events;
- mastery increases;
- Daily streak updates;
- newly earned milestones.

## Collection UX

Collection now includes:

- player-level card and XP progress bar;
- Today's Pressing card;
- four headline progression metrics;
- Performance Pulse;
- full 18-song Core mastery grid;
- expanded achievements;
- PB-marked recent sessions.

Selecting a song from the mastery grid returns directly to that song on the Play screen.

## Automated certification

`BeatRelease.audit()` now reports **18 / 18 passing checks**, including a Phase 14 progression check.

Validated:

- release manifest: `3.0.0-rc5`, Phase 14;
- 28 playable tracks remain available at all XP levels;
- old-save XP and records migrate correctly;
- mastery thresholds are monotonic;
- Practice cannot mutate XP or records;
- deterministic Daily Challenge behavior;
- Daily streak calculation across calendar dates;
- 18 Core mastery rows render;
- 17 achievements render;
- no page errors or console warnings in the test flow;
- no horizontal overflow at desktop or 390 px mobile width;
- every previous music/chart/release gate remains green.

## Remaining human release gates

Phase 14 does not replace:

- Phase 11 Core song listening QA;
- Phase 12 physical 54-chart playtest QA;
- Official Pack human audio/map certification.