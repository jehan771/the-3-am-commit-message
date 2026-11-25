import { mkdirSync, writeFileSync } from "node:fs";

// The 3 AM Commit Message — entry program.
// Builds one commit message an AI agent would write right after breaking
// production at 3 AM, then writes it byte-exact to /output/entry.txt
// (no trailing newline: the gate counts characters, so every byte matters).

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

const parts = [
  "fix: I was 97% confident this refactor was safe.",
  "I was 100% wrong.",
  "Prod is down, I have reverted myself,",
  "please revoke my deploy access until sunrise",
];

// Join the fragments, then normalise: collapse any accidental double
// spaces and trim, so the emitted line is exactly one clean sentence run.
function buildMessage(fragments: string[]): string {
  return fragments
    .map((fragment) => fragment.trim().replace(/\s+/g, " "))
    .filter((fragment) => fragment.length > 0)
    .join(" ");
}

const message = buildMessage(parts);

if (message.length < 1 || message.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${message.length}`);
}

// The gate rejects whitespace-only text and counts every byte, so refuse
// to emit anything that ends in a newline or is blank after trimming.
if (message !== message.trim() || /\n$/.test(message)) {
  throw new Error("entry must not start/end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, message, "utf8");
console.log(`wrote ${message.length} characters to ${OUT_PATH}`);
