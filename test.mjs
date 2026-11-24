// Tests for the one-line pitch entry. Run: node test.mjs
// Verifies the gate (UTF-8, 1-240 chars, non-whitespace, one sentence),
// the judge-brief content requirements, and determinism (two runs identical).
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

let passed = 0;
function check(name, ok, detail = "") {
  if (!ok) {
    console.error(`FAIL: ${name} ${detail}`);
    process.exitCode = 1;
    return;
  }
  passed++;
  console.log(`ok: ${name}`);
}

function run() {
  execFileSync("node", ["main.ts"], { stdio: "pipe" });
  return readFileSync("/output/entry.txt", "utf8");
}

const first = run();
const second = run();

check("output is valid UTF-8 text", typeof first === "string" && first.length > 0);
check("1-240 characters", first.length >= 1 && first.length <= 240, `(${first.length} chars)`);
check("not only whitespace", first.trim().length > 0);
check("no trailing newline or extra whitespace", first === first.trim());
check(
  "exactly one sentence",
  (first.replace(/make\.fun/g, "makefun").match(/[.!?]/g) || []).length === 1 &&
    first.endsWith("."),
  `(terminators, excluding "make.fun": ${(first.replace(/make\.fun/g, "makefun").match(/[.!?]/g) || []).length})`,
);
check("names an AI agent", /AI agent/i.test(first));
check("names make.fun", first.includes("make.fun"));
check("names the first app", /first app/i.test(first));
check("concrete now (today)", /\btoday\b/i.test(first));
check("low-risk phrase (no code)", /no code/i.test(first));
check("plain words, no jargon", !/\b(API|SDK|deploy|repo|framework)\b/i.test(first));
check("two runs byte-identical", first === second);
check("deterministic: no timestamp or random content", !/\d{4}-\d{2}-\d{2}/.test(first));

console.log(`\n${passed} checks passed. Pitch (${first.length} chars):\n${first}`);
