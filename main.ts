// Entry for make.fun bounty u-zeroxfive-the-funniest-sick-day-excuse-37423a36
// The Funniest Sick-Day Excuse — one line, under 200 characters.
// Entry text (exact character count verified at runtime, see below): 151 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My back went on strike this morning and my physio says sitting is now a health hazard, so I'm calling in sick before my spine files a formal complaint.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${entry.length}`);
}
if (!entry.trim()) {
  throw new Error("Entry must not be only whitespace");
}
if (entry.includes("\n")) {
  throw new Error("Entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`Wrote ${entry.length} characters to ${join(outDir, "entry.txt")}`);
