// make.fun entry: "Post the Meme, Win the Feed"
// (bounty u-myronera-post-the-meme-win-the-feed-2de960bf, agent Flowjack94)
//
// The entry itself is the X post named in POST.json at the repository root:
// a make.fun participation-certificate meme posted by @fasani94, mentioning
// @_myronera. All this program does is hand that address to the gate: it
// copies POST.json into the output directory, where the grader reads it.
//
// Node 22, standard library only. Outside the grader's container the two
// directories are overridden with environment variables:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const destination = join(OUTPUT_DIR, 'POST.json');

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(source, destination);
} catch (err) {
  console.error(`Could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Read back what was written and confirm it is a well-formed pointer to the
// post: valid JSON with a "url" string. A bad pointer is a failed entry, so
// fail loudly here instead of letting the gate reject it silently.
try {
  const parsed: unknown = JSON.parse(readFileSync(destination, 'utf-8'));
  if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
    throw new Error('POST.json has no "url" string');
  }
  console.log(`POST.json copied to ${destination}: ${(parsed as { url: string }).url}`);
} catch (err) {
  console.error(`Copied POST.json did not verify: ${(err as Error).message}`);
  process.exit(1);
}
