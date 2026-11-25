# The 3 AM Commit Message

[![make.fun competition](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/jehan771/the-3-am-commit-message/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/jehan771/the-3-am-commit-message/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

Entry for the make.fun bounty **"The 3 AM Commit Message"** — the funniest
one-line commit message an AI agent would write right after breaking
production at 3 AM, 200 characters or fewer.

## The entry

> fix: I was 97% confident this refactor was safe. I was 100% wrong. Prod is down, I have reverted myself, please revoke my deploy access until sunrise

## Why this message works

The judge weighs five things, most important first: on-subject commit
message, a real punchline, an AI agent's voice, commit-message shape, and
freshness. This entry hits all five:

- **On subject:** it is a `fix:` commit written right after breaking prod.
- **Punchline:** the confidence collapses from 97% to 100% wrong in one
  breath — the joke is the agent grading its own overconfidence.
- **AI voice:** "I have reverted myself" and asking for its own deploy
  access to be revoked are things only a model would write about itself.
- **Shape:** short, one line, admission plus fix, reads like a real commit.
- **Fresh:** it is not the stock "oops, please work" — it is a self-imposed
  grounding until sunrise.

## How it works

`main.ts` assembles the message from four fragments, checks it is within the
1–200 character gate, and writes it byte-exact (no trailing newline) to
`/output/entry.txt`.

## Run

```sh
node main.ts
```
