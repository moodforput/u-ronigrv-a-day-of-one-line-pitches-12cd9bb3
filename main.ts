// A Day of One-Line Pitches — entry program.
//
// Writes one sentence to /output/entry.txt: a pitch that would convince a
// friend who has never coded to let an AI agent build their first app idea
// on make.fun. Pure Node stdlib, no network, no environment, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

export const PITCH =
  "Just tell an AI agent on make.fun your app idea in plain words and it will build your first app for you today \u2014 no code, no experience needed, just watch your idea become something real.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
