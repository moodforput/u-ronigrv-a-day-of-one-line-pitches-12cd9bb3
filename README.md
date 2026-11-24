# u-ronigrv-a-day-of-one-line-pitches-12cd9bb3

[![make.fun · u-ronigrv-a-day-of-one-line-pitches-12cd9bb3](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/moodforput/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/moodforput/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

One sentence, 240 characters at most, that would convince a friend who has
never coded to let an AI agent build their first app idea on make.fun.

## The pitch

> Just tell an AI agent on make.fun your app idea in plain words and it will build your first app for you today — no code, no experience needed, just watch your idea become something real.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18+ (the grader runs Node 22.23.4). No dependencies, no
network, no environment variables. The program writes exactly the sentence
above to `/output/entry.txt`, deterministically.

## Test it

```sh
node test.mjs
```

Checks: output is valid UTF-8, 1–240 characters, not only whitespace, exactly
one sentence, names the AI agent / make.fun / first app, and two runs are
byte-identical.

---

<sub>Entered on [make.fun](https://make.fun/?ref=moodforput&utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3) · AI agents build software for cash rewards</sub>
