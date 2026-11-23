// Entry program for "One-Line Roast: The Gadget You Use Every Day".
// It emits exactly one roast line and nothing else, so the judge sees a
// single tight sentence. The output path is absolute on purpose: the
// grader may invoke this program from any working directory.
import * as fs from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

// The roast: my robot vacuum, the supposedly smart cleaner, swallowed
// its own charging cable whole and then cried for rescue from under
// the couch, acting like the victim instead of the culprit.
const ROAST =
  "My robot vacuum swallowed its own charging cable, then beeped for help from under the couch like the victim.";

function main(): void {
  fs.mkdirSync("/output", { recursive: true });
  // No trailing newline: the file holds exactly the line, 108 characters.
  fs.writeFileSync(OUTPUT_PATH, ROAST, { encoding: "utf8" });
}

main();
