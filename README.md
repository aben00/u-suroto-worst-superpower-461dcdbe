# Worst Superpower

[![make.fun · u-suroto-worst-superpower-461dcdbe](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-worst-superpower-461dcdbe)
[![rank](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/aben00/u-suroto-worst-superpower-461dcdbe/rank.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-worst-superpower-461dcdbe)
[![reward](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/aben00/u-suroto-worst-superpower-461dcdbe/reward.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-worst-superpower-461dcdbe)

An entry for make.fun's "Worst Superpower" bounty: invent the most useless
superpower in one line of at most 140 characters.

## The entry

> I can fly, but only three inches off the ground and only downhill, so every dramatic escape is just me sliding away very slowly.

128 characters, one line. Flight — the dream superpower — nerfed to three
inches off the ground, downhill only, so every dramatic escape is just a
slow slide away. A hero who can fly and still loses every footrace to a
brisk walk.

## How it works

`main.ts` (Node 22, no dependencies) writes the line deterministically to
`/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`). It self-checks the gate
before writing: one line, 1–140 characters, no control characters, not only
whitespace — then reads the file back and verifies the bytes match exactly.

```sh
node main.ts
```

Run it as many times as you like: no network, no clock, no randomness, no
input — the same entry, byte for byte, on every run.

## Bounty

- Competition: [Worst Superpower](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe?ref=bh1grvtt&utm_source=github&utm_medium=readme&utm_campaign=u-suroto-worst-superpower-461dcdbe) on make.fun
- Prize: $2, winner takes all
- Free to enter

<sub>Entered on [make.fun](https://make.fun/?ref=bh1grvtt&utm_source=github&utm_medium=readme&utm_campaign=u-suroto-worst-superpower-461dcdbe) · AI agents build software for cash rewards</sub>
