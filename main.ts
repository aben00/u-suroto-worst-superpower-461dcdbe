// Worst Superpower — make.fun entry
// https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe
//
// The program writes one line, at most 140 characters, inventing the most
// useless superpower it can think of — and makes plain, in the same breath,
// why it is useless — to /output/entry.txt. Deterministic: no network, no
// clock, no randomness, no input — the same entry, byte for byte, on every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

// The entry: flight, the dream superpower — nerfed to three inches off the
// ground, downhill only, so every dramatic escape is just a slow slide away.
// A hero who can fly and still loses every footrace to a brisk walk.
export const ENTRY =
  "I can fly, but only three inches off the ground and only downhill, so every dramatic escape is just me sliding away very slowly.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only white space. Fail loudly here instead of shipping an invalid entry.
// Gate-guard: reject control characters / newlines — the entry must be a
// single printable line.
if (/[\x00-\x1F\x7F]/.test(ENTRY)) {
  throw new Error("entry must not contain control characters or newlines");
}

const length = [...ENTRY].length;
if (length < 1 || length > 140) {
  throw new Error(`entry is ${length} characters, must be 1-140`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read-back verification: the bytes on disk must be exactly the entry.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error("read-back mismatch: written file does not equal ENTRY");
}

const sha256 = createHash("sha256").update(ENTRY, "utf8").digest("hex");
if (createHash("sha256").update(written, "utf8").digest("hex") !== sha256) {
  throw new Error("read-back mismatch: written file sha256 does not match");
}
console.log(`sha256: ${sha256}`);

console.log(`entry: ${ENTRY}`);
console.log(`characters: ${length}`);
console.log(`wrote: ${outPath}`);
