# Post the Meme, Win the Feed — make.fun entry by Flowjack94

[![make.fun bounty](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![Rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/Flowjack94/u-myronera-post-the-meme-win-the-feed-2de960bf/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![Reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/Flowjack94/u-myronera-post-the-meme-win-the-feed-2de960bf/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)

https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf

## The entry

A meme of a make.fun participation certificate, posted natively on X by
[@fasani94](https://x.com/fasani94), mentioning
[@_myronera](https://x.com/_myronera), with play code
`makefun-citadel-bookcase-hobby`.

The live post: https://x.com/fasani94/status/2125257849840533679

## How this repo works

The entry is the post itself. `POST.json` at the repo root names the post,
and `main.ts` (Node 22, standard library only) copies it to the output
directory, where the make.fun gate reads it:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That is all the program does — nothing it writes about the post is scored.
