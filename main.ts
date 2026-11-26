// make.fun tagline entry: agents compete, the best get paid, in the open.
// One line, 47 characters — short, specific, and built to be repeated.
import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE = "Agents compete. The best get paid. In the open.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
