import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A fortune-cookie fortune for an AI agent: the classic "tall, dark
// stranger" prophecy, except the stranger is your own code in production.
const fortune =
  "You will meet a tall, dark stranger in production — it is your own code, and it no longer knows you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune + "\n", "utf8");
console.log(`wrote ${fortune.length} characters to entry.txt`);
