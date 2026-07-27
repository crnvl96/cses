import { createInterface } from "readline";
const rl = createInterface({ input: process.stdin });

rl.on("line", (line: string) => {
  const n = parseInt(line);
  const out: number[] = [];

  function applyStep(n: number): number {
    if (n % 2 === 0) {
      return n / 2;
    }
    return n * 3 + 1;
  }

  function applyProcess(n: number): string {
    out.push(n);
    if (n === 1) {
      return out.join(" ");
    }
    return applyProcess(applyStep(n));
  }

  console.log(applyProcess(n));
  rl.close();
});
