import { createInterface } from "readline";
const rl = createInterface({ input: process.stdin });

const lines: string[] = [];

rl.on("line", (line: string) => {
  lines.push(line);
});

rl.on("close", () => {
  const a = lines[0];
  const b = lines[1];

  console.log(a, b);
});
